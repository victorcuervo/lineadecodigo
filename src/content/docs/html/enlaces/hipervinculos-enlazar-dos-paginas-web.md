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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W2FGJ4R%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T003130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCranbVLCHdOH4OXmJKsMM9n53GVQMRIUqDSTeUjP4vGQIgWFTmrhnWrWbjcqEp47te4q5mtAibtCrfRk%2FzoCeO%2Bdcq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDCTzmrWTQp5Fb5sVkSrcA0KyoI%2FHCXHjlUJSBaBpKB9OYKBUTNVdu2Itg1dkVNjnombzHWLxAvUuIhNhxhKz%2FyATxkAePIOki%2FgGOE8NCFpywnhtaA5TYDTFjE9OMu2j%2BcVJ7lxX575f97tFtFpoM2Tnr3oyqbuVqMYWU2%2Fgqx%2Fec705OIYEAvAmPZhuCt5EDoUnZAWFc9%2FA%2BqGWErJkU2MGeYARBcT5QI9ngu8Th3lZePpGZ3jJV10bylLsFY9lb%2F2g66hFhnmCR3jMExn9yfdBFVb5VhsfN925%2F5X7Hi3rV7dklTy5QvhFzuYgM3wIph4npS%2B8ox7UWY3%2BXRbvxE2EopTOn4b%2BN%2FABvSpJkU4Q8auaeWgvVxRdzRXbXYEMUF3FybGKth%2Fg0lEqkmSbXvvJQFGA%2B%2Fl02%2F%2FuZx4q50ke72yIIibqL6lY5lGd%2FAWyb6mtbLDKjGau2kTcrGHOJDly4bmhx0olYzTMgVrenAgCls%2FP05aEgeXuX%2FCiG8%2BFvow1ZIWn%2BLrg9cl9caqX%2BKH0uNWc%2BDR6aIesvH8w%2Fwbg6SbeBnBpicG%2FT%2FW%2F9u3j%2F8jQUMfFbCE0KHeUbJFL0ISvUrIt0xLPC%2F%2BCUhrcI8ZWv3MAh5oR6mg1IcNfpSZl5dkE5a4cRmnQwHzxMLPozckGOqUBrRCEZr5wuSbazWZPwb3kz1UtMDMt9WYDM9%2Fx1R14APi3IbDRF1umzmFzMKEfL5vPFCfiL%2BmdMKAZGBYYrSUnw6sTnSPKntR5ZGgC1EorD9xJeWOKOIX2IogSXxfz9tFOBGcX%2FZ89r4NxuvUII7LxF810abwIrijTHcn5580gnNSdtx5xnaPgdmz73%2FsVRKErHkBD7cUk5QLta1jW0C58%2FAeqMK1B&X-Amz-Signature=cc6f844a55dac4f3d0fe0685a35b6233daf095725bbd31eac9c06f3ba6bb5fb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

