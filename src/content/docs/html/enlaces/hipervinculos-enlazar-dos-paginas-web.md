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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVPQFV5I%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIE020zdECm989l3zvZZQl8RLoeYlKHadpBHUgif4RMb0AiBnLX4s7TL79EGBIQ42o47ZRa30kchdY7NkL2CYzzw%2Bdyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMUNFy9inZ2pSQ1QkRKtwDvOs0wOCURsraCgdHyvrvYVkFl2kkWNwQAhvv6FVzoi%2FywocbuTBBexrddk88QTUBrdU3PNz7udAS2Z%2BIPBl6nBVRaPG02fSg8AO7LJNksq%2FZQy1uqlW%2BFKSEsGreCzFH5YI8j5RZJ95u5HB0yEHk5RBoqYXj%2FpOcletD5f%2FmyOrYyH3OS9QV3jAk6sXjghDPPoeLObE5h%2Fr0lFhiMG2AcnCxYolz9HDyEsQzuvODb%2Fj53Fy0SUrltJfp1bsistVXx0nrORdXyxzErI6haJLLFvhCJ04Ry50yU69o47LbA5UMviizJycAwujkoDxBbYIx38oXR%2F1%2Bl6mv4AMaaed3rkclGNqkWdMPXO%2BQkaHhZB4AxmNPsp08zYYTvNiFcEPHc3fV2F1NPDJhFo8r9OgLpY%2FaW3OE7ngs2OaLRaOiiDgvslCyy4pkoWTg%2B6zb13P1HgQeKcE6fpeOEMnAbCUhB3CvlLRV%2FrygH%2F0BMCKnek0EArrK%2BtmCCb6KSQPn4viAp0dPIDXdIsRQS1z%2Fds%2FN0D8GY8FP73k1xlKFCIe9Y9k63cDfx6GRM1wntJ7xdXmTtynvj3fBJdU%2BXiUn6Uxk%2BddzE6%2BVr%2BF2W4dtcoDizH09CLowQYdx2X5bqYgwkb%2FGyQY6pgF8PcGIK%2BUxtQR0HpfXEJeGSZIix08BpTTBMBAbppGRbfFpfOAguC8pss107xxIh%2FB%2BXIxtaVo7zjta0QnQB5Nn3bp%2BKrewG2k3wQpWGntfpxrglOfoQ8y%2B%2F0v6PUCFK628VHNDKU7TJ3Br5rDUoTe6RB5ouIzDveieWp%2Bi9SHpd3BF4vlmsIQ9KHoCedUnldZWsr81bBT59SgNpgIy55KGdr9Cyk%2BX&X-Amz-Signature=d0823a35b4e2a86d6f133064d8579eff8c2acac088494f1fffb1b2a03a8cd68f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

