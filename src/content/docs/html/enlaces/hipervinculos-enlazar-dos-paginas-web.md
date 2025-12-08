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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7756API%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T120002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAt3JUOy1IYLPvpJ%2BLJBndF%2FiroMu4jBSpC6tbxZi1nGAiEAnQyFXr7d0TQTH33p%2FIGcYv921nJSArafFoXBOL1NCFEqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGzVyfUsNk6%2FJe68XyrcA%2BaD7SVkMfcAdCiGWPvKbQbdAM3eMlQulbtx0%2BD3udBhIZ3B22Z%2B%2Fn5Ga2gUVq%2Fk1rCrSCrW5sY4RrNvUdkiHG5GvQoosdnyCGjqO0ZQs%2BtRoamEAOwDMrfYSxI9zc%2FfJFydlHgeGU%2FBSTQRva%2Bx%2FYrU7iB16EJWkxJ01SxCY68U02sGIX5fz5fnXgNOVbh2uWosMWo4c3HkT0Kfo%2Fx7HawrlGvtc53GG3YVvBBTFNK%2FjiDoNBfgBNIMELOIMJx2PngTcuu6pqnPiWZkZ%2BNvaf%2FZMrI0NU2HKzhGmmD83PM%2B7%2BZ0tu%2B6i3bKsXL6pPmKR3oyuB2dpI6pOimRhiP16DyQPewR%2Ft82a6tEfSdqm2D%2FUWEAT4Bu0%2F%2FFnXnViLWV3XrcWeFhyZ5v7D3VH%2BvhMFGn58MVefR%2BTNZ4mtE39N%2FVfFIKxnRpiwivJ3KvXpv1ETWhmHzRl4jfOxbocx5AnqygsEyJzgBJPlbYiMbp9%2BZSc1GZCvYzbTFArftpeW5WQ3ukryXiTcvsinF480eqAnmtDv9Ho9hkZ7IEMMUBEUHpZU%2BJE4YXBYilp0AkL%2B8VH3VVOEtjcfuuQOqWDUo1Ec002YkoxbaMnG9zHUgRheC%2BOz4a46vXUfzTjnMuMIPz2skGOqUBbd4sdLuu6dO6BM8U04BJQGdOILcd3yXDMqEvsQWlmc%2F7z5zfAQwQrFlbASsP9qdqLPMa3UVqiNQ%2FEZFAj996Qgfnjpe7Nn%2BnrQ4rFVMpX2dNVicVQlfWp%2FRkcOD9jHCH1SuYHjr7til2iep0jtJuGG%2FGZTj8PW0vnjxU7hjL3EpdoMGe8Io%2BoCkKWpqpw3eAYBAlVrXfknfoPxLYL6HO9Pfr5K4l&X-Amz-Signature=329b67f70f9ff4a937ebcafbcfbd7482f31297e656533f2d650cac6bf2e99cae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

