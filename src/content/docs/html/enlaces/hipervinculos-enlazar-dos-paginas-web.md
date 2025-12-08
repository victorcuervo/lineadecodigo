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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVLNJADI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T003858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEAcyOWhowNjD7Xo902MiKeVCVkveLVmKADA1n8y0%2FaAiEAjTSt5WkntDMobeCUmV3nm1AwpG%2B%2B48Ha5qpzF%2FUeNNoqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPepnF%2BhVUt%2B36pTyyrcA6U9sLSFsU9AfxrcFVbzrmooXy%2FSzfUP817YFVSK8uM4wZgk8x5nsJngPOkUvQXZmw%2BGkjtzPxDaICLOlOcoUSu%2FjD9RIu4RgAB09%2BE3NrbQSh6B8saZUQ64rLc5wagnlkzIR0jpAmVm9PhmVD9dr7eMzXN76vvVHHbjauKq3XxJv7ds8Wij0%2ButhWZy8qlzgRy%2BsAqKOpwVQiNF1mOS1MuPLSUsCULT1LXa9nM9wTPwFMu2zOg1B46Gqlb1Jaa5oUj7xxM8uid07Y%2F%2BvWhPRLyjXzJSou%2BSQ9eSD8%2Ft341TuzhoXuAM53HpgGeZTTcJItK1dvKxyKJD%2B21prgS1GPqP4u7UJysuKpJzHwgtLjUhgr0r3hoVVC4sfTYStJ50Us0FUtNwERxM3CBUvEDG%2FuiyXx77KRYPavG2RalpFwBcadDqm1sLl9wsMdlNFzP72T3wzNSYls%2BrMxZF%2BSLo4HdGVpWDAcR6SitLKRASWnJAfvjnievfs9Q2LTW2CIOT5p2Q1v7Qp3vdLWw0Q4RN55oP5H9JaLlcsQBUASqpniyh4QA25RJegNl%2BXmpmQfh8uRiopJdzNq0K%2FboJ7nw0aSmCQBrq%2Bhu3nwxr2veHm2JX1dZMBGmr0p6mqL4YMJqh2MkGOqUBqpMuCm8790lg2vkdGqRTUAPJKq1kZhMMw6rk3%2F8wwv5usPgft4CYOmclSSc520zqeQl4cQbj%2FvtZS19LqcZnNEtRAdAtRd%2BpzSMEEG4q1z%2Bcfb5RHqS64S033W0gzCS95Z1ZKUNDHq7R75hKrIHRdBtVNP0JQslLg5sXeMU40aydJbWXvKc0K3AbtUQbGizn3XIVVIHFk38VCPuV4pOim3stJxD%2F&X-Amz-Signature=ecbfd65b8dde611839ef9e6143e8e0a28009b0ed71a952f835aac996ca2bd506&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

