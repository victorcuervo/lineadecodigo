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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZA4VWGH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T221053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ5PXq%2F8N%2BdJq%2Fz%2BKV69U4yEvSDRdxhIySwy3ZBs%2BG6AIgO5w4TtPllyThqMYigjXdJxqOXch6qTuAfnoYlvaKuX4qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgshyRselLPSXChzircAxhRIdyIX6QNCgNqTyby6%2BCb3kdsvAfH5yblXryX6xsBdgZBc7NLYbpsMzFQXzg%2BeeEG7bjDfgVs0lBtoLdcbzzklzbO46Gyikwmzs7N9Pn%2FMnzJnK27fdRhwRKBX7lTDMYfLi59UCGSg8%2FAGoWOjUSDm4DCCTwwjZWAk2LpxiGbCQ5TsZnFaG3RbikDbxhGa9GrX4voKhnYGo%2BTTZTL2mHrtpg04jWmESlPd8rVvan1ZeOiDtuFcZS6ui3eX%2B0Ytfr4PekYyGlcw8oDyAC2K2FzyftlDSg%2FyG3i9Th%2FU%2B9Am27b%2FMdmkwVb%2Bo0UL5IiFP2nOp37A1KoZBAaBSwKpB1vjQRTMV%2FdKNiMkInQnUC9ULFss6CG6l0UONHSNBF2w09MJAyjJOI4Z8PnXxR2g2YBsbsNhvwln%2FZifT5AIJKsW9kscmsjEwCHqbiQKDi8yqCuQKtTxSEN7djaeypdWwbCx2BRF5wpWg2MXjg%2FvXt2ghrmDxRknal7XRPOU4yhnpITSMzv7FG5ZC7lPpZeS361YKxkr0XijZ2wllHD8TudxpzmKxWPLretvxfkiTO%2BpuPCMuMUFUXa5YhLGatVQWKPLT8vxrsA7lCOwSR8Jz8cUG6WCnhSkp5FR7WmMIqA3ckGOqUBBiamX3EGCy4ofL4ypVI5QP6IFvPMS%2BSrCAQXKcsUTBBOY%2F0dgduZLBipubUOPVjTNXnsoHdlB%2BpOCbZgqWv6v%2FCuXoGbe3S5T6KsINCXFxM%2Bx1fvWfQvMIz9EqqTWvyCasLszfAcES%2B3cqJSROMJWfKOLvxdlMiJ0Y%2BaxLYdhMDgtGLUmql%2Bp3zF5z1c%2Fr0RUkGAraEqM57QDViNzSHbC0jdQOPI&X-Amz-Signature=3864b2cd7ffeef8ca4862746c28aecf807719bf2a400a8a2714f92c6c71101e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

