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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L2NKZEO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T183344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBcdxJIUQzJiGhKm%2Ba%2BCVvk6I60gZLpzHeu0zr7bFdKwIhAOhh29JDee7BLa84W3xUuxlAcTiX6xeEV654qJzvwhO1KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzwdYQUyDaGdZTX0Qq3ANAWTxsxEtmh22rzBCP7ESvTUVj95bFKetjmAuPoqR%2FSvU42bMArB0Ap3pakHrAzjeISVPTM9TvfD2Xb0eqxBY5VBz4trb9pI8a7ObBMPWy%2BGEEANQpB4HZDg60MTvzbVAP2UeUGVrf4k9cjNCaLRHuqxiGlpqNuA9Y3AEe6bpnofd0EmnF8fYquGzGuhw9S3iB8DazTlaTge8034b4ruF1orHfzzTG3M2IKq%2FSw8nJiF3ew5TlH9tiGN8FIMZFLN0kR3mrmYeKBWJtFBdQElNm24zDBc5YeQNbYhvM%2BhlpHHQys3Zn0a4OxrVJkAAhgXHKnKiNWH0wGGlqNzIgIaajDVQTfKb555JPboRMLFHYSyXpH3qdrESbLBCD5uRxY%2Fjhq6UK7UMF4WvniDmOJbnueYujx5YOYzVkgR2QQndk0ZyR4azQGjZ5AcrXxReoPwdOfo8Vg6GdRPHe7UYHl5vPSAEhEdHj0BexvQ%2FAJ4drcIHOeCndmNavtxMswuT6SSz6DOodrfEe6%2BOzuDs6rHPi9Zq5da%2BgBo7Jl%2FI%2FSC6mP3wytzTRFiZft6Lrgy01rpqO81QGIirkdNwUICwTGJo3VnLE4qeCeBHzuVy8PsyYBg%2BnS78LZ6O3lme2XTD6tdbJBjqkAV%2BPyqDQWbLyr0v9RF4FPnkcUOC11XjGMt0mo26GBc%2BaUcxZBRD2xo5Z9rsXKUSOGPQ51ftwfRsYoFMvZD9gyqsplgFDP5MCobjPG20xjMAAX4jxnUbElha0ldqHgnDZMIVjSSRPUT2kGImA5AsU12VVmnQNsrkufXj7qlUVuF1zCtVUb4R0w4fRPoigDO2QFewKsasHs%2F9BUPcFKent2AeBI38T&X-Amz-Signature=0e97270d91e576b9ae109787c24021888ee8722b8d5a9f440c6577af873ad15c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

