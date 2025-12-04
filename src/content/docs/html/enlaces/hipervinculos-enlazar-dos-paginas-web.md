---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z24KID7R%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIElDvNdRlwp6lX3tgiyxQrCXW174pPfKjjYeQwoTQ23SAiBhwmw5BvNiDewOB3wX2eMJff%2FNeNgZABtEH05NdgM4mCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIM43P8%2B5FCguSB5R5YKtwD0oyzwhz%2BPfBsmkzf%2BQ2kWsRi00aLuxWKiPJW1P3VGuzblZvDJzv7qrbCRHW6d8YOSdrJrEEooKxi%2BrtUNjW2dlhAL8qI%2FNzjhv5isB85YbrMPioxcotVmBNDr0IJl%2FVD4V4t1DCq2W%2B4CfrWLeSuXjoARoV9h5y2UQNj2mg3F9ru6GPKVu5d%2Be5Cr0vZgdLxpnMJd6QVxK%2F2mbpSPwb6%2F4jZ6OC84Nh80IIrdrNpJT1ctvfrCzX4D%2Bhx24rSNKZEgLlwTZhLMqOzf8O%2FTkc2Xx7L5%2B%2BfEj5cNNqoWuHdZG78JV0aEkJvZv0xkpR5p5jSnDlsdFb7WhMbw56o5sIL3VRWbxDIy%2FYfTQEJ5NbX9CUNDtlBF6CKvdUvb48fPOvbPeCKyoagVXPCxrdnDD3RxJSG1D7S%2FAzL2qI98SkBDwkxlvOBWn%2Bupb21D1cms%2Bh5XjQ9G8f6lJqH591%2F%2Fzs4c8CJZecn%2BAsv%2FoHcZwPFWKUoROaKcrtSG%2FaGxEWfDO7bWW%2BEvpQP98D1OPZzeeRTFz75E8QdvHWDkbT7SA%2BCuqMHXjh%2B3tmudgkAFWskb1FNi1PaGtRhxdq2WNol1xdWkRWGJsqknhthV7txIImT1U2TQ9ufUk6Jhdg02lww5YXFyQY6pgFN9Z6aEAGRED6cYAzP7Nx716y4YoaK7yIbU0L1d21KTydXrZy5pFhDQgfvUtgTr0AN89gLEbBhQVBCAdq%2BDK3l%2FV8CNMiSiLqBV9yxt%2BqExqOutBGiAJIwkNKUl2deptzc2Ko8OoND0t3GvQ9ZQkYgLaE63vXNr5T4QV3l2IFKVbvYEwwxzhWfAm%2B7ZTzBg0QqF6xF8XRPoou%2BtVVJx6mHfuuVw7K9&X-Amz-Signature=bfd40669670f5672299fabee78bdf6ebe2dca03ead527c8f239220d10568613e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

