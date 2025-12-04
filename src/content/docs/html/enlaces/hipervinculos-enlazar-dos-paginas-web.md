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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RCONVEQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T155227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDehE4k5NRnMz%2Bj5cj6guuFHDaipoRpco5%2BRdkG8TIL1QIhANHWlPr%2BaBtiZn8DYtb1CJsAIi8dfYgIwIjP8aQZbOFxKv8DCEgQABoMNjM3NDIzMTgzODA1Igw1eC5wzS6Nt5lWSuMq3APi5WnTXxP4meEAgn%2FH9GsT8pcOEhRVRVFPFASaJwEsH3Bicoc4dl%2BjM5pKcQlUYHuMh1QKz%2BG70%2F6W44IIjDmqfDYwWPFMHEsGW2BkI9F8nmGmi906KTdgh7GM2JZaXVjbsArEvFXFqt2dga73dvQWBFaaG0aYnKIACKhdptWZ47aWckWtPzl8nauXxXolqQpcznbWtXrtWFuA0c%2F2FEV5542r9xp5zEj8AVSP%2Bz1I3Z0US2hTQM0qvP38cdLY2m%2B2H0%2B%2Ffv7C3Ihjm2xho%2FsdqfidXI0Td7qbU1d%2BVezUPflhJOG6HyTZu%2BY3OT9J4PArAqpBB4GM61Vr3n479b%2BqgFjVeOm2BSY6AOIHc3%2BlWUkF9tsV2%2B3wbywKyD7SMstEeIG3s90vwWWIj4HpOzhUW9rdIRtorG9ThLlrLBuwXsJLk6C7t6EaBHZ2BWEUXI0Rla2TtjwKtf3aCTbrXomg%2BLNzOo30xF0ENpaNkuKWsUzW4uVHIIds8cbv%2BcFmHlyBcdp3wYuhlOetxAnoyMzQAMZBYs2mxBVEIJmbZiTcGPIg%2Bf4O0w4nsGtrw7NI%2Fjhx%2B3XTBQkyBXJCzTXeYyYtnHyRvZKcFhr25QwKARHoStKg0S3nQXmHYuVmnTCwvsbJBjqkAZwGlt0mZV4MKlWd7oGeZLLOGI5JUgHjqoBG%2Fbt8XzFMKJn0kh57aUJ6Je4TP62uYwxqN9yVlQ3lpXqJwo0c1WFJ4cjTydXruMJwJF3Q6TXeeP5E039M04vJCgbMY%2F7j1NNMSA%2BBlCKKy9LXhAnglgLS8ffTsYnHZCeNM7j%2BVrfpZtdhZ0iy0%2BSbVuRb4r1jlpnypMOb9QXtqm2VW3XJZbDE%2BU%2Fi&X-Amz-Signature=8d2e750c1b791201b3161424453b8359f105d0a2c371aeb52be312e190466822&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

