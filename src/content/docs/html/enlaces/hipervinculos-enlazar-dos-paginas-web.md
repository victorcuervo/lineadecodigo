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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TIMRODZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T033715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAWhrGRxvkuFU57PHAofz16gte2mF2MPf7CIU%2FsvRxvAiEA%2FA8WUv3FHEOxa4tWfc1EE%2FpSP4xUVreAqs1gJpJCYzoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdwJkwYBB%2Fm6%2BWEPircAzuR7HUt3kjJ2S8%2B7AKmQP92asQPIGaGNUkX9fr4CqDZ%2BHbDVlSYzNWUb%2FJOxLHmgMZ9iEf%2F3XyIB%2B43XD1DRg6eMulSW%2FSEpwG8YSQpqEwT3RgdxeudoYWSaQsCYKaCfaPQDQOW1gBycIQxOVJeXuCOxEK3OLnXEDylSvrNFk0CPtpNHbOU0TpNEYjmdY67YPkcfIj54n6PEEuryW665KurRHIjknWpMBD4iCT4EoG3JQb3SIJm6lGfAijDEUngbzO8US5A%2BHajc2Dy%2BYLnov2aPldfTwCWzeAANDuqH0Gs6pRI0Qt0Cc%2Fk3lnqUyHQWv4GW%2FQfqsLkOtJFXFkQcTArKnRutyyZay7GvMFP%2BRAV1393%2FLdMYi5iRBE0VYnRYupyj7sVHqZtUX62ziP%2BhIGvNNwzjPbzWAwxgVzPovXR%2BWuf%2BlsOMJvnsLk6heYYiwfylFtptX5PYSIWhyXiSHnBxRycfktqT0aFo6T1mHJHAHhBLwVa%2FyuAG0yplSWb%2F5UH6RJP2VDA3FYZ%2FTulsnJKuVjBwlUeBgBZz6%2Blg0SYHmrpa%2BzGEzeu4xtak4%2F4L737q1kGQQxQMGB3RVbMK%2BmW5zSLIEzDCvM44BkwEjlK33xjwPnSDzSIKHHQMJD%2B0skGOqUBKAu3dnToGRno1PL%2FxnljZZR6F6mVp7PUO7x9EqfVM7hF4D4CJDVzhOx5IBpvgVXvIKaakBEbhGS4Lhk4IXt%2BJygcsG4fmBRJAIUzuADVUHHReyhilGk%2BG20H5BOuYxX8YxvzA1D9HqXgYCg60DIuSD56JaYk%2FhXDAoVQg0o5FJkkEofn%2Brnv54qe1wDacYKGISsq%2FYxUJD8hqsMqzfyk7ru6KYQu&X-Amz-Signature=6dee15684406f0d58ba5d9aca564f1e8aae604442f93a3acb0e75b7c617d31e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

