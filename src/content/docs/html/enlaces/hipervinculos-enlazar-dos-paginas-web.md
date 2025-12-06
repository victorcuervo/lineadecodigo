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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6DYATIT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T212454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYLo5LoIxvpH5yUxJlP0Wze4UGTYQrISIJoL9EPlivKAiB0pJUGadUn5CR32Akb2US0UgDdQ8QwYzhpkm6ZX1HfSCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMLTEI9%2BsUfavrTVlBKtwDJcK5GdgC%2FQOhSzxV3IfeB8JjfDPX%2Bh4xw%2FxN9KP7R00i6I%2FjhZbznmIBkgcv%2BG0bOKz88GTqBXUfXhOouHWIyac5b6RqhK0hIRlpYGkg4BVsfKyHpl42FFPo76dnm1SIo4A2pcWqLHq6X5SfbzzLSJZLYuRA84R10Ta0%2Bu1CO8cNJcuIl6NUhJHEZaRfhR26wmm3PfZvj%2FGjU8aByX8AdshqMF36%2BqPTl%2FiLy%2FRG6wmBO3B3lhQe2Bb8aZCYc2Y3QNXOGpaezUijk0Ead74T9Zg4vew8ArYDHEfQr4lsyIhNHaRsVK50f0vb28puQm9Hsk1Ys%2Br71LQEwvIZTKr2rl277DLYDHC6w%2F08b2BOjh4a%2BxM%2FwBILAjxsbUM4Ns0MMOSfpD1k%2BPthu0tNDLr7EP30DadSu6KJGrwfzw2FeT1OTsvRnhvRRWHObwDTj3wlnVbqXPVw9swQnyFNi6eUleSAgOITrb0T3Ofg3XPUL2kXuZSu%2BCMti10Bn0X72tNfJL4v4w8ydS%2Fbd1vJgu1LTQC5e3BEpLYxzPTSr5bqfcfPS3OM1ttA3QysCpF8N0HaGNFsNdGJlcegmN6IfsSFwOhshDbE4px7NmR0yp9sBBYPaWltxij7IhpHEG0wnL%2FRyQY6pgEhVqbWnswEdDC3%2BJA1wZSOoIbTCtX3aUmS0LH3zfRZzKkWT8sX4imxAwr3xdM4mBGLljuSpTwnZWY7u7bEpVq%2BhaCvMp%2Br%2BfdSfj5s29y3bKCQfvwoey2cf0%2Fp7vgsGsgA%2F40e9y36LQBfTSfAo9Ld%2BkZX6ba4v2iggqwy3jKea%2BGsCQZEOrVBJ1nRTul1A5QgGKLKUgB5x9DkrWwipDMWhfileSQw&X-Amz-Signature=d28070a5bf413ca5dc7b50bb990d92417de0a1e81d917be3bc23454228acd8f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

