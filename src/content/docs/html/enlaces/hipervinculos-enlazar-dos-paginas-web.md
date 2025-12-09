---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OKHLJ4H%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T180121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICFZrAUEzGs8NGgy9avQVlZjGv4vFZyTj4MDXwiFTt6iAiAntRHUWO8HaMmOR1mkJLUOpQUsQ8%2FHygi6ETQe30%2B8cSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BNOsrxAhvHy%2FbAP%2FKtwD0ttPgtwSSOx0fycPs%2BOaqdkhb0WpGSQ1WuHDK9GFU2McuCLHKz4GV7I%2BqeG8emsgXUomRPf2NHorJeRq%2Fqt5NkpwdQ67js5ry2SYbSMnY%2FKj0ZOr20OvwvlimkPYWB85UCBbdVPi3xpfeCKSpamDc0QXIijnlWJ7DUwnuE9w01jSpXoR6oZyREV0PU5AnKvIOTmqHOG1DSEX7b%2BMJDJWOjtnknL6MYYXcJz%2F5kY2TMehj0wKznidFMwATXZAjRBZ5fqwkWa3MMQ5%2BzoTm9xFS59X55BiUjX%2BRHv3ZtBWMEi5mzr6TjLDtQDPAFuVzkMEPBbOMQzVLqXYgO%2Faoa70iucEDYwSeRS%2FMNC3il62iyN1ovc03HQrF6mEa2vC8Q%2FK0DICUrtXQHqHdXxPbuDxPBPL5QYQzDgv4JzYYyrExVP%2Fb9E6fdGyR9XZqwyVKGu%2B3N%2Byx3%2F6Do7jyiJuSRenA49SMUX3Yz05KVF7K6O3GKFNk%2F1YkGgXtx%2F0rFocJZAwRSvbtVTifrR1MqU%2Ba0HJ8VsSVpnWZ7mjEb44AlytIk7MshDRGu4nK6Ju4wAO%2FrFJq%2Bv0Ml7M%2FZcom4rxcAMKY2jFMh4W90huf%2Fz9gx1KeuX8Y7TzB8%2FViQi%2B4q0w5bzhyQY6pgHW7kj%2B2hPdCWEFXV2pUnhdRitrrhPr4bHBOGJOuKqfE9531nujxZEndprx3ofvYzQUpdKgEA%2FJbjX2L9mxCZlHGLqC1w89Agk7wUDvCAYKQCQlHtilbsiI3j0lxmQyXxoGmZwheSp76XB%2FM0rYkgGzFLhaAo7PqnZGyp5IPJXOy%2F0QmZ9dMUIqQsaKHAWmqAl%2Fy%2BOizf9VNfEar0w4S0KUGGkcsD8q&X-Amz-Signature=09cfaa17e44b8dcda7f49ca5c5c79167e0d610dd59be02478d2b0d80eeba58ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

