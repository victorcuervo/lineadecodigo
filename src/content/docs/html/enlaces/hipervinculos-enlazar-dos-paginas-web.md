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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4NT3JQS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDBnrZOr%2BEeJ1SyHtBWOSEOfzuh%2BrAfG18SXJsrw1EG4QIhAMZOo0i3jRQxh9pH6EidH39hvnbMvfnK1bRb8YwoMlWYKv8DCD0QABoMNjM3NDIzMTgzODA1Igw4QYBkgHcYdlcG7noq3AOdw9BGbFTh6xjOCpqMt3qTTS9KHdXAOLsHLkGkYsCKEEC3cbUXI0AdFm8WlvsTNAmBRqXCl5DuGPji61U7yrn%2FWrz7tEbOsPazfD3OJVA%2FZTsQ1SBGC7VAFvo6urzPf8%2FYl407OUwq9GJSixIhdI30sO9HB%2Fbi9Ix0IqHJ%2FzkZZJFSwPp9pZmId4ITgcsNXvzsvZcuqZs17wCTqu1IgRVrhZ0d9PWvhqvO1PM4xGdeD7LVJbCyI1NVJYGL6%2Bcbg%2FJW1jBJMIwI6n%2FikrKXOO8yY3o%2BT1CGk14eifATcB59P4Fc2DLnEmW3nQGaLS52m1kjNNJRfQH79WHGZd8ctV4yK5XkqlgSlO%2F%2B7Zkwy2ETLSSUU%2BFISvJHAcRlvbu8hdT53w7XKIJEPb8bQp0Fi7y0LP4SeuZhIVg%2FVmo07fu6DjNnYw%2FLKcfPoquoTJ91oDFWP3PriNz1n5sU0kc42kD91k0WffJA88nKuwU6s5ywr9IOby6VwTJ9c%2BiCvvJa0WYWiGDs1nChkLfJh98egFb%2FKyc5tohRc1vlFHrZ2CGagMBHKmpJxAsM2amKsill5ouZ5PMvtP3bQrRoZ6ili9lx2sD8aVxZsgKaq%2FNWuyxrk9P6XN4H5B3eENdr0DCLkMTJBjqkATNFZ%2Fhy1fB3GPsi7dCslbzk3WypV%2BizzLrDLbsoD02GGTszdxzGtX9OsecSljREzw3Bs6PYCx3EM9DOKp3%2FW7tBuzCVQMgpAFhJC4Zb0YHreLLPmsNyTdcmqcFqgpPU2%2FoGU0I%2BgFXro%2BuUAIh7%2BIsbcfrfInejdv%2FZh%2BFKIEPMhgA7gIZGM%2FrRfnHceRKit3%2FkLlaPhQb9ByrNx7IjPlx2Ql2y&X-Amz-Signature=ddc9956de89a0358882ecab9fdea97b53a5bb56cdf45641a3f45f736f1a39651&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

