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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLOAX5WP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T224357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdQIGxJQWrPm79Xp8pyQaKRz8%2B%2BHel7he7o3mfCBS2DAIhAKdrSqBOW4hZ9lg6606p0XAqvKE0PiTrPVjq5W1NFbGhKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzErnr4ligx4D%2BdwVYq3AN5IDQMRTBAGWTi%2BHPQvlpPsWDtAWW9GwAoEnoPHkCQmMnPFiPeVDFZ6%2BdM5L0nXr%2Fqb2Cx1Ai5opbz8Y%2F%2BMxsaPfJ9EO8Xh1k3a0PJxEmbYVHsHb5czii3rCY2xiWTL1lo0G29l0tlQmIwY0TL2fvkLIGPP01qbTzhaY%2FO3DDS4aoYgZCfl%2BKLIe%2B1htBxclgZg6n3ijv4HurY5rg4cE2VVrZYO8Fexh%2F9tLad2pQeLvHd9lpu5FnnlKJyWxU4jLs%2FqKw2tO5vB30t%2By%2F4m052OzjP6eLygL010AbBjgekrY6kj4E7zEWr44HTWFSXCZUv2KARV8SrHjsgwhFE3ZhzcJzU%2F%2B32WH%2BqrFzItdcRWKOj63bOWnsU82Mn6pfaBwDAyp4naI468D1UbJrDaGFyYgacJFVOZg4Uw6L2iV5cxNZMF%2FZ5bef1tU7TRVuLXwp66C1aA4DglkV3gt7806xrpNVIRprgNuDa30jKV90PYcZlM8VkHM1gavCOpfiYNCuuCZ0u9Dpp%2BQRXT2q5%2FqKWqE2%2Bm9oQca8wH4VZxHZLRLnecRHP7DAdx84Nun1nOu%2FfftHYSOiy07LfusEs8pAKGii00yDgYqI%2BB%2FkkTFq7LXZMMcxxgcHR4XK9MDDjhNjJBjqkAYX99yvtrh8bIv71b5S0toZ27fZAyOd0KMPWt3rk8D5YOeh8NaaCRC8aOTWc5qOYG%2FZIStimVh961xVmsANwKocdeRK4kebMNk6x2Tl0dQi3ZDsyZ0%2Fjp3i7BUWhi7dsrm77y3NzIyJuAe6jhJkqOnEqejLK%2F4frFJdMYbgR7md1EJdPzUHBJ7zFguNRXG0DWn95oEK0Jwgrdoys2Oqu8W1Vn5QA&X-Amz-Signature=31a16aaae6cf6b2ae44393b6494f366f9cdcc7e0d958be68cefd4119dcc54dcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

