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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NNS4X6D%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T231200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1VXDlhPyE1%2FK5sffnfe4nA9QWZ5dG5LCQZS5aWF4fVAiEArqfJUTSquyywfdBVRCIPgJnbI94CyiAqyEvKRT71OPgqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjwvBCaApty4eg9CSrcA5pcbtxYrXuNMVFijT%2Bse5A7WYTgpDfypAZXc1sVxAattib1eEE2VJi%2FGs%2Fii%2FfxNh1vXrntp6lsoX5hdZ5NZsao7aIgVd5ENKjjxa4LVFmx5ODxlpsz2gJISJLu06MspkJRtsJz5tjcNKrobbP557T0ojta63ptzGAh0o5dOrFNQlpqLfNFE1NcKvfL%2FH3crrtdzyVxam6nYQT4QrqHBTz4%2BNbv3P4lROVyoprkquK7FEYo5QHNgns0Haq6vEAacGit2JXwIYUtQEnA5ITa7sbBIPBD%2FMNIGECTpBMLsdRv9LNmxB9K2dejomiJzuePc2xFyJJOZwLwQKNlcgCiT83uLPzr%2F%2FxxX%2FSJZLUadBtMhZfc7Dz1XA3gyP2nzcg13Farma0KoSpqnx0M0BwPin7HLaPra9m%2FLGddHw0QEAl%2BdQj6QLCyJ5Ii35diC6agIWC1o6WHcYRfFFnc3b1sD8Z6Sd5vpBA6dVl2y1wSOd1Ltyx6g5unAnYk1%2FCoCTO6k0nlOX%2BUBkmR%2BDYCzD%2Bm3eddqKnW9Y0hFwBTIttyrJHU%2Fz6y9c3VtG9ikg6rXHf%2Fi65xQ6jKebbPoZv6AmoJIg0xj6KgW2dnObVPdT2l1qTf0LdbRiTZL%2FiwBzqJMNmh3ckGOqUBW1IrTTBZ3lQmt3U7BuMnQp1XHnuJMLCDaze5yR7Skl%2FQytIZ4MrSDKxgI3yrm2ifgpp63qjP2v%2FpkPqCmBsMz7G2v%2BI4nYPWTyFKXH4uYv4sJt4zL5j9uUFDRrmCj01%2B4AzhmN3fTA2d9CKo%2B%2B9JAdkV5vXQS%2Ff0efCjb56raryKoedorFm6oP2TXjR1bSzxJXBQEcWqHUz5VLJS8NboGX%2FdcKUX&X-Amz-Signature=3c60491517cb4efc16b5baa877694b075fd23e65cb7971e8c0c61afbcc4d1800&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

