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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZHEGRHO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDDpALaE400QHrSlxp38MMEOMqdbhXNFXGqrANK9LFRhAiEAm5hMA%2BKd0wwkKMMUcVmNaSPi6WGG1fK3g63Djfz9M2Mq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDO2btK60qkL6P5JcQSrcA%2Bgy8wb%2FLokRXwCmN1sqjLMIiiSkjQNbE1vbnk9qba1P4mTlElFg2HzIwG7JHuVi5V%2FUpRdpeREREwjsSTJasFgNXRJhWTTGBsVHYol7N5yhd854rdNJJeLb7un0J9UZeVBQgNNHKqoN4E1wcfOSinRNLNLpdSO2VG1QXSm52B0tzfBNveCDR5I1wsdk%2FUSvKQL143TTDBc2t8NiQzfKqBhhYGLpvmgq1Vwq2qrPVJh5fNWYqNCunumfP2x7vGMYsgCx6pCxRXZ1WNDec9i8EOOiazq2dFYljMru8abLWFK%2FHV%2F9JguGaBOsemHg%2BfsOqs4pw3BU7nFa8v0KrtVIbfdjM0GnzY57ty76OfXkWSzYZB2YO6ezt1uO8d8nDr1rIIaSxBmQ3saEuXAr0nQB6yzpSBM96YN7U6Gq%2FTXgvMPvzOI2PV9vrFB7tO1MpcLbRGeXvE7VF7E93RHJT6wiL9VnswdBVwMCmbLb8R0n2PBpD0ms5RVDox7F8vbVESg5hml8yih8%2B4nQSwG75QdxIcXR5PHZkv2IOX4imKu2lozxT%2Bk07WVlXsuT4A0L%2BRkp8UZhSm9JsaP3BrM9nHS2MxgmsbCX%2F4%2BAJT2R9kJ0uyBwwlhYa9GSI7iN3bHwMMrKxMkGOqUBJ%2BwPI4bBrzUchr8xqjYQYxep1W3qb%2BRWEzxa3E3kWjQ2uKHAJz8AFsswO6onRaMm2tNZBjPr%2FFaXC7v86VpLtXW3XHrGMYXnt0Pu6AIYidzkjPdBrkKf3%2BYk%2BKvdu6K4ArfhPaHcCh8QoetvZSkr%2FWjcuBXyV%2By6U%2Fm6uAmYxYf7UKep1H%2BfhvhL6HTKpOcpyu3l9WIsgiRraeZJ6AU2%2FW2m%2FCGY&X-Amz-Signature=617be9d1aa4338e9bc3ace962e94d0c82c1f287a261e393fe6eb0c02daa32280&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

