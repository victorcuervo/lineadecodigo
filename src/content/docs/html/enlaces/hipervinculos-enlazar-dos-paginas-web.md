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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLNDRAPN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T170027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6NHZ8WXCOCLjoKsuHGRuJ5nO%2BAg1156sjGCPJRvCFiAIhAJjq2xdjmlLe7yoFAuIDrA7PuwpPvIBdiQktZn21m3wnKv8DCHUQABoMNjM3NDIzMTgzODA1IgzgZ%2FLuCmPiw0BvgUYq3AOSeSqQr44ahQCEHxSn7RmGndzDnCTJJpJEye%2FwiKY%2FYIo81IR89TvI%2BjU%2F1R2%2BvNzVusfF0XOoWD3pqXqqRKK6dZ5y2a0tQE9zpMwODmKE6xrihcfYrHxXHj4mb9kI3e%2FRXQmgVfI%2BOMRT%2B9N6Ml4HxIfXuqAYJZCDvbj7%2FrJjXtBWj2rRgTpTlHbykVPEGrHmUKvnmbkueZfmLt2wkFjlFEVKKnDtlqwst7ecizBAejcylb%2BDW8sAVKpPqyaXfyxCYmj3JC33CISAuTaBWY6ipkapwkW5RgJn8Ua3Upg1xXpMJMx7bkSE4EZYgySXpDPpaCBmpr%2FQGmN7wB9LtFAwoM6htQGNERtKCPQUfh4f6ZF4Jn8Iyhyg3uyy5UvpfqX7dPbEAogzKxD%2BRn97N27VI7oi3YmokChGfKx1kd%2F8srLHd5ceARy19w373dYYriwwR%2FhztX6ImiVfH7RVBnlTLqiODT6HPuNVtlg18D2BxksZDQT3qPeGyuud7xcoIwUb%2FgRuqq9i4EZxGStK32lkjVFlqu%2F1SygRhp8xdOF4cQhoJbFXDA%2B2netIJU62Y0lyEgxWbS4fbcw1RCJB%2F49LgR%2F%2FDDaPVMkoHjzWVzSnbntijp1Okw2jhWJqtTD3ptDJBjqkAZHEUAeNbAExrYWw3apRc3jbADVDiNmgh3IKxbZ%2F9EYb6MjiBXzSvHMkvrwIyb3PVdqXOjBSzWOj4hOPPsnw9IrvGjJ1oJ0IoGnceuD1Jvi8LosgMdu22x4jGDxrLir3x5IO1O8PjtnrbLdj%2BCvEQmia2TOsw0sQzRudp2pcEu0731N%2BUNwb7ktwkENyJ09kfEg4ce4ihRxbPQzEz8NocTBl%2FmWI&X-Amz-Signature=cf271aab343bd2db9395d921487a17099b8a1ff027c460f476e89809c15594cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

