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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZXERAPU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T151942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBP5i98fWtzmRSkno5AWDDR21gNtUbKI6ftM5Yk%2B1EZAiAfZwxt2XoybIQYta2ICJxEvb9RV8s%2F1AIwQ5Cd3p4MbCqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9jl0khYDgkmiCN8MKtwDepztU8CKye1juF7C9ZXH6Gl9y%2FQjffjjYUs65YlGlfzHgkGSp4Jplu%2FRGlRUU8teVSpdfW9qnO5iR1HfU4ADc%2FqHeJiLd9oKvO6ugglypZL2GtXOw9QZdsw92KCrTVeVtz9kWbaWcQY5V%2BrAsAtnO0Rp%2FvqGilCqUnmvk9MhwaAD9bTES3zqL57zUBBN53QCBFm54GKRJUxnEvfAnSJZsoeqQulyCRuN7nVARgtnKUZ1H9W9pSgP5EiqxzW8uCCjXAZGKre4EyfW6CNswwE7bG9S%2F6Tbn0VHG2wyNF2tD4npQd%2FrY2eDxbrcTwYH1hZgR9oj%2BjoaRI5T6iOwO6fvSFOuldlaM5ofvMFMJhMAScC9v6zBVyzm2fFkv0Os8icN2OZ%2BIe5LgQugl44WOu49ardvoF8LWzgo8TnwTunaP5UAWQ2wOXDNzx0vNs%2BJx9Ik8zd1uUlAjP72PgqVnJ7ZMbyUCd7%2Bnar1%2FhCufcKBx5BF%2B6YwVIgW5Jz4rN5gmC8qnejdWvz5ppPokztGLMY8Ma6KlPF%2By9bBeodADTP1S51%2Bf%2FyQMqzPLjD33JGjt1SeL13SDbgCY1HjR4fCOqWBLehvu52fCWJjrG9EO3jy5stnV7MAHqAIKI5LuPowr8HbyQY6pgFgNULv%2FUaV7V3Bp76nojuf08r9IDHIkKea%2BDwfG3ohMWhkzWFPtRNmLRNmcPG1VTXumwCciBj3SQAqXisk%2FMSidrp3yoMN6Kog0d3NX%2FC%2BqDq3KnW89FtlgGEd5AQP%2FhsjNz%2BCK7Qiw4fDjrfK3jfbGah9CHhC97M4Rk8Ne01q4KtfdkD7rFCd4CSMuK49PGbWrpHvchLyrEDq%2Bp8f1wo5T6K5xIce&X-Amz-Signature=33fb891164dca1e20fbd47e3e76c58234b0f56c0fe870178ec8db7062ebab2c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

