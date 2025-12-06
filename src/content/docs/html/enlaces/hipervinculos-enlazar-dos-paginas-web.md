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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD6AKOP2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDRdxU6wfBteGva7a71skv%2FEz9hzBUQ7KKZ7HszpHeEAiEA%2BKrQRCRpIz35Y1FAslokFLnucAIqO70uQy%2B4by6uS%2FEq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMX1HFmC6NJQ7idxryrcA5RKfufGjCWkJVVtUxqaNbYk4V8EHc4d%2FnXziwOVVZHTc982OMOR4CKlMKZSuUd8OH47i75RBhT9oAvcK7k4l2kRv0exQLZu8ZG2h8f4divx8G%2FI6ai%2FJ%2FGusBZl6%2BQ9j5W0e9WvFoRvMP68au7OjrpSLDqTb1Jdnxt48fuNk%2F6Qiyp5xUkztQXPo0EeVidAuKLKaKhBGW7%2FLVIFbZQhDrFONX5UzfbXFFlr8KbR3FI5xLRdnbGwshXixrZ7c9HQMbwPU8rSYCrWGwcgC7eHY3bzptnw0bscyDbQXnAgMxepAWVfBOEMxo9HifPDMilf2EUDh80%2B2SJjVRiwqqKBWqoOC19KChqaybV75Wz6tyYkLewYkgkPBnrS4%2FSgSzAL6ZnOK3JfGMPRnoAlT0oj5rcSp3LPrMNnThN0S698EikMq7vpFecdOzc0yGPHdllRcRxGqK8K9kwBHaPnAjAwyhcm4dGzRf7bEih1qg6FJXhnpnSFDuGlf3VFl596GHkx7VtjNcZCocij892u%2FJBmKhOdgD3x0y9x9hjyUuEILqetAAwJzC8f6J0%2FwakPSN3n9v%2B61iBlp6tDaqpwCnLECmC3r8XkRQ4590o6DSzUkk%2Fh7o9nqWfOjoIBeZRvMJLezskGOqUBGeMHjt61P5E%2BUO8bFUsgNsIMyu%2FWp78JK6cTQ4rXdJSeq8ejIyXzXgZcSlM1KgYgvt35sMA5ZK8P%2FrbTP3is%2BOPuH8hXdxvej46VrQo0Cw6VmrAPp4n%2FS3wkxU%2BL7Ve1kN48aPDttsIKrC0e7%2FbrQmbYu33C1a%2FcAEyB7XVhzuB03QRNAOvoqqmd2RbRbEEeVsdl0Zukzy4uyqXXOwtVrWgg8ZCL&X-Amz-Signature=80e7a1f69f5496d1dd8c37ed907eb65df785f894a78902ce9aa0355fe6346567&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

