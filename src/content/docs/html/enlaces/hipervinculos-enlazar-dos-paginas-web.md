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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L4Z22RI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T191705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjLfm6Ef%2F%2Fw59YzTM8VgpkHsZGM2eOLBwEHpKxyqoEtAIhAJwjIdVZJey%2B9fF1mlUNS2D8VuDJYLQzW8ES1hu7LrhHKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAOXZUyx8eo7eqGeIq3ANXLjk%2BrIilreuIDdrzgwWSFq5eS7mobUDRhl202TtWMwLJYyK6u7BGgdXHZpzS4vdw8igI6gFp33wuOB49ARj%2BBCeZQ0hRlSM8wrFHgBv7b0l4QMMeYrBgyw03%2Bh5w5JQyioYr0jQrIHPLu7oMQOu9Fd57xtXI2TiD3UUdcTg1zjn2KmBnJFbg2xwuXFAqTTVe6S3E0Y0Rtt0U8r6uFQKR9vk7j%2BN1W2uOoeBsgITjbxu3qzstHQIL6mnxz8ebM6OnvuSAPxeyxWttGAEXUvZ2CI6UP5tSZyPD0W%2FgsmPFU4pu5NkZTt8rqDYpeXtbDAkSOBQDKu2fYo9XKjXLjWSPsdhOTWYM9M5x8jMPFq%2FtYBd6VuAoWOPYNKFjfrHhh%2BF3nehRmpSjTXa5F%2Blo0ByNwW8qb3EeIV8%2BG29nDyo8ua%2FVHZ1R5Vue2sWMdQ2dG7NWS19gJbSNHO7RZRrzLwmvwr59e3QJ06J8y4chPOpaWrs3YszcxH7JAijPtIgKMllFuEjV4Vpkh01P%2FTwjnd8bhK2nFR2bDQkBx%2B3DJlANawNAeKhSkaRLrE09zTKjvDfpD9P8HwfQPTtYS%2Fiu8DBGHPvoSz5ksKuaDON%2BSSIMR4ALZLuHM8vD8qj5zzDCv9bJBjqkAax5%2FAGMVOTXuyQK%2FJwGedI5%2BAPOn0O8OkvpWMg5vRTdKGXLRvYTuA58qL1qtNmNFsAlv3qn2Pya0n0Mye8q%2Byy8THBhG5sIMcZgjcrwf1JggNbH5bfXLjOpWGB8FYAbCBe3n45LDhwgz3ysF9YnCCNzTwX%2Bj6cjRC372fAYTvoqbquVCn1q0lim5KxmQHJIlb31Li3BxZCqq0Y%2BQjFFvDsAJQB3&X-Amz-Signature=137ae4a556931972b1b13d71cc73182c9a3e64fe0ddc899d833f209875b91e68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

