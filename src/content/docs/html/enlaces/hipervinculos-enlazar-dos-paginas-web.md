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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXWLYBMK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T091515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIErvhM2zuAI8kdfNSWBAS3hyytaTgxzOe%2BCkU%2FG2lyMoAiEAgeHL0Fxt3LFzaS1g3cTIpRzornvXmCj0jjlimReJOO8qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPgbkqoHaOH3cb9MSircA%2FNgosH4%2Fx0eVuKSvNFQ16Jd7u39PaKmpxkziPUKkL1llWigqxsQh91eNODG0BFGJlLACxC5yT70oz5rX8DwLFN6vdqMNpFnU9vgeCKsGUgihgSEEV8zrBWiNEz0nS1ZS8SO0sFb54REaFlkTr1zHWBazpJe1tgibkJfKA0OZ7lqtmq5heltcLCUUJ7xLvtgPaeLD6SyMxjPvvJE2f0WKEAyhInt5J5yCF%2Fff4yExn8AXOLowDjpAg25y4FyOM%2FR6ZLtNjjfOBXJfXmxpexbDRg8h8waMSTtqVijLSSAWEIOejycoiPrOBQ%2Bsv68NHSYPwHGQ4OfNmhWY7hO7GONu1iqUppsN702lhLUvCTAJt0QgL0CvJKGuWklamQbbIPnw4rga%2BLSADQqm7Hv%2BzhsTaCayZFUCkkOhhYmWqqonL9AmgY1fGUWQFIVsAc4sEaxj%2FtoQJAgtDW5Qjgl3UzbMsnw9lXag0AeFxR8X8ijN%2BxkIme4gc7W7y8vJNfCt0cnRWU7BZENHurlQwzF%2BTjdH4bZUWH%2F8S5MmUPJapBsSZgYVStOKzyjdexYWvKDsIcYoXMyGVJn%2FX5f2ECYlHfWUFvjqOtRl1RkrgcmtJEgvI2%2B6Bl%2FKF3LMuESM8BFMMPE38kGOqUB4Tlh1rJ8p%2BwOo9Bs0hg63NWtHQ1Z2huX%2FEHsO7fIMuQSxZOAtxQVMYa9t0v%2Fqt9j9TPGb9KlSaBRBR6UlOCA%2B4mCTmdL4x9RIM3gBjIk3NGIUatYFC%2Fwc8NCdvraJ1kkpoWAUXL53t4PtVv3mNsb4jFRgYyn8QqbsnKIbrB%2BP6m1XVcojXO3Ybo1u9ME7vLxfCy4wTAgC%2BE8hdkpxxebOX5%2Ftkyi&X-Amz-Signature=8b0e071a3189a5d140faaeab1c12d8db9c8cd840304dff0a31a8723231c662d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

