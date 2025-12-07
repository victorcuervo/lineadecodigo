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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VNHGRUP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T211709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDct2RfL4QzztykrDgiSSr323Iv2a%2FJaKauBtF%2F4PSrtAiA0tBq%2FkC3biddRHyAVuKsCWqlHeLB5tnbrSxulzIErwSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3Tq0gc4DtRGUaLl9KtwDX5P4Iwnuxty5XlHZgBDSkf%2B%2FgxIvzD2CR2XtSwKChvs9TpMMhNLbmilBUTbkukF0xRwwOV56mhU9RiA3q3YokDTlRMmErQkaruGoPodCjdriK9g9Tc8MXm4BlQunTg%2FZbHMde605K27fsxfH%2F8X4hZfkraewsl7dD1lzEdrUSG7k1D%2BsYNDBoN8h1L05nNiAoiFMUp6XDvWrY4ft%2FFED17FXn3bttgRXAV8JhupAuBk5sTsPpAfIeUgIwbayjK8bzMtPpklf4jkQ%2BMAQDWtCalLLiJMKSkATKaxTotABkh%2B9c5LEXdd%2Bmll3EHAqVrj1ifyC6%2Bcm5NP5wPBD2szcnCuyYHLn5ry8yQdc%2FZzNp2h3l8UKl8zfZPvY7qkYoGQjmZc2Ennm3nrzriW4IbAGW5pvLykQvYAW2DwgAvSvKayyIOMJmiG%2Bo6rH4BLyYTxHqo6mUR78kPSOennCR%2F5nEgEdaHUIBaSjuI0c85qeaT%2BBOJZpoOeH4q8iBxwIWtfSsRf5lvdOcS96HcffG9KRzsLTsinLdrGHtCo8zNLfSsTHGVC%2BzbFcrC1tf4n2IQZeRc5hRMMyf62MrVMceLm554wrVd5ZGLtuP5iLyFJF%2BPx5%2BnDZIY7XWAMGGiQw4MfXyQY6pgElecN6inGOjzVX8wK1iflAo7hnGncFXUde1ZV7FbvcuKDk%2F1nQVr7d26Y7yk212uH5kZkMsucWY9SgINdBKscxMaxOzWQUQdyMcbPH34uihdLrvkGpFv1Bwc00d93gVG7bNTPobXhBhwo0Gz8JHXBry8Qd0AFqpsL2Uknwtq8NtjGBWrcq3f8xmK6kqKBksB6VRJbnpCiVsuaNXGrorZlvsZyGiVJA&X-Amz-Signature=b2110c475da0403f89066648dfbbd3bfe40e6563d991c1cf8476bb79a30ed161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

