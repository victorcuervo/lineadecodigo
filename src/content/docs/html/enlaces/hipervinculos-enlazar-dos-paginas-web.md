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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHTNZNCN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T183333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKEFRgZcQoimduu6QiN7Yw0zMOcAEZLoicOa4CgMVzBAIgK5TfBYlUjg5eGDxidJ0ZooskonxzUR5Y5cRdsWy6ogsq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDKAFVgPvpuDenxeDeyrcAx%2BdEw%2Fv793wYIyyEfg3zfngGBQV1zMNZyRGCvXHO3DA0P0bCOwNk8AnzWDYLWAq%2Fi8i2mzm%2FUsKHhnCUhLj7gGhZ%2Bm%2BqLkXA78DI%2BYw23ST2IsHuvy6Iwu3jXWBzgXl5OrSCuMDwDL7ZHDgk%2Fei1sNn4jHsLVLiXA2GBQaXlecswZ9l8qqHRgVO1kyuvXpsO7qck9IzOMbYHyp2mjgXFkOWIFrm%2FzoJGD4lGxcJlcbj1uucZd9o2H2PGFKO4bAydL%2FW5Hea7OS5NrQc2urdeI0V6GnZqgSQoaX57d%2BnJ3agYlmd3su%2FZe1pR81Z4pEHQsRXHw60g2o%2FwRIj2u89MaIbH8LoK9MD7ql16ToL7rY%2B4GCsr68hY1cdL%2BPC44EshKV8a09igwu5FaCjQ9K%2Fy8n22oGSq0d8l6U%2FMVbA%2BUWc3m%2FIOJk%2FzZuL0fqdhi8MCkGy2FbvOC6y3aT2eTy7cE%2F5%2F44jjBFOSAAYtqa1IZbewEb%2BZZCJjxMWYFk8bZehdatef2pVjlgDWiZNoJoX%2BEi09GS1x5QoajVxEgRCuav8sH%2BxJZ7zLAvlu0WzYajOAVbChyYbRXwbmbsMceLY8YfBchsaJziuwNMnPxL6ysjwp7vH2WyWfW1E9aUjMJDsy8kGOqUBZuHYGRcRNw3CsxxXiIdGCF4xswHJgwziI9wBq3PddVhAwl17xA04yG1DiShqkf0AxP04FEEtgqNj%2FVwBls1bPtHangJ7m4ScwYTa2JEL20pPCRevxcDZsNMNW0cba1%2FWNkFAuUnk03yv2g3VmSr6s0cNJJpiA2Welt9f9x1TKBQsUJhKHxnVzTnMjNa7Oh7qQ%2BWgayLk0Pmhi0bCtT1GqobbPaiQ&X-Amz-Signature=465884ea7b69d4f5b5ace6e17877d263bf15a0e2d97e993ceabb7c9336c4934d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

