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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LK7FMAW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T202300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJg50QyiFbKVo06LBhvnBtBGzJPH8miIGZsq4tpBbDyAiEAgsXS%2B4QgHJCDWpJIr4qxjH6rC7%2BX9qMI6%2BQ3cvGMOtkqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFY2ws9wThraCPdprSrcA6mIbxFP5T0j1DPiDmTaB0H9Am1k%2Fx0tC3%2Fu48WpCisXJ8Ku8emvm0fJI6FbgxxJ8XWGT7%2FrsWAwh%2BGszlKx8YJcwMz4ACv5se22mJYWxIREZ2ktpcd5yv7dPjUBXJj756aEBP2RhcOuktjdiDZcMGmqk4psVusozHUI8jmCRWPT8SZkc%2Beu4fBTxZbDd1u8tiaccAqFutWxOE9%2FaYuHBgUZa7LIzYlXysjohVJYkdv6B%2FC8WNseabQxOPwpZVc8SnMaKSok6L8vQDaWwbZxnYI6gOVZBMaDhFpVtBugo%2F0qp3%2FuO0m3vxu6gCEtzr78PqQ2wmzqPfp6LEcxgmaZgeMB%2B9zi7OSLqIbPiUW0xdV5ZxkEe3B3ooHKwwZr96aCQ5yv4wrfyBmHLB6e58QsAJl26IrWtOP%2BxkupQciWTvIA2VoyFnpzFtj9m7PGC5%2FvF4G3k4%2Bh%2B6%2BkBp0AWvYrB1Ax93p%2FqdoslWYgm2UiIvFwpfqiTWlEdS5%2FL83o3G28dTwAdV7ydsB77NH6Ut4cZX%2Bjpp8vDye%2FN3oYVUrJNLXp4OSKy5xcQJmGfuTt%2F0izQQgXsv3jpKCGgZbTxIfFIYWySru88fPFBgazE0Y1c4z2WYFQWZiaIRLZz3fCMILd3MkGOqUBRc%2BBshjzJCqMugx4EMd%2BijKoAufTdUlOd2Eq2Y%2BuCFeq7ATGmXUfBWwQ2nHLZwtvE4oFCJVXL4ehXL%2FK93g2n%2FKouPSzSlV8XVKihzJHWx7j9kW9jCKDBHYfNcYwqWBPJHJvUSuZxwflxSmuJXfnAXTusVkfj9rvI2k39q8bSDeLiXU02XxacM%2F0N5EtknQfUca5SO73iI%2F%2BAbY0XZ9RIxc7dktU&X-Amz-Signature=89ec75582490db14d6bf635d4db111395d7e3004e1d54b9213527a095d8e8ca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

