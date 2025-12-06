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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GZ226AD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T072323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtr3Xj7V9yrb7jMb7Y87emFs%2BeQx1T0LF3lmGjWTRpQQIgL5SEfFgpmm0zgyv3MYBhSpNL%2BOmet5paoFa%2FnBWH9DEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEhALOzTLE%2FibYPK3yrcAw3tSPzZg8fKg0FEoEmMi9Oo70RrYym4mZFeu67UTBxfw2WtRd6JUHQmu1sTOVwJeYrIQqhBuA91JwovYgulXrZJaU5af2xcXennUOId6giBb9ixjkdA8%2F%2FfILPyD7uLhG98r1eqjlI4kE%2Bn79%2BYyrQ4Re84W%2Blay5mitKxxMoe8bjIA9HOPWB8uKsL7ZjmHfIuDrHQmLyo5%2BvGLixhUVdfgAkT5ctBIVwJZMf%2BibKmE8dpwvMm9M8LDA4SqHN%2FN6GiT%2FOGzbWh%2Fzsw44YM4k8zobxrQzY%2BmODPyqIgO6NUINYtyW03eOrtnQBmzRX1kt6wJDUWGyCvIj603XLGlqvgEh3pYoqSgEjRYouHCL79lsCRJXtUj2QyG5ayZo8m1gk9QeIJ70HGbtUa7Xo8uYc3vKdyX27azm%2By45qKPbpNF97bLVLNY2Hi8DiOaLcs4sW8r2HXS4ywl2iII7jGRqcFViZU%2F24OW%2BZj%2FMPV4uBs0oANTPgOBuWquxZbVkp2TGvobBGsZfBWuHD7fhs%2BBfnT3YRwVxMnQ5Mi51AdkvWzPWx1lELbtvI0gYyno106fTI09T0WHnjn%2FuHNTkcmR%2Fw9dHcrI34Wy8t4ULsKaDrEuLWnIY3%2F2zPcOBDGiMJyfz8kGOqUBXoBz1TE3ymYlIOYwDN4FWDlvrfebRDQnL7YnrcYDvObwl1Ukb4aV6mkxchI5ZfcDtlOPgS1%2FmbPlslb%2F%2BEcuxaIXkfncfUc4TObDK5jA30YBA8UbuxlroITiGwx8HcVWP3yzLkE8B6%2FwiFKMWYbNMuqielNbYskKwowgFdc4vLcUIDoMStw81sQdsuUJ4e%2FuyPoU6AvKAb%2BsZCLhDGqdXzhs%2FKJ9&X-Amz-Signature=dc7f177e29a4b5d5c735eeb7a3e83c6d2ecc1e379c643bd10209e0bcc3015d3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

