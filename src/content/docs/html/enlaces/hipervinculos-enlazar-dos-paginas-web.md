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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K5SHCSP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T045221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDOvigwhDGtp%2FKR%2FS%2FQwRS6ZlN1buTbE2a3aglxlx%2Fo7AiEAwQH%2F0ObN6rC%2Bzr3dZvzq9sgVM5zXlSeToPLsdGgvzd8qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHH%2Fm37rxV4FMRh%2FTircA6Sckh%2BQbSjI7LhfIK1aqHS5jpGfyRunHqHfNfB05L19GqKxAST%2FYc%2FhPu6bqgmDPX1Ok0vCvxcJxsbJ2qzn7K0Bx80ZKXmDkLK34WASZkLNABwu9F0%2B93Gfx2WO8%2BcYNVX0oe7XIettxyqqgXslX%2FBP%2FiSE0qMuufcTHZFUr8UkTOIluf0CrG3wcWwWPa3db9bMQZhiS910GlWfnrfACS8hYg%2B%2BNeZiA%2Fiiqk6Zr5ziutA85nFfZvgzZQ1CtHhsB0U59XEYwLLirT51t6IJf7XcWWHvd%2FFxk5JjLEjDJUzg5fl%2BocyJwkX8cboRoeTVlee%2Fjyyab20ahuxbUWycyoXpga1K5iNElNk4Chtk4dUHW%2BLJx86awGkXr0cLH%2BQsddx7CpippC0XWm26rGa5Xu92H8bAxT5f2UZf923PBLgFjZbmmRFk3rPqjz7joAM6n9Swu1LBNDyMX00z2uH2YjyObZm5Jruyo3zth%2Bi8WGsm7eLvtEbc3L6H2JxzFbL0NJuPZvQXiWa0bK0DkOODndL90JXqSad%2BwvBLr7AD5WJ3D9XqsrVwE27xk5uU9rBTQGZ3YM0OivMfUaXH%2B%2FfTILhwSP2j9N4pWzl0OsnGv5Sd3WRbKvoRYLNZ%2Fk3QMOWU2ckGOqUBcmRbCk4MJB9aPmgtQ3RG6mxiXIgYs325ROIXvxbUzMXrysmxCPHcVktAyxsoxT1PElVQ%2Bcclv1PaW35f42j86PbzQD6FneStC8s4SYmHUKNqnJw9e9ANrbCtyBRFPGtls9Xb8tHlZDYcKP5%2F4p%2BZyeqHzptGLUTsb%2Fvu%2Bt7cWXNOpk9vgiPi4yO4Z8LDQGkFroqXAWCpwrjGM8BYwJvNqNYsX5qZ&X-Amz-Signature=02cf3245178424f886485be7da503471a3595e18a915b10d0fa38eee3aceefc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

