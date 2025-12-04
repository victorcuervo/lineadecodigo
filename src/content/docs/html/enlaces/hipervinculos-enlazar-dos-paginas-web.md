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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMJHQUVU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCTLNPoHc%2FIQzQh1qtgKWWa99wz0PSjll%2FboxegTdH%2FvgIgAt0x8PVbk46ZJCDwKB3U8HBAC04moEeFSdrUUYAvG2Aq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDCwA50iLKZW%2Ffja1KircA57Dw0tnWZ1iFwMBf6Ad10eue0FdOsnUWEyw9glyVpCMfFHVKxezeMh%2FohxUuz%2BE0Jaw7q%2Bb3Xh7chOvltHfxaSKQV5YUcYHMOnZOaOT8dYtdcIMadpSiPkrTHmoRHXnT3Yvrlmi4NoGc7N3f1EKIvL6ix7gLCfVs4Jbr9p5DV1FyqJqrBWkpAvL352V48j%2BzfHnyXVaP8cCcq6mr%2BELjaKhDfmq%2BDlTxj0KEAu%2FlbNIYHBnzz4QtmoHjEyORYMXsweq0%2B3hgmbRYbQSa6VyQ1Gj2XufZ8nktB11YSUAIlmwtDALmejPR2d2QaHwo9toRwr1dIvwY%2Bp6Xc71qs05FLZRJ5a0Dwo%2BU2kI%2FF7TTYJy5qM4RS4WCGxE2krsGES3s746gvxpeWw6IRhKpUjRicE3i5uUf3iXuYiuJEd4SACBa%2F1F%2FCdFK%2FOmQuYi17xkPWhmvUCcsZEpJtCG%2FfSixttlgPY3%2FQabfJSY97gIWlI%2BOT17I5sDZRCxuttzeUkcgYr70n0SdzTrpjHC50vbS8SV6lB0fkHRMZVOkgSrgJuxL%2FLcSb8em%2FTwMVMPg6VYXjbMkvNq651nXwdPeT267yIdOooDStB02Nfz3AowxBRtW0%2BorxJSOjool0kWMJK1w8kGOqUBgVISLOjG6ECg5tWCM%2FJAxt0LAHNkBpYtiLlEnP5i2G5U%2BVGyo0w%2FwsVTOdfoxGkeuvDajUV8W8R7vaBwWYa8btfz96rN0kzC3cRSzSAFLvpy0wKC1RGghbfY01olz%2B%2BmZLbxbKNImLhz1Aq46m0wEwi0UbwG11pD89eL78x9GlfwfRSNFnlQCghP4kWVjpYt0d9SRlIGnFYIG5Y1ch3B9OxUp34w&X-Amz-Signature=a30eb35cae26fe546e6f09b9104478a4cd29c2d4533f32c827460b00908852a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

