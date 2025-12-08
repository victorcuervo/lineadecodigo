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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMWMZHU3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T053246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEOSBgOz8%2BxZc5C5lL0xHQIjxG%2B4ntWQ%2FNB4saoTZTEgIhALyxrswdIu3bZ3%2FUi6ZKOp0ws%2FI%2BGFZUnJbvbwfJ5gLrKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKZWd3OfBGmB4ADRQq3AMtNk40BOY46yAk8BNAvgpaNKxp6yE4YggaXsqR4QwWgSp6R6Z6WSnatpF0VKkaepsA5JOko8kc9MhvlHvbuhiINLmIIVLfzjAW1TqxWaWS%2F%2F60hThSzZ9sh8Hz2ZVLkM2LUDf7S434ZNvYgrqZYiCyCo8nl2cfhTrqsbc1r%2BGLn7xS%2FFDqU8PzhLVdrnfbAw70rVqA6BPJrEvXKhJ4Ldn1ZfLsMAybc9WbcCGi0kKOjl6m6uxSr4nj45mwy00zDGIbX7Qrrkh1j3EI%2FB6wJET7%2B8Eh9p3cHtE%2FJzffbaGhOtqLmtVauqSRtOtvO2W1pJ0GgGHb00Vr%2B4pK10JeMI2QZNtg4ZygSSg%2Bzd3PhfjdvPMruSaDafVulcvI9l9xsLXP%2BkWJYR0OUbRI3opkV7dQHEL632eYo9Eo%2FSRt4ki%2BaL03qZnqk4pvba%2FT5wu0IgiPfYwvaf8tzCLk7Hgz1yAFM0fneCV3u%2FKC%2BIDINaEL7hWot20y1tMKbS%2FdRLy5xH%2BPiv0w15Fu0%2BOYxUWu87f0QHTMjKzYp0xEo5rzq733FoJVHKz01DmPmi1yL9gHoSngo89HRRqRd14U4tHbE%2FEhz69OBDtmBH0X9V%2FU%2Fu%2BUx4QkJH4w4WCiq96J8jDWtNnJBjqkARJUsWrtCoRxbncmYglDvV4BZBoXFgFqoF%2Bwf5tpk4d4UgI5GrEQxffo4oojpyD84JXwMjspSAALOfskvTJcfEvTDRjl3vZnyQnlZzDERLkq2DLSxyHo2GFbD63BTvLyLMP3gOlDcbkPjxmgzKWO7WRKHgaETAY51hMNxJ5kJrntAsQz8QG%2FLFFFARDEIJNkcdd9hilOYZZ6iNGz%2Fyk0wutFpRJ9&X-Amz-Signature=02e4e1d159ae7d8852c34a576b43827a3dab12a508420f6fc55fa83f60057f28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

