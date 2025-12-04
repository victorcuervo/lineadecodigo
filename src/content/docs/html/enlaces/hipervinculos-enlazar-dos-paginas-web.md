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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z74LYCQG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDd5%2BZnbrzG2hnKzEtvbvV9RDltaPXTIdo5d29L2ISa%2FQIhAMYUXN2j4hjjGxuJkpcGeyjLNjmaMwPFuaCz3nVzHx3FKv8DCEMQABoMNjM3NDIzMTgzODA1IgwRd5DbzXsuhnNMibAq3ANp4bwmJTx52x67CgY7DvqKvU87F1kdWN6Ynk1Hh4cDNaGXXE6hOnUZFBitQFmh4SMxATdfE%2BiDf9emWpkMVWptYOvWK88IZgg07fN6LYiuG56m%2BKFHXkpslB6gIvdDhdoS8Jzql1uWsXCZsyAYkVbojkUdrcWEzkMZwGlpjP4vZ%2FGTho3pwmqvzE5xwwDfUgFIoQfMS5uNnRhsMo9pq%2Bydbty6jTR%2BQpDFXyRo5B0MbH1nG%2BlgBknQUCvFmTStD3INhchflH%2FwRFd6LbvoZjyHY6X0FhU5hcD0391jv1RjEaihZ20wN7mYiA4Zt%2B9DEEG353KIeHy6l8aYJEQ%2FIFaanphOr%2BsW3PJM7zhrZAlCL55p05Fos0tV9NTzFXH8lSOCn7hOfFYlpfdkfo%2F5mF4q%2F2%2Bj3YKzJCj7gThsxzVSqfrk0lzpn2qVj%2FF6punlEdDtkwxmhBjjWbf%2B5erKH6hggyAYGbZuRVNDr1ylT3Nx38cGQqPRdFV%2Fvy%2FAhvJuBJs%2BKzKFLT%2BcFAEmv%2FexJOIrht1GOuSSe4yLAkIDFXHOexR060Xf74OA73MEl6OEIRLQldVHIrNcEo9GFl545iT6cfWsukle0LS7GklWFUeUBaZ4ecJtQBTce1xAyTCNqsXJBjqkAUoKp5Y0ig3if7mwlmsLG3hnH2FpAEZ5mg6QyKbJ9rkM2ToxI4klcKwONZK59NBvzJMw%2FYXpSJwNL9Hbe8h19Wu39uqI0Ao4ZauniAD8ndhk%2BEoYP6TWV9Oj3nyfaY2ALvKCx%2BFrd0bjRSZIvVg%2BoFNBT6SJWVwbVZCC6PMoy9jNfow0wjGa0j4hCf1xVCBIiyUyNz0ercrg%2FTVIcMw2HJfFGJkP&X-Amz-Signature=316e624ed700bbdb3392fe7b69a8f3231f836e71c194bb78779226d841df9cbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

