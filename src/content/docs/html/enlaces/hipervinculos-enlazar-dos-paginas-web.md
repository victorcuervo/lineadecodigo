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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG6V677H%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T000627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsYSTRtY1VZSVYdFAI2jSjFsx4r3hA0mVbZ2ska2%2F7HQIhALoaldXr3Rs3KFuHg%2FTEzOc3BfTcmtZMzbZadd0l6mtFKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynkiCyyXGZHoaAx9kq3AMxPtHmKmhn54Q675QbFQqfZZRpCdi8tMKsaCRGNs09%2FYWEcGENV448cDRjT0dbXWoKgHKR5x223EPiNHjjtIi3MpuqjrdI6NjDUn6ECiCkOEjkCZjx4oHkTpjGmARs%2BN%2BH3nlK5d8goxW%2FTqGJcCf4r9z94Fyu0f3CVStqi52OAfohIn0oiK4wRDnaqpEM4Zt4vqHCGHbPp4JeMi27nFfLRZP8H1fURXB2HxsuxtZWlMIT6krvI5Qle2YoY1KGSCVug546n%2FE8dNmLj8MZ9U9A2svnDPzHlWW6TphmqV3g3h8W9o7mtRES8CwA39xBaVMxshFx7xL6x1y3pNXgKNMK0o48QLAMweG0alF99jG1jtYaPouJ0omAGXTVkzK0MYd0y021nCcjL5qRJqtGrBdUl9zmY8ctkY2unq2OZQ7Rppj6UE87LorJdbhSWTUhvpTQhaoDk%2B7rkNep%2BSxl9zB8Y4YU66K0ysdDLQCaTSKco6I9j9n0sQ%2BUgMoeaMLRrpGnMMQGhTetgbU3ysGiCffldIxwySG%2Fo3kpmIeKoWl6cCRpIEi1vt61owAZEHaeY8C1SL0oJkyhXlBk%2FnmLI3kuHrZjaJ8dCvK6N7l12CJ8D%2BVMDY1PFLy3x834UDCswt3JBjqkAQ9bOeeU6XbNAZOLSamkLRMrIgvmaMW93cc3uw%2BhD3YluJb4BDb7Nqt2BtcfximRRkpPI06bpGK6X9rMJ87VV5JXGyfy4nh%2B5GMjBvMoVHVTgnYohTb0gy9NCxb0%2BHYciwMVrpy5lL3GZr6t6ko6owXtiq7AstGoJwG%2Bhk2PvAFBSAYiewStado0bUqSbIiZmd1g%2Bo0Y%2BtO9diQjkqIbYMqKjtTp&X-Amz-Signature=a3d9f7f2a23cf77d5b4c5eb4526516d091bd50904120e810d2a02b9db82873b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

