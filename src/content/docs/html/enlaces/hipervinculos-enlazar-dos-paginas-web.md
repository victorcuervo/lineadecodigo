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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWHTIYLT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T170301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClSKQEZJP0aH4N%2FaAqggWJ43GMNtKcmXgA7Y1Py6w8CAIhAPE4pfduOB9zQGZHOe%2BUYYXgdD%2BwPsongrhkRDbE2JyNKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxi5q0ugHNeFXbHWK0q3AMFEo8n1KdHF%2B2h2YTwCQ1bNV5KIYEXAIEckxqtu0%2FEXgNCM4uHNcMZUCoYH5HyLr4XPlwg1USBdhWdMPEQhon%2B710PVWz%2FovKRHSoHXn6oAcfZ6DtMNl9kLac2F7%2BGFpBUVfZ3FkpIsO0UxeyS7gLCCeaskjZsUu71k3CKDQ3dEFU5vJ36ToFKMjssezIpuz8GIrfKzrL3Tb3PPiuSiXcUUqOhqJHdHmKxAmyhyUB%2B90EDSRLWYvzfWmhd6Xbsu%2BG6%2B2eCJQnSvCnDO2DTc86YGX581gGEfrkUEhCR8g6RJ80vCDkR2yCDp66UELCYkPjg9thMnd2D%2FdpeXb512UJC7A27lp%2FFZlZgjdZ1ll6RQHru01CZrNzITYQuVH4KOc27ZK1XZ%2FeFuGEadlf%2FzkfjKs%2Bkmyh8o3Xq25teNwootF8rPKba4vzW8pe6Er%2BBHNppHmb%2B2EhG2J5cQWV4uyl6XuZMu5bD8hB6ngMoz6uWPXhVB8UgtMdih2wFTnosuvmBbEDYlp4bmZ4tFlO56W%2BkzLWnc7TozVCMRRfzFr5N9HrSqn%2FcmH%2BqaPYDBcmWUDm7AeblzedYB7zaqPieHqsy07caf6sQA7lTeCwDjj2Y2gIb26pPfF%2B3IrIuGzD%2Bl%2BHJBjqkAZ3%2ByHognbMWBkE%2F4QWWmMkjcymp5T3jCo985lh4QQ1XZBkqKZpepP0EyZUMDjcJt%2Fnh5fRamOBR1X0Dv7%2B3jm1wmF3yDn9dN7o1dYUSxUaItVHKPsLcupwYjHWC4PzOO2Z2YrOmTFQiXu6DB3CvKKedvrEeAtEayf1%2FSDQdjPk0JJKeEe5W%2Fk9aqKq4qy%2BbL7jyrI6Cg9V9QJF9oWk6OqyrGcjD&X-Amz-Signature=1514e3e9ada0cec18561a2de7f051d5bc8b92bdac5624dea86f8aa7b8a4a52b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

