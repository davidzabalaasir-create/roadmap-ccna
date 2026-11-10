/* Datos del roadmap. Fuente del temario: Cisco Learning Network, comprobado el 10/11/2026. */
window.ROADMAP = {
  start: "2026-11-16",
  weeks: 22,

  blocks: {
    v2: [
      { n: "1.0", name: "Infraestructura de red y conectividad", w: 25, text: "Diagnóstico de interfaces y cables, virtualización, IPv4 e IPv6, principios de Wi-Fi, conectividad de clientes en Windows, macOS y Linux, DHCPv4 (cliente, servidor y relay)." },
      { n: "2.0", name: "Switching y acceso a la red", w: 25, text: "Interfaces L2/L3, trunks 802.1Q, EtherChannel con LACP, SVI, puertos de acceso, CDP y LLDP, diagnóstico con show, ping, traceroute y capturas, Rapid PVST+." },
      { n: "3.0", name: "Enrutamiento IP", w: 20, text: "Leer la tabla de rutas, rutas estáticas IPv4 e IPv6, OSPFv2 y OSPFv3 de área única, HSRP y VRRP." },
      { n: "4.0", name: "Servicios de red y seguridad", w: 20, text: "Usuarios locales y AAA, SFTP/SCP, NAT/PAT, registros DNS, VPN IPsec, ACL IPv4, seguridad de capa 2 (DHCP snooping, DAI, storm control, RA guard, port security)." },
      { n: "5.0", name: "IA y operación y gestión de la red", w: 10, text: "IA agéntica, prompts para IA generativa, modelos de gestión de red, SNMP, Ansible, syslog." }
    ],
    v1: [
      { n: "1.0", name: "Fundamentos de red", w: 20, text: "Componentes, topologías, cableado, TCP y UDP, IPv4 e IPv6, Wi-Fi, virtualización y conceptos de conmutación." },
      { n: "2.0", name: "Acceso a la red", w: 20, text: "VLAN, trunks, CDP y LLDP, EtherChannel, Rapid PVST+, arquitecturas inalámbricas y WLC." },
      { n: "3.0", name: "Conectividad IP", w: 25, text: "Tabla de rutas, rutas estáticas IPv4 e IPv6, OSPFv2 de área única y redundancia de primer salto." },
      { n: "4.0", name: "Servicios IP", w: 10, text: "NAT, NTP, DHCP, DNS, SNMP, syslog, QoS, SSH, TFTP/FTP." },
      { n: "5.0", name: "Fundamentos de seguridad", w: 15, text: "Conceptos de seguridad, control de acceso, contraseñas, VPN, ACL, seguridad de capa 2, AAA y seguridad inalámbrica." },
      { n: "6.0", name: "Automatización y programabilidad", w: 10, text: "Redes por controlador, API REST, herramientas de gestión de configuración, JSON e IA." }
    ]
  },

  phases: [
    {
      id: "f1", n: 1, title: "Infraestructura y direccionamiento", block: "Bloque 1.0 · 25 %", from: 1, to: 4,
      goal: "Dominar IPv4 e IPv6 y diagnosticar un enlace sin dudar.",
      weeks: [
        { n: 1, topic: "Modelos OSI y TCP/IP, Ethernet, cables de cobre y fibra, CLI de IOS, show interfaces", goal: "Explicar qué indica cada contador de show interfaces (CRC, runts, colisiones)." },
        { n: 2, topic: "IPv4: direcciones públicas y privadas, máscaras, subnetting", goal: "10 ejercicios de subnetting en menos de 10 minutos con 9 aciertos." },
        { n: 3, topic: "VLSM y problemas de direccionamiento; clientes Windows y Linux (ipconfig, ip a, ping, tracert)", goal: "Diseñar un plan VLSM para 5 redes sin calculadora." },
        { n: 4, topic: "IPv6: tipos de dirección, EUI-64 modificado, SLAAC; virtualización (hipervisor, VM, contenedor)", goal: "Calcular a mano una dirección EUI-64 y configurar IPv6 en R1 y R2." }
      ],
      labs: [
        { id: "S01-L1", name: "Configuración inicial", text: "Hostname, contraseñas, banner, SSH v2 en R1 y SW1, IP de gestión en VLAN 99." },
        { id: "S01-L2", name: "Fallos de capa 1 y 2", text: "Duplex y velocidad distintos entre SW1 y SW2, cable equivocado; localízalo con show interfaces." },
        { id: "S02-L1", name: "Subnetting aplicado", text: "Divide 192.168.10.0/24 en cuatro subredes y direcciona PCs y routers." },
        { id: "S03-L1", name: "VLSM", text: "Direcciona toda la topología con 172.16.0.0/22 (LAN de 200, 100, 50 y 20 hosts y enlaces /30)." },
        { id: "S03-L2", name: "Caza de errores", text: "Cinco fallos sembrados de máscara, gateway e IP duplicada, resueltos solo con comandos de diagnóstico." },
        { id: "S04-L1", name: "Doble pila", text: "IPv6 global y link-local en R1 y R2, SLAAC en los PC, ping extremo a extremo." }
      ],
      check: "Test de 40 preguntas del bloque 1 con 80 % o más, y subnetting en el tiempo indicado. Si no llegas, repite la semana 2 o 3: todo lo posterior depende de esto."
    },
    {
      id: "f2", n: 2, title: "Switching y acceso a la red", block: "Bloque 2.0 · 25 %", from: 5, to: 9,
      goal: "Montar y reparar una red conmutada completa.",
      weeks: [
        { n: 5, topic: "VLAN, puertos de acceso, trunks 802.1Q, VLAN nativa, DTP", goal: "Configurar VLAN y trunks de memoria en 10 minutos." },
        { n: 6, topic: "Navidad, carga ligera: repaso de la fase 1 y de errores.md; CDP y LLDP", goal: "Documentar la topología solo con show cdp neighbors detail y show lldp neighbors." },
        { n: 7, topic: "Enrutamiento entre VLAN: router-on-a-stick, SVI, puertos enrutados", goal: "Las tres formas funcionando en el mismo laboratorio." },
        { n: 8, topic: "Rapid PVST+: puente raíz, roles y estados, PortFast, BPDU guard, root guard, loop guard", goal: "Predecir sobre papel el puente raíz y los puertos bloqueados, y comprobarlo." },
        { n: 9, topic: "EtherChannel L2 y L3 con LACP; puertos de usuario (voz, PoE, AP); diagnóstico con show, ping extendido, traceroute y capturas", goal: "Levantar un port-channel LACP y explicar por qué falla si los puertos no coinciden." }
      ],
      labs: [
        { id: "S05-L1", name: "VLAN y trunks", text: "VLAN 10, 20 y 99 en SW1 y SW2, trunk con VLAN nativa 99 y lista de VLAN permitidas." },
        { id: "S07-L1", name: "Router-on-a-stick", text: "Subinterfaces en R1 para las tres VLAN." },
        { id: "S07-L2", name: "Switch de capa 3", text: "Mismo resultado con SVI en un 3560 y un puerto enrutado hacia R1." },
        { id: "S08-L1", name: "Rapid PVST+", text: "Tres switches en triángulo, SW1 raíz primaria y SW2 secundaria, PortFast y BPDU guard; observa la reconvergencia." },
        { id: "S09-L1", name: "EtherChannel", text: "LACP entre SW1 y SW2 y un port-channel de capa 3; provoca un desajuste y arréglalo." },
        { id: "S09-L2", name: "Puerto de usuario completo", text: "Teléfono IP con VLAN de voz y PC detrás, AP en puerto de acceso." },
        { id: "S09-L3", name: "Avería integral", text: "La red de la fase con seis fallos sembrados: VLAN no creada, nativa distinta, trunk en modo acceso." }
      ],
      check: "Test de 40 preguntas del bloque 2 con 80 % o más, y la avería S09-L3 resuelta en menos de 40 minutos."
    },
    {
      id: "f3", n: 3, title: "Enrutamiento IP", block: "Bloque 3.0 · 20 %", from: 10, to: 13,
      goal: "Leer cualquier tabla de rutas y levantar OSPF sin apuntes.",
      weeks: [
        { n: 10, topic: "Tabla de rutas: prefijo más largo, distancia administrativa, métrica; rutas estáticas IPv4 e IPv6", goal: "Decir el siguiente salto de un paquete mirando solo show ip route." },
        { n: 11, topic: "OSPFv2 de área única: vecindades, router ID, punto a punto, DR/BDR", goal: "Enumerar las condiciones para que dos routers sean vecinos." },
        { n: 12, topic: "OSPFv3 para IPv6; coste, interfaces pasivas, ruta por defecto en OSPF", goal: "OSPFv2 y OSPFv3 funcionando a la vez en la topología." },
        { n: 13, topic: "HSRP y VRRP: estados, prioridad, preempt, IP virtual; repaso y primer simulacro", goal: "Interpretar show standby brief e identificar el equipo activo." }
      ],
      labs: [
        { id: "S10-L1", name: "Rutas estáticas", text: "IPv4 e IPv6 entre R1 y R2, ruta por defecto hacia Internet y una flotante de respaldo." },
        { id: "S11-L1", name: "OSPFv2", text: "Área 0 en tres routers, router ID manual, red punto a punto y red broadcast con elección de DR." },
        { id: "S11-L2", name: "Vecindad rota", text: "Fallos de máscara, temporizadores, área e interfaz pasiva, localizados con show ip ospf neighbor." },
        { id: "S12-L1", name: "OSPFv3", text: "El mismo diseño para IPv6." },
        { id: "S13-L1", name: "HSRP", text: "R1 y R2 como puerta de enlace redundante de la VLAN 10; apaga el activo y comprueba el relevo." }
      ],
      note: "Packet Tracer no incluye VRRP: estúdialo comparándolo con HSRP o practícalo en Cisco Modeling Labs Free.",
      check: "Test de 40 preguntas del bloque 3 con 80 % o más. En la semana 13, primer simulacro completo: es normal sacar un 55-65 %."
    },
    {
      id: "f4", n: 4, title: "Servicios y seguridad", block: "Bloque 4.0 · 20 % + DHCP y Wi-Fi", from: 14, to: 17,
      goal: "Dar servicio a la red y protegerla en capa 2 y capa 3.",
      weeks: [
        { n: 14, topic: "DHCPv4 (servidor, cliente, relay) y su diagnóstico; registros DNS (A, AAAA, CNAME, MX, NS, PTR)", goal: "Diagnosticar por qué un cliente no recibe IP en tres escenarios distintos." },
        { n: 15, topic: "ACL IPv4 estándar y extendidas, numeradas y con nombre; NAT estático, dinámico y PAT", goal: "Escribir una ACL extendida correcta a la primera a partir de un enunciado." },
        { n: 16, topic: "Port security, DHCP snooping, DAI, storm control, RA guard; AAA con TACACS+ y RADIUS; SFTP/SCP", goal: "Explicar qué ataque frena cada función y configurarla." },
        { n: 17, topic: "Wi-Fi: bandas y canales, RF, interferencias, WPA2/WPA3; clientes inalámbricos; VPN IPsec", goal: "Elegir canal y seguridad para un caso y describir los modos de IPsec." }
      ],
      labs: [
        { id: "S14-L1", name: "DHCP", text: "R1 como servidor para las VLAN 10 y 20, e ip helper-address para la LAN de R2." },
        { id: "S14-L2", name: "DNS", text: "Servidor DNS con registros A y CNAME para srv01.corp.local; prueba con nslookup." },
        { id: "S15-L1", name: "ACL", text: "Ventas no accede a Contabilidad salvo por HTTPS a un servidor; SSH solo desde la VLAN 99." },
        { id: "S15-L2", name: "NAT/PAT", text: "PAT para las VLAN y NAT estático para un servidor web; verifica con show ip nat translations." },
        { id: "S16-L1", name: "Capa 2 segura", text: "Port security con sticky, DHCP snooping y DAI en SW1; bloquea un servidor DHCP falso." },
        { id: "S16-L2", name: "AAA", text: "Servidor AAA con TACACS+ y RADIUS, con usuario local de respaldo." },
        { id: "S17-L1", name: "Wi-Fi", text: "Red inalámbrica con WPA2 y un cliente que no conecta por canal o clave erróneos." }
      ],
      note: "Storm control, RA guard y SCP funcionan a medias en Packet Tracer: apréndete la sintaxis y practícalos en Cisco Modeling Labs Free.",
      check: "Test de 40 preguntas del bloque 4 con 80 % o más."
    },
    {
      id: "f5", n: 5, title: "IA, operación y gestión", block: "Bloque 5.0 · 10 %", from: 18, to: 19,
      goal: "Asegurar los puntos de teoría: son baratos si se estudian con orden.",
      weeks: [
        { n: 18, topic: "Syslog (niveles 0-7 y facilities), SNMP, modelos de gestión: por dispositivo, nube, controlador, automatización e infraestructura como código", goal: "Recitar los ocho niveles de syslog y leer un mensaje real." },
        { n: 19, topic: "Ansible (inventario, playbook, módulos); IA agéntica; componentes de un prompt", goal: "Leer un playbook y decir qué hará; elegir el mejor prompt entre varios." }
      ],
      labs: [
        { id: "S18-L1", name: "Syslog y SNMP", text: "Servidor syslog, logging trap por niveles y comunidad SNMP de solo lectura; genera eventos apagando interfaces." },
        { id: "S19-L1", name: "Ansible", text: "Fuera de Packet Tracer: Ansible en WSL y un playbook con ios_command contra CML Free o un sandbox de DevNet." },
        { id: "S19-L2", name: "Prompts", text: "Tres prompts para una incidencia variando rol, formato y datos permitidos; razona cuál expone información sensible." }
      ],
      check: "Test de 30 preguntas del bloque 5 con 85 % o más."
    },
    {
      id: "f6", n: 6, title: "Repaso y simulacros", block: "Todo el temario", from: 20, to: 22,
      goal: "Cerrar huecos, cronometrarse y decidir la fecha.",
      weeks: [
        { n: 20, topic: "Simulacro 2 cronometrado. Repaso de los dos bloques con peor nota y de errores.md", goal: "70 % o más en el simulacro." },
        { n: 21, topic: "Laboratorio integral desde cero y simulacro 3", goal: "80 % o más en el simulacro." },
        { n: 22, topic: "Simulacro 4, repaso ligero, tutorial oficial del examen y decisión de fecha", goal: "85 % o más en el simulacro." }
      ],
      labs: [
        { id: "S21-L1", name: "Laboratorio integral", text: "Toda la topología en menos de 2 horas sin apuntes: VLAN, EtherChannel, Rapid PVST+, OSPFv2 y v3, HSRP, DHCP, PAT, ACL, seguridad de capa 2, SSH y syslog." },
        { id: "S21-L2", name: "Avería final", text: "Copia del anterior con diez fallos sembrados; objetivo, menos de 45 minutos." }
      ],
      check: "Si en la semana 22 no cumples el criterio, no reserves: añade dos semanas centradas en los bloques flojos."
    }
  ],

  weekPlan: [
    { d: "Lun", t: "Teoría", h: "1 h 15", k: "theory" },
    { d: "Mar", t: "Laboratorio", h: "1 h 30", k: "lab" },
    { d: "Mié", t: "Teoría", h: "1 h 15", k: "theory" },
    { d: "Jue", t: "Laboratorio", h: "1 h 30", k: "lab" },
    { d: "Vie", t: "Teoría", h: "1 h 15", k: "theory" },
    { d: "Sáb", t: "Test semanal", h: "45 min", k: "test" },
    { d: "Dom", t: "Descanso", h: "—", k: "rest" }
  ],

  mocks: [
    { n: 1, week: 13, target: 55, label: "55-65 %", note: "línea base" },
    { n: 2, week: 20, target: 70, label: "70 % o más", note: "" },
    { n: 3, week: 21, target: 80, label: "80 % o más", note: "" },
    { n: 4, week: 22, target: 85, label: "85 % o más", note: "listo para reservar" }
  ],

  criteria: [
    "Dos simulacros seguidos de v2.0, con preguntas no vistas, con 85 % o más.",
    "Ningún bloque por debajo del 75 %.",
    "Laboratorio integral S21-L1 en menos de 2 horas sin apuntes.",
    "Subnetting: 10 ejercicios en 10 minutos con 9 aciertos.",
    "Explicas en voz alta por qué es incorrecta cada opción de las preguntas que fallas."
  ],

  free: [
    { name: "Temario oficial v2.0", text: "Tu lista de control: marca cada punto cuando lo domines.", url: "https://learningnetwork.cisco.com/s/ccna-v2-exam-topics" },
    { name: "Cisco Packet Tracer y Networking Academy", text: "El simulador de todos los laboratorios y cursos con parte en español.", url: "https://www.netacad.com" },
    { name: "Jeremy's IT Lab", text: "Curso completo en vídeo (hecho para v1.1) con laboratorios y mazos de Anki. En inglés.", url: "https://www.youtube.com/@JeremysITLab" },
    { name: "Cisco Learning Network", text: "Foro CCNA, sesiones CCNA Prep y avisos de cambios.", url: "https://learningnetwork.cisco.com/s/ccna" },
    { name: "Cisco Modeling Labs Free", text: "IOS real para VRRP, storm control, SCP y Ansible.", url: "https://www.cisco.com/site/us/en/learn/training-certifications/training/modeling-labs/index.html" },
    { name: "Cisco DevNet Sandbox", text: "Equipos remotos para practicar automatización.", url: "https://developer.cisco.com/site/sandbox/" },
    { name: "Anki", text: "Repaso espaciado diario.", url: "https://apps.ankiweb.net" },
    { name: "Sysadmin", text: "Chuleta de comandos de Cisco IOS y Packet Tracer.", url: "https://davidzabalaasir-create.github.io/sysadmin-cheatsheet/" }
  ],

  paid: [
    { name: "CCNA 200-301 Official Cert Guide", text: "Libro de referencia de Cisco Press (Wendell Odom). Compra la edición que cubra v2.0.", url: "https://www.ciscopress.com" },
    { name: "Boson ExSim", text: "Simulacros con explicaciones detalladas. Comprueba que sea la versión v2.0.", url: "https://www.boson.com" },
    { name: "Cisco U.", text: "Ruta oficial de CCNA con laboratorios y evaluaciones. Parte es gratuita.", url: "https://u.cisco.com/certifications/ccna" },
    { name: "Cursos de Udemy", text: "Alternativa en vídeo (Neil Anderson, David Bombal). Verifica que estén actualizados a v2.0.", url: "https://www.udemy.com" }
  ],

  firstWeek: [
    { d: "Lunes 16", h: "1 h 15", t: "Teoría: modelos OSI y TCP/IP, encapsulación. Crea tus primeras 20 tarjetas Anki." },
    { d: "Martes 17", h: "1 h 30", t: "Monta base.pkt (R1, R2, SW1, SW2, PCs) y haz S01-L1 Configuración inicial." },
    { d: "Miércoles 18", h: "1 h 15", t: "Teoría: Ethernet, cables de cobre y fibra, duplex y velocidad." },
    { d: "Jueves 19", h: "1 h 30", t: "S01-L2 Fallos de capa 1 y 2: provoca y diagnostica con show interfaces." },
    { d: "Viernes 20", h: "1 h 15", t: "Teoría: navegación por la CLI de IOS y comandos show básicos." },
    { d: "Sábado 21", h: "45 min", t: "Test de la semana (20 preguntas) y fallos anotados en errores.md." },
    { d: "Cada día", h: "10 min", t: "Anki y cinco ejercicios de subnetting." }
  ]
};
