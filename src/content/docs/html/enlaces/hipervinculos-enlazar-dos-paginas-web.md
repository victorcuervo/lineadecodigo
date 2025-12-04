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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JANXQ3J%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCXq7si2c8Br1LFgP0b20RNSs2R%2FOOJ9ME%2B926JWN2FqwIgbPS0rZcpfzbSPxsJHw1Pb0F1eUdo4z1yA9Ij1%2BHXm%2Fgq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDOfchEHejUIXtXhi%2FyrcA6Ggbd0w4UAGcgpqkcdhO8JzjooTN3Z5XItw5Qhg%2FLhFesuIPjhW%2FXKYGTF5IJS2rL%2BMFiCJ69udnvFBjApu01EJe5OOmXqFOo7JHzucCIy88aw05c7tWBztfbDORVpvuayXLwSrSZxnC%2BdtEkYEwTTNjIXMESIBuujJUPy1xk2vzya7XJD6emX2hhKmQHuJs3w3XI4B3KukM8Pa2PqyKJgKrFXA3DYWvbXg5D6E%2BIz7mEGPb%2FRrVP0OzUqbSC0Ehno3APAhi%2BZuBHT7HurXGesDGqHmLODT4bTza68AHakZO%2BEAzIL7dRNqwdWgAiazY%2F1a1LLlkJMkGLmWExppQuNCfirUuUs24FPeJQYXj4PQrg8cI1niIB9p%2Ffh7BLMdoQBkW6%2FEhXyUqfZwJpwABTFJsAvSJepDqogByfjxfOZFfwuZ9PSECMTYXAQkpalSzrEbjRsclC0I4EYBY%2Ff5a96XA6QCcGM8ifaz5HPLzURlYwElWgzz%2BS%2FkXaF2YpQBPMWYbpVK99pxJT9e2UD53VZjKcNUPqDTezfhjptFhK9emNYKIoCX7Vm6rs4WkiCylhIQ2CAHd59wJat6GS9a1G%2BmhDYJPzXtEdKkhfArWj%2F%2BD15yJ069j8wcdn9sMIOExskGOqUBp%2FPaQbjlxKK3Xy8FIk8VJ7fxcRha6x8xT5iQcbKJG1gAogRiy0gBCWKRos1ImXk3LqOj5qpZ9nWnFupzSDQEcNgDrXZ1tGQbtyiDRljOBDrVzBtue9m671%2FKSfVn%2Fn8J0QRWtQHqT%2Bg1Bk9AV1lvqPAJ4g%2Bb1V9YZAoC7NTtbxuUaLvFcHfJHRA6F9zKmmjZMU5Xd8Z4uYw%2BIdwk%2FO4mPcXWm13B&X-Amz-Signature=679dff3594c9430e50b40b99ee02d11015676c662fabf77382e663e4ef3964f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

