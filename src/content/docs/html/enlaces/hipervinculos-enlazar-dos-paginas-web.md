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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UZMVZHD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T195815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAQrFIAjS5RhKFGeOjvPf6XUXgda21fMsrJ5MscwvkPMAiEA1BLteNJbPLXeuiqhz6nUbPXyDo7TOLxSFJf9WMjUJWEq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGFkiE1K3C21qdue8ircA7A99dV4mdjpNY10%2Fw9JzwcRAtsQYFLANqKlE0fsGhzlX%2FXP1Puey6i%2Bo%2BV8HUQ8YS3pjhI1BKkcwn9KBqGfrrjnDG2dZ04%2FFvz48AhxUjldWIIM5FgcQ1bP%2FnZ51ZmZRgQeqwFpd5VDCcxWnKJysGM1zUK5R48WVVThhpN2%2FlWGLXVoi0pZvLc5TOLtz4obp0EYGB6yw4q7y%2BWEqhqfJYS%2FUXw2yWEoiPQ5KHoPAPj6ZkrDiSXRAJP9VbJwG089hugSUarg3L4pLDj90i3zkOVaCvJs7ReNF3ZjBTe2ch%2FaeWMHp5D91Rf1XBQ0oDuyJM236Gmlhp%2BOGjiCiSopbr5JFKBPOHvrlnfVSlOa2GSB5KR305QBcZQ3MOfePb0ogWrsruMV9m2YxoU0M0OXhAEYKW4smqgXUTxdxg1YPEdIfBdYRYKSdsTxA6JnWiOdViUNBne7%2FYvSf7UsgJFOmr7OipetC5ji4jl2DqVIvHvOcdkTHVETcA1tiD%2B7WTGImvFawmQ1gpHrcJ0lkJHMwmI2%2BpmjJYHqfk9BJMc0zhGLXuaKaG2c98fsuUnM1MN20VfQ7By8VNe5qtL%2BtBXFMqigdEo%2BRBg5r2B1959yqeA8D2gNGClW3jyC2c7CMP7py8kGOqUBaMgWcFeDPUQUhWTqetimHMvzUkwhjUJWOYCQUWPYMT%2Bv%2Fb0Zh3rbuYQIyoQnoZINXTUoTtBXPlrpnWhCm8BokycxlleZjg2iBzabbPKxMVm9MiHh97u1r3CBETHk3C6AexEC8wx2NiDnc3l%2FXSOZbZCUbBneSbcoZ04auNr%2Fb%2BxP7HLbotTI5hFJP50HAORaATm8%2B2ZMCOI7CQYWV%2FZXyqThCNM7&X-Amz-Signature=e1157cf07bd2b388ccf409ead047bae4e5ac99c17ab992b4c40c8db24b1e4fb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

