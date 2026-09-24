const rooms=[
{n:"201",cap:2,ori:"Norte",estado:"DISPONIBLE"},
{n:"202",cap:2,ori:"Sur",estado:"OCUPADA"},
{n:"305",cap:3,ori:"Sur",estado:"DISPONIBLE"},
{n:"401",cap:1,ori:"Este",estado:"DISPONIBLE"}
];
const reservas=[];
const $=id=>document.getElementById(id);

function show(id){
  document.querySelectorAll(".page").forEach(x=>x.classList.remove("active"));
  document.querySelectorAll("#menu button").forEach(x=>x.classList.toggle("active",x.dataset.page===id));
  $(id).classList.add("active");
  render();
}
document.querySelectorAll("#menu button").forEach(b=>b.onclick=()=>show(b.dataset.page));

function render(){
  $("tablaHabitaciones").innerHTML=rooms.map(r=>`<tr><td>${r.n}</td><td>${r.cap}</td><td>${r.ori}</td><td>${r.estado}</td></tr>`).join("");
  const libres=rooms.filter(r=>r.estado==="DISPONIBLE");
  const ocupadas=rooms.filter(r=>r.estado==="OCUPADA");
  $("disp").textContent=libres.length;
  $("ocup").textContent=ocupadas.length;
  $("res").textContent=reservas.length;
  const opts=libres.map(r=>`<option value="${r.n}">${r.n} · cap. ${r.cap}</option>`).join("");
  $("rHabitacion").innerHTML=opts;
  $("cHabitacion").innerHTML=opts;
  $("oHabitacion").innerHTML=ocupadas.map(r=>`<option value="${r.n}">${r.n}</option>`).join("");
  $("listaReservas").innerHTML=reservas.map(r=>`<li>${r.huesped} · Hab. ${r.habitacion} · ${r.entrada} a ${r.salida}</li>`).join("");
  $("informeOcupacion").textContent=`${ocupadas.length} habitación(es) ocupada(s) y ${libres.length} disponible(s).`;
  $("informeReservas").textContent=`${reservas.length} reserva(s) registrada(s) en esta sesión.`;
}

$("guardarHuesped").onclick=()=>{
  const vals=[$("hDoc").value,$("hNombre").value,$("hApellido").value];
  $("msgHuesped").className="msg "+(vals.every(Boolean)?"ok":"error");
  $("msgHuesped").textContent=vals.every(Boolean)?"Huésped registrado en la simulación.":"Complete documento, nombre y apellido.";
};

$("guardarReserva").onclick=()=>{
  const h=$("rHuesped").value.trim(), hab=$("rHabitacion").value, e=$("rEntrada").value, s=$("rSalida").value;
  if(!h||!hab||!e||!s||s<=e){$("msgReserva").className="msg error";$("msgReserva").textContent="Revise huésped, habitación y fechas.";return}
  reservas.push({huesped:h,habitacion:hab,entrada:e,salida:s});
  $("msgReserva").className="msg ok";$("msgReserva").textContent="Reserva registrada en la simulación.";render();
};

$("hacerCheckin").onclick=()=>{
  const h=$("cHuesped").value.trim(), n=$("cHabitacion").value;
  const r=rooms.find(x=>x.n===n);
  if(!h||!r){$("msgCheckin").className="msg error";$("msgCheckin").textContent="Indique huésped y habitación disponible.";return}
  r.estado="OCUPADA";$("msgCheckin").className="msg ok";$("msgCheckin").textContent=`Check-in simulado: ${h}, habitación ${n}.`;render();
};

$("hacerCheckout").onclick=()=>{
  const n=$("oHabitacion").value, r=rooms.find(x=>x.n===n);
  if(!r){$("msgCheckout").className="msg error";$("msgCheckout").textContent="No hay habitación ocupada seleccionada.";return}
  r.estado="DISPONIBLE";$("msgCheckout").className="msg ok";$("msgCheckout").textContent=`Check-out simulado. Habitación ${n} liberada.`;render();
};

render();