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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZC7NDBD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T042033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9hT6D7vCSdK4DorYhCZ65hAt2MbFojR4e0KpktDkmsAiBvsLj28ViDotlO4tTHy3%2B7Wxm06P3UlN0AIutPT7NR3Cr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMV1C2UdKpfvyVVOgbKtwDIKrEQV8MqPGw4AkuXetwoSdCW8%2FG7zg30JuafdhT%2FGOa7K1%2BcMypNqZzyrGkwkTICWoyoaU1SGKVo6AQCGCBBWPZfOcYfGgETujDu8VcgUglfp29ML0zSa8k%2FaW3BiIRAxMa%2B13PuIakjrQ63TTXyz7x2UvhLwaIvHX0vk5Oge9siPqldTWB4bUql%2BY5A3eaOqUQHxXQCG%2Fhg%2Bc4Id7YWIB7wyqJx0pptfWhO9OO1mOH2Dx0lg0dr3JPFvbG8VYhMvwgecjrbNCIaLa%2BdAc7Qz%2BU9A5A9HmKu4sH6%2FngzI4ip1%2FJ7RXPM5h58qso8tEtZPYzkH0OTBd72uVpslFADBaYaJv5XMY40X6oPLCYt7WitvreqnqRvaVmUQwO2vNR157UHXikUVViywleylUA4OKqLbQoO3%2FUnDL46m6ZBoVD9GnriF1XKfRQ8xWb1ikK40XUBobk740qPyzFEENwi2pBzzAkQmyGnayo7kCZ4BYcF8bCZjhonB4ftW%2F5%2B5gsR0E6XjfUsqEyAxYfQV16GOwlpZsqrHNNNQq%2B1xRozkp6d0pua9WS0SDeW305pZql15aqFO0swuqnyIoPDS1DNHcU1T7PYn7nW9hCy3KAAsBEQTIemq6QFRjjuucwqcPOyQY6pgFjFItq%2BkPk97B%2FsmznqIxWW86v87UA5pFmMrhYxgcA3quSP2QWbq8gMlkbG7Lu6fhsHf7%2BFJ3EkoK3cr2Qzj90XUDci%2BV4wRR3R0yl14XCxD8%2BfrLPyqBFpAE9NX3LEEvhH8kzvdhzuPWlyrEG4jejIIZ0gMyt4p1hBgZmUuSeuR5LPX1PH7ZHrZ%2FOMEZxNodO%2Bv48QWpSj02Bj4hiLxsMbdy3tAAq&X-Amz-Signature=e6f0456d7915adc37e23220689d7d868de9f93474ca792b8d8902a9424ff4b72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

