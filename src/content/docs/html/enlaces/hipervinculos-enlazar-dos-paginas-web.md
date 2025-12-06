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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WIXPUPB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T144537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnF%2B8xVbspPW7b8lpWjW0UbveEioAMNRggGd%2F9YZFK5AIgLm1Zm10ORoOU2EBF6MGT8OMwTgmodgMeL0wUuXGeuUwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDK6Lv91GFwfg85%2F8kSrcA7jsS3cqy1Al16QxKNtnlmc8NMBlg3aIQ7NsPyuKaiZ5OGGhfj7sfgwDZjAwqDSEfoMElmD7pjwJmfV%2BzuIRXSfYGgG8W2u8eTGO6cRM088pmJpt%2FwYadpJJiCzZCcxEG1oCUe3fLBYKVcZfLMNQaa1yEHf2M7ttwAbQtmmQOrPr8VHTkxjy%2B6hY3LtY7MttaLUrDt6t2%2FT4KT8MrdR2z2jh%2B9hP08Pjvct3QiTskQ9weTVp2oYa6ouNXQT0TqlP4sgZCEh8kL1QK%2B9RldsJlMlGc4iZHsuxqdXsPKloV1mTdcE3JvxCmMW%2B8A1X8Y1MPhbLPIPVvQyIhXBT55xpgY2Q1qI4AgnWDqHhO8cocLsLD99kQyqLBUGs%2BwYYfmIj1OVTBLIQPAPSidfCJsjaOt8CT88cwMXP562SNAWOi4XzdJJ%2B8CyiATuZXlSJ9JzYj0FUpLxKDBQhXL4FrovoJQ%2BY6J3Cqzkc%2BH3u%2FuhxgRonhU1808XyIAW8f6yGW0yUFzmqHjsW61FuRC8d9VdztteZIzkZoR1kdsKE4Eodd6Jx3PW1iWuM0QpFpwd9nWdSbzFq90prU6J8qWjht%2F9EGJ64qgATXnOCZt0tVKmX6nUmDNBcGdnQD2Ad9NcLMOSm0MkGOqUBMXkT%2FRupXjPy8LR9x1JEY5KRhmYxhvKI1qNJJit57FSb4VLOkWukYntPSm1gDPVqCc2FpZJYrRfjoaoxuaGHfOX%2B%2BLAZg6iI%2FKozcsWwjcRPkQBs8hIyFrVzgMXW4u9qNJPBkMxsPQmqRmOzYF6Bg79eRNx06E7UxKAyXShD4BHuRiveyQOf3EeOqIXD7VSkdq5WW5WNIToDQ8u4uSK3HqeTtk5%2F&X-Amz-Signature=616eccb7ff8f44a989ca7da2e7a56265f6e0f9daa4fd13563ea98afeacf6862d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

