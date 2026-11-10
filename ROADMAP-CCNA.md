# Roadmap CCNA 200-301 (temario v2.0)

Plan de estudio de David · preparado el 10 de noviembre de 2026

| Tu situación | Valor |
|---|---|
| Nivel de partida | Conoces lo básico (redes de ASIR y prácticas de Packet Tracer) |
| Dedicación | 7-10 h a la semana |
| Formato principal | Curso estructurado + laboratorios de Packet Tracer |
| Versión del examen | **200-301 CCNA v2.0** |
| Duración del plan | 22 semanas: del 16 de noviembre de 2026 al 18 de abril de 2027 |
| Ventana de examen | Del 19 de abril al 9 de mayo de 2027, si cumples el criterio de la sección 6 |

---

## 1. Lo primero: el temario cambia en febrero de 2027

Comprobado el 10/11/2026 en la web de Cisco Learning Network:

- El temario **v1.1** (el de los seis bloques) se puede examinar por última vez el **2 de febrero de 2027**.
- El temario **v2.0** entra el **3 de febrero de 2027**. Mantiene el código 200-301, pero pasa a **cinco bloques**.
- Con 7-10 h semanales no llegas con garantías a v1.1 (quedan 12 semanas, unas 100 horas), así que este plan prepara **v2.0**.

Datos del examen (iguales en las dos versiones): 120 minutos, 300 USD, en inglés o japonés, con preguntas de opción múltiple, arrastrar y soltar y ejercicios prácticos. Cisco no publica la nota de corte.

Fuentes:
- v1.1: https://learningnetwork.cisco.com/s/ccna-exam-topics
- v2.0: https://learningnetwork.cisco.com/s/ccna-v2-exam-topics
- PDF v2.0: https://learningcontent.cisco.com/documents/marketing/exam-topics/200-301_CCNA_v2.0_Exam_Topics_PDF.pdf

Vuelve a mirar la página de v2.0 una vez al mes: Cisco puede retocar fechas o temas.

---

## 2. Bloques oficiales y peso en el examen

### Temario v2.0 (el tuyo)

| Bloque | Peso | Qué pide |
|---|---|---|
| 1.0 Infraestructura de red y conectividad | 25 % | Diagnóstico de interfaces y cables, virtualización, IPv4 e IPv6 (resolver problemas de direccionamiento y subnetting), principios de Wi-Fi, conectividad de clientes en Windows, macOS y Linux, DHCPv4 (cliente, servidor y relay) |
| 2.0 Switching y acceso a la red | 25 % | Interfaces L2/L3, trunks 802.1Q, EtherChannel con LACP, SVI, puertos de acceso (PC, AP, teléfono IP, hosts virtualizados), CDP y LLDP, resolución de problemas con `show`, ping, traceroute y capturas, Rapid PVST+ |
| 3.0 Enrutamiento IP | 20 % | Leer la tabla de rutas, rutas estáticas IPv4 e IPv6, OSPFv2 y OSPFv3 de área única, HSRP y VRRP |
| 4.0 Servicios de red y seguridad | 20 % | Usuarios locales y AAA (TACACS+ y RADIUS), SFTP/SCP, NAT/PAT, registros DNS, VPN IPsec, ACL IPv4, seguridad de capa 2 (DHCP snooping, DAI, storm control, RA guard, port security) |
| 5.0 IA y operación y gestión de la red | 10 % | IA agéntica, prompts para IA generativa, modelos de gestión de red, SNMP, Ansible, syslog |

Los verbos importan: **configurar** y **resolver problemas** (troubleshoot) se preguntan con ejercicios prácticos; **describir** e **interpretar** son teoría. Los bloques 1 y 2 suman la mitad del examen y casi todo en ellos es práctico.

### Temario v1.1 (referencia, hasta el 2 de febrero de 2027)

| Bloque | Peso |
|---|---|
| 1.0 Fundamentos de red | 20 % |
| 2.0 Acceso a la red | 20 % |
| 3.0 Conectividad IP | 25 % |
| 4.0 Servicios IP | 10 % |
| 5.0 Fundamentos de seguridad | 15 % |
| 6.0 Automatización y programabilidad | 10 % |

### Qué cambia para ti al estudiar con material de v1.1

Casi todos los cursos y libros disponibles hoy son de v1.1. Sirven para la mayor parte del temario, con estos ajustes:

- **Añade por tu cuenta** (aparece en v2.0): OSPFv3, VRRP, registros DNS, AAA como cliente TACACS+/RADIUS, SFTP/SCP, storm control, RA guard, Ansible, IA en operaciones de red, conectividad de clientes en Windows/macOS/Linux.
- **Estudia por encima** (no figura en el listado v2.0): configuración gráfica de la WLC, JSON y API REST en detalle, Puppet/Chef/Terraform, QoS, TFTP/FTP. No lo descartes del todo hasta confirmarlo en el PDF oficial.
- **Cambia el enfoque**: v2.0 pide más diagnóstico. En cada laboratorio, además de configurar, rompe algo y arréglalo.

---

## 3. Cómo es una semana de estudio

Reparto orientativo para 8-9 horas:

| Sesión | Tiempo | Qué haces |
|---|---|---|
| 3 sesiones de teoría | 1 h 15 cada una | Vídeos del curso + notas propias |
| 2 sesiones de laboratorio | 1 h 30 cada una | Packet Tracer, escribiendo todos los comandos a mano |
| Repaso diario | 10-15 min | Tarjetas Anki y 5 ejercicios de subnetting |
| Cierre semanal | 45 min | Test de la semana y anotar fallos |

Reglas de trabajo:

1. Guarda cada laboratorio como `.pkt` en `D:\RoadMap CCNA\labs\` con el nombre `S03-L1-subnetting.pkt` (semana y número).
2. Lleva un archivo `errores.md`: cada pregunta fallada, por qué fallaste y la regla correcta. Es lo que repasarás al final.
3. Usa siempre la misma topología base para no perder tiempo dibujando (sección 4).
4. Tu web Sysadmin es tu chuleta: https://davidzabalaasir-create.github.io/sysadmin-cheatsheet/ (categoría «Cisco IOS · Packet Tracer»). Antes de mirar la chuleta, intenta escribir el comando de memoria.

---

## 4. Topología base de los laboratorios

La misma que usas en tu web:

- **R1** y **R2**: routers (ISR 4331 o 2911 en Packet Tracer).
- **SW1** y **SW2**: switches 2960; usa un 3560/3650 cuando necesites enrutamiento en capa 3.
- **VLAN 10 Ventas** 192.168.10.0/24 · **VLAN 20 Contabilidad** 192.168.20.0/24 · **VLAN 99 Gestión** 192.168.99.0/24.
- Enlace R1–R2: 10.0.0.0/30. LAN detrás de R2: 192.168.30.0/24. «Internet» simulado: 203.0.113.0/30.
- IPv6: 2001:db8:10::/64, 2001:db8:20::/64, 2001:db8:99::/64 y 2001:db8:12::/64 entre routers.

Crea en la semana 1 un archivo `base.pkt` con los equipos cableados y sin configurar, y parte de una copia en cada laboratorio.

---

## 5. Plan por fases

### Fase 0 · Preparación (10-15 de noviembre de 2026)

- Crea cuenta en Cisco Networking Academy (https://www.netacad.com) y descarga Cisco Packet Tracer.
- Elige el curso eje (sección 7) y descarga el PDF del temario v2.0.
- Instala Anki (https://apps.ankiweb.net).
- **Diagnóstico inicial** (1 h): 20 ejercicios de subnetting cronometrados y, sin apuntes, configura en Packet Tracer VLAN 10/20, un trunk y router-on-a-stick. Anota qué te costó; eso marca dónde ir más despacio.

---

### Fase 1 · Infraestructura y direccionamiento (semanas 1-4, 16 nov – 13 dic)

Bloque 1.0 (25 %). Objetivo: dominar IPv4/IPv6 y diagnosticar un enlace sin dudar.

| Semana | Temas | Objetivo medible |
|---|---|---|
| 1 | Modelos OSI y TCP/IP, Ethernet, cables de cobre y fibra, CLI de IOS, `show interfaces` | Explicar qué indica cada contador de `show interfaces` (CRC, runts, colisiones, late collisions) |
| 2 | IPv4: direcciones públicas y privadas, máscaras, subnetting | 10 ejercicios de subnetting en menos de 10 minutos con 9 aciertos |
| 3 | VLSM y resolución de problemas de direccionamiento; clientes en Windows y Linux (`ipconfig`, `ip a`, `ping`, `tracert`) | Diseñar un plan VLSM para 5 redes sin calculadora |
| 4 | IPv6: tipos de dirección, EUI-64 modificado, SLAAC, prefijos; virtualización (hipervisor, VM, contenedor) | Calcular a mano una dirección EUI-64 y configurar IPv6 en R1 y R2 |

Laboratorios de Packet Tracer:

- **S01-L1 Configuración inicial**: hostname, contraseñas, `service password-encryption`, banner, SSH v2 en R1 y SW1, IP de gestión en VLAN 99.
- **S01-L2 Fallos de capa 1 y 2**: fuerza duplex y velocidad distintos entre SW1 y SW2, cambia un cable directo por uno cruzado sin auto-MDIX, y localiza el fallo con `show interfaces` y `show interfaces status`.
- **S02-L1 Subnetting aplicado**: divide 192.168.10.0/24 en cuatro subredes y direcciona PCs y routers.
- **S03-L1 VLSM**: direcciona toda la topología con 172.16.0.0/22 (LAN de 200, 100, 50 y 20 hosts, más enlaces /30).
- **S03-L2 Caza de errores**: pide a otra persona (o prepara tú la víspera) cinco fallos de máscara, gateway e IP duplicada y resuélvelos solo con comandos de diagnóstico.
- **S04-L1 Doble pila**: IPv6 global y link-local en R1 y R2, SLAAC en los PC, ping extremo a extremo.

Control de fase: test de 40 preguntas del bloque 1 con 80 % o más, y subnetting en el tiempo indicado. Si no llegas, repite la semana 2 o 3 antes de seguir: todo lo posterior depende de esto.

---

### Fase 2 · Switching y acceso a la red (semanas 5-9, 14 dic – 17 ene)

Bloque 2.0 (25 %). Objetivo: montar y reparar una red conmutada completa.

| Semana | Temas | Objetivo medible |
|---|---|---|
| 5 | VLAN, puertos de acceso, trunks 802.1Q, VLAN nativa, DTP | Configurar VLAN y trunks de memoria en 10 minutos |
| 6 (Navidad, carga ligera) | Repaso de la fase 1 y `errores.md`; CDP y LLDP | Documentar la topología solo con `show cdp neighbors detail` y `show lldp neighbors` |
| 7 | Enrutamiento entre VLAN: router-on-a-stick, SVI, puertos enrutados | Las tres formas funcionando en el mismo laboratorio |
| 8 | Rapid PVST+: puente raíz, roles y estados, PortFast, BPDU guard, root guard, loop guard | Predecir sobre papel el puente raíz y los puertos bloqueados y comprobarlo |
| 9 | EtherChannel L2 y L3 con LACP; puertos de usuario (VLAN de voz, PoE, AP); diagnóstico con `show`, ping extendido, traceroute y capturas | Levantar un port-channel LACP y explicar por qué falla si los puertos no coinciden |

Laboratorios:

- **S05-L1 VLAN y trunks**: VLAN 10, 20 y 99 en SW1 y SW2, trunk con VLAN nativa 99 y lista de VLAN permitidas.
- **S07-L1 Router-on-a-stick**: subinterfaces en R1 para las tres VLAN.
- **S07-L2 Switch de capa 3**: mismo resultado con SVI en un 3560 y un puerto enrutado hacia R1.
- **S08-L1 Rapid PVST+**: tres switches en triángulo, SW1 raíz primaria y SW2 secundaria, PortFast y BPDU guard en accesos; desconecta enlaces y observa la reconvergencia.
- **S09-L1 EtherChannel**: LACP entre SW1 y SW2 (capa 2) y un port-channel de capa 3; provoca un desajuste y arréglalo.
- **S09-L2 Puerto de usuario completo**: teléfono IP con VLAN de voz y PC detrás, AP en puerto de acceso.
- **S09-L3 Avería integral**: red de la fase con seis fallos sembrados (VLAN no creada, nativa distinta, trunk en modo acceso, etc.).

Control de fase: test de 40 preguntas del bloque 2 con 80 % o más, y el laboratorio S09-L3 resuelto en menos de 40 minutos.

---

### Fase 3 · Enrutamiento IP (semanas 10-13, 18 ene – 14 feb)

Bloque 3.0 (20 %). Objetivo: leer cualquier tabla de rutas y levantar OSPF sin apuntes.

| Semana | Temas | Objetivo medible |
|---|---|---|
| 10 | Tabla de rutas: prefijo más largo, distancia administrativa, métrica; rutas estáticas IPv4 e IPv6 (por defecto, de red, de host, flotante) | Decir el siguiente salto de un paquete mirando solo `show ip route` |
| 11 | OSPFv2 de área única: vecindades, router ID, punto a punto, DR/BDR | Enumerar las condiciones para que dos routers sean vecinos |
| 12 | OSPFv3 para IPv6; coste, interfaces pasivas, ruta por defecto en OSPF | OSPFv2 y OSPFv3 funcionando a la vez en la topología |
| 13 | HSRP y VRRP: estados, prioridad, preempt, IP virtual; repaso de fase | Interpretar `show standby brief` e identificar el equipo activo |

Laboratorios:

- **S10-L1 Rutas estáticas**: IPv4 e IPv6 entre R1 y R2, ruta por defecto hacia «Internet» y una flotante de respaldo por un segundo enlace.
- **S11-L1 OSPFv2**: área 0 en R1, R2 y un tercer router; router ID manual, red punto a punto y red broadcast con elección de DR.
- **S11-L2 Vecindad rota**: siembra fallos de máscara, temporizadores, área e interfaz pasiva y localízalos con `show ip ospf neighbor` y `show ip ospf interface`.
- **S12-L1 OSPFv3**: mismo diseño para IPv6.
- **S13-L1 HSRP**: R1 y R2 como puerta de enlace redundante de la VLAN 10, con prioridad y preempt; apaga el activo y comprueba el relevo.
- VRRP: Packet Tracer no lo incluye. Estúdialo comparándolo con HSRP y, si quieres practicarlo, usa Cisco Modeling Labs Free (sección 7).

Control de fase: test de 40 preguntas del bloque 3 con 80 % o más. En esta semana 13 haces además el **primer simulacro completo** (sección 6); sirve de línea base y es normal sacar un 55-65 %.

---

### Fase 4 · Servicios y seguridad (semanas 14-17, 15 feb – 14 mar)

Bloque 4.0 (20 %) y lo que queda del bloque 1 (DHCP y Wi-Fi).

| Semana | Temas | Objetivo medible |
|---|---|---|
| 14 | DHCPv4 (servidor, cliente, relay) y su diagnóstico; registros DNS (A, AAAA, CNAME, MX, NS, PTR) | Diagnosticar por qué un cliente no recibe IP en tres escenarios distintos |
| 15 | ACL IPv4 estándar y extendidas, numeradas y con nombre; NAT estático, dinámico y PAT | Escribir una ACL extendida correcta a la primera a partir de un enunciado |
| 16 | Seguridad de capa 2: port security, DHCP snooping, DAI, storm control, RA guard; usuarios locales y AAA con TACACS+ y RADIUS; SFTP/SCP | Explicar qué ataque frena cada función y configurarla |
| 17 | Wi-Fi: bandas y canales, RF, interferencias, WPA2/WPA3; diagnóstico de clientes inalámbricos; VPN IPsec de acceso remoto y de sitio a sitio | Elegir canal y seguridad para un caso y describir los modos de IPsec |

Laboratorios:

- **S14-L1 DHCP**: R1 como servidor para las VLAN 10 y 20, y `ip helper-address` para la LAN de R2.
- **S14-L2 DNS**: servidor DNS de Packet Tracer con registros A y CNAME para `srv01.corp.local`; prueba con `nslookup`.
- **S15-L1 ACL**: Ventas no accede a Contabilidad salvo por HTTPS a un servidor; SSH a los equipos solo desde la VLAN 99.
- **S15-L2 NAT/PAT**: PAT para las VLAN y NAT estático para un servidor web; verifica con `show ip nat translations`.
- **S16-L1 Capa 2 segura**: port security con sticky, DHCP snooping y DAI en SW1; conecta un servidor DHCP falso y comprueba que se bloquea.
- **S16-L2 AAA**: servidor AAA de Packet Tracer con TACACS+ y RADIUS, con usuario local de respaldo.
- **S17-L1 Wi-Fi**: red inalámbrica con WPA2 y un cliente que no conecta por canal o clave erróneos.
- Storm control, RA guard y SCP no funcionan o funcionan a medias en Packet Tracer: apréndete la sintaxis y practícalos en Cisco Modeling Labs Free si lo instalas.

Control de fase: test de 40 preguntas del bloque 4 con 80 % o más.

---

### Fase 5 · IA, operación y gestión (semanas 18-19, 15 – 28 mar)

Bloque 5.0 (10 %). Casi todo es teoría; son puntos baratos si lo estudias con orden.

| Semana | Temas | Objetivo medible |
|---|---|---|
| 18 | Syslog (niveles 0-7 y facilities), SNMP (versiones, gestor y agente, traps), modelos de gestión: por dispositivo, en la nube, por controlador, automatizada e infraestructura como código | Recitar los ocho niveles de syslog y leer un mensaje real |
| 19 | Ansible (inventario, playbook, módulos, ejecución de comandos); IA agéntica en operaciones; componentes de un prompt (clasificación de datos, formato de salida, rol, instrucciones) | Leer un playbook y decir qué hará; elegir el mejor prompt entre varios |

Laboratorios:

- **S18-L1 Syslog y SNMP**: servidor syslog en Packet Tracer, `logging trap` por niveles y comunidad SNMP de solo lectura; genera eventos apagando interfaces.
- **S19-L1 Ansible** (fuera de Packet Tracer): instala Ansible en WSL sobre tu Windows 11 y lanza un playbook con `ios_command` contra un router de Cisco Modeling Labs Free o un sandbox de Cisco DevNet. Si no lo montas, estudia dos o tres playbooks de ejemplo línea a línea.
- **S19-L2 Prompts**: redacta tres prompts para una incidencia de red variando rol, formato y datos permitidos, y razona cuál expone información sensible.

Control de fase: test de 30 preguntas del bloque 5 con 85 % o más.

---

### Fase 6 · Repaso y simulacros (semanas 20-22, 29 mar – 18 abr)

| Semana | Trabajo |
|---|---|
| 20 | Simulacro 2 cronometrado. Repaso de los dos bloques con peor nota y de `errores.md`. |
| 21 | Laboratorio integral desde cero (abajo). Simulacro 3. |
| 22 | Simulacro 4. Repaso ligero, tutorial oficial del examen y decisión de fecha. |

- **S21-L1 Laboratorio integral** (objetivo: menos de 2 horas, sin apuntes): topología base completa con VLAN, trunks, EtherChannel, Rapid PVST+, enrutamiento entre VLAN, OSPFv2 y OSPFv3, HSRP, DHCP con relay, PAT, ACL, port security, DHCP snooping, SSH y syslog.
- **S21-L2 Avería final**: copia del anterior con diez fallos sembrados; objetivo, menos de 45 minutos.

---

## 6. Cómo medir el progreso y cuándo presentarte

Autoevaluación continua:

- **Cada día**: Anki y cinco ejercicios de subnetting.
- **Cada semana**: test corto del tema y actualización de `errores.md`.
- **Cada fase**: el control indicado. Con menos del 80 %, dedica una semana de refuerzo antes de avanzar; el plan admite hasta dos semanas de retraso sin salirse de mayo.

Simulacros completos (120 minutos, sin pausas ni apuntes):

| Simulacro | Semana | Resultado esperado |
|---|---|---|
| 1 | 13 | 55-65 % (línea base) |
| 2 | 20 | 70 % o más |
| 3 | 21 | 80 % o más |
| 4 | 22 | 85 % o más |

Usa simulacros de **v2.0**. Si en ese momento solo tienes de v1.1, valen como práctica, pero su nota no decide la fecha.

**Reserva el examen cuando cumplas todo esto:**

1. Dos simulacros seguidos de v2.0, de bancos de preguntas distintos o con preguntas no vistas, con 85 % o más.
2. Ningún bloque por debajo del 75 %.
3. Laboratorio integral S21-L1 en menos de 2 horas sin apuntes.
4. Subnetting: 10 ejercicios en 10 minutos con 9 aciertos.
5. Puedes explicar en voz alta por qué es incorrecta cada opción de las preguntas que fallas.

Si en la semana 22 no lo cumples, no reserves: añade dos semanas centradas en los bloques flojos y repite los simulacros. El examen cuesta 300 USD por intento.

---

## 7. Recursos

Nota: la skill de Coursera se invocó para este plan, pero su conector de catálogo no estaba disponible en la sesión, así que no hay cursos de Coursera verificados aquí. Si quieres usar Coursera, busca «CCNA» o «Cisco networking» en su catálogo y comprueba que el curso cite el temario v2.0.

Antes de pagar nada, comprueba que el material indique **v2.0** o que tenga actualización prevista.

### Gratuitos

| Recurso | Para qué | Enlace |
|---|---|---|
| Temario oficial v2.0 | Tu lista de control; marca cada punto cuando lo domines | https://learningnetwork.cisco.com/s/ccna-v2-exam-topics |
| Cisco Packet Tracer | Todos los laboratorios | https://www.netacad.com |
| Cisco Networking Academy | Cursos de redes con parte en español | https://www.netacad.com |
| Jeremy's IT Lab (YouTube) | Curso completo en vídeo (hecho para v1.1) con laboratorios de Packet Tracer y mazos de Anki; en inglés | https://www.youtube.com/@JeremysITLab |
| Cisco Learning Network | Foro CCNA, sesiones CCNA Prep y avisos de cambios | https://learningnetwork.cisco.com/s/ccna |
| Cisco Modeling Labs Free | IOS real para VRRP, storm control, SCP y Ansible | https://www.cisco.com/site/us/en/learn/training-certifications/training/modeling-labs/index.html |
| Cisco DevNet Sandbox | Equipos remotos para practicar automatización | https://developer.cisco.com/site/sandbox/ |
| Anki | Repaso espaciado | https://apps.ankiweb.net |
| subnettingpractice.com | Ejercicios de subnetting | https://subnettingpractice.com |
| Web Sysadmin (la tuya) | Chuleta de comandos IOS | https://davidzabalaasir-create.github.io/sysadmin-cheatsheet/ |

### De pago

| Recurso | Para qué | Comentario |
|---|---|---|
| CCNA 200-301 Official Cert Guide (Cisco Press, Wendell Odom) | Libro de referencia | Compra la edición que cubra v2.0; confirma en ciscopress.com que ya esté publicada |
| Boson ExSim para CCNA | Simulacros con explicaciones detalladas | El más parecido al examen real; comprueba que sea la versión v2.0 |
| Cisco U. | Ruta oficial de CCNA con laboratorios y evaluaciones | https://u.cisco.com/certifications/ccna · parte del contenido es gratuito |
| Cursos de Udemy (Neil Anderson, David Bombal) | Curso en vídeo alternativo | Espera a las ofertas; verifica que se hayan actualizado a v2.0 |
| Boson NetSim | Simulador con laboratorios guiados | Prescindible si usas Packet Tracer y CML Free |

Combinación recomendada para tu caso: curso en vídeo gratuito como eje + Packet Tracer + temario v2.0 como lista de control, y un único gasto en simulacros de v2.0 hacia la semana 18.

---

## 8. Primera semana, paso a paso (16-22 de noviembre de 2026)

Antes del lunes 16 (fase 0, unas 2 horas):

1. Cuenta en netacad.com e instalación de Packet Tracer.
2. Descarga el PDF del temario v2.0 y guárdalo en esta carpeta.
3. Crea las carpetas `labs\` y el archivo `errores.md`.
4. Haz el diagnóstico inicial y apunta el resultado.

Durante la semana:

| Día | Tiempo | Tarea |
|---|---|---|
| Lunes | 1 h 15 | Teoría: modelos OSI y TCP/IP, encapsulación. Crea tus primeras 20 tarjetas Anki. |
| Martes | 1 h 30 | Monta `base.pkt` (R1, R2, SW1, SW2, PCs) y haz **S01-L1 Configuración inicial**. |
| Miércoles | 1 h 15 | Teoría: Ethernet, cables de cobre y fibra, duplex y velocidad. |
| Jueves | 1 h 30 | **S01-L2 Fallos de capa 1 y 2**: provoca y diagnostica con `show interfaces`. |
| Viernes | 1 h 15 | Teoría: navegación por la CLI de IOS y comandos `show` básicos. |
| Sábado | 45 min | Test de la semana (20 preguntas) y anota los fallos en `errores.md`. |
| Cada día | 10 min | Anki y cinco ejercicios de subnetting. |

Al terminar la semana debes poder: dejar un router y un switch accesibles por SSH desde cero sin mirar apuntes, y decir qué problema indica cada contador de `show interfaces`.
