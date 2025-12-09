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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVLK45VE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T185128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIER8efw7olqNOogu9Aq96rIwnvm8E1EUPeKYq1zrf2RhAiEAtpMV7OM%2BSxST8tOVYhlsr4Jj4Di7IxcSJIDubddpANMqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWfSLa6PbEVLHQImircAwyX5gLPFKOXpfDRv5WgJShyLR1HzBX%2BlknMAAhK6rtFpiFGwpkHnxpEaxU6c%2Fzj4WiSNp5KCy%2BmVUxNrfVARew7XjYkgixB5ZXkG8XmCdFQHUwrF5dsybRbG0xyM9YSkJMaVK0sdO%2FhRLZSlx6GwMz9NrmtBba5LvbNyWdiGk33HpYL152u0c24cz0%2BllUOfnbmivllNAmuqUdMM%2FJdVImUbZC0t%2F5swmZgTny51CH8YyWqk48m3B35J7Xi1a7eKpQvs7YTXzbJogao5HbGe0JEyq0wsOYCJ7v3yzwcPsQwiPKOZYFn%2BfgqbmjmcNBYB3LAuPDq04%2Bxf0qAcJ0BQTr0B%2B2yROLlmPNEyXYy8FECFsqinBnf9AuymRNekH0SBvSKMAHH4V4XVjsH360J5pxdWj9JAcUhc38GZIsbH8c6sDQAYa%2BQbdB9C4uBUirB9xIu%2Fea3OPOnh6JO5eP2P8raWI5POsTMTh1Y7eOzgI4HPh7quA0W%2BxhxpGr532Q5C2%2FWKjwHgUy1nHPpzYEBlEGNs7e%2Bso9KY4uNpjs8ePJpsxxLpeMfpCXMpv1eE1P0vDH%2BMTp40O4HC0sCleic2EuMIN%2BY1GVNzsIZ8dtFYvsd%2FLQYnFT%2BG3uu%2F3ExMObe4ckGOqUBVbGWnI8%2B0C0BHPblJCYSIwkQaDXwBagMQ%2BB%2ByKylDiU0xC%2F6Ay4JIaDBce2MIWHzdA0b%2Brw4nqtLgyeBpG6%2FxE%2FupjMzFUGvmTWOR1Hh5qW%2Fa2cbAPVYIXUJiYDk8Yjv%2FU3XlZf0IJEm%2Bd8Zhr%2Bu5AW0VgDP9%2BPtY1YALwYIfzxUm0AoDE9lsOpWnKk6h14r25XcoMggk0noIlpN%2FGuyJHPM9ARA&X-Amz-Signature=4962b1b4fe3febc46b7a250af8a6d311d28b070fa6099a306fef5a7a7e30b6be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

