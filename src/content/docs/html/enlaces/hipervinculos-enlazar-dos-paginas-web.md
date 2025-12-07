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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CKLIPNS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T155305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIuOpxvsCdzMKqFAUGj8LOOsAASIvGU3kpOJyDqpWYEQIgb5agzsKoKJb3CS6OtxhL2Ou6ifpPuMT5eO8FxO4xYv8qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrqmzamhUQcGoUdNyrcA9pxUrjPBM6M6k8hWNDuqt2zfqRHbeOJZ6HB5rGc%2BgqqcvgUyneEGYxk3qmMGLNlq2KVHOq8rgpvbNAH8J739MlJThWShcq51kNoJrVE3arruZvzhuxxYOxFW%2BRDPaIhho6kk3Y%2BXof9uBzRTvsV0D0Pmh5lIIFsVCJpfIAWnUh1nevj3WxdGbr8Tp%2FBnV%2ByvijFackSEJWpwM5a8wuId6%2BMUkxBe2FMnmpzAk%2FKg39MFMJdI7TFyPHEoyxHnMSJGbHRZFwgICBG%2FU5Q2FUVidKIRACMTZ4Z%2FUapxMbWmuEORbokOD6yPIzhopFr1EAzXzmesL6iqXfnF%2FoTVjv8Dg7%2F8gyx8mZ3WBrIADk7gT1kSkwxaTjUi0S9JvKUIMkEhNoo4XZw8UoBPNzHEBes7%2FAoOw7Lc8klVDRBgh36DWhjtydJZh2I9%2BPXGLzmhS%2BOa09juQIRKj3P5tySaw3UjO%2F9mYZG2%2FBOTnP%2Bo%2Fjth2JXuAtmXTTFzisIF%2Fq0RIMQhIYQnOnhUekyomLabsKlenc1q6NGx%2BRp6dqoYbeAquiX41dNdLEVCnxQsiWfjwxKVIHUcpQPR9r%2FMoFNdYeEHY8bNbvUhar1d%2BysLc%2B3Egk3lugwmCXybiKcYpT4MI691skGOqUBEPVWC0oIwPpswY0CeDELLa03Eks8X2zSFoq10ZKzRHyXnLFZd9mmEZImHAUGhpa7KYAoZWmlFLnFKlkJ2Nr2FQL6beutAPHrbjvnJdNavGkfa8Oy1GVqj9K9LDWP1EneyPFdYiUfbjSXeahLfb6YlcQdzTsDO6%2Bq6znHxd0gMjmZWAGTGHYFo%2BUoHfg60Q%2B3mSeRiC0wX07MX%2BLL3LFDccaZ0h6M&X-Amz-Signature=84a1de22ba1a9d0281726eee41d8be59f05309bfef1985a1b8adfab2081bdc94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

