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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCYK4HKP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T232120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVnv4jBCV6rABCKXeGo2XtcL1ITwTnBGJmw8lEQU%2FEgAiBA7ZWt%2BE%2BJgpEtzsqXI1r81Pbd%2B%2BSTSrg6Dry70mqtfCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM7aU15aRBIPYKLZnTKtwDv4MlhFItIJwQk4oCK4JEUSGrp%2FiQOlbgQgFK7aWOQR2vACYtwUIRhwNEW%2FKERq8dE4egyOw1yRIJPnTJBABAMZehQywl1r4tkuBUCCahFFplOcDprhexcQ34wi9WNnMWOKkOUMF5jJIMFzkoGzWw30GqgzLeW87CfRIq9rn8mXaTgtnW7MFnwvoSgewyJqqm6Kl4R%2BhLVYtFfzab7%2FPKVtNGZie1z9w61wS3khTS8ccJU2Gc%2BDKKuRMzntqGD%2FnSvQvYwsolzKA67tWBtQPrA80VCnykh%2BfcpHjREYlmNHO0sI0X8y3yh05G08gcTcFGbX4xXWonrpQUOPaoAui9gg%2Fokoob%2Bs23NTk9%2BQzkgz%2FWYyrvkWoqyCk0%2FPaiDlJCtIGZ3px1SDenPjxmnvMgp%2BvkzRTdHLc1%2FOt8mpieQOGVNbaAd%2Bc6nNhyUrUU9TWckJcG6oguDKFXdPtL6%2Bu1xd31X%2FpyK5vgYHSDj7scMBSfBk3CKmV16VNLBcv3KV8h%2FBzxVibEaek9%2FjOc%2FRNLxXMZIaLhVfNpTC7CTmYUeBsBqq%2BjgFbZilF78vZ8GVTEWOMm7nvSQLcPsXsauY%2BoE%2FtrnIisAhipSeAMU%2Bakg9jY345t4Iu7jj73%2FGEwgtTSyQY6pgEznvJDa7ybyYCV7A6cLRxa9zTb1lslvDVRSYxAcSronxoi7ZFkQLQpbdKZzcwOg5HHBYwlxkeABI80sMf%2BLSiuOBPEhvdicEftS3bDKO8PluJz0VkAp1MVwsmzIRdX811DEdn35eOwlEEN0jBiFWD37yZJfmpLPgLvw9xHQfVl1fMBlokhSPGSU58w8MnCulIP%2FRWFEX%2FMj8I0599%2B7PUn0bQw89le&X-Amz-Signature=1ee249dcab3dfd1f2cf7e5f48f57af097d5e649a54301a362063726aa35182b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

