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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFDJN45S%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T190222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4QIh%2Blz2gP7qz%2BH0cE34NFuxTPi5UqnWEGQnPX9cY4AIgJR2Aad1rPG9WIZ0z7Bd6f%2BahhvaA7Z8qgbL1vzVLn0kqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGL1Y3pIIhZI1bDWBSrcA4BR9iSnFLsHawtgQdDzUujhLlwJ7kl3wwEu%2FUJ69j9o0sjvr78jUbYesG0eG85mT13Bbxm9OF1IT5N10XppnR8vqpghS9NJedBe0%2FCHZDfzPUJz4e%2FQ6d3fcRGiwIbS98UyRXKj8ZCRPURuT6k9Nv%2FXbcseLwZKT%2BC2yCnuipOxzfdIMm51Iq1UrF31ixKDZC3qH2ZntiAhYBwaUAHwt2NGfsuWMvIbMJErZaRMMvhwkKOrIgb08G%2B0qe2ISQHVo0QzoOuyVI18NOW%2FJeSuUZKH%2BOmPEnqEKiA2DUi6Z2n3%2FWwbeU2XECownZya5r7HnQZ3txT94VF2LcY8v2kmrCfQhDsFMJMU97lTGaVKPaGp2lpMIm7xpH1k%2Fpzr0Uwi9jiJjrJRkWUdT9MWMqs9K2Z%2BBJJBYKU0Y6T9Sz%2F2HjBhtxNyJZJyxlO89GoJnlRG1LfboGdimYlrPSwNI12g1HfpQK0xRmHNAUREAwNGSdprEttOnKYg5WLMI4CjRMZ%2FshtxmcNXnSJE9dvOWdcI5sOLtJdZZeqOlFWNw4gnk7QY95M6scNgwaY7k6irmIdtmANvdQwc0YabIRuJe%2BwpLiCFMjhd%2FkIpgjCD4WprmJR7RuQsbEGhAecMxxGQMJ3e4ckGOqUBZH3Ljm%2BFflec0%2BBnI4u%2BfLV3MnX6PydSEG1is7m02M806nOOL3P4z8tU8nmTYEQoYtCaoTRtLCeA06r%2FlUIqnNyFJ52DkEMPGug%2FNE2vWssPGiDas0xPARZ4Z545gTB%2FnSNFr5S6qlZEKeFqVs1CxpZ2KTKAAw3SkTXq7lRRjDd6Z%2BrcE9wVXducblHzq7GPPEnJ7GJRL2VPExbeTtz06aT%2BzRDn&X-Amz-Signature=074d6de0ce9282390657ee937ad4da1266321feb7b01745ef69432867bc83d3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

