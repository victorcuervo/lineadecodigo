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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFMRQR36%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T221234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIVQFnuMiG79HYA7uaV8E%2BG%2BcghdjWH0J95Plne4mMQAIhANgDUWiMMTK4MDixTMQgX9giVRkH2JPbmt1dyTkCaD6VKv8DCGUQABoMNjM3NDIzMTgzODA1IgwCXyl6UVFTaLZJhBUq3AMZxaxDGEH2j6ZtxJYzn0yjISuGRLqsq5vPCWWxf5zaYO7DR%2FhditVkjAGkNj9GjdT7N%2FiSfBJjvvu4rNz6F2%2BdLiKOsGXKA2rG%2Fx8Dc%2B%2FTkgJEmyFRjo5pVtI6LGaqL1fN2zMYzUSI0dpc5DIizQd7lgRyQiG%2FQhvYXyQr8Dwp6LkrwLWRyYvOawSgN%2BwMGN%2FIIRKHjgXgXI2LoaZQiFqlzgdaIcHz5G184MYHu%2BTyiuHzshpX5oc2KPt2Ki85R6FUKOo3qQavK96VgP4PZCs7IdQp5sp0ksXkpkK0oLEWLdJoNeMeZin8Bzc5oQ%2FkY7hCBh2ICK7eLXe%2F6rRb8Gqojy5l%2FO91p%2BwZMIwpBYfwgcAdDIaD%2BRlYr7LGzQxcKF%2BfZB2z73KNWE%2BgcfN50mnLyXcWGL0xRSHsGFnvmJ7pCrhVsKjlyvILdm2g97MGZ9ZRwJRLh8eRrn5qnvWWY1RXsWkTMVqiuDpSVWQOWIL2omXFCTEVZz6n0xhHNIoX1N7TgyMqn0xD79Rycoom7X2v3B99CpAI9SHT%2BywhmESQaY2yw%2BmBDaP%2FDpVPSxGpoAcsc9jftd3ogyukqPfD4C8fue656NifCWLs9omX1Xd1IBX2GooBADaH9bocizCx7szJBjqkAbM7sicwdFYF%2BTMkHTzTLmuNsj32qFXs1GkLv68ToczOoxv2onulVw3dzeWkFJwYuQLc6odkMNxGet%2FT%2BEu1D%2BbqFobjeomfU1aq2uN5fLf4zJPw53titBHi5Ielg%2B8%2B8nvIzErg9CJ5%2FmaXz9mBkWclHykRKRfRQrB9Z3CkVGzy02C075eQh6iqbueY3fwJ5NZxEq4fR699k%2BTluQ9euhUI9jlI&X-Amz-Signature=74b695810c6798358535691ea41de995b2a6f714cf70ece1615ae689db8ac303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

