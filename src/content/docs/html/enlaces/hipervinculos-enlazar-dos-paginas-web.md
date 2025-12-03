---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFHJMONX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIG3ZaF7qBC2n4q3JR%2Fd3jv%2BRWWg4KbnNUmNvde3YmC65AiEAi72YRdhaTo%2BGXmyT54zJRF%2BA7JJW98YayhTWU5BF808q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDOjhvSrgPp9JUxWT6ircAxJ6QS58dTGulY0Nnd%2BfOwU0OM4lmpTZpoYLUAN9Vj727objTDaZapZZO0z%2FwSM3n%2BYAvBBW3U5g6MRenJFP0cPUKZc5pGAzpb3xJmjYSeQprVfvLpOhRd71ZdySoKefH86l70FsceT4D88T%2BX9UL5YSYqOfXsBR8lz1dQo2%2BDVuYSSrNpPQ%2BvcpUvXcwjQ3WMt2PMOiF%2BXDu7T02qqzGTT1d4S9yRMEeeiWCiFNZWtaUkECjjIjprsA4ywOCngZlXBuLFtfal1aUo%2B2lhQYo3xQp6%2B%2FvMUi%2F0L9MTjw3tt7Icd7oCo6IMn3nIN7Iandqku1JqWMLKJ5izWNc5eUOdLPLEfSahlmQ8RgjQjVqixbt0xqLwwU1r8sVPpbitzzU9%2FrLM1zBnhugHwzN%2FxrRM6fZIgKATZ2SdSgycei6gDlPm%2BiopznrUMViAxdVQNzvSDgfREVUQ%2BsXR6BLuZmt1d6MfOdvcESRkJs9BhTeR90m5N57SzrTLKh1NDPYqY215pwQyzHWUXK%2BYoC7slDWm0WG4ycMQU9RVzyobt4xhUfksL%2BdWQu9q7n9SAhGXV%2Bdi%2BqAsTli4wlWMucAw%2B2ej2IgHZT4V0AEYNbVw1YlkxviXJer8egGNHNd7HBMI%2F4wskGOqUBcPTCfKdMG8n7c%2BpqpAqyYGYlLZJzVBT7rEJ%2FH0%2B%2BTdVA71aXNt3gPvnA9oGwHML007YE1y8FkdLRKLiLF0hn9NNn%2BisSKkonuxiPU9%2FfJmLdKxQGsjMJOTdWkTjB%2Bz0SXNFMOLGvUXgljaZV58zPMgJbbYQFms%2BiQ3e568wmmAOnJA6F23JzrAR5guf0yWpuUO9WutM5qWtY%2F5YBZ9no2EmShvQ1&X-Amz-Signature=3517860d203394ca8c9c7995ac48d2a76a4478d07d5b4bbbf096c36fd83ce44c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

