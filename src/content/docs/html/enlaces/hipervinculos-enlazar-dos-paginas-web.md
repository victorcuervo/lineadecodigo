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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MOTX23R%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T072607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfAlTI9mlMjM9oEQi9wCkdXhoy5L4PGOG67rOHhUgN%2FAiEA3SiHYCvTWJ5Zig%2Bv3CdsDGyfkuRxVfa326b%2FdAWjtioqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0MbWerxqqnDKwNICrcA4TMUi5sp3PRBEEHewIFl5HJ4IpFjF%2BQEArH5bni%2B95Dv%2FbetP8%2FzZ3avYvNr4Ql0VHHFsH8gczmrn4%2F6WyxK7%2FdAfrFoMv%2FXTB8I9ZOWnMznyASQrGabt92mqmBMsTi%2BP4O0cg6gPsAEGBYxGoEgeQjQGxMITLDwgHeS4xky%2Bhmzo0%2BkIiJ%2Bt%2FxAy%2B8gqKQvMQuNh1pYPdPWjNuL4UwtC14rknzEu3LjqEggwBpmITZAEW9l5fjHTE%2FI6VsEkSbkjO8GPkTMn%2FRrRzdM64jHnwJK04zUH5mPx92mGeVCWO2xuQbSV0RdSVE0NWnTZHDjjgBk06mAs87UXGiV1Dl1v9%2FOQG48fQyl77SNayokMlqte5pyZl6ztTqnJIxbow7HioaUFA7I5%2FEnHtOaaZ6HJh67EUXRsUKXfGCaPerx8flrBVf%2FmG9rioTHwXp17bAj5Ab8BPbFbkOOF%2FnQ4h0evDER3taKyrH1n1FP1FLO4n9YJuNQfWTyS1gKDbQ%2BgQjLscageJy8PfUd6c9dOt3CzJH6ZehkTTTKLjHggOu3atzJXL%2BXBgt%2FFd5CjOeU1mif5o6ILjCmmURLPn2aFDuZpq7q3bqkXpZdV5jn5pO0o7hIKCgh58MydMuxH2iMPmH38kGOqUBfhtPu6Qy%2BxGFU2gUsmlUEsScqDOqn%2BLd%2FaJMOTBzCn141VZZic4DKQclIutxZPtYX2B0N%2FpBH3BT3hyIn7a3G6d2yp%2FFFALVOSWlkFZpPGHrCYpJ2Y9juH40lQVZWux5T3Ysozr8DmMxda6Hp1b7KdztHOR3EAkU3i6Sa6OQAJrFAq7Wr%2FxhaXmFnXxLnKPL%2FPEA6cbEA2DJDa1tGyQEYJCNKi5a&X-Amz-Signature=3f3370e6c6679663ad25d5dff9273b1fb921c2fd614192778ccb7b030acf42d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

