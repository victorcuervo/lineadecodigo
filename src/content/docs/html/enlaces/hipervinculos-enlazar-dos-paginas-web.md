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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBEYOZ67%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T165435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuYA6zy8jFsgRYhPpDKLPgSStBRpYqfT50S6njfvXR4QIhAPmupbI3OiqWsGwEfqeSBWsudyZhuZDI0HPCTVcNw3qbKv8DCHUQABoMNjM3NDIzMTgzODA1IgwLHSsKT28IQkMuH9cq3AP2TSDXyDhPLqn0L18xZG08LWCai1Sv9cdgxL4j3w33TPf6GkFZqe59pPd2O%2FWq9BudYEij422Adst4Tnf3oA2sWACWcJyFRwLfrOTm4nyMnEILnICbtGHw8dUIsjl421SjZt2DFAoZ%2BKi%2FQutYumgxRkWySnzXLAgF01MRBrVSM1QbGBqnsMToMA7TVcBZzPxg0aEijkr9uh5yZNS4YBiLxsU0Zm%2Fmtxkwae%2FXQ68%2BlrItT6bZIJHqKBAbgeFdTN6c3CIP%2BKewzqsWs1OwlI%2FNPAJX%2F0XaWFAZYQu9%2BCdlCKJaTePEbI8DVVOdfPzHpGuvEa0MCbRqt0pbdnbU1h%2BKCYxTUctXXB2ezrn7Jj1JqEXib%2BxKuxflwd8QLLjJAmixVPx8JAu2K2NRrBZYl1%2BCiPP7IBjeRu%2BCQwS0PCL%2BqCX%2BD7Tb2NsoiIalYw8PfzChksl59zLAivWAipAml5mCINJSMzIzxegKevcwPNqWgcdNL1OXULzY6OvWJ%2FCtEq%2BVOAwaDIiHCrlUTgnIx2ZxG0ubOwKDXHL4UCaqSx1NWxtuzFUt4BDe8uyGYps9uBVV7kadgS6Mp1C6IZyy1sN%2FFLBgoTEaNQTBAk59ngE17%2BRZ70vlfxt8GY3BqjCEp9DJBjqkAb%2FQMsHFITZXvbkhVfqZ8TygDVcilZc5h9dJUfLWy847ccYs8CDtgpSFGhGX4%2BKfyS93iMTSyxuHgBHdO4CJXg5p5C0UxQgQyVOpi7wUD7b9ch%2FhdAA5gDCV3%2F28Q2jRqBa9uhYkTydyKvXnbo%2BI8OkAZTKGTepAOJ%2BU3b5Opk%2FTfDn7kxWdz2sVrsMjoHnm%2FXdue2khOe9YeSI%2BUu44ei4J4mKv&X-Amz-Signature=946a6c670244ae3118f697754964ba62cf35dcd98cd04b7633e26e7518b3d6b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

