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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X75A742%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCwOfe9rKPiNOHxHpG1kf%2FywUgXBARaaJBdzi8joafCKAIgOtjX0iol5ownRSl0EUkyAdSItD5WzLfO7nn84klVwwYq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDEofXPqj3jTYFSefFSrcA1RmOddvtk%2BctFa7NA5FPj4xF9m4Xy%2F6jzVyvJxHVFMcee%2F3gd%2BkjDBcz43nCmwEW4dZ8wCjqe4XLZPnKEeNROvW27BspTMCL12K%2Fpe%2B1swI%2FPEQNDF5w32g6F4xaX8F85ZPff0XVbJFd0vB8CKlYVVaF8t0WoB9ypnp3e%2FrFgHX4L7i2NVYSo7ZbCfTHNoYEk63dhZIoJxoAJez35PEuwcWUfTtsDUtzH3bgDPBzsu%2FJjIN1bXfYMiHo24tbsvz2zEjnfC2%2BnggobXGUfpRiFu6HYXcbhFDerAj4UkyhApzsnirSJ%2FmDKyjfRRXQ8WCPUUv6Ab8zjIJjP39uVApT%2BoxKRuwFU38gq%2FEtRzyjp2LrZMxUbaXCu3uIDy9gyZ1716E50HBwQL36EcW4fkThrIc2TcycLlG%2F44%2BXSB5iQ%2Bez42vQhCeBoq8g68Hj8ulfqez80zvLsGFwFP%2FYJP3mA9RtGgx8s5nZ3eUmwsbKo6pkodQ1rpx6j7mrzLiYzAkycvmyAsw7fncpekmzIE7AhXEb%2BUiWjNm9cPxOBFR6zshOBqrIWKRRXcv75ccjaXSIWGBsqaZAjypbpiR%2FcPrDTmd%2FuWGWJImbYXudznFmx1iGkRick25Wo27HAbPMP3oxMkGOqUB4ydfAj%2F6A2f2HwU5CCLfxMJZZhHAP0LalB4a67tG83UVDONfqKm4BKkNyFz%2FYtsJmtZAnyU9smkACnDeKnl1rxuV59dyvBeR9I3ma2DdLP5uvSMsjaIU0mva7t2fcUuk4pshQ%2BuGVbFv432bdK36goKEO9OyJpDG3hCWnmLyKddnAzwvRgbgXPvQKnf4QccUhRSgCHfYQ0wnSxugihkolhvV4aYC&X-Amz-Signature=73b05fabba10485f8c7675b94121acd691ebfb8724dbcc662396ca32784e1d8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

