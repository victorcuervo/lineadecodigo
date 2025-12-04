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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WENHENWO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDe5AdO7lAGqEDXxRnlwAXjTcvXTwwXogo5Qi9RZMXzVQIgHwvpm34KCsPpoE6MIMqGXSCp9wdus3PpvVU5ydnYX24q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDE4pSAcFCZjyuqpX2CrcA8%2F25BFnelNAMcIaqfFhEIuSTUgU63Xzmi%2Fdo57wevaFZcHoV%2FuycBj7OPyQLiInyq29TQq%2F0DWjOU44JseMDaPy1hUfVBwPTAl60X%2Fc9vguS%2FfmOlV6pj%2FQHU2nurZZ9X2t1%2BTfnRt4whTBp90a4cElBzdGAX6WhgntxSV2nOy39zv%2FqdUnodOixAW3%2FSC918jZsalKPIdFYs4gdFuP2xH8FuLAwoFboHA7urKGRLpZRjdgjHHlpO8%2BgmEuZPQRT5v7I9EGemwCVC%2Bfe4WIPTXzdm4Jl%2FgiK%2FOIh%2FhFX6MpyqSxuM2gNUqmZhLT32TdHj31I1FhVrIXsbOjbJ1AAvvi8CnAxoCmKqJpHgwrfBLlax%2FxKHHYrm2m72CYLhFyJqfdP7sS5iwpLvGDK%2FZ9TerdanuOxQgWSIh1MWag2uLt9jVybq6pR4USJYifTgIse5xNL2W6v0ZFrydKXTHDetRnJm0evE5etLkAHbRNdqLa%2FW2zeBlos9GgFPgLTD4FHEaA21bY1eq0Lj96wVgeYTOXJF8kciG3wNPSD4sG2ZtJjuAISloYSbsokXQqVAOKmOyrHSjn9LIGdkmToS7fWpcQ1Adu6cTfLfprUV8ReLhGIY9720pQIFTIchOdMMnnxMkGOqUBsEfYZVRvArRwdLf0ylzQVFog23pTy2Mx11Vx6uHSdtj1IMUIgYEMt49IujfP7YbCBG3S01xYJ0mldwdRbEvmh86x2Pj1sECHsCTUCIDMFN4RzPhC5AgMdFvh%2Bt9t4mfdzCTx64kGxT31Xg9oSu865260R0Zj1nmWVpy7gAq5JjA0%2BTkwSYjuTo8kFPgl7bEhDPQ%2BDUcCP%2BDw39akJLIXSJUdQBGn&X-Amz-Signature=30d7a2cba86d077eea3e5234b5489692c1c356f1f84da1136ede3c18f61554bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

