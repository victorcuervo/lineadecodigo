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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MMQOT5V%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T063247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCOCBkDw9oDRL6ALKKlNS3P0VBrXh50%2FgF2rbc0oHkF8gIhAJZevRzDVL0vltOr%2B8PMWIE84re1zFyCW1yCnunUpE%2BWKv8DCD8QABoMNjM3NDIzMTgzODA1IgzCh7s%2FwapvBx%2F7xhYq3AM5AyX5hl7WX%2B9cimP1a3Wgj4GCtr0%2BZjcnVVd%2FBU%2Bb1IR1iuQYmNCqxuyfi9DBgzdb7VF8sCed09CUvISuxLxLQBswq0FUHZxl8Lo13gfOdAW0QQGxb19tnrnufpI7rNKFHpqwG7LVtNZ97jECNhqHicxYfDp2Gn5ZmyB3Uwv9UanHdNSx5JaSnV%2FuZGcvbguHvMSuUZfjXYmY4cCzheVe72Cq%2BU5jUBqwmGDNqCguUzmEqHcZA8xkdo70LyYy9U7m%2F%2BHhPc29VOTwV3dQghU7fADXKQfzH3z8MHeOYv3eK0qIRy3xbG3vzztoo25s6eiJEjylmzlHjk18Xu%2BhmfrY8fmE8kwTp7FJ8%2FjD3IwYshK0Qzhxn7VwK9%2FJL5e3A9uRQZ2PwxfbzjrSOFrxE07lHCKH0H3nl844jELnDKHDmG%2F0%2FiBauErmPq2gqa7c34PLdKJYLNTgeLztj%2F3H3dJy%2BMXIwKL4rIVmAgWkdWJYz46Qlq%2BDAoTpseGL2xvdQLqoxMSrM8x4ADsM97eslt3eDeBb64yY2FYacZGrAWVuCTZzPdZIn0JsV3%2F0ngpNbzWBqTTfMwLwe7tDHxBImpixkAIhc3hPGQtU3f%2FfuaaD3iMXTe6belEqSW1BiDDFy8TJBjqkAZdacscMSt7CH4LDQXWoSwoZft%2BMPRpAd8yDFIY%2FGl6LUFq5j1eFdxkTRhaIdum0%2FN3Py%2FzLD%2BqhkCgKfKkVVT8Th5YSnj%2FB90xZdwqOB7HPfl%2B7vYerbfZIHNfJFalnetxdJHcjXY8UqB415cQmSdc0qYsV5pbwZlS0RAi02q99rvdDhVh3k%2Bedkf9%2BW9VgCpRREOHdWgskDPawS0QwMhIgDv%2Fc&X-Amz-Signature=dee347bba341e9c3595934c98211143d625ae653c3f2227c67586203c75ed4ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

