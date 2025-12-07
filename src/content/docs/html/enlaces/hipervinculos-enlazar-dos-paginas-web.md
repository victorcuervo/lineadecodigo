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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCLTJNR7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T100356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP6tnSTC3mVjnPDMNywasHIPrJvQ0BWwhwU8V%2FRe5i6wIge8cZFbH6%2FJN4Kl8GLw0LNh2QyzoPzV%2Fmt9HyyHZcLOQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNa8Jx5pUKUFDea%2BircA%2BSLr4Erj68GbQx%2B6ADegI9F7o8p8mH%2F8t1jvFLFd6HTg3U%2BaEeqgBFSfBiS00TXkeaRfI5tERxTxIYuCzkivB3wDJc1oX9fngQKfI5K4zxK6vAXsYygzuPcbTwGS1pcbgYf3HwkH4a2usq21VlU7%2F8E5mH0tP39VHJghyMGQ%2F140SFRH0xkfn6ojcvop4HQ5zgVD%2FrgpMeH4MO9YsbqAKTBCvnwaABdjgVYp9LXm1VWFZQV%2FTjtHoMdb4%2FZtK6G4jkpISL53GmEZAa3sic26DmPpHql%2B2p7FHftSTbR%2Fxevio3vg3emeCIJrOFeLwf2HuFrnGRb%2FnuJ%2FsixNwKJVFTvps18hYjz3T5PZnGwC2Rj0PZFYKkXugpaYlOAu2aYwHoK53ixftY6utfpHLH3uXncL7lNcDRDJLaDHuVB3Dl58wg2MfuLZ3%2BzngaoYdpT8r8MeKiXjHQGMWXdhRXhmMNLyaZEaOE%2Fv1fNaS2JcPqEmfxn3lJUHQurymYp6Ku%2F7MI4DGeKF0AFi3AHDOdD0D7vPNtazeizA8CnHZ04LbFsVmZtmivsMeBKuaP4PUNWwAgS%2B0ouOUwiD9Cm55%2FzjZ7aZBU%2FqHVN3vmYcXNkS%2F5iPBU2ThHB449GImXKMPiZ1ckGOqUBBDW97ectv%2BQPDbu6jEAvpgQ4XiuVN%2FKXGmiJoIlVXv05p85HLBuggkDZy1SlqL32LOsv72iZNVdBSu4QyQAUBUbZ12GCYrzSyV%2BSstd%2BzsPB9tXne8kUK3GLCUuali7Xxg5EJl8d16buXkS7Odx9UoYRdT78sy8wkJMHSbu3u3uCz0reqfT8ItQiw2vo2iGhXPSTyvXPhpyazuE2hc6OLaReSqiy&X-Amz-Signature=a205a6b25f4cbaf2d73dcc753248f3e07e054b9e47f91cd69306e2b61106ee38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

