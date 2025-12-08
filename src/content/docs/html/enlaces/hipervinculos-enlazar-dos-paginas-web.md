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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PK5YGC5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T081549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBnSoBKk%2BVd%2Fhd3YysKBdKFTpIQ7iNlTf6bDgWBjq9TgIhAKxrFsWmlms5TuCmkbP7MNHk%2FwhPNDP34cIoTELUHk44KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEqrhljf%2Fsq%2Fdknzsq3AMVG5XqL1fY2VylV9eigjk%2FiR%2FVj%2Fvb0DOa62ixOriXjydbVAA2UzvfjE5FXnEtCsgXuGZQcyhYW0rRJDC5IDY8F3KTCEdGJsqlorJcG9a%2FrsqqQ9QsZAqHijKfkOcFMZmp2AsAQ6N68YMztkGP2uA8gwqN9JBRguO3kA5Etu8aj2aZUwfdH9n3R2lJU5C2ihTRqLeRUSDK8l1CYkFGZ3ctCPPaQBVO9EC%2B5G%2FDOkLKXqlBudfjHZJrDkmS9EfbwklAF5RUvV2R59DrboD8NHI3xS60iSw1zZvL%2FfQqv7Q5YrLiYtMzcq2I8hLIQ7BjEzLZIW6tCiM%2B0HI2dtkd45MPocwtYwsbN0fkemqE4TU3zNN5MckFm84ruJqOl%2FgioIau0RH0umVoOcwWDJBSM%2Fwot21US%2BElAbdH0C25ARpPSCcR2t%2FZnIU5j9h2TFdpSprfDcWAs54D6YRajnzuWBBGcInwUJJzDChirGtR9mNSa%2FnP2voeD5swuR0Np7Fk393fHz3Dp%2F8Ke66CxWVdyvGnCEjriSns8tXKH8vj0HssXaqx8U4sBjY9z3RKy4LRpE8G%2Fvo4uxiPFaeGVgu9p8dpGR4JRer61iZUhRFJF%2FgBrXVPPlAp9LwreW1PdTCg7dnJBjqkATEJpUvX2vLlM%2BY06483QfG0FFa67fT%2BvNKrf0zWLBu%2BZ3O%2B7Sdn4RP4Uk6nKfREuYKP693SCOwwvkpHNO0YNnZKMEWY8a8oBBAxEPEOcaeKWTsuN2Qz25mqvmymxlB1l1Zv1NyKGCVF93k6US7zWw8pBT6zEUxnNJuc7oll9k6rFHkuk4qwReW59H5m0gGPDJML53SselpvE1sQX0eYmmqTy8hM&X-Amz-Signature=53e7b0cb6c6e7ae1323aba13b60907038ad47c1a327bfcbb744707657c023ad3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

