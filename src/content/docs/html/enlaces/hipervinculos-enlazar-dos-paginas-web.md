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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BLG4GHB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T040359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9FzVvIriqXpmVZyPW6hColLahhzove55gBc4Xw8mYsAIgHE0LG7OzlnTtqHu8PdYB8d2S%2BOREVj5HPe%2B51hyE8Jkq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAUPsnyiS42ymy9b3CrcA59RFTOpKKpgvitA0ea2f4C9GLJz4uABqIJhBiIcNNqxPiLOnpF7dmYqyUdCZQRDiCkYkukdKByDu1qhvuPHzB%2F%2BfCl1Sh%2FO6LjO5%2FNRJxYSLoCz276grmvUDkYaPbI%2Fe9hO0qEAga5gG%2BwqGHrKZzMCZDT4CrUW3T%2FXM%2F7BxHwf2qkvTjOsF2qSjh3XQEUmKyeTbYCbfMl0%2Byy415muKs%2BlWEDuUZDE95GZ%2FooTcjv5mlB5jRY8m2D0MvOsprJGFRuv1%2B0jJFG%2BCfxtpshwkddEQvBXJKpUunNA7p%2Fv%2BcwSv%2B0yQnrG0AtJbOZ2WBAZ8Lls5lpREMxo8N4i8tw5iniijLSVe9v%2BO6Dxg4xrOrejdZlOulgIVik2uBLQLnjLTCixJoaKM7F8nrPfQWtVVtudXaBhIbvECa5Mcs9%2BjBqvzPB4v8LDNb2XP%2Fu%2FAp%2F1DQP0HJswa0zf%2BOm0FmmDyXyR10sAJCaNupAdqlLg6sKOPku9hsmkETVchAp6n5vIoxk1kdfSMWQHlRH0f7aSEaT7e9rz8dHq4PsoOiswuN%2FusysL76z531w7H19gDGibOkrRRDw3d6KhBxcS8w2fqS6PZ%2Bixwi3jK096I3xZ9r5uqIhp3T4X8fGzEhQoMKeuyckGOqUBnn1GGxBjGGhrcrgVWrNDckKibsMxiU6J6DPTe6tnudEXlrqz0ZVYIylaDX823fkzltN2K4aAwQUTq0UKdncit1Q1fKgxsbNOg7oqGhnqwYGa3h14YZN%2BPabCTu680Bfqgk3ckKwUZRMBYKy3d4hT%2FbgG2ZzJ2jsakiz%2BZdNl41RdtWz2qoI9z4HfV2ysHhkb8hj6yR0mqSwohZK8xuq2YRxZsaq%2B&X-Amz-Signature=6f30d04e340f57c4daf7350c124400e7f93649606a5204c3ae86672af239ebf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

