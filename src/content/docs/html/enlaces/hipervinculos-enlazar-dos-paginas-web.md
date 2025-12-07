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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EGFG3RY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T215714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDurpFZrYXGJw3iex3HjzlcNAnGQZ8AzoKsz2d%2B7V%2FoswIhAJ9A38xYY5eABG0HbWB%2B2vDEttMn5Hhqr3RYSyZb1BzwKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMR93TqcC4jGGPFHIq3ANscQ55yqrtsQCArt3wTvkQDvqZPLvPe2tuV82H4JeDwxobAIR7l3NlFQ4mQOTCYjnHhF0%2BWaMtT8ZEaKXVm7mBifpoRa4OkqAOFibdyzKmJ2Yqusl9Tdk%2BNemvTR7dGl6kmEnCfI1N7omd2vrkZ7p2jZ2n8AkuE0KNJjLYpPzjo3fW0vU%2FOwwE2BY9gMJUNLVTjMg%2FVVsndZ2RLMXw5aey4m7FtVQdCO7ODvuvEyDK125jIMHo4Qio7NBrRzUeUbfc8umZ5SKWUHmsZB6WJQclGOMZHVLMlDPUYR93a733l2JjksLpTAQsySJtvzHzkB%2FADo0fbevNekTMb%2FkDMiah8nsmbo6xuz%2Bnbs3qLP2bPfmorKQfbYR1PRHiKISoUD9qfqeHztKT%2F6OpYFDExMEnKRrG6PAXEAShXNHwXRwcUBIhgZiAMUsurYVtz7306sGOrG6e3ZeGuU%2B6g%2B7%2FOW5q2L%2BaQL8gkAyHgesD2HWR0C2nzuTiTqMRaFMYEBy6Nt0sEBom9eg2sYhZows4DQWcl%2FAtSN%2B5d5WubatotY3CTF1jfxPcayIPocPfspIPyOLSxei8SVd8FSAglgF%2B%2Bwf1xEjo%2FvuwD8dKfzrL6bf9e6x%2FFJ4jZdFVka%2BQLjCAyNfJBjqkASr8%2FPAQlG8yg%2Fx5bXgID5k8KaWZ5qdMtnGGbMErX61446GC1PFhHHDdtZGkGuMyYB11l6%2BbtiTl5cwT69Ceu6EIdCsYkbZGd180MYfEGDKwcIHvOFs2DaWNtiuRr0q0XwntqDJsuTjt2PxRhKDa%2BhSjXS0OJ%2FrDXcEeo%2BiJTsSplFuUFSuM%2BzQo73E5dLKhdBXOx2%2FyE4Zpz4FEwsAUYB07gIY2&X-Amz-Signature=d15fc27c4ded64cd2e2574253bad4b249229fda857f03d05c4ce67ab1216108d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

