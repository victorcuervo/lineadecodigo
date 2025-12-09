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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YAJEH6T%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T072136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRdJoJuKFLvWJj0cfrkf%2FdzUtz3LIKVSC6XGioCpjAaAiAxWatS6Vp73Nyv%2BBlEPs6o6VSI%2Be8bYH5PDSOsSL0vkSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq87%2FGMcAS2Ku2N3bKtwDO6GQfqO36oFX9OA66tnsuqATirAN9Mfr6Ws9txMWjBuVjeoCI16b%2Bw6e1pFtcPA5oCUad8nBVEV0%2BHSiL7QFPuxy0fan2MbTgeU8bKrYnCg2B75Q7eNq25PonhmB%2FwVDH6aIcDm4jj6OCH4%2BgIF19oIlmipoztaCDXyzP67PfZUwWTYaauGaBsrAvCeY3yyF3dRgzRzYpNqEti5yFelILgfeCOnld0RB4CpyQbSMJ1%2F%2F0P570uQfP2v361RNjAPZ199gmK6qgqEl%2FgbYmr4IdiQIA8dDxGE%2BP1PYP%2B755C7VeWaOW5thOGIUCZt%2F5qlQV7KuE9Fr3xqP2WWBDrUnqEvnWDUPVWNrf6saTrx3GHNTvbbKNdv5ljtUj7ohXyX3IO51i4f9jb0C2y3MDFOW65nWKtcvxO%2F9EXeuFEOVRBViAv4MNsioVpene1GYXLD8yZFRlK9GoDsgsmjR1dhwLXWuJPRedMt60Yuj5glzAAx7mVQuwhPEgC4xvzxzAXvDgJkw2jnZyZ3AEzfnxDS%2BApUbEgFViif9rzkx3pWr4Q7k48agaHGrfw3SIfq9YY%2FcQ5LouSM5au%2FwWKN6kBdBv097uu3nKc%2BYvB06NocWFt9z%2BZVPArWwzRGSkIQw94ffyQY6pgFEjaXfQwdaurpnIVqee7thLGqNY7hLlZgbG0e6pvittIRDNDnwXebQwoKCagiIga%2Bjvk9Phw07PU2wVQ8mB11NZoDLwMSGbtdBmqHIMmu7KSE0EIlq8%2BbaWTNvxCxCdDqhVfylDk%2FUrcUJi7KuDrJxavzJ4ekoVS9XMmUfrT4mSBfKd3dX7eqAlJlt9fA6hXFZ12GhW13xUdAkffxMtGUcrVp6Je9t&X-Amz-Signature=8d7b75d7b6a188d551003a526a2b3aad5670d8e6dfd052edac878ac19b16abaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

