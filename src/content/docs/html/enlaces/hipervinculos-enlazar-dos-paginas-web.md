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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAR6Z5C4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkDGv4Lg1hI2WUuzMdW%2Fu%2Bu0Q9rS5kTNjqVUSeEnr85AIhAPxywIBII6Q9MWQeYkv62LviKQ4Kx9vKlLQDgdYz%2BEx9Kv8DCHIQABoMNjM3NDIzMTgzODA1Igwlw97Ne8DHtwPSYLQq3AOoBNmTnJSw%2F4v4zJNMz7EOyzQiGaG0IlxvPRWxxn5BX4sEyoX0AthXWp7osLci5n53xG3Ya1ZPk%2B3N%2FiIbQl7MVEpjsvVgoyTlcwKm841bJCAYiOnYPBnCZOUv3DeQ282qLErWtoL%2FOldvvYrm0GkcHm48FyOlx8Wqput9svvnM8bJ%2B1OujfkHgM5BIoWYsmJqQIpOd%2BX1MRy0re61BM%2FLePo6fOqIHTtajFNv%2BrWceOJGqqEMcrNBeMLfUZPmhtK7NOoyaZ662dh7O515g8F69Ln6uXoWy1KrfDXzER3TopKC%2BTjEGhLxl0vQeWNamQ%2BVN2MCtJZrTyE07dAVHhl96BxloVOI7tA78f10DLgFBnyze6rUYb6zD3skUaAGZFeYYPUIxrlsCE1VWQKiuEQBa1VZQCmu%2Bq3nyuoaBAW9KxEpk%2BjdbTBCvm8E3v1KIUFTSebytwuMXOydvesAGkh%2B6fJalDgpQK5Z5FpioPv2XTzr3U28CshYcLeH%2BRzAMx9m9wvqZLbPMTCjpPzlcLtb13O1%2BDyVzrv4UA1hs3KvTrUUjgaZFYarMiHCAx7ixPgzbo3aCt%2FKG3%2FGQ94QJZRK673c82xXEC6nYV%2B5VRZa7pVi0U1mxBWAHjWo9DDk68%2FJBjqkAb%2Fb88%2FkcjyHK%2BfJb8Guus44fqLaC1P4ffVRBs%2BeDTvHb8mD8TGqJCy9wlOUG2sD9tIj6MkPOPSTcXHuA8nFdMRWKLSN9P2Yxn3DjXHCB11kr6xTurkJS%2BocKOw5drW43opcUmf1SACz6CjZyEM88H%2Fx3UuEX5utM00LiMdoCIgX8rT%2FPSHtjR5T%2Bspj7EZ10MYtrVUgY4rUFnSCrbq8CC5jSoJC&X-Amz-Signature=4b342096e2752b29f48cd5c75282de79e0aa7951a637d4690ee1cccd78269f23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

