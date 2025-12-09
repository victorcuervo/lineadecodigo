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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K2XPFBI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T205534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3o4GcZIhh0Ub6KPOiqBsjkGqVxlhIpv5HcgJ%2F9gnxjgIhAM%2BKwf%2BER0faTtdLF6JsSJYs0RwrEQwswekgz0NE6pT7KogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL6BRFQyVvc2WxVDUq3ANdasqKEnOoS5oHrq9nVEn2MRYGjRWi00u6GcrgLQtXMyMpoFlVswjEaj8XPSq64JAe6tozfsfGkNM1L3uWFZrAGrYO0hEE8FmVp9qHtX1Voe97caZ2938vCoADP96RadRBJ7vfiaAZ9CELLRIxcdGBh39zep4mjQpRc5Z5hsNgjXAIS7cqiqhPM7HtvyHJY2tctChKGEQZku8IwFh7qWiJYEiMx%2BhSqIkHBQefx1ePyhYWSfhP5yXXbcORrW0sTP%2Fck%2B1chta5%2FjU1h01%2FUlIsjoCqoZdJj6kw8LPoaPb0wgFxq%2FKqfK5U21%2FQs8GeKSemsJVTPrCBvOZ3EEvSCVCtSSJWhyQ%2BmiqXK12cSUtp7REuFHhzsG%2FYwB3RjWJ6L2CzUuUtNKDMK8BHTO8odxk3EKWHxCbWcBYVdpkpXB0DbzVBUf7d1PIBiV2kOI8jOFn2XCmksZHgwzb4G5WI8ZNqNeKWoe%2Bk5Bnfro%2FiLCmIsuhP41Ghbjy0r2pjiB%2BX1QkHCyoGNaVMikIBdbBpaPubEClok%2BcmqcohlL%2Fn%2FQmWiiWwjZRp%2F1VO9egUpRgXPCmV0fj%2F6scwheJANExs7bWbW2GvN0T76xiDVFoPRjgLNukwo7Wyxoeyy3C61TDh%2FuHJBjqkAWVdCk183D0GE7BSVuXTsCgtt%2FF%2FTIJosMT9wGRmMczcwk2tEQIq17VKSx58F%2Bj%2BuzqiI7Zg2am7pBq0Cw%2FXPgB4uM7vJEfnZKrYMyOrmFEcVSYB4egKh90BVHbPwJaXwQJHgsyvsqkLMW1q3z0vaEdF5YYcdsuBhJgONf408czsLaORQ1CkoJ1hm%2FC73C9OMK7rQLUFfkqTAjSRYBnisk8oR%2FwQ&X-Amz-Signature=b33d5cc05f0f7ecff83f550b93c9355166baa3669a4cac369d5697052689738b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

