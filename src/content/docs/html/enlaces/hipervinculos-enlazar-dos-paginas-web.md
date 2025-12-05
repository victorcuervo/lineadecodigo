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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GXG4WUE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T175701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxTl0mSvuhXnnnyIq1l1nrItr0psgta%2F%2BiDKNNdXKOxgIhALpictAV9qO3hd3rjZ%2Bx7%2Fmd%2BSRrJ03hACScEKWMjaCwKv8DCGAQABoMNjM3NDIzMTgzODA1IgzLF17xmvmZdDMIbgEq3AM69zUlytpRElVTKtlw4S6Ua4EMqlpczG5%2BHUlxihlgy%2Fq7Te0GEEbY1D5DGCop7TtSlgQAIQ4Ml5sS6b2ORen1070xMMVW1zdyYrn9sGT2xU%2FaiMUVF%2Bi4PW6CtAXUvNyakldzTlFHqHfotZUsXGStbtBMQCpwkecVUJJVvnAZW0JB4Z10uCi%2FfTb5RKXP2gSiec79NlUUQ7Bk55xru7ewR6YtSLEQj91wlMABXRRyUgCUycz6lrnPe11d91dd8bYe6twnu2IigEVZI6CXhxqpLSFiFncy4e6%2FdCvCn1ApELG%2B3gRF9EOztnOcIUb4mr872LHTjLbp3CGRZz8QGlIGgx5PvtrZ3gBCaygsv8%2F0ClP01eZX03t%2FNDkAIxMS5OAWuPBOXfaKUL4zvx%2FqGNIBox98UhwS7xQAEE41gRSp9BMYNyULFD9JwtXgfnT%2FetWK6wZqeB9Q12OL9DdEqY4FjBbe2p%2BZaHia3yF4W7fnwvaF2Kq7a0%2FCHJKOn7nXcMkrkw7pCHg7KabLzMLWpB8OLB9GcvDKkXrXCVS2XvKQJhlNxmCswRhvU3rzZUbmGOCU%2FcPlY8mbFp81647C%2FCb%2BUqCAHVgMG%2BN%2BeN1VNhEruqiaWU7o3eqChTr0YDCm7cvJBjqkAYM%2BIEML0s8Z6MgCO9Jqx7y4C5CA9tufNdMGvtdWI%2Fo6ZIO8Slx5MxUyx%2F0BXi4XIu%2Fi2QWXR2%2B3ZsWX2F2UO2uGz6Z66wAguY6Ny9OJFa94z1PJkmbmN5hWW55aZfk5bUjfgY2lpI%2FMfl8h3I8TWYe0qlhmAGpfV9uqfUOuo4L6Rv14f3z6aAFwn8hyBUIEjNnTsguBKLK1ZKk4NWf2sUBM9d3H&X-Amz-Signature=f05af06d9f66f85cafa96d4325986183b6d6dec0c379073727ff0315e62987a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

