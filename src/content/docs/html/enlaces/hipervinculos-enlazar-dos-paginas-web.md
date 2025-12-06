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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AG7P6FN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T200450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAlpDRgBE2rWiMOpxZUTsSxEhq%2FVBuICP55nkBXiUnUwAiA0kG4OouFIK3cV7tRbVPWhmlBn7M5%2Fw86ws4HQyX%2B0Hir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMAkHCd5ytAXccm1SiKtwDE%2F0BBTStJH5wW10TbYBMpuDr3Su5PdrRP6yiazXCke7Hd95qbFj9Ry02eA%2BmCwcHT87u2fxlmxJMjNOuo4aK8OH%2BoZDIv%2FJB3iCmo3lGqwUYKJg3%2FlDHUgZyLrqTL2tIMD4eG0TH8cOEDLANQ87DSA4hKRXKUGswWm9SbWY3o19QAHuEtQvU2xzMGgEFs3SLFAbpvO%2BgaD9HBSeE9tXeCOdvEBPrGrAzpi6Ga44v7y8iOIAhsvr6TcUIFHejhQecXOVFI%2FGSPsq%2BcwJ2UF0e9%2B7f9DbwvFgMblSs1fe75Tzzmkz8HS6vwCQf%2B%2F8rPBXBo%2BuNHDVSaQYgLkecSeuj11iYx1Q0cn7Yq53FiDlwOlc1xcQBLMxeEqoPU8dZLUutaCrGLK1znoFYmjUFKmrvGQ1Y3VKpyLrHThrx20FfajSKFKO2qGud%2B0YDwss5ADktcdy6bTjlRR5xEoUAVC4zi7LsAvz2wwg8P5V%2FA0CseKOy73byU38Kf7e%2FxXCgXwTs6%2F2kWPkZXOGqYrM2dGtDAv2xd3N5kSRq5CXElcUoJwpR%2B7aqxFO13XKfuriZPWq5evIu3W3wDnaFDZenvyBCKECufBmSrC4u3TX%2FppLcc3Le%2F3sBtt7%2By8mW0gwwqcTRyQY6pgEiKc4FiOpQGFGWltV%2BYqkL6L6FqF1vIwqSiuZArj8sqT1k5YXHlUg7UJRtN%2BgVni1IS0H1rCROJ7BPsAwqLDXS8LSr6UrguXF7JOBBcnZYoa5A21yFWG7u7lXkHrsEaxU9duFkHXh8mBJbhekgOJIFIYqPGuGfkOlB9Tr7MNPqyD7rveVyEFMtcvS%2BjZc8KHQW1OVyuxJAMlMJ8liloVCcD5ZILKiN&X-Amz-Signature=b4c1bc8a8035d943ae16fe38c684d79f9013d50ff6af22d65b7ec487550505a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

