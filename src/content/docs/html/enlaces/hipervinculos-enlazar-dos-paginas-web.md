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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSUQ2543%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T165733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHjlTJrRDHPKKV967Gz2TLHk1zwsmQRQ0fFg5x910VWAiB4oMgCb1bbKOac30h7VPeYLTcwy6KA0fLPIKkcvwMAsCqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvZmDy7sMyWsrhCRAKtwDB03TO7C7DqLEbOcU0S%2B5MYleSlkZo%2FT6MXS%2BgJc%2BLM5DGoXHhmsJsEuVmO3mqjwAmGZIgUpzydwR2Ck%2FFbY7Y3i9egzP6F8gOwohPb9L%2FaUabKRWgNI2rLSISvXPi91ztr76vlAIXI6CA3jn5D6o63nZaQE65w8pDlborSLAzqiTasRQlH4sNP7yg6dRK6uHuwgiQ6YTcrznF%2B0OwwQo70UbNbj3G2DLGqBDT71x9nc9Acmmprj4flIbiCRo8gsq5dCWM0FO3sy%2FOYj8uil7dafliZK1a5Q2kuTzkQS%2BoFESWfoc%2Fyuvhz0orAt0bXGqp%2FfQjTvOFCoWVpF%2FPAYiOs6nPih9TEjLG1hDX5xzzwa72r37loGqKCSdnsoVX%2BtICQhAiYLpk84NwEuXqiXBgZkrCipwmdZ3xs82%2FymMWVmhufTwXDdkC8VpcXKw6rdMswEHvx5udPswNH6NbjTEnmFbVf4DGH0OJLE03K3ZndgJrvz3l%2Fj7OVShJ5hqznGBXh0PHBNSyQsFo0C8nO8UZLxiocYu4m7WD0yJSWDQriHfi3p%2FyA4hMl9s22KgkPp3NaishuPeAiFq38wv9mgY5dB8THgZOfOY9sSF4pGAcoiZTRNyTKNwk7zYGcEwu%2BTbyQY6pgG8eXWMayzCnA7NFTIgIKXU%2BphI8B1TfVQKf76M89JRjIl7SnCXxjt9nmzxPy1lexJoQnJpRh1WhBogUCjF1dVFizViiY15A0adW%2FwW%2FrCwygBnb9UkTSM8E6Umccjsm2HRTreQ9YuqTgrpBTZ9F2%2Fp%2FsRZ3duBPSlTsm3SbkdUerqgjPEjVLY7h1uXLKESV0SbURIaw3hAgfW1YMBCr9i5rYtME1LG&X-Amz-Signature=3044049417c7025610c5835f5f34efe172ea63c6df223e3cee09bbe50fc6ccaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

