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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4PN5D37%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T233902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWzvzb29FQKGT%2Fr3fvz2rgISydWROi6wnSFQ1ZY%2FyWxQIgaedd%2FLUOSYAOu8lLxF7EV7ycUWFPquPYeQzLjtF86fgq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDDkeJ512lgKxNDlVuSrcA4e7DWzokESMc7O8QheI4MNnxQma4ZIvhl2WCRymgQHS9XeA17F8egOQ1dDzlwz1Es9YAjURsE3zEI4%2BVFI%2BVieNv3TFT5wrxVoO%2Fj9qbLrIvToyhEqM3rEDkD4R%2BJNUeU2ttJtTBxuqilnY6kb4SINfPJMBEzZ95WlhsHsSo6IIE3zpoEbvb5eiKaVH%2BaAm6AXCEFaZjXhuVWg71xwN2CFciPCumbJDPnjd%2BzYROLj%2BWpLOwSRi2ztoJW4I9E9HDed3p5JoFkaUeQghbUfjMOAx9OYAg6Fbkft1I4N5bnY2ATp0ugCIfunjJL9XeEVaci2lPonwVSQxkMijH3%2F5GoEXVMfNyTNamYZAK0vCpmmzH4UnqO7JrQcbDHZvMLMYCZyQ3ZVWrHpgrkBndmaSDD2EH5kc8kypgid2Id0zNleQ43kaZ6hYkLMACitdFQgYA96PtOdr68yZeEF4dy8pjHqmxRyLlofArRakPK%2BSgMWK0vgXg%2BXYlu2WN761aT4cvzpwyeCzoKERr9h96vmbzgWoPgFYCJpXBNbjdOF8qsu41lVJXz366wfbbOxGOSDKxRyYq0o02%2FoSrp1OQ2HYX%2Bq4LG9FcZJpRUALE%2Ftc0YtEqxgtAE7%2F5eCdbty3MJbT0skGOqUBPFbulS4u2vDa0nf%2Fv5bKbdKLBhsUgOywyEaNIBaxHwCh1qEcsmTZ6%2Fy4XA1oKK3VTwWjupdtaJJL8Z9pCHi3u681gkbu65T%2FioyGSAdjIMUPQW1FK1hLKLdIFqiezy%2BDL8BWZalzZlynr9ADhBeXfATt%2BWWxlAi7LarDyfiOhGGNqTKDd26nNAB2vzbJUw8fn%2BiFB%2FV0ofLQI%2FoWlBiX%2Fe7yJQDs&X-Amz-Signature=aef664f1701df13973b579e17e0617fb7f079735cbb47e2d0ed8f48eec19b339&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

