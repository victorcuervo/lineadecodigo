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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657NSZOFM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T220532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZWxidM9CW%2BSNpcZLnS0lZQjEZxnXC1REAJoVeww5rzAiEA3cPXA6wpq7nP72jvf0eh7fte82XPp2bztE6Wd2kb3moqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFCqC8O%2FDOIXtNDnsCrcA7yIFAqQSn0eR4eQ1JvKxUl4Q%2BTXRRZT7dPQTJVpS1tVD1yseJQUKX%2FpCrmYg%2BqFmsLr7TPtmgL5Sed1SO6X3cwvubI7%2BQLfFU1rdVGp7AoMy0z%2F0lTBoRgJxYSuj2GA3L7Jm0Xgf1d0ca%2F%2BdEKoI7OYRUMl%2F1MM35YENTMq9qQKEZ75UIDZRfL7RHVtpE3vsugCpsHX9XPF7%2FRoMi1HBb%2F4zuuIWvmMarM9nMjIhOioiLGcgOqn71RxMXgzTl%2FxlM%2BD0vrDchGKmLZKRkLkGYJ4WIlxLaLnVavOCPS1hi5t2A3%2FPatNjZKNxn2tJl3N8LGxmNvzKyb6%2FPs3WttHENH85Agbl1HXW2RospUNW7BUBPXQ%2F0KFFd7csm1yVwe%2F6u8J%2FomNSKmwwENiDRUUTINxTZva4iVbFeWzI5S6OdiLsi%2BUnukAGKoogD8mNXlvnN5yfWQ3draMkhmXCL0Ca3%2BBTbnDx8vxkZZjezi9pBO7jnA89mG%2FEiWQxldJpnkCyX8VB6OhPvWgI%2BjYGOMrMS0mSgajxUNmU%2Be2WawDedJQh3G4rVq9GTpnupUlM4V91g3YbeEWobnoOfCgaT3uVi8yKDpfsNB3VRwqSJyoY%2FuMpHBXzcD6LUcXFgMjMIXH18kGOqUB%2BPps1049fInq%2B2ADjfBWvlNMfjYnfMlB%2Bu0Kb7toLc82d8pBy%2FTMcxVED7Ey9ldowkD2RnZ8vNXeN8oFwPhnB6FYZg44XB6MEwJKM9NeUnutsxirv3fHDxd%2FRU17lbXP9Qh4CtOdYcXfs9snpr4yn31VKeTkrWuCusJtc2dcrj%2B3pRzDFzHGstq9dYADcfiPJygLYLOWmSIYlKExnjIQqjWVeuVo&X-Amz-Signature=34a8e1e480e2193e53937bff548a3c86a067205a976d428f853aaf8aae5a0fd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

