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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSNEUD4I%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T005951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY%2FL0SG1XMujZBkvijJ4%2BUzTM33bx8A7%2BDi%2Fn%2FdyTaQgIgM5QJNjHf%2Bmtt6OytRjqAcn1tCTqfLs%2FwT2E55JbNsmgqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFd3EjA8osNSx5xEuSrcAyls1s%2BYJdgpFqej6QCCbCRyHWoURKsJMMOqmepoVGkCVF%2F4SXPytcSlwKxpMGXD3Kktr6jlnTh4wm2do1uUazsKnf4J1rUuabLFwb6sTlNML89n6CDnUBAGQMGIEk9v%2B2zJW8%2B%2FURRqvCP2YBN4W6oGlzRnJwOCKQT0wdN%2BkeCMc0EdlF0ygqIfh%2FdPikejAGth4ENNQpgdgA6JvhTa%2Bv9EnhqgSN%2BfhUkEOXeOeXDJPmdllb2LxO1LvxCRca1UL90i7hNZiTTFTK3095DajwkedHympC4frbx3ZXquTYw9ZJ1bcSHcMHqUCZ7a3Lr0uy7eBzf%2BC4MJZWSNQStitJOfS%2FKpWCHm9aSqaOQGHEscMrNrRPuKodFzmXdy7Hkz8MjSuZLUrwx9KHZsDDWx05%2BmTPIKv3Ml9hpRgpXdzJw6LD1%2FY3yqF2JxSC1OWPXXHTGjtKVTjPDidpkt8tq0BpFPBSywOTWWuJ8OD5EykOkthmlee%2FOKX6gwssWJJiMKOm9XLrjm27R%2BQ3p6n3%2FjDGvYmCF4TlE09S4VdlLX5g6mtzYUB8xrCIPPccmw5l%2Bf2PJGery1N3dgX3VAYvEaOFBOV34juHLOY3GYBwd7qdLwmEXiqmsOAOMFKOokMNih2MkGOqUBgtInb8FEBIzi5vTQx4B%2FZlLw%2FjOxlEyd7xOSmNMZWEyh5H0VoqxprW1cSrv4iA7QEayneYZXcE416FhIc29ZIh0te2LdPSjGZbHYdYTsJG9GG1ncZTBdMnavg0j%2F9hAXuterugRjHkZHXYPMGZwvKPU2qPxeKG6rVgBLKcpXVgk0Kx6rCwMQjcRomZA4loOqE%2F8vMJPJd74zoxC8KhhoBmlKyKL7&X-Amz-Signature=72718247d6b891339ddb72fcaef4f71887e10ea27aed2dc07c206270efc8189d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

