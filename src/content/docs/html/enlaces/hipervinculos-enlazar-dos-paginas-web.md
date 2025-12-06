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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TF7IOEA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T214327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHsBh1vQ%2FTnmbYqzy5wowSyEfpMuJSMfifMHYKFHW6zAiEA7T6sI6LBrvCdfo0hpts%2BE4SNeIrFvZMnIzv1Wu1O6xsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDAyW7dYIavt3aSoxxyrcAy3CWbuEs8j6mfOfnGkchbt9FA1%2Fh2iEGquZ%2B430EPsIVU4GuiPrv%2F6CmGZ%2FZJb%2BfwNMQIsHBQUy8PDyZuMuTTeN9pKpVgYmiIJ%2BPk5UlMNHc2Gh4%2Fb6TqPcpO4Dn5YoHjGv9BdKM4rBP5kAPrhQyJIUZx1JIRYTKJTuGW%2F%2FMAMSvR%2FhhDuGrNajN0GhNK3Ny%2B05%2Bc7e%2BR%2BDgszafDOFqr%2Bmxbfb6hUSa%2FiLnRzxCIunNgOnKjpB3grcZjYCvr8x0Yed%2FnNhoCSG7Wl9NYasHqzrm11U2LvC0lfFxwrj6%2BuDSh5WxNiUJJAh5CetrUlCAEAsUNxYcs4TFH2H8CTWc9h07JK5CyplzAgDgeru4cVg5ywfB3vvAS6LqGbi2MD25VUPT5gqPGELSf%2FwOdIQGTDmEtuzRe07FXwZ4OGlCJ47knaVPpRKKYaStswmOV4acUhwtvONqTUHBh8puHnmmvPKQtIix%2FO6AL%2FTVSY8zINT7bNN5jRrw3KJHPn7YBqNvpZ9Pu6B8tuBVz3X89ieZdKZWhv2t7y94CQxc0vZvhFs9D2uxNiatysrIgkECr7uo6a50s9jp9pOqsm32dt3Q2N3O9Viwj1GnP4ocYoymIG8Jro7By91UIlyFr0YMIrK0ckGOqUBcMYd68Ou95cMgYwg5OyloS%2FiXJXlsWebAqM4XAmV3I%2BSC1O%2Brd7CQuoI4Ua5GdjTErMGhKMvt5egcjFVmM54dsmjTjViofeehtI3Iy3htDFnXPehkpREt%2BQlSaUOu5s7nv2QVxI6N4o%2Bt5hwf9OMiKgs1wQEAJ5YCCozLaX0iSDisi%2ByPjpVEWqGZz4nmkdlzIOo1xgd0YVs9imMvnSG1XedNah3&X-Amz-Signature=e37927c2245760ed8ff58ef83c689dfeecfbad19cc047b71183578e8860447c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

