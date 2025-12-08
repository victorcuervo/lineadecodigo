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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXJX5ZED%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T094825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtYKChAoRq2ykBjjoyhB8gCXJBomXpQSZCLUmCzXqfWAiEAtzS02CFmLpndWtKtKJCfzM8Wot5eyVzt3FAKImCuXi8qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrnfFmbaD67eT9qgSrcA%2BbuCEnd30Xf1L1T8bfjSKTNpWFW3Wv3HGCBes%2B%2BvFUIglRgnN8imX04%2FWuN4wP%2BjASUqYnO0bFm4o3N%2BR3MYOAcBtzCLGKBYXLPnSfTH5AksNty6vuqrgwiA0AfDxK9T2TBewjDrTTbONuxAYMZnpMZLU4xROSDo%2BhwLHMkwjdwWiVrGV771ktGJ3HdclwA5Omu0VMCUyCPhfk1frfcW%2F1hGh9%2B7JCoTSyKu3EkSHlL1rd1uIAuIHSzXiKQiE%2FewwBvA%2F%2F1bYtiziXp27%2FBHfa8wKLd7ts2rfQIkhVEsUyIk%2F2qRI9wreB6whmCDS2z3oiBxwIVUaeK4C6wn8PGcugVx6YmkKzkTTuV%2BOS%2BUOMxmHqm7qnOWy6tl3HongSRBNQTKSXJ%2B4PYUtW5Vm9IPE%2BVOr22L1CPAjn5YaZZjsxo8eFTORgpklKvthGFWFs%2FTuafciEU887Q9LBtTc7F%2Bd30xNyAQd5iQZcbTPVVVCwG5p471JJhtfXADEIbWyn3VO1TpM2YREFm7D7gRsQavu965wPZ0Tch%2BpoXV%2Bkv9xp2IWmZWRFWnBmi6jZtIUek4LOrE1kZkLVIhnACKTXLnTzwNLo%2BDr71vHX2%2BIY5csPtYIzZS7QIL4mIQxmSMIPt2ckGOqUBBqoJoup2%2BdR240SA93heEOz6nP1%2F90aQaW7VG2LV30DU1Pn3OL3yEvqLbIyYVw09ZkQoIMDvabxqpEpT%2BITUE5gxhMKH03YY6Q%2BOXgFc0qiumlRm3hnFf8T%2BDZUUhWyktXqC8dmECXIW5VBKkhUwoJqjrgtUmQChWUX0pS1O05LcDoWZpF1aqdcgVti0kOdrKLOUDj1GbzY%2F%2F1%2FZqrP4FvNvJ3Aw&X-Amz-Signature=b4e0a86195dc57351489c54a8d4a6dcb5d3ec47c397ef428fdc32218650a75f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

