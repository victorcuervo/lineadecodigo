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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6H3NLZE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T125405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3%2FkB7bQZAXKsP3EUiWggXbpnurfLB7v5QUV0DEvKAKwIhAL%2FsLzj31EcymTkpriPKVs6WryzWcF4x7h7NP4kLz497Kv8DCHUQABoMNjM3NDIzMTgzODA1IgwiU49lndIv1qILRyoq3AMNRitQvWz%2BF7a0dEFXTu6QWAPcvEtA73MdF7hk057GKWRKBiVZPPmxLSW0quzMhS9kXNCid0GJkhDGy5ws554eW8kTBuQprzStaZavBHGcKT9aqWkY4LXYz%2FZGTL%2FQgOqs7kKhbV2HxYAoIkDZT7eviXhD9ervd4aEeqiTTI%2Fkm7SlolLIE029XZD7IoFxDXV9pKIwhWqHBU%2BfrzqwZ3YZw6gR5C0GNfn7OE5gSEiJQZkSNyL93Zs3LE7RaFOyrPIe88HeGsUCQKA8xmBoSJDwqMCwYmqhJdYi1ZyhsHNpYUAPs4XnDfrYSjNL0cYwuW6apsaIaQ74rZpzv9M3E9ZZNt5my6X7av1I95xdJLoIczjLACV8H%2FRwLlZWBfn4dlMoEb7ujdOSu4drrOT6i5QDmWFesfD0LPYj9PLSsKdwTJrb4%2FJFllyW6dArJxjPDxA3w7Esz%2BVjUo7Ve%2FWm0HkltudPSbjuc5lDZxW93i2dnslm7KZYlqB3f104QXjNgX9OaMMdbFonMhxMc0BF7jA%2BXreO%2B9%2BQz0%2Fj63kYqo19zoYbpZvoGnOoUb%2Fm5mPcfqxexb%2BZh8AskfmqnjWflvQzVl2IKsux8NG%2B1%2BQQ%2ByAtN0rjGKnJYclQefl2QjCAp9DJBjqkAae8appyT8bOFrSUT7UP5q80NzIoIT7I0hsUV18yaxLpuVfl3ZBRUg%2BFWv9IyD4l%2FFB9VCzi%2B6Nu778iXLeEcZG3YyuZJ2%2Bul1qboHnKrdIGZVYN%2FI98Z%2BvVKO%2F2GSd5za3mNBobRWy%2BeJ8a9harsHe16dwxzY2CcI5KBJb96tIebsPZp%2F0hsXY9NNoCxdPyUqlQ4QnRy%2Bj0EXTROehCV6HwdemE&X-Amz-Signature=ae2fea91c69fd29ed6e325314dde5ec242eae40c38b8562279bad99398eb0648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

