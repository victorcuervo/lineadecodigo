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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOUCQJDI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T053638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8dtFx7XfXWITvPQlvrDEOkWcwJNGvmPoKRdf8RHDK4wIhAJxc%2BoTDLVNuQWx3eLOdyyryowZ0lOrnETtMETva7QkDKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwU4Ax526nskSlMcUQq3AMJUITD7e9Yo%2BkDkRzZj1bI%2FfiQuEAR4l5oGIjG%2BQE5aaY5csRbZOgcpbKZa8rI8xAus%2BEwBqPGC46I0EFPD9UoeUlhWxl9TNLKkac5%2B6a5E1B9cdl4n2ZYYYbIBJlaVGLR4wjXnYTuoc1yiILzMuZqU9WgN1hGJ6rnPz2UBjoDcwy4W07BqR0DLmJsRGPQep3GBDRO9C9hCJHVqBR4VBoZYHs2PAXkrSoFDKd6aGROv0DNXGPbDn0HNC7X5sSWN7oKafH1j8kmqbNf02BjwKhlNt9nVvBJOmUTTTresnnyfj3VFuYMrY4n9e8Xakvf%2BXUL2Qg3WIAgDxcDRWeHI6aEq6hs198n%2FHE7FPYDHqsFW5PjUsvdZLizP656ruB5iPyymnYw5chHc5vgSmcPPQoKSBZbwoUUxFp88BF9y%2B8IYveq5HqtPMm1Wv3icISOHDveBH9xI%2FpG8oz5MxGB3izWnB%2BpaoSMbYSQ6nNAggv7ua2xIKzXSeTwgfKGqXrfgcbrkgK4A6n88UcpcjHooNaenfCOItFhj4rVKbhcItFcgsC%2FJqkTuh1rAADNaGIYkH3D0gYArG%2FBe%2Fum5FkR%2BVoSUhbaCZl5xOdHQQUPfArH9%2BdKM09scXRYT2CD6DDn5N7JBjqkAU%2FhIELCypY5STYz5lb3LHFhsOSjp%2FGIGn7cal%2BLJ3dzkUaQOyunCrsRmjBBUqM2feFZNhADaxwH%2FHSPd%2BSmoRtjUM3FPV5D5dZJHqPToX%2FDwHrC%2BildQgZCQrscQH4%2FptkOzKarkVEW9ZRwWu5jtZjgVgRuE1toJ1rDAPFJ0YJq1RnE1bllTQ5dHKi9%2BeeGCTF6VWAmJoxKvTtVBfuG6j7cHbz0&X-Amz-Signature=657cd5786b3502e0e320490c204b183a8246440aa236d4f2156b222f86a83661&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

