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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z43LNHXM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T080531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3waVRywsmx16lZNpjyNc9iOx5rdl7duQWVLga9PKiTQIgJ8O4z2j58Vzf21%2BIn8V3QXP4vi64Xb9j7NveRJLxrLoq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDGR%2FgAXxkNn1oNDk8SrcA1Mh2deYHtw8Hi7rShmn5qOFIlzwTPj065By3YoJGUPLOJiO874k9nAfQQH%2Fe7eQMuZC4G15MCU4bio9aRL4ODLjiX%2FCl8o1k9z1yOu8s0%2BhyEd1nFgYC16WXqWPYgwr7gmvLFi8UuroWIf2DPh0hn2ZFZjcy6DRLvriuzHc0Jfp4ZMUOypdYNviaPTigUgIkZGopZGyUHF8EopeHQRVMqx5UeiDDiReVGpksxNcFn39fLLHCU7d0i7NYY0tIUhXqe2UVK2phU%2BlMnFzfBtAJIyVgi48LS%2FuTWSXAV9K2ttD0wv8fE9hCONsq2%2FXcvFvtGToc5rI%2Bl09O%2B5oz0iI%2BQfJ4vMVxXcYpu5CfuubnwDqLt%2Fe40Y1zPl2HX6yLAHan6kj7D29iPCC%2F4jTX5XWbTzpITIo2ZfFXjAsaRq7ecILUxV%2FvYkoiNxaoEL74c2JPFgt6p3%2BZqypmM2huH%2Bbt4jVWkha29UR16xj74TI%2B1ETd7ZOpxRd6AUFw1nPk%2BjtbMIMbTLdLAI4DFGH46HIT2by0Gxd4R9ISEGM7LUitTfam1MUEISdj2WJeh3uOTu7oBKnooXuc6LNFaVydwE4qgyWc1IYShTja1Fx%2F65CaEJS%2Fq2VBM%2B%2BpGpDmqt%2BMLyryckGOqUBKfY41PXb6EOSoyQ6SZn9XOXT5Msg8fwRqC1xtU9NJWOmoQn5i5MslWeSGIZ3NjOX1c76uGGZKu7uBYjGgApstCM5kyCs9LeW9YNTx6SB%2F%2FzNJQBpJCq66%2FX0POftfBOySrEO%2FhUhZhUxicVk0Xvr6gkGQPXWgOJS9gvR749KysT%2FJRqIe8Uq7XjALvA3ay0Hu4Nkv2wPvEOu%2FJFTeZn462nwxIsk&X-Amz-Signature=9590c85084621bdde8da65f864324c057d85dbf8406cd6096800d89408f66547&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

