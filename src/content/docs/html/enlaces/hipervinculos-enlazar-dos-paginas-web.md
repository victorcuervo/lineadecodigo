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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IHMM5YZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T125125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACcxgIv7MlGkvS5GGvdtWmXzs0tkMFiot4dYS6EEa%2BiAiEAxIYaT8AOvtwTB2x3YfH6qpe9fTFbsKEN1lvmRDuK3XgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPeLsASEZWUFaLZQ7ircAy4%2BUaOfO3tnhy%2BNIO5gyon3ze%2Bsr8Ej%2Bu2kbkg%2F6W3Z4Z1eXyI6aDwuVEO90LcPW2swubh4%2BDcsoY3J2u43ywH2HE7hVxrRWte5jxFzALW%2F6fMtdjS642u2IrFtBU2NJ35MND5dRthnvYs8m2YfS6364IE68SQKciDrBdJvnXvTEFdQ3v%2FYn6%2FzbUqyKn%2Fdv6RPFG5g2EICh%2FuPHVfLJStec5JIr76ZOHJOtkaofhny2J3WwaUto3BcA0CbxwEKF2bVaJ2IYPfduFrS9F5ZZnwCsPnEQC7T6eDifJgZEQhFQ3aNfteT17YIjZMZ9YOJiaMcCuv2F7i2K55pTkYvBSLX6zpvpRPm9xvxaNDcoJcOkhKtOBSsBqO7v%2F%2FyIRzyS40pb2umdwq9%2Bmt9m6mD3kUoSLTPwKYmn%2FWxG0nB3zud43jOm7nhwy5LKClO8GcjMSMx9IRUprNr%2FpMqVcyUURP8CPrauT444kk3f8b%2FoxDxs6syY7Dh3HqQfZWzuqRPNz0BC0gBx%2FXEtiHZ4ld1O3Jl8zhHmJQF4fmjmdp%2FEOP8uTBmhObqQYQctqPhCgCzN3khWODm7Qg4YmaDRIi5jSgRSJi2Oe4yHnCb6Ob4DWLN4XnBwal2Cgu5R7pWMLCQ28kGOqUBIazsb%2FgZ1vRk1bNxzvie35CQODwEUnaBIszE2pTU8YDwNKf6JiIIFWQzlWk%2BKtkVOYBj5lG%2FGc8dW4GFhVtsrrzSeZUq67uvOW4lqW0GeYWAV8wCv4UNxRyl6M%2F9Hf3ccslzf6H%2FQOnGFAaGCGxkQzNsn69nuElx15z2wRLjyl6YYUsKtjCbWI%2B0OzobS8H4%2F9cgN%2FLd7L1SmxJUD4lbFbXKAdYC&X-Amz-Signature=60fc9b4b082862a10a0ebe16fac5195864a82aaf1255341c4ea285dfba43a184&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

