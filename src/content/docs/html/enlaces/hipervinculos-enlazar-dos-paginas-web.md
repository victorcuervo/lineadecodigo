---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SO55VW4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T151841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGUJIBYqXx2ixdJ8L%2FNG9c8XeZSaiyXva21cIfw2QQiLAiAMNb6gUmblllSKP%2FOrv%2BnV%2FEh4MPVQYjwOPwGmslGkfiqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh%2B5GNpkb8wl9V2QYKtwDAJ%2BKILHFPpC3nYUadLX%2BGnaGwVRxHecU5SECBb66SDLyccq4ikvIrDUJwlyBAzKY%2FTcG3YCs%2F2qxifMYbsCuTv7xSTyfy0UsO0xyzy0Gk%2FoXCTx1A6otv5LQR%2Ba9n3ySm1ZlXk%2FmtrKXpCD6ukUhhUDNoQpTucRDWWaNR84X%2FUoYPlBJlAN8Kg801aIw1h7%2BDY7bwH92w5mS4F14L8beNXRsqeYM%2F%2FW7IM4IbuYOnZmbZrrT8us6UDonqwXNDMhmJj3byIVgOoa8MiHRIQWDNUvqcG8q9vCCW0IK1zHcOAZESJhb3I0x93nkusaOHl4ifqw5GW7TE4RjMW2TogBMmXhWetXiws8V%2BgMEvmYOiMJuSWngSJCUTZN6ZE1ifK9ZUY8E5cziAJwGc503TDShEPN3Yfp%2BosIilRVJzT27ytJMlGHQvpY4c8HOOws%2FLF%2BUn3dURtrsrJ8ZxVoxcCCbWsvPbVcPcVhSwt15Z3%2B78kPQh3vnGkfLJXTMoZWNA35%2FOyyP50u0HSYT7TtVXnIFI6k72jEze%2BjCSRcjVQOjVlg6UAE67WGOksdWuox96b6Tmp8R8N02%2FRlwjsHAWgIM%2FnZu1TH6ZPqY9CUh6E0%2B3bQuBvC1AFZvugcvBU8wxN3gyQY6pgH2Bt1zz66NYC6xHKAMVKbgqKr5K3hGsvDfxACsGTy6%2BUpT4NWpslt8KjMjoZCc4YxKmGNduP86gKcFfV0NyfbOfulSzc3EpCq%2FpxwkNKLG5jlb64x7sckFUIs0Z8fpGjnvSylcUQthHx0cdq%2FarZ03mUsgQq2V6XpLDG10dMaU3RsE7QHzhnSTcTTDOQx32NoGlTKeZxbNAIrz%2BpaRvjX2j5PqZLCm&X-Amz-Signature=a44c48437af840e4a620bbb6a908efad9136d0e4885a9123405ad8cb416313d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

