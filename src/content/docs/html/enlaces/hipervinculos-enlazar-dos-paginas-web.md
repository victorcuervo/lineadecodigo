---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTJZ6LWI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIFmycThFsHcGxI8xe7p81jhnXcO6Wsla86ONuj1lCObrAiAB4%2BK3k9SntFyvQJkBsCwMb%2BF7mHbUfFPE2h8UaJ%2Br%2FSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMeoOX3tGF%2BKxuxms9KtwDAYkMjuaktTA9lQEhuFtLRer%2BHHQyFWR93huDdNhJCuhNHJhy0nYn7sSzjAwSbALEo6J1H58Aau8goL2HoWB7rN367eE8lU18Vk0Rnof1ljibZw%2F0KcEAPdE0L8Wj0h%2BTTCzE9owhjOYEAg%2FH0oO4mkRd4LsxDfzt3q9UAGZCj0iGw4978Tbw3kJBG1%2BbKtQ403x9U58y4LN%2B6KmqgKeOtjdHEw9oLqW%2FlPpZY1UBb%2FGn3KoSEgGOcGzqWZslPSXMjFKP9wzS2wNeEm%2FJZBqL0a%2FqTPEL5rJhd0bpaxncF1eKazpBZ8hvFSSqxxJRqMtcPIsOv8OKTcv6H1VWayhy3FMACJ%2BHdUI1fuvyADPmT11pF863dQ5J6BRCwIE6PN52JRPm939apFynZ3j4iIHOhevP%2Bk5zZ50NK45AeQSfmVvioYVY4xmZ20W8C7%2F409t85n8pOO7BIwIB3j6JhNlVSE1m%2FsF1lgt0xbjqcx0C61rPijLe1gg3pQ6jQqryZByNvboRjRZKiu1CqRcuvH74Gjj3ahwC7l08EPNAwseNs44%2Bxv%2Bnk3yjkaLpZGUwhb%2FsayLhZFlZI2iJxt0RWz3uOwHJCRAC9AFY3KZCuEyrvYtbPN%2FU4ofNyMlTLrswioXFyQY6pgFEp1EDbOQQA2uYGgNGbymhPE0aPgM3Zbu438F8QiLgwjuT6O%2F5KqiVDhxy%2B%2Fklx%2FHlcJjSIFkrpEd9g8JJvoSd9MDL0L3w54paD6j5s6M%2FHdXtDo1aRFTg%2FL2RCAxWBc1X5C5mEf2N8vgRdHhv7CdC5dvxpNFcD6STQBzk0St0HXM3aXzyTUauTM6RghxGpVuhEkS1NtK4chBTWHlH0hAbfGiYR3xP&X-Amz-Signature=28bc2319a4d17b8973752ef4622a6e2feb7f0e9406319b45fc824358d41576c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

