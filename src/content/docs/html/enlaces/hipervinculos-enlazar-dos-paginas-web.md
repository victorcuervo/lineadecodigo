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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYGZUCFB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T233249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6Gmv5h8fvvE9bfB5R5sAFKOTo1TOCPdNF8fRaMeJPfAiEA%2FDMSoFYVSMUgvBRMFWPObVY3h%2B9LDM3pRwTCtMCqHxQqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7zsmywy0z9B3s1bSrcAxpCAR2jGB78RpGQYMGwFRfcGRMMHYDQadrqrL%2B0P0kud7QVg%2Bgv%2BT%2Bwds%2BSzQIuZzup9BvFmpQkjve3cL9FSY8jtWh%2FfLTfvO7BpaQX9s0Gg4ngrCziOt%2FtDkQK7x%2FVKUgmG2KTFcj2sr%2FcsQTicWtMo4Jq7iWiKmfA3n8eluKhiKmReOj9mijx2ntDrPkZU%2FurF6xEKOt%2F8zW4Je1Lvo5j2mM2AgD7465D4lgeEmLbNMPG3NZ6cQPMOR1WGsrktRmeoOJ%2BaYQwOc99eyu5U2dlBFtCQ2pzYLaN720c8nxzMZ5ytGvu81tSSWrRr7Uxmt7NqRZNK8MLs4KycCQFuNJoFqWzzYynJYGaA4u1n%2B11oRh3nPy3mIGx7kpqWaqTJhpV%2BEcYKWxcxf3ddDwcdrARaB%2Fk12aMaX4gxmrh1fQ4SW%2FHyH18jsOEgbWbwuCmbR8jv%2FsRK%2FQmNxY03PibYzQ3lpGutjZ6A0gICKJXNi%2FZuYCmCZHBkscv4fwOfNaWxSWOeSq07jzN6b1anmTZjTJ2Wi5MGklf51v60GuOMZ8zP0kaXkFz6mbVXWYGanmZZt9%2FkbaXiwERlxBx0%2FFLH3KWStJ4y0wL6fivBI64xJqL0lcA%2FZJD1jbU31tWMLCF2MkGOqUBA0V4FO2JwoLfD1M3kiZKLIGdTsaWX6sWWz%2FElUPNGJwfQOP5hBTLU8mQ1l0Egyis%2FNVkk%2BRtBkjpId3Oi56RmpCYKT9JWrMfMP0QazdJVLjItgwTz8Ss7fa6kKKMCJFGoc0swuHaHOyivAJj5NsMvhw6xJqge1R7BH4xTAUUvKeOn7TTediPrano2xlbAGzFZ1CuivkqPRT%2FKAXSYSOy9bYMHc3i&X-Amz-Signature=99dceed9e5be315f4a07a5ec63bda33e2d83828d1db3ace49948955d2842e3e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

