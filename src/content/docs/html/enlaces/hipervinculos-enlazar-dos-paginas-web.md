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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGFYCJIK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFfHVl3dKKN2FbsWpJ%2BlXDqM%2B4Rt32p%2FlVVil8DqNaTAiABqNU%2FmS84B7PD0xphlGO1joJ%2Bc5P8s1TwIu2CoqEAJyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMlB3k0m3Qo4TcZ5CLKtwDNosbvW%2FDPkDZulLpqp9DriKLf7Eo%2FDZOYuPgazS8CUJUZpM6OVeJBC44EGL9TK%2Fv58EKedQxKzeGc2zJC28rHPlJAJhZZjcE0I%2Fp%2B3w5kPexktUpGcuOaZ2jSkQFvwd9Uc0OQ5EEc%2FUU13TAac%2FOVH64UuzLADf0mCUwa40s%2BrkB9WoXgNQvomDHiJ7eu7geVvjxlwBjv2zk4TLsGrhCzj%2FpJkCXgkiU8hZTikbtYs4BUcAMyJshuRNIBe1X82WSfZEtNN%2BVcnOyUXPDDEVNSdfEqfJAH1FSbkO6NGoLk2CL6qTNusxqI%2BrTuADcck9f5LHkc3o0TBRpz02DJvjBLnGO1Orm5VfrbGt1nWKH0czw9urGFzU06XdKeRR%2ByfcqdyUnYNPVdRhiylfyivyE3L5epGRo1JMpsbV1TbiyDGNhmAiZaCBrzyX9eskFtOAdklF15QUfNw9ssK9v7kxEmtx50Om83ipnQ3ax9rgH2RenOV1PP%2F6fa%2FA%2BGTm0h1TTVv7xtdsnVEtFTqYjFMl7GXvg%2BG2Od%2B9VvChVlgzo6Zwtmw5CNympPbn8nU5CIc45w%2BbZaJ%2FABXAmTey6kIJrFEg53jzy16eudE%2FKSv2qbsD7NpSL0cuvPQfLxsowjafQyQY6pgEJJS%2FLtp46amBv%2Bakh842fr10Gg1E0ML2qWKDKvlM%2BMWDmjiDLYr8UP55SpITTzoRZAl%2Bb%2BhvgNC0HSqhlAUShmhalDPMeL0QBaQJ3QHV7TbhKF9pb7wrGzvIid2iL41Or75KnSKlX2vXcwwl8CrP6i%2FBtpC2U0K55U35MY6aJUC%2BxrKD73qwR4Kuv5KG2auGWYyq%2B%2BeTnkHm6ynJ8XqhWRHjM3D6Z&X-Amz-Signature=cd4fa7eebed2a0eb04d6c64235837f8d888e5ccd2ee7d3310de095ee0992b6cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

