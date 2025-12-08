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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2M6T22O%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T184757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCou1yInuJFJQCeUyNvv3mrvP8IKMemTIU2Xc2rzaVR8gIhAOqF9NOjhWDt44f08r1Uz%2BII3UtyaHN1mEbIoRsz9LDuKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx83ZbH%2FNRRNuJzR3wq3AM7fn%2BooQ88ZZ9%2BS3EsJ2nMc1GmBtu66eFXxJ90k13Jn3XJcUEnwaVCoMlgRl6b43CYoOCEJ56LEy4Tt%2FdanuJra5l%2Fs6OZrpffnOFRpCfiGt0AsfM01fmhooXINerBN9mNSLxUasCQ7oQ0gX4ShMSgESdtFX5i8mH%2FDAOxGbCT8wXn0e3k8nnFLCW9zOpc%2B014hAwtwqrxwC5NgIN5c3XjZPgBRnoUDVLdJgrzgRJroJVAUqWBDUlUTdrucONJ6%2BeC7ttF0jxIrNQc51mpFg41Icgt9%2BECtOx%2F9Hpqs0RQriJzATyb9wcdhawPyLn37Erh8CgxysgH0SSXQIWIG5Th1NNspSKeE3qL0UWEdMmg0DCbdNnu1dL93Gt8ocZ871t2qb41CEWYeSwcBj4KJWxepeSwH4k6alPtGg2tyooNBZkgYuG9h3CwNRIge3%2FVzt5IDJsz4CoYZvIxRQVpIFrx86FT1cId%2F6zeQgls9vzT24cZrPVNdlahrRobtlRVH9REX7dP9n0hzpcxlklwYBfJ8m8qhHm841r8gZJ0S71LiQedvnDLvqoQloLu%2F2pg0UdcykEHXV9TT1geogHM2vDLxArkONG49L98lj%2Bwz0LzoIys1%2Ff06ZqSSm4aXDDDs9zJBjqkAZsooUrqc54N5Y01Qa6fJwc6aKVolQ3QIza4yuHAIGuP4gNvEjy6ftEICJ6TLfkVWQA91E9tMuI0rNSn6U1Sulbid362cbWYHeO6sQHSpNGgFYbiMJ6co8qUE8MYyG7M9OoOWo4Js2FQViMYb%2BSgLf6ne%2FlABMQkSF%2F62x1bDOkXwQHM0soFgGELMjydJiT2pkXeueQe9MrymFKFu4HBAWa3ONJO&X-Amz-Signature=caade6b2f65b7cfee8fa1d4a42dae6a235173f1051171781b478b69c4c08f100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

