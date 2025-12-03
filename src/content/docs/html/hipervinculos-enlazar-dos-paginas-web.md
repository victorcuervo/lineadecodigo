---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WQBUOSP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T201646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQD%2Fvd72rg3rJon%2B5HFrn1IvYx6ILq6K7PHsP%2BwelHZKNwIhAPUqKi0LgmxvVNGyl3BcDYZjZW9820xoV3tg9UzYkK8KKv8DCDQQABoMNjM3NDIzMTgzODA1IgzK2a6Z6TCc42%2FSWQUq3AM8ptHzRq8hnFKLBxB9z2I6T5sGRlQVaFjSvXjqC3qjA3Idj0JOvCPpdJmJ64kvVXHkpXN%2B35UGDU0rUx8BpWuRTHeHlIZInFIOyfr%2BCFcAV%2Bc%2FhE%2BWRRvXHCHHqJdrztuu7PYceBUSpnpU1dWDsG3n7emhjLp62qoZcUiAHbO%2B8fu8OkEnJnJn28P5vfgVbIi1DXPrX6OhhsN5G2UTk0qPUUO9veeN7pXiD1O%2FaIzHPE%2FbG%2FWtrMzFeH%2FOY8kp5KMsYjWwfC2Qew1eZ76VjzkotSkVwD%2Ftn0GfZVTyYXIlQpdjrkoC%2FjecXr9Q4AA%2FkT9pLsQPnZT5mVvBWKpSKDumWiXsi7X3U6Rehd9mnwZr3Bn4qGZvqz0SazuaT994pO0usWou85QCr%2BQSRdCs%2BS1rO1GmSnDiH6FjrF8R6JUn5G1masloQrLRtTY659xSbfU0cL2WaY210Hxy9ygukuHCDxdxjQRARmKK%2BtrpLVCTTIDpt465a2%2BBY9bAVqmZp%2FNUtCulZ3gBjdEJNOUwrc9ERCpYAQMdB64Axr5FqeLz75jUBvO51ybGpEBApNKyrGM1FZeEEWApj0Iz7pCa6IjtAX9EqIAWnz5Wup2QKr95LOnyOKYXLAj%2FpNHpDzDokcLJBjqkAUniFlMx6H1bSFemf30RH%2FzXtTdMKKrH5ULSMXKnd0bTXw8uzDG2WomdqlG8UNlHmi4ZFmwutXbqkAnQjZsU1C1%2BlL4Yecl7yvdA%2Bo%2FP%2BWovkXwIDRXSljqu9Hhm9p3TSGqVB5j%2FlJJwSOdTYUq41UCrtfuYvjjLu%2F0WcwGj7YcIQzm%2BVdkkujxGXYSBA0ES6he5jKIiFFWEQYUEUUrx1qMMKcdc&X-Amz-Signature=8257fae3e0fe451d9a7886cf51101c442bb7a22d98d0ae2d9629bb12e2424d61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

