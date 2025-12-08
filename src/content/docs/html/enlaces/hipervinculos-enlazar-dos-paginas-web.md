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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ISZQP3I%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T191443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAwgUy84vVjwj9%2FKzAmZZfrC9ak%2Fb6YMD8knjQgBvLlAiEA9O4jn%2F3I3rxX2xJoPH2hIZYv9kozGyYJlh8Am5RVX7IqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQhnxf69p6U3Wx1NCrcA3zr9bvoR3dan9CFxyWhUXbIUAZWXUUtVDTgYT0nQ3gTqJs390fTg5QO4yXfA9I6vtNc%2B2SUIALdu6CHhsvgg5prBStYFjlX9HYwnFrnvrsTFJO8pwWmTkyoQZa1zdX8h6DY4mYGr%2BZYnrWtyHTvHIiG6dk7dTbOdDtWtqDqX0CzhBEdazX1wCnXd0MRslE4Lciq%2BzBBrY7%2BS7lAmYlP1gorPgjO%2Bo1bxXcD6CutH%2F8rhRhZr%2BwA1gVdKJw0rHaFCJgkdCFYRHreinFXvggzK%2FG3vVnIJsh%2BesXvk128maVtS6OB8rKAVVxdrVKYgpRZqU%2FVXQx2a%2Bn3Wy1iv1%2F%2FHyaCVVFhnCEInhRLjARFfb5uev4W29dTyDUIn%2FzpW5CVf2DKmz8Fn3dUG1NALkDz1AjkXFn3jmVGZMYTNF2SanO1I0Qyf3IQkY0zOqALBZBZiSKToVNIDWqoCWX%2FGkQ7IWhchc%2Bj%2FKNTSpGOjmv28jabHYm7ifFVj%2BSVdEA1tUQE%2BlREzvYg0rXUXcc%2FquMzCtgWD9vkR%2Fqufi1Dc3lJ9lTjbwGjheNnrDtiz513XmAd48VOZKDjU2wlwoY9YSkwKClS9xLY0fHWzS3dFMse9tJLU4wjFdrZ2DsIuCbnMMqz3MkGOqUB6qD2jAGx%2FmRxAI%2FTXIFBMGDzXY%2Bd9QkatZnNrEMEqGFS572i%2Ff5qKsUzBH4a5j1Y2dEjvmPBMhKGO4IhThSCIjcEBQCK%2FHtCxn3EVpVI5uScCziqksNqIGmcuuAfnQMMi1ulNlbi%2Bwq0parfxYkhqCcixKJyi1WpN9YfRIfdqnVTgrSQmTc98iz9JzsMPBQbLVbbNq57oM7rCx3yGUuShlhvqmK%2F&X-Amz-Signature=12d56879c0ea526ae071888dc15ff2c371cbdcf577db4a6768cf916ea2fb916b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

