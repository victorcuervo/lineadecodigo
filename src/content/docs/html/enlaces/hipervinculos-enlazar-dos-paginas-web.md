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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THFUYIOI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T100746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7wA163sXUHvJOxTmPDNvTxqWthmorqRhUsrZ6HABYcAiAaUTHM%2Funjx2EewOO3BmHW3g7F8MUXUU%2F0ptL0MkWEJiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOI4zH6l01gQCNEuwKtwDdvCB5z1ak8NzCjzx%2BqZUqMy6x%2B3sh4fBFeMSGSvQIl%2FXM2UmPIiak6b%2FlLJArFSyFBbySkbXfyrpW0b22henkUJ9Y9ikXF3sAdBSEXHSpjtUXx4XTLB4nNrVTwaa4i2Cvbpm4UDXUxDhCIntgrZVpN4kD7DTOxr3244%2FifMMSp%2F6Qs8Jlnc9RvnrVuaZ0lIzCYW8GAVCJv9wdPBa09RQfD%2FWDU7SpZY4LOEguQwCERu6NgCw4BibahsND6DkI7nwqwEC8H97928694ggtP9wMrtO1j%2Fa2r8CLlZCcki3ustBOp8m2OkIFymqsO3Kq%2BPUAOszD7RJ5Ux4auteJw%2FirfdWwCNmLA5FB%2BRW2GbYn1IvqW6g7oDnkIkhpMse3P7BSJGpF6zhV9luZXTJXOPsKMzuBnShyXBm4IrEXC9teuBaa3q1ffg6PritkcS7OYnpaiR3akdn3sTSilhxTMwGRtt66tP%2FVkiQ27m4HNQP%2BKVIoytU9ARjc6LA2wNbg%2B5US%2BNs00cfsCYXPF9%2Bv4vN7paE80a3llZsuz1oacc9Hpj2h2hX%2F%2FBwOfINgbpwjMOrBe87aGgL59%2BN8WEGTRMJ29pR%2BEnQTOCBGP9IRZ%2FvE9CSJLuj3Z8J9%2FDxSfswvJrVyQY6pgFtQVIJWdCWG8kxWFBjBOQxOxtTZTeYHN4rnK1qvuPVsyMQ2v7Q5fRz0y2a6U4wGRSESQhUDLYJNEX3wrJnRrCNyra0kqTKfJmsLAEqXLFp%2F1U2nozyAxIer7S402S%2BEUOBtg1LAb9I2p%2BYd1maTdcVklYAtoGBAULEKu8%2BxwCGaABB7h0z5aT%2F6EKe01fY4%2Bm4vdrZJkS28PbkgXWV3u4BrrsFXP%2Fg&X-Amz-Signature=cf572e8c159e2067f4879de0eac7e2ad7f128c4b4ca6d14cb27782f74c62ecb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

