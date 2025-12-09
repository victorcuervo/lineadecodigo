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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JPRXN6R%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T225613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDk6OngFO87nx1LqFiQ92CBe0gewF492MIdDpNUF%2FxSAiBX1wKVXJCdDv%2BLvlBWfGX0T7bNttA6zhUM4kLoLdgZ%2ByqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML%2Bbo6q1s%2BklFDj66KtwDz5R%2Fb21K0oW8cLLrw%2F%2FmOcrD7sVBcwEGrGoEu8Je9GxZlvCng19%2B0%2BuWHgJPs4VWmH3%2FuEaeB6BVRwR9gHikXwimjjDKi9ZZHnszFNisdbuhNvVsMSv5Dh08jQtuEyPnYvJKkjH1Ibz9n6J1VS%2BnAT9HD3qRvA4KCS8oCj7CX17DeiR3VrLHVGR1Rlrw5UIN4X5SpDRUwhLGrjkdZPKupg0nEWFC%2Fs7v0tH3q5jpVzNmLM%2FTxXqCnpdG5ybr%2B1nkKVGtRas5zTIHXrRs7mVnwZGr6qekqaXx%2Bp%2BGmgwrzU54VlN%2FmRK%2ButB0xMyfwXGuGJ3V5PhqOILFiPXMCTqznkD0kxxWHuGXsHGYpZhWhhzVQIl9642svMsrknznw9BMGBR90wt%2BWivB9tZHWQjYoxlVa8iTyVTz63dM8K5FDjensWnAv5nsxqZmN4sGaUwI%2BVZJbnyAHsEUBo7z3g%2FkS8zmskvwtKf3JH2IFrQy8IqxLFDd6iZymDOho9%2F0zTJnl8muKreJOZFrkysQAgzM8fPccVAt1aNuY%2FX6KM2NvbogtjGJd%2BempKR2RO9S3fgwRPLPpvJbBjUnC1HU91zz3S2AhCJzKx5jsCu5IJ5ryTTEAyUSSD9lialodk8whcTiyQY6pgHvZnyjTf0S0CLuiAmJFvr9E%2BMaMr5N1qn8sv%2FrEX5gtFsJy%2BAbVJN5yRw8CziiPofYm0Hig0%2BKhxkwmDnEXJ9c8aAiWzzAGk6j2jwvCmQ4sQFPMR5TgWZMd1OPHaRiIpe0Q9ow2b%2FbNIfukwNGAqqSS8w5o9PPcsZH4g6FPqmbBnqDYaGZcB5Iy38%2FypDnxrT96SjL2Hl0GDOxfrud7nDCpkUzJJmn&X-Amz-Signature=6b3fda15dff50144b328c2109c22385af28932e9aff9af954f78399394565e83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

