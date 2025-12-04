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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JUU6CNZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGy337E9OlOsvG4X26lgDN2eEQ12scI4BQbmRHHTtVHoAiEAw0Kciag%2FLIuyNdca5qQn2Ma7ailThyrVrUCd4rClH38q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDDvk%2FIi8yHUaI8VmqyrcA5fQdYNPsNRjN4AEXSAxUgYhwtAI9heggX05FuQ9dDb2kaUBymJpxZL6jTaT4S%2FZ%2Bt%2B9nyAiKkvSpZZp%2BXIRhCVoU9U9jpdUZ%2B3O9Lyjb5WinWpK%2BYuJUxLGnd13Uw20bPnYMWdWaf3YXF2GW7yY3EJd7Ti4CYyGINx7DcNi4p9Gl5ut0CvlbcHMLXOtbHUnLdWF8DOhHIMsJb1qI7Jy%2FtGG9S%2BmcMm0ch0WtUm3TaQmvfJXDYRWPnBBAP12xumDxPdjdEISoJmQSDTp%2BXK8n8id5UrTLKCS6Yb6uh8RUZ3TCF7xepTAysXjl5qsa%2FySGDbYVtrWvYXIWPQ22gnuKPhKzO3VBz2tSN3GtVUVLDB70l0mCWXVGDGvJSr1IpRu%2Frj8BAEiPM%2B%2Bcig1wc0cW3XEeK7ICOLYFCYr257lwJDUlmcPaHdbzFJGWZn3lV9ZMmwEHbT9G1tfFEiUvRohX0CA23fTM7aefGW2LFZTfJXLh21R6fc5TTsVdAdWsaeZkzJn2wA9eHXL33Yp%2BcWIL8zE6P7KWCcp1hnMqNb0V8HqX9dxMiv%2B5RAFPQ%2By4Zefsc2sahhhCaUS7rv5dSowIoeVg4gom6Lsu7xskyG9r7Dz32M2BJJH0pPvzjUfMPrJxckGOqUBEXTKa%2Be%2FptgH0a3cozE%2BrYfEhVp4kvrceGUaHtzV3KupEzBBrWjtWT3MFpWwMgw08JP05o%2BI7rYeSC%2Bg4pXNMgnPM1P0P3RwSyImxVy0QCa99870rjRe7T02N4x4QV1FxaCSwpvKYUB3yEkpEC5WIZl6kTrQ66VEogl1IBuHl5W8fPC5mT7cKwusAoUdw6UCw%2BS3QwhtB50pNrY3rsbf4Nbn0YhR&X-Amz-Signature=74e7da693afc067657013a310f2ba221287c72e0274b53a84996b46be3dc55c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

