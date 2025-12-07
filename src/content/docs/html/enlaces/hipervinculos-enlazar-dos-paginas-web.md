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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFNABSW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T050112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmo9Jg2T4gBjG%2FJfKyEKncsK%2FHu757A9cYsx7uP3LHZAiEAwWDGWKa6mez6GvioYfpIjc8s26a66IlqWF7zzP6XImoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDALd4qqn8s%2FD0ofHOircA07kx7L6C0vTlRiLeFtHOzQ%2Frf%2FhZiNXIkwM5hAKXgKXh%2BQwnOKlovCcNlFCs7JNjLs7F7lo6nVF%2FDw%2BkXTFXei1YlrrM8Q4DF8uHTX%2Bw4ayATYXRtcRonjAg0hnOuVZC%2BpUOBBihnBif08w9EjRxRrEQ74aJaxqguwng76L2x5kbTSGP%2B4n8Sm4x6FXxzxba2dP9OEn9Ttw1MypmdJoJqGR5qr26pFx7P7%2FiaU9cnNclUl%2BqKMK%2Fn3mSJoF1jtuCqYkO9VwjJM%2BaPLqA%2BIHqKjDShrQbEjartOTZOah96G743omQ9LId8Oz9xdbECF6SNHvkw1ZeLJFRTiVXuSIwDkvQQTjEZi6mjNuz4EQFGg5xu%2BwasHWzu%2FtCAZ0MnxVJnm%2F0wfYoQG7A%2FDNWrbOzFgfK6SoyUcJPhESQXQyx2S3SmgWfmbi1CN0%2B%2BxIg7cTdtrVfubMZjpIgAtBQSq7G43%2Fh5evGYMl8vsBlLMLqfIsyE98NKuL9SwPS6tWyD47IUNx1VnriDy34cjnIjy3xTlyKtJ2gG1GnLKT1y9lOn4HVQWjCvPoiyCYyXn13vNuAnA%2FBnrHpaS1qWQLpPCbNJj9qu%2FAtpJREnKG8l1%2FoiEm%2F8MKyVN1tQ4Qczt0MLD%2B0skGOqUB2vDbebyO%2FK9nhoyojXEHeLWZZzI1Gc%2BlhOKMfqImP5EtRBli%2FjUrR2tcN5Z491glXA3MKWhiEdndiHe0UOWY74NxCliDfM9tjcrZcX10mf%2FrTde9qWdQSVhfCUYtQHYLE63Ste3gVCLslWT3rD8gP0nkNO2hBwaXBFBHhESbcllTbCEYo%2FhItSHk0KKbuKOD3F%2Bcj5lHXcuF8KE%2FzMfoeZsMGro2&X-Amz-Signature=c77582ed22c9a52e1baef089c708c62a84fdf109a7bfe3c061cf98de48ee70ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

