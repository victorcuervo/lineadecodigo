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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OPMJCYN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T103122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeh7ftuqKBkeiTapcd3JwVyW%2FB7ktH8EJq1QzipQTYZQIhAIvyPfPh%2FLWiXi%2FutTAUYtT0tlZwaQCM3guFC14i1warKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9th9CqQjIgBPEZMUq3AOqfTFBcstOHrJ9qeSK9GoQr0R4Lru6dekyTlqdovNJUYjkpsKW5ge0qNKS7pBx3A1PwDYjrF4N8Fku6oqR9A2sROTTRZzgnY7de%2BcDo9fP6m%2BPuuujZL8sjxNFoNcIc8lSQ%2BZwwhk05D3UW1%2BaH9Gi0fXGrKkNkxWzed9XjQQovNgAK1inid80ghXxVFW%2BqVpW4WWBfYvzQVdq1TTHEOryAuKWA31S%2Bk%2FC8diTp%2BiAVG55kXbT6jwu9eq7VMFidpIPioUVq21xXsRaFZo2h2t4f92obd6pQ1VVWJjK%2BOgV0ismFMmL%2BUh5g3axOZVv7PSpxkLXKVFn0WZTr%2Bv4BCM2K1rKEZbGT6t0AbvZ3VRMKRPCVwCS7pd9%2Bu5qhtmDjUY6aWnS%2Ff78Ta5OGh%2BOAIiFBsEiikJUmIDfH%2BFRsMAzbWKPW7XophM4tGN%2FXW0ocWGuoLPymFgh1qIvkI8jUPipQag4fRpRURIGBbhq70t2N4qUotOXLFgJOom0yzAJ9S0muf5aPFsXtGydHFMs%2FhFmGUqPzHe1KQm9YdSwMMglI5S23x3psDBY%2FHpFM%2FGHBJg8T7JGPHSxfY8H5Rvqla8OGPk6WCJAthrPP9ER2heVFQ5S2eWPPFXaNuw9%2BTCYmdXJBjqkAXCJ5JXR8LeFdVJk%2FUu7VKGS8FkSSRj0jYwf41NCO0324iRwku1Kk13WjNxULT%2BbDhOV9Ar9Ht0qlS8h50S3VHZESWrc9dmr1238ioJhdOhHYxbnJfOK%2FU%2FGtBtYVEfXEfWJLWBcBckt17t2Uh93k0rLzHPt6e%2F2BDK8pgvYqeKpUkR5hJPeQBIkLRa42QVs6CSxRM0lcyQCE0%2Fo9JilRQmMoGFY&X-Amz-Signature=752c6aeb968149a9b09d06ae5cbfbf75fbb60f7f40d51d14e9812abaf449db25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

