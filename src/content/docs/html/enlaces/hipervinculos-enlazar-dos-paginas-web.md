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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIR2S5HR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCN3J%2BbL2ab0Sp0wY2TeAqgVJ%2BHvCY4%2FqhtPgjDPUE40wIhAOibsI8K6uAXFpab66jch1w1pUZe8%2FPvyKSgtNsNsW4LKv8DCDoQABoMNjM3NDIzMTgzODA1Igw6ccvRneZO%2FBtVyIgq3AO8Q533sK4tIPLtXwGBe%2FNrC5tfyDVyqDv6WIP%2FSVUBd7ghXtVYCkaf5h5kGrDJFc23U3KFJeHytOO8WmTcUyuOE2yiokmGGX606h4U0mHKD0lfUrnH0kNPailL3e%2BXilRxpFRU%2FFvvwcb9fmNZ3S%2FedaFcsklgR6MeDxIzBGXaS%2F7T0hC3o1NHCqhuJN8rTfJFwAQgeVhX236I5wax9rZRN5Ftyio%2Bvn22xH6hd%2FuL4WmKWlFoefNGTrXpjAhDFySFmOiXsJGwi0Q1Ab5pE0Jx0YPhVnWglI8SEpnjdqFL1ehV9QU%2BU8I%2FqVAi74i%2FeSzJfq71qfy0pd%2BXwmGJ8YETzgAdHB%2FjDzUtOJByEsry8RPnGvxxbKAzV09WqZrMpY7u2d%2FBseP3gToJswIgcJ3zQZc2DA%2B1AG1lx%2B2%2BAd3lLRxc76d2icvNgRCQ3n%2BpqsBfND8r5Ug%2BqIeXErGtwg59xy33aaimsY%2BpOJrNtO%2BdxeP5ZCELrgjpF1AHuJ2JMMhweKUu42aJ9DR%2F0W3CvxviRCS4pAX3Hxda0xz%2FpvCPAZyKw%2FLfvCRUa91JVrfwi8bd2a0wr89ralzOZ0D3slkKZKKvXsaHgCTlclT38E59O0X8u%2BhaGWAxNCaE4TCLtcPJBjqkAUafFS%2BYtGcQ8GHRZoedh%2B4%2F%2F3v8yJtR1Mr0%2F1gOcjarZqpVhraXJxQLlSWsVlbwaYWgRtwHDo7IrHffuWbDTG31V5pEWhcj8SL%2F%2Bs2WM5GlkV7nmnnxUqt7pRmPIXDlOZ4ODLJmRRQ9LEJLOaos63udZ1EPIlKIz4hbCM3hHSiyP6CQB35NvKbqf47J2Acyzx6krGreesIgaF0lupii6ed2NixR&X-Amz-Signature=661d1402d22d0ed97a134d2503dfa594e32262368a17a26931e2b6e076c41fcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

