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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMXQCQ6V%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T111257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGd5V%2FXxYGXP4%2BkrO4UykK%2BWHvn%2FI0VIvy09GGe%2F36BQAiEAo6WSYNlgDkQO2fAmVDdG0T5HPe%2BG2F6%2Fc6YSsY2j950qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeSSzcyjgn%2FNy%2FOvyrcA5srIIdJeYz75GzaOaZGDheXnUQoHkMgrT5et0%2F%2FcgBt7puHebBDv5HKmRioaZX4JfsN37dSsoFxmDGa7fezwGD1rx53%2FHw3JnHhskydDNoxH5LJHlvw76mVVdqje6P%2BqNH2Yyo8KB798oHecSinxEmhvlHKj12Vu%2Frv7nuFNlJZw0goQhulOn%2BsKPmB6GMjJYdga1uL3j3v0j%2Fh1%2FqLJIhUuVnYIdjQRtFTCvzAbn8zwgSALMgPvYCHW8j3Ejaw4s%2BMG6%2B7KlpoyYqLwC6mwkaFC%2BQOIjVhfb3djCCO7TOUV0X64ajp%2FOewskoYw6sK96BP2JNrODHLfYGMM%2Fh5ITwe5CGn9AUycWoguqmF%2FE0XZe8nhtx7okUYvu9rLCAof5DbIYiufj6XMMGWDpqYwXzuSUfbR5fcNNq%2B7IzTZloKS6pdNNgNKdY3%2BwpX6eELHMd30WvbuIsVFF4pv2I3CHibIjua19yzYMm5cIG6%2Br2vm%2Fg4T3uFmkM%2Bfprm1ZpGQNtLLHm2iFQZR%2B450qIyJo2vs4akjdKCJDSfTAAfSsKyr6VmrJp5s7%2FZhSumabAhXNo%2Bw6Dy%2F96DYyM%2Bdukj53UEkFSzbLzshM3D5Ht644qiB%2FZRuXpCCC8oO088MKiZ1ckGOqUBhFD93HFBnP2GU3HzsXRkHuY%2Fbbhn66qycdP4hxw%2BZclw7cqqpiH%2BUP9JvBwcFKxXcVdS5j68IR6tBXq53BBuet1GsYZMOy40UQKjPdEvdSK%2BckpmIvNe%2B1kQigIoYLlyXtmaOnmojczsflam1RgBE1u0%2FOOVD15tY6vHNsGpDnKly4h8PzlQMwmAqzqxbV0dNCNccY%2B48sTzLArSclR8m%2BzwnrtC&X-Amz-Signature=d37b78bb7bbb53dd18767b0b992c3eac533088ad9d29576e95933eb333789044&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

