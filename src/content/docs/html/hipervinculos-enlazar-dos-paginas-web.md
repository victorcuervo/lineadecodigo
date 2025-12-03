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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYOJWKMT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIC1M%2BDEWW6rJOms38VDfFU%2F3h4fkh6oQKKVAa%2F1XusFTAiAXNsulBN%2F5Z%2BD4oJDowBz%2F46D1VHxwVuirYSw5CuhnCCr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIM8%2B36itxuSwc6XV8NKtwD2sCFDmzy%2BwhaVA%2By1dFKIRUwi4k0TohiBvC%2Bq1SJigyBTiWNJi8NexwS78xONShG5%2BshSnDmSbrf7XLkRdWPA7NGowFINIgtKMExEF8LCGK0655Vhr%2FeKb7WLE%2F3weKwNsnub5DA%2B0c7Yjgva7YwZg1F0QCp4hVn%2F9JXyQsmB9%2FLaFrhtLMOgS2DHxe4WologGvnWdPai6wpKM%2FjzjWoa7m6w02GnSFUfGUuYfNcXY7cy3HgnlBLimzWUvGfgnyQibd%2FOa8ux44Vzy0ubm360kB67bZ35tvhvMvPUQE67q7e1w0xoQzpquW5XOE6WMspDxT5FWtjMfORFcKOZdToLGawmH%2Fwa6S8X3yvBaubNVYpuzDldAHUYvDVorgoPw%2F9OqNhgUd1GadQs7AgN5Bzmcu9rUZ90XOh04sn0cj2wYiU1fPAWo6imYQFgBwzkKOvSS0JjFqZmKXVvWc%2FJu0C6QZbyNJN4ridFBr8H%2Fb9fsnvOGx75QGgn9ddTtA%2FBCjuooNYB0svSCYkbMXtNJvH2ojpMl%2BPNpmV5Mz5iQCrqInziYKA4FyJFt6yyiaQ1uHl3u1rqb9Bm9vpCXjlmzfNWHh%2BVQVCcpApxs48P%2FSMxHY6BsxaXUng5uaH%2F2EwvfjCyQY6pgFv8JmcgFR6lwoZvxMpFkYE82aFEzG8GHpmR99rBN1HiXR3FlqEtcOl%2Bdy5VOYHWKsHDmhH8BRo6qpk7P5K3jTCosYo712cRqCS5yu5d%2BahS43DmdR65lDQPQ8O6osm0b%2FiO2YwmtXlxwKgKtuwjSqq0aMo7p44V6jM73Vszd%2FcM1d8Gp4ogaOXz8DrxynxF%2FPJq6Zswy2GgQpRQNq8dMmVEtjxZK%2BI&X-Amz-Signature=9c2d844ca55a8a125f7c59e7fca4e0e97825b06803e1972da3f9c4abd4e4685d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

