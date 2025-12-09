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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEOKBYGZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T033456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFG0bVww5pr9Gyl8K4qQiIvwbfpb1scvrScmuOTMlN5bAiEAlFyZjY7e%2FcpipCaVAjNr%2BjXG61JKoRRn851ktiZnae8qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLgfyt4HYhQBaM1TIircA0YtHcWPhVFT%2BzQDe3nK4FKUSVhtNF8MKkza09eZJAZLF6K31U1uz%2BO5YK8v2dv388JzSPtfjQchgfn4sV19KyumrR3XMIMPNi9HyFFdZ7KYJJMJg8Ob73KurUC0sWyYEJJpZUvtWEpCK%2B7tPbFd0GLcOXbM%2BN%2BrcbUZRrTf55yR8Lwv6R2XxUCIIUInwDqCFvwYHmcNL2HbDGBZ7zcSLlfU06%2BjzXrLtnkfBB4qx5it1zwD5uupidMNgfyQ%2BSuqeFb4%2B0g0Sw4Z1s%2BuELUDxq%2B%2Bb%2BCM9jHVbxK1qSSRH4ggCIrKx2N1kowmGtk%2FvPgvmH1B0atVi9Xvd1Jmq%2Bon%2BPrB8YOaPdA8hWqxMqUNfUtqdvXudiGb7cfvwMxUKguzHGEw7i8N0yusfySW%2B3lynWZco1l%2BEkK476meXdG4isugBTYBmScNbkY0aa31an4dyJOHkc405C%2BQMq2uYnsvL3WgehX89o7x2nYjhhBOfkpMSSbpP4l%2F34Nu7MPgQnMCQPcuNKHbLOsp%2FEsnz3Bx3amLzkt6prNZeHqoHqPP%2Bq0C5IbYXodtrDFTnoYvWqG6%2BUzSbTmXWj9IwusaFcgzO%2Fku64CBcELGL8rAm10JYg1s5mgJaS%2BIxHW7HU%2BCMNGu3skGOqUBuWA9zumgiidYdenoj%2Fh1hBPG1SURrEDMOi%2FZjMNYkI5gdtLuP4UfMoY2Ir8oCDLQkxUv%2FTNh%2FbVp%2F5ATe%2Bwik6go2wyEGP7NTUHk%2FeLvN4nSkV6JUekD63fHxpoQPn5218RVUzmYEb4vAoKzG2n76HMCdvy5TtrwH%2BYUuFsuzYfuF%2FCQ5dzF901%2Bv7H%2FEHwWOcajcRC18%2F8P0n%2FcD2EbvZvxvt%2B1&X-Amz-Signature=d3b2ac81f27ea7cf2f6f957cad18efe8b9598065e5531626efb0c60e42d92d68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

