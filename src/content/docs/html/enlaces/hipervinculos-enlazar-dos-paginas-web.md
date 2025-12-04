---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624TMD3XO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2MCVi93FGg8QNwtKnQTbFiMcIN%2F2%2BMaACbVIsg5Tv2wIhALqjaiYW5MniVAwa07K8JHnF7Yi78g1H90bgwW26e1w2Kv8DCEkQABoMNjM3NDIzMTgzODA1IgyGrBGUSXMeWc%2BFupkq3AOMJlJZHtgI%2BMG1YmSGUV7Ov2%2B50WyqgjsRsYc3Cj6PyuEikHw%2FQ%2FV32Sea1iI1KP6aUdAvoecsr1qSzcE7IlU9epYEHR0qkQ758T21ltAwXb7SojXIK0ZdpTuhnvpGEvBkcHUemVvJUSqOM1gyru44safl0n7Qve8w4mI1vr%2FOZLaoVJOAKfSn7zGH%2Bavx9Fd1i7WCGygtiIoo%2FhtYV5uiY0q2X9LI3jpmegj%2BBGpRKN5rdTc%2BmcynmfAxkPRiVT%2FSMhR2bDuzD6Q28xf5WTfrwIgJTKo2uCXYE2j8SnoNgDWzb7mqyq0VvsH4HwwA8V2Lc9oAlF3wJoryhqMjEX%2B2gye6tDTNeniBEFMfnJSJYST5%2BJvAGbsTWSpSZprlmvzCDImlR2E2pN6NfpLlh1ISaRtAWZvtXiwWYGNkFwm6VsTGtWTzrjUBetVoHA%2BwSV7E7NlSibxoT6teZYRZpuAcsGbgekESOWQM3ydwBDbCBVHmJRmrUNupUpOrfwO9YbDvLdhbgMq6aMAW9xlaNTv1mr3GZg4L0D%2BR0VdWNHuqVnOdggsli%2BOeiLwWtPuz2PN37GFUhwsLT2yaiRumTYBjskWjdE2YAGzXscKG1iyx3Im84WpIA0Smfgy3vzCW3MbJBjqkAUWi99fnRGqMSkODwjYSNvioo4Y3zzxa2UFgMQFrOUWUi2qBVAy1rnsBFdktFrASBg3Ifjny%2BdqyaRM8dp5R27wH5zrINlmlvgj2jvBnhnCrVg82VFMJJGE0b2IBrXn0z3vKU9DXtMim9qHAKzvji50Wv%2FAT6yHvPPLgszMh%2Fv%2FaXFg%2BrMO0nPds4ecPlmRLdTyQ2FksmyPBB6HnxK8%2Feniavmi3&X-Amz-Signature=eb64f8307846888c4b74b8266e647bb080d7e2c6337ae925e591331211a09ea2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

