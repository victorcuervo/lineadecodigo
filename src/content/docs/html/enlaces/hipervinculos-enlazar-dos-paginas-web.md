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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JTJ2PIG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T181536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVjyUb3x8JPeWuXilSL1eAa%2Bw9sIYn02XnfqvNDoTEzAiEAt%2FFfOJMg%2BD%2FjmP263UyW1WLoZbq2CgiD%2FLxIHHBkR3oq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDDYtpnvn0G2azKMyPSrcAyndob5fQsibwXhvBqTsdqd6XG3ao2pupYit9j32H1TcZb1MYPFWpp000LYcsHUC0GFzziMki56H%2FZM1oWZvnqeN36sHZD5JP3o%2BFcxLbIuIUkzwJAf1qYmIPgz6GReQxcNXEWeJpso0ICgRm8mQeBQwQZVUMvCiPTCrDws0%2F11IebfzlC1m7JKBANRg%2BO8CeGNVNDoLWeI1hxs97RpLyvWAdB93y19nu6Clnm%2BBexL1%2BtlYYS3yvrN0%2F1CLhK2O%2FqnzW92q%2B3oByu0%2FvmIWsFyM8QvMg6OJy1r96bDbjWQzGoeFP6yLYLxT7zSwR8PMiR5esJ%2BvpL57XbCLHQCz6n7JVe%2BaliLHfZWb3fw57zhWlhfiaKCK%2F6I%2FWCV0Dl0jkjD1MVD2Av0Vs6zmb0xt5yuP5lvxSpcagL69eCtvB4rBsaMxYycXrmk%2BolGfCL%2FiZ2g0I4d5GNHPlXp%2F4RZCkHgl5QWzdyHLGq7r%2FhQXzFU7Q%2B7G1sA361z6eL17w8jyldsNuTXFKSLSKlQiHN79VwJ6TbyJtGo1Z7o6U6u%2BMLp440huvVTwMgh8NAxCK8EwSnlFEpPzS%2FmTwYDPpaLaZbkgzXr%2FpTEtf76OlGKREcsbU3VZA4LM%2BefjzI0CMK%2FJ0ckGOqUBR9X5%2BFr%2F4NdY1X4zzfMt7YO8kIi9mlfQRay7%2FThccUrsVHxLuQ6JY7RjTYdn98mgxIJXDE5jnLTBF0p4ZXExC0rEcagAIKaFHezUlNogUxr9xiikxQqg%2FkczVHzziJlC7lryy0puu8GCRWRzL9BkcNYWkyw7DotiNolpefUfi0pt%2FrW0FzWgWP7vbXBcF0ypCjLR1CSZrMOtSbbwSYrlNcQacybm&X-Amz-Signature=bb4ec1d361d9e1c3cf74fc630e5eb1d48d12070683c300053c1651c626d75f22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

