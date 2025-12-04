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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX6P55GX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDPczaAIr%2FBPTXtmlqjaW5jHDUCjcTnKggqOliX%2Bj5i2AIhAJpQbup95Lb5NM3lWix8eKegSvP52piUdm0kGr%2Bo3bjHKv8DCEQQABoMNjM3NDIzMTgzODA1IgzmhdzfIkd9i%2BUYBFkq3AM9fjvCuAPt65cQhnh4B%2F%2Bsqvj83fIC9MulV6KHFwixnSw0Odo3p0nD98MIxYusTqfED8jabWCfpdlnJPI5CScXHV0%2Fsd6jmfDKUq%2FtfDaK6EmrT65HFj2hsiYg6QgxtTgKCI6plUi4nIVCkr7etkFd39ynSFIdg3jqixYReAJLwR2JX99vuyI3TCJ%2Fx%2BosHC9d8U3pJs23CNG0lSvOlCPGu9Yxem4we15sHaAYn8v5yZFWr0g4fhkMovTOHTxMX28midgNpC%2F9dVzAauxRXBF1faji%2BiXcqVc4mXxUsx53kWTJp2dHLaFsUBXZIWJKxfck32cyuBy6csapG8QAr4X8UoX3wT%2BDr%2BhVgR8D0uRv8VthXcG80PC4AgZpoZHemaYf%2Bn9ok4DxZqOdKUpgtusttdf54ZZTzFOfkO%2BLNF2hAd%2FYwWPRVz5qYzFpDw1zj8CfgHiAFc3N4WnvwVghodtbg%2BqlWyj5d7K%2BeryqSmRYmRirCRxonIhpM4lAsgFado8eCWgpYZJrjtV2CRXoPeVIjOrOhMawusDvhdGX9wq49zGvsRr8vr9sU%2FLq9RZWZBN1BtzZd%2F2rWtUoj7dF1vC5lW%2F9mQVJJkW4NezKPPzkXgNPMlGMWIfFx0DtxTDtysXJBjqkAb2whdAvojsR32ykMfysilt8oLt5xHQyUoHOoopADwmXz6ejy2BWDjdEtILw6dEVkntafESYG5uMgr3VKSqrLXYSItQKsGYM0TojDCnvc8IQvMavrs4yH3PUJpI%2BZEnIT8CsJ9pRtpMqeSj2qpQOv34uBURnc9ly06lvqmeB%2FEh1QYpn%2BvI9cu3dHCYpk5TfMGawcLYUtVw%2By9bwTiEn%2FEcZt7sq&X-Amz-Signature=efe5bb278572daf6d68c3c4eafb0b4c010d756b7c32b947564b3cd27dbff5a10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

