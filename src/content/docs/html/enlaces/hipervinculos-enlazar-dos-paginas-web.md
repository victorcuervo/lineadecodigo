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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNOWR6V3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T105733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTvi3N1Tq%2FHc1SljVtoH8I5inbg8AaAMnnFMsIsuaHvgIhAOGa5I%2FSC8GS8AJtrOK1uEecUeMB8n6EMH1qa1B%2FifYdKv8DCFoQABoMNjM3NDIzMTgzODA1Igz4eHlNZZoEf3Dj0zIq3AMaT2K4yZzBcRCTKAayM9Ub1wuvBKNhnD5ZyTzHrbmlV4ASwd8wSB%2BhIxhoehCpIhNNC3O1BFSFQyFxJbhcezNsJF2R%2B46C3ZlnH9cneFtMYMTP9mslakGdQNCWiXZFk6VfXIc%2Br3T%2BU2pQs5yf9TsK78ppNJ%2FbnMkWeMbxewzREWerhk%2FrLlnYWTgVWj3bHcaBNbgDNYXL5vFTS%2BE8qICdbvQW26e7z90yfNbeuXUC3Fbw%2F5IbTzc6Bob%2Bk3R7vye3OiT8lcz3LbtA7e0BYjDZTz9lMwCZU1nwpurEawwXBDnmZfQ%2BQPy4JCOphEyZXqeCRcDufFvYfS4olvijGFzLS8BTifK%2FmUpNoupv7w8wpLx%2Fn7wcnEyX8g09lzIqujLGEWiGxTQlrlWpvxDIG7uLAuxjQIa0VCNbzeCx4gvFtzF33UzzMnO8W85rAZmTj5lDQGcfQUnpV71pzcB0gt8TOuacvmCmhcZXzupe%2BEPGcH3EB%2B1ZdftV8ot3AQxJtsq1bXcmnlPST1joCRN1hhqKrJnWczUbYm54KAYTV8LnB1U57SM1jJNVYm6P0o0p04weMV3wh3VjhDyfQzU4R7UYWzNmqHzdZfy3MU%2FueTbBfZQ1ecqAWJJHOOn6bjC1v8rJBjqkAZbNsOxBeO0GtzF29JIUK0PX3lC%2FSWCtr4UQ0KLJ61dr0HrZD3Y8wtPPb6wq6n7z7vZqRnA6Pf%2BWhSCVN9atZsBwzPBQvSn9fyqMvd1qQ3RN2XgzYb5cYJQLeq9tc8Yz%2BYepLiiGw0xp24wB5O84VU6uvP%2Bd%2FcbUdGMiLaXv%2B9vDd%2FmPQBsSMk4k787FZwJxTV3BBhk6p%2BA%2BH%2BIfRHmZ5rFXD%2FPc&X-Amz-Signature=68928943fd6204e0dbab3da66b04789551db4d34a971730ba1d66c3487575ca1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

