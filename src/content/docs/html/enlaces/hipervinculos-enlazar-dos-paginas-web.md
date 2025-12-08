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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXSURH4L%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T092345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUqK%2BfRx2ha8wozwQEe4F8ipBOa9YIDhgH9zj8V71cZAiBigEmL9geTvaNTjw6%2FRwwV5YFi6ROriaP4T8hLjgTYQSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMidB2VrS0fdDVniRXKtwDKrxof8CyI0oHCiHGA6lt1lOccVcjauNUgDJPotij9p%2FWBlgouA3rPFnN6%2BXZpLyFUflEB%2F8aBcr4anHuKX8b4ksSjxSwT2Vctxw9AMXOHkoVbMOXuo77GnPUJ95oNSerqfLYas0SAn64p6Tu31cj%2F%2FOt0NoykVwWvefmc2k%2Fv087354DuvVlcCa7vkuM2Eh1sBr3qvL4eURMf%2BdleYJEgoE7COGDGpoabPagcRXpYw7I6qu3sFHcSgMCj7UWbco8%2FPgTeHnOBmUBVG70lLWUeCUaXuq0oF0jcfABTBgRZ9AWjNCL5TnosHEGdIDaFH%2F7LGL5xYRN%2BZWKLiud%2F8%2FAGUgTAbdLG9t04ESsQxr6td4KSK%2FAgSojV4FbsAX6e5xL01OS8CxusMswk6HbVPtHco%2BxLIEbmFneJ91yoh%2F1d2JPS7A7Y%2FusV%2BVCjkWmsharN0gunf7jv%2BNhOoHek8uirgKcffqdkpICxvw2OGwN0w8%2FiX%2Bhzq2BRVpYbNAlstHhQCXBQkIhgN3bICpr77dfukV9Ejav9OW%2B7DJpVdIoEAEFLYRRTVcmgntFq5KzW53h6Lyn%2FSWdyA%2BcQ470%2FOBCK7BKtBFmXzIu7ZsK38t6CXH1oZHAFMOPv8gQCLEwvO7ZyQY6pgFQmjdznajS5DdBtQ9CQjLAk8KKAHjdYQaA%2FVVdlud5g6QNUuFqChOGJ%2BVme6dWPWV63JK3ZYHobMJl6AmDtxjYcf7FK7ZGQx1k8cdvFiUje%2FqRBLWnnxL2vrwH%2F4qpLCY8L1vnbFuPenZBCz8GJr02OYG0%2Fdp2iytAZdNOvNhiAn7nVI3Iu3wwBU4ANei8myFu8VIJwThFVgYpbIuGQcbb9rcIQhEn&X-Amz-Signature=2cc5deaa5ad7ec6b1a742b745afd6effc81fade91005d22e3cbbfca0f072a2f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

