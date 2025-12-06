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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4HJIA5Y%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T042455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFY7DLURwVP%2FNWhdbSqopp8179xRYYZ0MuzJPWZvOapVAiEAkmrQ%2FVroJ4YHaXBjVhEQMajnoWcE0yP64FV5Vy4tpP0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJsiWrKuYRhc2nSDyyrcA4YjehsAGxeJYz4McmQlTe%2Bg8yeQ%2F5f4g2NA2CS7YCPN%2Blj6Qk2YoCdIrdz7J7myMN9YsTCpvd03ou1m7nK6RRgN9km%2BVnpiFprtxPQmTChbtW2eIlHFi98Edsebnqp4UuB%2FSu4zycaSCOCRwOx%2FyJOmTNbH2yGk%2Bazh%2FagLLEEqtuCPyQgJL10Isxe9Ly1GsxgunN9jiDW%2BPgxrypihQHM2IGrBC7i59ts5D37IRpGygjok4Dv9wetZrNXPyNktl6YkYmVbmgfxyBrKhM8a5Gb8C8bnZGGxmdJZS0PXjy8fsSaeLkfRdXeVDUGY%2BZA5iQhE%2B%2FPHH%2FpkcPZ%2B0jwiiZ3Y2jijPPieEYDeGtbBwsVZkW1dMtoNzeSMth%2B3KFvMikFpD%2BjZQdu4ub%2Bukq52fKNw2U5S0i%2B9a6DsN6jdUOMIUf%2B9MBAofEH4mCTbw3CtTvinpQOX7%2BDvBgehDq0FFEBo%2BSiO%2BZACXbQygAiD03oLUjLC%2BcIIyLShqaNLJ7tryHb7zrEuNgF4H6QXYTeTXhnzvZuJgJ%2Fmwf4ukF3HgCE49L5ZCjO7fOVsh4uqNJv58NqywYl9NiN7N8ZC0jFr%2BhbUqjjpXWAjVGcxdcpvT8yMMmUTxSDYgEke8gE3MJ3ezskGOqUBY3WcYogEFs5qyGzOrSvbZ1Euu5M%2BKL2OHKPIxhELhewg4jVRdbVp21i9auTyCsik6pxb7pIUurv3tJHtF2sqsFsOKzYPUycDNiFdEmSrg1fmDP7Go%2FDdpeCrTU4yNHxiLlESVRwxyyZDmpTY5rDYYqxX9NfuAojox%2FzVfT2EkFQyOOIEYVkaloDbL6lxnLAMWFruEBNiBQX4yvNunrxi1S2TnW2E&X-Amz-Signature=3feb3276957e6c756f9cd533f60392cccc4156125dbdca08fa737ade632a2f5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

