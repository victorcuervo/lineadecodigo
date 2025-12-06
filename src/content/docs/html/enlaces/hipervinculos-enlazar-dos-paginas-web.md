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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U35X3ZI7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T043214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDenqpyZl3buADbjeRXGQv9rmsNrqagtkJvavTH2tTjbwIgZvAf01Rqar216jDUEe7jlaOVsTYk%2BgRPUJtIDdFcYpEq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDOcaNBEvT%2B9c39AIKSrcA%2BRvUj4yc57OyXgMf94ykrerAVTne0VJqmjnOqUsWovPUNRtahCnnA2Gppqa9AwtohCpcfnmjnRuyNoJ%2F43MFLmmCPNQNvlnzP4ZGkgcCId6xHxccOfkwAVsSfYJOc8awqtwsDOXI4zQJMUYiOpLK2Y3azjZeenlCsRkMjt0VGEZutrVCuo8owMRTIPJ0F1NrAagXzY7iHcW%2BMVi8XKKjsOYmBImwQQ1uH%2FW1Bh0Qr1j3oFvky7pi1RmMndCI4SdeiPGv4GnybjjVP%2FqWgjBZc7XP%2Ftj27ibSjP98DRMyMzHuaD6%2By8c9C2tLuaS5NOvZfaZsMuFhXMGcjEcvFrU2tjpAA%2FyFUCtpza7v8ZtZ1b71rE3F0%2BQL1azsWLL160qNANS1HLRscbmtBBhl%2B5lP%2Fr0m3EysZtsQ4bSGCm9CKr6FQWV01%2FvMrHy4V%2FVjkwkpFBOnIKs8ymOvt1hyC8HTUCQljKUUPRpvciAILP3O8HLR8UUwMpz6bMBgI3OIY65ksioovFcf7PZLx9FT6WQ%2FLL9HGJ%2BZb6hkFRg2WooOgCFcaInR7MmR7hffSRtx0VjZrZ%2BQA%2B%2BgqYBndB%2Bnc1ZKOchiFUx1S19T%2BWXwsGz52y0mm5%2BTSPr4rFu%2F1OSMOrdzskGOqUBAH0XrtGYYinXiPeRdyx8apVOLeMaG%2ByXkkW3Dz6Sfrv2NVVnYNOgq4Fyac%2BW98S7IMhEibqht8nYkDnKUKRdJfaLT0V%2FJJVRSTjClmMsYogc%2FlmRpq37p6DpHhlFN9fm2ciiz03w4brs1f5iTMdm%2B9j4cyeRZBEXdDcGgUlgdquUA3JahHQgu3fsfq8aeRzeLSzRQVu1pdqBfr9IG0qMVWiGgEBp&X-Amz-Signature=c5350cdb31771ae600302bfdb1f53a3ce4e38a768b03f89730167c9177ad4505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

