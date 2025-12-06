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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7FZZAH7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T061517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyxPse5cV9iX4sQOqQEp6iieOZwGSuOwT%2BITba81fk5wIhAN2a6E%2BUW4tCVQ%2BpB7q8ghge5u5caZ%2BqgzAMQr2FbkirKv8DCG8QABoMNjM3NDIzMTgzODA1IgzAzH5wnLFIFSE07%2Boq3APejkxPM9th85PbPl%2BXAFIBIYsZJRxrzqT6FdfQmocnSoBG%2FB6NetRmxDOOjLjTCimP%2BHwaED4S22LvdmK9HGz6roRYINWx6O04j9enJh9B6gdESocRRidFtNkMd2zCBCG9hney1iCj11ES%2BpiawITV8GXLU3s3SOBf90PRetlQ%2BIBrOIqTLtTQRsgIRkGnBZwH2sS2p6BQsnnYpjeVELpAqkTKC1uhUxYaDk2Z2r3ca03W1YGtlqRbgnBEdGrfRz0Qpw6KTjlY0po1m34PVRxdYfbA6zOGK3x1nsovGe4MX%2FLvRbBRV%2BfTS63uwtauFlGGJWlcogeIFVmF1xNJ9yAKoGLoJmZT%2FGf9PceyX6dy7AuKdsjq40XK0HsSATwMYm%2FlLDFrQpz6Ww9kH5whjYFMFva%2BVhUJqjls46ZH%2BmvDZ743%2FT1purdU4f9Bw2%2FQrvDI8c8HiySD11WPJozgS0n%2B4t5LI6ujiqTDKJFdYHCwbTl6yFSRyFAks5acIagEEw3LEDRi75jXf%2FvvpWpPnBh5MIxnk4Rf1YnVggao6WJbDBJmJiUyC57GRNXQuhOLuvsglsWkiQjgvvjMHBjRAGPV2Vk%2F%2FparEOqV2r%2BgOUaQXeTy775z3vsEge4gwTDN%2Fc7JBjqkARJL1LhYDGjBeMvRDHhpFPBFk6fi12MKXg2RnKRB34EyREUX6e8FRof0JxXZtnM7094fxUKchdS9ZO%2BmaeNsuBOFY3WNrqXlnXajXdXl0aZeskCZ0jX%2F5qsW3jvZK2IyYkmq6lYNrrxF6hadQgJFg%2BAGs7nzjHZVsLn%2BaysYf8Vcj7hdkrqbyjH03fdEmrGSzCArMHg%2BlIa5K5UqXZUgOV3HVUD1&X-Amz-Signature=982e40212cb5a3d911f9e7c0bdb3e9026d71f2b664b8b337718d79a79fb8a40f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

