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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MXTUNT2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T003452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbRGRLRg8i71qcnxYkx3SSUHBn57m%2Fo1er02dB9buiwwIgbTsSG6tkLgaB34uGywOybM7XPZ3dY7lB7RUSDBTyujQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAfczeaf%2BzPtU84GmSrcA4p%2BlB6BzQFX%2FaOH80KPC7mrDrfcANn3ckhUX%2F%2F1wyjlqPbQvSFucXCZaLkV7EBcar2q6QFR%2B22OnueOmMlpH4IpvXJBHpauNOuElx%2BPo%2B6SE%2Fb2Yl6rVOoTJkL11azvZBvurU9REpSUtb0x9MAAT2e%2Bq7QadZKQajLPFqjeV9pguJQ%2BDBkTiveuFl3qVnXnRtSLvTtdPRgzMqdQjkkXBJ3X%2FNwJ1p%2F%2FI%2FjVhCgBjfFVvWk3XrWlxORadrByzoT5iun97KyAeOhycuxc%2BsTGnxzMAaZk2PdXD3DkqEgWdpsQkAqYoKjZq%2FwHJDARTmMBBBrolrSyzW92JFmDhaKsLmrAB0adWKAmabX4miREaDMwOddbM8rNxKZm4wsKiehPmLTpJ7%2Fcqw5n%2BWXKOFfcde%2Bigv8EQwMXPvTaExwWr4QjYp2ib%2BzgZvPoNKZYW%2FWRVl8jF9XtrxdwFvgqGV53KskeZoPxL6mEq7%2Byrp7ui9vMcw9Fl7EHp%2BN%2BNcP5BPw%2F73A1%2FD4A1cxLImaivxMpOiPGNFKVt4ZpINTyE%2F2vlkJ%2F%2F1mtsFBtNWtMbxLQ6OH80LPKaHvsD2dNaHBJuLhnKz0DFYDQ2zvb4r7hhdtVbuUx5ZV9OOz5ga0VImcMMNih2MkGOqUBsbkBIckReUOl7N9kBg0r4s7mLgqAjRVR57L7eRn%2FhnBjq5vIuVCZPAuCPoAApkMQulSDAqbhjUmAC4EviD2GP92W9VJruE1zN9aViSMChK5WMyMBqS2rkmKPuK%2F350lYXM43FTcRkxodnBY0NvmVTWQp2CD5BV1%2Bqgsy4LmLJEKJfvjGVchxpxce2errIxktSEk5KcodY%2FfvJJcQyKDfOtDI4Kcw&X-Amz-Signature=05870d86320ebbdad45c03016d07ca7c7239055f7f8f3bf77a47dce6c64ea0b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

