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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644HBAV4L%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T203434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDh0jQK5NzMB10xjhVNt%2FdeHYRPMR%2BBJL%2F9IdShq9TYOwIhAL9P5WlSbWZXmepnKerOo%2BgmfikMxdUnOYLLQ402IparKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzr9w5ReI4yiXk2IHgq3APzWALXI7FY0uPZxZDw5v1Bc8HxIRdWISH07YJIFz4xk0%2Bk9Et4sgN%2BDnTE6wWBAH%2F1PL6pSOfVBRWEMXOEpPIIpEapJCbraVBRFX4STaoURw3DJV0qgaA3%2FsqEAd6a387Qb1p%2FP588gUL8rJ2AiTaPS7yij548WMx%2BRUhpHSN3DyQqkJOHMjibvAj4JAdwRVaLqjp4ikZaX4zMSlLnFAttTbeyT0HZXHZ3LFmJo1n8NH5C%2FHqp4AFOXfrIVs3IPDSAHhccPBCysS1D9iiH7QwEd8ysSTi%2BUpN1uVUlweyvfeM2OtzLpuaJsS3ey9djQ2fr84FPLHQW6dbrSdK%2BFK%2FVtNX3a%2BmzJZBVdgdLdne77JYKSi9b4mpcbRKrA4veyt1UE06BI%2FWWCUKU18D%2Brh568%2Fy8sHuVALFZYUgaLNwr5F%2Fntc5Lmxlon0YpCZXeKNSlRVtj8xCIV57Pp7jYVY3Oa8jImOdUj4vVvaQxSSKWdDdq8N1SLlzxofi2vtFgtfUC%2FDv9tXI7MXlTdIa%2FSgBCGaJPaWeK0oNIFyN96HpyvWkURN3FwYifoAiqcEgfAcq%2BGnO2szdwyh3870rVjH2MWKpeMk3z%2BtoQKWhrzbQ%2BGjkTLXt89GLeX6%2Fo5TCK3dzJBjqkAZuZ5sWuLBvtPX0zK9fqwQZq9FPLsmb8f09Gq%2FZe3PcdpB04qgqnGnaRi86wxjnpxfsd1QxJxuAaP8yod2UBb4IBU5Ei6mpGonHGK53LwQgLK04bJK2eDQF5Yg0GuOmREcprufthpiIq0ofqVF2ZoYHwgt5yakTFO7LaBJzk5Avj9buXMM22IdBiRhJuxY3DtAYDteTmFyZWDOXw%2BaJnxH15QHBJ&X-Amz-Signature=7f5aff5908e15b66dae679d64a578920770d831b42662609e3c841ada682cd75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

