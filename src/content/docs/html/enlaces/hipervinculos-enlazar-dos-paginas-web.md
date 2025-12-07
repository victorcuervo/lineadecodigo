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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIWT34E3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T135301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsKP5ali87Ue4JctgsqnDu9BYJgKgXAERubIvwym%2BkjAIgRNKOpcMDuX9w0u%2FBPMEPV3Gbsu49Ks8mTCpKQooAvUcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnCqew3h%2BC2yt5h7CrcA%2BkjpR4QVfNKZepcMUVDqFhRQeWDN0rQWRuBUhZm02cHjndhSpHYctevS%2FqD1lKsLlJ4y%2BARBp4wPh8V1WPRjAjcaiFZStwpxdfWNdm2ENR6HTi%2BbsJJLIpga%2BHVukWGessJb1f9nB85NqtZW70Q5R8DZBVEjL2KL%2BjYjzxNWjKiCsTKWZLt6In0Sf5gaILqINc6dLVOPgzhEj5%2Bz3S1PN1LEdRsGu1R%2Bjaam0Y%2B5eb88Jkk7w7Sos3yzXKCwG8s2t99XTIG%2BWhHhUJ2rgZB6DrZFOPsbjDdx3ko7wvp%2FXz%2BwZXGPiFDZbCpnvCXpRHYF%2BE0vYsW9qUOY5uGJfVUfgwIkgi8c9rLurCVybis%2BJ7HYf9lIcjScxenM2OkZqdpfr%2BVsASxvUujI8K0iRJSare2t11dz7pzwdIiT4oSjxS2%2FIERjZIdCn%2FGCCu27kHVnyYSefSohEo79YnaARsOHb0a0LE0syGBxUh9T1JXLCmNIUqm54hrZiYSJDuEGMB8O8JPDSIBt4%2FXCwX2g0FCobQ1nW0MVJIvk9J%2FZmrh60NqNQyn48rDUBwHG3jmCUC%2F9aFkc%2Fa4utrQ4MDwAAt3bW2F1l0E90xjErHuORWt7CHwMI6fqgPiel2BtlLyMKGZ1ckGOqUB0naiQA7eCjF%2FrLWw3gsej7VGZ4HBU0SOEUJiubQtJPwqhl3Oe0Y%2Fi1aVdEHU9gR34DCyq%2FPZamekzC2GFJJqHGhJBSyH08Rt9kCcOfQaZxjp%2BBtyaRRZADeRdOy09AWJFeAivrjZh2nLmwFFhRvaJWMZ1DcKUPl3nu5Liae2bqBMbzNfhD7Xsm2hLN%2Bt7rYMklnWdHypxMbNc5upO6Gh5T9kAhbZ&X-Amz-Signature=52ba96f0c0296d25612fa7acab5f6e231f4df45891166057757282df70ec09c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

