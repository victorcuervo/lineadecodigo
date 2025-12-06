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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUFAJMYR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T003738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxQSzkAzF4fYA%2FmKLMSBr0hAkDZOQPMlOFg1pTOAjOrAiEA6q2QapNEDPAA%2FZc49DorTu0mJQslshDiK8AVzzqpCIoq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDHz1buRPKv67e07yiSrcA42d5tR00Pag0LzROaG9nQdTSf2R6SRW2n0r12%2BFBokdItlc5aGK%2FwDzkSVT45LcMstQaZkwVhClTMsegMcaGbCDYCIXbf81nA8gZZ%2Fgdg0WMsRXt8VqMBYC3NRCSTEglPo02RaAYsX3bbJ13QLBBS5gbbsxLtU%2BkwnSXkfpLBLrS5Kt5DBbnIlN%2BopYxB%2BfQgVqf3baCc%2FNsv9VmHZ%2BzWIqrPra2xI01pBt8ZsBwnqA3EOG3tFQdVarIIevns4XBHyCTS5w7IHbCejOJqzcIvJazZeYHoi0CWBcJAnFRRvc4yeaqTxEv4CQ4dvIJAVUoATOMbJYyhxTGjJs18Xu%2FKAjSgaf73pyNA%2FH8yeYwZFWvxW5gMJAOIM8hRB1El9DZCrl09C78a3Avuy2cmvyt%2FQsSmZXeICvEX5i2hZtEpi4QkJUeFSNbdYSEs0z4QYdG5pzVRNYaX85nYQk%2Btxn3vO6t5Z0t94a9i1O9FTzkvIBA7TP2IUODGfphbYCFTYluJa60wGpGgt441DvboJX2QxZ7iQfqWkMBlp%2B%2BbiTpYmb41JtXilc1DDXegFdufzq0ifkLEMiVkHuGY9KHwqnTgFnAWX6mavAuY45RiA55GfLFYFHZWw5bkMljvPiMN3ozckGOqUBzntbMW9XdyoGacxowwEaLjtc8M8WNt82HTuud9Zf%2Bvhs63XwNZ5MaoIQGxeJxv8OXPa57VsUQj80gjjHx6Ka3O3K5Ve8XuK1vzgf9KGz3hfbSSU9RwvaDd1MIyy68K%2F92Gd0AsSzcv0zlTCphkEvYGkqCavPdDmarf3Y6kR7dixXk9g9CTSLc0Z%2BcejEwpaipo7vTkrwnGrGjYJGSMguaYdo%2Bd88&X-Amz-Signature=0f611badac669dd39b99ee8674375c3d266981c730610e0ad806204f104dc13c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

