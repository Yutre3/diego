
const KEY='hotelDuermeBienDB';
const SESSION='hotelDuermeBienSession';
const qs=(s)=>document.querySelector(s), qsa=(s)=>[...document.querySelectorAll(s)];
const uid=(arr)=>arr.length?Math.max(...arr.map(x=>x.id))+1:1;
function seed(){
  if(localStorage.getItem(KEY)) return;
  const db={
    habitaciones:[
      {id:1,numero:'201',capacidad:2,orientacion:'Norte',estado:'DISPONIBLE'},
      {id:2,numero:'202',capacidad:2,orientacion:'Sur',estado:'OCUPADA'},
      {id:3,numero:'305',capacidad:3,orientacion:'Sur',estado:'DISPONIBLE'},
      {id:4,numero:'401',capacidad:1,orientacion:'Este',estado:'DISPONIBLE'}
    ],
    huespedes:[{id:1,documento:'11.111.111-1',nombre:'Ana',apellido:'Pérez',telefono:'912345678',email:'ana@demo.cl'}],
    reservas:[{id:1,huespedId:1,habitacionId:1,pasajeros:1,entrada:'2026-09-28',salida:'2026-09-30',estado:'CONFIRMADA'}],
    estadias:[]
  };
  localStorage.setItem(KEY,JSON.stringify(db));
}
function db(){seed();return JSON.parse(localStorage.getItem(KEY))}
function save(x){localStorage.setItem(KEY,JSON.stringify(x));renderCommon()}
function session(){try{return JSON.parse(localStorage.getItem(SESSION))}catch{return null}}
function setSession(x){localStorage.setItem(SESSION,JSON.stringify(x))}
function logout(){localStorage.removeItem(SESSION);location.href='login.html'}
function esc(s=''){return String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}
function badge(s){const c=s==='DISPONIBLE'||s==='CONFIRMADA'||s==='ACTIVA'?'ok':s==='OCUPADA'||s==='CHECKIN'?'warn':'danger';return '<span class="badge '+c+'">'+esc(s)+'</span>'}
function navActive(){const p=document.body.dataset.page;qsa('.sidebar a').forEach(a=>a.classList.toggle('active',a.dataset.page===p))}
function authGuard(){
  const page=document.body.dataset.page;
  if(page==='login') return;
  if(!session()) location.href='login.html';
  const who=qs('#who'); if(who) who.textContent=(session()?.nombre||'Usuario')+' · '+(session()?.rol||'');
}
function searchNav(){
  const i=qs('#globalSearch'); if(!i) return;
  i.addEventListener('keydown',e=>{if(e.key!=='Enter')return;const v=i.value.toLowerCase();const map=[
    [['habit','pieza'],'habitaciones.html'],[['huesp','pasaj'],'huespedes.html'],[['reserv'],'reservas.html'],[['check-in','checkin','entrada'],'checkin.html'],[['check-out','checkout','salida'],'checkout.html'],[['informe','reporte','ocup'],'informes.html'],[['ayuda','pregunta'],'ayuda.html']
  ];const hit=map.find(([ks])=>ks.some(k=>v.includes(k)));if(hit)location.href=hit[1];});
}
function renderCommon(){navActive();searchNav()}
function resetDemo(){localStorage.removeItem(KEY);seed();location.reload()}

function loginInit(){
  qs('#loginForm')?.addEventListener('submit',e=>{
    e.preventDefault(); const u=qs('#usuario').value.trim(); const p=qs('#clave').value;
    const users={admin:{clave:'admin123',nombre:'Administrador',rol:'ADMINISTRADOR'},encargado:{clave:'hotel123',nombre:'Encargado',rol:'ENCARGADO'}};
    if(users[u]&&users[u].clave===p){setSession({usuario:u,nombre:users[u].nombre,rol:users[u].rol});location.href='index.html'}
    else{const m=qs('#loginMsg');m.textContent='Usuario o clave de demostración incorrectos.';m.className='msg error'}
  });
}
function dashboard(){
  const x=db(), disp=x.habitaciones.filter(r=>r.estado==='DISPONIBLE').length, ocup=x.habitaciones.filter(r=>r.estado==='OCUPADA').length;
  qs('#mDisp').textContent=disp;qs('#mOcup').textContent=ocup;qs('#mRes').textContent=x.reservas.length;qs('#mHue').textContent=x.huespedes.length;
  qs('#roomSummary').innerHTML=x.habitaciones.map(r=>'<tr><td>'+esc(r.numero)+'</td><td>'+r.capacidad+'</td><td>'+esc(r.orientacion)+'</td><td>'+badge(r.estado)+'</td></tr>').join('');
}
function habitaciones(){
  const x=db();
  qs('#roomBody').innerHTML=x.habitaciones.map(r=>'<tr><td>'+esc(r.numero)+'</td><td>'+r.capacidad+'</td><td>'+esc(r.orientacion)+'</td><td>'+badge(r.estado)+'</td><td><button class="secondary" onclick="toggleRoom('+r.id+')">'+(r.estado==='FUERA_SERVICIO'?'Habilitar':'Fuera de servicio')+'</button></td></tr>').join('');
  qs('#roomForm')?.addEventListener('submit',e=>{e.preventDefault();const y=db(), n=qs('#numero').value.trim();if(y.habitaciones.some(r=>r.numero===n))return msg('#roomMsg','La habitación ya existe.',false);y.habitaciones.push({id:uid(y.habitaciones),numero:n,capacidad:+qs('#capacidad').value,orientacion:qs('#orientacion').value,estado:'DISPONIBLE'});save(y);e.target.reset();msg('#roomMsg','Habitación registrada.',true);habitaciones()},{once:true});
}
function toggleRoom(id){const x=db(),r=x.habitaciones.find(a=>a.id===id);if(r.estado==='OCUPADA')return alert('Una habitación ocupada no puede ponerse fuera de servicio.');r.estado=r.estado==='FUERA_SERVICIO'?'DISPONIBLE':'FUERA_SERVICIO';save(x);location.reload()}
function huespedes(){
  const x=db();qs('#guestBody').innerHTML=x.huespedes.map(h=>'<tr><td>'+esc(h.documento)+'</td><td>'+esc(h.nombre+' '+h.apellido)+'</td><td>'+esc(h.telefono||'—')+'</td><td>'+esc(h.email||'—')+'</td></tr>').join('');
  qs('#guestForm')?.addEventListener('submit',e=>{e.preventDefault();const y=db(),doc=qs('#documento').value.trim();if(y.huespedes.some(h=>h.documento===doc))return msg('#guestMsg','Ese documento ya está registrado.',false);y.huespedes.push({id:uid(y.huespedes),documento:doc,nombre:qs('#nombre').value.trim(),apellido:qs('#apellido').value.trim(),telefono:qs('#telefono').value.trim(),email:qs('#email').value.trim()});save(y);e.target.reset();msg('#guestMsg','Huésped registrado.',true);huespedes()},{once:true});
}
function reservas(){
  const x=db();fill('#rHuesped',x.huespedes,h=>h.id,h=>h.nombre+' '+h.apellido);fill('#rHabitacion',x.habitaciones.filter(r=>r.estado==='DISPONIBLE'),r=>r.id,r=>'Hab. '+r.numero+' · cap. '+r.capacidad);
  qs('#reservationBody').innerHTML=x.reservas.map(r=>{const h=x.huespedes.find(a=>a.id===r.huespedId),room=x.habitaciones.find(a=>a.id===r.habitacionId);return '<tr><td>#'+r.id+'</td><td>'+esc(h?.nombre+' '+h?.apellido)+'</td><td>'+esc(room?.numero||'—')+'</td><td>'+r.entrada+' → '+r.salida+'</td><td>'+r.pasajeros+'</td><td>'+badge(r.estado)+'</td></tr>'}).join('');
  qs('#reservationForm')?.addEventListener('submit',e=>{e.preventDefault();const y=db(),hid=+qs('#rHuesped').value,rid=+qs('#rHabitacion').value,ent=qs('#rEntrada').value,sal=qs('#rSalida').value,pas=+qs('#rPasajeros').value,room=y.habitaciones.find(r=>r.id===rid);if(!ent||!sal||sal<=ent)return msg('#reservationMsg','La fecha de salida debe ser posterior a la entrada.',false);if(!room||pas>room.capacidad)return msg('#reservationMsg','La cantidad de pasajeros supera la capacidad.',false);y.reservas.push({id:uid(y.reservas),huespedId:hid,habitacionId:rid,pasajeros:pas,entrada:ent,salida:sal,estado:'CONFIRMADA'});save(y);msg('#reservationMsg','Reserva registrada.',true);e.target.reset();setTimeout(()=>location.reload(),400)},{once:true});
}
function checkin(){
  const x=db(), valid=x.reservas.filter(r=>r.estado==='CONFIRMADA'&&x.habitaciones.find(h=>h.id===r.habitacionId)?.estado==='DISPONIBLE');
  fill('#ciReserva',valid,r=>r.id,r=>{const h=x.huespedes.find(a=>a.id===r.huespedId),room=x.habitaciones.find(a=>a.id===r.habitacionId);return '#'+r.id+' · '+h.nombre+' '+h.apellido+' · Hab. '+room.numero});
  qs('#checkinForm')?.addEventListener('submit',e=>{e.preventDefault();const y=db(),id=+qs('#ciReserva').value,r=y.reservas.find(a=>a.id===id);if(!r)return msg('#ciMsg','No hay una reserva válida seleccionada.',false);const room=y.habitaciones.find(a=>a.id===r.habitacionId);if(room.estado!=='DISPONIBLE')return msg('#ciMsg','La habitación ya no está disponible.',false);room.estado='OCUPADA';r.estado='CHECKIN';y.estadias.push({id:uid(y.estadias),reservaId:r.id,huespedId:r.huespedId,habitacionId:r.habitacionId,pasajeros:r.pasajeros,checkin:new Date().toISOString(),checkout:null,total:null,estado:'ACTIVA'});save(y);msg('#ciMsg','Check-in registrado. La habitación quedó ocupada.',true);setTimeout(()=>location.reload(),500)},{once:true});
}
function checkout(){
  const x=db(), act=x.estadias.filter(e=>e.estado==='ACTIVA');fill('#coEstadia',act,e=>e.id,e=>{const h=x.huespedes.find(a=>a.id===e.huespedId),room=x.habitaciones.find(a=>a.id===e.habitacionId);return '#'+e.id+' · '+h.nombre+' '+h.apellido+' · Hab. '+room.numero});
  function calc(){const e=x.estadias.find(a=>a.id===+qs('#coEstadia').value),n=+qs('#coNoches').value||0,t=+qs('#coTarifa').value||0;qs('#coTotal').value=e?Math.round(e.pasajeros*n*t):0}
  ['#coEstadia','#coNoches','#coTarifa'].forEach(s=>qs(s)?.addEventListener('input',calc));calc();
  qs('#checkoutForm')?.addEventListener('submit',e=>{e.preventDefault();const y=db(),st=y.estadias.find(a=>a.id===+qs('#coEstadia').value);if(!st)return msg('#coMsg','No hay una estadía activa.',false);st.checkout=new Date().toISOString();st.total=+qs('#coTotal').value;st.estado='FINALIZADA';const room=y.habitaciones.find(a=>a.id===st.habitacionId);if(room)room.estado='DISPONIBLE';const r=y.reservas.find(a=>a.id===st.reservaId);if(r)r.estado='FINALIZADA';save(y);msg('#coMsg','Check-out registrado y habitación liberada.',true);setTimeout(()=>location.reload(),500)},{once:true});
}
function informes(){
  const x=db(),total=x.habitaciones.length,ocup=x.habitaciones.filter(r=>r.estado==='OCUPADA').length;qs('#iOcup').textContent=total?Math.round(ocup/total*100)+'%':'0%';qs('#iRes').textContent=x.reservas.length;qs('#iEst').textContent=x.estadias.length;qs('#iHue').textContent=x.huespedes.length;
  qs('#reportBody').innerHTML=x.estadias.map(e=>{const h=x.huespedes.find(a=>a.id===e.huespedId),r=x.habitaciones.find(a=>a.id===e.habitacionId);return '<tr><td>#'+e.id+'</td><td>'+esc(h?.nombre+' '+h?.apellido)+'</td><td>'+esc(r?.numero||'—')+'</td><td>'+badge(e.estado)+'</td><td>'+(e.total==null?'Pendiente':'$'+Number(e.total).toLocaleString('es-CL'))+'</td></tr>'}).join('')||'<tr><td colspan="5" class="empty">Sin estadías registradas.</td></tr>';
}
function fill(sel,arr,val,label){const el=qs(sel);if(!el)return;el.innerHTML=arr.length?arr.map(x=>'<option value="'+val(x)+'">'+esc(label(x))+'</option>').join(''):'<option value="">Sin opciones disponibles</option>'}
function msg(sel,text,ok){const m=qs(sel);if(!m)return;m.textContent=text;m.className='msg '+(ok?'ok':'error')}
document.addEventListener('DOMContentLoaded',()=>{seed();authGuard();renderCommon();const p=document.body.dataset.page;({login:loginInit,inicio:dashboard,habitaciones,huespedes,reservas,checkin,checkout,informes}[p]||(()=>{}))()});
