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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBM3UGE6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T192520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBICbSHLpr473ZfjFOPbUDGTjThKGvijQFuREwUH2t83AiEAoRiCOpA5JPV5iCyszxQptg7o8RPMAaJUNpPQfEDotyAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFYRB%2F8UW9NIiNMFCrcA0oMiw6PzfzISWKaantdyN%2BReJyPpKZU0%2FNmGBdXEN62fQ1GnPunHHQB%2Bv8y1b5RYNq7CpA333ii6lsK%2BYxxCcwYrBCkWDD9NO7Nseki1GXxiQZpxBxXMJ8ak8EX6ykAv%2BRbezvzNkOjxBknAbaUue5zxklMLHmb3k7p%2B%2B2wNplqU9vja6%2Bt5Dh7HBUrgmC%2FDkVa1Qj%2FodCKRnqSJLqQmRxHBF4E9Yy%2FCkNQwBT06tdCABUA7aY2my2ymxkPXNYnkJQVBEjkJW4LUa5oNgIuETxyJcyZfZeZIEgiwPJdQszYAe7UhALQB6P3b5zBBHd%2F2YVKAuxFS7cgRoj486EhUwyFL%2FKIWBASrmP5AvCST2PWgT6AiSvv%2Fk8B8U8esagiRVhFlPSHdZIy9rqWUqhPUjp0yzX%2BCpmRJFSh%2BvvGFFZQO13zh68Sgz%2FIedgHBiLu8nj7DO3rIEq13isG0FkX4MQzavVL1TdD2etpvH%2FWCdw7ajo6jxrhe23IovL7FaTj%2BNLKun03hu57Pd1zO45L6yKjqRKcH0MkhKLIRu0OxBOrWxrvnNerN0UwObQqohkj9XleWpa9jm15JB6edy6%2Brk%2BJS7%2BPMblbZtCnBam4LjHKhOAkRE0BM6n9UbZ6MJW03MkGOqUBKyd5zLkyhkIqLPxPNLDgdAvxJVYdBKF5oaDRspRKbKVLL224k5jdSYAqdW7ErlJtlATelIiRgowcOW7ViT%2FUWe%2BRq5WFKNr5Nu1l8ImduGsux5E42bnIlrC5mK18hqatS9Yepc4RtUpoDDstKNI39JId5jSnDq0lM2NkSHaomjdePqWmOFEekXpyzyDLcOoU4aCGiMwm8eWTZmH29jnb%2B8Oyf%2FSV&X-Amz-Signature=01f6dc7ced8488b4c6f723304e920b01d95bd008982503bdd7ca613646b15b2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

