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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RE7CBHL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T202602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMN%2FXQqcOR3M2fSgd3yubE11RrXZWhu2u0ySxeynraWgIgZxvOByNphKNfxDK4V6c83Rn0eee1m589jysxqpjH1ckqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOiyEOrIzWO85PA0CrcA5%2BQl1Hns3ezy%2Fm16ntGlio2dhmm2Fl%2B9QHEV667DZZXKEuQS1M0MAEeiAgrKy8aPWhkWh2YdrZJhRJ35cFxoiT%2FzPag%2B%2Fhg59T0Sz92vgIPfVCxX%2B4w5%2B7jigf%2FZacb42QXdIQ7pBR2lcAt3MiybhgRJ1WHO2lz0vxtWujN%2BqhSXRCkLDLDI93cFrRalcb0xA8%2BDAjbVV8VxPfUURmuBUA0%2F8FuUC2YAo5eSAgGLTqtWnbjQbtiSR8c5GeyOedB9keCSZ5Ymw01rwpCiNUunU0cmDw%2B%2BxwgdiYPJ%2B6E6zbxV92zT5ZVXXOgFoJ%2B2zVrs8sMtwcTxUx3LRcKv67d6Delw0D531qJLA%2F6w6dIEM5eP8uMb2kV6jID4U16HYLM90HAr7J85y%2Bh%2F%2B9pFrT2ynHugJgWfWSB2%2BEVjYrUHLDtyVvC%2FBdpisOMaHs39vaPT87dc5UZAet2zMrPagXJKvA0fUyR3oXpLp4cPH84gACKzWr7NNAmczXsvvaoPIdrce%2B%2Bq06nqc5RnCu92%2F0BqytLkd1Q9BoYEw%2Fqpo26k4LrqsFNBAvCCu8NiybeEIj7EXjN4Kc9GJDPfBhia0vZcISHCgKRDbxd2Q%2BYiM7wfL1Y%2F86t98F%2FsXtCMpxRMKXd3MkGOqUBeGuBhyxOYDBOWGtnt6hnAWZAM4jqCFXKD%2FnEKRqmQRsES6hLRXdz0U6Y%2FTgIP8WSLJtpVKTD9u2VNrcInFkdyU9UYzutZvIvy94rR9LlAWbawl9JDrt0KsN6LF%2FS7bHOwXS2nh9uxCA0%2FFJmVFCi43BuZmbf6v1BnwPmV4hMPCrPsr8nMK6XZpoUADIyD6EqhJImTJqKhjPhOVMKg60sNXOGjtVd&X-Amz-Signature=23c2a64fed1ef62c4690423ee4850004e376609e1937d8c9da880a2009633fc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

