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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675J4ALOR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T203421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChMLwHTM%2FOHw%2FpF%2FLnQ%2BB0wR5pK6Z6FLynwD8Lo3dKSAiB99ZUGNNbYY8XLKMxVDsHZSMz3%2FNjb470RzElWkhJU0yr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMlTJdYunOOqz0qSNiKtwDaPygmSCMwSjkwoZR2fv0MVIFj05q0IewZs1PKxd%2BMZy2p6EB0Y8nDX9ssDJ2w%2Fb%2BZ7b0l73v0GnnvuJkU1X88kaS87YTaojmbqUmq%2FW3NJkSc1y9NOqQlsjrmASWLN%2F57hXZPG8ZZw48Ztz%2FCgaXKHQrMtoeWYsLT8qXjLXHJfYb3nGZ5YptN0Fd2uqK5%2FUmmzc5OFN4zKrLgRXkpJZApbafXC%2BFjF8%2FYpd7VfcHgCvHwUq5CtoCpxHxQa9HkbxrDAf6fW0XNpFpDT%2FNwazxy%2FYp549%2FryQ5rIv%2B6yghCvot2qGHNOyHxHHp3d4FSv8NLxxrVbeuw3Mv0JyaSuGXm%2FQAsjHD8e3a0%2FMBxjyQhEKSvInPNoqXqsL9nrIkv3z0JxP2ZlB3A0vzF4AvgJlrrzO8j%2BXhWSYavYlGjXobWVbGzVXWE5VBGMzlGysYbxfCfSf8%2BpsTXehIebgpMm42IRZWVBfr%2Frbr4Zy%2FX5zGrDxHsd%2BfK%2FMeCy6NeWnHB8weTbyrRB86RSARJDHY%2FNZ6GXNiyPo0roZm3ZCoSh7PR%2B1NMRbmJ22HMgaYuCFg5YlZKfSQtpt5baIX0b%2BtyYqaF7T5AgqiltIsU1jEo30OTAa%2BVxxlOoUeodeC6%2Bgw1%2BHLyQY6pgFDkfcehXV9mhEXDKLhWCx58i9zIcctl9ekwsdI%2BEu2MbBLBdsyqDssS6YZtjMS2uBnUr5kRKUq0aSCZmGOg2nxyCPtSosAlDeAu9XizPrQVD9UxZCUjYDL4DW8AMIRUOYCbZLREEUauNmauanHum2phRaKAym5p7g5qdlkym1RoXhKjCZrg5HYo%2Bq1NC3S54QJ8H6ZZlL1t2CMYvPNYeArJcOmTWiZ&X-Amz-Signature=6448cae897949e5599a57d08d65600047b0c423647aa11ad0486b8f9a06c2a21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

