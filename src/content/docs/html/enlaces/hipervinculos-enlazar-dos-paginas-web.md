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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXDGICGR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T123628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwgji%2BX9%2Bat9%2Bp9hswLZacuz7bWvxk%2BZ7wAtaKY8McxAiEAva8e3Azm%2FbHcKlpVtYgbuWWjZeEu2Bd37Gt0eFCyADYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWRsDy1HTVZKOz3HSrcA1b9R0Q5WWag5amq3oKFLwTg%2Bpn186AJAKWKbidnH8MkB%2FfnJ%2Ffi%2F0%2FXt5XOJQLW6sKum%2B9rfe96f%2Beslrw2qSCMNaJ6LMcpM4ysQsiN3nDP4%2FeBlUpbmXTBgdMey2nayOke1KQd70YUOjgrMuFqFpxK3JxJLOBi6RCUcgr233n%2BjAwQyRo%2BbeCbHUa2fGBR%2Fy2yzBIpaqruaUTh36IjdouA4ZgiffWazgNWSZgf1NnxagVEX2F1LXcZJpT7y%2ByhU8Fu06z5pmRtS9rcuNiKrQx1RXURnLPino8jALzg7GSsFHH0iPlqi%2BR2BqrvQcUKtBmbwuHWFAHendoTf2ImTzxjkYorwwR0d6G55FuDRj1VyXd4nhu8tiZahk0oJoEF6iaj1gZc0o4wJmjB1n5oo97ZsjgGGkj1sQ%2FWhENA5zqZsLok8PYsKiwW4NxoXyEFzBz52V4f3%2BC5xn3XQA1Ej5vQS30NBu1raZnB%2FUqU6jDpklxKQhUg0oBW%2FWTybCFjVHHH76KWILgksmBFwrcOtmlQbpaGNfKtFFPx08bjNBIIMpwsHdlGIn6FVYpHs8Qnxd2U2l%2BCESnxLhAsG5s3abCLLrVr7hG%2Bt%2BfhKEvc6mhNNtHKdihw5k0qgRvFMLea1ckGOqUBqlHHi%2BLl3bnZiMEI3SthumRrwLYN76OcZiQE0qKXWT8A7TuYJNlhQqn0kfu2%2FsxhHzeirVxtDG3NRdM5D9eXHYg1y8wxBAr7TQUhtmFMDPUgxT8NtpAgnMxT018TUgjzO3yexNYgOuoJqtocIiVzXUYE2AC5FQtauV8VFon77wZOcv%2BIR0CoQOe8cDjEPHZcpxrWnvklulZ6vrvrYEXwoWc3x72I&X-Amz-Signature=1344e88e5ca855cf05d6d8fbb71fc50c9163e3c2d2f54b9017a6a4383e8d9167&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

