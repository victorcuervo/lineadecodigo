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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GXHV3TG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T064657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDS2OC%2F%2FlwXTtgXZEywj8oagk25fsCTfpRmTrII6PKpqwIgdd41ZHmXCoI%2FeR1pKogKsOfK%2BB79EE%2Ft%2FDrWOxTAcR0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF797kCYbke1VwHqkircA0kHVR3Ky2hHdcSXMcw%2BSL33kmN0obhHR21fYxsZFn86CFzreyEUpPFbINwteWzWUmsYLPBALCspoh8r9feSateavvv36fOQWC25OqaTGfwTY7c4FBYCX3IWiELXV71%2FTzmJ4vmDH5b7KTtgkJ4LmJaOG3%2FoscO%2BIE8QLvSSFy8yRa8vCS1hBGseEXM%2FYmHLxe3f%2Ffc9x9QUJIiiVHn1vAcqWVt9ERjs45W9czUrhl9PE%2FihlOYR3aLHNLpBL%2F7p8e4iVYdIYW22PvUO8eJ6b2IpDxsbZWSY6jfCaIVRnwQsMWZldcI9njKPfFrAddZEQSLSGNMYEGcCbsPh3mkUboNB6as5iBIRQ2PsEB29acSxd3iEz1pIt1Pzi6Okt2%2Bhu6Y1j4%2FOWhgdF0TNtsqCyAl72EymzDkgm7ntRGmg9nI6Z5ZdBtapqJ6CD7rhfSuJlAG6tb8YNlh9OJvjBpOG8BQruEFu%2F9grw0le6FGAvSwTME1dM27tgjZS6Po7E4DrAPuyEmGpAC9QmPp%2Bm1kdak8qVUxXHtA6wy5EH%2BGcNmyB5bFeDZVhfCfj3D%2B9hOTlY1CLxa%2FQ4KAc7XIeeRKnM%2Fc6llid9D04ICpjNpuaXyjqezPl%2FgGNCRKDexoIMNKd1MkGOqUB27pn4QLxvuLMAj9xTOKcs52cWziz5mrbkDv1selMEV%2B5TdJHYVPWHvZ%2FVLU6Rw4A4stFyZYFd6iaszI7QkU0bRCCMl83YV%2BsoDhRgPwo0vYsk%2B85Q06jp8Td6rz5jrTMBq%2B6qGfarOwp9H6zUAZFSXC5vX0955VL24Iuh2JVsDlggv%2BMY87VtVeMiMXgZeAPFStc4ZIgBuxdJGF3Sz%2BufkKO71a2&X-Amz-Signature=147cc342391f87a2102a56a9236f4aa8d11b36bd84c404c75412ea27bf682fd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

