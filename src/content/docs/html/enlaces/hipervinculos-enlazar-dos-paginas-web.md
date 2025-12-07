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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KBAEOHT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T063940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtsIPhtv76OyW7aRQb6rYIdj9bRZwE2NT3IAGV6E%2BZMwIhAIvaoHOEFAOhgcpepHzK5%2Bg5afgtV28k7R0OzO7njPmQKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsRYIOS8zXxEJRnb0q3AP24pVJwS2VygbAoxdeq0r4IEdNh3TNS1TI9IKQGyH3Bx3R3qbVoXVAP4Zf2umFlH5Qs1Bu6WAvj3a6u2CtcakBXBwCCsYpo%2B%2BNsa8SRi0y3f8%2Fm2oUmGZXjqNqejEy3ubRbXnUtNNHMLV9UvS26x9wM1nV0fuGp4piBH87zFbvaKwBkzZsFmNBHAKVOq43K%2FbjB9c4UlojJ%2FaoqPkaAfhEPdJB0b7%2BmD4w9db2PCSP8RuA%2BiANLEqH%2B8mhzoocrDtlEI0rFH9TkQ0cnH17D5Dm9SHIl6HcNi1qA2Vobaa7sELaFPd6vKkBcUIdWtuLuwJWTvJgmSPjivVAA%2BfYOZ2EAz7opOZi9Xb1EMAGVr7u8ZJd%2B%2FolioU6nbIyYsKTQhweKUEZChcMhLxqwoM4VKblLpcjlHhMyKIXZEinwdotrixkvDmQRRQd0C8T5A6mLuzF9HSBPQRG8P%2B6oq4Mr1Iqk8tYmZ48z9FIPIxjP8npwKvdeL6H%2FFhLkh2UMJ6i4I5JHmMfFI2E55HOOH2JKZbxR7lb6e0WZa9AHtmWluEjloQ81%2BcjRGi4Gg9hkLd%2BFU0gAEseeihwRnvhdOdDIZQdRR%2B8zenijWY3qBeYCZS0aM8%2Fxn8d99WTYBRJUDCwotTJBjqkASFOtQfdvzFnlLSvDlorcwJW13VmTKWdplXtAjUqZpuXhaCpmfevDFZX5XF10GTIzf2oO3WNerKoBAvlEOka1YGqLAUON7xCVomRs6iLRXul%2FSee3c1NUG2Px4gKL9cyN9P9DxWGM55YAYLJB5stGwNZ%2F9hAD%2FSTqXkj51RAEemMh2lW4ruwZiTzWXyjfk0maVdoN2gI2nCV3kd%2BRUcBtcOKRClf&X-Amz-Signature=60f98f0e6a2c96d7c72a50c464e8e1331b18e55aa56c5ee7833bf82df9518701&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

