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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTRWFY7K%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T071900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRpDkXzqEAXCeNXjG73owKFJAZSjDH1Lg15TJLOF6onwIgBkAqZuIGc6Nd%2FBYyEcApTpYpc50mZZ77ewOrzZ1o5i0qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMI4uzTzeqzP%2FHnkfyrcAydY0JqXnPmoLxJUG3WEI82ZNvV0ECjNm8%2FMTjlNycMadUy1874Wz4lbC4i8oqFNFCmmpQHMCaRTWv%2FbokE7O1dcryzcxEUK41HEx72DGPM4C8NMuH%2BQnjzF%2F8vTmBsOuHOqbh6SVRFv1bUHbGAMnhlMomqyw4%2FpFkWrh3waYL%2BqYEEEk0s7lXjkHl1byY478qTFTH5INx4owU6B6Jmf7DSxlmLoUtVvzNNG3mGyo%2FnunuL%2FKSbI43MrsIJFjEph%2FCAgfgiQiwM2NVDESJR7LZ%2Fmaar5ESGeg3GEgUfyKOJRrgZIYG5Wy3kX0xIkZbh506v%2Brao3k3Nz4raEvc%2FP6CNoyZrGSry87Ae%2Bu9cnqcBeOyWwV7HR3vVKX%2BQv884p145pWFqED%2BgNdqMTtLqcdKg6%2Byyk1X57e8hGxml95yEEv6Fi4FH%2BGhFvLqLMbsRwX9Nh50AScbEFTGRlDkaaMWCSoUIPG8e11TqsYMYG%2FSEZhFTdfYjX6SlxlxSeR1Y3XKvNjTRbANWiQHjcYrER3P%2Br6uCfPdfpA6bYzkF5ee0PUcvAgtGeTiYJpYwyoL9zPyW7rE4yu3IKv%2FN3nNjkQy50b3lf8KRluTQ4mTJf3gci0TExyWpAKNCB1YATMJju2ckGOqUBAnSuhJaTXASIazAH9OqQtUX9iweWYlb0gXtjZpymDuoKm3r859N3KpBJisfycGAyP%2B8%2FLfcwjjQNJ9dKI4tjwDybmmdlV7d8cwPnKgvQpZuFmKh8JVoBxmXCiXXkZ%2FbciXhAFi%2FhsQ5hXfxBgL%2FniTKkEE5zjPN1p1Ubb7TxvDYyaeuKXzl%2BRaNjARGdsKhBx4hcJ38f9i9ZvX7y8Pu1z3sVDQa9&X-Amz-Signature=afa6f2a6c2cbb4d268d1fa62114d3af12856b5b7c7cf4d4f399d51f0b9a695f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

