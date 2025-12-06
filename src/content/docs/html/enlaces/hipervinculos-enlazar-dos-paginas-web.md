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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZIAYVGC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T031144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFeWdP5QpFNL8ITfis317OP5Thwfi9vNhVAmNwSuTQRgAiAKxwSOkA%2FbrlsMS4U%2FHtgB8N8m3YDZGNuLKNIW63Z%2BqSr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMBeo1p6sLJ5DFqms0KtwD4A9D6DNRCwkHLTbtVCudm58D%2FSBndqSLMZRe%2BgK3QySWOVjP0XGCEa23ocl9aO8z7PI0JFm8CfyJLpSd4FUMQqcvmB5CL%2BJjYBJJbmj0RL%2FX1AnWZm97bd%2BEf5gjNgn%2B3kblHWs1WAhLDDF2SgCLOvEj%2FeWwPzzBGWNNcH0Uk0bUEvR25dBBlbKO6YCLj%2B%2FunrEicYd61GHHlYI%2B4U3Laq%2FzF5zZZ%2BynkV3VJ%2FpD4YGABsEuux8V2ReZl6R4mAfqW0eD%2B2z6pwIPhFFBaGIOaCb4aH34zp6Tn9xE1bZF%2FMnyJVDja8CrOE77ubVd6mzITCFs%2BPzeajUv1hXv00Q3Hw1YaCxSgJOqeyatSfEM69HC2IDy9usiiton%2BtxnGc%2F3MyQF0MYbdOu%2BBYjXeBUBJZ2qFNDcsa02BBJV%2BxknLZ4FfKd4iQlMPQ6wb4%2Fgx4Y5Q7lBnGdj3hIvjoE4%2FNhAhzBjalr6Z8lm4VOuY2nbx8O4wS6bE%2Fg0X8gpdMHCK%2B99zXDelipxq0LEYyzISKb9WXpHTTQhha%2FcZssWYg33jisZrMZUFSlwueoYEghpggXe6CEQKPn8QbA7Tj9iN9EVXpDc7yt%2BdNMBMSp%2B7aGBGmM%2BGnT7xJ%2F9jqqrExQwlafOyQY6pgEwp%2FjzOCiMDBuUS6ilDMjSMbiyuv7ZkixN%2BoxSMetzJQSiwZzt7bE8M4ffEjGojALhveVxtYiz5jj8%2BaSWGKBj4SeyEKj6LOsweOQqBb1YwfQygFg0lBzXBvywJ73b9xY%2FRWZQmTrAdZpRi07dBYY8s6ni4k9FPTuHbXwE3lKC3optJ432WugBpiFkO59XyfqOw6fItB2ZMu4BzAOcxv4yaFTOEoJ3&X-Amz-Signature=ea02318ddb48ee240971c0e5213a7e5349d5f37e55552c4610d1e94d23d74236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

