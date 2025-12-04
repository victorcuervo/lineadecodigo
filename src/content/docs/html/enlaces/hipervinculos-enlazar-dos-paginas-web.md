---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2XT7TWQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T011200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCsKKCaOVK6Xdo3uivfNTTkZLklwkVtv9DjB12VWwBIvgIhALC%2F5oym2uB8%2B4wVBNuXhbLzxhmiMCoSVidX8SL%2Fv2qlKv8DCDoQABoMNjM3NDIzMTgzODA1IgzLf5h%2FwukMNQ9i%2Bmoq3AMJAKG3LR6b4MV5CKqRvBaavuV5AbPRzLHp0vhGZu59oeWTZ6H4oLBhfK0N8g9N00VMzMGIwFdxGiQQXDYPU0xNeVMWDL8Dod3n0pFXIrhkeH0bya0JTwSbnkZG%2BV6MnFCfi97iXJfh%2BpVrmOqoLbQKsoXcllJ1Kd3coOv5thcgrW5YMDgRUjCQgrL3nK0slk%2BXCY4dFgdCDR9Hke5XNewRgZBIe8zaw88FHKkUDebQsuFnWe7qoiPQrhBm6TSpOc8UcENogaaoStatmj3EIWEbZGaRDJIHC9e8b0iL9GyN%2F5drnxIlZwSCL2TlrIvSqA4aqawCvPJUeOjQn79TK7cTFT%2FNFisZ0igvs%2BgdX9AjGTF5BzcvPXnqiszJDH%2B9RbtTgEDI7kMCTwBGk05n%2B9iIiaEvr0QWD%2BJIlrYMXHq8VqSnd7PcMx0aoeKVD8wZ5O3f%2Bgu%2F73Gz4HsyKNtt2y9KYBPQtLNegCW7Bqe%2BBgdBLUBLlIz6ctlm%2FwLvK%2BYVr5A14tzGA43oag2hfyE6D3Sc7aEuj1uhuojrWU3mvLVNZPwVApJskV7ThcOlQEdyH0UeQqCt6Qo1EqeJDBSwN5FIoObJtNYYyv5oYLhNaeJ%2BBey2lsSLwXUoBof2CTCetMPJBjqkAf2nCagsM9FkN2W3yEvOnI9MkQ20QdDwgmhVLfre3Lb71q2U77cfAa%2BU2klpA%2FvcaOPdYNpT1yyo7b7hPpg9FWc3C0Z%2FJaJ9eX8ZoqIqSm64TB5vyGJBab7GfdiGpa0aEB5gtm8Z4SQn3YmxIFomFzEv3r%2FsdwBG31GHL7QVg8O6zjFqiEPJlQoOBK8VhEQVVkhHSKDnNSfq0z7%2B2j7mr4jnN0DS&X-Amz-Signature=596635eb27d030840bdc67f0764f62ba55276237f9d3209be6fcea1a340cb313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

