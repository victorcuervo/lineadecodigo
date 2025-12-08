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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVVYGJTY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T072304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9Q%2Fqwy2TKXDwwkcBw8%2BImA%2FjCjOcPt25VDvI13PcsPAiEAmoBEcFleZes%2FNH5ZEqAJ8bIxdhZT6DO95z5qLoRxghMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtiSELYMeqgONTKcircAyrsUi00DJrSBDkddKvZnr5Txy%2BxXDtUhXqslWh586rcfq7fGBDTOFvjIIw4OZgEhnFLk0iVdNBCpDHsgeqPhXnf%2FBxY2%2Brw3mn5TJ43mhJffjXWKaPCFWWj44OSgR5tv5Lhb2icQi6aigSzk4hEdBY%2Bd0WL5wIALpIGRMl7Q67NKkYo3c6WIV%2BzGBRUijpVWhpAwWCXJE2DF5BpJCn8%2Fxa4gszGmHlrijaEeqpLuHKC202zJKqoIH7fUG3RRSW9DCgD%2BHFTwI2vdZaUfOdhJe69cCBTaVY6tsJNYCtjG8IaEiJ5SoIfZggJcT%2BVfS60qoZKbf7MbZAVcLYnpl0J8ND4Hb4P0Iy%2FE7S0rONMHuBAhn9d1lI6zCZylcBcrGzsjQJGRKe7F590%2Bh1SmN76b2IMtF4JMJidOIzBNbx8itqre9SCjJHpkgOerRrlRLse8B%2BMrKwO1NPfoQFkk95lXdKPo5YsGsqjHV3rPiOSY%2F09afVlYavN6Q6HDl%2Bph2mr%2Fs9KGCW%2Bp78JZbY3fpGTMHWOyWn7Qc8r%2BTiHnk4%2B5sGDNMCbwMofAUY5TelCpq6IlKDY0CZHkf9faf%2BZ1WbuYNrpNRChTf%2BuVjnvESxMgDdGJaaR67CJNtBaDdL%2BMN%2Ft2ckGOqUBAGMd4ebm1%2FNdXBShw47f%2FLWp%2BnfWcgZCXyQE78VRiDZvPOLY0TNgYR2pDQOfnfIav%2BN%2Fj9o0NvN6tyIFpQxC3jFE9QjBHukrP1fXylp4l5g6KKFmK6k38H1SQTLwRQSSE6vEX%2Fjq3f823Nj4f%2BIIwzTNtvGg1xLYjVl4hZIHz9TgOX%2Bye8e87sY44vq36Bfbppkfo2RWUQ%2BjYkyX1VVqLEEbg5Ft&X-Amz-Signature=7c805b917ee3b99d4ce232d2d4a9393259e2ead47599560d3f13ca42e68142dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

