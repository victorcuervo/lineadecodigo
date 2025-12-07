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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOVJQBG2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T135548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQaxcBKYTa7op8Nx87QZq%2BYDwP5hhH74BBp%2BSNRDGqPAiEA9QCUR%2BoSO754TGv3uNGhiH4X0lLWwQ4YMTXAwiuBpkUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKrTncf5Y%2BMtYT7fQircA19YGGwNZr%2BZxLOqBZOZR4kTlnrJ5yfPYqeGyMxefNGJrcacxZ%2FZVIu1hZFn771AlYuJ2GCfrQn1QUTAP8fNpaTjrlJu48w56hw7BMxsf45gknCvdp2fREnSvRI4A%2B9lysnfdSRLYneoHf1r%2Fd%2Bj9FeWaPHPWH%2BVECQbQqACs1hwxME4jv9qr%2FzODvg74PTQydn8mhT8QHxZl7inwb3tdBn9ndk9MAdjQFEcJXWVEayk67oy5pQoNFPiZqTCib3hj8S%2Br46JbyNRh5zeMbzbMYqTwz4qgHakvmyC7Tm%2FfEGNIbO4kKNXfzi9VEX6NCjFAt1uG1LQizw2wPzQLEtMgKZAJfWCL1HKkOhfrv%2Fq3N1G%2FLD9DzhmzAov1LBtg8DDBZ5XQdJbvDc%2FPo0lYZpkYuy62rdi%2F1uO8uYC8KZ8kt4k9O1nDcwbYAxgNKwFaZZyWFhqVGjN093OZKJbngd0ZK0AdqAjntz3WgKKhvB36%2Fj0leekYqZW5XXoDxP9P6Bl0gKCd1PispzGDLoo%2BbU22ZljDP8iwME1WeYhc16Az48D9KkzysalIaNAEkTL%2BGuqEPJ9tuxyZ%2FQ7ERg46mqOQIKwV8GFNUk5%2FTkiZNSODdJepiJkX%2Br2kTIxz6C6MLaZ1ckGOqUBXi%2FjpezoGbyXq%2BrKaKmSAQgqrf1q7sKQ0Qx3%2F63DlV6Y1X3JvPd%2BEf5moHspteTx0qXT79TPkk9wd%2B8VKaStEA0DxnpUQf4QlzjCb9W73BK5G3dzOzGcHo1%2BzyHw%2FBG%2BP3tGmKTblqcrPyHFqPlZqGGnG4N6pu43EEl2b9qB2dWiFVBZsL5cn%2BPgq0nyAX7Tii1C6BqLwmX5I92pCuszHmgEh07w&X-Amz-Signature=ddb13d0529706700a04197d004dba374cb2e1567f999810305ed81e4edf219e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

