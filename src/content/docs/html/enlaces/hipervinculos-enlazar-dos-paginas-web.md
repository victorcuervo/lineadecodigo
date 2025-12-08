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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XWZJZHK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T065209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtY2BzteuAiv9JPiC4C6Zr%2BzUwFTbXVx3mC1OBnWsYWAiEAo46ZcscaRLpIgpbVLveH5ZXM5%2FqcyI5%2Fjo8PSUM6Gk8qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuI%2Ff%2Fs0MpwYDcQ7ircA4CfMWkOwMyN%2BY253O267JPW82rl6L6GvIepqUxQXAadKl4Q2QV19a9Ijs5RDFyUczVZ4OZoacwdsd8PKXvvmEqHbcrAcj%2FWAAOYs3OELGyzdBFqxEzx7Zl697l5yp4uLaZPxiYTx%2Ffbkbc7h8V19%2FC5pUx%2F3ILjvM8g6OSVBP1L3xGL5VpZqF9GMcSHGqbPsaoC9olKs75VsEUnYOEA5crTFazgTpHb88miXFjclEpjfkyS1j9RJ8zpZXUH5j819xdpRJihOh7uBo%2BpwxBeKCHqmK3%2FQcJYLGQQw2eLY1hcDpthcc5P4v0slUY%2BZrQtWs34ITcCmQhMSYFAvTZ8I0p34KurKtCJgzpMjouyszD3YNUp51lbf3yUTgMf9w0G62ClFijk8Vn46K%2FOJWV%2BkD2t5jncqi1lVLl%2BSbKh4WEBEx2mcGJg5qddQfVGQyKT5GYjKEv0WUfw%2BgIKNVpTHiLzs438Pj6qrBWbuZis94ohQ9JQCBhjbxAc2ExOuwYmP8iLq2DRRQFqJHLo5giqj6nRlgay7t1LBpQ8tpzeno0%2FWiwagxOPnJ%2Fm034gK8tXtnmMuIEOJH%2FUocPXl9YiulLHVB%2B%2B3Mkedh77uLmoO5s%2BHnq%2FymnmL%2FVTl6wVMKjR2ckGOqUBdETvl%2FYByqd4MxsqyIprGO1HNLUzDXywSw2ydVpOidmXeUY9Iw5n1eFlQZdDcNFmVR7hZy4iVDYQzS2%2F30471xhgs56%2Bwg%2BQts008XmEmWyq1xYS80sZAy5VxQAyVkxa0%2B7lTkSCxWnPfWOE5Fh4YPQUJvnqBlHMNmYQvM6SqemU0AdD804VcTc84K3Ad1eN7GgE4xESA40Dd9aI8wZQVnqaA2xA&X-Amz-Signature=12c0bbdb05a69ec05755148170eb64113feaa3e396aa4482ddaf1044701fe7d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

