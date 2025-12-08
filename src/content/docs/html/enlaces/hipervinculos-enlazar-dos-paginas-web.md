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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLAHDRBB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmGvJxVk5FVPuUVFfdDL9h8hyxdMnrw9ON3AjP%2FWv3BAiEA2FrZwP8tPHX18PONSfAPAJF81d5hp%2FVOXMc%2F2IPpi2kqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAjym%2B7G6ijwtS9ByrcA%2Baiyjnp0ra5AxCRXxxuUhYy6BPodSXvliLXynhAqn%2F438nG5dmlrxZv0S3SEuwxYW8N6II2BhwIQd4s0rSXBsYTOnPk50FWg2B8KQObQb4uYQosNget1JNt02mDOdAcV8M%2F2RjAFEJ%2FB8cG3Ek4yelT71P8BByj%2FyHiDFn9%2F80GqA%2BIyI4Px1939NHW60SKfRvAIh%2BhC5lHrfkYRjgYDL5wKgMBboDK1CrRhAnsYPaXxRfcIhpkiH5qC4uSRTj2c5UVCxC8FMXOIAkNNn%2BMgSLSawPMXbKnRS101BYJqcwqnoaloqucek2LsMvVloC3MscFjxItmFEPB3uctL57ElkGlKbSF5T9ThGWyR1gYwSzWZVAsOhKCefk%2FV5HfaUMV40dHQKnN3FVtD1YlrgFNYtd6KrQfro54zQ74sCc8e%2FyQxKxNaxbU9HNHk9n%2FKGsoIDZ5mEyoz0s6V8PfiF9xmGatbiV54QBt5rt6BhQmfPWG2JrGnV2sc1PBqaeOriejncn90D8Sl9Y8hp7V96T6MlyjhEdDJ77RTTOKDV1i9RHxokotHvTaWo98Oep8%2Bx1jRVlwgdm9yjYmFoi0Ip2r%2BUG4oCkYX5X16WOG9tj1HhyN3%2B4mXW%2FV9ds5M7eMJvQ2ckGOqUBkmYDh5tK9aoijRqhZJB982Xo%2FRcoN4EHqhwEOnOonFjcSqCHGVyFPBgFju7P07C9VvV3vG8eg%2BDz%2BB50pUkFcVs%2BMfm1grYA3SxtjZQ4snQZJ3%2FcpdIkZnTk08nVAQOHg4wG3AJFsFX%2BhNUzm3ysxlNrgLszG16d5LT%2BS9F4K4BAqKq7%2BYJttwZvUqLPeMKIHboleAqSG%2FyuZE2TJA%2F%2Bw6ge8o%2F%2B&X-Amz-Signature=294052ffd8c5136818ec6e0d9a58ca36a774b60ad616260492ced6d9a9960dfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

