const KEY='hotelDuermeBienFinal';
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const uid=a=>a.length?Math.max(...a.map(x=>x.id))+1:1;
function seed(){if(localStorage.getItem(KEY))return;localStorage.setItem(KEY,JSON.stringify({
habitaciones:[
{id:1,numero:'201',capacidad:2,orientacion:'Norte',estado:'DISPONIBLE'},
{id:2,numero:'202',capacidad:2,orientacion:'Sur',estado:'OCUPADA'},
{id:3,numero:'305',capacidad:3,orientacion:'Sur',estado:'DISPONIBLE'}
],
huespedes:[{id:1,nombre:'Huésped de prueba'}],
reservas:[],
estadias:[]
}))}
function db(){seed();return JSON.parse(localStorage.getItem(KEY))}
function save(x){localStorage.setItem(KEY,JSON.stringify(x))}
function esc(v=''){return String(v).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}
function message(id,text,ok=true){const e=$(id);e.textContent=text;e.className='message '+(ok?'ok':'error')}
function setView(name){$$('.view').forEach(v=>v.classList.remove('active'));$$('.nav-btn').forEach(b=>b.classList.remove('active'));$('#view-'+name).classList.add('active');$('.nav-btn[data-view="'+name+'"]').classList.add('active');renderAll()}
$$('.nav-btn').forEach(b=>b.addEventListener('click',()=>setView(b.dataset.view)));
$('#resetDemo').addEventListener('click',()=>{localStorage.removeItem(KEY);seed();renderAll();setView('reservas')});

function roomCard(r,selectable=false){
return '<div class="room-row"><div><strong>Habitación '+esc(r.numero)+'</strong><span class="small">Capacidad: '+r.capacidad+' · Orientación: '+esc(r.orientacion)+'</span></div>'+
(selectable?'<button type="button" data-select-room="'+r.id+'">Seleccionar</button>':'<span class="status '+(r.estado==='OCUPADA'?'occupied':'')+'">'+esc(r.estado)+'</span>')+'</div>'}

function renderHome(){
 const d=db(),disp=d.habitaciones.filter(x=>x.estado==='DISPONIBLE').length,ocup=d.habitaciones.filter(x=>x.estado==='OCUPADA').length;
 $('#statDisponibles').textContent=disp;$('#statOcupadas').textContent=ocup;$('#statReservas').textContent=d.reservas.length;$('#statHuespedes').textContent=d.huespedes.length;
 $('#homeRooms').innerHTML=d.habitaciones.map(r=>roomCard(r)).join('');
}
function renderRooms(){
 const d=db();$('#roomsList').innerHTML=d.habitaciones.map(r=>roomCard(r)).join('');
}
$('#roomForm').addEventListener('submit',e=>{e.preventDefault();const d=db(),num=$('#roomNumber').value.trim();if(d.habitaciones.some(r=>r.numero===num))return message('#roomMessage','Ese número ya existe.',false);d.habitaciones.push({id:uid(d.habitaciones),numero:num,capacidad:+$('#roomCapacity').value,orientacion:$('#roomOrientation').value,estado:'DISPONIBLE'});save(d);e.target.reset();message('#roomMessage','Habitación guardada.');renderAll()});

function renderGuests(){
 const d=db();$('#guestsList').innerHTML=d.huespedes.map(h=>'<div class="data-row"><div><strong>'+esc(h.nombre)+'</strong><span class="small">ID '+h.id+'</span></div></div>').join('');
}
$('#guestForm').addEventListener('submit',e=>{e.preventDefault();const d=db(),name=$('#guestName').value.trim();if(!name)return message('#guestMessage','Ingrese un nombre.',false);d.huespedes.push({id:uid(d.huespedes),nombre:name});save(d);e.target.reset();message('#guestMessage','Huésped guardado.');renderAll()});

function availableForDates(entry,exit){
 const d=db();
 return d.habitaciones.filter(room=>{
   if(room.estado==='OCUPADA') return false;
   return !d.reservas.some(r=>r.habitacionId===room.id && r.estado!=='FINALIZADA' && entry<r.salida && exit>r.entrada);
 });
}
function renderAvailable(entry=$('#searchEntry').value,exit=$('#searchExit').value){
 const rooms=entry&&exit&&exit>entry?availableForDates(entry,exit):db().habitaciones.filter(r=>r.estado==='DISPONIBLE');
 $('#availableRooms').innerHTML=rooms.length?rooms.map(r=>roomCard(r,true)).join(''):'<div class="empty">No hay habitaciones disponibles para esas fechas.</div>';
 $$('[data-select-room]').forEach(b=>b.addEventListener('click',()=>{
   const d=db(),room=d.habitaciones.find(r=>r.id===+b.dataset.selectRoom);
   $('#reservationRoom').value=room.id;$('#reservationRoomLabel').value='Habitación '+room.numero;
   if($('#searchEntry').value)$('#reservationEntry').value=$('#searchEntry').value;
   if($('#searchExit').value)$('#reservationExit').value=$('#searchExit').value;
   message('#reservationMessage','Habitación '+room.numero+' seleccionada.');
 }));
}
$('#availabilityForm').addEventListener('submit',e=>{e.preventDefault();const a=$('#searchEntry').value,b=$('#searchExit').value;if(!a||!b||b<=a)return message('#availabilityMessage','La fecha de salida debe ser posterior a la entrada.',false);renderAvailable(a,b);message('#availabilityMessage','Disponibilidad actualizada.');});

function renderReservations(){
 const d=db();
 $('#reservationGuest').innerHTML=d.huespedes.map(h=>'<option value="'+h.id+'">'+esc(h.nombre)+'</option>').join('');
 $('#reservationsList').innerHTML=d.reservas.length?d.reservas.map(r=>{const h=d.huespedes.find(x=>x.id===r.huespedId),room=d.habitaciones.find(x=>x.id===r.habitacionId);return '<div class="data-row"><div><strong>#'+r.id+' · '+esc(h?.nombre||'—')+' · Hab. '+esc(room?.numero||'—')+'</strong><span class="small">'+esc(r.entrada)+' → '+esc(r.salida)+' · '+r.cantidad+' huésped(es)</span></div><span class="status">'+esc(r.estado)+'</span></div>'}).join(''):'<div class="empty">Aún no hay reservas.</div>';
}
$('#reservationForm').addEventListener('submit',e=>{e.preventDefault();const d=db(),hid=+$('#reservationGuest').value,rid=+$('#reservationRoom').value,entry=$('#reservationEntry').value,exit=$('#reservationExit').value,count=+$('#reservationCount').value,room=d.habitaciones.find(r=>r.id===rid);
 if(!room)return message('#reservationMessage','Primero seleccione una habitación.',false);
 if(!entry||!exit||exit<=entry)return message('#reservationMessage','Revise las fechas.',false);
 if(count<1||count>room.capacidad)return message('#reservationMessage','La cantidad supera la capacidad de la habitación.',false);
 if(!availableForDates(entry,exit).some(r=>r.id===rid))return message('#reservationMessage','Esa habitación ya no está disponible para esas fechas.',false);
 d.reservas.push({id:uid(d.reservas),huespedId:hid,habitacionId:rid,entrada:entry,salida:exit,cantidad:count,estado:'REGISTRADA'});save(d);
 $('#reservationRoom').value='';$('#reservationRoomLabel').value='';e.target.reset();message('#reservationMessage','Reserva guardada correctamente.');renderAll();
});

function renderCheckin(){
 const d=db(),eligible=d.reservas.filter(r=>r.estado==='REGISTRADA'&&d.habitaciones.find(x=>x.id===r.habitacionId)?.estado==='DISPONIBLE');
 $('#checkinReservation').innerHTML=eligible.length?eligible.map(r=>{const h=d.huespedes.find(x=>x.id===r.huespedId),room=d.habitaciones.find(x=>x.id===r.habitacionId);return '<option value="'+r.id+'">#'+r.id+' · '+esc(h?.nombre||'—')+' · Hab. '+esc(room?.numero||'—')+'</option>'}).join(''):'<option value="">Sin reservas disponibles</option>';
 const active=d.estadias.filter(s=>s.estado==='ACTIVA');$('#activeStays').innerHTML=active.length?active.map(s=>{const room=d.habitaciones.find(x=>x.id===s.habitacionId),h=d.huespedes.find(x=>x.id===s.huespedId);return '<div class="data-row"><div><strong>'+esc(h?.nombre||'—')+' · Hab. '+esc(room?.numero||'—')+'</strong><span class="small">Estadía activa</span></div></div>'}).join(''):'<div class="empty">No hay estadías activas.</div>';
}
$('#checkinForm').addEventListener('submit',e=>{e.preventDefault();const d=db(),r=d.reservas.find(x=>x.id===+$('#checkinReservation').value);if(!r)return message('#checkinMessage','Seleccione una reserva.',false);const room=d.habitaciones.find(x=>x.id===r.habitacionId);if(!room||room.estado!=='DISPONIBLE')return message('#checkinMessage','La habitación no está disponible.',false);room.estado='OCUPADA';r.estado='CHECKIN';d.estadias.push({id:uid(d.estadias),reservaId:r.id,huespedId:r.huespedId,habitacionId:r.habitacionId,cantidad:r.cantidad,checkin:new Date().toISOString(),checkout:null,total:null,estado:'ACTIVA'});save(d);message('#checkinMessage','Check-in registrado. Habitación ocupada.');renderAll()});

function renderCheckout(){
 const d=db(),active=d.estadias.filter(s=>s.estado==='ACTIVA');
 $('#checkoutStay').innerHTML=active.length?active.map(s=>{const room=d.habitaciones.find(x=>x.id===s.habitacionId),h=d.huespedes.find(x=>x.id===s.huespedId);return '<option value="'+s.id+'">'+esc(h?.nombre||'—')+' · Hab. '+esc(room?.numero||'—')+'</option>'}).join(''):'<option value="">Sin estadías activas</option>';
 const fin=d.estadias.filter(s=>s.estado==='FINALIZADA');$('#finishedStays').innerHTML=fin.length?fin.map(s=>'<div class="data-row"><div><strong>Estadía #'+s.id+'</strong><span class="small">Total: $'+Number(s.total||0).toLocaleString('es-CL')+'</span></div></div>').join(''):'<div class="empty">Sin check-outs registrados.</div>';calcCheckout();
}
function calcCheckout(){const d=db(),s=d.estadias.find(x=>x.id===+$('#checkoutStay').value),cost=+$('#costPerGuest').value||0;$('#checkoutTotal').value=s?'$'+(s.cantidad*cost).toLocaleString('es-CL'):'$0'}
$('#checkoutStay').addEventListener('change',calcCheckout);$('#costPerGuest').addEventListener('input',calcCheckout);
$('#checkoutForm').addEventListener('submit',e=>{e.preventDefault();const d=db(),s=d.estadias.find(x=>x.id===+$('#checkoutStay').value),cost=+$('#costPerGuest').value||0;if(!s)return message('#checkoutMessage','Seleccione una estadía.',false);s.total=s.cantidad*cost;s.checkout=new Date().toISOString();s.estado='FINALIZADA';const room=d.habitaciones.find(x=>x.id===s.habitacionId);if(room)room.estado='DISPONIBLE';const r=d.reservas.find(x=>x.id===s.reservaId);if(r)r.estado='FINALIZADA';save(d);message('#checkoutMessage','Check-out registrado. Habitación liberada.');renderAll()});

function renderReports(){
 const d=db();$('#reportOccupied').textContent=d.habitaciones.filter(x=>x.estado==='OCUPADA').length;$('#reportAvailable').textContent=d.habitaciones.filter(x=>x.estado==='DISPONIBLE').length;$('#reportReservations').textContent=d.reservas.length;
 $('#reportList').innerHTML=d.reservas.length?d.reservas.map(r=>{const room=d.habitaciones.find(x=>x.id===r.habitacionId);return '<div class="data-row"><div><strong>Reserva #'+r.id+' · Hab. '+esc(room?.numero||'—')+'</strong><span class="small">'+esc(r.entrada)+' → '+esc(r.salida)+'</span></div><span class="status">'+esc(r.estado)+'</span></div>'}).join(''):'<div class="empty">Sin reservas.</div>';
}
function renderAll(){seed();renderHome();renderRooms();renderGuests();renderReservations();renderAvailable();renderCheckin();renderCheckout();renderReports()}
renderAll();
