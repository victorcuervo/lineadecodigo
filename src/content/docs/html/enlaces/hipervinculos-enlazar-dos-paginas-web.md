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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPICBX75%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T095057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkTtsWuZlZQ1CQvGM%2BdVv%2FkhwV1VDUIcxXDHTOGrrngAIgadNIm9wHWRVRI8ofmKzAZ40y%2Br7RdJ7AjFM4OuqAIqkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFbGHKMLfn83wQfSgircA%2BADRQVO93vZQAK5iZJRc7MxaZv5TzhBH%2BZJxsYWexoyA4za3L7YsgfoXxDM5UgHXcT9yqu%2FF8QFoMB5S2FwtY%2B8bzrXCoG0hQUU%2BCHGIFAEUyHjCBGS0WKcBbiby0a3uRFgMSbuIXGNb%2FJNRtZGahyGDDqFcYz%2FD3RCSlCXScS9SMO9TFfJ2YsKjZ7a0Ppktt6ixwoaEkkzb6iBFvOGhzHpB0N927W%2Fav2mZMhgtHgCDkAUEi9x1MOEJ2VCMLyrH3Oe88hTs%2FjZswWPgsZnUqW%2FkK6pZmcumjDr2l23pwXk2f2RLBOA4MhnbTYdnrEMcnRO1%2B30HU%2BXmFHkoaoHosSPB1Kwod6ZFu2vE5VqoNhCvK8LWOtZYvkuQKxUpRKbDK0dMYA0my4GwcACcn9STNBgCFbeGa2w5BnGd8rJZHCve8U0HQZNlXGShoXMk0F1deRHsLMdwbmf00b3jcTmYduXmZvARx%2Fbdx2bXbcv285KvjJQ9e5ZiDBiQIfWx1YMTU4OIG2jjojmRMT5%2BVjL0pl0YbIDgTu85qexV53QdtVBwrq4Cm%2BZjJFJA47IBN5eXCi%2BbXuNYXiu2AX14JlXqsWNxw6Wzjs8iCRTSHQo4VwPaIlzg%2F20V1r4evuVMLzrz8kGOqUBjpn5P2xsHxdDH07yzpJA7c5euMPfQIWsMjWyCuBlqpRkrKmOGw05ej0C8pa0Kwp7tKzQlyDkIXTFzm%2FLLtRpyOSjDDIirPqyzY%2Fv4mkAXionwIrM5BKRfo2uYV2TPfE2d0%2F1bECY2Qff0Nfa2n2HJKHiLoGY0SzmP48qiosq%2B%2Bs7FT1VmBdupgazIMD%2Fh24lhQjJ82w7VqQX0N2FwNvEVJvDiHlt&X-Amz-Signature=d28aebc263a50abe332d24851ce0d273d15e3b8373b278b9eb6cd1099f7f2b85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

