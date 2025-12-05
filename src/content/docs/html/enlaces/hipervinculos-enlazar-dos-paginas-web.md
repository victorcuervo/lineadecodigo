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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675FOZ4WI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T160326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE91JGso3Up5Ov%2FqmOrqGaiv5U5HZwa1%2FtdwTZ%2FbqvGDAiEAhKbgGvuzHRZieIrDW8GmqfcA0CPpx4OLNhrTfG%2FuY1sq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDI4TXCl0qgMalQfyYyrcA%2FibFl3vJkmdi%2Bnfe8fE0cRDPbk7RA6DKAX6u0ALTi2DKIZxzzr1gMj7tWJbEG1et2YI1Kqea1SEc136Le5rhFxO6H6LqQ%2F8QyoEOtsxDQkWcOGVkAR1ZYlqEdxNbwsYRHU81PbCfSA19xmwE4%2BdY%2Fimy51J8mqc7S%2F5ruLyJh1PpyCkG92c5z5ow6iJ89fGjgjBrP29BDg%2FuJW5oCaO4gvnp16964ItvfCr8221QZx3KNtXJymP0LJHxA7UdeMUyG8q722L6LVpMGDoTW7EaRFV5bexNEYLP%2FU0RRdJuRNiHcOZML8oprVzPX6afdgjdt2Ju3aNPAwZFfppXMNYSMxFDb%2Fhwy3bm%2FrnRHvgoh7BHb8i59Y4b1e6avgY8hjrQgs9mB3qWMp0XgcNqgyGr73%2BGGV5qw6FtrbcfQkMs9Lznu7Q94Bc0rrmmrkJduKKn27p4YoGQ4v6uZzCSa90ya7bOt%2FjiLpVrwaw95kidt9NnBo3kAOKBdeAgPTd8Y0KfP%2FtDgnYDS6IhkCdXx%2BuMbzuobjMd5dUhd%2BKJV5caTuro3QPczAAI4I5qNk4oBb7Pr15qez%2BkfeSyGE%2BsmOnm04MNBPUUx%2FGmlam1Aj4aUF2kYaOQ77UHwVAUn3kMPrMy8kGOqUBhmc36It%2FRUwpPt8JcK1U9iBPRGdIhW1tZ1y4Rt8m2vxC4xX1jzmn%2BaJu%2BgKaZjI8MO2OGYWehQZkq4%2BDoA0f%2BaN8toI90Es8tX2CW1m0r0flvU6RzV%2BX%2FiQV39mlv%2FXtwqI8Rlk7AgJAoUoyBFCwtIkmNjNGLAtzbW%2BcjbxO%2F3ME3kgFJz006Ow6%2B41%2FkmWjfjnoFsyB14RmzUrCsSjJGQ7SnZly&X-Amz-Signature=c2c5ccd7a452936376281390b0556c1b16491e9be6016fad0fc0bb67659046f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

