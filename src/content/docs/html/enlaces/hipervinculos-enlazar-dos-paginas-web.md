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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645A6SM4L%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T171548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIS4TGpVtR8jngrwt2nTkGyF0prywgdeJpoSCnEVH1PAIgFf8vDOjdSLiyx7oI%2B%2FZa85gR14NYdYhiyGUYqSTtRTAq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDLy6OkzmZRNq%2FQYPxCrcA5P93huspyEcSBCpPNWG8XPKdLgVAiorspQbdS0qY1CJ1D0tjtFwLju5y0adu%2BI%2Bka%2FJWbigy2MlvPDp3ibt7L0fp7B5qnCq5qQybutdohWaqPdhLyv7r%2B8LH10nzscUDk6tPZKu2oBAOk1F%2BFpIU6zv1kYHbv6YOHs1Ct03Ckdo0hLLSjtE46xoActYSms020vayBiN7vADxmCl5rxauZkXxIx%2BsSA7fejHOarBQNu0yPlRdkvR5bffuXjpn6NKTSWnrTVn5%2BMNubvQCddxyPeTKHZdAmHnNjOWK%2FQKnugiOwwc1C4KTmg6sHukox3%2BmiCYG1Pf3hJiPZxWlPNbJ%2FEVlNyJxbFcSp7dwbYtA2KNnfc2%2BXCOdC2XBecgotysCqmKQ%2FmnQ5rqQ%2Fd%2F3kpOqEaTF3n1AIxuQUpCymBIwwxvbnu3HA3Wg1T57zzh0Xqe0QzOkVNz0nSbu%2FjKy%2FZ8cJ27zZenqzih86wTyofQtmc1sdyqBr%2FUFvE7KqgoHIUZ%2BxdsQ9ovPvu%2BfFng3W1%2BZ1p1A9VobkpjJU929gflG2W%2BZn1ul0uzxVD8eEkP808xBnhGvusWuUQyU7OtClJhS2%2Bn3THQonUky6EwODzysNEUUb%2FBJdrdKDZ3U1AZMKOm0MkGOqUBV8zjIapqmRhAmbLTfdB3%2FU5Ks7dTQs11RLBMliznqKmpg3Swuxc0730B72pmWXB%2Bxq7%2B%2F5hw5%2BCm1d17TQLXr%2FYFdlguc%2BJp5lO41HUDBOrlmG3Fo49MSDuTuHY%2BNTCSh0l9uK6ws1yhGaHhRF8HnAtRQVwXTJh8gFIfE3vadM%2Fuly1Ioqg5rlzKstAX92SNaoH8RQWTd%2B41J47aWK%2Ff9OlH7OUg&X-Amz-Signature=ad28c9e44f320c34df5d0f0957165a1cd1e8305b43fb168802222701946e380f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

