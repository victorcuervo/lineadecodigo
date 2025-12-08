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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4FGZ3KJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T230237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAy4tpjbJCak83h5BN7bv%2BF2DgLfTZ11XrhhDwYbTnpHAiEAtD15DFdO6R7AJ%2BlTgfTskwvF63qoTEuJmrI1b8h1EBcqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDqj2GcwFEaPz48%2BCrcA26Q2d9QAhF%2Bcy7c7D1b75aZ%2FuykzTqzJyELwRiIgra46LZNvv21pC6I9J3gag828P73XqrVG%2Fzvi3ifPbueEZkscqIUhMBopl4vpwQK%2F7BfR9ivN8b%2BN2cGKcaFYIiAjpsUx56gfoDkx4bPn0uUPfTN47mKioBKRFv0OQK%2FUtsrsEElEIL8t8Pu%2BAitnfpXgEcQKpYON76N13njSs9SoK094FnSZU9tpQ5BS0ctEEBT%2FcEeNoPNjKXo8RUryBfV9%2F%2BvyHFZFapmRpszfUn8oj1oklT%2FyzzeBL2dZrdhQwYnRpJIUvoOCmfO7tmJ6lRlHaqKUC4QplUfZgACNvo8amdwPVBSTE6twK1rmm9x4O%2BQ2JN91DFjbUBix7BhzvwbhZh0zXciDjN9L1oamdFFAycUim6svmE1haGSYRyR1%2FFIOJFX%2FpkKR87PfUvIUeziFLuGbVnDP2%2Bsy9bXS0Jw4pL5wh%2BUDZa8TcTqIHA86hfaNXZDh3JBsGu%2FCahjEddlSQAMJC9dchmqaAY6A3cuXRPskA9bqNVGblur12bSkXKRY7Ncb7QaG8goV51TZPB7CgqNgLYDDAW74CY7fbT2245zGduecXagxtq83Kb0mvAw8JHA6wiUpr8rkK9OMNKh3ckGOqUBaVFb3OS1mNIT5UypJm8gYbEbk3ji8oQ3w%2F%2FsdAcIL7DkwZOOtzz7k%2FWP7M7qKR%2F4KUffoTJ%2BZ3amGaZfEpDciuswO4NOVk4%2BGNcIaQ10Jpdg%2Foo%2FpHPvOEugAfy2hP6J6ceIM4tytzdvY3ekiW3Or3JMsX7fHt9RFcLGVFzD0COlp%2BerLrhwsUzekdTmsJl7bsjc1OTB5uUMhoKnBkJalh2YPNSM&X-Amz-Signature=1bde97949054c8a9d5b48f9aeb42fd76829390c01ec2e111d4d68ad9c2fd5797&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

