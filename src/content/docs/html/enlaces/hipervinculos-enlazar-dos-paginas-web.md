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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QXJBFTF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T023445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEj8DaOjAX4lLRSwLp6dTIgGPDcknj8xe%2BiXKSVeGILnAiEA11oEUyF14LxkLq6q19Ihive1zVJ2BqBVhbv7PR83WMcq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDOSn5ldAvSBG3A4M7CrcA179xcls0YcBiBZ%2FMbNmuH4HcJdbH%2BzQ9EatJ5ikUwAXbXA1KNIZZl%2Fah6iWhem6fOE5G6Jrx2mqCmpvKf4hewhYXKO0kD5QJcb%2BaaO4y5w9N80AVzcuGozn3C5jo9Dab3NRAT1mYm9gkDCBU9UBxsY7IWwR5Soi%2FqzrnXjMMSYwdNjEy0BDt9q8fojK5jCdCx%2Bkvb9F19fIj5bEZCl2pDKKYH15KYYx%2B9hWXsqGaO3FF5jcyXV%2BC22XQ%2BNjQtPF99k6bR2upBFGd7jyxYwERjIqw1OW%2FSHqEOGnk9KqMG3vJxtRuscD511lO4d3vfhHh1g3iGbWDhzME6nZYAwKzHpaYDOkeFMjoGjp1bAmRVjDO%2BkHsf4F5cWWppZ%2F%2FHHmZ1dkoYJE9fwbuxtIeSQH462gnjzA9GNGQUT9TZZLZQo%2FfiV9mdQUze4qQijuzfl5C2Z%2F6FTrWtYSA9keXPdCffWRLeNjtLqUaGKSRMpT7WXISFvWU44PomVUjXJbdgSdRhIEfHnF%2FnNrO3ongSsu0jDr%2FVTssQR5pKDoicPtnYEWeLCNhMKV4SlgYmlqPAY72aaVLTqU5iq92FsKAnPqiZv9ODmYy5OPVNvyCuQE1SS3yZ1Vg3OVNhjkoS%2FFMMCnzskGOqUBhkWl15O%2BIyImdC%2FeYu2rZQUfwWlIquqrzStlIVQLQuokO1zS9Gmm80Yu8ia9pfRcNE6ScS8VVSGOEbiA%2FrrtINwm%2FLaAYMmI%2B5UgdcxB%2BYQEWRSq3a399Fs93QKJ303V%2BWSIAi4nUB2M7RNJn8JnKKXFlJJx%2BZlYpb6fixkFIYOJsr6aWwzdvS90xeCYsPPSd8Nd56uh3L6%2FM2O9eaZUXc18hODD&X-Amz-Signature=49584ad3b6398f099ff74cbdf3f04a65a78f2495de21605eda99b682a84ef514&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

