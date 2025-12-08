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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI7WOYJU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T182944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAXSTGTpFFA8hTOCjesvWVpkc6Lw8gMlE0maxs%2B1MSTgIgax63vQIXegti2314Ipcpd3%2F6qSU0FRMgPld3R%2FqEM%2B8qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXAYwkp9dH23XGcOircA6bdQ5cMxb2fJkURY6ccebGsczNAtPKGcK8BHLq4ccOv8QcaBYj6N9r1A4%2BVy0z9mJ6tuNYq5Fjeqmp3O5FP92pgfN0bUOdpWg5xPDM6TtE0nWQjXb3e6%2FQxWSTBN63sPLdtvcYh6GJLY5H1AQI1Ed83RomYW6kJsP%2BmdXy9Xd5KDkuKEXRlDNSnqZGCO1jtVKppYYZF7jzy3%2F68Qw%2BcnbEazbWzH%2FwWxzAD6zSdZHabi%2BVRv8ATpTfe8tv9c7I3Ue0GeOEYe9L065LPvAJm3etS%2FqS1MhICNZ%2FY6HIODJHGjC21OHp0CMwv3r0I1oCI2Hve4f%2FNRn%2ByNP9pxRy722qi%2Bo55Aycps9g5z4xpJoFOa92%2Fk6xk%2FpqcYdushqP8NM%2BUmmyKuuultjNR%2FktxbdrsMtpPtmzf2s3o7tAWhHo51QNuGjolgGi56%2Bhw4Nhyi%2F73X3ou9yghYK%2BBgVkc7n3j5SKZNgs89ZGOBBrWVx1zOGaQD5F8LAKnwpH9jD1vrTycK4QjE1Bm5JHHRRre9ixpogBSzMbpBLNAs6K8ts2CypQU18a3xs2SC4kzdV8gN5p6mD4wmdYsfzrUi%2B0zevq74gYEdavuS269i1ZkdEGVOcynCnut%2BBbmSp4xMN2G3MkGOqUBHXehn4gvs%2BetOrbTspo%2BgL%2BSsmHkZKwil7KvKstfDJdzvBs2UqXLe4lePLMvPHtRI3hBnVH0E7Z2WTqEIPnuL2Aj3FSUooey5CC91lTYEvBqD6MQOJ2dmQC962T6h%2BYCASLeuji2InwFsJkfQFRhhoM5XNx9%2B%2BU%2FXfrLIZNh6T4yrUd3HoLpwUHbmFPNVm4R9iSrXimmOUA4dVvKWmzxEN6koHE5&X-Amz-Signature=bb07d4375f1dfbcca0139622df86685f603189bd275a19899765926b594c14e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

