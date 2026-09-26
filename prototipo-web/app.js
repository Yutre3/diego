const KEY='hotelDuermeBienProfesor';
const SESSION='hotelDuermeBienSesion';
const qs=s=>document.querySelector(s), qsa=s=>[...document.querySelectorAll(s)];
const uid=arr=>arr.length?Math.max(...arr.map(x=>x.id))+1:1;

function seed(){
  if(localStorage.getItem(KEY)) return;
  const data={
    usuarios:[
      {id:1,nombre:'Administrador',usuario:'admin',clave:'admin123',rol:'ADMINISTRADOR',activo:true},
      {id:2,nombre:'Encargado de hotel',usuario:'encargado',clave:'hotel123',rol:'ENCARGADO',activo:true}
    ],
    habitaciones:[
      {id:1,numero:'201',capacidad:2,orientacion:'Norte',estado:'DISPONIBLE'},
      {id:2,numero:'202',capacidad:2,orientacion:'Sur',estado:'OCUPADA'},
      {id:3,numero:'305',capacidad:3,orientacion:'Sur',estado:'DISPONIBLE'}
    ],
    huespedes:[{id:1,nombre:'Huésped de prueba'}],
    reservas:[],
    estadias:[]
  };
  localStorage.setItem(KEY,JSON.stringify(data));
}
function db(){seed();return JSON.parse(localStorage.getItem(KEY))}
function save(data){localStorage.setItem(KEY,JSON.stringify(data))}
function session(){try{return JSON.parse(localStorage.getItem(SESSION))}catch{return null}}
function setSession(v){localStorage.setItem(SESSION,JSON.stringify(v))}
function logout(){localStorage.removeItem(SESSION);location.href='login.html'}
function esc(v=''){return String(v).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}
function msg(sel,text,ok){const el=qs(sel);if(!el)return;el.textContent=text;el.className='msg '+(ok?'ok':'error')}
function badge(text){const cls=['DISPONIBLE','REGISTRADA','ACTIVA'].includes(text)?'ok':['OCUPADA'].includes(text)?'warn':'danger';return '<span class="badge '+cls+'">'+esc(text)+'</span>'}
function fill(sel,arr,value,label){const el=qs(sel);if(!el)return;el.innerHTML=arr.length?arr.map(x=>'<option value="'+value(x)+'">'+esc(label(x))+'</option>').join(''):'<option value="">Sin opciones disponibles</option>'}
function authGuard(){
  const page=document.body.dataset.page;
  if(['login','evaluacion1','evaluacion2','ayuda'].includes(page)) return;
  const s=session();
  if(!s){location.href='login.html';return}
  const who=qs('#who');if(who)who.textContent=s.nombre+' · '+s.rol;
}
function nav(){
  const page=document.body.dataset.page;
  qsa('.sidebar a').forEach(a=>a.classList.toggle('active',a.dataset.page===page));
  const input=qs('#globalSearch');
  if(input) input.addEventListener('keydown',e=>{
    if(e.key!=='Enter') return;
    const v=input.value.toLowerCase();
    const routes=[
      [['evaluacion 1','evaluación 1','ieee','requerimiento'],'evaluacion1.html'],
      [['evaluacion 2','evaluación 2','uml','modelado'],'evaluacion2.html'],
      [['habit'],'habitaciones.html'],[['huesp','pasaj'],'huespedes.html'],[['reserv'],'reservas.html'],
      [['check-in','checkin','entrada'],'checkin.html'],[['check-out','checkout','salida'],'checkout.html'],
      [['inform','ocup'],'informes.html'],[['usuario','rol'],'usuarios.html'],[['material','profesor','ayuda'],'ayuda.html']
    ];
    const hit=routes.find(([keys])=>keys.some(k=>v.includes(k)));if(hit)location.href=hit[1];
  });
}
function resetDemo(){localStorage.removeItem(KEY);localStorage.removeItem(SESSION);seed();location.href='login.html'}

function loginInit(){
  qs('#loginForm')?.addEventListener('submit',e=>{
    e.preventDefault();
    const data=db(),u=qs('#usuario').value.trim(),p=qs('#clave').value;
    const found=data.usuarios.find(x=>x.activo&&x.usuario===u&&x.clave===p);
    if(!found) return msg('#loginMsg','Usuario o clave de demostración incorrectos.',false);
    setSession({id:found.id,nombre:found.nombre,rol:found.rol});location.href='index.html';
  });
}
function inicio(){
  const d=db(),disp=d.habitaciones.filter(x=>x.estado==='DISPONIBLE').length,ocup=d.habitaciones.filter(x=>x.estado==='OCUPADA').length;
  qs('#mDisp').textContent=disp;qs('#mOcup').textContent=ocup;qs('#mRes').textContent=d.reservas.length;qs('#mHue').textContent=d.huespedes.length;
  qs('#roomSummary').innerHTML=d.habitaciones.map(r=>'<tr><td>'+esc(r.numero)+'</td><td>'+r.capacidad+'</td><td>'+esc(r.orientacion)+'</td><td>'+badge(r.estado)+'</td></tr>').join('');
}
function habitaciones(){
  const d=db();
  qs('#roomBody').innerHTML=d.habitaciones.map(r=>'<tr><td>'+esc(r.numero)+'</td><td>'+r.capacidad+'</td><td>'+esc(r.orientacion)+'</td><td>'+badge(r.estado)+'</td></tr>').join('');
  qs('#roomForm')?.addEventListener('submit',e=>{
    e.preventDefault();const y=db(),num=qs('#numero').value.trim();
    if(y.habitaciones.some(r=>r.numero===num)) return msg('#roomMsg','Ese identificador de habitación ya está registrado.',false);
    y.habitaciones.push({id:uid(y.habitaciones),numero:num,capacidad:+qs('#capacidad').value,orientacion:qs('#orientacion').value,estado:'DISPONIBLE'});
    save(y);e.target.reset();msg('#roomMsg','Habitación registrada.',true);setTimeout(()=>location.reload(),350);
  },{once:true});
}
function huespedes(){
  const d=db();
  qs('#guestBody').innerHTML=d.huespedes.map(h=>'<tr><td>#'+h.id+'</td><td>'+esc(h.nombre)+'</td></tr>').join('');
  qs('#guestForm')?.addEventListener('submit',e=>{
    e.preventDefault();const y=db(),nombre=qs('#nombreHuesped').value.trim();
    if(!nombre) return msg('#guestMsg','Ingrese un nombre para la demostración.',false);
    y.huespedes.push({id:uid(y.huespedes),nombre});save(y);e.target.reset();msg('#guestMsg','Huésped registrado.',true);setTimeout(()=>location.reload(),350);
  },{once:true});
}
function reservas(){
  const d=db();
  fill('#rHuesped',d.huespedes,x=>x.id,x=>x.nombre);
  fill('#rHabitacion',d.habitaciones.filter(x=>x.estado==='DISPONIBLE'),x=>x.id,x=>'Hab. '+x.numero+' · capacidad '+x.capacidad+' · '+x.orientacion);
  qs('#reservationBody').innerHTML=d.reservas.map(r=>{
    const h=d.huespedes.find(x=>x.id===r.huespedId),room=d.habitaciones.find(x=>x.id===r.habitacionId);
    return '<tr><td>#'+r.id+'</td><td>'+esc(h?.nombre||'—')+'</td><td>'+esc(room?.numero||'—')+'</td><td>'+esc(r.entrada)+' → '+esc(r.salida)+'</td><td>'+r.cantidad+'</td><td>'+badge(r.estado)+'</td></tr>';
  }).join('')||'<tr><td colspan="6" class="empty">Aún no hay reservas.</td></tr>';
  qs('#reservationForm')?.addEventListener('submit',e=>{
    e.preventDefault();const y=db(),hid=+qs('#rHuesped').value,rid=+qs('#rHabitacion').value,ent=qs('#rEntrada').value,sal=qs('#rSalida').value,cant=+qs('#rCantidad').value,room=y.habitaciones.find(x=>x.id===rid);
    if(!room) return msg('#reservationMsg','Seleccione una habitación disponible.',false);
    if(!ent||!sal||sal<=ent) return msg('#reservationMsg','La fecha de salida debe ser posterior a la entrada.',false);
    if(cant<1||cant>room.capacidad) return msg('#reservationMsg','La cantidad de huéspedes debe respetar la capacidad de la habitación.',false);
    y.reservas.push({id:uid(y.reservas),huespedId:hid,habitacionId:rid,entrada:ent,salida:sal,cantidad:cant,estado:'REGISTRADA'});save(y);msg('#reservationMsg','Reserva registrada.',true);e.target.reset();setTimeout(()=>location.reload(),350);
  },{once:true});
}
function checkin(){
  const d=db();
  fill('#ciHuesped',d.huespedes,x=>x.id,x=>x.nombre);
  fill('#ciHabitacion',d.habitaciones.filter(x=>x.estado==='DISPONIBLE'),x=>x.id,x=>'Hab. '+x.numero+' · capacidad '+x.capacidad+' · '+x.orientacion);
  qs('#checkinForm')?.addEventListener('submit',e=>{
    e.preventDefault();const y=db(),hid=+qs('#ciHuesped').value,rid=+qs('#ciHabitacion').value,cant=+qs('#ciCantidad').value,room=y.habitaciones.find(x=>x.id===rid);
    if(!room||room.estado!=='DISPONIBLE') return msg('#ciMsg','La habitación seleccionada no está disponible.',false);
    if(cant<1||cant>room.capacidad) return msg('#ciMsg','La cantidad de huéspedes supera la capacidad.',false);
    room.estado='OCUPADA';y.estadias.push({id:uid(y.estadias),huespedId:hid,habitacionId:rid,cantidad:cant,checkin:new Date().toISOString(),checkout:null,costoPorPasajero:null,total:null,estado:'ACTIVA'});save(y);msg('#ciMsg','Check-in registrado y habitación asignada.',true);setTimeout(()=>location.reload(),450);
  },{once:true});
}
function checkout(){
  const d=db(),active=d.estadias.filter(x=>x.estado==='ACTIVA');
  fill('#coEstadia',active,x=>x.id,x=>{const h=d.huespedes.find(a=>a.id===x.huespedId),r=d.habitaciones.find(a=>a.id===x.habitacionId);return '#'+x.id+' · '+(h?.nombre||'Huésped')+' · Hab. '+(r?.numero||'—')});
  const calc=()=>{const st=d.estadias.find(x=>x.id===+qs('#coEstadia').value),valor=+qs('#coCostoPasajero').value||0;if(qs('#coTotal'))qs('#coTotal').value=st?Math.round(st.cantidad*valor):0};
  ['#coEstadia','#coCostoPasajero'].forEach(s=>qs(s)?.addEventListener('input',calc));calc();
  qs('#checkoutForm')?.addEventListener('submit',e=>{
    e.preventDefault();const y=db(),st=y.estadias.find(x=>x.id===+qs('#coEstadia').value),valor=+qs('#coCostoPasajero').value||0;
    if(!st) return msg('#coMsg','No hay una estadía activa seleccionada.',false);
    st.costoPorPasajero=valor;st.total=st.cantidad*valor;st.checkout=new Date().toISOString();st.estado='FINALIZADA';
    const room=y.habitaciones.find(x=>x.id===st.habitacionId);if(room)room.estado='DISPONIBLE';save(y);msg('#coMsg','Check-out registrado y habitación liberada.',true);setTimeout(()=>location.reload(),450);
  },{once:true});
}
function usuarios(){
  const d=db();qs('#userBody').innerHTML=d.usuarios.map(u=>'<tr><td>'+esc(u.nombre)+'</td><td>'+esc(u.usuario)+'</td><td>'+esc(u.rol)+'</td><td>'+(u.activo?badge('ACTIVO'):'INACTIVO')+'</td></tr>').join('');
  qs('#userForm')?.addEventListener('submit',e=>{
    e.preventDefault();const y=db(),usuario=qs('#uUsuario').value.trim();if(y.usuarios.some(x=>x.usuario===usuario))return msg('#userMsg','Ese usuario ya existe.',false);
    y.usuarios.push({id:uid(y.usuarios),nombre:qs('#uNombre').value.trim(),usuario,clave:qs('#uClave').value,rol:qs('#uRol').value,activo:true});save(y);msg('#userMsg','Usuario de demostración registrado.',true);e.target.reset();setTimeout(()=>location.reload(),350);
  },{once:true});
}
function informes(){
  const d=db(),ocupadas=d.habitaciones.filter(x=>x.estado==='OCUPADA').length,disponibles=d.habitaciones.filter(x=>x.estado==='DISPONIBLE').length;
  qs('#iOcupadas').textContent=ocupadas;qs('#iDisponibles').textContent=disponibles;qs('#iReservas').textContent=d.reservas.length;
  qs('#reportReservations').innerHTML=d.reservas.map(r=>{const h=d.huespedes.find(x=>x.id===r.huespedId),room=d.habitaciones.find(x=>x.id===r.habitacionId);return '<tr><td>#'+r.id+'</td><td>'+esc(h?.nombre||'—')+'</td><td>'+esc(room?.numero||'—')+'</td><td>'+esc(r.entrada)+' → '+esc(r.salida)+'</td><td>'+badge(r.estado)+'</td></tr>'}).join('')||'<tr><td colspan="5" class="empty">Sin reservas registradas.</td></tr>';
}
document.addEventListener('DOMContentLoaded',()=>{seed();authGuard();nav();const p=document.body.dataset.page;({login:loginInit,inicio,habitaciones,huespedes,reservas,checkin,checkout,usuarios,informes}[p]||(()=>{}))()});
