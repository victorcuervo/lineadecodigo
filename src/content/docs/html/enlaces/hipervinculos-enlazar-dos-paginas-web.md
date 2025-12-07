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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JVAAZEA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T114140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBr6wS%2BQ12I7lkl8FYbRiUabX6b%2BA6H9JKW5UqDcpvbqAiEAvSVxT5xvByuvcki67pGMqQQfIGpwNuk7pJjAxbFPJTQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKVA1jtLzCkOwim3%2FCrcA2mpRKfTigdcVGQbvYw5md4lOxYqMq0Gg8iqzShHzo0qkBokiPRANmf5ygtkkUgTlrLMhqDt%2BOh%2FYGqKBsmhSs1Wl3ZhhxtzBl71jbrGoYOsnr6nvnelPzw%2BYNvRbutiBde3xvtXBJa8vrCbWC2ePbQoWvBB7S399%2FtO5ZIOXfcvPI9%2BiGAyL3iVwqXXOEejbvkCObGrpOLm28yWVFx14o8ubDaJF6yJ3Wk45aQ%2BuwSmbqB4xrIxUPis57fZx8IYAtukorn9rKNA6O8HUWVD42oO6fEV4chRb%2FsnsGhwCQ5UuzXqTV1o59czqqxCpQseu5QfGxEvTOnyQ1XKaQ%2BiThPRFXpiJaQBJQC4rJaXKgcewgESH5BZgjS1YObRAVGflGzFHCr7t8YqhQIMxmf3%2Bs057OU8Fgjnlep8gXhpWN0AP%2FCpUyp96ef7NdCMFTihwQpMCBe6RXR1CvgQa%2BSV2lGqRU3BzQdQATcSqem4J9ZZXvpmeYcALd3PWrt5QsrF1ux1CL9bWG3iw7KlCWyhmIsdaie1BgHESsdPizXv%2FUBd5PrhSGTUMnT3A02tWkP%2FbRRHxtDelsURtQnHHrHw1Ns9Qtcpsz77EO864CJC0uiApU%2BFk%2BljhBlkCSszMLWa1ckGOqUBtrAV36bho%2FLe%2FVpAtp9rZeKC%2B8SZhYJHF9aI2uy%2BD7qIcvgak7sEh8887vjf1d6yMqsofkWCvKScVOaaiAn9YrRi6dwdEtFjeIteH7pC%2BYRupjCceWCSNdYQSFEA2n5f%2BUmtRy8oV98NJzBNRWjip8j2Cah8DJtGU9765pqd61yLJGI%2BSrcLaIE6w%2F2L2EvnweWT%2Bi9xcL%2BCtZS0CikTsyfXXWFx&X-Amz-Signature=9e9e5703a987efdecc54545f83575cc48bb13401319d484faac13360fcd8b23c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

