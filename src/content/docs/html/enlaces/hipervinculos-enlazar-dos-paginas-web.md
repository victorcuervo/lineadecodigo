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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDDFERYU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T041205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP4eQPEqrgQEjARxHsSdoRt9PnnDe4dssBYh08S%2B4IgwIgEBjT3LRf4cwX87L7%2FhvgdNUxGzpyXWqTyHzzNZ4cOAUq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDM1XCOKv92mz4kTpxSrcA2MwkLFhu3wJNO%2B7i2JLgt%2B0K6VMDK6l4f2OR79UowHhbJcXSk%2BTQt0%2F0QO4nfsBzSyXhZymyqHbL6gPyOegN4mbqBOFtusYW9D4Mwf933hjXLXTsUPnmy4tJ55skArHjgCVvaa4nMzvDK5z0g0EwtfTM9bktisOkeNaZe4lyH2J84U7ojZQcrm%2FLN8wzY7DQ4P4ea1ao0IGjNGuEYnnx5E5AG%2BhDhRjHAOMHyqRk4FyfMhG4HdhT%2Fb%2FU7xR9mVlt6NFq%2BLGt5XmnML50GXGIfVGMcKwxhIcarWCuXS5mzES8Rv%2BjNICjT8Cb4AGaCNxXGHBglArPvcolQWCCs4qK2nV2smcHHho3Psd203zmYTPqOgc8BmN4hKCIFo0tUlOBuxTbkmEXT%2BYt6NZ6jQX3kXyEyOjStzL0t6%2FE2%2BXZukxXyAsBYxAP86fpi29%2FDNytWbVP2rxF8N%2F%2FTPgX7yC7k2jx77Hrf7GFmopP7ND0nrXRpIKokeiGqqd4BUzXGkLlrlRvi7ECGT2mwvnILteQU53cwCOlBU6H%2Fv8%2BbA3g2m0zV3gIshwHWIfKWQ4u86G2eMaKjGi39JZ1iPfUcduZLx5Alrx1R1RQORikB%2FuxRf3fYskeTjOOJMHtP2EMKHDzskGOqUBlW1vI9HZ%2Ftq%2B%2BuddNUY1DowbjCk%2BqYXQ2TlaD3fkQr4lWuO1uHG1ky35251L%2F7%2Ftu%2BByQJCrJ6sBRtKANiOhAjXbjVsHPKM96QkiK9vql1EDdnqKL1LWFdwLh%2BIjk7hP%2BnOoq6PPj5gKN9pO2gw2LJxOG8eAyyZCfFotIj2PDcnATkjot3NS2VoeJFAGBBumm8q9%2BzTAAtngl72x4JoM2yE3XqNR&X-Amz-Signature=9bc93766b00fa2456aeec0d59d67266a521e9791897ebbdf03a62165b46debe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

