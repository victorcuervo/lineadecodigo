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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5CFXN2A%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T175516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDS1w%2FPS0Awm%2F0Ciq46OJjnG2o3TzE7S7Qos70yOusBQIhANRUbEz6kGia747Zk9fzEfx2k2aA1nJYHGnKYmQOHHANKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpRdkIG3azLyfDtiwq3APgeem5Wnpc8EsC%2FmJVGq57vWQQKQ5l%2FmLimf1mX6uWj1ZkbxJM%2FZhkMT%2BDWvl1coBRdEpMGwI7XXFJJPjg%2B%2FN7OyUIPcPCpI2JyzF9mwnsiDQN0iNxc58OPDtb%2F%2FE1bhHqnBnCjBUhtC%2BjQOWB0Pfqu%2F5ZN7OrQhs%2FXBOyas%2BTJbJL9XHiaDme65L6jYyt0fOBIk49sXRr8DOTEArtfWz6EKlZNXVHnw0jO7fzfmnPec0PBCBueEDu7Og6BKaOJQaxkqKuJwHOiiZe2mbAOvbwUa4pSdNnakt18EDHmTtd85Jgb7d7dVP66v5434PwaxTCPwttV34MhwKH9Kd21hvZdtUNeHTcUSOhBd0td8joMoWMe3PaIYnCryp0%2BwJMI6Q16YsfS3xSwLyMF7lDqPGTiwEXwJs836EClNPFfOWJKO8Q5dcwcrBDvjPW%2Bt7vVAWHGKhxnmixv0c%2FDi8xn3Bc2C7bE2OvtJNub3eW7uZa1E8R%2BLto6ypg1cOuRO37HVCNh9Yhh3%2Fhyv%2BaZjaqthhMcrUr0eifoKYRA9CxdbSWh6oHCpPUt3gY8Cxn8UPI6oDlEiMcf3pVN6tA7VgCTDpQQO43fTMgP3%2BGoxdot8Std1OoT6kuxVjEw2p7PzDlhtzJBjqkARvQI7xSr3O9U343hU6AgQH57jMM3FzihnKbiYajgXTAV7055ZW8Siz6s1zi2XjaNG3xN%2BfNhT28Mh%2BFkVkOlSdeinbAC24AM6m7vK3tGRbumId%2BJIGMOrAnfC42Nam%2FBN%2FzZ3X%2BUjUt9yi35a6tjiwZDbLDEnxIuwOQLRsvnksmOpjpu78rUDlu%2BlBTm7p40R7HjapzGOwQysk8vUetrFT5MWrn&X-Amz-Signature=e7ca4867b9bf026093497008a65256eaeb85d0e50d2997969bdf67945fa7016d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

