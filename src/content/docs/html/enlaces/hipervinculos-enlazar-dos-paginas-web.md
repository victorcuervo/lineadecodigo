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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRNOGKM6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T073823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGpTG4dOnegfe4cT6NZdfvlGWK2E%2Brv6OluQ2pJ0d%2ByeAiBZjS%2FpLwRpCttOlvH4A%2B1wlmu%2F1%2FsKY8fY3GZtUJnr1yr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMGFMEQnTvi7kLXSmSKtwDME%2BzImNE%2Fg06wpJs3uWq4QWZZk%2F7c%2FkV0DFYcMnV1s1ZeHg5bAG2WJxTNGHAHDnmRmILIIdTFjaIvUzhsMt%2F4cMItKuTcli1auRLnBgAjb3%2Be9IrrlleiT3%2F7C%2FkSKmqTcMQ0zrGRRsmztlWsUezTv7OZx19qUOdBmYnl9BzmC6gy4xM5SVwlWiUUJ0gMRXs99DsHDCDxQ5x1P50tI34sl4klzCZs5m268kEGHUEhInYSa5UZzMeUlHd9M6UxKCA0W0BguisMVvuKPICHuQuQphcz7HXok%2BQp0F9zQNJcYoEjpmEAClyv6PKb1hyVeJG%2BFEnts8oWplAdSCswO8USEPNl8WRuQs7RYueE3G0FbbXsFRtRJ7WPzcXH3vN%2BJ4ikXs9bmGIZdcNCybTPAMeFlRxI1n%2FHSEVf0xRkgKjp3RrON%2F7dnyzffEupCALTb7DrQHQqwZJCDQW%2FKkezIcdlYZzbGx7ixK2jgqD9SrfIHzUcE%2FOHOIzlANvU9mB8rQefxifPM%2FNPAu5uAu1ODtg3sgczs7v%2Fp0VVO0EwOB4TdduO6sS1Ewcbn8On8zokwtD68blJNWLHBaLVP5t5j8ud9HGEHrhEwe7gfkhL3grhrcolCtxNgh%2Fg0OM%2FNow2qrJyQY6pgH3BaEfnYl4y3KTIEsijOiruyTFRirBncN8ek%2FtyqksNYw%2FcfmBMuUQg72CWAPdst4dw6Y8%2Bi0jA9oJaU6RFIK3YTy8u1UGaZv7T8wPeXchz3gMzY5MYfdkVKxts8W7%2BLtRN8vMVCtfcfTEplkz%2Fgyj%2BLfEDGtBj31BZXyCc11rxlwb53JA9cAPnQNn%2F8JJ7vAV1ssBJt1%2BTxFV4Vf9C%2BICPCbAOm6Q&X-Amz-Signature=b03be7a9a13a76f49b4b55fc9d322867795c9bf45cb2a1341ab4ddedf63fead8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

