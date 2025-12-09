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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SN34HGY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGxfF5%2BHeu3HkNg9lefC%2F5IG0J%2FA4bu2H34bAxo1ta2wIhAJYnTsw5brq1fEbuBzOFWWsdHHQJBN90JRUySeZslkliKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYLiKy7wvJ5npx67Uq3AMohnTMUsVjyDygZ24ssYeSxU9zQTrngtnmI5QWFVA%2BEws0LCIyxjFXyFvi3UbF7lwH0UoOaghL5kOKY1j49Q%2F6%2BIY7hmWmswSSZWm92OizH4KWGJWWTLyovox0L9h9sk3MjBFvauc9Y70S83h1PVFYw23i2fPU2QxD4hpgLDXk9AQ7qE0b95SWEEHiVT0lmJFGXhwDy17mSUyntBQhtuh8%2BWw5ByV1bIOZ%2BNbF1M87USMji75Mjd3PUgXoDDZ8mRWPYrLZyl0k1HRKMPHwNVy9U4CGhH%2FKXeK3zyEleDIsIt1KUocgvMPRx%2BdH%2Fn2iXLhS1wa6O79fUmQ%2B96SjhWEftjOBXOHv4pOPvBVrvju0Ow%2B7vCwQpJXgazcJbumuvjmqEh3mUtPPyqzueosWfbZb6aKxXo0avb2Wmvqi%2FMiCXu6arPftHha1QvsblxcXkGu4pwngT5G7PYnaI2krmdaUhG8PTB3IrVmw7XkWZPA1kZA2SufyT8jN63NwCUFcVwe49wkWO1tTBGGaHE%2B%2FoXo92B9xAATu3WslbRf2wxYPVwaXdTAza%2B8CVwcA45SIMnxDQn%2FgPFNUImark7l6b3Q%2F8EkLrsyFM5j7u8S8vl%2FkWl0jo12SyB8ayQv5UzDnrd7JBjqkAYrk9icW4hu4wG%2F5PMbTHtMYsinxTd5%2BKjW%2FuGs6fICzQbTrbJx0KsjsGxVS%2BroQgQ0HeBuOBIkJUs8NDe3AaitPzYFBXDJGTOywg13VkkBB2yXScvmKBq%2F5sJtfHiDzIY6XaXsRL5qnrEoQacswMbV6icV1wLku0NlJNTzPwnsG45kAsOQhY0OKorRF2OxsDj%2BAsGLGp%2BwPaeSbGcIGOyNQetLj&X-Amz-Signature=fd635060adca9e869809613997dddd307d5d7a06a71752dc606feef24e8dabf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

