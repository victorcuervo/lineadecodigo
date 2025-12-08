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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMDDYTWE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T050232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL6v%2BoQ4Nw6VT3gji6h5k4Y3126bHzyLzGjXNq1MJhyQIhAOnTggbyIJuezKfUhGgcslqJ8zlKiicY5QKLdq45rXEsKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7yGcEU7HV%2F%2FOHH54q3AN2odtN3CY0bbR1Hy%2BLQg9exVVhLP6uNjJaHV14tzwF%2BEFNiTP%2F9Sm10138BR%2BsSkRmIVs39lb8ZiEAen9Lux9MBZh1Z1WZW8wo8Xcr5ziw2%2FLHuFZ%2F%2FWjnbFrcRQyIzzZdTJpZAROcJk9Mv%2B3QzT8is9U6K3AxxpZnyjVNv0YhT4JMjbBFJ6UxAfG4CdfuLLwV%2FfHrRnE5TRZqmI0wRR%2Bf79dL8FTCoEG4W76NCeWXvzPWKbJ4XLSOPAGi4HkkBNmyI82yiiKGQu%2BEvpYhuZIjHpyV28xgCJe5G4ZMfBz%2B%2B8V7hw5ijOPmSkdqXaxbarAuXdcbq6YV3PNTCoOowwNmdv2YlPxHxDlrAuUOY7GTZ551EEwfMC5UC48O3n0HwyMpO7EgPiH611pbOoZm0iHGhAdwo1tKfKeWSCqqeIZh3L0UMCsUJ8GVCxRNXHTiIANBThIqEtme1CFNDm8%2Fw9Doe0l2w0jDjXX3okPCiKloILFU5RINWbfbTgD6fYBChcIZz48deBAjs49aTUJ%2B%2FJ%2FGOTVXJi7kaRGX734V0NQhDnBsW99U0%2FOKAwTm6deEnjDNhq2eBgXorePr3tVuextTkV7qrMS6h04fJi9AR45LIjI83NeRAlcQD3LNZTCitNnJBjqkAe%2BK%2FbiT3i3%2BF8s1bHyGk5d2X2aOr60t2aXh8RQ%2FF54WOZeJKIQ%2F9r8zSh8fJT1YjR%2B1841nhcSfIX%2Bh4%2BS9fu2xMbe0kXNxK8V5VNhQcKpgREiKCl3rgCWbUwT3ddd8mAhitXYfDrxzEaHmtsNfbiQ%2B6v8xOdODYV7dWApi6uLD%2B%2Bb%2FDGAj4kYRqx7svh0U6%2B2jDwu5EVqxRhq%2FokbrKR2meMBm&X-Amz-Signature=5f884f81a074b486ec1a9ad3dd4d86d7d29e38c72782888523fafe8c1a326fc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

