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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZBXXOVG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T145852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCz0jP3SC8U2oAK5NuHsucVGS6DWmcnaGd1Q06R9Z9LsAIgY3l%2FWnka%2Bp%2BKVbaj2ybhxt5Ev34COMdkGEhAETwVEAgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOSv%2Bq44NlfjM3DpIyrcA%2FFjv9kMAK7QsIMidO6zniKySjBYSA240e%2F9G1mL%2B%2BnjzpNBYTqzUZWAo4DKNXj3UcJexld3HtQurUxh5pNUeo32NEZ7NmWVk9I9F3TRY1676P%2FgWdb4PKlgPRGofG%2FFyp2QsSBmomwCAne2L4mutnKCOM5d0G9E3F%2FuKFkVD08aqKxTidKjX9vWDglhq3FDzqbpSJZz3mXW0gEReo%2FRNCmIjF9VQsrBt3r9jQK7aITgSaa3mTiB3CmfL86WIRxu8jwT0gu2M4ol5Xh8zMA7W7GbNpO%2BC%2FqcpN3%2FElb8preruZ6oLFQxlQPeH%2FaNtvrfJ%2BjkGBiE%2FE7Yql7TT2Bz%2BHeoAuX%2FtUr6pcKH7zSnzvBcHLpau%2FoUHZ2Z2rMAOfCsccPkPrSorV7%2B1xAbh%2BvGY5x3dcB8j3jt0UuapQMmA6jAtk1ngXrn%2BQgkwzxtl0uqdGRMkw8WcZsCJi%2FxZSMWIp6MQ8DlyjoHBuaex4HjRb0y6CmEM0NHf%2FY1c5G7J8WkMnv5bX68FBfZ1MKCE%2FS7Y3g7wEefXmmLXJ33MsIXsxRDWoPjAwPAIkDt7ViG6zpei%2FoGD8b1oHFcj%2FQ81xR06c7CX9bAGZ%2BMqP8ixufrxC%2BS0T2DlEoJBiyJnc%2BKMPWm0MkGOqUBIC3DilrXJo%2B8UHyq%2FWOhsI%2B7A2GgZSObDtuPlUzYLswc1gjR%2FmcWQezzntERWdWV2Nd98DlCAUF%2FX3q79p8JKQ2VjUP0315xLWiJD5gmxn7pnMlFrfliNP0%2BHCQ95kb5W7ZJfF%2F2AGOYNnwb4aXhsM1gkaip7HYKIRkU38PQUYD5tNcR%2B4%2FIu%2FU6oo6ZPyfVPQOPs5pqzoM3t%2FZFQa92TreGvGcK&X-Amz-Signature=502207065a9aed092a551b71b9afcb4fe0ad67b3a1ce95da58ad9bd72c593279&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

