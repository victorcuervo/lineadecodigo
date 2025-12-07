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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7FF4YAI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T102535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDJ10D%2FdhsllGO0NXJoeQxAFQzzXDq7GAgrD3IVDiz2fAiApGrJerzZ4FSKKFkombpDXpqFuaWWuTC7dFe59EXewpiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgC9Wb75wQSoEuslIKtwDOvSggPyDR5Oc6v9XEn5Ur9H0UTLKJXQElKktHrFnf5Kqr8vV8Bcv2DoHNUvOyLKrJ4DW6WY8Xw6i%2B8IKblMTxjogYVpYQ2ojI6EjSsbHmHlg%2FT%2B9Z3qvzmYyHwTBUW40szawwHkwSX6FuRWSYlN2x7AboedFa1MadCKOYhAUSQnsnF7FP6YxJfMHSJvcDA%2BnTf7%2F5BddrOQTRIXwVE1jAUrUkMLcOmrVaz9Km3dCaknXYDv35fFa2jcwKCcI4taXzTwwa5S9PLUGo1%2Fpz6wiU3wdySvUO2hdHH376BrSLkbIac8OZeBx%2FG3BFf8FYQMy3NW4hnwOAKlLHlJ5GYM4e8PaaB921acIKZnKebh6lPZLCNIWeI0yFIOTvQSdrmWsRut%2FALdYReT2TOddNdQu3QWh%2BRskjF7nYkHw0K8AKMU4gzCai0fioBIbeE63fGdNHRPRMnCzqx0dzMCmsiiGTHloPzm728HxOcmgg8cjEYpP0f7zDE1dfV9eO3UiiZlvCTBiCwWto1aopTeoauHbHKHpniQr8yx24g5%2BX0Ye9p0cIwBwvIqdtk3lYpIuA3NPOF%2F3MChkS7XpBN8LEzRUw6PIvyz08sGedjD%2BxbSWMDsgnXt6tHb23kH77WAw7ZnVyQY6pgHG%2FPl8fIqOQNT%2F%2BFPi3mDtys3v0mh3sp5fatJDZPJ2DYvnp4irrSsWKHDUDFx5EWhnUlVf0D71WBEEgBlscYL%2FMeNwXFeH7UTl5K4wwCoZOtnuW6FuuuSk%2FBQJvVa6INApui8NljrCcEENWpwaiKgOF8jGWqv4ND589wqEIq8WOvcn%2FqHw%2BA1SygYcJkKUW02kCOBgUWacCRC1nEmx5sVQl16xFaoU&X-Amz-Signature=a631def128064d413000d0f3a3a812bbc9e4f3c10651906f7e4e3d40179e6ba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

