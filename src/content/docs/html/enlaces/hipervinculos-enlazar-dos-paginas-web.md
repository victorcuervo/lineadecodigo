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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N54WPLT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaHPB2cVxiNwnbAEz5DpMvE4jH6n3nO6%2BSQSvJkUfd7AiAOf43VhCqnKtoldIMIixqV52gK%2FwO9af2F%2Ffg6hcDmjCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHYuRj5IC1PvDM38NKtwDyu3kj0lX4fcZA%2B6%2FA31H7uICLurXaUf%2BIArEvk1TYmfUA7DwqrXPMONEjtukj5i74BKyPua2QJt0l9hTPUjSFV192HcuHApDe4uECQ6k%2FVm0vWCAoXSxqC8%2FYp6%2FPRzVhE3LiSpU2PVKjZ8NEhVyNj9id6EEIQIx62h2K9%2B%2Bm24UVomf7f4LsQgcafgRhhLp9qb3WwhmjjOdgFC9vObSHaKIoKWuu2pdz1m9X2HdgI%2FPstRuHhPZq3PQ2N9zmVn5Pgmp%2BG4VkKRonp001oYrM03v2eiGsmyKZTjxnO3TcjuYygcwty8aeA2VXE3AVUp%2B7lxxsxzfYchlCGMt0OfeXNRRBGex70pXheOQgeT%2FCgP40Btdxmn%2Fik7%2BQhj4KbNQXmMHLZ4BaaF1oB%2Bwm5aifLs9n9gxP4OBst0o4LyTEqrGusEP27927S%2FwZxV2mdtIKtp3n2G02oCqs21A%2Fd%2Bqr4FtUriGeL0WV21w2o%2BBOqZ2YZH7Dg9QsFqWbIIYruEI4iyT8GUAP5uxDFhFGWOT1eQ6DWfbOR%2FYN%2FKabkBn%2FslIUzDzDX%2FQ%2B51TuV9LXxLHXvcR8Zq2HsUA2pVkvs%2FdOq2ZYZSfvERflvz68Ow2ofpBF7mFtRCQPXCuaRgw5JTZyQY6pgHId2jrThdqjabm5l4Dcz7ZxgVHioaBqw6EGB7d6dG%2Fpefee%2BAgCF2k%2BydAMyARl0nw6OEfrSqJDQtQQz10%2Bz6DRWLOJUgbs4d3m3%2BYekwm7fUWxzcnQkmFeUPXF48v9P3UVntZLNFSm%2BQj43bog3LT4JQxl4kFu4dqhjitlfnR1b1SH9zJNlsTCaxJh0JxrFTgHqF1%2BTKsGNYbnYQp%2FGJ%2BaThTwWaS&X-Amz-Signature=24f4fefdf8c5952014c9a497e5f662d81d388596d042f4ff0d6022dd0f4bb504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

