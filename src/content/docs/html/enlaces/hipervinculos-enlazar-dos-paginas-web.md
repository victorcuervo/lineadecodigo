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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5TOHCKL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T052534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLGCTRD8TgYePSfvbwHjHcHOYlZ6mp%2BccT7uS70qDWgQIhAMXZwF5EFzegNgfipHQlOJqEovMo9sT9ZVUyEYn6wfTwKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3CH1cqaGFJSQkkWMq3AONc1zPC8F42i0yfk4pPWzsuva2cm37wVMedqrMbvcRRNqEJ1rHP2yTEZlnzm%2FEbDADPHBBY4S3q5nDGYrZy0ljj3KqTq77v8x5h4WmsRQBxNAPLW5Pp9hSF4Y%2FpoFtnhFtetvQudi0hK7BJrSJtAFOPKdIQBuS7HXlfO%2BhdzQ%2BB7kmzSX78fQEFVFyvcDkn9T%2Fo9WsrFmg5SeHe5nqLGUYRovDiA90lI5Z5VzJTMtwbKUTzNHle83JhHG5nTA%2F%2FJ0KPiMRrMc70ySSaUD8qbc8FG%2Bn8P303Hm9qDJiRK0B0pmYieznemhzmZu7vvGT6DsB%2FiD3n4oddq98LIxNQbgnBf1Oq22NcgbPur9tLBTL3u83WmaXVRybePURJZ7NUCuBbtjOgZbv8KuXJKv8JK9y4jayWEXphdDkN%2BkEIQ6IKeWW%2F4kvNtRZJ5WZQ8VbHRlbZnIaYaF7enJIdYscNHgTH61A59VlFiv31wLPzzkRLRDZP0C3utDgL2bRcMFZQMRgV8mpBlKxki%2FTMbK9ZymhLBjFvgv7XWwyCjvWMcP0JfC39ZkrehbixqJvB74sz4%2FWJrS4MtCDzZ8p%2BTeMu3RoKTdwTAHUodwYHEttTANRbZSuv%2FBEd9NXcj9PCDDJ5N7JBjqkAU6kHKfLDANGAMbM1yDRny9PGWrucl3ESzxxHawzS94MXVOH0Jl%2BvsWNRzLv9NR%2B0NAX5zdOoDYpoMNk1wVNKBu4YepBkrQOjxPbvP87g1BI22tU8YOgxsb8bU22lOmlfarga1hBcmh7anFS%2FMbEek3vfi9HMyQIHQJfa1prLetGzBVjs3HOHkx%2FCB7p44A3rcaj7KbXTYyomW81S91O7AuJjxw0&X-Amz-Signature=837835642f64af4de99af3d5a6cd589b945c042e0ae511e4032851f641885adc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

