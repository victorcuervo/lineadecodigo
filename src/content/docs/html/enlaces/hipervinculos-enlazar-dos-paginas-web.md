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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YEB7TYP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T072838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK8H8p2VCJ%2BhW%2FKDnr5t6FAoql0jF7t%2B8tAjmNobmZYgIgVgD3nWb0n0Uh8LFIB%2BYDCRUKLxsZMn2%2BCwJLA%2BbQoXQq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDPjmWDncUfrS8qu%2BvSrcAytQXQxn1uaL7GgHMmZZJ8u5cUnnbpMMRZj2fAn0algaCbpsK7XHM9CI5auxHkdJzJI%2FmaEXZhZPhqx4ADHgGe%2BfLgJz5nN7FKLtqOAS7LQjdrIyyEd9AQ1e%2Fw7nypabH4BAzpq8jYaQbI8LkioVr49BESWPs5F13EdqgnZiIjK5V2OMDWHb4HIUf2qHutzairBPWwAsCfWpBZBRjkStX2%2BpwTMdIxSLi7JztlRcYDgmjW%2BBAx76HdHOthVzX7tFpECemTOYBYPQSgHoBF9WxSeiSw5PZpgt872Y0zBMc2YaM3Yv572zvzssIwIN5%2BXU%2BC9iCoPDOKi%2BHXZTvYIlOfqmIQgUaF%2F%2FF7rCdJ%2F1RKxW5YtdJP5n8m%2F%2Bx0O6YF8YpGFI67sb1%2BrhNcZbsicJkphPmtxJRNOTZ%2Fz7vSvin7E8TnhwayXHmkGJyxnt%2Ff5UvpF7KDWTHkeQSngtSRKA4kcCa85vomZjdJxHMJUsj%2FDFKyJVhzGkfB%2FzYC%2F59sSWFVuWyBkw3BR9NSKpLZ%2BT5EbBesIFkHZynnhfYK%2FWXaM01wFLLVK%2BbbIJtuWglnVLQIyX1P%2FUn2IPsR9P2RdAFE9A5CspAt73wCJzoSWh%2BRpaYe%2Ft0r%2BMK2D9a8oyMJyfz8kGOqUBvfq2JyguVYH55%2FWS3y32gyaI5x255OWH29FoONcJk4PTJoSeyOBSLMhHxKB1asqxkLZKix4ue07TfXBAsRK%2F58RhnATmsvBZ3nQlUTAGLhzrdaY3BggtmcrCvWSN5cJP7FHQje2vfHKb%2BrV4e6yPQzRWKXdqzf9UX16AlH7tAFceKKUqwcAMZHv%2FKB7NcqmyUJLrCNfinn4ZPu2rC22I55yA16Mc&X-Amz-Signature=d9b4c3e9b67db8a7592b367d1a0475a82170ee7c82064911bf8759ddd5cf5660&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

