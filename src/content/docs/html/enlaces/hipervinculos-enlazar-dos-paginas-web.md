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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDL4JOSC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T232116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDV70zM3DQoOZ3l3NCiLHiB8XGNd37E73D%2B3DkY0584mAiEA3Bt07fEM%2Bbu75pk33cI849R%2Bg865NhObXMnTPfmrJOUqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPcFqygcOSJXfxMkkCrcA5wZzmY9V3%2BpMWRf3zuaDMUn7a0Qq%2B9u6BFhmDqGN%2B%2F61h8Jz%2BO0dWo24L%2BTtWP1eBcPU0%2FsOugZsoSC9Z%2FY69gjEzBjeY%2FjqalE7l3vVsF8H6xFgJSLoyc5S6XJMpFLTIbYs1ge8Es4r66trWtriwV46PXzRu3go1X5JRUwuqnPdlvfxgHd%2BipKKKQxva%2B9DQ%2B27D5%2BsjzWHlBM7RP1f1UNS5%2FzGGrzTMsUbGJLqc3MlOceOri%2BVkFnDUIGgDoHkjwZb%2B7azL0ol8SwVqJ6mqHip95VJIlqfwvTctFS2TXl2%2Fsq2CskPa8xnoKaoIm%2BaQu%2BBjoB9SHz14jrFX%2Bx0V%2FiXDjXeW5K5ElNrctrBeHcvQzxWIBbLbT7KeYrPeIcF5pbcsSIH1hTfeaMFrGN27uYH%2BVOhzzFw%2FjdCqcznXB2upgYR3TVLnUlzZErQEvYPxSDC1LCJYSkbYjBC785edEXDK8uxzqaaA1hjN2%2F4aDOZ9Z16Uyj0gMrVx5zHGNlnURrRNlaYKCaSDBANlOoNIQpkFy8mTNOKlXSzu2ysipfFJ6pbB8O%2F9h7BwwJyPJ%2BXmnPhpGsyzHBi7dSlkZnaToNLEJg88MfMfHZCv8cDj1Ymg9JIhp85JOf%2BEUTMJSi3ckGOqUBWw%2BADUKCOlibRKQAp1YbA8YcoKYu%2F7uOUYLlD3o5HgaILqaXg79knSy2B67FDXNt%2FEBSb%2F0b0t%2FBUFgmXGP%2FtY811cbLVkznx6UtUeEW8tLc9BxE7h9EI27mKH%2BDEGHDoi5wdzYAZn4glIkNoXFkZI%2Fg3Gz6gLIbJU84kkWIj92QMzcI57VAO%2BLFKiC0FHIrojXv85w4RULSF8lflYD0akhnOkMV&X-Amz-Signature=3360cb82878ec3892c78ea66b1a8d2fefa54e96b2380805ceebce9f51b50d96a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

