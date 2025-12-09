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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM5A4COT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T183531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9cb5ra9RSfaFAgUh79TkR7Sbuvvj2Pl2CIykeff4vxAiEA5JuRC0R4coIXZXELG5uPTaGhrRWVHdqJ3KbpYwIlLwYqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwZ%2BlwlzswqrpvHFCrcA9J09UnTnL%2F0fskJ5hhyR9%2B9sMTUD3XPJJyLZCTu6NR9oOI%2BZz3jjKOnyr5HO%2FK21yglPUPXio5f20AAs4dJKIvps2aq%2BdLVAb4QnesjjEMWZKK24rqnJoFRe625Mvc%2F%2FzaUQtxCJbANbr5NgpZCt9io24me22tV%2FkBYZoQ1xJ%2BYzRccw80pLGGCKuh3VPKEzoFA7sDW0k033ZCFYncAWZLfIrT4PiNdE7mfpC4nOZJAqAQkFXkw6AFyeZtJ%2BnQTH5cIIh49D27BCrAn1tJzXA8Pxqemd%2BYgoEt6ww6pyA3QuYrWe0r9Mi%2Bc3eUiEyq7%2BQ8nHYx3KY6eiRzkVPTlku4dyx7G2MbJgoHFOrs2CWtd3BytSvtlu4GC9WTEkJA1WALPrv%2BMHpJj2sdsSu97039e1%2F59g39co%2B7dvbEubC0utPBNP5NrKBqQwt%2BeTKRxfVt0j5tepgLf%2BivGAtAASzMRVl46pnllDtxNHagrlyhcBw%2B2JVi65a6WRHR5bnXDHNvzLwemGQQ40ssucYgfuqsExLG8jSM93ksaaOZyuoS0fg%2F0Kvuc7udPX%2FpknQP3JhH6mQ1muXVN4Xtq2Uuuv7bx1PHZkjkfYAnLfhw83IW3MSgOQkQWEULPgS36MJW84ckGOqUBwTsycfp1zfKvPdMwk2zXWRjoTIH8AZRhizKW1woW5vSASbQc6nArNVU0KJDDvS5eEwXcVZr4%2FwGr3PFFSPxRKHtxDEUeeTnUR7ZhQHaTiPnSP92W0U0j2Q7CG7hTikjxIhwwYnb9Pcjg%2Bs%2Fuc4y4qhMHsa%2BoUUP%2BLLc8LAix9c%2FfEUL2Qh4%2B91s0bAt0ezU70uu%2FFwLC8VFcbTh%2FJ1zUskPU0fCS&X-Amz-Signature=84c98d0e79cb3531b4b48a0595689a6a81912415925159957a4f944b54962d64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

