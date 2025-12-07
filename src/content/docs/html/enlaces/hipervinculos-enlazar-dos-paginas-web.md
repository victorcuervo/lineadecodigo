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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQGGM7I4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T041723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDngrmhhnbAaHvxAklLPwXNl%2F%2F2AcgLgj4KtxAiU7eJgwIhAIjFQx0ZDk5Ha%2FfTmO6%2FWzbU%2FuusJjKhPh8Gjxhm2PlEKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywSVZ%2Fa0jLLOEzoWEq3AOwtunW3XlySBxm94EQ9OZG2JeFxyF1b9M7o8%2FYeYyCGK5qN3I%2FJBilag3CLlothfQuCGTQcvFG2VgrdxR4%2BYqQCvbSGMrVKWtgV63zPMfAqclkz5BY%2BtnI20ryH1X%2FyXYnLtqVTPJ3AbbUs2GT%2FMfeqnwYEtjJzxex3Y%2FeJ6fJ3UBcSNq%2BuRDHjZx60AD5Jc5wXDDGzbkYYUZmzIcpBuAKqs5i9WerFRH%2F8DjnGw6eDII7JQYJlRkaT5TZMCsaL%2BdvjdQK0YVnR0w1Sv3sIpih0H8wV5QTF75m42KpUUhH4HKVLzoL0Ybfg34VWrbH9pu7SC5eP2s%2Bf8jiXcfqHJimhHDPqzVhpd%2BL%2B5fjiGuGG6ySBy%2FcKbiUu2K7O29%2Bp%2BLdIpzZjsFKv3wjnPttm%2FXW4spLkoYiny6EHhpON%2F7Ql%2B5QCmvS3jqpw4WoujN2Y%2BObSa8YQlGwk2sTEyoTvHIBhvBXYh8t03l8i79Rdwlyk9P%2BuwRRc4j9Xkz7%2BCxf3M2x4FHujKzA9QXPYkbMejfYdkqdhHRLQeXzWa9nssVQNWrlRb%2F716sYMES5FlvzK7jxH3z0KL5eBtzBiMoJcSeBRPQfMvyYn7ftMuPa0Zx%2BCMhFHW03BXZXrqXe0jCj%2FdLJBjqkAZm%2Bs%2B24UfdTlkgojGcI3NqdEOCk8lQPIT%2F517rBbMRZEXc5MnBHkGLFBtPFBp68%2BJeAiYRyOKgS3OTyDCQGIu3LVRRrf7RqAV6884j4k48lZ%2FatzIRCZe2xmSE1JIPHRZkWel6elCbcO7JptZRAunuHv%2FCTojwxr1nI0nXT%2BBsR7Y34xeMFrckSTrtsTPRqMduJKG7YzFErC4Q77CuKrtZymwNd&X-Amz-Signature=4e551ea21a1090971a220718749b190d1051abb61536560dcebd43d21cd4a810&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

