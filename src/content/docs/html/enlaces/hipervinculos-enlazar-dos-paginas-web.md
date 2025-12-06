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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEPS5VDD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T041333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGdBlSFoIexuQmWR9QsUtQd21p%2BtSlOg0RvQjOgih23IAiBP585w2ipb4HD1W%2BfqskG37ysqajM5DXqFVLox06QBLCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMrbOfOtEuBa5ighA5KtwDcZo1XLr0MSR8oSXlx02JdiTtOQWbbFe4AU2WwUWCd5TvqmGA%2F91rK2lhzMPvIHmMxirw7pUizziHy30vDvYj%2Bi1dxodr2S90EnjCy6HAa6nqAFHDXgChjjZuYi53KqA9xTcsrOeq6TMF6wVS0AUhJAItTnvaUdpKR%2FhaKaC87lsO2gyMTU%2FmQwEisxoewogNkaILZoNnXbbHktCH6WYDuLoAFU7Nh6%2BDsoZ%2B%2Fbgh8WsVCYEHJIvfpwXdXxQVuhVexSHkcBH5A5nEctKSPspF2Zh3shpDYIxYjRK%2FE0%2Fg4%2BViLJNXhsEg4zjKBTYcmjK9Vz3MDogSoT8PL4RWwgyLWJwFG0m4geYZ%2B7hbOVXwY6JjbcgJ4j4gy8nmR2UP4AYW3DmxrWMwFE0iTjLtaT9Lqsn1kV9i%2BO%2B8njYLn%2Bcd4afdZXpd9xSyKwti3RGVJjzfC6s1xpNowiAfmITTD9mvFMfcgaNAhR0OBjU0nHfV%2BZFSVQoLRy7et2gJM0tflVuR4dKGAaXwOdlbY18zHim4qaEdZzWJOn9knAjIPVL%2BqJ9nVUwCzYEm4cH0xn8nMGbVqUNJUE74VLAkiMWTclikycqJe0r%2BBULxR2q1e2U%2BnPTFKSqQCnuL6njjZXswr8POyQY6pgG6A2kTZlXuP6FOBcr6zOwuM7meagcWQPqObfn6W9Ml5dg73qvElzd8wd6Kaj%2B3thJPh5eJ6oFB%2FIRxhY6wmjnShxEO%2BUex0FP295BXWS4I5FQYIk8H64oOFjNmRuN02OHLEJye8qHlbuImXdvV8OyEsJMW2ZRGDIDwJn0EiPv8oypKV2Y8iQ7NPKyrL%2BGD9T8iVTN1MMTzPVWm3MCZPRGVoI5dAji%2B&X-Amz-Signature=052e8b27ad96e84b1ff2f0809ca3f1d8dc4ff69ce571c3d08e89c6b63db12010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

