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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS2V4FTD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T130749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICEvX2J5sITTXYY%2F0q8XQ3GGG6C0zthkMBoX55QnPfpWAiA8NAHBgreFiAkjivjVbNJqe%2FrQZlsmm2IWHIIt47XbByr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMVMw%2Faed878EPS6eRKtwDF7G78OmYJ%2BofmTG23fl1NlXquip2uuGxF2xebLk6YEhPOkN0KTPmwFkOaAF0tQtmeN7e2N%2Bp9me7E1BhcgMfLwCc4HwP0DUNW7YkWXKBzgplYVh17y5kSXOQXflU%2BM5912jaIwnCfltoyJ3mqhLWVi%2BMpziiFcmUA6LaVcJ2IUnS%2Fo6ywlrl8U2UIcxOzrVkUyc9EUPWJozdxoHE%2BuRno8LDQ0XKsNUB9%2Fuo2eV2cttozMHl9734M21J43zkfTC7BQm30HOTWI3yUW3fsMSOG%2BPYKSJViwSZFM5JPCMekIG8rsb0p9XVFV8eB4lqUHeZIJV7LZRmudyuClQxpYHVz12rkgsRjInjnVJFuNNSlAAZFG5rRylJeFYxhGzjRgS%2FQ0t%2FCsmreW3gHNiWBJwVtaPQUhMv%2FJFCZri7MVHPysb9aF65WQmVXIsS6Vljs4hF33rVCwuMD2CgpMKZZ%2FDB7GFDmP9lEfX%2FIXINc42jwjYbIrBMUbfm8EiJSUR3sCisl1voIFrGB3iVrIreJkKjAYTZaF3VODxSiNI8vlwQsVrJ5Uasl1ZoCagR10V0NIXPo9dbdCt1Pevv%2BTLb%2B2jKhPojFb2xMOau7CoFKz2NYSB%2BXoNgIZx2qmqaG7ow6tLKyQY6pgF%2BfFV9fLwuE7zcw0FYsFIRmsYHpIogFTuHlovvEGgs0IGqRM3OhFA48as0%2FDlalD5XIk8d5RasXsngdv%2FtOOtj1%2BArI%2B4E2H1fstfAm66fKHEk8xbJ%2BbY2ZjO%2FGw9VXFUi6nJMk1Ngaq0QI0mTkGKkXHDEo2%2FWQi0Zv%2FE2gssKxU%2FePtZk%2FwO8NbwqmQqzR2eEP6ttbQkEeQrbCN0zMl1Teey%2F%2BlT8&X-Amz-Signature=4f35e4e611463525a2b068389875ebbad15d683e09956b8c502d65b95f7db502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

