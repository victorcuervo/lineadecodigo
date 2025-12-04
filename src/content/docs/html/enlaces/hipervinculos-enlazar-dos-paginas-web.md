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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTLSMQXO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T101329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCDlbHCYZBPMf2MTOwSvMFgyKgjIDY33lUc7cOJjRUp%2FQIhANwME3ZNPWpUldaJBl3XvrU39fsCX9hN3Qn3J75PU8HHKv8DCEMQABoMNjM3NDIzMTgzODA1IgyaTUdfnNUhGJiBGCIq3APItqpHv4OuSkp%2BEs5p1jpCdwyGFrBJmJG9Jv7PFN7xaNciOyaMfGEweju8VQSBhTUUPCHTmQsEI22JnNAaXSeOXqUq6Iq7rLznvIML2es272nMad5ggv%2FTfWVIr7fBgZAStLTAlyJtdRGNlbxpF5yfoybWRvdDywv3Jkz0qo6t2SwvZ9Un8z%2F0NX5nlkLrI5fOGgZrrnpYLm7EouCeUDDhAQfs9vH1R6uIE0x9amxzPfpcAGo8Q0rt2UgMzLq%2BUqcYfd9tKFhRekglj1QTa0Gj7xqJozsHBGNS2vPbu%2FJmhN1UKI%2Bhx2srgYwd9Y81v3xtIWkmos4%2FEALnF1NnrTRj1eGFlDA8fv6cTDYtMTzKQkG%2BIXZ%2BWGBVeJibOH1gXrL6E1FSopdprbFfdc9DKP5FfpmeF9jBMHdgPeTkXxwMO0bUCBLxuKc5yhJL%2FmJHPV4L3Loz6erEWYC0impMGq9lCopvrRUuRfsDvjA5gHYMsp1p6h056rZxUIwNeVEQNXmTvQZzB2Qz5cBeZ7Gz2ZS%2BQN6BJmOXeEZQ2H4pH7Ot7Q3hvF430YsH4x1Ql9nwpJavXrM7LAZsgpbTfYgs1MKXRJrGku68KU1pfYktit%2Fq5XizcNbzNSKWcD%2BiiDChq8XJBjqkAaKW4Ym0oy97YiGtRaYaNXdh72DRijK%2B80jPCxQ04D3CqwmGI0MROhi0R57K7QAbvZVBULGHYhEPiCLdFWP9v9Ttgfzxs2jSdupHAk4zhgXZT47Hrm%2Fmph7doWOiQvkIvuQY4cwAAp67CSjoQUIV5EEa3Qtx8FKZeqkBUvx83jaeUZVO4ud9jbZIHN8V1vGU2aI6VqTmFEtFPpyJ0ZvTkK9fgGhE&X-Amz-Signature=09655ba9f9f4ad7d88ff6477240244cb726d8a266dc1f576f50075ea6942d9db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

