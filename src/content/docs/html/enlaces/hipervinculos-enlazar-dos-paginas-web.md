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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5SE3CJS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T104950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBuQcZ%2BcPJkHh7s1VxZRDBZEG7YEPI8OLY3gyIgJjYDWAiEAg6qn7bQwTBqGNZfEA9qZB2wPfgvalfeClIy8i7WKbmsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqkAOq3%2Fv7dPeUo1SrcA2ZCq14vAZfO2lvUL2NUlpC288l3mmWy20Zi4WLl3Y%2FDC9xNBYiMlHzzidhpwFa%2Fj8vPVfqeOrzPzSoA7pCiSybiNluJFz0zTw9wuY%2BqAyYzH%2F5TS56oWRR%2BKBcNt%2BXS0%2Br%2F2fica9o7qMuD%2FISN8dIatTgQQ3%2FFffNbYkKcf1Dh%2ByTu3i2GvRjpXmdc1deATfKE9YFw27LbM2MOCzcSe4Y16bvC%2FGgHO8fWfq%2FiPnEHRQnXIVv5tdwJyzMdUYJVAU%2FMfm0j%2FoTP%2FccckMjCJZK2JY22wtj4oBK2BtxbitnNhTbtkWy6E059UxlgFqgvpO0uRz2%2BWCzqufwlHiAh41YnvRGFLI1pThreW7Ql2k400iGKif4TQhWEqpHzwKr79wucmSqBPrVASKI%2BnFdY0LFutoNPG79zSK%2FTANOd5EfntrK7pPIS5f00lrF%2BjqZttkJ1svaEkkVbD32qfT3sNPkvrym%2BCE4JYYC4Frqtm4Ute6Uy%2FswXEF6p213xOzWAx9W0b9OAGqYyAM7oJsn8XYaeXLB2cDjcYa0ZxB%2FFVXiRQU%2BWx5eEeg%2BIME%2B9Qv2COdODF%2F0UkQq94w0ArFjAL4FEsdN%2Bqrk%2FBQh1PYH0c%2BxCR2WgKXbTA0khPPlZMJiZ1ckGOqUBYtpx1jei4fq9TnMcNc1y3djnM6MaIr8XMLdBj8q27AVioHaRzpvYHC2fYRMTeTDWZY7BdVz1lj1Sj0%2BcznIhArx7UFhZE8N2z1eZdLmOs8h57aBWk3dZo4IoEd%2BULNxJQmSDz4ys0ZwFInUfWAn7jkHVf0ymg%2Fwdas%2F%2F0M1mUBGTYEq2aF%2F%2Bmz7ZuxheDzIoDRqZ0rdxK3RWWznVLmRU0kAJ2RbL&X-Amz-Signature=9e3d6f7b404ad4dcd9e19ae6329b8fd27e77fa856b83823f2c6d53f60ca3a3cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

