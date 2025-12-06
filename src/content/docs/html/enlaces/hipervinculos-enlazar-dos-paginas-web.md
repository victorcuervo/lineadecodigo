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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZF7WBQX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T123616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2Ov36ZNmSvFp3Y%2FLlnKIkaGpxDamRVAzbmlezAthScQIhAPm%2Bg7IIRFZh1JJ6PHNlW8lkUjHxjWFMfrBEZJg8A5iXKv8DCHUQABoMNjM3NDIzMTgzODA1IgxU6R1nErcwPtBT3s0q3ANyt9ZJ7%2BbDWZttlJSk1O9Zy6hxFmiK2QnqjtpeWrT%2Fu%2FHLXWrZzn%2F8WoXIDqfrL7Tcv8QFkgcMYXuAsITxCqjkibTXyyAT5Hg7QO8FXkBgiL6Xisq5EPk9HxRLXCCYqa%2BVKXZZYvlSNAEHp2HarfsyEX1RE9HsOl6l9e%2BfO%2BosiMTWKy56ZiRqd8X12%2BNS4lzTh9Htb0EhexyKGPpXjLhRa6IoZqqZ8R4b1SGlr%2BxbvmQSBsqkKeyQJ1MbmhbmL1pN8WeecDO7GoTTHa75ybLzVDeqA7vceMXl1l1LGVRHvj2zXWXLRRPafPtpUz7m9SwLSIxVIsNOct2HrJw%2BiSEt7eG4hFsBAcjyc7V%2Frz78RlgCiGr0LaVlv4yaKutBnCSCKpc%2BSUXIYz2jUSbXMl1Cqf%2BLymm8p%2B1bmfrH6D7bUelFmg9jljJ%2Ba36gNz0WcJPTpBwWwXe%2FBDnFX0n7%2BNAg4QOY2VVtgUmDRJGEj9HtOfqgrPse3enaVP1VwM8DJJpPvw0YWClWBmVzYfdg9MLdIiJmJwu6e%2Bmicu2%2FCwJacU86Y78j88DP9fESkR46p5NbCy%2FADOw40PDBvNaHsiuHuuN2crbu%2B8y9wQsARwvKcOLN9uQzJIQ1JuLXlDCMp9DJBjqkAYQqcYE%2BaI%2Fy750bc9oIOW0pV2xv%2FNRCQhFQJAMcbTBtnfoMSiFP98mK7bE2k9wGl9edLdsRMMy1MJQgXpGh95V0dgJbTe1SG09hB3041NJtFOSKwoXjmOPHmzcQsHWJQA4BBQ21pD9cd1wlkeClCnS15OsvnntVWBDpkbtosG5dv0BohoV2YZzV6ceaHccFtWwDugPpdtCE1J5BIhQ4IghD41Ib&X-Amz-Signature=efe9a8360016f44871ea711127ff9d69e86328e9b5321d8f95f949ad980a1cf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

