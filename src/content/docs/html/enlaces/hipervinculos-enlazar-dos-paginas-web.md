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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKZV5B4I%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T214008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHMIPRARlKVkLBin%2F%2F398NACoC16yGhZNRtMmgrUDQVwIhANB23pi33uHQDS7EvfvJw7kmVmXypT0ZV7IrF1hgh%2BebKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxa8JbhYbFWf%2FiOXbcq3AMXwgrYOIugUbT5omo1%2BKbbr5kFb8dXgdD4KTO5EvRAEhkwcSfFoKAbuLZrPBRiAKubA5phOvVGUt7m%2FsLvzLhivZkpU%2BMY6cRwhThmVafvYyosZqoRpXBX6xLe5o5QIjafokQHFUDMUoKK4kQ2sH7FwAS6pPjcfKWKgRn71MNQF949HWePxV%2Fign8k5TpTjd8CajeO0qRvZFiLStVVWapBpi3yZIoazBkXT3jTqOqcJhXBL1i1%2FLIENlWZ6M5DpYctEe68qMgFZiGj4mTrgqB0TWLDIJjBOR%2Btca0q4AGKGOrvZJbRJGcvyxhUruOZ0psUsqs8ILHb7hT2YhFXUq%2FSH2oY%2FKPX5S%2FqS5PyVz8%2Fw%2FmcIBuw9pcBn5fj%2FHR7TRSaFBCAle8ueSdVX9WFYd7PuahMZmsyT7my%2F2mgQpmGRLRTdtkK3xUGQHyxU4Gw0FJ2NfEGPoGuvWrbY6ovijpj8f2nMJ6ZvTFLQ8%2FEHZwugwQfJlRTMoKXBVGgsMaTbkIbg%2BewGeNz6Pcjz5Rf9W6UylBfgbIO88mLmeXkc%2BDqrTsvpL03PCC339sUzMC7V71G%2FZepGLe0%2F5IfSn809yvN804zkTYbrcSP%2B99DrZcaOAiSKB2h2kPavUa0gTDTn%2BLJBjqkAdGFVtR04abjbvf8ItRtXYyMdUx1iHz%2FOFU4lh9kfisqaq3o8%2FXbid9xZWyqDl2pRd%2BG0gYw%2BAhMFbk%2BH90uKOakZSv%2Bnn2T7PtsKxAOlby6jBL831MKLlgCoQlM0buQ1dkTUAsP1CvZ5dve5%2Fatku2OoVxMYg1TtvKAJtbsyLRjoWdRJNntIuK1D1R%2FJa6IURDxp8C8jlExa4PoomJ%2BGmr5XUCU&X-Amz-Signature=a91daa15299d48b5ea5f94e215decca8aed0676a4e27d0c928b6aa82852bc41b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

