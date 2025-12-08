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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQHPGNOY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T113556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDE8KFD65Y8mklDGo8a%2BlBqTtXVmJft7l6SI05GNE3ORQIhAOtzoWxlajS7O0gGKB5T3ssw9hj9k0Jbpv9Z8oGVu%2FJhKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMBBETQKunPWuWwuEq3APSkA1XbA5npL5dRhKtGVbAc3SumcdptrRwLuEDnOZJeo1EO4Guo0IyU3iRG%2BXPL3qkZcsYX4Kk1U1bGzLxn0jiohs4PEpl5kibkvBE%2F3JeoxjvUCIwUODHArLP6JSon%2FVOGJl4j5Gp65Fd5lB8oxTVaSaZ4FjeatG5Rtu%2Fpf2QNm3aPLcPEbb9jIJV6ojdpbcfQT8T56oKvh1XN2Vh3Nh5rOngVB3f4rMZT0iP4Ogthl3uYtTIzoqNzQBvwAis48%2FlJhA9reCt3JaOFtJ%2FpYkJAk8lA4FZ8lPciG3rGSmuWs5OTPrQmGUkJ120HiWI%2BCFKKKfpHbIF2Kw3yg%2BBumld8Rb1bpexCf8QD8WMbyZMwCHdFWJSLAq2AVYKFukYrRVZk0v28VTycsYueFkQ8qcmsP2F2gtc4rWQodxmj5T6%2FEUXO6ULLXmPqvBt%2BQdObfV6kaKs2zZ4CzdaHhZfAix6D9cG698cqVRbMSb4RytdWWX5z8yRwIu1RsJRccgpKM%2BsdaO0KJCQeay%2F33qo2xTlyBcrmtjOvleOrOxytFYLDtIPG9326aGyEVdE27FbxPxr2PCMaNVBlQA1pr9lqNH78xyYdUTI3DWE%2Fgq5sCGCXYhLAv8TjIhBaOyxozCu7dnJBjqkAVbxFpiHYa%2FPpfVNLNjDN3lSkt8eK9yvWetZPfzBwUX7DtybNsfELfozYoHNQXVLr3afIxjk7Ikz0BRkZKKIS6E3N%2FXwkw%2Bb5vJbVlLmIU%2FP3JfwB0zemXItjg3UH1VhBa2Wy6iU0J3naRHPVQ9A7qQK4JigHfAmgVla2%2Bk3PNJe1UGPghMrFNngoxf5tuMOSM%2FBYEIwF4wODioygTxGQcC9Sy9p&X-Amz-Signature=8e11d0eca2d5b4d19cb6584b80918025446a4a87248e55c752ef4ff951cdd729&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

