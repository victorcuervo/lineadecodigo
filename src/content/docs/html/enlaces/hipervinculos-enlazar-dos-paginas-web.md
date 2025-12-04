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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNPCVPQ7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T063348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCzPJu0yBn5Ai4FRpor9EXIITwot2CVcs3FjacwRVKatgIhAOSeeqGZay5vdWSiYFpWCkCo%2BUlIQpi9cnudh2fPPnUYKv8DCD8QABoMNjM3NDIzMTgzODA1IgwrAR6KDbqq0zJJkUQq3ANXZ7fC7OOkf0R9aSmVeCA2o0dQi2m9ewUtJz96xUpRDL7Y7rY1vxji5oxE%2BbrCoUbAz6XJPeOmk6SqGIkq7HgJapnpBNRvcmdj4nA6ZaS7HHJrOfQ5Xtyov9oOkz72LSZU0wW%2Fq4mdb%2BEnAN22YFU6dBVZBKntywyghEKOQOQsu0Uxuzg6FKjYD0fXezzEz7k4M8JagYJcxstZ%2BG5GXQJVcHKJi%2Bp%2B1zumpR%2BV5PqRMx1uYOBN0uKjJP65vhS8Z%2F0LJspezzhzOjtLZUZCww%2FCHpkl8LtnzCm%2F6B2DI%2FMPQ84aU%2BzhfvEg7Nx%2FnSV4SvJOlP3GbpVrmXkRK3n%2FXa9frvsb2%2FRrZEXOAJRkdLxudjMcieJ9ujjIFDHmZBeXG7sGFz%2Bptk6VvotNvbc81m%2FHt5S5o108uJNw9Vbw%2FnaApS6D472OcpFCWUz2OSE16095uyIoA9l1tl8aoP6zZSPPXqfUrQOv3PVom0PNeg9Sao1T6G0lQm3pdlBuxgHCSFw3zr44JzitgSUE%2FnUNJTSphYUQJMXMSvSSH5ZnD5RibAhNLFHBJxeCDI4orwqzFO9kZfgU9kZOeUfozePt1MW9rcokW2D2mcKLtp7IEgSj6eXf%2BiTemmdkGElVdTCIysTJBjqkAQD%2B1jWlzqBY5MJBqG9mpEWpELaJ0LGf%2FRRaV8USbsOzteLrjRylsOHgtRpMjSzbBTFhVjl7VjXJtRoBJEM9NccOTRbV7BLleoEAFOV8qrjPBN5h2lTPhc3g0PdMFJ5HvqJEZ2rNYpRWZjycWzfwW08tAFqTOlSuZwvz1ufIawoyyEepWG6CsHMmHBEEDWvahCrU8SlkfhR%2FYHO%2FeYGBr%2BnGVLjI&X-Amz-Signature=df2be3af6d4a9d8a815baf20fbd7f0644beb7ba3652c758e504fc1be539450e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

