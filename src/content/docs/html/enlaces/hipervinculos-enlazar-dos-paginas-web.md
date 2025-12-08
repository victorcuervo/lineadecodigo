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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY7M5BKR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T233405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBYpl8hnvjm%2BXhSEPTulGLtTOuKSt4nds%2B1AIja088bJAiEA5BhN6dP2R%2B6XpuzbzOXZkV%2FYq1f%2F%2BOMxwUmnHBX6TLoqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMRRQ2u6mb4XNxTLPSrcA0xw1DlPRgomqM6IXLsPdskcRqGbI6jUVgSROAs%2FI%2Fx0gCmSZDGDNClhWc7ER%2BhmDfBGcW1WYuA2BjZJBFHkeqRZgGySmA2kkJ%2F64kM0qrxnzKrHZhxWXm6jBbvpfgPTt69eaJGVEd%2FCzI8Ohfd1EbU%2Bz6T7iLmjKl%2B35%2Bim5ZrEyeHVw521DBQCD2B8erqm1rTQmUmq1FBaOfOllz5temOXgziFg3%2BpbOMRGZzJsSLvpVfesMwZehJQ3iOufCtQeVWa5kyVb8%2BpMIDF9Jcifli%2BUi%2FHK6MyRaoPzMbQ1bBFcckVwEjMWhmhcyZyjBMFfwfLWVRBy4mJt3UcFAq1eEZRvfE4eMAPudBJ6gCnKE0DcL5nsSmFjGIE7k8S9opKOYVeKoxYJeHwnA7Jy1mDIKXKzFLePigNRlA72tbBA3nJ9uOgcUv4pz3%2BQDAP6GKXUiKSPxMIdJOp5r6f5hAx0HfwbrDbYlCf99OzEOIX5jV2FS%2F53X%2FQ5PserRsWUTK59hHnPPF7%2BCfayoYrqjUoumgFgcf2Zs5n1SjJHzuMmw%2FkdiUk%2BBXALE%2FePTlJcFZKc%2BEZ86o2wAleaxi4oFn0iLMKdUybOSinCMspUX%2FZ4KNBmjxqjiEUEFX6HIDxMMah3ckGOqUBkvHksFfbP0oRPygD38QmyN1Pa%2FgF95tdDPZOrQirBmf%2BQYBJv1sw5Puo3tkN34KvXXhELL7Nxzm9X7IHVQA8G%2B6UuFKjrm5kyF4DFGLP%2FlqtTB99rCwtk1loprmVTHCUprV%2FxxEsYs%2BJ8A41o7g0vCCYUbJmN%2Fcm53Rr5Xb3fCbJqp0ftxvr1ywlhPT8XvzJNaY5shnNFo%2FoDoWViJ8AQOQSl5v5&X-Amz-Signature=9dcdd6c96f80c6b116df57b38947b8d028b87e92d2816ce12afc9ef330a9ef1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

