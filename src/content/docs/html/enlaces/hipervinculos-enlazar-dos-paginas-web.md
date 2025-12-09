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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZUTRYQW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T183416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGbUw2eiDr4JL2cGPJt5reNsKmCJEtQ8MaqpCFOzvhFoAiEAhdTJd%2B7WLOUoysVJKoXj2rNSDqEF5XK9h52d0wufdXYqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbGmh6sEkrpwQOiiSrcA%2FqkLE4sI2idyxpBSM8znXFAI0SudMTnni6x1oBWDxxYyKP8u7HmARG1SvdeH9GqXV1IQehT07hVuk1KBphiMUEQTPaAjQdJigY6YN2qDLH1nF%2BZzGltdgqLBdS%2Bx4WvQ5ddnys0vGbMuSqzohItWZBxBznLYr2egnbZlHnCy3sxbcHnf1Y4wJjDa3YAyFGyE6WR0U%2BMPkYp%2Fy5EdCW3h3hK4hczrGgtu79q6YnH3EHbcAvyY7pUSS8KWMORKL%2B%2F4DZycXVrAg6n2BCK27HcPL6qF1B%2BJaX3so1t1hDiFVXMOqy7%2BnfevSY%2BfNHXtJe%2FigwSU4fBBnQmB9oGaRKgnyoNwwA7%2BjEKhTlQlLf1uvFzG1fSa0PlJjGG1K0myOrwAvIxr1gGRts%2BiEKc8REUvT%2BSiYXHBN7f2l8w%2BnAFAh%2FJ5KgfWOGdoKEF%2BouJHoMyQIrjzyzbuArZ9VTsb5QLXKEXA6miphbffVwyZbShMF9jKGpK1Gv8k2BsYnnPVHxPb%2FWA0DFje3ikdi6GCrVzGFw4qS9MseHa9kCzn8%2BCWsG%2BQYVCqVsdT2ZO1Nm0JXg9vjTuf641xHuKtQDuplCWKytmMciLp35eYhvGVUegX2jKUFM6efA4iycY1O%2FlMOK84ckGOqUBzrKbkvwqPm0remAY9kn7Z9ZnVEZ83Q0PPLNo0VssOOksiuXG2891zHZ6%2BKiSDeZdNIJC8%2F6hC5MHmVxlEoYW364AhAsqsz%2Flzw3LSvMJDI8p%2BCu0SzhXGMS9oW0OdofKnTMv%2F%2Fw5IzwURGpXqPwcPScwHbzRbjO4ajvB2%2FggXylQdA6RO%2BEdbhwrDUtFxBdAXrV2TIuseiNLi2%2FcSn9adPC8sQMd&X-Amz-Signature=f390e0a6bf8e59f9de3071c02ab53150a26757cf3b5b4f9e804fd29ec81e52ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

