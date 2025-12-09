---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AXIKT3N%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T151230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUECNhTDjRbL05JlDn1cC8rTI%2FlkIBzjObJ0obWy4%2FBAIgSesEjBbxT2r9AgbyhTGctaleu3zK35KgL2LetuEQVgkqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFGbocWi9SmWwbOFtSrcA4N9innw%2FsHEKlFLbBR2E0fOKuclv5j8IWyF8WvUlnt6NY28UvJiagrMKHdDVTgBqqxEuXCepKEIEuUjNB5lNj778nC8hik5LJxFjIJMZqCXiHZEVLZDaghRSO5IkE0u6g19Q3%2B%2FIbsgz47BrkXoVUwaHM%2BMa0yYFHAIYxgZ%2FU%2FTDUKUJxdv9cvkXGb7lS3XeqSiYuU8NkSdew6bBgIwdSTYBE320gSHhpyosIJiyZbfPdSW2ALpEtJLEB5%2FyQCj4%2FrlwECsaVLbg1QfHd0pqFzCW0LTWuy9G6HUTjVBnKcSgccQQ6tgx0k5XVEKI2F8q7sOh4cabZDkvivyaw37SKZAASb30eBVHZGlPwx%2BzsFPeYXXPcetHG4t99U2xytuMzD9lpP3Y10weMadsS1ASY7%2BaBeh1%2F82T8hRCcxkLXFKN01gHLrZXbKo6eXBgci3Sv78xtrYpH1TrhRq%2FHISry%2BfTEj6zxsocVdlxLlOE%2FyrY36Rs7AUy6amPUB8he1O15Ve%2FAGJlIQ%2FXfHpacvY7cjZrzNoaGpYgffzohXI04vBOtb5mN1rJ4NlIFCYfKtlhhmRpO3z41%2FClRRoxd9C7Xwa8n3FjOnbtD9dQnRQQ%2FRosYh0R6BzdVyUoNobMMLd4MkGOqUBxGYd7jZCv%2FI1qJO00evU4VdBRSQOatZ8HMmY%2BjFklH9s78U1jP8RZHfuX8xUnEm4pTJhtiqjhy2omYT4vhWt2HjPEEh9KqLMcP1ySj3FTgqAwzme%2F4i1sXAkvG3P9Z8xgdCs%2BypQqQA5BzAI2%2FF4K6dj66vjpBMuYK%2BF9Ov90tVZ7vfPIQx1uIH2btO9uulGl%2FKvLyQ7Sog9hxlUEh4LYTVArdeG&X-Amz-Signature=ce9c52a25153948aa761b9fc905691b1207e14c841c722bbde640274bf055df1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

