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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXYDAXWS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T094028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0hXeEUXkzRR5XAMXFBRTHD64X2vxe29pFJDMEFdE82AiAM%2Fg%2F4JR8eq86ULqkUiGy8NXMqtbfmVWHih6KAw%2FYHYCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjRs1ivglo2Pwnj98KtwDM1ti9S4VmDZCYTX033rx724CHk8I%2BMZjagwpNNg9GGYXyL5k5PlOp3cT90FlhOMsK6DOA4BI%2BfHA96pyW7kFHoWe3avorbkmjpEQQkdYY8Inefscfzsex%2BeYs3gDnBg2t1U4M6ttfbYXnu0%2B9Bbd8XdFxU6PJKMDZGGxSvqSeoaeIeG15Eq%2BTolkJuaTsFsW7g7uehD6mvENL97M9pqBmEdtjR2B61PhCxbHi4qkWzWSi7AimEOB%2BhE46nSHKV6O%2F%2FBTdi4xXJ4KwG8t%2Fa6%2FBbKbfI9qZAfeToNONYODxUVGxyddkFyuUS72WtXpEof9KVBH%2FN%2BwSd%2BHg8hmjOwE%2BOZSIpAIkQYWrV%2FcBy17hDLd43X1AkXSGzWwXW8i3bhy02ujyOwruq1PAxasXHq1q6txnQDgPZlbQPI%2Bz%2FkYyPYBV5lJYIz142UVhou4jteBE9s00u2p5XpYwjHbHeNaQdikpB6%2FDz3MZ6u1Jkt5lXlkMqywZGxZnFhQM8JT7FGefP%2BhzpyNujny7ABdNSGRGbrfW5Yfq7jZd0fcxxua%2FcSqAsearNXwWRMHhO3N2xPuTQ4QK%2BdBA3SiQE3q4l3dwD1S8eKM%2FGeGGf1hy14bQck1D%2B1o5l2LlO%2FD3HkwiKLUyQY6pgHAdlQcitbjMeXVJacy0N6g1ynjT1Jh5%2FuGGzVG8xlAeaKqXe93Vqur2QxMeVATAh4ycT%2FVeuJBKWs%2Fq8BDYUH6fgDjMBney3WhivHKH4GR7MuuR5SA9P4k1SPI2fZuvwt0L5EJc67lU5%2B7tQDN1wei7u4gBNd8I4lo0S2sEWBEOzj2T1JGwt2ITIyY2%2BHqbw8LQL2gVcZlarWA6X%2BAo%2BPTvfeIswQW&X-Amz-Signature=6b51e42b7c383303f42b58a4a0809247ec58d5e5890404fb5e09ccad8c033c65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

