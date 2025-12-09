---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3HWXXXZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T181148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0E7gEIwfOMyDVrm2a5UOsDqsCPRTc7S52HkaSj1b1yAiB3CTTaTSSPGyuwkYKesPEFiDySa%2FDdWNk%2BU7gXjf9XOSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvtlABsrXJnI1DY2JKtwDT7t705peDNN%2BYAOoRpTz%2FzJC1Q0mP5gRwocEh%2BxbLdDEzn%2BQolRR08Wv7yfnecau18IDc32elRCvo19exlK4C4K4yLteZ3Il8OKatkCgzjxajZiWRaXMCLVW1ju0IxYXgji9hJLR3oUkt9bp7JLBVVhEJZ%2BZj5JqpluAOv30cSa1t%2FSmAvDMCuIxntNrZx5dTZ2nKn6b14os%2FELUHsHQ67HnHosbl2NxByPJaVfcMqqLHDItkZtQVrdH2oWjwvhDvIagUJ7j1GHVxns5XIxldZ3GYq0ZYAOj9hfN3jNxDY2wIPS%2FzV03pjaoAr%2FqugmexmOc8clMlqUv4XPy5Ba2lAriIqqgXFlqwVZ4eLSSZ6N9Yh3B9UhJ0SVRpMmfznLQzdSd2qTjhLfl%2FwAF8ohFEcVlN19TfrCCf1yGsn05G9qnh8cP9uBnuPznErowPZgldj5OC8ZdShnE5VOCYOuOsHs0fjuzPVIQObW00Rj0F%2BrB9Uh2vI8Wnw6tTNSHvptpI9dHrEih8M9M2BcM%2FH5y7e%2F1Lee%2BHWIe9bhvP%2Fy2MgivDS6g9X7%2BfdArvRMaMjgbMH4S%2BmERwb7ZxcMMvA0Kkc3CMq34KcrI9yhxLiY8hihehWMVmFEI%2FZlImYgw6LzhyQY6pgHiBHjzr0mX0fPsZRI5%2FFOQ1jZ6y%2FWMdf8Fg1PIc%2B38DqsPFmT%2BuQwBKmiM6gglaYSGxQhtxVSkIPmsNSHpzjF%2BxqJSCax8%2BSOJNCyZKeZAh34grw8qN%2BKDRUknRgoA46cQ8tkY%2FmW9qf6F9uwc%2B%2FF2NY4os5%2FB6sv4rxuHTKtDbGQH6Y5j8Klb8BRPDLsG2y1i8t1Q%2BI9XCCes%2BxU40eYfHbfikR9e&X-Amz-Signature=7742068ccb3cf934c7ce9d72779befd53c20176992174f5a959e911ce69a5866&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

