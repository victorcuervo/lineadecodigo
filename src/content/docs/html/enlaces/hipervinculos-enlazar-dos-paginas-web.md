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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BOTBTOA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T175308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqyr1fRsqZN9dXVEL%2B8rj8Vj74huihaBj8wuAMMxwrEQIhAMQeYQth%2FdMooWbmVLp0vUN%2BqmycwED9pB7DpHaoXc6sKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igym90Gi92Qwq8pUI6Iq3AO3lIu%2BbS1Lridfda2TTZCbge9kFPRAaiRu%2B1kdgqcDNIplQ6PZR%2BXr9zy5bt0HBw%2F0yVmKLqmVmiMMur8Re2uRKSf7zxDne9vesbQZeOO2r254rwgsT22c0O1w9h71mhJQpBvY9VOCrPFopFIqkptPD9CEVyzwenDbyzklz4VsjKXwL6aoY4r306aXKZXH6n%2FSGef3aoIaNJrJEQuZSOQLtkVlzmp%2BlqZ2CKp8bAwIEN1BjdUVlItle95yP7sL2yBNd6rTXL6NxHaYXqsTA0Xk5GU7UixI%2Bj1SXxx8%2FJI4vTwHJ%2BE0LBUIfstVqQ90g%2BMrQ04zFJQ4mzKwOwExmX4OMZ7TTK7ekq1%2FUUZ%2B1Tg3%2FfDJ%2B%2B8bdZz7Any45VQ4R5R38IynPPjp4FYcCZ5jCcERKS2Q%2FPxa7rZiY6g%2BJldoSgXvV5ybOGmQaXkumUb%2FxJ7XBBafF0VvZ4xVTKIkzNU%2F%2FesHqbyMY9dBh3mnkoG%2Be4F2QEhbG9AeSEtr9ACeZ80orih19na3aSGQzAlMpQYigjKQ%2Bw7ot81hVUkUDBdNaeEM1OGbDYAPa6sRU7O5r4NindH%2BEPmsHhWIXZ99vFXZJhegk8TwOO%2FesSZmCG137NV4licQ9EC6Acs%2FzjCRvOHJBjqkAYOPe9jMpcZDq%2FO5KltJpuEaLzbEVIPgUa%2FZYOeMPWMT9gfjehXQlaLXCFs%2BNKSq2QzXxkqitJb8aeB%2FYrJSuNJzciuPzBkSpl%2BsWr7JPhgbSzv7vvL9E%2F8T5afCNNGUYH6ZlQPTXW3bnxb2J1fjkfR7mhPwkAwD3w8OCawIrntrHqeaC8bMhZl6AFMTFFwDaM0g6ZcH3i3R6ZG2HtO38llPVade&X-Amz-Signature=461dfcf0a8f3a3a5ba5557fd4a9152bd0d92d8ab03b12504b0509be99b1a337d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

