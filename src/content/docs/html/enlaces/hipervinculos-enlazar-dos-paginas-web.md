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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466566HYOMF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T151133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYs7N6u7dCw8Jb%2B5ZILa9BCvpXnOnRjIH2ksjjjXONegIgEzUJn3%2BleMr9p59YC7Ajijwh%2BeDAAx7DbPKaNEQ4xK8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCv4gn9Ad%2FiaApP4ASrcA6VPrauW6bYgzSQ6RNfzfFoj2UNG5P1vwxkJBCUj1irqXHR94dQ3%2FkKaN8g4I9M1GCw8OI3iD1ilvXMBXxeZOWuvBXlsi9CiS9nOLQ%2Fc0jx3p9kgaboLJiMOtOJZn3YbYB3HFVVtIXOoUT0dKjZW5wSnTm1RfpW3Qnxl3lqigHHacsTnXNdN5DMynSaO6BaGexOlDlpIHtlH9QhEvjuYnz8%2BzdgGpVHwJKcqWE%2FBA3HhHy5cjVm6nCEH4R3J0JIlT6eCqIqwx1bSptY4ahsN1r0d2ALjEZ3bx4JwEBs60WFpzaOj7rvntbe0iMHhObg0BBHFD5thnErWErNkbQ8RYoQ%2FsCI8UNPiavELbmXA0w5o14jrRi1m60y9gEm7QgWtlDN1HaRMZ1LyqjLsurTg1lN2L%2BARotyFxMjrOfc9zupUx7R58xWM5RnDCJf2ROddB0lfFdEzgB%2BcaUlJzXf3Ydsy0y9vL8gJ5Df3F6LQEWtiKY3RorC1GCdZzO5dH0g2UvmQPN%2Fwlef1M0zpSDDtAPDs1dMabdKp%2FBSidCJG8n0MMBoawYuxF4BCAjJZps1%2Fs%2BSa4hqIQXmG6%2Ffgp0bV%2BNsrgYMErSuGZVnf0BT1l0Myz7DIOtzfsziZ%2F55nMICb1ckGOqUBs93lUQohxqmV0G0an4lHc0V69HvkzL6NB6enX7EBGJjv7qi7UHHurtIT0tdoQGY8ajnH2mlS%2FrhjRXAhlIw5TJY%2FNskf%2Foq1BzrGoji8wpTA80VSOlw9jFqA0cdNhMU0oLXCdNsVhl0XWxFfgpfXI4IMuDL2773VD2U3QMQze5gZfpXjbno%2FCG%2FkUIUzOqPFVC96g6usvLQne5c0XcnrhShYEnBu&X-Amz-Signature=4953fca48092d56abe1a18fc8090196046988fd80a8bea8d6fc82290e732fc16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

