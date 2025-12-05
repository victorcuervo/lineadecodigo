---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
slug: /html/hipervinculos-enlazar-dos-paginas-web/
author: victor_cuervo
---

Uno de los principios sobre los que se sustenta la WWW es el enlazado de documentos. Así que vamos a aprender a enlazar dos páginas web. Esto se basa en el concepto de Hipertexto, que viene a decir algo así como presentar documentos que puedan bifurcarse o ejecutarse cuando sea solicitado. Esta definición se data en 1963 por **el sociólogo Theodore Holm Nelson**, mucho antes de que naciese la WWW.


Una de las formas del hipertexto son los _hipervínculos_ o _hiperenlaces_ o enlaces (forma vulgar más conocida de las tres).


Así que si queremos hacer páginas web utilizando [HTML](https://www.manualweb.net/html), lo primero que tenemos que aprender, o una de las primeras cosas, es [cómo hacer enlaces](https://lineadecodigo.com/tag/html-enlaces/).


Para ello nos tenemos que apoyar en [el elemento ](https://w3api.com/HTML/a/)[`a`](https://w3api.com/HTML/a/)[ ](https://w3api.com/HTML/a/)que viene del ingles _"anchor"_ (ancla) y que es uno de los elementos base del lenguaje [HTML](http://www.manualweb.net/html).


### Atributos del elemento a para enlazar dos páginas web


Los atributos [del elemento ](https://w3api.com/HTML/a/)[`a`](https://w3api.com/HTML/a/)[ ](https://w3api.com/HTML/a/)que tenemos que conocer para generar los enlaces son los siguientes:

- [`href`](https://w3api.com/HTML/a/href/), donde habrá que especificar la página (o recurso) de destino. Este podrá ser con la dirección absoluta o relativa al enlace que queremos poner.
- [`target`](https://w3api.com/HTML/a/target/), donde indicaremos el frame destino de la página. Si queremos que el enlace se abra sobre la misma página, lo dejamos vacío.
- [`title`](https://w3api.com/HTML/title/), título del enlace. Será útil para que se interprete por los clientes qué significa el enlace que se muestra. Suele ser útil en temas de SEO.
- [`type`](https://w3api.com/HTML/a/type/), que especifica el tipo MIME del recurso enlazado, es decir, si es una página, si es una image, un archivo de vídeo,…, ayudando al [navegador web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/) a determinar cómo manejar el contenido al que se está enlazando. Este atributo es especialmente útil cuando se enlaza a recursos que no son páginas web estándar.

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTJURLM3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T122927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoZcAMlU0HkkWJjVrnsnrcjRqHdA5vDsR%2FDAjW2JliLAIge0pNxGSkSMsLg517Sp3Eq0tUZDKnaCknb7%2BR2JDoF2Aq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDKHz0aUM2EedWaKOXCrcA6BiLD%2BcYe%2FjaX9j1GSR%2Bm7%2FFBoYSbJn28HEzIcBbOUmYcAOxLCWMr%2BJwzKIBGwZRLOeau9VCl6pzOC9vSYjX8N3lYaogxMPW3rLOFqMrStgi2cHLsnkS2VOUxgK1tFajkHhVo4OHfSLl%2FDyDfgf6HrWRVUABI4dPuvFLf79IF9RX%2FHyXBb3VRPRzuK0IS%2Fkrv0mC0U%2BLQfLVGbtGzGTWwUj%2BY%2BGpnHxOLt0C4QbG7wudRAzJwesd%2FjUbp8mu7T2mTAVvSY5WuHc65zvEYfL3HxiU8xe5LujZS8vGaSOSlirR9FUBip%2BiyM2Rc4jb18s%2FPcAm2tUQd6MtF%2FuSgF%2FK4SC1rwj%2BpBTwk8ts4La%2B%2Fd9I3XFnW6v2FICpkTd1gblmsutD63V3dDBMe8mZuuiEM2S1dWX7IPg7tAlrOfw6tNYo%2BcVD1oYnrHTyN8FjBwW96LHqK3D1BvCEVs%2FDB%2Bol83%2FLCx03OQU9uYX%2BMijuBh0Y6qM%2BGl9InbxGrzoSHQSVbtvI%2Bq2SEcpTBDpdAFRhd6nr4Y5yERQ3layToTmjLRojJVMbPHoST343nctBkg%2BdKzqNt9hbndsQvLag%2Bhe%2BiBEc6lENaIEFys0n1SKsHUpzQia36w7tR0yQ1ISMJjIyskGOqUB9sBFvAjlKMUwd8SmV82VznPq0xFGomRI3MtBB9NKe9ZX4xazQlv3CQTXKsrnsk4QTNzSduj1jNqXWy3avyHE%2BsQ6TSCrIOdsmq6Kj1XY6%2BYl3AplCT5kmNVzUO34y0xi%2Bkn9qOSRiEtcGdOhdJs%2BZc61oSxikrOkb0Nv8ZBGAqMq6CPPNQ5LGh0PRRqTG3236r3icDizK%2FZ6MHHVDgC7qPWtt%2FG6&X-Amz-Signature=5f38bba52e8e60a7965c023d320c7bcf97fb5fa332704057691ddf0a9f63123f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

