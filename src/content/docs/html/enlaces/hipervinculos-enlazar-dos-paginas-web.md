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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YU4HR5R%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T033217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOEYZ73l4XyC0Uiw4p4AxDWDhGOsmE6%2FtxOiUza8NS0AiEAw5Tbo%2B%2BcNMl1d1JSdojp61p%2BWyNLSIFrSmOO8su0sMsqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpTKOCou2IbRILpkSrcAzM4a1bQ3UMZuVSeakRF5%2FUXKAy%2FrOkifYGXM2KAQsi2gHPh%2FDDRD77Tnqwvd2qgxJiuQFlosIFwowikCNh8TqJC4eLXLInmzaWZc16nffn29au5iEDNYBuVnJ5zBjYXPyZ0NDh%2BYMlef%2F578xwKxcnPh4GZTlYaOKhGHoFEBbBGRPPjbam6pcYHIP9BYxMbOp8ZJWkQKemm43Og86by3ITJgyJQdItiDMPAOCpCptMi4UQOTO2mR7dSr1Dfu8FR4Kk5ZXa%2FbFlQQhP7WLBT%2FB0sctUJAUDMHXiksVoyjWbdmFmZ1Tk8%2BTbHtoZCvcx8NkeZfxbcbYXnZxZrAaAO0B9iHOvXPCzP0Ms6OtqHDNwYgKX4Pa4s3CLxt8rZmCaUOgPYg5fWSKHgB4YzTDG9ez6T8WchlWmqJslmVamZakf%2FN5vCUGqpMesncgU0zBqUhJKcpSAhkKnjsbxSR2aiVujkEEffaTnPPgxafY9Wzr6maKi%2FuDC997fUVN6aGj5%2BrZgOhOM2jDySk5cV962bWF1FVm%2F7c8Snem1njSBz418dXXV6lRJ%2B6eUG5u0oRYRCxQsiBMNNG%2BfAce%2F35GiYl1nU1qCFb2L%2Bs71ZH3rk0JgyiQxb%2B27ynkyb66WnMMau3skGOqUBbaWZbbrqZGwXIEgd%2BmcBVgpNow%2F7%2BatntiIXo25ML1iyTNxhM4Iir%2BnmLkUJZfIVZsKDiJE%2B9l1mzEpnzfYkF7bLTR4TgOe3%2BE32rWd6NrB0I3cZMKLRH2Bz1QJHtzyIPQOFHkzdIJqcgnxaTWdmV4IuYM59yqDVrfo834Ow%2BZFxIvdRp%2Bv9QP8HJ%2BDRsWIAf3iug7HH%2FSHwJeMI8X8xk0%2BKR8A%2B&X-Amz-Signature=05d94e7d97cdc8bb81bad1bf28766e97613821ba9c1fac9cbcc7cc6b85c8dd1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

