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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOVW62EM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T152834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BQVoqr9XTxdpT4Kc8SF7JJP5jIuupPxaywXOY0Q8ENAIhAPRGZnUumrDYs0kWGQsVklF7n5n0WFsbIukK20fwfMDuKv8DCHUQABoMNjM3NDIzMTgzODA1IgzsMz%2BWcS3pnaszSX4q3APWuaS2FQVXv%2FlRTc6PeJic6oUSHWGr1eslW%2FrRe6a08GSu5E6mE8vM5FzidZGpMbkTSX4BweRdrbHWa7yiSiF9UddnNadHXNsSzZChddWQK1xAzj1pGSVFF%2BsI3PNU%2FNM3kCwjbvnGkcBtdP9eNnTzXVLhOYa3FPgDrYrdsQMwWfMebILBdSIq00SPEjm8bnVBSlx4Jq1vcjGMqwIwJOqx0oDOuRP1oJCA9KP%2FLfbo4uiG1ixihFXgodpebQA%2FwKQyo4RlVq8ebW1DQ7EjzDmiLMsUYqGI3UUjCz7cLJtuFBRObo%2BrtdQYuoksaLaz4r2gPW0PV2pqouB9rrpUkde%2BbDTbNvwklNtOUguVy0PP1zub%2BJOdCyO4LTJa0HcjBxanWBX%2Bhz64IhrOaRuwprwUaQC7eDOw%2FBSPl8T2Cy7UAk4taIf8oYx%2FMTWe3TwZ9oStPuy%2FZcUe5Z5bnRx7mf4fSKIPzicnMIFPivk2l2ZTt5eVfqZDlIZIcgJxhUlpCBQi%2FOh%2Bx%2F9jNZI8XCCA8eHV2sev%2B7DwGzUoVd368J2Lmrf2Q6JCqh5CV1fpz%2B8J4qD816%2FFSsKMODcdaZ7DpThK1jpoQSbRFdx50grno3JUpLGsvVm9I6LfNb1mJTDQptDJBjqkAdHSg5l%2FWvtvI28RhivZDyXCsjgTAxg9dewwUxEP1WCwQd%2BG7C7uo4Lav4OzTe9hT4BNXcHQu5rMONfw4w5bg%2FTGjiwKkKFFLfx0XTXuB%2BBBff9FIyNZnJD9THrjQhL%2F%2F98GTKUw1qif6qWOn8006IKY7%2BSGHgLSui8pXL5uEX1vRERc0IV3gfxUR21gxomZOIsnOcKWkWd1QEwRWKIA7u%2FtYku6&X-Amz-Signature=8a0a402d0723eec2f53496d8317e33f093c8ea8c8e5f9588807b147b38768883&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

