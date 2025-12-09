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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCYJ3WQG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T191037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPoZy4%2B4UCYTyVb3avOXNx6DrJnthle1kkK7XnXlW2dAiEA0hrnPCILTKxWpco93GDwI3JlolQ%2FPeebdD5K2ll5e1MqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOg5lbW2L2dOYM4hyyrcAyNLnuY7RhmbUioFbWY%2BAPavZ22NmjYpFOH9%2Ffy78L%2Bj0gUi7KLZ7lc8YAAJwlDrS29xE39g84NoIxXHz4E4Syxd%2FjfojU1hWMClEuFXLAD2R%2FHuv8%2Ba2ItbcrKDg6nSBYfxjl1swMOKGMNGUdsGBQxBHxuqLD5HxOXJWJx6Rvn7TKW83SdCCMA5CVnIxtsTW%2FRtouS59Owqyqm6NjGhoJ8Ve1IW%2FNHOGRHF4R3oPfq4qZkOfcRGWF1eWFK9RJ3IYwm6EUm1oq9LAeyZA57x84MIKG6hszcxnE%2FyjTEVRFoaaqog%2FS4uYy9OqUXXuPvYbwbw3D%2FVeWVRfbmS9McUxdAl5SUz1RJ%2BrwywcjCdyZ1Xivhz9OV1GRbTgoTkNzT3i7O057FbUkxlOA6ppdCLGnwn3O7U0ljwu1xMKjen3Mdn2z%2BW%2BpB85x4hkcDHBKYuF6R7WcAb5cyN%2BpwJyKbT5zF2txtKW0qs4QU%2BVZAfEV0jpPWkqgNd%2FgD3Oc2LOE981svj0%2FvhnWfULmrX6tIbF4j8NQzV4zo2FuNYyAZtFCaaS%2BfYwK7CdGGnL2eFxusYNUrLMFePDybMaPvmgemUUd0cVvDjKtw0%2Fh0cJLidOBWwq5oFBYGmqu9ptQhJMLnf4ckGOqUBJMuK5ZNRn1r3dZzcbVNi6vd0rgT8cPwb1Rf76ShnjJjyQtDErwPfRtarE4vA2FY%2BnxXFscmIYKmgUNETLnTQsev8vsWioKGEVDn4HDJ42KRhPIs0%2FaPMU3LQVrDveYJbcBui8qWxdVQ9VnnFNtMuSTxh8nn5GvN6mOXm1rIHNO9dygE3xRGuOO6tDXgtOK%2BQjuL8HjZ%2BZI75ciiBtja%2Bqv1ilvHs&X-Amz-Signature=803e59e1d5e069563c6230d017ab47c5b0f423b1480362b68942d0e567c745e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

