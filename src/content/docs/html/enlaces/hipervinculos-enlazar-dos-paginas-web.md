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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXXVAU3X%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T100805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRXzOGqKW33RbPmVzuw3PGDxCvC5I%2BAIIU8W%2FlxDoeJgIgAXvvIg%2BbjiJHTEg%2Bw0ooPDPranE88OCYq0zdW4x1JJwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhWSZCZlrTlvEzJLCrcA8BiGSrRFWtLSoBrms1U4cdLs7zo%2By43xoVLSP%2F1g2mw8OFgarDVVF%2BjgImqaDEs0Jh8n7zsEYNpzCjlgT2G1zksjhcXeu8L8dusJIVRRXLzeDP1OIy3GYnaOnMCPK0vUoZDW5jjey2beE%2FiMGTicBrs7NuMFw%2FxUdMMVM8RpSiJBbrLy8FTRdlEJtBosd8v8n5iQFTzouhCHruIWDgWLZqwhJMhw%2BZTWBvLan2WF2w3qF47L7DZSgX4MUQDeDhfbq2OtWT04UeYPtuHC%2ByxKASGM%2B2XLiAmDnQSToVsRr%2B9XYnNqWBzbEKBrVidzNTIe20dMOXuB6i%2FNpMImbJktbpq2lSyV5JrUvv6rym%2BobpV4mO9Fpzy2F1dFCqjdKlZcwcPJjZVJK%2BgZBRMTURPUocyTvS4sdY93wUJJE82ZYCBML0dkYtbQr94S1rvlfNfnYY0FQXFxy8N9EmbxYlEuQR13%2FUVSm0vjKp1X1gqO%2B%2FX%2BAMVzddbWzd43yU%2BxmS0pjy1BgNwd05izicjD5w7MVxelVDx8XLGvlVYng3UgPZoEHrNTWVGMtJ%2Bu5dbCj42Koe2EdTYhHVnu%2F3Kx2dNAItxuCKIcow3lrZVUdKMoTRasioVwI0sF%2BcWOs1fMM%2Ft2ckGOqUBrQ6wpirvk8jd1p5ewkANvcBX9qq5b1jqJ1mPr74hcij%2F9n9gzoNvvLD7P%2Bflts3N15oFxUINAlFOzj9EeReO8U2BhCSOShx850vOcKhk9oZE7CA7NhzOj61Sj3RyoCal7Kn%2Fz1zayCa%2FUerE6vVFgqqGsYt884rB%2FQLd9mji2fDVo0MZssty5G0O%2FNgc2%2BAM%2FlHkDo%2FY40aSUq3C%2BOzAjw%2BalfVj&X-Amz-Signature=351300b75d8d9a20472ecbe958e4fd005e2087d159c79a8566fe16b16f2d894b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

