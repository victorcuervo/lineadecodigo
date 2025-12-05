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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5U5YVZN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T172348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxxDmrMf8Ul6rvys0g7kFQJQWG9cylX1M14zMP%2FSjxlgIhAI8f2Cs8eE%2FFg3LMiqSbl47T0ZP%2B6kJ35n%2BdjizO2K2bKv8DCF8QABoMNjM3NDIzMTgzODA1IgxQEW8f6Pf0A8ERG3gq3ANyicGeF31wOfFPnfNttM8dfzrx1%2BBfYWQPf4S9HRp7VqzJXwI58UeSlJRXu6TH5%2BNfmak1YwUWHKcHiyhHEXh5IjSKua%2FSPOyiyxnXOFYuZX1pkOVAXBf%2F3K%2Bi1S%2BGnbPSLoCg%2FQsz3nlon4s2kQ%2B81NMAjiZSjEuzpGbogVkfYtAAa7gcNeH3ZxV0gTszSDdwNXjYWMJN24d9vETgnLIkM15xUrcazhHW5TSSDrHcsGein87RuE6HH63iUjpH8faAltSX7Qk6YLCAMK74GEiSve0NpJgF23mJEviJ3dbEu0vyDbATuxbihCp87G4M5P0iy%2BqTZduxRY7xyIoDF0IXUp%2BjZxcclNMUQQ8NzcFDotHaGFDCxk%2FD9v07Q1b1UGnuu%2BJu5pxpDTjAPCO%2BsqsLjazXpGbggCZGX0yL%2F9%2FIeNT0rgv6kRRRdvkukcbAoDJDKULxLWzQ2GeW5aIV5CXn5kWKi9kIDRGMJPWKFgcgKu2ic71x%2FrOe1SY%2FP9tc9cj%2ByMivWnTHvmGrUafXCT5Prql0bDTThRkfE73JV2j3aB%2BQ25UajIqBOFSmW4PvVYcMbqAoxZJ0Flt9NpQ5%2BWl1ZwqTh0x2GWptWSzGzU5i4rEw7eCDqAmPr9CsLjDxysvJBjqkAZ8KIrgGbQF9sXG0GoMrid4MjDeNNd6Mu%2Bkl7nvjFaA2dL7IHdEp2CRsuLKrOjgnOQf8WibdM4p6T%2FGRK96KSHRplXdTo7VXPZAxPRz5Tv5NRUurKwFXi7ry9ilSJUwuiR4G8W4EWyErwEGpb9g%2BhT1u70DFj4yEssf7QNsnt3Gr3eGCzlulo15kz%2BnL3IlGXRC1GEBj7H%2B8u0gEbNxxFPdLmMxr&X-Amz-Signature=15c55072f22bb6022934a9d60164c69e0e3a28d32c2da7d1e0f552e539f92f82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

