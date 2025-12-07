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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOAJGZYI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T015222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUw6F%2FRKccW8Zcy7kBWfjO%2FqtxVRRwMayGBarNTCXgMQIgBz4qtR92UthNmzt%2FTLRUckVP4yqXoDU5fEXJfUug0BMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuPyy9z7t0uonS5PyrcA3RPY04e4qHf%2FMK0GqxD8YMKzO48YSiJCnDecrL9MfbuWBbaOs%2BdR%2FyGTQrIEOlDEXv7rWJIEAOiscdz9HH%2FOkt9qCN9c5sYSie%2BZv3w40dZhBFVkT37XxxUglhZcRjx8JieUhsSO17QwZEvJCP1J5nYnGIPCSyNhig6PxW5663rb6ChGAf%2B2VHFY%2BEYbGJvCRLHZTTRiRD0GvNBBso5hpSI82CFRZliQ87vXM%2BS9X6A%2BmlTr%2F3NhzpYyOflHw0VkT15JzDpDplNbXuFuDVA%2BOQi4ZorcMV6m0wUjsIFCOicHDJUIIaBBbXXvbZYS0HVYCVOmkr%2FpwTj6D2PVs1fF3%2BzKVHx9fcSB6EP1dqwmwleTEMyj%2BUNDDQ44QdPdPHYHP7tqknB%2Fm1CoKyXaU%2FlIn4BZX1vhmX3L58VmJI3YrMNdXNy5OEscGn52YCWDcs9J57t0%2F4H5PTdbm1B5n14XLtc11ULE7hM9ZeAvafVcyTJncRU%2F7USrTGLNYTKiJZJFGKR3RGpWd1QgDNfRMDddjNR9xZ0%2F5f%2BObdH17RQLuip%2B0b4QzFygKVG29%2BAr%2FPllwQ%2BhpAeWXwIcEoh254ew%2FKY9rNh8jzHhEUzvSbz3q65vz5XUcde4bjyGsDmMOr90skGOqUBNVWj5224cwfwfaiLtwPt4eFR2LmX6xocr3L41L%2Fbu9%2B50kCtXjbiG1GY683jXEVpCQrhI6iwkND67lNacrACiCKpxmNTS9f12RB3pyr6Ib58THX2F%2BWxRm%2B7vtSh1MVfSJAD6Zo1ouxpx0LTns7sA2f5CRLdRB24CRFFf2GEpX1PuLkuDTZJvTz%2BoEszYlPAZymIbQd2mHZ3xHzygd%2BjHJw7OaQq&X-Amz-Signature=ce5e20ff5388be6ce740cec06ff27e063701b37d4c342648575ec1a6509eb40e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

