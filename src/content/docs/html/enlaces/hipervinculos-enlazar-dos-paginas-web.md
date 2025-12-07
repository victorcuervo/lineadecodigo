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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q5WEW7F%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T045320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCE8MjHxLx4o%2BPKklxKmFpCuyW%2FP9zymsUIvy1rd5bqPgIgQuJNEM1xPRFgm69g7FhWs9PELh0wyQsU%2BvO%2BBtzkdSYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJdCXU4c34STN%2FS3zCrcA1DkSzlfhN%2BQjYn3hdbtSKXOJE05dJJZI84wuTrRHlV2ZMsDn%2FHTkLaG%2B6XH%2BdzmAFSA50hzMaDup14uulg9BJDNTlgNFIlz%2BvnR7r87BoIctN2RGgkyBqdhViCdZg%2FgihAN%2B8HEKqt%2FzMmPjlW94HOdSQ8h5bnmA4OzWbPHszuga9E8%2FR4JpXgRuZHC3L9lz6iqJhV5pYHvTG2tNacD7oepTU4ejgPdsUNOMDqnm4ua3aEawJRaGq%2BXMpNUCR99wFxTZxP252qU7nIF%2F5NzOpkgcRgK53YmzSZQvOjk9QdZnOJ%2Bd155XOCfQ2CRssTcPIxJUj35rWKzfW5WSI5j5BcxfhJirbB%2FujnZmLLWUYowu%2FgX5h6lbk%2F49Z4gn76MyLklOtEIIUbUjHIj1AzPx%2BAo0bDj%2BKHFCzbubIpSBGBo1In%2BPzKOiMlQEavo5vdcCLRDlxyN4O71YYjCUfahD3GJhO8W%2BJR%2FNIWDboE08JGkfE1T9XoCY1Y9wWo6NN2OMBWpgD4RI6XSob3PcUcH2z%2Beko05Aw5ycdxhb2WgPg%2Fbn7oKIbehKMeR1sH7uTIR1Ke2O5cxNLUE2sDWCqaoMYKbByX%2B443A7uMu2CfCWCBq2P6keQNHL5JC9ZD7MOj90skGOqUBRxhf0CFFYQmwwOI2DHlu%2FiGp4NHniduD1mZRTmBkLoNsI9MGbPbiH4UK5kd001%2FgWKErOtPwcLXMJOTK5PMZRqLYTLrFIhk%2BpQSazU78hsJ%2BmEp3PRqbtepnQzArwNFqsQ8E%2FaQQxtO8KTa%2BJft2atG%2B03VK3dP6JSBIlBsjeksBv9BZiq14VoMURwLnuiVmwoSqGR%2FQkIuIJJ0RoRaFfjvl2pev&X-Amz-Signature=bbaac0e016bee5496f4f1c58e62326ac4195273773d5c25e2914985352014c0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

