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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZE6AVOS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T225728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEv2Vf6VqPjsVLKuqCuNEAnrJ1q9M%2Fz27%2BrirN9pfDs0AiBI%2B5JMUQ%2FHOBWoDU6fc9qy4M%2F7PbQjviE%2BtOEj1jzTLCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMTJc%2BN326DwvcuqGUKtwDeGCh0PQm4qdavrnAxvysrYtxRCTvhd8B1zM9OfPgEtjqEyw3WnmpGtoXfN0jBMRdpMvtiFBEYx683DvyYvuQ%2FhLLg9xGBvac6Se6kXuEgM4WNJs%2FoMPyrO8qDLL8uBspm8tjLs78qmXA2IC6FMDCeCoPvLnjpgZHWAPMSvAR6GHkA%2FxqwXq2uth9yI9Xsdm%2FRmk4HkHannd34QweD62GNv1UQiDPC2Iuxgh0LD4F4WZCFF8fj%2FPPaVRqKsiVPan%2BpiEqETKNH1VhjC7zkkBjtBKtCEATYmV%2FWGUJzbpWnxqpuzLAFopIVB9BZ1DeShHM%2BG366tO6z%2BGZ2%2Bam4N1wuT7PkIGmkdfboUYGKfyu5dW%2BWKLFPCy27jYlgqT30FBFzpP5DFPbYVJ2X8VEfx%2F1TSymafFa6f4hOu4eOAOYLZayRZHXbu1HdMLi2yMrPvyIwiCm2Wwqfk%2B7uY1ct8tNb9FNEBXVkN%2Be2meogwQlZbwWuxffS4GgR4jS4dZT27L8bMtgRqf0xO5ao%2F8DOmp1uVGTZjolQ%2BtBFoP59YSZC3nx8gmow9D9wCFMrdLDO4GHWFZWuaFQ6D5tqfI9V40Bs2sqolEFsYwlj2SmkyCay0horHhFzDbSwcH3Z%2BswqtTSyQY6pgHS6KkX5blIsbAnEpCX04M4UO6z3P9Uoyb3ytG1F3KMKOVXifMc6rWvUrJv5xe%2B8fPYA09lw4LLby2nnrNMkZL8khfl6q9mg3Rju22Czu0L342z2EmVBMyHceCu9dJ3bsNw2rcflNHFIUYzT4Y9DDUdVBxZUIyjwE83obRElMEq%2BAD88tL6c9jIck%2Fcq%2BNWQgx%2FmAR18ngpWwiLe2OyidVMNQu0zy8U&X-Amz-Signature=07b64d5c6a96cd83a985aafa3dca3969776aa03f9efb706f3169cb1e6fecadb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

