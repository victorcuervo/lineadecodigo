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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBKIR2OM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T180804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0csyAULK2KgwqlR3BmVCJoWczkSsoc8uZ03iqsJa2%2FwIhAO%2B5H5WYOp%2BEQZST1QjppO8NbTVx%2FXU%2BZUBiNpsLlqltKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxI%2BOVCn6Dr%2BuanEi8q3AP64ZfQxdRO3C9lHgxM6BSofRXr1Ng26rsvbYolxOiM06Fzoi4M9u74oGrChW%2B3dKx807JFt1%2FWKMoBw%2FtM89m%2FEekal0m2BUFziacHNJRmiCvR%2F%2BTfuoCBBAfyu%2BaV0SUlVlT3nCCpvSEPV48MlbPoHn%2Fpto%2Byv2xdteZU1hIbRIqKYRWy6e%2FTNeR%2F8Db5UfEQHPW6JQTcIyB7WBFdonk8u%2BC76wdhrpZyUaO4LAwveIA46o1ZdY6wl%2BO8pVRAWQF9qJEeau3QFk%2FQh28Qv%2Bgyi6W0A6nJLT0Tr9cAwaYHr9uc2fKNrQtfCzWdRkDfIKhekM2tuGtORt3c9AQAM9oblWZS%2Br0MmUTI3HHhKqYsWjxLahsKFM%2BvvxPzRqtVEqAHn5n078uJ6T0uiv%2FdrCdhw4x3ZXP9ocsNpn0trLu2uNzuBIHV%2FyrT2fil5kQxSUnXp38TzlFiHaK%2BEI5dnYsfKWB3e8eiDmosHw2WAOfXZL2HgM1eDVvW9JBCxMV%2BVSVHV9egCVu0eRMmX125EHdjVokh4EUSqMqikCWHKZOoeRC2Mg3dBAEYNW4MySvH4q5%2F4PZQ3tEnTpS7TunUrusf2ETcaNAt7Hvo%2Bt2Vz8hp74rrknuY14j%2FB8yVmzCvveHJBjqkAfMH7I3h3XXMajt3DVkn3txatGIETNIrJdXbQ489OWRtfOHWzwBMafwvGoB3mIjCpSApMWDGfu6mpOx%2BpiBbA%2B0SzRCkc5v8L%2BvVQVYTmbmna5M8Q3VPsXEv1NzyUhR3Uh1jJ4hQW8CPGHDRyjLj5LD3SYF15iloqd%2B03Xf90D%2BCN0iwl1yW33Qq2TDhm5p6u9bZvc4NaFb5Dy1Hc%2Fq4f7U1Hfwy&X-Amz-Signature=772a92637ad3e8743e33ba88c18452503acec9476e1c74f4854edcb82dd2e7de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

