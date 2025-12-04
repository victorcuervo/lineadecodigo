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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7T5DVZN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBalnJRg8znMvtHAFxNx7a16foxCU7iCwEDWeM1mozWQAiEAzYaXHq4%2BplHlaN7o5KceTj5rE0mhjDI3ws3SDmIrVOEq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDOGi3ro8J4c8cuAd3CrcA0%2BsDKbs4JYhhOKYVJEc%2B6XcwzQ5VG0XYxI9e39rq%2B2NGt4JzK6zdF9Hsm0%2B1OXXGMKoRj5SLx%2BtMn5KoIje3ZxTPckr7jF%2FlsFp%2Fby6at3Y7z0BqHJ1wZ%2Bl1l6xxDY59JHuN0aCi7Iv7p6wLKZnQaOZRREEQCrcHyZVUdA0QIqcl9MIvYOZ0xKDhF9tY999kasCKVxyLVUW0vJ5B8C8XxWJ0zOdXKHy24S1vCmIMaqSn%2B7ourbYRIjFU%2F%2Fko1QKi0cxrZxD0MIn%2FuFCTx%2BeLYLUsH9xljI2KTtk3MYYibAhCBrGZX5G%2BjRU5xrNuvXyH9e3fLS%2FvDpcUGaaxaPKXksRMkJGj9bjnXCCZPPjJgH8dj5wkJp5R3tllDjuZhSgD9WTbBHC%2BYzFqB17c96co3NuCHGmmiZab5qVPTFKhg2hV9ECDmdF4fnx9S3qEZKtHoWVlAjc98JP5j%2BbYpPn%2FL9ZqeZ2cc27aaK%2FKVWCXIauMhjXE6e%2FrSD%2Feuqp24YiO4DkD77mkgm97xto0to1Ap%2FNaOOtDRCBjRZqY%2BaGxej93age6AKWooPxSmxDs4drmg1j1nAhmqLLZFP3q5OEpnP7PIAKDFXdTCyXSMAPg4DTE2VQDKP6iq%2Br8hPqMOPbxskGOqUB%2B664dy%2FCBobM9m%2F7jHkqV0vPjNqr%2BwNL2S%2BVzPZllQkARHymJEN5hpfcfX%2BN%2FKAbO6YJwSNWdoW95PCrAUzsKEbk6xB7V1jXTQ47l1QO7d4Hh8uE3z16KJnt9XL3FV6YIUItbRxFtNJpcaK%2Bnd2BbUNKQdGCNY1y13ny4AHIOy5vaqgCSIezg%2FDkcuMa51ntDp5HLFeEKDtKFJH7264sGPa0WVkx&X-Amz-Signature=d2c1ae91e3e85ab4c97dc3954e437e5395c69cbe3aaef888fdd078396aea26e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

