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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ36RHB3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCICobAh3DL07%2FvD3xbuFyqj1h5%2B7osqaB2gbK6uliFHarAiBvdHbLMTum%2B9nZAiM6jK1INWW3%2BvJiQUFFJ36DCEdzsir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMwBegDX7M3kJS7MzOKtwDBSKZAbG7NQYRhlbqwGNuCqi19qGEukoKwTKHUYrQGYSzQRah5EB04OF0r%2FUyCEnIhmGSOsiwNBxWNUFdIfMW84%2F9jrtCEU%2B3SJf129%2B0zwQKNSuVRsHAPxlSjeHnP1ribg%2BoqWGZelGJwnDOUHGIRO2YdFs%2FfrZIKmYr%2F%2BAMOuWnDjLVaywNHE0Mafhwz%2Ff9mYwWG776x7JJnav3HO%2FX7avmXzwKfSqsec%2BZHffCPaukcXQq5fO9UMlXJGGi6%2FJ0KbdU09QDWmgi8531UApwavm3B5C0Yilmzx7rfk3%2BAWced5nXvjGfwq9G%2BsPHCaePM3PKrOgaf4XXU9gxA9CQPtzrB5Gbu97zIkj4Vs9gtDy%2FhfAB%2BDxvwfmOzxKcGJQ2ie%2Fa6idVWjzQx0L1NicbYKVJOSJ7RkkeIym4INR4qNnVcEeCh05p0WK5tfpWBsBiGL04NCMzl%2FN8%2FuEKtZeI42jbr4475xVhBDsvotgzL1%2BuziBy0ZvDUWcCMGLE8zfwFE4ESUit0blcrBBhpgl8b5iOECRfAbuDzDbstjwT1hmLIjGeU36LLj0bYWe66%2Ft3D3GYPCi6RPXP%2FAwSBxcAUh0Gg05KQTeH2KD3L0%2Bk0xVfyJ%2FwF1QkUgYJAEQwqPjCyQY6pgGI8brQJCYWcS00MwjeSk4cQVnwDJMy5xkj6PlXuAT37SmMqN7Ia%2Frh30YrXlcE%2F2Bsl12zakb2ViV%2BPeDprUhsle9FHp3qkQV4%2Bm19Qdh158g7nxDQJGLIv7aSNq%2FJ5QgzLybs9rqyP4u2sQmchkiLhNPMJH6PqVNPzEyrEWXbBqnPDmUgsUudVrdD6GeuHNoAhusbsx%2FY6D8iACtoB3mGRBatGC2V&X-Amz-Signature=4da1feb3805d6405f9094114c56e96e4fc67ac36be8c6804e2c7119b40d78401&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

