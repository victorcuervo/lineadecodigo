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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH53OHOX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T155329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ7xyWH9i3Rx79Uuw0F8eul72WTrrmqSLE3XW3ljRyBwIgMdiC%2BCFjLU9SutXVDhi9dMh8Iu2rj0faVP9WDngAdlAqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMy%2FCyY1bWoMUFxcSrcA2LUNqHVkNJu7%2Fm9C9Lb%2BYg%2FvdDLHXGjpt%2FCVZ9iJLxo8A%2FW1yz7%2BMm0wtsAwsnfHfjn6q3kE9vIADUHPl2iokirz7JlycBV7ev2iyQeLlF9aUf1Fj96O%2B6dNZ%2FXEKsfuZWxtLV6HWYnlnkK1Eoaw%2FfHBZ9bfWcs4JrUBMNaooFu2kt66wKm1izhH3mawS%2BBDf2Afdod58lplxMFWu3gLoxMGvkIYFJe%2BZNIYa3r29CQbqtZ%2Fa85CbkgahSXS68MSsOQqrGescmLg2S%2FKxFj4Hxkh3UPsQZuvubzt5HPxCSMNQslte0dKDkyJsBzzEcFISYYf4Muiqpl05poYzkM5qxztJaHXwEUa6tr2Xq%2FJKBH1FRYEZ6j9j0eVinmhQgUXKgFw7AEbYXMBDJAZXw7GweohvclBkvtOlmmK6siI0RgX%2BFYJj37DOvFyBWsvx8mTcmnBjztMZqwVYwXVxuMDI0ZAm9yJoHZEd5IwXuDFNIxsDCs68sFkeZc3BLHPOl2Sw53fzJNiKRwYHPELyHNjpdlY7Z9n8XetvK3wc0OKzNInyieZVwJBDYVH8HAQUxYqgzMCnk911kOPIPK%2FbhzJ7Rxq3VHewXJvZxUW%2BqSVcwTe4n3nY0xYgy0fMt%2BMOXe4MkGOqUB8QDE32DUxOzSz6hay5l2F91l6afPMccanIh0NgpM5MjKYyIUHSCNsFY79fIoL3h6wW6qqtKH%2FFnHdKaUtqySWuYLFFsmf0wFD0y6B4z78NpiBFRi%2BgByZ6dLJ5BZdz9KrFI7AtZslB7mMLIbgV1dLO4VMZSQ4XI5LdOTct%2B7bZRzcldVCv5P3uJfUkAimvoQMCk7O2E9IDUFT%2FWkKltwCzDTkQEn&X-Amz-Signature=c1260e39c9f81bbc574ab71ce51989560269b1cccc2dc4de9affaf0ab2681946&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

