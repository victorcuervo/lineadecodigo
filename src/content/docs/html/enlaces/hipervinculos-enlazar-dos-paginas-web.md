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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE5JL32X%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T031004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICoCfogIGt4go3HQ9AC2tt08IAZgm0crKBwp61tmWbR9AiBIcrd7HhmDIIgWtTIULNBj6L1zuXuXAamKDYa%2B0H81fiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ%2BXapqjSumGNcq6hKtwDcrbdQL%2BCjRQBa5Upa6K17E3S76xN7BwsT6DRavJhekPVtROkpxY6Y848kxtIKwhmEdhDm45f%2BRx0Pun7FSih36wQVyTyullQIkFTETxC1OWqJm9tY2w0O%2Bx0kMoed4ORnOtKWgb8nzoSLGy4FQ9W3fv5Z0sqLFOJBXd8Cs7ZEzlud%2FzSg60G%2Fdm8phJ7NSMMCBbMaz2A7K75UuvXI2VZto5MSUp%2BCWu8ytwfuvv72Fjg1DjKYxq6lpbeYHAh38I9NukRt5c1azqk4wyovH5SF72Jfn8tPMHwEdVkmpwNO%2BCQ%2FgUxUtHHiHGMzf21PzMdhxWTpokvsH%2Biod9U%2Bgk9drREgLMd4AqWfKNL3vOiBr%2F1TBs1EgwYJC3vJxNxYxXQfMRIUsbt05f%2FPG%2FKElPxrptpXn5HuEWyuhA1%2BVS9lUwQtyB3cbWva58VM8cb1u%2F3NRc4qICBL1l7DyyEON0Hw%2FLKSlNccXfr2BlqZWN6lULepHFr0q80bkw%2FZgTfyhMGzFfA76Ib1sbMzY8c230Gm2QFw%2FPT9ULDSBzgN5EIRI3bKc%2FWMd0h4VDEROjrUecKbm%2BOt5YyGng3RZautKneq4udhm64imEkJAclQ3wNA5qIaa8IhXME2DBnf2Ywoe%2FYyQY6pgEmHWyODuhXtrzEbUq0OQnPoqKW3eopWDJ5l1YKsKgS%2BQ%2FAu1AJsdHwnqDEPqgN0ge0Q8sPWKftyxG2AXdOjdSxAKhC1Cff3LHbwD9mDgI8YXgcepAq9eYDwLU1Mn%2BemrsM3KfG0PIal6idep%2FSfpUAEIh14HlVKmO8i%2FoeQJ6474W23OmZEoKSP7M0r59o3sevdcgRhw%2F%2FrcMoj%2BO2mF87POxsQWTC&X-Amz-Signature=98047af4f45f09f0e3c42e199ac8f2321bb31c1597389dee444e15b53c71745a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

