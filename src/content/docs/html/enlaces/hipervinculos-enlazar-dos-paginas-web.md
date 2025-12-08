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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMYXGOLB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T130803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGpUKxSGLlrp4RtUgE8vFFxT%2FHcFIg3vShj9kMb33R8sAiBI5wgyB%2F8NXq0AJ%2FEoyJpB8uzARzwkVKGN1Y2Re0HRwCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnFCLnjhu5WcGDW0yKtwDqcNKNoz%2FUkdVTswrSJb%2BVh8tghuHqlhCkQIvlm4kWfGsP1Lc3Q4J1PWVv01%2B%2BCTHYnr9dZXke124D5fC9hHhgAfe1%2FV0VhlkMB%2BGO2GJJM%2BkJl2NL2O7lXNL%2FvJPJvwuTERQReKF7iQLjoNdtHs3Xnuy0ddiHbQT3ZAVQvyOD61SFwSGdyn7379gdNsUXzQXGbjVzhRE0WZUkXyMk98dcQ1xEleBmUKPpZTQVkG95LJXl9g3GHvunotXzxmTVeXcxzSMUJkC2PCUVVZS7h0v2AvGTC3egpuMZTp4gClF4xALEQ4FLp3vNlmTPyLBx8k%2BB4Gy6PmDQ1YwyF4psMDp7Qxn0wk04wJZ31aIGhu6kzrw2994Q6oylxzuo5LYdD1cK2Mk33qsS8wUVEDb8N06ySAxnu%2BXZ7gx47xdEMW440ku3yb4ii8TPOsvFTFxBZzosge2mISxxtOM2DRx%2F1QJUFIh%2Bt1wrifN23DNdx94aDqL7QhkfnuQUR0e1xTQuFaCEL%2F2xSFT%2FaVofymEqerqMTVCvr1I4p0Uho2sYnAVa6quiyQ0WD3PhFW2qIwvgaN4NQqIMFSSjHynXGiuwOBYMstmfsY3jhVU6eC7WkuAHGpvdZ5FJ3DvrvxbhbswyY%2FbyQY6pgE3GLLP6Og9zIe%2Fl84rDRc%2BjT0uvTW0VTQJAgWFqkSCnQ3G48acY%2F3U20e3xPovti0uSFdPnxh6m3GioDp5z48M9UITNWxxkARqyRgptdnp5DSd8J%2FBOlefHb0O%2FWewLIHHQikOnAOEgD7%2BsYPri4Zb7cMsmXeFbpNDZFT5CevJqUrs7Ky7aohlleF1Bb%2FvtKlM6IoNxqDMnty%2Fb1W5OEqTmOvGHYlB&X-Amz-Signature=33288aeb84e325582387ee9571148e3fedb3df39b450b5cff7df189803350332&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

