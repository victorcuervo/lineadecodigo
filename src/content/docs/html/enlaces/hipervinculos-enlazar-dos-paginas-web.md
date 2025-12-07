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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YWGTO3Q%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T001422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHPz172F9reNNlKJwn5P4M2ZyXP8ou8Pe%2F%2Fd6XhXjStUAiALyP4SUpGpHqP8vnshkZsqtN9HL%2BAJG%2BKH%2Bk2WxMmoLCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd57RmHOLzBpJs3zrKtwD%2F%2FsUUUXtyMtxEu9cx63zcXR74IsScokDy%2BckY2DWcAIU2o4tBghoebjHJNMwAK68sDYGmTsf1X80%2F%2BT%2BhlvAr5VAD18fgLRbRueqdQwFDZ99qmzrpvsflzLcFvcxosxojXQDHhQC2ZT0pJpMTRssOZ7Wh3xvWSIGyocrSXDzsvbEE1GeXPK9%2BvMAZD6FzuE10uInnecIv1wgXUGvugwI%2BffwlVUyJUKIXGsSpT%2B0NDwhcZCzojPqHTmsPqhiPA0LtrWLOodJYMAAMIr7GUF7qg0gJebh%2FuvpDY5KZJHbbq38j%2FrkorRMtxM%2BXbEZ7oiJsVz6bQcKIim9Ih84s1O%2BFZwcaSFjXBK%2F5VDAKaQpx5%2FH08IxLINClt8UwUdRZgMUkFbh%2FzEzzCVNJi8ks%2BdgiIR9ivEyUrjjFOGWdQjCsXG%2FJv5g6LmYVwFt1gUC8Bm5HfF9nZt4h10kRmPlJU1FaSXy7jc%2FrG6lubuCFRh90Ks5XL2PJ02aIdsITLr%2BHML0iKAD%2FkjcX98WNrHzohOAPYztgUeV7kotIAoteWA8omJSpUrLLHyttkrQGH3M6qRgPoep6iYG9ZbIftKwIS2ctJQaEkQqFHO74Udbyvw5bj6SNgi77U28vbKzFSkwkP3SyQY6pgG9GTat1r066pAxMVJc%2FM5M%2BH%2FHupndfQvAY5zia%2B%2BBnuc6WKGvW4Z14f4sT3C1tcsidpnrAs79SxSWOHp9VkQsOXzCs6CevuwYUuIxV6eW7XNOWmNieNSquWl88hmU3MU6XZx%2FZuPy%2BI7P9rFjy5vg6FsfoMIp5t0bsDgYO8VCTMn4tEEK0chwmJ3avRyaOs3mVgVKgwPN%2FXek1QENN3amxuCOGU7G&X-Amz-Signature=61cd9689c364bfea9d0494cf47d816bf02b07d7e6e0bd4f9607ecc8d4cf5387e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

