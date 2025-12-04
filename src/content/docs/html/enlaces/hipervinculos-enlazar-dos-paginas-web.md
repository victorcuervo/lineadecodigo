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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5JD44OM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIH6jTXmGkKKIiVJiNzIJ82yLTiy%2Bndi8DSc0NqJjQieJAiEAo0X4r8zixJXU4TdMmpGZonThc5GIYHNs3ILfSeDbXAgq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDcpJpVimtZ6cPH%2BkCrcA7DEDn7YlmUtRhpvLNeGlTRctjZWxRcdrKW0zOAddRKD5v7E86L92%2FxZOEpQvpJXELdebhKmiTuS1hcG83oG%2Fb5JdhjXWJkrG9CJUr9u1VcTdJCsjzGgngp9k%2Bbzqy%2BUzp%2BX7ks1VHbV5ZJpghXx4rxXYlbsLk3b5ruAsL3E4ibBLNB7ZpPmg3IZ7ZT0jILr%2FbhlV2DfLGkokVY%2BXdDddhEvvxDJXCCT5cmaZUlu2Q%2FrsnBoIYV%2FyQX%2BYXQwvKTz%2FLELVjtI7HxHffCOwZBiie9qVXai5KjILmc11aQm33%2Foz0zqVvBntEtcWjMMUNg8ofQzK2rmk8bBjk7VADEpPLsTlRRTxiZOQU0DgVKAiHIcwIax4CtqLtkoyLLbt159mpQAlhB5J2XeoR%2FPZpul8LNXw5Eq7zs16zLTqS%2FXulPbKUMXdL3CY0BU9PHzLj9Wp%2BS2T%2BjHVSDsuXU9GztOPzvj3GSQlNGmA9bpeKU2aLOn%2FtNXt8i%2B8Lv5auHKPomgikFnfnrgDbVUX4afpZoACJ6bDNN4UHG3t6O2w%2FRjP94UL2B249Fan2Bn4oeDXDM6bsYeMtuTvOBdXQrNc%2FifTMbSPoNML9NX9QdPWbifc453EiTu1grJ57d8QSfZMNbnxMkGOqUBLrMpjAN9vT3zqKH33n0vcUoN157Co9n4XmkuAeeyYLWa5mISJghB%2BE3TBbJnYzozAO%2BPhB1D02b3gzva2W8zmwp6j8DxkCI8ajf6iPZ%2BmNZyZtR1JpAkubg2NiEtm2ZXDRUbWAMAy2mcf8uoheFxrVheIjy8KIlo6QuvX2KnmcXdk8YLE6DPNt5jIPT9jtB2y7qi%2FW2Zrv%2BPvwcvlNGby8AZ03zL&X-Amz-Signature=f00a91f01683e1ef7fc38200a5cf66d597df5747fd6e8803682ed14ecff735a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

