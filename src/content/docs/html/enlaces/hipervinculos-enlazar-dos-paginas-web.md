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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y73MMORE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T004227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlCDUdE8gA2hpb5rGmZ8grVvvq%2BIv7%2BQYZnefSLk0RsAiEAso4uWHadRMfV77Fe3GZKXsXaS%2BenlrJEGuyeD4ghkB4q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDG3QI4bRtFvrEWcTjyrcA1mOIErpz8WNaSt6wrRW3pZSL5TVgTwOo0uWBqbQtoCpqsqek%2Fzsk6yk162J4CyKD4rzgKBk8Jy%2BqeJBpE38keqtG6Jy3mg%2Fix59kTn%2BtQqgqt7vHDJ2c0yj3iwhKl1X5vHEtoST0%2FqM935zVyYpI2giaqmst0QYVJbi3lm7rNLh8bouyT%2FlvSCsU8%2FsxzvpAkZBB9dEz4YBq5PQTGX2R1y3KOFgcNv5bxA1zvuGaVm3gFzobWfASrY2rWw9Xxo5A7m4T0Tnd9MTKMg9TZtrD6YB00wol5sP%2Bxn30R3hb7KI7KDUDwSHDzBbY8Jd6wE2s16BP4Op1bZJ%2BPbpX%2BFzAMIfsApz5hXBZh6mubvEhc%2FvHihNDr7e8GuhXLNCOTL0QwkNztR4f6TAwBnpWNc1zDeIgHDcBSAckqh%2Fva49PH7GXuowwKkpDHrF3KCouZ08Um3ANg8SvOLfcJfZqD2J2z5wu9D7GGCrx%2BbPZwbPqZTqBxe%2BMMMvbF%2B5qPnbuMxXfG7uYTYSe59ZQbg3igvf7K4v89Ul0rK2Vslc%2BOrQReSDwOEo1tEX0aL0IV9QbbEeoRuW988OdQ43k4VUTyNT2lCO5%2BcJtgd27%2B5zmv1IBLS1P4AcAm4%2B0NAxTQ20MI%2BMyMkGOqUBUW%2BA2gIzBBjrU3zFwTewd%2FoG9T4iD2EuOx59qDlEqoQVKqxRqQWrcDAPwKzciZuL%2BScpT1y1zEphXmChwnZFcjU4X4gRxUq%2FIW8dkitIlM8%2Br7MfX8yH1qi5LSWJWNrfoW0BbRxOpAxchs22JJE1u1cPO9WALQbJDNlw%2BQKF8YhY8%2Ba%2FHZDhNBUwHWoaIL0Nk1voDk%2FWFOs35S2kkHtp%2FIfdZk7J&X-Amz-Signature=c9921316ee1d3a95bffd896d788b2ae0a0b4839e54b9985bf6d12eea897ed717&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

