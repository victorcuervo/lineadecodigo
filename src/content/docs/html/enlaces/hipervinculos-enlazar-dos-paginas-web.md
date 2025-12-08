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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672W55VGL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T055334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfC7wVWe69TQ%2FxQu%2B7IXW5RE%2B4ZLwfqp6k9W4VR7l8fAIgfLAEvhebYEEtUOkKK3qfecOQnjpOdW0GT7MTwSJesoEqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIb6MsGohblK4VP2DCrcA1K40dUhhDUN5T5yA04LNTiFfUCCN7Dj5rFzbr0D4TqAnxPVSyDV%2BNmAZQ6udNHAyMyAxOJjSX8uk36eL5%2Bim%2F%2Bn6JrtDtUaqpmZtAnor4%2B0uigkpO5btulX5OyiADeGN%2Fqb0tTgpP%2BFGv2eGF0PmLZErxnDeqsNPp4gFlZ2zdu2V9LANLVMONzDSVAzTB%2FNDH34zXCnHGiJHJl8b0RP4KTyJHQsYL2C59SZrfXYxr8BTtWfc7QVKpHADvWuDDe60rAxn1d8JUGRT9N75QB9vrD701zz%2BAQhXgkiC0r1%2FyBwLgnUnviefjWsg0OLHB4D4ouZ2azYQPE2KHOKu8FCku8WU%2FcfOdnMmDMxgVPcVoF0zwK6Lx%2FL4iZLSfBeRWIkf4pWUk4RQTcgJEGGGuJ%2FDQ5AzHMxSNcCz4NIllRmYwbVoJIh7f%2FJiSELfnXTihpgCzhPI5bG3D5gRhPYLDwe6FyzHuzi6CD2PRD2i%2FoLy4jxSeqTjjLg%2BYBEJ0s6YvFGCFGy%2Fp%2B9qr8TfPaTg9kNPr7I1JMY4EMqCg4Zn6E57MAmM28tpmReIZlUP5z%2FXLclJ7wve%2BMmo3UuZSqhL91gaH0w1YTN1JfsquGZUQF%2Ff9cdVXvfbFeHbrZSVltvMJC02ckGOqUBbGAObVf2JXPCKQ45HYlxl70jfC1nauWGAYWtnWo%2Ba%2FLtD%2Fwv0ISqb3aAZGSpT%2FNJbyLEBma8%2FOVgjLJcPPBReiI3BHpLVQXv95pG6G8Llu8kJUnI1gmYZVlfZ1Jdkc%2Bp7VXJ8B1P%2F0bx1V7LrhrB7CaBdcElclisafIpx3k8e08aw8iCU7EnV9tZ7XGJz34ezMovS46dXnEbSshDqX1UeqtTqODL&X-Amz-Signature=f0293b08d2c031fd9695adb95610844ff69d1de6afd54e81f434324d60d64925&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

