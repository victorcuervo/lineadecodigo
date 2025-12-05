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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYFBP75W%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T084527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbCNx%2BVaeO9s3I0mNfZV%2BHbFxedRi8KZwiBF5BD00iGAiAXJT1ZBW1OEvODjJOEYPjkEne%2Fm2D%2FmRD%2BIGIAYMsFLSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM%2BG4OkTIgwe3iaINkKtwDN%2FceofHESZvz2A%2FSo7wvOF%2FeUeI0ZTYi712dWmag9Pw8MmZpf176ms3pSo0tCscRGkXipBsHfwe3IPcd3amFb5VeknthvS5ShGzA6ihifrk2Z6hkY1IKBe9vtKyw5s9SwxpdVQl8WyOePI24RK1W0TQ08qoGImjVvlRwAzB8DVpyP7aRYNcmI6G73BdpuFs9VZYhryRklLZ0Yp2Xh9RSW2AOME9%2B4trTjrkmxsomTbpWE%2FN6ufUUJWcSsy5cu4HcRY%2B%2BM8qSm0a5hBKKHGg1ChoziCmx1wJBdv1rsiLxs3gZQuYiaFDoBjcMmr7X%2F0KLp%2BNgUfCI0Xip3It4k0kurPqQQpuuewFQBl40kaImjU%2BAKR4wq5JoOSTFOmdbkgWK8hG7l8xgQ1z2WLzc5xkWk8IgWOFi2Gp9p7jMKsNpUvKAUE08pm%2F4UnuGZihLsKivKN86vtVRu9hhB%2BiIIZkKrUK1h99RwDGmxTRTl4r941O07Wk0h9PuXl52acqWy720HRp%2FtUT%2FjfSZ6RlRRCyHipHvfARh%2FuHvXmdJ4dUc2gd%2B4Mqx%2FFKprYlDSRIK0ZNO9hI8DyXgFH1mhLZfih9Sa2bdLQY49wLX9y4dVfKIB2he6egyMB6oEDv9M%2BMwvrHJyQY6pgH%2FuSpqvWmo%2FfeZu9BxmetufrJds37DskvRVPuCCzkCOQV4P4CkkCF8jmjznHpfci5vBiz5iDVaNYka3UUBY9klsOpMF%2BYv%2FyfqPbDKvmaubH0kQRS4lbAnthLXgNqTQRZA31iOIPAX6VQjPPzounPyIGqW46qhDTTKZT3BgQprCLfkAS1OaUEpWxTwBg7UWbUKwQwbNhM008sr5mJD%2FKDTd6PhagKI&X-Amz-Signature=682e527b6147b0bfcbd97d3e2cd25d271617fe2f678f3d77ec1ab8de3dce2de5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

