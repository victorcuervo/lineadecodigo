---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPNSULDZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T172159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDA0RrezQVKWf45hwsbXDS7QpGz2t4HadxGkBEdq6AUAIgbwJMU%2B7gZlXcgg4%2B5Ih7cO6T1oV6%2F0M0NB9DefZ4IcQqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMuzMQqLbMYtuuqJ5CrcA5cD3YA4AyTVu9UFfj6I%2F0BUtHnlz15GUIIb7pDV4SKkfAUPzheTWHhosHsV%2BJDC%2FHxemP0tv%2FF3m7ARN9RBBrbpoE9zntBZGAR76gB%2BrLWNBVp2wy%2B4lQvPEwN5OBQuvBNKw75M3jbnpmOiwwnsQz8rz0JsyTTV5K5BtXJb2pk287UXeSUr84P%2BnDAhIrmb29s5V0virng5Gucgniaisv0oxr%2BV9%2Fq2k8F3wdTu%2FcnDBUK2%2FK6DGbhOCp5n2EsQggfJVT5NOXIvJksLw48srskzoJvSrDr9u8tuiMnhqPPQFjxtdt7o9lqHxa9%2BXSqpvPFHQ6vF8iiNHFAJPBGuDLWLA9hcyeOt3APuK1WmJwPvAov6IZ9nPFYXqBL6KBDgZmNso3DXx5%2BwMV4mJ0Kdyi9JN9C3qGoD%2BFb%2FMgfUnaf2HReDTUfVq0l2LVGvngaSEsFXCpvkiGPEgPJs2MuQgVG7GJLtw4MweWfHTbxuuQY%2BVxPNxCPZZFi%2BFr2WvLKzwepKQwQa57hjMplXZ62uk3cWja7muh%2F9B1Jc7jxVUEctUZrNHer29xzsxKHH2fMddRFe4uIQCJsEYXxLGkwxVrVYifWmT1d7bMRRNQN7mWFCLYFeX9%2FcbAgiDVJ6MJCY4ckGOqUBHJBnffGsGMTek6tkBArLU8HOF9R3VkTbYs1tZwduzGeluk%2FN28EO7cnGY2JBZrnTEVCcdOvCZfM8i2WhpmtbtFmi6hSnoGg5mn4%2F%2F70I3rzyxB%2FkT9nmvc43Ki8GnseX5ix7zJdcTBYVhkhhI%2FW%2B868Xl0R8ob6gKqxs%2Bxp1q%2Bi6eVEKN0XQRuMCNPktDJSe3d80%2BA89Wlfx58mdqsvV4k0AcKaq&X-Amz-Signature=6f429fbfd3e76a476b5ab513bbb9f53ab6eb84f66cc3092eea69bb5b2436b635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

