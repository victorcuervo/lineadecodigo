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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCU553FN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDkrmCxsu%2FQ0Z%2FeD22wGPuH2dGwyjU0pYOOjDjO9mwK9AIhAPEZQTq%2BPTsR7%2BE0BMtlNJ2dU2GOOkXODKaXZwbQxwbwKv8DCEQQABoMNjM3NDIzMTgzODA1Igz3xa7vNKRk%2FvFLnZ8q3AOxJaISvCFLsURibZEA5UXcDIKldrf5Zxvv7LfM1%2F5g7T%2B6uLJMWvzrPIgoI423bkO4oGv4H16wGRv8IsnlpjMmScpta7p2ONrU65Zz9MdjNZf62sxg9TnRHcyMb54syCIa54zFBdO4Y7yuafhfPIssy3oZ6afE7Wa%2BvLIdbUzo01MBVid%2FxLsw5iJNNfmMiLTxyxhjjkq5oprnjXLcB0wG7hIQwZJOmTODR%2B6mcl0a1qdlILF9pNJGkkqEgFag0eI8whA%2FYTPIhUEKhU%2F6fqmviT2VRpWZAgJIbqKZWj90i0CwpelHLKT5eW%2FSJwaUDzyYi%2F4jCvoi%2B2aLiJ%2Bwzay3o0EQjoKqwPKWbgsONx9TpL%2BVFjtw0LWAFVvDDwUWuAq4osGdVj3P6if0%2B9ZwzS2DGglEqJ3Rv4TqAih9kWDEhVrFu36PXe3%2FEbpMYqz%2B%2FhM0WdyvLzPoCDMwM0X0G0cq%2BFI2EWtIGkZTgrpJ4uydrw3v%2BEU16uBI03RNhfOUd9qbVNNsCUsrIW84NucW4c6mp2To4iBtHGMy%2BzVovc5vT5pnvJP1x9gpvFI3WeT%2FpVVdy6Y9kcim4I6fJkRNXHxWPqDSVpSX%2FJzPODjT51Ck56cJiDNx8SlxEJiyszDsyMXJBjqkAUBxQJnu%2B2MUMxqDy230zro3ojI9R3wB1RWAM2hyrBSAgE4rU70UNBrip65jMWRLIhiMyiE1uBLMIvTTxIXnBojCZxi%2Biv6MdtN3bsasLxDr%2BXlAQLI9dwdbXeRhisydebHbVBp9VopsT2xUCf85vdwdmDJejIga%2FIzLckjm1WewhoCnM2RptsIN991mE2bkLC%2FEQUwTpTJK8wN%2BikXhEIPvNjce&X-Amz-Signature=1d6d9414b10dcf7627a0b2c5caadd3a5d7f2ca518ff3eec1da11d3100778f823&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

