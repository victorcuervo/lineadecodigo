---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H7X4W4D%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T153431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXJnxnSUJXUwIDLgpHkJCO%2F2cC6FmiFIjZCEIp4MIHOgIgEoqn2YeGrE146pJ%2F6FE5uUWNO1TXvTe%2Ba8kieoYKu8QqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEMazl9ImuU4Pth8tyrcA%2FFjKwHtF%2BM8FVVLjk9qNg2Xk1bmNdhFR1U7YwKwYnOmvu5djaMHXwXbAtRjpcK9b3b2fzuZD27%2BRr2G5f0Xkpx59dO6v%2BO%2F4SJRce1JHmTvvPMk9LMz7L8B1aa5Sm9TGR2o7OerZK5bX6D7gBm%2FUlFvSD5ryERy%2Fq2dMtNnMnJkBrAxi4Z8AVaczd5%2BuEZ1bT%2FW8a%2BortnbSzpwkNwSJSOv%2F6fNeOMUjC1%2BPUDRAUURGl7P6dlDeV%2BvZf04O8r4T8WAvwMxXHTFCixo23VeaMNKl7GwzTR77VXLX%2Fz%2BPPQq6MXanCPbUCHPGRnltU2dxMbjmg40u21%2FeidFt1IuQELOcykNbyiqZ6xN76xoEA3gdiwdxPfMGX4oUVKBxk%2BSOY28No93rHTT4CpENQQnQcuZ4d%2BIQ6YVymbitl41u88cYbjcnZPuKsoE7KXsBxNoR0Dc0xOOyLRYb9v5cSUyOKaTtSH0JKEoQiWJh69F%2BI442PMYOYmPhNtkK%2BirN%2BWu42zcWVTr3GzKTytM4knkNep%2BWQMfCjFLZfQPNDxO2e%2BebyXAgNZSvcZ0pUvj%2Bg17qkz9F6YYV3CgR%2BV9UinnwOg0KBh6o4GbxTRbIsIi0HsPd3OVnmIdJ69RcOTBMJLd4MkGOqUBbcIeXJvKPdPZcaHz2e9rSjMGf2olY42BB3BNI8rB%2BA3tmycjLsXLYnneK2I3N%2BF72bh0%2F%2BprFn4%2BDOVbGJE44lfxXYgXV5Dc%2B9gceqC6Fm6Yy7rbd2wnF8rNH89S3EKtkPebpVVppAk2IGW9m9Khb0Tv5xrqfPwJiqbwCCbHNfq4mMYLnnBUGDXRv0VNHbMYKtM3q3pHKXxLthXRVClqh1ElSraH&X-Amz-Signature=30c79c5546dce191769ea97fe89acbdcb294eabde7ffb8974162e3cb060b62ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

