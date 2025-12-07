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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW4BKJ3Y%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T150216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtHiYKnAShUVQ%2F%2F3sPPSjgCnmUm0iVZIRLPlZNRdZbhQIgau7SqUiu8v7UNazYDA%2B9lZ3%2F947LozUjZ4Kx2bT2uqsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0AxTqOtVdw99fNZyrcA5D2hQD94qY6vdFyoYwIraAM%2BL%2FmXXTY9oCW%2FC%2FoYFFBXywG%2BHuh1kHMJN0U8RqM5cwG8ySGtOzmGmG%2BmiQ4OM1lx%2FHZL9EKkRAiMDT8ZBgKX%2FWjuzS4qo4594lLqWGpHrdVGDNJpW4UtBjmoWcwnvVGbrkkef3Uv3uPfAoDqYRlY6Njh%2FR4EszpvunUSkxRKWNzUod75JDjNt41CHRvtxIzF3E21As3scBZW8yMdLpYuhAYOS%2Fwt4gG62h9SbGvxOLPcBKPl9lR9Xdich6AfAa7y5N9aRisoqMeBpzOJ4Xh7O8KUVl1IHzdN8GnN11r%2BKMgRPla8UA5SK%2BkhZv6CQSCsgk1DBgH7bxcggiFkFTZIjRU%2FPq8Au5Rf9uum%2BjR%2BJ2F2%2BWaPoCE2x6%2F6cxMt4y0Dki5zDshRdV2OiH1YmbPYiKsw0Q53Uds3dShbdoQLxJ1CW%2BHrTsgmWaU1kKmdGD2JZTrn3zyIs519%2FiVv7w8ioEIpvntUPjvPp0KMX1skBjKtdN8lhw5B0VvMLkXbWBn9I%2FJWZfCgSH0qBVyBrohtwHIfvj4xVC1edXinnkJ0Pvba0LKzYxjV%2FDrJ47dG5J%2BzoAC2BL8frCYlW7bW%2FGo8QpJg7l2P77VXxk0MJ%2BZ1ckGOqUBzEDbYy0YLAbwDk7Mz0t2A4CXNomZW7If2Lb2OWbsvV8OgYSHwP8ypCoX8YoeMHPneBDTHQmdQ2XshJofjmuDZvBrUAEXnkFGns5nym7rBw3FkNJR1Z5cCM06TiNGCoFyso%2FZN3PgkCw99a9DSLOjZHzT%2BdTtKWTEU%2BSukJNAe9gGcfdJ4ikKRkt%2FKUIcTkhEcAa7dcSBjgrR8rTbOKemxur5UkaX&X-Amz-Signature=7574a2a28faf468e530771812aead547a24cc8826176a0fa8c552ea42a9862df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

