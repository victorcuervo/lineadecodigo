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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662HUW4VJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T194957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1wneMbzTieP5FYoAqoEeYgk056KHmaTach4z%2F%2FNRXcwIhAP9PW2BRdP6uZUzGPiqryn340JXrYqaVnKTKGm9XZK8NKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwu4sBDuX9cA4ANbs0q3ANl3gqO2lBnXBHLzz8YdORrPYbwAlMVfulRXWov5ftKIu9qwFAAgBci3nYOC9x1Deoa1hacU7gW5FS0yJ0g%2BzwvUq3cRh5PSUyoJADrXd2FO%2FG1%2BQZ782OzgeKJq3MxQjv3wEaS29Eqr8bextMgN3g9uyzynUQLBWhoCYoJ3FcwvVZfe8KklgUxctTk%2FXxQhnt28rtz0VxZc7bE61%2BIXxtKV1Z4PQ%2BG10ApWW3tExywK89V7szyJSpz5UAV%2F8IXWCGRs52L479vJ%2B4DlMpnzQf70AtmcuHGJiBd%2Bo%2FJY%2Bzf2d3r4BpFrFIME7gbslPRj14PIpRS3kF%2BnmZlQuhq8yrnxqn2S9NdE1kqbc%2F30%2F2kXDmTuDQzLMZnivKJ6ik5sUd9US%2FkFlit3Sbz5hMBcVms23%2B50NklvsdP5b%2FcefssOjKm4k7vnh2ErNinG84HiDyME4jYNdUoXxUpruYO16%2F3bqyeEDCw0u5PNUslyOBTXh2rP8HAMggoZZg1%2FkIWNn6QPbkfghrHxGH2Je8OIh0lSnFaZAN%2BI1%2BlrlEkxkzvzd1CiwVGL3cms61A%2B8QIvQop9CXFqgWIwUcd4SVGdMKpDnVky4%2Fg4dqGMuXMrEmtVLglg8pQ4PsqJNkuQjCX3uHJBjqkAQYrQcEytbEQ%2FlFA%2BfHH%2FoSfRuFoqRYj27XB4P1%2Bel0nM3%2FqspQ7fuJ28c%2BN%2FMwZCH47dDx%2FyS01ksULJ7%2BRzKe3r%2Bm6nzc895gj%2B7t4piz3Ni91vzaj6l9krYNF3RUkZ8ig9gfouv5ug4GfZxjZIwwZzLMto1QwwEYoTTNnQ9XGtDCRmvKrt%2BtMtkHek1X%2BJSuAXV6%2BjPRxWxMZcRhpwjhayus5&X-Amz-Signature=a2c51fda43560fd35ff66ccb3f6b5d1b6d3d810bbfcbacaae822f1a8d4926c7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

