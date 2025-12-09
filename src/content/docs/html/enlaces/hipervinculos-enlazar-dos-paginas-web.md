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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIONF5RP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T042331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVvKhar0KfiBmwcf5MCqFn4IHMpkh24wUz8M2k4xsWYQIgBFQmqo3mLJsV9lV4E7KhtBmxXfZuP1cQwNx8ULEWKb4qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPybeYjuxy3jbSA8JCrcAxRsaCNpiu5T2Kutec%2BiRF1ckX6VriqgiGfNtPcwmsKBhStldr8pQ4x9EtDe7ScbzYNysV1tTfhNhzVckI2zqcELlZNRCNZYo08vDriZNBCbPb1%2BZWaG0owZAR3Vsjhn6DvSQAe2ey1%2F7JTuu12YI%2B2NMsOmPHk9Fx%2FZgugZKgo9J2STJq6UwIQMK164pwbl6nAmmKoq%2BhOoSdd2i1k%2BY2J40KAHBGyxaPWwNggvDd%2FAZ0mAIu%2FpDXo2WDva7V1yqk3wD8M6AzpMv%2FpBatQWgYA8eTyn7fQN2cZ7B3%2FHb92ferk6LyfAiRp03woPmUP38ZcRdU1Sl1WKjFBnnlAcoAsHeNoghgf%2F%2Fe0dLhdu5%2FqlBwnuqDqUYG7Xnj1O8sliiB1bmqUxkuvJpvk66LuNsiLCoN529YExbx4nGq3Mc5bItQPXckgVauG6aGcmIEPdfhV4%2BTujsMTUE%2Bn7F2trlRROSqn0Fj7Gkv3CopdRm2H0sYkgWLgGf%2FwRRp5x%2FU79AzjhpHGRwZ2iD7surHQzfHTBct2xQuEorTkhsblkjfcW4y1RUKWYNZ%2B4Y0l2Szv%2FDzu5Sfd5Rx%2BDhjo9k7VFDnsaGLStqZ6rdLCibCWvgcZDuHLPpxrpCiapb1s9MMet3skGOqUB5wgSKg8dlsgEv2u2x9LNVxNnW3OoHx%2Ft%2BHXKNCHeueTq2BkyLHVO5MlnmWlDRiMZcab6%2BVuf9%2FXpYdYHQ6UW5y3TCuhi3CocHS%2FAzze2gBHtDGxgHz32OKGSGjRZPUVym6H8W%2Bgzz0QhP0KvptOq%2FTpxbc1nVBQeri5I5%2Ba%2BhDjNZ6DgvCTa1D3MI8Wdz0vOBJoOynzZDLo9kwuuKgBEKjzTa9Ql&X-Amz-Signature=d86f19ca6739644834b4e40ddb1e050605b5381977598b9e007b69d4315888a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

