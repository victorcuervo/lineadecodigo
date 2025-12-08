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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLZWGW3E%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T134336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICImj%2FpL8TjJw0fT4pp4wz3uGu4WvxPtPsqh%2BIBZb2vUAiEAtwglgA7xeifD4pcrf161XCfObKgMuZyos49DjCe91RoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLccBeHsB509ljIhmSrcA9%2B1PebvxsLdQpphjPcDX9epzr100DiZOEZRid2p3JRghrg5mVvQyix3unWmw8dTuVjBlGivNOaCafHHdeLgZU798vlJjaB369BqT7UGD92R%2F7GJH4BYlwgVsnWAV1Eft4le15P48BpYeu%2FXZWdzTfmVRdVLKfDffdJJ1PJe5xIYtn14JPFzi7bgDXXIJYEKbz8W%2FVxkMZlyEfoJAC4H54iAtbqu8YMmspMoX%2FYiuUJ4Dz%2BQOUkzEGInZUOh%2FAzptvc7klqxFNht7oo5Bcs3DDVXdjs0nUSx58F0xfU%2F%2Bpf01H1ijwWj4TpvgtSWS%2BRpdZiLqGAjUDbn2%2FLnq5ogzqOK64Rkml3jqK5kKvw4KStMFMtdz2y7nJ8THYQe1YH%2Fv9BVceEzkNy%2FsXayf5TQ4gyu2Xe2C4AYmY%2Fp2QiKgPSXTTFWPLlJPiIl1HcqMKFvQyyBsHthR%2Ba7hP9Hajk6DYsdUJRxEROyOy7qOgUIvxHf%2FFwm8x7Yq46yUBp4tnVGKoFVrMq8QvYcXu1d%2FiuDZXsuH59E6UeoXQta0YKkia9AoUuoZdyeg6xCms0C0mJzDyetZgOFX0E%2FisgA9b1tc%2FLPJOChBxRmngvCuJZR%2B5SNstiZEJj0jm1q%2BN1AMNOP28kGOqUBdHgA%2FpvgX95uXK49ptcdEW%2Bo8Cq2RNdjTVzh3MIKNx0ankMMunHfC1wPrZrtZ9sHamx91xqzGnp8BHXFNpVwjM8Lf3TksVJU6EsBpiWkFW58A9FXWz03w6l8AgpcBsCqhbLEl4z%2BlzKYlkc7bLgDIzvFdvZLz8Tpx9R01aPQwiSJm0AzRJcAyoQoSbE7kTjigeWRQjG5ZD4JvTnkFHOpp1NapU4v&X-Amz-Signature=b9f286c02e7c6f8f7826ef923affa54e0495245cdda95e33a48ec0c97d4a1e7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

