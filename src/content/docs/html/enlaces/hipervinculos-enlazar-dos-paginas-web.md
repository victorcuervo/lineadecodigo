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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUAVAQKU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T172929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlL4qoIgC4sXLOoIOUhKl9bCDF2BtzvUvykbeiWuNFWAiEAv3Jl32o%2BIgX4SKPYtcL%2FgMn0R3pd85qjh1UST0jU0n8q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDCr6D%2FQG83E3BcA2dCrcA9NjvSGC4arXp97lh1X1casaea8R4gCyux0CI99fsBrWKCTDNSWbksqYbsiqnsM%2FSoNv%2FSHb%2FdWEcuj1%2FQnA42H3Pvx%2FEe0dMkqmT25JWog86hEBvD8Cukn5f%2B0X4Q1HNgH%2BbqNP%2FCHDUK%2FIlUapqhx8Ix8QjKrKT0MIg2aYI%2F7dPgFtctUqfhe%2FoBye%2BgKRkvq6a7eZ5Wnn15AwqjjYoY2NuDOZzcOo6EKpouR8a4u%2BX6p3VvebfgS1gnZfgnHfPvCWRppNaMA62xHzj%2FcC%2FJyc%2BeKtL4ExNbsjF7z73mX5YJTRa024TzpauZQvc4Lb95kqzZtJdQLjHAPhSmn05OhfPV8hJ8ykxtHym6UigHoMEuttqcqIkxodfqxcg49AKTay9Hprh20FUgLCkGSMnmTzUg5csvnXPhhc3%2B6G%2BVp5EbwFyEQUwk68kxSboi8g0AgHLcVPCnB3FbTMkQ6XzVcr2ZYR2fzmovi%2FRWZDkWmvZSjxq1V%2FUBjjiAaeouQsx9nqbk%2B9rs0HjxulJgDBGd6Q8qwnGAqh22qkUlwhyzhzF6WG%2BpFfIozUlOmrsG7Mx9nQvNGjh8kYBBenFZOxZ0lfHgIcs9YqLkUaPJgWbCaeZQKYkSW4azr50Jf4MOT0y8kGOqUBwmYbm06g%2B6hE61HSsVCt%2BXr9m7%2Bah9JgCKazbBBzLZXnkdgN0AIrVfJu%2BBGErNdD75%2F%2BRe5PkMNhnb91dqqA6rNGlTO9ZGI5I6YrdPL68PwcVfP0xcl8qYR%2B9Mjk2LgbIxXOeov9KOwnaOp1BPWXNf2bA4vLrAQ4pmMcn6Oy70H14DcLbOs8AkInmazzScKg4Rif5D71BTr%2FoeRbG%2FCncWwp0%2B2x&X-Amz-Signature=ed618fc68ddda738b3285230b98b84c5b77b5a1eb5e1ed904ea8d740a4125860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

