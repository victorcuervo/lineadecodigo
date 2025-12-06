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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V43JYVKK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T134300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxtYLmZk23CvBGn1ks7XwwYgeaWd9l57RZpk102CbRiAiBkmx%2BG8zdMGZxx3Q2jcqtTyM6cUKVarLfKf4lSRQONTyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMmTwe1gsP%2BqgtIqtYKtwDSuOpQB9smZg6JI%2FHOOujqiFrKbdWEgYg%2F5s08fXG8KELLTXEiWXtUYYFV%2BVKSBzrFmRXOGeEWm2UAZ2SPPDaDShCktjF8Un6G0dTCdVKElgxK4HRt%2Bguob3rpFEmWn0FONySeDI8kBCpDVp94WUQOD9PFYgkGVSek2KOud0%2BzAHjYWyDA4UEbnzmo%2Fm9%2FsUgVtgdZAKoKQgpGOf3rIwKttvZDojIBjlf%2F%2Bi8rl9y5NBfZ4F3pYEOdtGRd5ew2kXHOv%2BsDh4BUHcAOwdC8xtqitshbH8POI7abLK58XFEpVaXkp2ITkyF1CA4LIQZAThoTWwsDB1QelIUt5h9W4hyYR8%2FmaOeosiedOCYcNOqOZnu3QqnMxXA3tzv0nKEoFtk9Yt69eupvlykmjdTtiFa%2BjhvhYKZ%2F50WXq0%2BKcFIl0U4W7Xgwmz6SMVzqIsSJTKuUKlWDQ8pFs9ab6JgQvxWlbqAa8Apyfg40G%2B%2BuyVxOW60oOR1n2NROoAt1m6XtY2ZfzZl8ysdZ0tCCP7rDsoH3TJzxX8v86X%2F1EioSuHIMUzHTFxzjVZZaMVnX%2FzFSGzG0dY6MWelBfkpfb5%2F4T%2F2uOQ2QtE0yu7p29%2Fg2y96HFu27UQEZQhUpRQYhMUwvabQyQY6pgEp%2BBK8%2BIkQAwOHxP9rJ8Hu3CLR5uiiQ7XAiwDW%2BToUaKvEIPWZfWs1zBQuqc%2FmLyJmbyqJQNHCM4psB9T%2FEwMLBUltJAzik9N%2FiGJOsqNYzUTl72n3icRK8Tvw3cfoWAen7wLH%2FH3uJSEfHBacmssWU1T%2B9yTeow3urFGxW5SKQ8nVKwTRM%2FopdItVgPqBroyNVnhXe2DeybNzoYKSHnZynyOlIGRi&X-Amz-Signature=d9d2580ea5dd248fd86fa605f675d730e0c1104b9ba5f935b2927f728bb4e9d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

