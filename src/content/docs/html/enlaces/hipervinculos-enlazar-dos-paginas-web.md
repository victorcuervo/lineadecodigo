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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DD7HO3V%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T212223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrUPbi2FGCY5TiWjrImTMxY7N4JkkoL%2FoBz7FF0uNtcAiEAhIe3ZdWAggKd6Y1qqW3G2Uuu7eVBccdTyPExc%2FGWG7Qq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLGQ6gplw8tUFZs2ZyrcA3uxiC0UV4VAWQW2bJolzC7B59NPurxdsr4%2B9BReyruq4a55%2FPoNLaR0XnAPzJmra5rzJ4pbnhv%2Fo1hf%2BAPq65hzG3L%2FmGWvXmhyyBaocN9UluqT1V70YZSknnaAG5CC4S7x8%2FGznCX87lCGm2JbigoMTPdE4%2BoMzAKf%2F94UPoTeeZ692woeeC9cZBrAhLR0ZqYBsWxZdZT2LHhLI92tBmDy5Z%2FkM15WjgHFE3Xzkr8d46W7HyG9t8Yc0MFOnaPKJQwGOV1r1V7ChmTenTfIxicahfBmwtC7EtmIHfji1LPEPb6kTA6HByz8MkB8SvkTW8cIHFucNMEMGGwATeDK9asUoWOMyR0GanqQRTLN2681408aPl8JIEdd7r7yKzKf62L7z3XYgLzvC968LzA7DKsQrAt9ZHhvBVu5QOITOyn8q7Ok0c6bQtadlOPYk6Re%2BlGyKzptoA0YyYYkMsjWR0PRyvvbOHM7f5o%2B2xmWvbngakOve3dWXsHTMBLr2zngfS7m8kFPLR8bDoRLduZ9H6yyCqtzZ1uKxUuFFrLu6cHrx16qVLBZHkMeQYs%2FneDsmWSLPYT7poB96fzRyCs5isy3W7HvAKVE6yAOTBeKVDu92814dIQ3haavf6tgMP7H0ckGOqUBGLKqNKV1GQ0gKUfL%2F3Ca1Nw99jFq7XeAzebymkxbqhV8kHeyLlTF7%2Bnuh1Ok%2BD8ERP6%2FzxrOrGIWlX2OOJov3PTRCLrr524HKGZ6jTSmmzxXBiLkq9fZAWSrX7DJSmRXkFlbYeDDiRw2rwWIIheq7ivj8UIxAqVR1QjIqKkCt0T0h4JHAI7SZylvINzjIg2A9w0sEUUgiA1FrAxY%2BWyhm%2BXAuRpR&X-Amz-Signature=7a528a473bc4fdc409e2bd2432e6e2eaaa48a17f7829874729eb92c776ff2f29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

