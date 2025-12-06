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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGIIYC6K%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T063305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZe0qUGfuahtDAI4%2Bj%2BmhOEwFUiHMTju0JIQmUjzmGRQIhANjELxZBrl2CAtY12DaM8GQnw1Jw2M6FNEagTb1TOxmKKv8DCG8QABoMNjM3NDIzMTgzODA1IgwSXIeURJhFBvZE9poq3AMijXTHNGG%2BhYtQmTejLs12iNBJLjpZjq8uNCtQpcZdDUTyP%2BSVK6mBqDzsxv4kUjKCApRAh5bvr2aldaP19Svg94zHSmb1RzS7Nx2hJDQ9R9POZ9sPUBsPykcKSksM8k7u3X7Fb%2FJPmzRu%2FP6fqnwu55KCftE8qgzKhzqUEg8BXBkh7AN%2Fjz4DUh7vBmD9nmyVdhoUc0%2BIwuj53Jo%2BWl1WJqKudJ2vEnGCYEEKxKV0911YZs7kXrkU5LZVLoqqu9bObhHBae9qTovODLcAW1qSEt3J514erszlF39TL6xhk94LgYscnazx1ixZmU0SdsjriEkDi%2F5ZuR0yn6hnDcyNdm8cQulL3rGFW4vAGc3dJCV10cbEgcqc7OsSZCM%2BIjFU75Kp3DoPGd6fyxc7u7B2JFBh5vBdzLnECqh9zyczgMhez3vfcORZSm%2BPE49wS%2F3z2Uq9OmiMb%2B%2B1mOigbf5dk%2FbaIHOCL%2Biqf7eXWq69QYVdX%2BwmYyjm%2FK6HorTEGeC3v%2FNKVc7qgmlmhR8Q6BiMausTP2YF51cL3AaJ%2B3xr%2BPsdZKdcNBl3uiRMmghS6sMtWQ5IzTdlIccjP1CDzWSc6tVsd9G3kGqCRZf4aLmmn7uVL6O4Loulk%2BAirTDZ%2Fc7JBjqkAbkrowgAfXtTVTLLQr5OzYN7rdotQFn%2FfqaEcfwfHpoB8zciYV4QelPNjijSrieTUGSLeAIDJC8kZGybrFf1pImtCQb8XsdLA5n7ky7LcAWn4XPNvBUQbUWZ%2FMjRtt5WOTDwH2sfeskiXOHfikeRYRCqZJA72bfeam1dj%2FKzk2IleikIy2BfCGdpkuSAE9TT4WsXLKpmJXQSVP7wQhxKTVdtED5W&X-Amz-Signature=fc6337d45affd267e9a5dc23ff4a082cb96c4213930723e1b2d86cd76ff39aa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

