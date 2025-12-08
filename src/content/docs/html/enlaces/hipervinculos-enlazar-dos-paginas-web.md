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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUEPDYO2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T123842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvPO4wqFHUoVbsAoN9NdVEC%2Ff7vT%2FMQ1qCJowWEIcUQAiEAgg9qUjQpckoy680bzjBfrQLQSJ8xl15knvc6k%2F5VA1UqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYD2VonXJsG7BRzzSrcA0TeuWJ%2FdO6BHWc7vWyKkDxLzTcCZ5ClXDkiu31oIUH53QaIYEBlFZvRopZPsi7kYvlOgpGWJEhbgSA1xUG2IA2D6iutREvMI3kRO7D3bz%2B4Xfttl3dOx1SyJSr0ZaKayrCC0iF1i0F9%2F%2Fbc4%2BDUOFsO2025R3AqELDlZlaylP01c3L%2B82uwB3Wt103vyAzhvV53i%2FN5TZjmNWqisARKzz5sG9c7fRCUZ4%2By3zoNR0gH8s6hIwucbhznHtt6k2aTE39zUDVNrEczUiRv1HUSpMDsAvuMiwOBcIUGFnvFSgE1ERQ55Tx4Ou9BczrIBXTZg%2FkLMZxN5d0ANuWDxov8rd6JSy4w%2Beo4TPUqvlrVoVfk3HjsB47go9HPxjj4cbWca3f7hwUI7%2FqOXR5vQW%2BbuIPpuVQZjam%2Fvm2zR7yA46lGa5NXxTE0bXlRba4w6G%2FC%2FEtyH%2BVFBtyFwNAHRgOdg8qzlV6bBPdyhpYkLWGrhWtOksCzAG6dpP2oNzMLSmZ%2BF4gvFZGPyoBP60UCXte7dn9lYHOD2EVVNY5mkWv%2FQjM3hsmdFBtJyPKeQUcb2LDVYM6ZWOKXkJesb%2Fcb7CAP1DG95z9qWCLji8JPVyN9dPaY41CZtbhoREwJ%2B9r6MPby2skGOqUBaWAxmAzd5BukklmC7mck4im2gl1mQ2MLu5S28deXvN%2Btc%2BFf09HiO0FnrmIycfenG4L2Vcs6ofM12UFwamWARdEOX%2B8OJu7GXQbp0LHpjw5W%2BMmZ0X1BKooV7V1pWAmXpdM9v1cehezRtuHsvK%2FsHtw%2FlKJ6wb%2BJPiqPNEKZImHSTkheCtie%2FT1qsSE7Eg8%2FJrn%2FpOf5WZYykG7CpAyHp9tcacBC&X-Amz-Signature=c3bd6f083923996d3babff47869867c8d94dc2032154fcd84590e97978c22249&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

