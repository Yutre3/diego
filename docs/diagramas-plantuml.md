# Diagramas de casos de uso — PlantUML

El proyecto del Hotel Duerme Bien conserva **dos diagramas** para que las conexiones no se amontonen:

1. **Vista general:** actores, permisos propuestos y principales funciones.
2. **Vista detallada:** relaciones obligatorias `<<include>>` y alternativa `<<extend>>` para check-in y check-out.

Archivos fuente:
- [Casos de uso generales](../diagramas-plantuml/casos-de-uso.puml)
- [Relaciones entre casos de uso](../diagramas-plantuml/casos-de-uso-detalle.puml)

## Abrir y editar con PlantUML
- [Abrir vista general en PlantUML](https://www.plantuml.com/plantuml/uml/XPNBSjem58RtVeepTD5DoQA5X7GO9bn2mamcPCBm00VvOAi8oIF9IMcQ1-gwY-wR5-kHRH83ISfAb-zSzEkNENCUhS_NAle8byQJWb5ETaqmaAJXxnyOIKmihX4IqcHHGKmWq1aN1hapaQAb1s_0oYJr44jBmakZ8xUIEaCEXGMALM9DhkEXKSR2Xt7ngn4knTZSIvt04fMZsax6iPZGp6yKGKYDEb5r8AObvigFZVRNo7tthKHLs-zRQ-whkiUja_FEeBuflB43OsEo5VBbz6JK6UyZ8Ni5V6wrJjgT6Z1tn7hGuE2GhN5_F7m5VBTS1TKBjbkjThk6t6vLsCdKEJuTzVklOl-LNqbDVfCH6EjJKzlG9YP76HpNwrlKgx3OQKUfP1CuJvPCY8yYBptVqw6HcZ2iUmQ3gD0urm9jmbSVrjCGr01qmCjReX-lfPREMuPiiLciHD6p5Q0nutrYWtAE6tJuZQnn3NY8O6iUQ4mpjgwGJxyr6nJP8UK-S3E5tD2OQ2bu1novW1MbhgONa-jTR6YqOxSnQ4IUbIcZ3ITrcT5o8PMCCIw2HvFPpMxi1RdmC3ZMigZs3bq1tfxFThbRIeeJMqZpfrykepBXvVmGH2L_C2TI4gkcBBiUJjwbJEvBRChOOrsa5wr5AS73M_sdk92UAQEfFCDbV_0McxkS1JSbDv_DzxdmKR4WzTAmMO91eXTbORChrUHwN3Jz64Ni4MWsgokg9eNarJYeMWqBuQenYxCTJQFYm0N1xJzFGe_Far1nE_dPAvmPQJOgB8ptPWrcMTtVuUL-1M49xITOcrWk9JkTZoDG2r9eZpZa2lTym-Q3Emn343bgVXR2M4x7I4n74UaOGktz1eeB7v57nQ-17q6tAxLGUKoz7bViTkcxvz1UZob-YVmmu-qdNPXrfcXDseShgbKuur7uJ_W7)
- [Abrir vista detallada en PlantUML](https://www.plantuml.com/plantuml/uml/VLJBRXCn5DtxAwx20f18XLHeKrHLdKmQY5IHge4LOd4plfcOUEp1zlG1ueDOTu74almOrzD9SHiWgncVa_iuvuoFVK0NcagBn_361j8mQiXL14D51dxzWDnMjNK1AtuFreEZ9YYjlg3abskmTQ7MDmQyCWnvSXSeD2q210jEbSi0KZagWh96-9KoDJgiO8x5gdIsCJAtsZfuD6v_2SClkS6bCYKiK7jAa9h_YoNDmhKcYANHb3ebI5fWeyFOcl0MUPFCATG9dZbdBxk-Uo_sJmR317plgK1Fmwq1TyVPEFyBqJf9hYFj7koF1kaMMH6i-p_bVBF1FTfWxs2KPGbDAqFXkYPWBvOs0OoLB7iDUo-JGuTc5Gy7puK8Ah1GszxskRN6WeqX3-oj8-25s5H9q7WhCCuElHDJe2lPZ7Y-Z5LwW1xuMDo93xsPye4gZ9mpzFY971VgmxGcrxNemLV1TLlHe7TE63Fae5XIiUehqnRD9mabjyQpZSoHojVMg3d7Jg9icQF9x2pXPbwLXfbBdAk0RI9RMZQRl4ve4rDoHcqNIIkU9AbzsjKzFydVJVyzgMt2xQWf9qTTD3fohEUo_BrmIczLwCYpUpLFrPnrsHxtT38KtmHB2_r-56FpD1Nv17PsZjgruHKS7YfJw4RIqT46YPi-GBfTMfXP4QIhG4Oozi4hJWxGLVHj8y57aNViEE_3FhSGZ_W0C9m9cDiGR0LsqOwjxspbqfyRHPojnc2wxvsfcfu99Jb_Qg4uQO0Qbitwkwz9ylM2syRk25u1OjUjrjC_hTadZdDh2sZEOkjClB1qgprel5_p566nld5LvDCLPny1rpzvJ9eJN61CdlEKz3xcftXj_WO0)
- Sitio de referencia: https://plantuml.com/es/use-case-diagram

Para generar los SVG desde el código fuente con PlantUML local:
```bash
plantuml -tsvg diagramas-plantuml/*.puml
```

Los SVG que se incluyen en `entrega-final/` son versiones vectoriales **optimizadas para una lectura clara en GitHub**. Pueden diferir en disposición del resultado de la maquetación automática de PlantUML, pero muestran los mismos casos principales y las relaciones relevantes.

## Alcance y reglas de negocio
El **Encargado** consulta disponibilidad, administra reservas, registra huéspedes y ejecuta check-in y check-out. El **Administrador** además gestiona habitaciones, usuarios e informes; esta asignación es una **propuesta de permisos** pendiente de confirmación con el cliente.

`<<include>>`: comportamiento necesario (comprobar disponibilidad, asignar habitación, calcular costo y liberar habitación).

`<<extend>>`: ingreso sin reserva, alternativa condicional del check-in.

No se agregan cobros online, restaurante ni facturación electrónica; tampoco se presenta una fórmula de costo como definitiva.
