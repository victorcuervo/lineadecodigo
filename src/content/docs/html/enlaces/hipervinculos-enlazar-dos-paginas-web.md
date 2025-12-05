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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REVE3C3S%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T073348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCQ3GgjK1sRf47PE0avk06F%2BAszTn4bI0JCUmj9ThFEQIhAMxnlDwPz7sz78%2B27Q%2BisdSNIXa6L3iXk9wQ029nWvtPKv8DCFUQABoMNjM3NDIzMTgzODA1Igzn1pBuIDu79c5XT0cq3AO5hP3nRc0GEF4rVdLNVb1T5SBFw%2BRPkiGLfNUYr%2F%2FEV5jMzWgScWct5bUj8sCxvicUNIppRp6%2Bpb3OfLt0gXH6muKjF4bf8kXPFrBa6JbWMaDjzLwjnv9HZhtOPwTa1X1WcVXvLOZgOqKlCV3dvDdBr4amDUwVJsk4hzIpI1XxFqxIRLkO7%2B9nMtiVf%2BqkxVCKLfvMyIFTwsjGm7xtxBEEhUmAvKOwCVyEFT%2F2XgF6snoOCU0zaoTsD6zbUvvpqWVcU9zF6pJUCzRNn%2Fej7WO1DGKK5umY9mNw2N0KwvZpjxFlZUBAZfUca8cbU735FRbAOSCxyhUXOyAPsEiaKp85vx7Zecz0JlLC4UXHRpz4mYpmQiBu7OIn26wJcFPqHuziKfSoG1A%2Bu6aPDGhIJtn7Qe0fmoPA%2FXHOpZNjKt7CcuOZDkmuVebBVFysFC%2BF276ey21H2pctwpkpea4Hs7OrRtFpomhtl%2Bphh2BsjIUO2ocIJwGykouw9%2Fmp%2BklySZSLX7cdfDqCSBPklwaMczfowH840N%2FNSFxxisMi3tyVm4sCG1RtdPL1QPYTbjrdSrP5ASzgP2UAB9amon1qKkkfP3mVyWjbZhvYSibmCKBRD1i91Muy0byOSR1OTTC8q8nJBjqkAc5PEIb8jSllgd9I33nw%2B33%2Fz4aJvnrW0asygrZ%2BNC4DdwpC90hztq8rMwjYqRXIBFnr6dw5%2BCbvVLk7HqgzsTFXlAVmPePj5ztgRX1FOayhkjiaa0qfpV7nosjUXeRhkk0tFqCrR8q1jvm7OK0b9IBpLHkvKYclGl3yVlskORcNlScUPStZBnKjT4C9m6fyxj9bt7z5wPXX3kEtAo0CSWm244Ep&X-Amz-Signature=9a7ef0d00620bd538cd0c7cf1c7830e8f6bf4b748623cc72c7770dafd58648ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

