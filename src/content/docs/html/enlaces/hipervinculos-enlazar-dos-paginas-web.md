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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH4BRCQD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNxNmcY7EJYTaY3%2FtqpER0hVx8aMhDdHlBVK3SeuX5MwIgbh%2B3qhkLZxlmhotW0qYQgbue6ysB3R%2FMVmacFxV7C%2FIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDH0IpC0ej4LhhuROUircA%2Fg8FxkJEj8LDjWYRhm%2FToZAot2Tb3VpICyr7lQ%2BKK1No3KTP1H5qQzWbLEmk12gSLzDJ%2Fssblb7msYtw7fKxxP9bOdCtfeW9GlcKXD53j9s7cD0bAkL32MbOC5HOpjstz2VBLW%2BE%2FKtvLwkHwLQDjMb8nuQXOvHulyKSaOjfTwwFBKfY2%2BLa5xbHgsvpA1MFyY6jFKJqCzo4iPfq81njRTybPBvPdB%2Be7eSc1y6HwCP%2BCdK84Valc3fTvwxi7phIUDa02YVHNw6nebNkC7RXA%2FDP%2F%2BP5kvyzGgkzqmMLFibIxAumjm4iORmUJVjtksxjPvc%2FdUZ0vHjUP8MLidvaFA%2B%2FaEhtifQy%2Baz%2Be2w6rOVOJyelrd8tHvgUQkoIVaH4a7t2DbhxjfO9aW4nEbE0vGBC2cKxsBRU7gVOTmjCTZGPcfNv62JHSMfNJpnNNG%2B782nO3gxAH%2BfFqPdwfC1ow1egekMyr57FM%2F87j3QKuzHxnq0bCMEB7bcdnJ%2BFeN5Gfm4vkXGWePw%2FF%2FaDuT42dn6DgUXxQUi%2FsXz4vLIlUPMcED3zlUYDT3dhKS2j1OxxyZ%2FmYj4cbEWL0RwSYeCeeGLaU6YUh2i5dVKHWL%2BTmqhy87Px5d3x19cekCIMJ7ezskGOqUBySAafmTWygIT7XTaP%2BsR8dGpEMhaAIGZYv0HbJGQ6GHXTSBGBc%2BUvDc3ltiHytYJwy0rKJk9URw34pVCN9fhSi5GKhaV5oCm1OOCYisCLQcIh0vUs6MraKTS7a36BB9ttjANvBVqXXkMb2WKiqrwk%2Beo8BoKI6S1Qki2EFAoLV6Fzdodv%2FWWrd0TnwPaphK0grzfmLj7FudCdvV15BdKo2OCAzq2&X-Amz-Signature=bc1b90143f30cf924ed168cb146bd0e9ebe1f3ee04a806c727e0d339f7e6b92e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

