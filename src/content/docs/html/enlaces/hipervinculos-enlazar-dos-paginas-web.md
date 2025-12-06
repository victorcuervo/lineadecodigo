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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDQHQTJH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T155136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5PGDKYsE2Ognbs4ACzqegPrxyh49VXGgv9iJEsXyOnAiEA7L%2FoJMlElf6SDLJXIxWezExeC0VTRZcH59JVSVDjDhEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHxI0tDZQTZrX0VLFyrcA1RbXzIm73lhy%2F8%2F1jVbDNZs6Zvim30XSmT%2FHwMQtqWADxhlEc%2BmOcwd8fd0DBP%2F8IcBef5Bsw2Z5WoW2fQ7I0ENhG3h2FiAYKdW5bwzqyDvHYi%2BXbw9AIC8BRVBEqC3FqG9y09X%2BfZSWfcpQS24pv5LmH2I8tsfrgsaYZUbcaAQIpOuhckFVKsoHE%2BlNu08qtAW4JvYb00zNQvm5Pe7QesqVq%2FRaGlsq1V73ESdmDZC2LTQtxS6lEV6YEpXGuXHsvOMU3ZJR8mSVFbBwKrC8rT8WfApAX0s2M5sYE6G4C8um%2BHI0WphSb1fWEqx73bi1nMe5TpD4oUDTyNDwym96TN%2FItaVupGPjmBHRA33qUkltUWFLNrjt9ILihmR2GXCWV3K4T5YpZW7kiAH64Y5FBkBvYwCRKWu5DGKGsDRXtHHFtlEUntAGXdOeLyq8ItHaGWsV9tmwIMa1Zv1q%2B6X6scQSKjCeYgggNqMmMcY7PllGUB5Y0LyjplVpst%2FrcUfIj%2BdD1G16Gvt18x%2BBd%2FU6II7yT0njAIyrRgrTM2W7RLDoeWmZUJQdhgsUB8AanKWuJMuSp93KJfDZ2sc%2BL4He0SHGhHW0D9lknLXxhN56okicJOiIkK8cgD4ZMRCMNem0MkGOqUBWgCm1JtEreN0x8g9mA8rhuBbNoPf10f%2BicarN9rwpTqdhIkAXCjmPzNsmUPNSptpZ9K1wS0itrSLYBFidxtYPjH6WK%2Ftad66lBqgmv4ScoPFc7qTWPtCl0z6yCd53ihqx5YMG6EycrTbyDiegGlleThHEOzJDg7dmSrDOvfZZXg0pT3tduK1CKxRcMMLTMWZZvsJxoYqJzChYsjVj43NneqYZTZC&X-Amz-Signature=13ed6b6d2e2dd580a509b020882a87c802d7434226aac01f9fdcfc6a60258b56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

