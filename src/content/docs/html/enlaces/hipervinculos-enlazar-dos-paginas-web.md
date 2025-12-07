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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5W7RAWM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T230343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJE76mscYMl5K4%2FvyuWSGRPbEOnX%2Fz4AGI7%2BNUCluNGAiEAhMS%2FxgdJr%2B%2FvZmsuedCa0fgPL9x9Qo88agZvgt6pvpUqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI81eAEM6jGOae9QDSrcA0%2FHZ8MMVnu1eBxuluMP559ZdFzdgloIoI4zzZ9qdSWnk5pk%2BDPozr1C0GN94EsM1VaDmk2kEetxW3%2BM7vRiQG9g3cAOvBfeuzpVdisfuZS23p4lsNQc%2Fy9odetVlWZHCGV1abpRHiqiXvGMSZQYJyY7jJlNUszHZ6QtCxo2UBi2TppTwdD3yvczuc0uII3MHDvJySRTPc79Wn2YPVagmq7QxgScEebnazLEEz9%2B2aBp3H1ePB8iScBivCpbUj4ps2WotTLeo5lxf2I5YYxQ1HInP%2FE%2FeMyCL9u8R7gJprwERjxMmbGEmaTzXvJf4%2FnonQMYT%2F6%2BCyO9nFMwSSUFVK4hJyOd1qy20GzOBithp2yoOEo8rwF9lUvLBsmdBvuzav4RL9%2BJKrW635j4o3FtMog5bhjVlsMp9BGF9ZhYfGiynTV%2FHLqqcm1Y%2FkEyOFl9y1JURMuD7BZpA8QIV4XILnCyz8qH7VZqJf1lh%2Be58ceXZFLv5HFYKIeWKXjSdRmFvvqjzyZR%2BNNhsf8hX8nuBj24lzXDvO5boxKSThQRkLLl06FGsSLjVAvic5sKJnDXzs9aqYTVC%2F1XhILnrZ1wLEGuQr4Aj4KKC5OIZEMUb7gy2W%2BJdVyf8jL%2FV7f5MP2F2MkGOqUBnGSopRvQNrFczPiLcmwBaiU%2Bj5HTH2NLsXtcWKexORxyCkHjH%2BZ5ALp2UFihOqgZOIKzEP6WYZDnDpJy%2F9Cb8mabltORDuKgw6JvDAagpoAtya6jrd8po1bbhpnDRqY0QclGFlT5AQL0W2eqQdhtkUSxKDC6%2FI3ODsOcgE8Zhsv5gt0bpJRtoRfOgpbISOj44%2BzzLKQW1XeK3vwg988YqIXC1O1O&X-Amz-Signature=97fb4131a196ace8577b9221aed858acd9e77313e956d296a10f192a1c8dd3cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

