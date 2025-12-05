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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE3IFNMT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T102530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaz1wYbWtz%2BhJ6Is0e7WhfcdX9IFQQim4qcDL%2BAzTTOwIgQOdf0BDD057id4wHGfD5JsUhzuAFm8ZVtSs6lyorCjUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCYciLbDH6VAASyPsircA1DmOZTao%2B58T7zoGZTuIi%2BQRn%2BB96%2BvQAtBWd88K9TXgscfQSRsRcbtwD0scjuoQxH8zJx%2B07LUysYS0HIZbNxZtv%2BgBi1O7IPkmbFKf8jxIEdXh%2FnJ53h9KmU0%2B1CkROyKSWltA5zqG0cl0J%2BbtBGR0GnxWCaI5ogZYzJqfoMpVfj9zpAa5aWhmCIwO%2Bq%2FfdszHwG9MX0QpDcqJc0Eus0dwvbFZ1gRbmSX7Oz1%2FGYBNNdi2SJ%2BX2ykpBUVVFhgZwrIPokI%2FWfsBvU%2BOtzuicrIwh%2B6wehakKYjIrkvqfoR0r8rDR0hkRnTBnEiVrO54Yt%2BQ%2F9g2UL7IkXWUCwOA0FDIp0bHp%2FD1SXqCglTgLISCdJ%2BEwsh%2F4X1Cp0kaVfZT8XBSRUdyRrAkBIkxyvYMJOiNAXbNrF8ZVLapuzkGqJ9s2vi1tFsCblVC8Wd7nS2uz%2B2hZBSrUO73mo7BVJLw8zHyhGHQ5DjF%2FEpxi4QTLCa1N4I41PgBjoygXHWda57of4DDKZO1uKOS52LtSASBpzmjoCeWZQggvuoTgOpkkIZeMEsSssgY1%2FQWxMg28Gl66eLrljCiiviQojWXCWiJktvciw0KbsRxzX841ip5qV%2BuQHipMxWmuEA4TiYMOPNyskGOqUBl3Ut82DJO0L3mXVcW%2B8bSJ6eZzTIossjlmgculMsGopfQGEGOR8da8WlXuiarwZo7JCVJRLB%2FleJnRn%2Fy1gMLCrsMb7gKmebvCiMSd7%2BT1lv3hm%2FLspc9BEb1rF4lSY3AqK10XuWYerax5lFuMR%2BrMb32w1WL3UnSVYpMhMimP%2FFMcD3%2BWgOSEz1ZfUxKt1qhh2XFk70mBS5FEIT1zZlHmrC7NLT&X-Amz-Signature=67b549cf78fa2e947d93a3a5e60d014fc00d36c3b940528e03225667271f5087&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

