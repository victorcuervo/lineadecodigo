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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUHFYHY3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T210433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeQwDcaJdIftV2Uq%2FAFiZxOC%2Fbw2F6QIE1NP8qvF1inAIhAOvcc7zY72VpvfQvORjzUqMAsCUYHHHE1P5Xm9zeFyIPKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjqCfxCw%2B22%2FXjkxoq3AMgkteyZLoP0rVm3k%2B1lXSaaRdm5f0dkbbz7slLzzL1S6AnBEnD1Q8a8I7AZP6ye1rOLvw5rRf4lbXwFJrMAjFdVQ1cXD%2BFz1h4H70z%2F7s6G%2BY9L9CNqzV6UDMrriKpabuMBfBkjLiY8MAnugW5iqWBpjkjoI7vfWr6HLslKwX%2Bm49P9xMZOABl%2FqT3S%2BGKDnZIBQLwiJLBVIkVDBRrmJuZKAHA2opktyxjYUvVprtnUjlMc0ck0IF1jctDjkJNlvKFPLJOy2Gttc1mfIwPGMVldkM%2FPtVQNVSjZ27nmmZv4MxAR5niQDBTi8xY4of5M5ERHSm5P8EDEQJ2L%2BIVuK9Gc2GL80YfA2uRX5GPeo29jWy2h9KEaAT9REVrNjML%2FPHvxFEwyg8sBM3SWdWAn4waJaq0C5sxeGCNPkPdhehqo%2BnKtQuOsJVqqMUa2CfVqmOQfzIsAXUDWy8KDvxiuA3wqSpGrtXfh9VJKYLyvjswjp5JJkI5fI4I3nrLmYeILkbmoIirvo9QjYhODNmOyWJwiolmTphMspg4%2BcZ6qQdtpMdmeif8o%2FFpOgFLdzx8Q8JMBGU0N8H6xakzMGWTN4ERI4ftv5cmG0y1ZUgoyC3WBKzAemg8%2Bo4w3b6AsDCz3NzJBjqkAUMEQ%2FzXB7DHf0af7Wm5YfqhOe1FtdZASAcsQPzmbdi5GnmC9WpKAhy63ON3m6oCG%2F0mn7%2ByPRPa0ifuT3q%2Fm1Hs1yE9jjkZcGXw2dY9gW%2BYbcrv2uAwwPoJCXaaqeMpOg%2B3L%2Be9QgnNTnubaJ52JWgT%2F61rmUXmeBIUW2DVFH4L21twyk%2BLT%2BqGULAvMO6p2P1%2BYT5PF3lbaDl3zcDwQVSP7x%2BY&X-Amz-Signature=1234e5796ab40e46abb30c4ff1b1a376c3605369793605749fba3caef7ecf733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

