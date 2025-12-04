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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C6Z3VLB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIF59Ccn2ijk3wqItdeaC3DyQ8rEs%2BwMq9Ihe29B7%2FykTAiEAug5DSOO2jL2OUHd7CAbvsBCsuMklEVWMXtMxB6Ly2wUq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDE%2Bnp%2FIYk8qKSJ81GSrcA9JxWkJJIkeV3obFT4fwiE%2FIB0qXc9c5xqvUjpx3P8tsv%2FdbKO8nSayhkYp%2Fy1xEaNoTR32N0TKJBZygzubVOoJG9ty4Veh7eH1%2BC9Su3PAmf5nANDZ0docx8bs8WDAA%2BQyHeBXsTqXmE1%2BcusbKpMqwNKHAiUXV1Ghb4zhObqKJPWEt6DH9WzL0C1IJhqN0Ho%2FJZ4oHFFTWUozE037y7fSbNOgSrtSIQH4U%2FdVVoIZcsL8%2BoS%2BPrwsX89hyzuxa6uHGdXm4Vtk2tP6I9iPpHc8X2RA61CAGLCVCmq4yJYnpcqjlU1KuBX398GnPh5Eoo8kANJ8l6c8C5og2u0URETaF708cPWVhToslsqVgRKWWsbP48Ax7byuLet8tLe8VN8X4c5jUQHodEpiPlMqsa2cclQPcK0W3p5vbSUQEUQaOdqSUtRO2CFwfWlsG7FyD0LzCQAR9ZNy7AAZDn0DjhFFVleDMCQERMj9Paif709d5DGEe%2FJFNF03ECkpcCSU9jjGl8hccaEUOdArC%2BoHaIs7LEiqdodyvwPUntxfymBmZppVbulX6SOuGpwc3%2FWeLaU0oUo%2BS7FSrv%2BH4Hg%2BBQrJ0HDF%2FTh3uZPZyCylDr4MoehRIMOPVHnOGOcIKMJ6QxMkGOqUBYAI%2BStmLrZkpS4fcaCu5oYTZsKOUnELkfY0vZ9srb8XIXW5rSNJiGpFfHr7%2FNPPNiJyjBglAXng%2F3IKSC7%2FowjwTp8HyE7e9i8nPnlK4hsOdWpcZRjD25OTdimXiGw1AiZNMTJN5bPX2xzGv2%2BbqyFmlYccRiAxkDncSG9K1ZAborbhTc5I7OvaDmA1SgSyWZpKj5YHDNBipUIFjJRpbpQbFGzww&X-Amz-Signature=c7026ca7cc4eb8211ddb1d6755ddcce2031334a3455cc67e9c4bf5b393e1581a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

