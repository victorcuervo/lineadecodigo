---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WLTCDGF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T190756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4bNZ%2FuzkPxOgY3jG0yW1ApvokTws4CHqkK4Y24ColIAiEAu8t0rHBohWb%2FSNsqNc3KbSPonp5HfK1XsU%2FWTYhxfL0qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOak6DuPgLe74Wm4ircA6DPZqYMmpswc0gxTr3DShb46ADpgSx4es87EyW49CXZxQJlRUlKP3gNrol9ocLTgOcXO95DfIm%2FM2xzAybhyu9hu9sqWMbhKNZhTzX137kwGCk47ZjXJdkvbtiZpQ90PbIPQ0iLMyzJkw4XP09qdLY3UIhTHieRCIANUq2L7Je6PFng6WZ05nX4GS4NhCPAGdKJ%2Buj7Th1uj7LmHyVJDuxnvrKX7N5sl%2B4BpLIANxKuWrp%2FEwSNGKhVjn4HFOgPHixhTLZR75DNUzmXS7Qb2XwlIS1%2FNuf4OeYsLZXtU0F6A0FzpBmLBu6lTmtydT7GMq2TuNLhzZap4Uo%2FIC6VKS%2FYTPjK0GTpccyd3Ke3STYwXBdhhkz6y9nb3w1TfmLMTMln3SQ3ZgXbmV0OosXcUTOCKYatuOSzloOZUlZsF%2FxGthCx1qyXvHfL8b%2BM8aiUTlknRq0W7iE9K0KFAXO9JZ%2FxDbKSJJ%2FDDkseSLro161S1M4Syk56XYL8Ri4l047FNnhDNiQTgx5GVCFigL8URyvordP%2Fw5C9qqkLW5blYPpGIS0%2Fm4e910iHXoHJunw3TAp71zutEmSbxSAr9G%2Fq%2B73t3NiyOG59oAutP2tIGxJ4M0FMCGFGxvBNNYP5MMHf4ckGOqUBnLpPd2fA2%2FYEH%2FMPM3rnCMIBtrbKfTfzGF0ICbX93Sz5h6jML%2Ftp2DZHfhnMudoiYdk7NO48JgdJHntmCA3SMV3LYVSANsooF2KGL3Tj1j8uS6KHUMB1z1Fmavd1ymv3ASyNblJGKqXdBERORLvJ14bMHB4XEzPV7jVT92PWsi1GPzvYYC3TrFjq2tBuBOyaqZJt%2FLX5vK%2BySnlrashkVblsHHst&X-Amz-Signature=3d52e2d85d1dcf1d49390d29c5f3626b4ff7835ce90f9313b296799ba3dab333&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

