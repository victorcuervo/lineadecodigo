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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCUHLCMY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T162853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaVciLGzgdLE%2BFQYC2rc2ZgVGQbcP3%2BZ8RLaaZPBLDPAIhAPi12CdeCQWp4tGahISi0fmurT6CTkhTzQd2b2Vd4b5LKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6BGm5c8ssFBmtsgIq3AOAzzxugrP4PXDzZywGgt4TZooukmvxe%2BOS8p%2BkqfKyEBbI0qnMVnpI%2Fccor7z0LGjbhacsD%2BEJ2T5xSTK6ZTd9JOPQ%2B5twj6VP31Si5uQSuFqZpqejg4LUDPBfTVVKvU9Ruc8TNQlg%2FV5Gog6%2Bd1UbRaM%2FFvJnceLWuOV1p5Mx5LJitbK1zXmpgjc06SOopqTvMDuORuGmkCKvFBOZBOWy5za2BMzjWNnL2h6Kpp%2Fn7Jsg7GgrmoE8EJY%2BVyMfD9%2F7EEEwjrShN7itbnIjkjpWDD3Vf7lK%2FUXQnOhlKuKNAb7TIoVQx1nuzlZFl55yOliPcooqwK7tHTF6rUTKxiO%2Fiy7EUyxQMFT4FXxCZPKgXy32Bzqx6o%2BMHgSznkj05sLUQp1hailZtPuuSRhaMBeGR4%2FQh9DNA%2Btsqm2hQsH7znPJ1aLWinvgbeJdYfgG3RTrWw68fOmKKvo3yJF%2FGt9iAzD7yqEwFTFejXEXKXE9yenVl%2FHPZ56jWWH3s%2BPuHpytKWv%2FGVtNTmx65ESmYioM2kTy5dwnCh0ctsto1Y9ohyDrtNTA23bOZRenJ5MWRLLwgU0CpIGO2QN%2FoTWUFUx7pnuWtH8Va0qk%2FdJBIqpha6reWT%2FCK2lGAk7C%2FDDpl%2BHJBjqkAeoPf7eGpYMnvgkHb64aXkHyO0gxp7cmVWuo2%2Fp97XGosTWgQooUYTIoovQtRvxT8iP871ugTErzXjCjayQmXnUkA0Ybs364ch5FoKPiEHaCQJByLhMGb9R6FGqgneR%2Fmx5bh5ezF8A7rbhe3XLpFrZuLxhEXhrIWKneD7zV3OP5Cnqgt95%2FcRcT6iZ8f6AsplYLXFGLnhHE%2FkEYViYMXH2EdZGh&X-Amz-Signature=1c7a2762637d2df1fe47cd19c767f36a9ea8c74b350c09243aed69b407a8ec83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

