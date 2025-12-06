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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634AHWYTE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T023628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHApsWQz0fXWpbKMsS5fRCmCbG3rcqxMUqFg7VUECQK1AiBzrfhj5BwQ%2FvdRBvTo2%2B%2BgqL48uQajyp1xWwG7b%2Fophir%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMwdeqChFkrTFwqit4KtwDALCfU45a%2BbZOjL2UIrbQwSwe14Tc5wLynjwELooiyCl9vepfP0K6q1PJq5y1Kvi7DvNxCqTbTLrUztguxpQYdtX3vo1Q%2Fv%2F8fb6Lt3T%2BrkUC13tt1FKl82sCVK580x5c1NDNnXViGka2ip1ZXduj2IKWSSsn8L2Tt4Wb1uLnvQW%2BhVIT9HJ0US96XS%2FRUvTBQoHHiiSkUfUM4K8fIMnvENCXpBQR0fnLXmrmQIQtmhmO2AVFLYDQFW42k0pK3a6S4hsILt%2FwiCGUUMRQ5ShognI2zFM4qp0%2Bol8Mpy9jKniPnclEixA0uFDgaWGtRNtyLBSRGPh3jpSx7ddmYzxSI9DldM2RN9zG1YL51gXJdTEQBYtAB6%2FZenADIv3mSOoKUOY0rwiyjA2giU3nWXhzC3njv%2FMuUXQuKqBVQQcKdzJakO0adm7HdzByUQt5UCT8eqSObkPS5JvZaTAPVbwSp8l4glVVMENx9CWX00fqpUQfq4BphxD0LzsFDp3lPq8oJo%2BsW9jjWUjE%2FARa6Jch5FZtG4WT0FOFha3jE7bVLrYPv9wIuf6pCFMru%2BLFUA4F5mI0rxq00kSy4dhMMLYznBoty7E3RPcG5akj%2Bk9qMrUAMH74L3Xs1zGNl8Mw56fOyQY6pgGn1XL8RRu%2FiAlWyVxNmXCemlREUOJ8k9O59HdvCQhKpXp05e4hUxOAXVfZOjvXLnmbpx8LfPo0qkjnjEfpl6FOQw2tuBdEqi0LtxeQYTA2ep7ELxGuc0ACEjkyg8MBSapOoji0yRToTQkmL%2BSxGvWrd9Rjo66%2FVM2X3h20OovuT5gFLd1L4U79yszHeSAcPFPO4cHEWLyCQ4hncLicjm6iwAxlnZlB&X-Amz-Signature=c11eb0ae4ce5e041573a2fa3c46a8b93c19d3d91d87ddb3708e716529c32d5c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

