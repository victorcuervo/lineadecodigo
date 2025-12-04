---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWDAGRZK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIATyyKIJY2X6WoYwfEQetUWtslPuAaQ3%2FAzQSMGw8K27AiEA1nmETgYKybc%2FTcjgByEkyDiSlS%2FkqVE0DqEah9dUvFwq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDPLLF%2FcA8UlniypFPircAxgyqNP%2BB89zXWFRc3ZaaeZybKEv4v0hNNPPmcgKOmZggYga8mzdZ5juHjt5l1N66ZBaipL3EH9586G7p17Eb6Yqlf7LIQcJbb2d0RMteuIB7Y85qP061gjAB8ps2EmAbDnNIQAupAFfgH6%2FnC0tQZ4Hju3LM7x%2BOPK3G%2FwXnbBnTHl%2FJFM0CZmm8VulGo7znEB2XXYN5BFdobSuS0cbDTPCv5CkTzG06gjpPUtCmpAnzXFpsD%2BPKWJFGbEO%2FfjqMSo60EOP4T8aKya9lhZYlZWpTzlWoQLcqasGcs8wdcMhg2MmApaWQ2mozMAb29PDeA51yoY7NGy2xd81nvcgb8YEEt9AskZ5Ydcfd2V%2FKs%2Bb4E4LTyaw1vizGMSx%2Fx8T0rJ6f3HWcOv6%2FePXB%2FNGsT%2FyBK%2F72Gdp5Sg9HhJQlk2B9g0Kz0tGHcdSNGbAY74RMdRDYPR4xW3aJO1%2BEkblHY95iDyrMnpPeG2M34vl4Is5%2BZpRFwyryi09AA60NRPMYdqNKxT7l5hvzueanFBCg5%2FnjdGH9GWii5VODUSdRHeN7007e0BDQ9%2BwaXCnIiCnYDzZTjlC2imtN0PmFRXBEe3JfYQjHniNca80Doz0%2Fw1YoLdxcbcdKkAGtVedMLXzw8kGOqUBSIxx2LJ4%2FZRjp4hOH3NHy7zHlYgTKNzEgOwF7TvTPzYmCCYpfrijAytnPMm5fpPomCAR7cezAG2MYr39aPNTbs4lHpe71WWR2TK6MSDt%2FC5CGQbq%2FXfyyOcRmV%2FlELyTGOw7%2Fwl6WIhaORydc9PkjB7iKOolX0GhRnHc%2FoV00hIZkGQ05x5GutD68hjDckMNlZxuKGfbiYLb6ONxwpAhlupCDDEC&X-Amz-Signature=cc001ce4e405d64cfbe50fb5aac24ddba214c473795ba00d2080d6e4feaa9444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

