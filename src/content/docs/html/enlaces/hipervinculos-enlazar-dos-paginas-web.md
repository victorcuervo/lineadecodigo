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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDGLRZMO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T192616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1gNxS3lAEoEY0bW%2FTII4YiFNL6UiCdtEFVgXkhdURjAiAWZBb5GcZVFyyWVoPUVXyZetIMaIcIcTHPLkg%2Fh%2Fhq5CqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk8sB7zhExO0690OXKtwDIwMjCVf7zSDVLCRDBo0RQrDfhf5KU0h1yH7d9dtj7GKhmABlOcyz0%2FUe5XJXnzi7uhuI%2FRpRkIBWPq5awBs3VR4jEYEczis%2F%2FsrEz4zqQJ%2FYxnJ%2Fr%2BaDr3ciMDLzOkhow%2FH%2Bjr1B1WExiJqRPeqrGQMEuzgwzkgGNA0lY64yIW74YvmGiOdKfsAeVwUUnZY1aWDF7uuHGwQDcDDiCNRz2x6i0R%2FdMLvpMmXTH59viUUT9MJ2v7o0rpHi0RHc%2BU8gKFQeZehlt2aCvNDbEfN7cm%2BGkpUXaci8RLJtj%2BSVFgsuc1Cg%2BEj0fiXX8xuAF%2BGsD9XYxoxEHCDHDi0kpU1lv%2B2SJwatl8m6m37oS6utYvgJ7oLzQ2aiyfaUm8C6o8RSwoJ14%2FD0%2BZ45Ow5njHOCDE6EumftnyfqCVHsZkKpehP613hRccdEM%2F8pbviZvWhenpJ4qaSAkgYuBsO3U0dYxphCR5qjg1F35Gs3L1dqw5YIK9sULJv4yVy%2BgW4xTuB0NQS8vCNa%2BSpIitE0B1kEYorcP6%2FalF3ag5MYtHYNhd0eF8mgRy4XvOFh04HWFbXLGHTqhPrxWw3dsydJlv%2F4Rq0gF3OZA%2FcbquxbTliXpR5arVbWqNDKEKokMmww7r3WyQY6pgEyv3pQQ6jZsBiri39AC%2BKl8BBWO%2FsRzZ361mR%2F42QO%2Bq%2BD4l%2BKp2tFbcue7pvydgx53SF88rDXVT5HV0Rv4ZfNDxCrjgmg7ZYV%2BJhR21vD6V%2FMoP44zf301AG8t4Wv7fo2mc90l66eftt7RTeC3hr2u0Xd57vvhgfw45jJQkX7Q3jx6fpk68Z%2BK%2BYMqOi9FWoi3ICLuPeiwDaullu3Dt3mXZb9SvNH&X-Amz-Signature=a626147eaf91ab947cf084320e5065859ab9c403f04b94fe32f27b0669b2713c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

