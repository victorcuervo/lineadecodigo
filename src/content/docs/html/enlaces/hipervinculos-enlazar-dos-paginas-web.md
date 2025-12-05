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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2HHIU74%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T010048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh72TIYASyk2hRA%2BKTxEDdsUuJO%2BOKFTPKxRICLyZGjwIgP4HkfU4ecZabLA9Df2iQUl5ryciqgrlifKhyByyUhycq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDHCR9rYpJxLTPebTGSrcA4tk7YJhDGVVORFDPIQvllfvqHy2Jtr0DVyjGiAF%2FHA%2BSpLx1tvxa9%2FCgBbJXiKL52gnjQ58a7wcTNP9vVspdU7kieZiddJc09F8oWeFzSd8%2FWAqio8yliUNnLoDlVaAfYJudwxqb2cK4QBcJ0%2Bh6ydFgR04o823eSd%2Bh2Cm7bsjyFUgB8KOxXqcafM1nks3MxBgb9enDmHzKy2UjCsu2y59GVT1VXVdrYYMU%2FNbSPiuiLukB2mdrR6%2FzZnLwiQ2XGBe%2FWzoBjO3C3IYSEggk5%2BAYDzmMRv3uOz33YxXz2hOQlZ%2FHZvyB9NwFUg2qqnnO0Gmcs15OPrMwlifHDGMAFGN2PUDDWbJgbEjDWhZPGSJ991Gc2z0sPDgwjbbUitvoh5TYVlOBxSSM4EwepVRoNKsOMJr2VId3bKtBc7tDqvlWbERpqCnsRwjhUX6qm0vrLYYABBS8gKeUhFp7N6qO7%2FvSbSWGP2obeyFdXk4fvGYNVppARlGSjE33zhmOUlLxk%2Bja93Zzlr6yseK0LdYZmyKDLJJId27XLF4EHglUh6D9rSnDGQIKMPTx1LX9crd%2FvAU6P2Zz%2F2zsM3cn00HGWO97bmsIDFiSV2Hvi03Fozshsphe%2F7DuzHhdXxDMOKMyMkGOqUBSn0Asqo5lShhx3uvDRe4ixK94I2QzpXkYeV80%2BMpXLpU7zBsNkamDk4WytRd0NgruzoXIMK3OKPOS0Zxkj6alw4saomX9X%2BcIK%2BcWlftuKc5nQIgc4N%2FJ1bl1nkid1oDhVjV1zf11%2Fcxl%2Fj56jZDv2HUHDiNDYwv%2Fji1GEcxVItuA7Pu%2FjcY4KYpp9aGvEUnogN6n2eDiTR3xmdfTzuTBtS6owi2&X-Amz-Signature=7667ea52a7e2c0487981d3357160bfe79045567b25a09a61535ec059d7f1cfdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

