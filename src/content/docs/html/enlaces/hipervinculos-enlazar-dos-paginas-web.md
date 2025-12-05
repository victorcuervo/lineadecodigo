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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLTWQUD2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T175821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQNvlszyuIUjF%2F623wJcncJ4g%2BTZW%2FrGR4mnCiNlrxIgIhAM%2FnM7uTirSpXvqkdJTI0lHukvCaKT1oZFj6s8Oh%2FgUAKv8DCGEQABoMNjM3NDIzMTgzODA1Igyy9jBTKpdY9l9xFOMq3AOIfzD4c%2FL0x877FUe7pc2ZweY6nb3mGPgdRZwnqKbip6rWgdqaRHyAc6lUO%2BD6tm2W%2BOA3H6l1yKOBnyK%2BuR6Ja8kIwiJql%2F6wCL38zcfVYgFqLFHDO1Wp1RWVjFZs3I5hNO0tLYZYtjYl%2FmpEuQe8ly6V4lIZhRKPwybEGhbPeaD7zxK6FLxQJafwG56cHOH33QTJNreFtLspZsUJWygi0aYA9Rq1levMnS3ZCt2yfKpPA2pFtUZ1r2I1ZPWoZMZljT6Yff6YpnSZzYtOdAsW0NFgG7M1pivbTQ0NyTWOfJU%2F3iTZe6ygJ8YJE10GuZKwA5QZ5HJZYPSXZzMGvQKihwEG4B%2Bk5H5WMibaa4BSvTy6xlPm8ZIt4joJvx20w6unerTdvcPIF7uMHX29FkBuMprFExZUh%2BIrziV39mutUz4e7CYuP5VTjaRy9H7rcXEdh3lRYeJNM4AK1tf%2F2OKSNs1ylT8DEM3NZDX3Gpx2e6Rzx095AbkfIkQSnhecQCoCnJU37iUYhV%2FKm5LEkGD%2BDKQ4d70mmLWcdDcJmsVXXl3l%2BmIO7kb72qyozHkM4vQo0KR01AKOSRHPW2xQveQAH%2FxIXe%2B0a%2Fg5iN567j8rpCg8vtYyyekND%2BpAZzCr88vJBjqkAaQXqh9KDxeFhWHTeCSsZI58HRX609%2FBFtavROrwd6%2BApam%2Fw1HV76MXPIYHtGhPtaePpMPZueGPczzSKLcrkSCx7EoAXGrfdlJVIwdOkCRKEg%2B3fzgYvoYibhgiUlWpMoQ%2Fxkpmtqr64Kopo3ur25qnPt2OYHrSmlAQMr8Kmt9jrhgaLiC%2FZ6iqLO7on2huyz8rOuvQySVflg0Q7Myawz5fHgW1&X-Amz-Signature=0080305237127a95bf551b70ea2446d6416df956b09eb0dd784526907b602be2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

