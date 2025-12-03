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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B2XZY6G%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQC491pkqxRUVy1IPVTiMCqQBU%2Fl9dPxbmhBG3yzhHSGagIhAL6xfpk3RJxuDpfdT6rXvGbROzRz3on8NXBsvU2HAzm4Kv8DCDgQABoMNjM3NDIzMTgzODA1IgxPtLodDqk1nzEx3bwq3APj3IKgqTu6KbUcqXRhFHdclDGBoOJ1ngicjpwqcFXrzZUoWxwKY6J2Ul%2FfLsUSDHPmUjcA%2BXw3Rbf6eMpo%2BM%2FTNg2uFL%2B6opcXwL4voaqVHSpUv0RX3jJSLU%2FrBAeZ6Mr5VeBujxuBGi6iITmNBWUazYqWysbyhXjI5xLA%2BuVhSaxBkfkaX%2BHNBI%2FeMLueG%2F5rS%2FIZD%2BXq47hgt9G3Pbc19fLHm2jV6JXXI1YGuaP3IbIN%2Fs%2BMyH9q%2FluePdbWsMSFMMhXGDb1cSR3%2FMUxbQkUJpFt%2FJLQbhw03CVARXbH9%2Bz%2Bwlzu3UocJUdLgV%2BNVuYSbuPxU6oPXZSMEVE8mkl4JTNGmFJO9cFjZdVU2tdx4qbYIsVd5GbpDB%2F11s7P5LHcFp%2BGbl2Pydjn9NESeBsGEkh%2B5A3PqZjkxxZ6ntn6SAMQ8HCO%2BDIcMTFGPrl8YQyQtn2AA%2FaYaa1wlxtpq9nD5vgM%2BtnoeRxRLPdxfCgki%2B6vj9MxGehWr%2BWmRHkJ5AhA1P1oyomDnHxV3%2B2JXBNgII36UePEyf7lE6NPKFEO%2B6kCPzTSmv3MOnCLdr%2FpNjL%2FK%2F8MBO%2FARxa03Myzy4xPpDsSf4oIGHrWUZWHfpp65MOVz76tkWvsuf3M5jCC%2BMLJBjqkAYz76FrWJOvT%2BHvX6wLGzBWpbigdwjIjKAdxW4E%2FflOojr%2BVJMb3A%2BuzAR4ZvIiqehDHdP062Z57cMsdO3KRnDPYZqh8DC30SYDbIEqjpMLI6G2cbNCQwzAv3CoFLVgB98m5EkAejY5NxVagcJNGsQGtsbF9nR6ZDljKxv%2BVTqI3u980wvylDaQF4V%2B%2FMGqM7WBCQDuz%2BcqqWNYrnxvDUqDrNDrk&X-Amz-Signature=112e516db535862120bc801f792a216a69f3d3bb7a60004e5a644a66b6b0a72d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

