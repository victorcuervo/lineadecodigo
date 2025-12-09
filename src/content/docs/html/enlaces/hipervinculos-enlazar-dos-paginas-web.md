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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WREYUVQP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T021423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYlebNdDf3SxKmN1cSbAuOTFUYYmrRSLVxE78rylcL4AiEAvJhLtIst7Fb4PRZuxUMToa5dlqMzb3VTYDX0U%2BF5AzMqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPuimGHqdaKLFOFCCrcA%2BC42sTFHBi2P3hAthE%2B%2Bcm0alBfHhJkupAQuysGutRcOrE3O3z7DuJ%2BtgjOIudAKWjHpqDqRqj13QEVavP5fbb6bzImom34KDeS%2FEH7lBqr1RkMqX8S2EvXdrX8xxt1s3DPdp2cdezpW7ZVzFPb%2FNBu%2BY4YuV3YCG9uWK5pwFADANbHwwLsFV%2BumuRiZnvUIuJFTMVQYVIs0gWyTvwtmD0s08ztWwnvzdazQBWzzzlu3FmY0HVBjm%2FM%2F3Gua507A7vPkgYF8t8ELtofacjmIa7zGCRm%2B8TQPgDuE%2BMerYEW5pDgL2BYWEDenNTaciFZB4%2FtRnacbcCWVYEfnBnmZDP%2FAyQZY04hjnWkq687fWRE%2BkK75G55XiuHVCbTSh70%2FcRTYnaAWzitLNDYWDf%2BIOWIKcIXpBjqVrxICuZx6Eu0uJce9Z4VaJgleqt4aCY30VXqGDVAWRTPaC%2FNTUfi30RhjvgA5wq38mhsiBZD5eME%2FmOIr%2BBtI26HEorgQ0B2Y6iMLTid19I9i79LeyZmki1OoD2tN7uXGGbJnMR9elH%2BLEcCCN8aAoxotrVLTHGNuGI000HEYcY5LQ0qkhjHfVVsJtZxKdc%2B%2Fc%2Bz0vEzqBoKVNDdcZmwwjXFGk7BMPPp3ckGOqUBYKVKQychkcAXQzXGQgEnx9u0BwwrcU%2BtglLf2PhpXqj54r7gQpS%2FpqOeN1torPbAKzvlfDn8iNPM4eC1xPWhBDYNOZRj6v%2BiWSg7ceC7KHaNi4KpSo1la8P57iUP36a8ZYcZcObILIpbOyBxerpyx2cVYpL%2BLIc4SRvN95QVkrHsb2rmVzdtVpEFIWr1XpfK2owijAMMGFyzbmVAR8us%2FZf2mfdC&X-Amz-Signature=eb8e55600c2146ae21e00285622c5087a1804209ca52594b1ed3ba558e7e7713&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

