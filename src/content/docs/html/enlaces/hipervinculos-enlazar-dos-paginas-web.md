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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HN63J2M%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T092815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNKUjUl0ZpxZ2ldwWu4VJLBbqDleD%2Fk8EHUsIuhPS0zAiAwWojAIG3je0BsnlHzru2KPcuI5boiM0OdFSvPdUP0HiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg0v3eb8eAwKgBqxuKtwDdiNR00wBCOXnG%2BdK3OvW%2Bjg7jlSKSDtmSp8sr1dAnA6anhWVd2RwBEOo3HpHpVUe5QHg8kzOiN4n7wVzslLLyQ%2FgD6cG59kB4ZA2YusnEp289MMnEquAEBh7JpvKdLpP6dP0vOvZXR4Ow9%2FPQjJG3iIlc2prSOhwzd5aBOeQ%2FgSiffFp%2BSjOZS29Hsz0LhP3LE%2FVN9ydSwqjBElM7KptW9A2rPrNTZ07QQgxCSCd84IzbNex231cyr4jomU8ouaq%2FO84%2FHBBLIA6tlUwBsv6Wc26tltYPfcf4tqzotnkObflAnhsGLr1iM84UqHQRiwsjpNJBwxiJrW4QSlA6ZHSVPP5VtmZ%2FOreU8DqlgfxTGofoZy4V6ejdRJVsoABb3Mdu5yY2bWITo0KmzO5WC7pfviqSSkeYS1zbahg5ZCG%2FoQL2OuXbiDk3EOHaRedefUvnT68n9llmSdOAysndbs8ShssHo7s3IwWlTww5cGeyfUE1hRwDPSlTp5CDvMXHoS4%2BjwSpuBlZlSCCw2xg75WJpv6kegMrVOcZoC5gspWWu6ScPDZWO%2BywX85TjIcINAGV1%2BqPDYgTyy4JdulKQdAqvFD0%2BAUdsHD82yDOyWYy4LkZK97ntY0cL2AgREwvqDUyQY6pgFXHlZ4%2FmdZ7ASGRXeTmy6r5C5iAWuPfx2cXx9jkr9Hng1jbfyhtRXbKHtgztG1yilGHF2KyBWePsJ85nzUSQLP7HlZJms3aiOdAmcw6o%2Bpt78y9eC0rvl8n5doEmv9gJNHI0EFHCd4T1lNxQ%2Bvg6%2Bkdxs6lQY2vw3it9Cl%2FTn%2FeKP8UDQizDQSmzirzCwbkGDxlBsQ9Oixs7lN%2Bz7jNGL0GZNX2RDE&X-Amz-Signature=8896a33bf09047bc60bc5640a1c39a5d3d7e67de6acce5347d5015b2805d6df1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

