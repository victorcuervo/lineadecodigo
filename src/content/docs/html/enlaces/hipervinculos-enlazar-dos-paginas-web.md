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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTF3WUK3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T234538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVzhS20yCfd7Lw%2B7GinY4%2Beu2aEK3IeLBqaw4FMYHMVgIgRbRPZCYd%2ByBlQVnbDxZCkn28%2Bjhg9SzwfL3oaZ4Xl7gqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJxpdkuVVoHMI%2BUySircAx5rHFFIsAub9WrC%2BABlyyiQL3MbFbjztY7YUdcPGQYadT0HspQKdJ8WeUsGwabhs3IQwQgPDthj3ltyfpoAvjjpFEmRXqJufUtmJEY5GbhPIM0%2FsYDTb6fSxkv8jhrkmBf03ytkzE2FDFtC%2FCgs84KeeSRbV1FFh%2F1aK88MVIyHMejbL4aL%2BaJ6EApnwMNfv8CAg9lXHQARg4Qjb%2Ff3Q9BR15UO8D5g7L3VSInmZYVBTHVAbVD3S7fykImNB3s9IlCAtyHK%2FiElLPoiePWPGZxZhiTSiYtR5OCYHb%2BFYiB8cyJ1BS26FCh6gCeQx3EZGNEGPFdM9QF3ZTrg58ZXT%2FH3CpTC4THkDk8rCVEiZzLILxJtim2EFrYYdfzyEVhZzytLHTnvspjqSDILRG%2BWqezwl2x%2F5jiAA%2BCBU31L2jomS7Hz6QKk12F4uBxHS9w%2BeBjfy27EKnZSq0YBXNlRmtizpaVX3VZRsqwWEqDGknIqrYjoyPy6xOK2qDwDaKOwIhXJ26sZEybBZWcaBqezcz0wX8rqU5zgeCSc8tXTUNT0pKo0zYNrnc2w0PFiyNmbmgOiqkcxraUXfdN3jpgvOfdX3KtitobfVBAnvOD%2BvrUUhPy0jgmnKMxTiilVMOzD4skGOqUB4qt37cWngM%2FTbcgQzCvI%2FhTTEo5Kph%2FykX5ELoJ%2BnfuwK25WGpBo4CZP3xwNdjhmMjYSVyNW5GxAuDb6ucojlfGWBOXOgO2ES9Ukg0f7OfevGoeNFxckSy82NsgJ8h42g5dKSfYMgqhjt7bqq0LmifFFXcAW6E4ODFIOqE%2BTp2olIu9x4%2FujM3fZ%2B%2BcBXSsB%2F1y1sSL0I9OjRx8in9a2hbqrsKW0&X-Amz-Signature=240730e3ef3b5d721ada8abd019dce1e60cd7b088df317bc412759fad2d7b673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

