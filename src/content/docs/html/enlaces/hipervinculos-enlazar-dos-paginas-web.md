---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTO7UO2U%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T100314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIAVqBT2wVEeRtlJS2h4one78fvEyhyyeo581li9J3IFVAiEAk7u%2BRyV03Znj039XK2U0M6AiGhvo3mReKyIUaZ1dPGoq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDFuh4CSo4LJ5LLI%2BHircA9RvGEa9CpKIac2Lq5LaCtkGhR%2FIp00SblUuG1DjSR7LbCkm9A8Vl2NWymFwpHRBeuVNAmrxeb9YD0v2Go3S8aDJj2KZOIyuzlLhoxr9TKAcRX2nenLuHDODCAc2QMrG9QzbLKWv%2Fx95P4%2FPqvzLsYXLD5Rn8pCcs%2FBnSG3kfA0LZr46lKwSzaPYbIqeNBDbFx2ZmaYt13ikD7JjWeZZfI9vXaYHJjrp4di%2FUdWCtGD5IMQwRC3GVo%2F3jQplnJB1YVibGMtfmsZCYgjvUtrDJepLxIOD%2FuIqtjLGer97Rh6TSSXfACpOKOSVMxLa6soVPQvap6EBKRu%2FvSBcpww7%2BcRTxcY8jt03pIhEZP3N1ihnkX8zDi1HtPn2WTZW7rhttUhP6UNPdoG06Vnx3XJl2YCcczeqvQ6ohOWd%2FLLFvXTe59Yqbchkzfpv2y3XEBYvn%2BbcpWMTk1zIGoGzPtDYaChfZpagvI2dN5NG8QOrxO9FesRarEznLFElcrcDXd62Opg4%2Bg3TEWEBhodUVOrFdhFmVMMxDAIK6VX2zrxqiQ%2BttgzQWc%2BCn0h1dEFYGS40soJB9pLV3j1sAgkiwxY5W7Z6lgiHg4ODk%2F03WPAY%2B%2FFkcsERPOmSGeqtalETMIqrxckGOqUB77Jj9g6KI9AlWWuNxWc1CeFP9vyIWAgEoLMv6Xqby1ZH7reS0yoHWsWUgL0TJpmpk7oCKM4i8JwV5GC%2Bcf%2F0qgDZLcpQkC5hyiX3ZcnDsTXigHm3bQLm%2FHWtvxYwf7Nlg3l7MB4XRoCO9sLswpy%2F%2BKulXAc2n%2B0xdMDwR%2FMWpOc%2FnaWhvhCI889thL3UQpWXjy%2BapC7%2BkWA4ur%2BvqKeSQqvNEu6g&X-Amz-Signature=ef9a1fe8b2a3c0d047e2544f06541f61323da9e32d952e391080f5b008f99774&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

