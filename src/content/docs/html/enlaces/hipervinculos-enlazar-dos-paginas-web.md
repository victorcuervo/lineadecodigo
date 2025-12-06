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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662E46BEA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T134421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVf2W6Cd9woPpiC%2Bq%2F5vhXaEB0HPNjbjJ07jBMkAiPBAiAJl8J06o%2BMfiBuIavau9CQqNFrx0gLhGCuw6EQtGQghir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM9%2B4i7i9lNEHfmP1fKtwDU3tmw%2BRaNCq4yQ%2BSeQ%2BokRUNHwQaRs%2BTJn3gax%2BiauDuw8Wv8rVcJ6MVeyzLA75T2O4H%2F4AdktlYiVH7ULv4mIySNxrp54wiNavhEABUq7UquP7xGh9S6zlGrm2MTebZPmH8Lo020yCXT43y9o6Z8aj0wd9nO16Ds99sri%2BXLKpB6XjAytVznCe49VKc0ZCyGU7fgnAEx6DUeUgLq5lBKkerTXi3aMMWxgQtkWWKbR6u9dW%2B3Jc20rZsur6D71RNd5%2F8KfPLZsLONMB6FHojiFVTZt1oOmRE3P7aMANorz2SLvbSE3GqzTPCM2ELwXihep%2BaJSTyjht%2FYJ6Op8zBpKZB9LUBJmDTSoJ4bwSJdK5Y4IodFxN4pfrIWkIiLs0JwnC%2BiT%2FNl%2Bp7E1HQOWRi6bgKVxyjoxsh0xCXk0h74hBb3SRWhvZgHUZxoMhw39gV1P9PR0tlsWRanmYqIIwo%2FtcvufzETDAYqcVN%2BXVwUygHoNNVa37IXyGKvEuBsGTo8t54bf2e%2FJiqHV04zIZPnHPbTbUXTJq7onrEWxWmNWiUWNuQf8t5pY6M6wLYekxYDemlq3AaV8Dv2xFVyKtaCmhpZQUmr5X9g06kWc1J11p5b5e%2B8IfIFFdgUoAwu6bQyQY6pgFosl3EYrB6%2BolpSSCdWKC%2BZqBq%2FD67Ez0YWtpws%2B9XXmJuMrwenMTSlxE%2FXKBvifsueCJ%2B7D1OlYg7Dk2yOF6DXQVjpwLdmASwoSAAuN470UWjB0%2BmbL5BepYY73JT4mpocxe%2BdJfPUaCfPn5ebVccO7Iy5wdTqf870qu4YZfnpmtZmv8vVlMNI7YiI%2F1Ja3%2BnK9snSucEUwnETpJdG3OlhzgKtsEj&X-Amz-Signature=c24e63fcc76432732f221de7717e12fa9f8b648747ee59c12a1b09c03c3c6fb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

