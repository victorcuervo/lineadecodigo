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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEEYTI6X%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T202128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqclKdmg2B9hBJbvu%2FrDFrqpfG7x9Kb62klS7%2BwEgj%2BAiEAsWffnD89JDMroP36C8FsbFsB%2F19eey2plfBBvHXlEsYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIT4IMnUFznlGrytPCrcA4ARLCvWyKcOeNEi12b4uXLL9ZoKCmlvKMR2By9DFMTxsofiqBVEbsbZ7TQxTVUNspMz2sEcf%2FsWsZD0m2kumgiGhUnJUcDuianva20IO2eLuvwj16dMA%2F%2FV9UyFNAMup%2BJAqWPj8lKcYif%2FqEr%2FKgv4VtNm%2FhaD5ifarOYa0%2BaKgAdN3CXdvXI7TgkzedXAhZpoWGUApx1WX5DO1aH3ndTOHDdRH57bGLgCkJ965MCiVhhDuaeD4Zep%2BOIyo4kHQ3tQcY7M3VOfZ%2BcwKxlwwMhBRe7uM9Dm0HcK9J%2Fv3zYqzkUv4%2BTHOsL89S5FZTwL2MxYmJn02QQ6MyXvvzVTdPFhXTI1X6BfbrGOTyrzzKiCGeFDD%2Fewx%2FLOegavRapkKnG2swRDGp3PhjM5teUFRz3K3ts27OAjRnB%2B7HW333iWzrkTXDjqve%2B5FDwd46lAcRltOsz6yAOtADPgC%2F1sTPzdd97uZ4AxIU3ovoBGbUxPlRv16k4RRkQSVatkzGzDIopyYagR%2FnQWgQ3CltLxw6lGxCEPSyfbGzTuXV6Rfi6OdNTdmVM2So6oMMu5xqfhNwWK8AAj86guJ3DPRw6YJB9SQDRE%2F8FU9FVc7KJt%2Fon1aPwvrSBb4IZgwRWPMNrd3MkGOqUBjcwMLKEnD%2FgpM7XrINXF01T9sGkaCIxKqpFdUBpavPqUqjWRfeb4icfBh8g%2FWreDLVMQhoayN4Jzr5aBB4fOw2dGociHNgfgjoUKp5UYKg0eBl4%2FRKqWeVk3dr9OUZydoiWUcnkM522g3pimgHKSh5xvwDVr%2Bm6Bwo8fjxepjXDJ%2FiIPos93qxv0IvJl2uE8eWIDj%2FjzJWH1X0WpVrfyN0kx5SRa&X-Amz-Signature=6c7d37c10d5defeadfdc80d7b5ceaa3f9999b66e05298b48e4aa5456828f646f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

