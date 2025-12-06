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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654UGQ4WA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BQ3UVJua7XLOYrGrQSLui3dTR6k0%2FSXwG8I3Rf3zalQIhANoKvy3YNfl00Ax0jVGTz%2B1Tcm8TbHmAmVYnXVqD%2FXa1Kv8DCHEQABoMNjM3NDIzMTgzODA1IgwS4obBUmUJHH694f0q3AN0%2FMRhlDSQ0HIiZK1WD2ifhrUiSoyiBefTUJoe0joFQkZDvR2qHjEFYTHhWQE9%2BYjICRujgRUPqMOKXx3DPTkfq%2Fyqw06F%2Fnr6k2F6Nir10tgp65XoGlKTWwPfWaUvlLSls2Ny1ZMdcOaKc6pdAxGb8ToA7o%2FjcAmpJlm8DmL8FFr14cGnIQgLyi%2B8bmv33Duy3cGBNvNcfZMzvBXl7stmQERlyFMvQWyTDm7IExuexN%2FCghg%2FT7zTHm8H%2BuZy54E8tVYMbv75XrLVTJHYV0gabDKzLX1rY755mg6mz5SHmIary27%2B3cwdXYDP%2B356%2FkdWIF7S6Dy0MgGKBjco9GD4xQROsAbMAEokReCCiz%2BCoNu057EaMP7pYIMkhUMd98VeY%2BoQm7%2B5qxEFabcfjanDGwuNkyaioL9gwlhDBv0yODrYAeiqbxsYL03moCoUS61szbtBrYRjRGy3SsCV2MBs1HN2eyWHT1a0BGi87qzS6ELgoXMOLplN6FtKShs0OLpje62ltYr06HHT49yXsXVt1cmq%2BSngX9o4QT7uGiIq357NMTgspkSQEsAK5gDfe92GjDVz9F1eKLJRBXKRsJK7e0wuzOE1sjHop5AgazFiIUGcaZllLhME7oDVvDCtvM%2FJBjqkAeR5FiKbUf3FL3tGGjf8RBm1B1Qiv0PyqUoNE21Qo3WWOY0XI8V7A1jRNr0hfTI7sYNGiWXKhhAodiGjBvPrUz9q3Oo%2BgTM%2BJSFo4ZhW3CtOEAMvkmPeDeCbq%2BBA7n3%2Fws9%2Bak3UG4kgnbQtmc%2B7guV9TOFhSgxQ1l026SuWd8Xs%2FGZU1r3%2BMkrYa1safCf352Co7%2Bm70HBlsKRU9q2ZPkY9%2BDOH&X-Amz-Signature=5727a9e8d4f8b9531d50dc1d4785a6453879eb4aa40815dad4f574f4074e6eba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

