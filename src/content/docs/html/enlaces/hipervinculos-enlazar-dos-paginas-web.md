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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7RCAJL2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T034753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHidokCddGuNNbdFVmTpbs%2F7NwMny7N01iA%2Fvtoiger5AiEAzzlZ%2FZ8ySlaoZ%2B3DMzuZL3Ncl1aZo%2FmGwkIXX5WWvL0qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDL%2BEuDAB5UFdza3OircA7L0zv%2BokTCstl65%2BypICOllJCAZHV1emPU0n6WklpBU2DyJ%2F%2BExThx75YTPkc96tIkw%2FmryDpNvYObk42u1VXJ0e0qn3ugit26OojFAOOl%2BUAQNndHmzl6veobYv03r35CCLfO67Oa9QqknJ6o6wcQsjvqrwdNfRaWpxWMgSMSF7ZFdgYgP8wUljgQeiUcWmLfloUoqtoLd1SBqUD32o6xxE7jMWjn0JyDY798%2BR4YU0t0U5s65VK%2Blg2kMQKK8qI5akAeEkTNbhh%2BygiYBfRY%2BYFxvF9cZdV3NlgeW8gg07s%2BG8T3koEu1a7hZaFFs60Q%2FMbS6txSvNI9mXRH9mNvg0vnLPSnL85Caaa0KUuXUIL2VgxIlhvc7BYOYfw6DN41TNRiK%2FmqQA97BFtmcGR0IewGesw7P9pY1ejVdu%2F48cT6XcDd3YCkRUNDpdjKDuX%2FE0KrUzz5byTvzwVAwYb1X4%2BnxsYAVQigzrOFV1haMQZisBESHMP9Rx0IlIMNU0kqwIKqRvBptMtrDWc%2FUYruUqWLzEuIXeWZoZ7%2B%2BPRMItoirSXFZOBvVQCaqDzbdZtK5eUQbUsAScWdc9lQ%2FM8G8Xp336X02EysPBwOhTrXmxx2TNvNIgXLgK22AMPOt3skGOqUBTlhautAI2tYnsWP04lwMVifqdWxHwP6CYz2y8FVxYL6xvOPxUdaBYKr1h46dutUSLXes5Cu6kymEtRJQF5vC8U2HZZuZk1nc0OIVoViU77KB8WZuae%2FneGi9IpWmHSEF%2Bve9y4CnfPoDtRBHLHgwhPFMOyTH9qzcFxczQnxZmKnaEQ9EcBz05SFoAYo93SbIibMpGRVgaO69wgNSx3CN9%2BE%2FvI%2F6&X-Amz-Signature=ae36264cbf98841754fa47e3b51f6ec576ab0e1a8517b049046600c2a2928a9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

