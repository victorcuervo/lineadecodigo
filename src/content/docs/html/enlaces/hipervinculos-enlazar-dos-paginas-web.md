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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPKMACQ5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T185024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKhIq%2BJ6pcZCI5qNw1oeBFDYY7tUyWk7i2y8nYwLbAiQIhAJqhcsqxY0t5as4lD%2BoepO6odEZ9oWizWlC2f3oyB2WlKv8DCHoQABoMNjM3NDIzMTgzODA1Igy3X%2FDac2J5WPI26Iwq3AMHQqOsbJ6ld%2FEBvaQTpI4SgQk93wJA3yYa9bcN6V4OJH02CY6mQPGazE95f8x0h04QnMyM%2FTrJ5V1YL6YCvexbBoAja2Jby0MEWvOaeAhHzLT6mxcxKm0y2psKQiV8cH4I9bn34sKevrDTbnZcpksQSQQW%2FH6HkeRG27M3QqrS%2BwVskDRnnGwcE6GCZVNqwFLPYiONfd%2FmniF3H9zrK49ev2dXyu4wGXAiiiYOOsgqZ5WdNIfVR75z%2F4pVO9MDp34XfkGLwq19X9wEHkQ0Kk2fhXY0Iklk5rzoQ5kNERQtKJJZ5jpH64gtUD5dUX%2F3HN451B0HbLAbgrttEb3%2Ffx4x6fFHAdg8fTWs6z%2FkQD2BHyWGk0vlYcOzbAFDkVGxL3qz%2F5LvBnT3KZkvuen4%2FNlgnWs7qiRDxutuKdvpz5pE73tyayOWawNQo2yTXKhtxnhVMkPkkswV%2Bo7dNeN10G5wdH2DTZYrztA9QHnhX3yLG39pWNuufK0E8H%2F10%2Fs60yblQgRQaH74PeeykR66FGuQCGRhrwbnQzge8WyjP5ti6ORHqnqeZepCHcE4A4UAB2bcfXusFczqeNZMZhei4Dl%2FOxDM19H%2FRpjDvGIm6P8hE131z0qVMVlLA0urFzCty9HJBjqkAYR%2FDU07GCreDOb2e%2Fw5tQYTVhJP9aMCe2KXt4AOsfLGSaEWtOJv7teZPK0SM2Ch9KASqRBqZ%2B9VcidyhkJPBUH54KeFM%2FPXJOMZ2OHifDaZ%2F3D4kVizIIXMJaTir9SOe%2BA76hpCo%2FGoukpNDTR85fhh5yRu3xo9ZXVZ9XcHMyNtMY2htEyJ7FIXs1wsBCTMIZzbeq%2BhCCfHyhqk7%2FyknOPNr3iM&X-Amz-Signature=ac2344d05892a45529e1e0baab1faa61ae3281cd8d6fa1643e50501195d49244&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

