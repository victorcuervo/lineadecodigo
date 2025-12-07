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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FD3ENEH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T175648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKNL8jS4fsIZq5%2FDyLz%2FXzltJ5d9KGnbuQJHbVvObaNAiEAvVh7mZ06Jdb%2BscMsw1cLDBayB8ICjTfSiRjfrlUCkn4qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFX7vgpOFlUivFB2aCrcA69m05ubhjtuBhr0GvQmBAnlEUGF0s4%2BpyNWquIkZgEEwKuU4RpXlEfhnt3AufNxPXt0SwDOcxEUD4FqE9GACf2JCZJIRD3dWp%2BWlXFpfDiPDeXmg8%2Fua6IVAnHIwuRlt%2B1PjyFMdsy7%2B083crE12m2A8mjjHKFDHz%2Fg4%2Fx3ANkHvhKm%2Bt9oHZxWBnvtvtRXWpTKrUMBkXAqILUscMyx%2BdSrvtRa6VaKKi%2FVXdHHdDiR2zu6SffEHCay1fGrTD%2ByiLlr8m1DbxdyQEOEhARjocNSEpcLCqZnWVQQ4d19r3Jfw2NjiZoPcLGqyBcT7HdnmKJwov3EmYKgO%2FIIMVkxfVDIGRXs8lSpYC6b8IgcScrMtJJae7Mx8Ho5yUx8LdCwJbx1vObfcKWmw6VEdSbf3%2BYzM765yTrjGGJ7%2FcwOfDSpHPiSZwVmXYX9I7Un0WUYtzECnLZU1jngRowEYRs4cI3av4ks7pnL8uRfu%2BYVYdvVjZSN%2F0mxTGW09XZ9tsSEqZGbpoM9NflxdkXV5aADkYMiVr4FvO5rS6H%2BGt40EVsq21Y7qtrbOUIZjBCyL4QDFXb%2F3biBM7f2Jqg7BdS%2B1I8Ic1YEe1rCvCt2jDZnRsSpHmhsD5%2FR0QOKoGLiMO691skGOqUBmqDSfAlhlySC%2FEHm1PYOVW0gJhRC%2FGaPVz7YXNuOXc7AQR6u9xf2AUOcu7AiJX%2B6SOwAbVQlxFJQtxspznhB1Vvs03d6wiogiynWLadFesVX1qUGr7HsEcn5kr3y29IWsVTzX%2FdG7jg9%2FlbnYmm1n44bt6FbROZkgRILc3ejZ5I78ubjkIgabevoBFRLb9289D9bGBN5F1Na2H4iLpLsGi6iY%2FjO&X-Amz-Signature=6ba06c62c37aed3d69016ff83ae517029cdc1f9d95610e7bb11af038efa50d2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

