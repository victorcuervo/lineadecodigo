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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646SPADQX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T031503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDp8SC0WZ8KfVDx2M160VZUYbGjfNyxmuULNIhjc7LE%2BwIgCiZyQcHs2PgZb8jQ6XyePku9YYN7k63bGbC50OY%2FLH0qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGey%2FWk20jIHLj9DQSrcA7upm21IvC5oLwjMCzXPOUOFMsKUAA8prSWesaMyJi05mKMszoPpgJdAVfCebF1AvfrIemIVQUYdfe3G6eWxk%2BdyXa5fBa9pcxmmTsKhE8Fx0oGXTEmO80giFw%2B2EcxrrDlwgc5fgLjnK09Ila123XzVVPqXmtAMG0tmlj7GkpWcNDnOEKKnBXty5ES%2F8vQ4jNMoLyBYAprluiNCc%2FTz0EIAtGmoa%2BUVLloXrcANTT6ED0VvDFoKlpuataNxbo6mCFYSBIS5bN0FXN1Xfk28HI%2B0%2Bx5F2a0xAAkAZN%2BAanmz%2BqQP1Nhj5QxZPbfybjPSIrzOVwqt3gtlsHKXgFHUQJnVzhqd6lMF4kOig95FjzczKcqpN%2FHHGUkt5K3SqGxf6GmPhyLJ%2FlKpn78i%2FCUJws%2BKiBUAEUw6Q0W11i4nTs%2B7iZ1Klq%2FIM%2FFSRZ9LkhgosD6m4i0%2B8k77hb5pTWitVk2WTUKlGuriXuGe7zZGEdco7H4YThH3FH%2FN0%2B7GHQuX0rweiOHEZjbsn4%2BkDp0eaAvOx7kJQr5TXJoxvDI%2BEzJAbSgx0ZTpFcipebMdT0HDpn3q7mDAsm1WwmGkMb%2FsPyFRe7X1tkP778ZrVC21Cih9Nis63FMGUJaiR%2BIPMJ3u2MkGOqUB3ViIPVjv%2BQQ%2F3skYyQUzdjqULaY7VkczEP99GZ1S%2Bdh6xXWoTryrv73uqbba04XFi1EmTxruHpGD1xNeH%2BiUXDkXgMd%2FmSKG3lBdQ%2BICZboe8cq6m%2FkLySEWBmX5yEmEY5U%2F%2BjOQz6%2FYipsGXDa%2Fgl7NOe%2F%2FNr9o62ASt2jqbgg%2BEkkIFxIT%2Ba6RC%2B5O3lG7z44TJQ6atiiiNoLE3m448oufX45w&X-Amz-Signature=b852b231bde95712d120b0abcd775b3c6ef1cbb90765b639d008545e2bea7f51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

