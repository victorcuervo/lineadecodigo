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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQALZT4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T101321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDR%2BJcd6kVQ0CYY7wJVzBijTfxBgSLGBrn5Wubi9hTmHAIgI4uvXNycR1szL4K1Q%2Brg1BDt6ACVaT2hPK60WnYNhy8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDIqdO2A2mOPFOUav4SrcA4jRNavG95deG459PJsnJCTI4pIhV%2BajUXJwnpuXCxEVWiDJSjeUXDLoivVp2ycL9ebCy%2FcJCoQVJXUGlph6nzLzZzL9PlcRqcgs40RBnXwZ2PU7B8oupIEWUT1OUWCy245tyjqIQSNVlmJNQXybBJ6Wck2fgavEmcpi4m486cIZmy28gtYxberu18FLKo9CYUEub5fhZlzMedUSY5I033nuBdgSnQ2A9Eo9CE0v9i9Qwyxl0lrDc8%2FZD%2FwzsKSezkvRL0sZieDGO9inVvH87R%2BY%2Fs4lcRN%2BmOcsp91y4gEp0FJ%2BiGiZf9eLZbFj2jMpZD3y3tg9ZUU9GRxfbUAq5dkMIJ2%2BIbelVtfosCr2T2X5Rt8W5W3B6l8aj%2B9SEmO893o5cddZfaLHAj9XVoTKd1lsYMUMasnr0x28%2BTFdfATeHyyI%2FGqa7xTfSgeE%2BWkmoTpzcMhL1TZV%2B%2FCLEiwjPTFk22fkON8DFiH97%2FA5%2B%2BIGK6RhH8EVEyOGlHDcEZ6J4Vd3m7ra5tKOaV0ozhvqvFjlCK6qZer6qPa19%2B1YuJUKkbeEHSX%2FMlAST1xQh0tTlJNwI92bNy1XwCPVdKEVGhGfXrVfTCzi4L69tF3X1kJ2BbwM5ssCm%2FOSL%2B1xMJHrz8kGOqUBpb1RTJ6cOv678AQglkFjPLv6ma%2B4Lc6SV2RfrPp2BoYACV1DARkboeVXHLOC0Rtpv4ZiNbHhR%2Bvslv%2Bw6w2js5rZHGmuH53PLLPpkmUChtOrWkE2%2FvCsjG9XlbFE5cRreis8E1UvlfvYPwbgDVjYOUCTozzysxbCaB14f10rR9gWSxX34VYZMclXg%2Bzf7gAvEZWAV6jPSOw5s%2BmOvvhQfPs1IriN&X-Amz-Signature=65dc9bbc56d94883ea45a6092fdc15c2df6f0196d3928f3b2aa675a5703e79ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

