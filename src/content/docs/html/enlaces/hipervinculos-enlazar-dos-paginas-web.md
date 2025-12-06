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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657N5NGIZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T122739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8rOZ0Ea%2Bvwy%2FGBcsukQKsyeHHHdbY6v5z6nO9Y8MlmgIhALl3CG8dCcomRxKurhJOpW3Lhzr%2FOeWhbnqdpmPW43ecKv8DCHUQABoMNjM3NDIzMTgzODA1IgwqXDuUxEW0w%2BJZSqkq3ANigAG5RxyJqTs1xZqQrEYsIyprBINRgmYlmf%2BBtLfRTMxaeFlo7EHRJoGSzenCvtbecM345DnOQTwp9mvylH0TxbFAyOu6GzUI75LYOEcHhBKh8GeaZ%2FY459Ol5zcTUMUSP64GZtYPVluJTNAnP3E6i7nmGgSqdcTJSFC7LxiQRc8dIzSVFXU4uO%2FLuY%2B9uOwsJlS3ndMupGBSzbEcBylsNiE6UUZPnQIge295ha1rIhohYYRF%2FLSFfbcyJwPxJF65CpiXqeUTxUYIAEK3O7W3a%2FEUvJRtgjZBUmu4uJaoVoT7INWnDDkr3OVm6E0SCMtC2WW7sr4peJ84gYzJfv5BGbA7dR17QnntOZIClyzB5Tc1MvXBeicEYX9z%2Bgm1wIZeJHIZKxfZbPwEpgNP55B9x7s90B2Nhc0IVEN%2Bbn%2FTVd9CL6xj6wewV42LEcxkvrEciVFG8bqqKWupJma3oFv8IU6cL%2BE2OH1PB9HTEUFEhomDuhOMtJnYbBg3JQNgex7uHnfy28zKiD%2FKvefLfe67PXb%2BbIrKQCcHxPMLTBoBSekApksXHqPE00ZxL7SAS%2BfqXVqjLsonbiDjFRcRDt4kS8YVgiB5nymgxg9J7%2Bx8vJGJ3m2xFIjkJGLmMDCEp9DJBjqkAXwXbtxfUw47K1E42teCxSdoU0JmKLQLsm1XNaIabj86OIAXTVM54SBMsJTthg%2FOGJvlblWT7VCjdhEM%2B2erXGKEr%2Bks3OMUjD1HRIgk09Q6a7E3QOBUV11NsPBBxQuKs2uNaxe5m2i33ssuLZRE9Q12N5xk%2F4BZiawL%2FjK2FTg51U66SlDckDfoomCtDufrjtfS%2BlpeieupxSX4L9ChWo7mbpuJ&X-Amz-Signature=4642a414448af7c01822bf65d11957239327890a889bef91f115c1353088dacc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

