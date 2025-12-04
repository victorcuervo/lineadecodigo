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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RF7TCDS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T141239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCk0oih4nmblhFegm3vfs%2FOnb052MNWcx3aHWP8JINs%2FQIhAPm2BJH1jWvgx4Z0YXaLEM8z%2Bde1qa4hBcWobtM4ag1tKv8DCEcQABoMNjM3NDIzMTgzODA1IgyXMYQ7eNSDxuVjM7Yq3ANxo48qweGoLuCi6NXyQCzxpKdt9miEIFGz9N39nh%2F7wuoU1Yhenj6Lo5ncX2%2B8XeTu5ptZRorYlxj7ueKTJHkpn%2FMmpOC1fL%2BAXI4Zu7RO6susHMp7%2BWvrus38byIzRkNs2iCCQvvQDba3iLq4ocZHKVDept7whayAS%2FlOOHsoQg6dSRrG17SiNjSCaOBrfzb6t4f3Ip43gWAr10O8MSo7Lpv2QN4pUqNIiC2ynBF9yBnIb9htK4R8ACj%2Fi4ZocvjtTopcPMwv2wzrr0HqOy8ngeSIH5QFdbZtH25qsHK%2F71PUqXS0%2BqZaqw%2FlL29%2BZdY%2F8Yfv5GoPBcfkZjUYIAd0LumfAe8RzFc6v6uAJdxyvH1gW9muC%2BuVxQEFeO01MPE5sCLEJO8gGCBmavU6Uj0aHrXYz%2Fx7R6jiyvYrWy6g5Uj%2BY6iw%2BNTw4fwsxD15Wwf5l5SN%2Frj3v4hapKaeZOr13Sdsg1yU50NcTpPEG61qpSSCKi5DoYPu2MTL2hxbIXYShzm13YxMniEp1ZBj4AIazjhHrnut%2Fm%2FRJ8pj91kE60VUPZWFfJH9sXcmPr9fKrr5xH7iDzq8VLPMsOmXK3GqtnuWthHR%2Bem3TR%2FjuCHJZEAn03HYSf%2FsWFyGojC8ocbJBjqkAbgKcqMrZ50CWD%2BCuzO3%2BsTvNooFOA1CUWHClFqJBb0GttFvdpKDYb05hSUT%2BBXP7AhbM5WZlMe5WJaRqZ46vUWnuDJTZYHscVe6nagcjQU%2FNH80dVNL2hdiNhQKFaLfS5MNP8yd9kXl8X33OZ%2BPrRwv6CAtdfHNeAg6uhRZhEomLfBReMWYB14K7eog6P59yjWB6JAHAQj6bhlY2lvz8oZNkUZP&X-Amz-Signature=24ce836c7a855e36664827fb7683a3ecc070f3bcf3844d8ec3c115e9cbc4a863&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

