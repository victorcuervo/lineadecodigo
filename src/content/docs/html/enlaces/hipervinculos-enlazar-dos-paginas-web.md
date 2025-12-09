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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGXD6MJ2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T074328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCS%2F1k%2BlkE1LX2AWDbkfVhKW29K9LYjzjE%2Fa1YZm9dtHgIgej2u10%2F%2F0aPiWZLOIvJkfdQ8AEr29cZWiTir8OTwGI4qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPiiYGII1C2N%2FkHPSrcA7AU5Wkb62DJPzsbEcX4Eq2Wizy7xSfR3fYL9tAwre%2B%2FL6KqFGrs3vYB1I42RYah3kURk6XiY68wDWG0NOQiiLk0nFvrKcPgsNv79rE0eUeSqFH8x%2BiOrHma2r7EH0l4xQvHcyfyi%2B39l5Nh7iXri5eLCNa4GGjQKjycf2ARODZewjNG%2Bqt4CJ7l7%2FW%2B7j9GxLOqkpwvl17BsDQGHQCJFHWQZgnlh3ueppyQgzmJ8a0SQLRHOQeHFSvpW2hWfc13EjTtcZ0HKkJjy9gzh72Ij3TgzuyMBeS2YUZNnYJG3v9il9itGG%2B2V%2BTDzDbP1ikx%2B5dSQcKy6UfktxO5CqbXJooSBpLlszQ%2Fw9oVmxFU2dJ3WiVDYLXQsz56%2FEPpu700I0qZrDUVVNrDww1ed%2FUWrow5sonflw6soTdwrCRD3UA%2FaLhqFwWvNJYxT16CRL%2FBSsWEMQBbfwLi%2F%2FT9ZXxV%2Fsfua5NbnWyd7dmkdTPMG555x4pyhDxxPc8rp3El2392Qr5Jycz4Fd9bQPwF9LfXce6Pu82usMvMBx5pX3zucUUFlnpiz4kuBw8c%2BDnUFHSH2HGc4V9rIOwWHUKv76mc9bymSl46si0kWGcs%2B6zOfpdlxZPE%2B1mbv%2FxTxbI%2FMLCH38kGOqUBxo8dk1YwGPbvM%2BLhy%2BNbF8VcfJqv5FUKXVQslPuj0ANoUnbGSr8VqqngdYv7wstJZbAC%2BzlfiRVOt3gs%2F0UZHWpdfqG55HE1%2FjbtocRhNoCTlyoyE6Bd73GAodzZSTfuQN7ag0q3%2FBXopP%2FIpqdrMG5k%2BoYnzhb0mjQgC%2F1C9UiHs6FhaIV1YmASKU4fv1AGP%2FqpAfvQ98keOHvjFz8RfKLKGKag&X-Amz-Signature=00e75d71a282279abc8e5da946976210fc09789fa53e56618534c066b64e5bab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

