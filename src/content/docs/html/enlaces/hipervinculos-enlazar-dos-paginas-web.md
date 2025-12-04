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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LX6X2ZX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T035509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIH59DW0sID%2FkrmvWEgvY3VWk%2FxJc8xVtY1%2BOT2BSd%2BLWAiASJE8wq7vEIdQuDyF1aq0wVcKR2Lv86dK3QylMQ5OHhCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM6EyUn0uM9if0Z2pgKtwDA27LJnRc6eCEmwUVaSTAyiEZn34eucMM8zSjdUNVYOUKec8pybhbE8Xm8NFh1wPuo25F0wNxn6jKhWonFT1YDF%2BUSLeTuOiHnoymmtskaen2hg9p6U54JQUE1a2sGE8CHjxNU3nMi2NvSGwlvHjBOWk6XMklSgBZm7f%2BvkgFzuOVp2pRU6GLvkiVDuvKocUDLHd8yOUT%2Fw81n%2FB3eyXzfwPAv4cLGROUljrS2p%2Bl%2FgsiqVmOHohKfWfVG4cbuOceSSbM3qHtq9shJjr9EsnRR3vq5ona51XKQ%2FyPmZxNqZyVvnCX1mlNeyGNvVs38M3IDA%2FZeYa9XlTYJ6RbkK0EvFEhiT2oZV8EjltnO0dxUDEq1ITaUwpJ%2FrwVJ7nkzsOClVKuJkUkPQUrDeuwQOOVLiYFTdd6k%2FBjNk1u2bSL%2Fz4Lij4EjDAI7fH3DqefcIaYShpQaz9m1dVlP8%2FZkzgHwYnWq69is5d8mbxYJdE9dZq0MyJe8s%2FIcW7cvl1OLMjwBwElZISxxCcjvYqcwao41SBSZ0K0qGDcrltMiq8bpbMbCplH%2F%2BENmMMUxgFLSimKcrBkqIZcYsGPoqr25rYcsGV9Cx%2BUwcxv5CRwfq54dbJ6I83uR%2FyB2iSyz5ow5PLDyQY6pgFWGp1Qv%2FQulzWlZbTPAnNS6QcszlT1UzG%2Fau0FRh8HzaKjJCcH%2BOMtGN9ftQoDMWSQa%2FTekw3%2F5l9EOdfImy3pmPpIGjrm8b0To4zk6VaQMFU8YSyPpYeYuiEsxeIjETF5OE5vL%2Bbc7sNY2SG%2BpyV1FSt116Udq6Dm0GcM9vq8mBTL1aY8ZNEDLr8hwZFX66HtoYNMYkV427uNVoCfKo3OMJHMbyBE&X-Amz-Signature=23f00ab4cc97a2c3dfe3529028dd179444847b12f3d142502dedcbd624c63302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

