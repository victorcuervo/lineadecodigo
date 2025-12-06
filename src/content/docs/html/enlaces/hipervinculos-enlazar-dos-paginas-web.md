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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7NMLHRZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMlmf2wZoktIcwKy2%2FZOpLYn5hZ3eOBtgQUKgnnJR8EAiEA1NraOf698X50%2F9X49E23WlwBH9KIh1IEJI4yPXiXZRwq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFrq3h6lVnhAXhXbnCrcA%2F38Lg2m7oubsxPjGAL0wr%2FxmJjMaOxk2IF2Kld41YPKDkOsYzuNYtUEwJBspTzYqyQerye37cjdOh0x%2FvvnNslKzQeUlpRmBz3KWrj1%2F8glNk%2BkwaQV6Q1KUVUz%2BfhKFNpjdmtdTQP6dFJHmJvLSW%2F749rhLboCcC2sQj%2FfBSJv4LLT2L49ryQA9jZNG0afojFgJ36OzcWzQPhIfe7U7KC1VI55ZcMWAIH%2FIjqum8hAc%2FQ%2F3Dt7OQVV2suX7fskujP1l9mbefFn4uYOgt1OKdrWGpicX1y%2FXHjhN3kuZ6n4tgYTLD8YRqMfLGjxhmvNlhL7GWsz9BFEPYCoaviVf7y5fYrstL0j0%2FS2odoqglxWi0JBGltdfO5eAji6NdaNNICdiIfdIOcxnWHerhJ13fFA4RmB88Tp3wcoCxA6e2AslUg6yGgDox68Bf8xr5AdphMJ%2BnSWBkXl5WjcrI5xySRMRp%2Boci6GBGb6Os2TwiWL7LUiL2iNkXoMCZCxeGcWVi4iQQ2tApBIPf%2BbY6EFQulsXU3q6RTSM3Od%2FLCPlyvUPYqxp7ScVazVlInayaavFFGVryf3T5CLrgTNgtIPElr2Q8yjc2oSzlzaLOV0ngu3vS00KQW0Mu4kOquDMKDL0ckGOqUBxr0l91L8ufRh%2FIfaPa%2ByL%2BDRIDdpAD13LBvBrL4GXtrS3nsC1wz%2B%2Bl%2F%2Fz%2BfuaM2NEG9DX9nS3XAeyUDsq7%2FTGYz2JK0Y%2B4KPy%2FggDt6UNPef4%2B5d%2BTx0HeDXC73mFZj7KD0kA3T5vMkywcN0VDjb82jJfAbLjFofvyqr8qkQztaBqwSVuikxYVnEN1ZrzxlTjqAffnBEQFarQ7N5OUwqtmYXadox&X-Amz-Signature=93b4f9df7745d30ca16fd8f2455999e0b948712b4cad38079a6b814ecc307a39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

