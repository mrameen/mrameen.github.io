"use strict";

const copy = {
  en: {
    skip: "Skip to content",
    "lang.group": "Language",
    "nav.label": "Sections",
    "nav.board": "Board",
    "nav.systems": "Systems",
    "nav.hire": "Freelance",
    "nav.stack": "Stack",
    "nav.contact": "Contact",
    "rail.role": "Software Manager",
    "rail.consult": "Consultant",
    "rail.companyLink": "Loranet, opens in a new tab",
    "board.company": "Current company",
    "rail.sub": "IoT · Full Stack · System Integration",
    "rail.status": "Open for freelance",
    "rail.where": "Selangor, Malaysia",
    "rail.cv": "Download CV",
    "clock.label": "Time in Selangor",
    "board.h": "Operations, end to end",
    "board.p1": "Software Manager leading the development, deployment, and integration of IoT-based platforms, smart traffic solutions, and real-time data dashboards.",
    "board.p2": "End-to-end delivery across backend systems and APIs, frontend interfaces, workflow automation, and service infrastructure. Hands-on with Python and Django, time-series data, MQTT device integration, containerised deployment on Linux, and domain routing with Traefik.",
    "board.p3": "I also consult on those same layers.",
    "stat.systems": "Systems currently handling",
    "stat.layers": "Layers you can hire",
    "stat.place": "Selangor · UTC+8",
    "board.layers": "Follow a layer",
    "board.layersLead": "Select a layer. The note is the work I do there.",
    "stage.field": "Field",
    "stage.link": "MQTT",
    "stage.flows": "Flows",
    "stage.services": "API",
    "stage.data": "Data",
    "stage.view": "Screens",
    "stage.run": "Host",
    "stage.hire": "Add this layer to a brief",
    "resp.title": "What I handle",
    "resp.backend.t": "Backend & API",
    "resp.backend.b": "REST APIs and backend services in Python and Django. Time-series and relational data in MongoDB, MySQL, Redis, and InfluxDB. Sensor and traffic data over MQTT.",
    "resp.front.t": "Frontend & visualization",
    "resp.front.b": "Interactive dashboards with HTML, JavaScript, Highcharts, and amCharts. Real-time monitoring with Grafana and Node-RED.",
    "resp.iot.t": "IoT devices & integration",
    "resp.iot.b": "ChirpStack for device infrastructure. Node-RED and MQTT microservices for traffic lights, cameras, and sensors. n8n for flexible, AI-assisted workflow automation.",
    "resp.ops.t": "DevOps & infrastructure",
    "resp.ops.b": "Docker on Linux, Traefik for domain routing and reverse proxy, Proxmox for virtualised hosting, Grafana for monitoring and alerts.",
    "resp.infer.t": "Local inference",
    "resp.infer.b": "A 2-node DGX Spark cluster running DeepSeek with vLLM, set up for Hermes. Grafana watches the cluster.",
    "resp.plane.t": "Delivery",
    "resp.plane.b": "Self-hosted Plane for progress, assignments, and coordination across engineering teams.",
    "systems.h": "Systems in delivery",
    "systems.note": "These are systems I currently handle as Software Manager at Loranet. They are not listed as freelance clients.",
    "filters.label": "Filter systems",
    "filters.all": "All",
    "filters.traffic": "Traffic",
    "filters.city": "Smart city",
    "filters.iot": "IoT",
    "filters.auto": "Automation",
    "filters.integration": "Integration",
    "filters.inference": "Inference",
    "systems.shown": "shown",
    "systems.none": "Nothing in this filter.",
    "card.stack": "Named stack",
    "p.react.link": "react.net.my, opens in a new tab",
    "p.react.title": "Traffic light & IoT sensor system",
    "p.react.body": "Django-based platform for traffic lights and IoT sensors.",
    "p.mpaj.link": "mpaj.react.net.my, opens in a new tab",
    "p.mpaj.title": "Smart city platform for MPAJ",
    "p.mpaj.body": "Smart city platform for the MPAJ municipality.",
    "p.stl.link": "stl.kkr.gov.my, opens in a new tab",
    "p.stl.title": "Smart traffic light system for KKR",
    "p.stl.body": "Smart traffic light system for KKR Malaysia.",
    "p.nodered.title": "Node-RED microservices",
    "p.nodered.body": "Traffic light control, sensor data, and camera systems.",
    "p.chirp.title": "ChirpStack",
    "p.chirp.body": "IoT device communication and integration platform.",
    "p.erp.title": "ERP integration",
    "p.erp.body": "System-level ERP connections for smart infrastructure.",
    "p.n8n.title": "n8n workflows",
    "p.n8n.body": "AI-assisted process automation and data pipelines.",
    "p.dgx.title": "DGX Spark cluster for Hermes",
    "p.dgx.body": "Two DGX Spark nodes running DeepSeek on vLLM, set up for Hermes and watched in Grafana.",
    "hire.h": "Hire a layer",
    "hire.lead": "Need a dashboard, a device network, an API, or the server it runs on? Hire me as a consultant for that layer. Same kind of work as the systems above.",
    "hire.plane": "I also run delivery in self-hosted Plane: assignments, progress, and coordination. That comes with the work, it is not a separate product.",
    "svc.ask": "Add to brief",
    "svc.iot.title": "Device & IoT integration",
    "svc.iot.body": "Connect lights, cameras, and sensors. MQTT and ChirpStack for the devices, Node-RED for the flows.",
    "svc.iot.1": "MQTT messaging and ChirpStack device setup",
    "svc.iot.2": "Node-RED flows for lights, sensors, and cameras",
    "svc.dash.title": "Real-time dashboards",
    "svc.dash.body": "Monitoring screens operators can use. Grafana, or a custom interface in HTML and JavaScript.",
    "svc.dash.1": "Grafana monitoring and alerts",
    "svc.dash.2": "Custom screens with Highcharts and amCharts",
    "svc.back.title": "Backend, APIs & data",
    "svc.back.body": "Django services and REST APIs, with a store that matches the data: documents, tables, time series, or fast state.",
    "svc.back.1": "Django REST APIs",
    "svc.back.2": "MongoDB, MySQL, InfluxDB, and Redis",
    "svc.erp.title": "ERP integration",
    "svc.erp.body": "System-level connections so an operations platform can talk to an existing ERP.",
    "svc.erp.1": "Integration for smart infrastructure",
    "svc.erp.2": "Scoped to the systems you already run",
    "svc.auto.title": "Workflow automation",
    "svc.auto.body": "n8n pipelines and Node-RED flows, including AI-assisted steps where the process benefits.",
    "svc.auto.1": "Data pipelines and process automation",
    "svc.auto.2": "AI-assisted steps when they earn a place",
    "svc.deploy.title": "Deploy & keep it routed",
    "svc.deploy.body": "Containerised apps on Linux, domains through Traefik, virtual hosts on Proxmox, alerts on Grafana.",
    "svc.deploy.1": "Docker on Linux servers",
    "svc.deploy.2": "Traefik routing, Proxmox hosts, Grafana alerts",
    "brief.legend": "Draft a brief",
    "brief.hint": "Opens WhatsApp with this note. Nothing is sent until you press send there.",
    "brief.notesLabel": "Notes",
    "brief.notes": "What is the system, and what is stuck?",
    "brief.error": "Write a note or pick a layer.",
    "brief.wa": "Open WhatsApp",
    "brief.mail": "Email ameen@loranet.my",
    "stack.h": "Tools I actually use",
    "stack.lead": "Select a tool. The note says where it sits in the work, using only what is on the CV.",
    "group.lang": "Languages & frameworks",
    "group.data": "Databases",
    "group.iot": "IoT & integration",
    "group.viz": "Visualization",
    "group.ops": "DevOps & infrastructure",
    "group.infer": "Inference",
    "group.delivery": "Delivery",
    "contact.h": "Start a conversation",
    "contact.lead": "WhatsApp, email, or call. References are available on request. The PDF is the original one-page CV. The DGX Spark cluster is on this board.",
    "contact.waL": "WhatsApp",
    "contact.waLink": "WhatsApp +60 13-326 2017",
    "contact.companyL": "Company",
    "contact.emailL": "Email",
    "contact.phoneL": "Phone",
    "contact.whereL": "Location",
    "contact.where": "Selangor, Malaysia",
    "contact.cv": "Download the CV (PDF)",
    "contact.refs": "References available upon request.",
    footer: "Ahmad Mustapha Ameen · Software Manager · Consultant",
    "mail.subject": "Freelance brief",
    "mail.intro": "Hi Ameen,\n\nI need help with:"
  },
  ms: {
    skip: "Langkau ke kandungan",
    "lang.group": "Bahasa",
    "nav.label": "Bahagian",
    "nav.board": "Papan",
    "nav.systems": "Sistem",
    "nav.hire": "Freelance",
    "nav.stack": "Stack",
    "nav.contact": "Hubungi",
    "rail.role": "Pengurus Perisian",
    "rail.consult": "Perunding",
    "rail.companyLink": "Loranet, buka dalam tab baharu",
    "board.company": "Syarikat semasa",
    "rail.sub": "IoT · Full Stack · Integrasi Sistem",
    "rail.status": "Terbuka untuk freelance",
    "rail.where": "Selangor, Malaysia",
    "rail.cv": "Muat turun CV",
    "clock.label": "Waktu di Selangor",
    "board.h": "Operasi, hujung ke hujung",
    "board.p1": "Pengurus Perisian yang memimpin pembangunan, deployment, dan integrasi platform IoT, penyelesaian trafik pintar, dan papan pemuka data masa nyata.",
    "board.p2": "Penghantaran hujung ke hujung merangkumi sistem backend dan API, antara muka, automasi aliran kerja, dan infrastruktur servis. Saya kerja terus dengan Python dan Django, data siri masa, integrasi peranti MQTT, deployment kontena di Linux, dan routing domain dengan Traefik.",
    "board.p3": "Saya juga berkhidmat sebagai perunding pada lapisan yang sama.",
    "stat.systems": "Sistem yang sedang dikendalikan",
    "stat.layers": "Lapisan yang boleh diupah",
    "stat.place": "Selangor · UTC+8",
    "board.layers": "Ikut satu lapisan",
    "board.layersLead": "Pilih satu lapisan. Nota di bawah ialah kerja yang saya buat di situ.",
    "stage.field": "Lapangan",
    "stage.link": "MQTT",
    "stage.flows": "Aliran",
    "stage.services": "API",
    "stage.data": "Data",
    "stage.view": "Skrin",
    "stage.run": "Hos",
    "stage.hire": "Masukkan lapisan ini ke ringkasan",
    "resp.title": "Yang saya kendalikan",
    "resp.backend.t": "Backend & API",
    "resp.backend.b": "REST API dan servis backend dengan Python dan Django. Data siri masa dan data berjadual dalam MongoDB, MySQL, Redis, dan InfluxDB. Data sensor dan trafik melalui MQTT.",
    "resp.front.t": "Frontend & visualisasi",
    "resp.front.b": "Papan pemuka interaktif dengan HTML, JavaScript, Highcharts, dan amCharts. Pemantauan masa nyata dengan Grafana dan Node-RED.",
    "resp.iot.t": "Peranti IoT & integrasi",
    "resp.iot.b": "ChirpStack untuk infrastruktur peranti. Mikroservis Node-RED dan MQTT untuk lampu isyarat, kamera, dan sensor. n8n untuk automasi aliran kerja yang fleksibel dan berbantu AI.",
    "resp.ops.t": "DevOps & infrastruktur",
    "resp.ops.b": "Docker di Linux, Traefik untuk routing domain dan reverse proxy, Proxmox untuk hos maya, Grafana untuk pemantauan dan amaran.",
    "resp.infer.t": "Inferens tempatan",
    "resp.infer.b": "Kluster 2 nod DGX Spark yang jalankan DeepSeek dengan vLLM, untuk Hermes. Grafana pantau kluster itu.",
    "resp.plane.t": "Penghantaran",
    "resp.plane.b": "Plane yang saya host sendiri untuk kemajuan, tugasan, dan koordinasi pasukan kejuruteraan.",
    "systems.h": "Sistem yang sedang dihantar",
    "systems.note": "Ini sistem yang saya kendalikan sekarang sebagai Pengurus Perisian di Loranet. Bukan disenaraikan sebagai klien freelance.",
    "filters.label": "Tapis sistem",
    "filters.all": "Semua",
    "filters.traffic": "Trafik",
    "filters.city": "Bandar pintar",
    "filters.iot": "IoT",
    "filters.auto": "Automasi",
    "filters.integration": "Integrasi",
    "filters.inference": "Inferens",
    "systems.shown": "dipapar",
    "systems.none": "Tiada dalam tapisan ini.",
    "card.stack": "Stack disebut",
    "p.react.link": "react.net.my, buka dalam tab baharu",
    "p.react.title": "Sistem lampu isyarat & sensor IoT",
    "p.react.body": "Platform berasaskan Django untuk lampu isyarat dan sensor IoT.",
    "p.mpaj.link": "mpaj.react.net.my, buka dalam tab baharu",
    "p.mpaj.title": "Platform bandar pintar untuk MPAJ",
    "p.mpaj.body": "Platform bandar pintar untuk majlis perbandaran MPAJ.",
    "p.stl.link": "stl.kkr.gov.my, buka dalam tab baharu",
    "p.stl.title": "Sistem lampu isyarat pintar untuk KKR",
    "p.stl.body": "Sistem lampu isyarat pintar untuk KKR Malaysia.",
    "p.nodered.title": "Mikroservis Node-RED",
    "p.nodered.body": "Kawalan lampu isyarat, data sensor, dan sistem kamera.",
    "p.chirp.title": "ChirpStack",
    "p.chirp.body": "Platform komunikasi dan integrasi peranti IoT.",
    "p.erp.title": "Integrasi ERP",
    "p.erp.body": "Sambungan ERP peringkat sistem untuk infrastruktur pintar.",
    "p.n8n.title": "Aliran kerja n8n",
    "p.n8n.body": "Automasi proses berbantu AI dan saluran data.",
    "p.dgx.title": "Kluster DGX Spark untuk Hermes",
    "p.dgx.body": "Dua nod DGX Spark yang jalankan DeepSeek atas vLLM, disediakan untuk Hermes dan dipantau dalam Grafana.",
    "hire.h": "Upah satu lapisan",
    "hire.lead": "Perlukan papan pemuka, rangkaian peranti, API, atau pelayan yang menjalankannya? Upah saya sebagai perunding untuk lapisan itu. Jenis kerja yang sama dengan sistem di atas.",
    "hire.plane": "Saya juga urus penghantaran dalam Plane yang saya host sendiri: tugasan, kemajuan, dan koordinasi. Ia datang bersama kerja, bukan produk berasingan.",
    "svc.ask": "Masukkan ke ringkasan",
    "svc.iot.title": "Integrasi peranti & IoT",
    "svc.iot.body": "Sambung lampu, kamera, dan sensor. MQTT dan ChirpStack untuk peranti, Node-RED untuk aliran.",
    "svc.iot.1": "Mesej MQTT dan persediaan peranti ChirpStack",
    "svc.iot.2": "Aliran Node-RED untuk lampu, sensor, dan kamera",
    "svc.dash.title": "Papan pemuka masa nyata",
    "svc.dash.body": "Skrin pemantauan yang operator boleh guna. Grafana, atau antara muka tersuai dengan HTML dan JavaScript.",
    "svc.dash.1": "Pemantauan dan amaran Grafana",
    "svc.dash.2": "Skrin tersuai dengan Highcharts dan amCharts",
    "svc.back.title": "Backend, API & data",
    "svc.back.body": "Servis Django dan REST API, dengan storan yang sepadan dengan data: dokumen, jadual, siri masa, atau keadaan laju.",
    "svc.back.1": "REST API Django",
    "svc.back.2": "MongoDB, MySQL, InfluxDB, dan Redis",
    "svc.erp.title": "Integrasi ERP",
    "svc.erp.body": "Sambungan peringkat sistem supaya platform operasi boleh bercakap dengan ERP sedia ada.",
    "svc.erp.1": "Integrasi untuk infrastruktur pintar",
    "svc.erp.2": "Mengikut skop sistem yang anda sudah jalankan",
    "svc.auto.title": "Automasi aliran kerja",
    "svc.auto.body": "Saluran n8n dan aliran Node-RED, termasuk langkah berbantu AI bila proses itu memerlukannya.",
    "svc.auto.1": "Saluran data dan automasi proses",
    "svc.auto.2": "Langkah berbantu AI bila ia memang perlu",
    "svc.deploy.title": "Deploy & kekalkan routing",
    "svc.deploy.body": "Aplikasi kontena di Linux, domain melalui Traefik, hos maya di Proxmox, amaran di Grafana.",
    "svc.deploy.1": "Docker di pelayan Linux",
    "svc.deploy.2": "Routing Traefik, hos Proxmox, amaran Grafana",
    "brief.legend": "Draf ringkasan",
    "brief.hint": "Buka WhatsApp dengan nota ini. Tiada apa-apa dihantar sehingga anda tekan hantar di sana.",
    "brief.notesLabel": "Nota",
    "brief.notes": "Sistem apa, dan apa yang tersekat?",
    "brief.error": "Tulis nota atau pilih satu lapisan.",
    "brief.wa": "Buka WhatsApp",
    "brief.mail": "E-mel ameen@loranet.my",
    "stack.h": "Alatan yang saya guna",
    "stack.lead": "Pilih satu alatan. Nota di sebelah menerangkan kegunaannya, berdasarkan CV sahaja.",
    "group.lang": "Bahasa & rangka kerja",
    "group.data": "Pangkalan data",
    "group.iot": "IoT & integrasi",
    "group.viz": "Visualisasi",
    "group.ops": "DevOps & infrastruktur",
    "group.infer": "Inferens",
    "group.delivery": "Penghantaran",
    "contact.h": "Mula perbualan",
    "contact.lead": "WhatsApp, e-mel, atau telefon. Rujukan atas permintaan. PDF ini CV satu muka yang asal. Kluster DGX Spark ada pada papan ini.",
    "contact.waL": "WhatsApp",
    "contact.waLink": "WhatsApp +60 13-326 2017",
    "contact.companyL": "Syarikat",
    "contact.emailL": "E-mel",
    "contact.phoneL": "Telefon",
    "contact.whereL": "Lokasi",
    "contact.where": "Selangor, Malaysia",
    "contact.cv": "Muat turun CV (PDF)",
    "contact.refs": "Rujukan atas permintaan.",
    footer: "Ahmad Mustapha Ameen · Pengurus Perisian · Perunding",
    "mail.subject": "Ringkasan freelance",
    "mail.intro": "Hai Ameen,\n\nSaya perlukan bantuan untuk:"
  }
};

const stages = {
  en: {
    field: { kicker: "01 · Field", title: "Lights, cameras, sensors", body: "The edge of the systems I deliver: traffic lights, cameras, and sensors.", pick: "iot" },
    link: { kicker: "02 · MQTT", title: "MQTT and ChirpStack", body: "MQTT carries messages from the field. ChirpStack is the platform for IoT device communication and integration.", pick: "iot" },
    flows: { kicker: "03 · Flows", title: "Node-RED and n8n", body: "Node-RED microservices run traffic-light control, sensor data, and camera systems. n8n runs AI-assisted process automation and data pipelines.", pick: "automation" },
    services: { kicker: "04 · API", title: "Django and REST", body: "Python and Django REST APIs, including the Django-based traffic and sensor system. ERP connections sit here when a platform has to meet existing software.", pick: "backend" },
    data: { kicker: "05 · Data", title: "Time series and records", body: "MongoDB and MySQL for records, InfluxDB for time series, Redis for fast state.", pick: "backend" },
    view: { kicker: "06 · Screens", title: "Live dashboards", body: "Grafana and Node-RED for real-time monitoring. Highcharts, amCharts, HTML, and JavaScript for the interactive screens.", pick: "dashboards" },
    run: { kicker: "07 · Host", title: "Docker, Traefik, Linux, Proxmox", body: "Containerised apps with Docker on Linux. Traefik for domain routing and reverse proxy. Proxmox for virtualised hosting. Grafana for alerts.", pick: "deploy" }
  },
  ms: {
    field: { kicker: "01 · Lapangan", title: "Lampu, kamera, sensor", body: "Hujung sistem yang saya hantar: lampu isyarat, kamera, dan sensor.", pick: "iot" },
    link: { kicker: "02 · MQTT", title: "MQTT dan ChirpStack", body: "MQTT bawa mesej dari lapangan. ChirpStack ialah platform komunikasi dan integrasi peranti IoT.", pick: "iot" },
    flows: { kicker: "03 · Aliran", title: "Node-RED dan n8n", body: "Mikroservis Node-RED jalankan kawalan lampu isyarat, data sensor, dan sistem kamera. n8n jalankan automasi proses berbantu AI dan saluran data.", pick: "automation" },
    services: { kicker: "04 · API", title: "Django dan REST", body: "REST API Python dan Django, termasuk sistem trafik dan sensor berasaskan Django. Sambungan ERP duduk di sini bila platform perlu bertemu perisian sedia ada.", pick: "backend" },
    data: { kicker: "05 · Data", title: "Siri masa dan rekod", body: "MongoDB dan MySQL untuk rekod, InfluxDB untuk siri masa, Redis untuk keadaan yang perlu laju.", pick: "backend" },
    view: { kicker: "06 · Skrin", title: "Papan pemuka langsung", body: "Grafana dan Node-RED untuk pemantauan masa nyata. Highcharts, amCharts, HTML, dan JavaScript untuk skrin interaktif.", pick: "dashboards" },
    run: { kicker: "07 · Hos", title: "Docker, Traefik, Linux, Proxmox", body: "Aplikasi kontena dengan Docker di Linux. Traefik untuk routing domain dan reverse proxy. Proxmox untuk hos maya. Grafana untuk amaran.", pick: "deploy" }
  }
};

const tools = {
  Python: {
    en: "Backend services, together with Django.",
    ms: "Servis backend, bersama Django."
  },
  Django: {
    en: "REST APIs, including the Django-based traffic light and sensor system at react.net.my.",
    ms: "REST API, termasuk sistem lampu isyarat dan sensor berasaskan Django di react.net.my."
  },
  JavaScript: {
    en: "Interactive dashboards and interfaces.",
    ms: "Papan pemuka dan antara muka interaktif."
  },
  HTML: {
    en: "The structure of those dashboards and interfaces.",
    ms: "Struktur papan pemuka dan antara muka itu."
  },
  MongoDB: {
    en: "One of the stores I use for time-series and relational data, with MySQL, InfluxDB, and Redis.",
    ms: "Salah satu storan untuk data siri masa dan data berjadual, bersama MySQL, InfluxDB, dan Redis."
  },
  MySQL: {
    en: "One of the stores I use for time-series and relational data, with MongoDB, InfluxDB, and Redis.",
    ms: "Salah satu storan untuk data siri masa dan data berjadual, bersama MongoDB, InfluxDB, dan Redis."
  },
  InfluxDB: {
    en: "One of the stores I use for time-series and relational data, with MongoDB, MySQL, and Redis.",
    ms: "Salah satu storan untuk data siri masa dan data berjadual, bersama MongoDB, MySQL, dan Redis."
  },
  Redis: {
    en: "One of the stores I use for time-series and relational data, with MongoDB, MySQL, and InfluxDB.",
    ms: "Salah satu storan untuk data siri masa dan data berjadual, bersama MongoDB, MySQL, dan InfluxDB."
  },
  MQTT: {
    en: "Messaging for sensors, traffic lights, cameras, and services.",
    ms: "Mesej untuk sensor, lampu isyarat, kamera, dan servis."
  },
  ChirpStack: {
    en: "IoT device communication and integration platform.",
    ms: "Platform komunikasi dan integrasi peranti IoT."
  },
  "Node-RED": {
    en: "Microservices for traffic lights, sensors, and cameras, plus real-time monitoring screens.",
    ms: "Mikroservis untuk lampu isyarat, sensor, dan kamera, serta skrin pemantauan masa nyata."
  },
  "REST APIs": {
    en: "The interface between apps, devices, and data. Built with Django.",
    ms: "Antara muka antara aplikasi, peranti, dan data. Dibina dengan Django."
  },
  n8n: {
    en: "AI-assisted process automation and data pipelines.",
    ms: "Automasi proses berbantu AI dan saluran data."
  },
  ERP: {
    en: "System-level connections for smart infrastructure.",
    ms: "Sambungan peringkat sistem untuk infrastruktur pintar."
  },
  Grafana: {
    en: "Real-time monitoring dashboards and service alerts, including the 2-node DGX Spark cluster.",
    ms: "Papan pemuka pemantauan masa nyata dan amaran servis, termasuk kluster 2 nod DGX Spark."
  },
  "DGX Spark": {
    en: "Two nodes I set up as a cluster for Hermes, running DeepSeek on vLLM.",
    ms: "Dua nod yang saya sediakan sebagai kluster untuk Hermes, menjalankan DeepSeek atas vLLM."
  },
  vLLM: {
    en: "Serves DeepSeek on the DGX Spark cluster.",
    ms: "Hidangkan DeepSeek pada kluster DGX Spark."
  },
  DeepSeek: {
    en: "The model on the 2-node DGX Spark cluster, for Hermes.",
    ms: "Model pada kluster 2 nod DGX Spark, untuk Hermes."
  },
  Highcharts: {
    en: "Charts inside custom dashboards.",
    ms: "Carta dalam papan pemuka tersuai."
  },
  amCharts: {
    en: "Charts inside custom dashboards.",
    ms: "Carta dalam papan pemuka tersuai."
  },
  Docker: {
    en: "Containerised deployment on Linux servers.",
    ms: "Deployment kontena di pelayan Linux."
  },
  Linux: {
    en: "The servers that host the containerised applications.",
    ms: "Pelayan yang menjadi hos aplikasi kontena."
  },
  Traefik: {
    en: "Domain routing and reverse proxy.",
    ms: "Routing domain dan reverse proxy."
  },
  Proxmox: {
    en: "Virtualised environments for hosting the applications.",
    ms: "Persekitaran maya untuk hos aplikasi."
  },
  Plane: {
    en: "Self-hosted project tracking for progress, assignments, and coordination across engineering teams.",
    ms: "Jejak projek yang saya host sendiri untuk kemajuan, tugasan, dan koordinasi pasukan kejuruteraan."
  }
};

const toolGroups = {
  Python: "group.lang",
  Django: "group.lang",
  JavaScript: "group.lang",
  HTML: "group.lang",
  MongoDB: "group.data",
  MySQL: "group.data",
  InfluxDB: "group.data",
  Redis: "group.data",
  MQTT: "group.iot",
  ChirpStack: "group.iot",
  "Node-RED": "group.iot",
  "REST APIs": "group.iot",
  n8n: "group.iot",
  ERP: "group.iot",
  Grafana: "group.viz",
  "DGX Spark": "group.infer",
  vLLM: "group.infer",
  DeepSeek: "group.infer",
  Highcharts: "group.viz",
  amCharts: "group.viz",
  Docker: "group.ops",
  Linux: "group.ops",
  Traefik: "group.ops",
  Proxmox: "group.ops",
  Plane: "group.delivery"
};

function boot() {
  if (typeof document === "undefined") return;

  const state = {
    lang: localStorage.getItem("ameen-lang") === "ms" ? "ms" : "en",
    filter: "all",
    stage: "field",
    tool: "Python"
  };

  function t(key) {
    return (copy[state.lang] && copy[state.lang][key]) || copy.en[key] || key;
  }

  function applyCopy() {
    document.documentElement.lang = state.lang === "ms" ? "ms" : "en";
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      el.setAttribute("aria-label", t(el.dataset.i18nAria));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      el.setAttribute("placeholder", t(el.dataset.i18nPlaceholder));
    });
    document.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.setAttribute("aria-pressed", btn.dataset.lang === state.lang ? "true" : "false");
    });
    renderStage();
    renderTool(false);
    renderView(false);
    tick();
  }

  function viewFromHash() {
    const id = (location.hash || "#board").slice(1);
    if (id === "pipeline") return "board";
    const el = document.getElementById(id);
    if (el && el.classList.contains("view")) return id;
    return "board";
  }

  function renderView(focus) {
    const view = viewFromHash();
    document.querySelectorAll(".view").forEach((section) => {
      section.classList.toggle("is-active", section.id === view);
    });
    document.querySelectorAll(".nav a").forEach((link) => {
      const on = link.getAttribute("href") === "#" + view;
      if (on) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
    const active = document.getElementById(view);
    const heading = active.querySelector("h2");
    document.getElementById("crumb").textContent = heading.textContent;
    if (focus && heading) heading.focus();
  }

  function renderStage() {
    const data = stages[state.lang][state.stage];
    document.getElementById("stage-kicker").textContent = data.kicker;
    document.getElementById("stage-title").textContent = data.title;
    document.getElementById("stage-body").textContent = data.body;
    document.querySelectorAll("[data-stage]").forEach((btn) => {
      const on = btn.dataset.stage === state.stage;
      btn.setAttribute("aria-checked", on ? "true" : "false");
      btn.tabIndex = on ? 0 : -1;
    });
  }

  function renderTool(scroll) {
    const name = state.tool;
    document.getElementById("inspector-name").textContent = name;
    document.getElementById("inspector-group").textContent = t(toolGroups[name]);
    document.getElementById("inspector-body").textContent = tools[name][state.lang];
    document.querySelectorAll("[data-tool]").forEach((btn) => {
      btn.setAttribute("aria-pressed", btn.dataset.tool === name ? "true" : "false");
    });
    if (scroll) document.getElementById("inspector").scrollIntoView({ block: "nearest" });
  }

  function applyFilter() {
    let shown = 0;
    document.querySelectorAll(".card").forEach((card) => {
      const tags = card.dataset.tags.split(" ");
      const on = state.filter === "all" || tags.includes(state.filter);
      card.hidden = !on;
      if (on) shown += 1;
    });
    document.getElementById("shown-count").textContent = String(shown);
    document.getElementById("none").hidden = shown !== 0;
    document.querySelectorAll("[data-filter]").forEach((btn) => {
      btn.setAttribute("aria-pressed", btn.dataset.filter === state.filter ? "true" : "false");
    });
  }

  function tick() {
    const stamp = new Intl.DateTimeFormat(state.lang === "ms" ? "ms-MY" : "en-GB", {
      timeZone: "Asia/Kuala_Lumpur",
      weekday: "short",
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hourCycle: "h23"
    }).format(new Date());
    document.getElementById("clock").textContent = stamp + " MYT";
  }

  document.getElementById("stat-systems").textContent = String(document.querySelectorAll(".card").length).padStart(2, "0");
  document.getElementById("stat-layers").textContent = String(document.querySelectorAll(".service").length).padStart(2, "0");

  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.lang = btn.dataset.lang;
      localStorage.setItem("ameen-lang", state.lang);
      applyCopy();
    });
  });

  document.querySelectorAll("[data-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.filter = btn.dataset.filter;
      applyFilter();
    });
  });

  const pipeline = document.querySelector(".pipeline");
  pipeline.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-stage]");
    if (!btn) return;
    state.stage = btn.dataset.stage;
    renderStage();
  });
  pipeline.addEventListener("keydown", (event) => {
    const buttons = [...pipeline.querySelectorAll("[data-stage]")];
    const index = buttons.findIndex((btn) => btn.dataset.stage === state.stage);
    const key = event.key;
    let next = index;
    if (key === "ArrowRight" || key === "ArrowDown") next = (index + 1) % buttons.length;
    else if (key === "ArrowLeft" || key === "ArrowUp") next = (index - 1 + buttons.length) % buttons.length;
    else if (key === "Home") next = 0;
    else if (key === "End") next = buttons.length - 1;
    else return;
    event.preventDefault();
    state.stage = buttons[next].dataset.stage;
    renderStage();
    buttons[next].focus();
  });

  document.querySelectorAll("[data-tool]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.tool = btn.dataset.tool;
      renderTool(true);
    });
  });

  window.addEventListener("hashchange", () => renderView(true));
  applyCopy();
  applyFilter();
  setInterval(tick, 1000);
  startField();
}

function startField() {
  const canvas = document.getElementById("field");
  if (!canvas) return;
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (motion.matches) return;

  const ctx = canvas.getContext("2d");
  const dots = [];
  const mouse = { x: -9999, y: -9999, on: false };
  let width = 0;
  let height = 0;
  let running = true;
  let frame = 0;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.max(26, Math.min(72, Math.round((width * height) / 20000)));
    while (dots.length < count) {
      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.32,
        vy: (Math.random() - 0.5) * 0.32,
        r: Math.random() < 0.18 ? 2.3 : 1.25
      });
    }
    dots.length = count;
  }

  function draw() {
    if (!running) return;
    ctx.clearRect(0, 0, width, height);
    const reach = 138;
    for (let i = 0; i < dots.length; i += 1) {
      const a = dots[i];
      a.x += a.vx;
      a.y += a.vy;
      if (a.x <= 0 || a.x >= width) a.vx *= -1;
      if (a.y <= 0 || a.y >= height) a.vy *= -1;
      a.x = Math.max(0, Math.min(width, a.x));
      a.y = Math.max(0, Math.min(height, a.y));

      if (mouse.on) {
        const dx = mouse.x - a.x;
        const dy = mouse.y - a.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 170 && dist > 0) {
          a.x += (dx / dist) * 0.35;
          a.y += (dy / dist) * 0.35;
          ctx.strokeStyle = "rgba(216, 106, 31, " + ((1 - dist / 170) * 0.55).toFixed(3) + ")";
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      for (let j = i + 1; j < dots.length; j += 1) {
        const b = dots[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);
        if (dist < reach) {
          ctx.strokeStyle = "rgba(23, 22, 20, " + ((1 - dist / reach) * 0.2).toFixed(3) + ")";
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      ctx.fillStyle = "rgba(23, 22, 20, 0.62)";
      ctx.beginPath();
      ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
      ctx.fill();
    }

    if (mouse.on) {
      ctx.fillStyle = "rgba(216, 106, 31, 0.95)";
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 2.6, 0, Math.PI * 2);
      ctx.fill();
    }
    frame = window.requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    mouse.on = true;
  });
  window.addEventListener("pointerleave", () => {
    mouse.on = false;
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      running = false;
      window.cancelAnimationFrame(frame);
    } else if (!running) {
      running = true;
      draw();
    }
  });
  motion.addEventListener("change", () => {
    if (motion.matches) {
      running = false;
      window.cancelAnimationFrame(frame);
      ctx.clearRect(0, 0, width, height);
    }
  });
  resize();
  draw();
}

boot();

if (typeof module !== "undefined" && module.exports) {
  module.exports = { copy, stages, tools, toolGroups };
}
