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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677SAPSZ2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T091755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCTwrVsaWzX080U8sBQIv4bxn%2B78enr53frx%2B2nW5DxygIhAOUy3UYJfKBRVDKysIlN1Y%2F2X1YCjzlvV0g0WHYf4n%2FZKv8DCEEQABoMNjM3NDIzMTgzODA1Igwk9EjoYZX88HrPt9Yq3AO1gRXNWWNNLsNFUBXfiKxw%2B%2BH5iJSiGka66Q6HNuCfnX1ip1mGpSGLCUc1K8BA6N6iOIhIP1fyIiS4VfGgyOYMk0xycdVOtdJdg5IAdkzYK4oIR9jGIBluL4MbzqR1LWqs%2FeFdDA4uxGdJ5bZP4Xk0ipaiUO6iVxZu9tFw%2FtlMYt9iR2XrVy2R56N0vuuCnpEKvOxc1D7PqIRmip4W4iIPu67yC7BDgwfZfO9BamOSfxIPTAPvqc%2F5L25Ve97krhQKgraATnOXI9Afwfk5STLjOIn5GhmXqMlAXqAmfwBqSUy%2FiMXdcml0ycHg%2FRjYncn9LTjm1a1WAJffru0WlTzkAoMhOJKzHXyz6lWrit8MLVt%2Fl2lP%2Bgqu1hWQJFb%2F0GYMTOShwO02kzdGzTO57CUNWcsRZG40%2FUK8qCw7vU6AVkHiVbkKwCSZ60xJ2GRVyEgh1RXldrlWMxLhRO9%2BCGTiO2MH7UtOgdkRYS2mJmxvTAM0vhtiQJYIJTYy9n4Di60nLNQEj7zh%2BKQvB1RQqnmcvyJvVAs09TczehzvwLoJrCyxo5Zib9AtDo0Dimq4DncLxI9RhkU4zIPYEqpahIUwZs8GOToxoVfOGp4EqCPOUnbl%2Blu8BL9y6nEUgTDhh8XJBjqkAX9fqLARxWEk28%2BIwDQHDbAOrhgOYv6Ty32rwiNGdQ5GhMfgSK%2BbaCSofu2fcVp5oohqUukdmmAVTL4p%2B4qMZI5%2F9XVL1jju%2FdtGG0DM6zoHGvywEyFJ2UvB1ajQOJL3xtwBDo1tM%2B0R0YbyjxU1DV7rvBQAlCo4IwZyhiHXzLUYOFxM%2Fx0xG0XcIZ61JBA0d4cOnSGSCCD9ttkf9W6TYWc8POOm&X-Amz-Signature=ed5fd1e9504e723921d4ecf923c0528684eb3e7a68529066e5a559306600378a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

