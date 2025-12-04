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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UVJEVRF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDOQPxoJ209NGHYoSWDmeJfCeSUjVso4t%2B1ajoFVv4sFgIgbOMoYmmWN27xoez9QvqMQfkhqdph6Sw1ejQuBsA2i7cq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDMZsk5b3kAr3%2BUU%2F5yrcA%2BZVAG3exNo8go6EiYCEjqJ4ZPcBw%2FlNqlfqdMMv3fTwu5x6YnXyDPlKtMMtS2t%2FoXgnObkzoG3%2Fh%2F7xqPYXvyorXVBUV7KguaXNLRlw%2FYkzJ%2BYCoMDGGZwBUiVNc%2BpLcjwclCeAPA2nHtJZsu6%2F10P9xHO5C4pTAa4trcTRUqgkVNpiVSeFjUP1YldAyjwuWsy6Tkg%2FZJmAJh5MDkHep5IyEu9nyCDCyZEDrejUmgn8rxcX3ZesU7dqGU0rxh%2BWR2WcvxZQE2o5Kz8788SL%2BZFHlibEtNFHZVs33crB%2FVmTOB5e%2FqI%2FpRmHKd5aEH%2BRZ2CIzGLHdRAsHMxhDKyfTBK8egLrt48ENGBOOPQiQl95uGwewgxheJsYfuIUtUvjM2C6UPRoAdYIKgaeYh46J5Do2qe9VZ7ltspw17VXi1eBiD%2B8BXukLlNF7Qy3grPelCy6lqTaVccGthkOGsfJy6Q20rfjwxbjpnyQj8GXNcpMboy7R%2Bd%2FzF8iC4aSYjE%2FcrI6Kvk8wY0hNcVNsOuOu%2Bt8PaJ3zrOpNGgnp3FocC47mHa5iJm%2FU%2BVw9GqtWADVuc7tbSvZ%2FIfpQ5TFyOzlKn6OW%2F73gZCjmwSFksjrawtRh%2FZobqJkPgrmc8ZAMLeuxMkGOqUBIhYNUJyZVqqQbOfnaGvmPjsx3DS%2B6M6SvM0wzZLK35QUn3JWyepZIC9YhW22%2Fxy1OzWd1kO5ZnbyiGB7sB0iajDg%2BiADVcthmuD9VFYdCT9cl7DLlGKbAkty4cJi6c8Ak919QA3nOOPpcbGYNE4%2FmmcbBY5E8JDwUHgA6x7ZE5yO19W73UiIm0TiTPjmrcd5F2bcvgYmKsOq%2BuTE1h9RxPOaGJTM&X-Amz-Signature=0d3d14a88980b8613feeb1d04bf110162785e12c95fd3c0a1c2eaa441de67fd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

