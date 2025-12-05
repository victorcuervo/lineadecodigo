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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDVVMI3S%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T184643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxT4dxm2UBVLbh7Q4LytPuL7dSKHH9Z%2BxwjraWeNRHggIgShNFWOHI%2F2uSZ%2FDZYABwTpWRvShT736eqVIePEIObCEq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDLg3XH%2Faxb8QHhh0uSrcA6JzlTxxy%2F9D83q%2BxSMMknZTFS71pzfjYAp%2F16AXeTfpJJMMJonOSTT4Srp08G7DMl7%2BJC1p8BrMB%2FUfkFopXAG0CndSsS0a69to4bBQCBVVBAR5Z63HSdTiMEpWfoQvry9m0%2F6XtswWX3Isou83wJ1th1pZGlp0Zvx9Vwq96T3S1oNOWXvRSEFFFvRzqCHHI%2BTN7usVwbvK2NEubxShEt7ijqkVbTzIbdOck1wEI18DUBZK3%2Be0HxA%2FLMLfEHT1MB71taEuf3g0ZEasaBPvejFOX%2FfmMtcLz8PE23BDFI6rF1IK%2BWIPrXkD0eYe5g%2FPjT6jDStr6UDoOAn6yVuxVZ%2BoSnhfJaVdf7lOobFbVkeVA68kQNdYWQphQb9KADAZfD8s5VUhqvlUEbBKFpPNUiItJHjJKlSRVVyHVkcGd1r%2FC673QAP6WP90I0cFOb7ZWMszQ9YrdAdw8oGE4rj1YXSb%2FoG9h9tNLbu2zzqXYR2WQxegER9yu1tzWbYLILtDhg073sqJX5ya6CMtfbmlYFGdHwSYT5YO2YxixEEfsf4Tav%2FG%2B%2F8pTGiiuBIVJS5EyXITdH9FCmapaFekQwZQ2IiYClX7HfrHZ56RPWLooA7NIUsob7NwXaFdza3tMMLmy8kGOqUBBKFXyGYtwq3FtbVXuFfOYLvSRk4zyJHy4zBGCy%2Bb1scMzUdkQXJXPmyzDvYlC0UShiZQYCufdhLACEOekLXTVRKg0tCQlGqrYnJW03tqNC%2FwBHdo4Z%2BjjdxGjhdXD4JvTNtq8HhYxXust3VR8zfgjFc%2BDPnoA3yp1nkGx8HGppN15OtFwBnTHqNAokq%2FGM6FLsisjMkXbdzMOxcY9V36Fh5XqPuW&X-Amz-Signature=d752c6e1f6a7040adbed05686b703fcbe71cd67673aa635a8c55b0f1ca9fb5eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

