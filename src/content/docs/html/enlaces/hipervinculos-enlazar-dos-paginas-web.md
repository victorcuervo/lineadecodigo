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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLFBJZ5I%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T132251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhNzKb%2BA6QyNZm6A5unWG1zFN3urB5RqVr7WGKEZPfEAiAA1fnyo2KuuZ9NqlwWCAunEnsikjqMP51pwy8KvAwiayr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMV1BOp6r%2FcvJgMov6KtwDUNL0jwBrmfdNGbluG2K5xecYt2XXKHyDztJqTlttBvazT8myh3V5sSY43I6KUR%2BEQI%2BkoqPrkHKg%2BnGkYax81QfX1euup3R8iXZ8gX6DAURuc68J%2FwN7Hylv5aihWwm%2FowDGiK%2Beowgma6AY6E3TwVglEXyoYV0wG9L7TrLusL0oVeHxzE%2BfelEv802rzwASIePM5ifeq0ElDXmVwakOmz5McIgjG%2BAxmjP0TlbRzpuTqN82SdOjBLrHMAAuo8QFhriyDdAR9kDcrQIyDUGgXANlGdxZ1YGDim9pkFv7GqMVf7G5FPUGD4HtHnaPOaqrK6VpjpAHDRM8Vkh46HjQIZSyGMwQ7pdfYpOiMioUDcmNGqwdE9LLNFmVkK2VFn00lNgnrCVg2U71%2B1OGxRaFldYZO%2Bb6442fu%2FR4ew06TQFbP5CFzMwPEQ%2Fq2oBU99P6qkkDtd%2F8jfCIRZlLZztktMH%2FPFn%2FrtgX020c3f5G37nXA45uMb9SNlEWR6Z2O2H%2BY5xzZr%2FK%2BVKpMLR9F0GP11VkXTo73ItBSghMVVO0mLj1pTNfvJal4tA%2BzR5t%2B8sAYFkfPJGAsSL44l9olVjq1ezTzPyvcW9mlC5xw91ExZ%2BipveMNrqHh2frx6cwjtjKyQY6pgHdpaLtJVWRZbX%2F5%2F9UpIvT%2FDaOWlSZTLoHDPg1CdqNhz80wLZZjV52mV9R0faUo0pIO0D59iE%2B5JErO1bOc%2BHGZqDni9wdCHyXnlVztqsVpZAW19F8lxQ8nOnH%2BmPpA%2FsZXMJ6BW3N5qs%2BJryYatMlfm1PtPmjQcLQJYi3RVgjBBucX%2FLD%2FzFDN6FlGydtXVMs93V6yiVtt%2BVL%2BytcVxBO5SHV%2F%2FgU&X-Amz-Signature=b1fb6d7357ded42eb319c835abb7cdd64aa5ec303f1f6b20f837e3d60e9d5a12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

