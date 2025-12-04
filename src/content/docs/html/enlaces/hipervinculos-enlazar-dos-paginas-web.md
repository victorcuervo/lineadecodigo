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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAJQ4Y5X%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIBhA86Y1tiCUEdDD2usdkEIp4XstvQRscY7Kd%2FP3tVWbAiAfMswRBL0T7PPObkNZkV5oumEKLOkush%2FV3gdZmK42%2FCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMJTUU2Z%2FlePDd%2FROQKtwD%2B9%2BWeEoWvxoYo8pn79Q5tmEMCZpMvPuah72CE3hi6PBLKSPXyE8xStpmldiA9QFO8IQNolAUjWXvUbGcjTUZwD27SFnYerRNucnsv7gLFiw39g8x3Mn13aT5gyH5KOnQNNDd65nYz9zdA25Ev1CpZijh8KqKPJPofjU6SNkZrUJLoRftpkiwhtuVh6nDtr1FtLmlPxzqH8RfaAWzcOrqCa9sK%2BZi540UlBsU%2BXMnHMhCQFkyWl4pMVTk7cW2IChwuBnm%2Ftb%2FHKs0YBrx%2FOQ4Pk1gmYsVYoUuO3pSWS1p3qfH%2FSXbXVuvCqJhhnXMp5NYdDTa1zwt8V%2FZ1CMGSOq1x22ePRRJ9yZymhNr32FDuuVnkZl%2FxYRlrbjXgp79AP6%2Bme7vx5EiZU6tjKB6Ufx9V6ApI%2BgGnMbsaZmSsCUZf1mrWsZayFGiL2IPLt7kHfO7zfOFnRvIXvFKRLsWyNCX6jBuUzWslwk%2FaBYJg9jfoz2R4AerP0yGIEz%2BzbyRcoO%2FJImsHmE8Vqvvm5qtW5OLDQ%2BpGREiyAH0z%2FcLbUXZpyN8Rumo6rGGKEqiXDHBKDzKCJ6ubcgyTaoINuGdAuYP4qcI1bce0DitJgxP%2Fcn3K5lD9NlpaXG6WFeR364wxpTDyQY6pgG%2BZ%2BjBg4bHONHYyZP1ocNe%2B3WPD3NqA1ArCD7f7S3%2BcvqW9l2oXkCvHyPlkN8nvgFKSBCCwfM6u%2BcQWJn26Plrl%2BoYRD6Ox1Bb9MrfyG7LUmreVk0S6niZ6OJAZj66X6uKS%2FzwKFkwpO4GoCA2hbLoDklYkLeGwrpDCW7yk4iSx6Ridj5PuIH3Aw2vpDCpwzIM%2Bw%2Bh%2FlAj%2B%2B2MxnDXaddmIrwBfRfY&X-Amz-Signature=c053394c750152e7ac327f32636a39d60f7fc886cc269fab186534cb4dbe0eb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

