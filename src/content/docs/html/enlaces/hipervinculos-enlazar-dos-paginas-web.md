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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHEZJOI2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T065513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAVXxIJPQ5pXVAwcFWWt4VtVgAg%2FCkXmdYKFclwNd1zAIgK%2BO%2BGxlLH4e%2FlcECpV90xCn34aCjhyRuvZM9pQAZpXgq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDCCstkmAcXzi3rcrHyrcA84%2BB5mWtseu6BW%2BH3XuyuofK4HP2F2eJBfHu0AiqHBs7gAee37elJhCKcxwSbiN1EQK9gg8VkCEAffgrg5Q9hEzL0fb0RIamyiZVR4ErrM35F16u2XSJZtfUc8ks22H9xXgYz59GBIPKTgAI5amviB6pHo94dfejdxcCsNa0OgpGC6YKHB8IbtGc3v44zCLLdoWhCGWiAyrLjEDNpdbMoPvCuLz4oHEddxMkqNRGkyV5HksRBTt%2Bb48fmag02C09wx4OFnsrOr8Dx3aT4CmyC1rDumazUjP8266VffdGXHCmMLG7uRIVV0%2B2AlqQELlhnJqjWurcPqYAluYwFQ5jYkNyGUjmyFXyHDjjcPyF%2BSv28NW%2Ba%2BoNjQ0ohMvqHPZ8lGjj2%2FyiNlBG8uGDOO4rnxr3kHvYQGVdGOq9kHH4kTQlOGLYBISoeLb4a%2BvY%2B0WMNSqMf9sog2indyN12Kx2R%2FUGBuKZ6S4xgZJYAtpsPNQf3FiU%2BKyvIk2QP1KY4IeQmTVu5YMYPxhIVCYUfCm6f5lFu5JsSpydd8bv%2Ff6u13rs%2Bhqs7SgB%2BZbCO0jndK1zYWt1KpI8rwXc%2FiNP91%2FQifVvr7FtG%2FAdDaw8qXheNPJGQ%2BLvvU9Uh%2FglJfzMLuvyckGOqUB%2Fiz5YU8PO7PHtRq023qxzU8d%2B3rPeHbDRiXIq0u0Qgu6I2EGt1bWl5KxACZs7aBtzy4OXplU7eJg4rOnu6mL0uUaWGNrnbp6bkwpH0aOV5D%2BTaUt0JF4ofu%2BgCp68nFBJaoG3NHq4bzwwqS0Nmmf2B1XCiCQv1S7Rzqn59e7j4WCstpDHDu1VCWmckJagQRn1k0FTZ4SOftRRIatJQuq8zAOfkX%2B&X-Amz-Signature=1285950594429c1f6c1102bbc46b1602437fcce79fa2d221cf48662fe7879b6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

