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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MBSE5EW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T140053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCO%2B%2BGYEFGJvhfSlxIfFsMW63ycxaDbrOb4nWy%2BgU2fzAIgLMttzpC5oBIyYCMY%2Fz2vRgee9bA1sKt2ivZcsV8iS98qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGx6PhaiUj59ORlH2CrcAyUhm8H%2FMXs4y%2B2Zq8fqLXFML4M0uzh2CURjGhwJw77rRlN34vbMot8Q8vYIK6A5ZuwY6PG60ARv%2Bib44aVPgjCYcgACpkMbbCL5nitkupkXU1zWsYaqM84g2HJHhkvOw5aRzpW%2BzT2hHf9gGMz9muOd2WhBd42ZW1XAJQyf%2F2Neg18peHBDHqbhjNgge3eGH9fY%2FPnmZoK%2FeEM32h2BY9PfllCpwz%2FLA8Y9eomre7ytz1PDPOe3VVg6LF6JsF2jaqqFB7du7q2WXQv1bZLI5V2N47PLCakkS2EYC6fkN854GvwR3A7oGLSZz7FNUZIVSvBo1r4XRGHOOuly7OhtmT8CZF6oiYJwXgbYSWOyRVGWFdVg5O1EnmonVT%2BSojXih9sZkVs6OSOhJTdtsb4G5cTY04c%2FMiL8Iq7Qct9tpYLXys%2BrfE9AIGga1lkYjR0MGhA67RxjY13XTqRXZbbPSPNnPbke5RHjUF2E2yRp6tddaRY7rBNVQ2zL%2FPgk%2FVpz9iIi1JGRyIGiPOdv3G9Ao3ml%2BrFlqXCO9UA42tXrqvwjFtMeZKMMg9aR%2BDSxlshFMRCC5DX9Iv6c%2Ba%2Fw7MIn%2FT6hYNwJHoHcYfQ2s04yJLbiWqCfkmqkiQ53QAmEMMSa1ckGOqUBWzf%2FG6YcFqP1G3HNjQaAKlI0lvuLGVRZszk8xtzUGxdAN%2BFY8U8fEO7agAPPHQf4%2FDViHi0wrnIlLcoCQ14MeHtwdP4tGGEuXqokwn8QbhY3gnZKFFwSdHRdQCep199b54w1mOFY3MRZkPuhRUVpI%2BRDs9xXLT4O1IoAoo6bO7xMHfLLR0jSBqpBblzr59EVB8dkFi8k8tO5Dhd3KeyOCPrRrRhA&X-Amz-Signature=5de66f5dd8b5071650bfb4e3d152146b6c1b2011e5c40e667b9da9e16c58f9d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

