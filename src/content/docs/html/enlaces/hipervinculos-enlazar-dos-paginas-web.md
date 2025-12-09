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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RYFQEJ6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T065548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFernMrCvwX1GI4tNHyIF5xU9jaVJ17vb6GQeqnbevFWAiAwFgS1aejfFGS6PGQFpRu9%2BV43owsPBcPySwK6H1Wc0yqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo5yGsNTugovJrAenKtwDnpZkVcAQ13LzsUGFXP0ZOEZCp2D9jGY54d4jV0GkMJXunpkv609P477jnqUxfxV4FyIWSrWkDMxNKnieatge6Aqd53LiYY4mqykD6kxkKc9L6xjUtrOnhhEEo7sfZAGy0kzZ9uh5SW4e7RNjgTvruJVfRIM5oyf5SAQYGy%2FFKQdfYS5hcD1qeVr7K1u6UgYgfmsBiZFfCkxXTwN7aHntK5BRWNERMXHwQIQM%2FVaOYLsbgECMFzzhxyXMLaKofTzt1eTICws8cj2A5Q8TJVf%2BR%2FGGaJfvaakF15E225r4JT3q%2FZJAK39kDoCq233I%2B2Zcn55s7xzmOLo%2B%2BEJiDe7VOAGrtVMoosn5Phda6FaupbgP%2FXx4kAYY8R0AojgtI9OH72FqVFhReWEsf5t0U7%2FNvz4%2BxrLe8Otrkc%2BoUqKGEvfx7f%2Fvxh4AlWlXEso8jwIIpG5780SuT8pcplAa5fPyk%2BdOL8gSHKjQWGGnPIm%2FLWOmWb0zU0O%2FO33QZ%2BAGsYYI6CWblxd8VQUCHyueJ%2FSns499%2BMVFwqp%2FlZ9UvguxLcEwmIG%2FJx2%2F7EE83o4qg4O3hvu1jN%2BSlNuA3N0lpqUtNn1J%2FkKxrxcC2XGhalPTL4%2BI%2FZx7Ntu4XZ%2FQtRwwr4ffyQY6pgFYBDOwx0OiUKHCwHo1XruurHFmYSZWU49bGWNo96vu9g9M2wZZzhlUJ8pMWfc8sR2VNP1IsMHu4sEqiwD6l1RpLRdKT4%2BH4XTwg%2FnYoprvF05nO51NtbYZMALjH6zRbPEWZv3VxLAkPpfiDCwk618IqCHXAz77SuWWbFLerhQ5OI4eC%2FSCvf71dFill%2FKdT%2BWvSfYe%2BAUVlKK%2BWGv7wQaBEUzGlaZI&X-Amz-Signature=9ccb3c7b69c663ebe4a6bbab0b499d7f00fb11600cebdb2b891b38443c36466a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

