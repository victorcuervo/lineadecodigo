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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNOBAFQE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDcisJF%2BbYuIbG7xcXaghtEgwvRY6bGMIUdVKZgCwUAZAIhALy83ieOH3%2FgyToC9FEf%2F75Q3gKDs8LA2yfY1hATKCKiKv8DCEMQABoMNjM3NDIzMTgzODA1IgyCdfL%2B5qg5xalWH%2FAq3APJcbR9po0tu%2B3mZfXjuXmhGNidzVyvRFp7n4%2BmVKfBT6aR%2BDbj7rsrVO6uscyP6POcFr7iAyBFvEp9CqfdHEsmp2usizSE%2B3oa9I1UdtdZRy%2FebS7Gk0g3LTSnGCQ%2FJHwRqPOdkfLtXEB5CH0k3fpmDseSL4%2FlvBMwaATWS8sTXJrGWtHk8gy%2FfXSLSdrIcEUZZB6Ym3QI8L6Vk0SlZaQmmqQJKgRfjSI0JAZBxvxSV0VcGBctVHga%2FWWJ7ImZRVtmHXGiG9C8HsK8HMS00XGxlNNKKMf%2Fgd0nynzFkaXZ6YtLemtE%2ByNo%2BcA7HMkBtEqd5Bv74DfDjqAXOPbMF0KiPSl98PnKIbfvkxzTS9vwnA2K7sorOxX0xSbpQsdxL1FjzAVWauNOIqcXNbCbXDAL4aj4QJwFyS02TKmIEOuAFN5u5bvrtKzBj62ZIMf1oRfdbf3nq8deYMdabdgooOPchoSSbPRmyiS0L367AeRtMxokbbp2QgSRTFwbEvxgXSHzuec4HI4GRE%2FZxN5WGo6%2BIAr%2FciFHk560AmWBs5VIzirYVNy0mW2dZWIX82BgYXx5FGAFD5eNqXZmugJyEEEmrj0TnmK%2BFc5Ei3xFjILYukbZOEwMEXqH9GYGXzCUqsXJBjqkAZoSZ0plWYP4TL6Az1akZVOyW2PCYncu2hZUJawqOIfy%2FedQ8fBQyRE9a%2B2Qr6fhUpJDWedBvw%2F2idn3qdXeyNwHsfBuHqLRsRVeCywNHdCEHZHdWj4raQwJLDgRHnuSXmFrHadrNYejKLHOfJDdo%2BYIMkDbsfXIY9DxbqEObtho4MyR%2BaWS0RRn%2FbCp42AHRemEyfQ1fy%2BN7K3S4qEJU7lhLrrE&X-Amz-Signature=acfb5f4eb33d4e5109be315c2e47682c1eb8030039af72771c9f47c54f28f90b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

