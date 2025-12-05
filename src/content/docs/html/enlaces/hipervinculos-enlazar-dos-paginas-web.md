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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JL4BMEX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T035714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhUqeqa3rYpXbu0CuBwf3PvCGMh6vWSq7WZBjUpdbIxAIhAKGQUeXDTDr9ZMGwZxQT6ZLneDhFn%2BbttrzmhAi5eQa8Kv8DCE8QABoMNjM3NDIzMTgzODA1IgwF8%2B5iwQ4NNjM1jNUq3ANB5eAupuexI3BDeEfgEsjrn%2BAhIT0InvHCihvpmPBIXl9hjOOzZ02VYJzCiBL%2BQxaWHpTatSOakIEXdzPLb9zR%2BXBCmWR0B0bDeah3oswakBw8z9dMZ%2FTOMU3uKDu3XogDpQSR2s9mF0dH3vu4t3vQKJATMsv2xyAXTNxGmiZdH8CAPMWAceSn6u2w6R2vqVoybIEdNI8%2F7GS%2Be7yDVjQB2eQzp5aqngkb4glDnkn330%2BQ1izp5GX2upLTkZ4EOJsXjL%2FTo%2B0xRJRy%2F9piOKTEoKA7OFNbwEiuODimXCIHOn%2BruWUVgbD4a%2B6rz9knRPkLL7XV3loxMtuapaxrAaDYOGvU4cMd7CMq9PF9f6eZgEYtagY9g487B5w5pHoWizTEy2bU432qPWvggUdrRKy0lSd360%2BYFRjXD%2F%2FHK77xLTW10RSiH2B9RXpTrxFWcv1s3igOo22eluq%2F5740%2BSQIoRQPVmnnRQ1osDAz4MUAF1FX1u63ZdcH%2BfOiWdj1GJuRsjFjnbIvgFgaGnZg%2BwXlZ6XpceVhzNPkJwEI%2FRLbpxCrPyhSCpbXMqaeC0b%2FC8LjogiHZ%2Flki7Fdsg3qp5p1ldSOKRptYMqCLyGdzwe7W81F%2FX0FJwGiopEuczCGjMjJBjqkARUKxPa4Ow6i96tsDrprJqfZ4e%2FlN0ZdNR7uwCFUUOhZWPzcyz59CDrTrKsTg6Udgc74UAm41YoktUSIf9Bn5huWaq2UtbC0AfogyC5fYH6UcwlQXir%2Ba8cz5eH5O8TFEfnM500eOH%2B0PNVFbms8Zf7ob%2B%2Bw91nos8unRurF0O%2BKibJFodcNN%2BKpmeg2kV9dHJSFGuL7lttPdCXbCQOnIydcNOiZ&X-Amz-Signature=05d0ce07fdd082f55bc34161fa02ffcc6f6b5c251fe3545501245982340c62dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

