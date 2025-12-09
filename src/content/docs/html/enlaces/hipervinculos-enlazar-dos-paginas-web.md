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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HQW6H2X%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T184607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcUEfukyJXXkq6kII54HfNt6odVV%2FgzKm4japKJh2e0AiEA%2FeAO7q4KPoUlkZVUQ1WRr4YKwLzExafuTxzC9ZOKyfAqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOw7QZ%2F4340OVFD0%2FSrcA1g4Rzp7pzw958qxFiGgEBv23lYulm8NE9YRcGAYL05OGrifkbdZttApxdjxg1Q4FzWcbhrkRJSaClZMnAViijWkSkPzvfDI%2F8ZfBruqKGIBifdKxVnQwyNJU6Yh4LP1gHcRtf6FsXg9qcil3b6raOOySK7yRTG%2FvJx04n0LNu5VEij6A3vv9gEMqQG9t7i2O%2Bme64bIzSTbpoCdWFTIpaIozzci5snsJiswIYQnmIjiRz2y35LjdjW6tYN2hijB9%2B30QB3jmDWbDo%2F51EchkAJhQvQIZpLBdJ0TrNZGbA5n0gArR2Tc03WAi99xcQU37dQ%2FDCET%2FadquOqOqJpYFsoCZT7EpTAjqP%2F7U8TTtror4sLbmUPR5K5vHWlzIkGrsDrWj2Q3b1%2BNJWPypZiU%2Bl69fE7wLoIPxsUOupUk1yGBgzuHQo3pzldjR%2B0ncTCZ42YXaOtNnlN%2FbBYGs12dkZwBJ3YVfvoQnIMQliBjPSR7eitqGLvre1ehF8h793MHoejiHFQow2m7GmmrnIGjrhEBOnC24wQtWPwWHOtgJ5kIVGcxJ1SKXNq%2FH%2Bi6v2YqMVB%2FgFeL5zCE7jOXkRr5ojpbKvPA7ynbOXArr8WQh8ppp0FewwkRbrDoxiz8MIm84ckGOqUB7yWxLzK0%2BSKqrWzI8gKGKYY55D68cqJsejcgK5qB6u%2BGkRx9HMYYj2Wa%2BVTC0bA6rNVRy5EGPD50DvCVrk9lLvXolEFxko12XoFIGPSaQF5P8slvfDl0efyMKJYSSfRb7P%2FnlF55XjXSOCBhxmAfrMdtX78O8ATnCkEHgc4o0Vquy0KqTd4cjwqm6KcSUkGr0rjuV%2FAIdSYStV%2FBBsa3wy6dOSQe&X-Amz-Signature=5f021aad74ea4be21167996536c49272fb338023bd79ce598a6cdb934456f6e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

