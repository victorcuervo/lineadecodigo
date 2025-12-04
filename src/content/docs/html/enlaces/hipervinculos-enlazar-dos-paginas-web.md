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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUMRDYFN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIDhUKTOhC7d2etg2kaR7b3NW14CXqIh7vC3zImeQDsWyAiBGQ9%2FeDEQms%2F1Z37pNzZ9bReGIyE5yxIwj1%2BSD%2BoODnSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM6nwie9%2FrJIMk5kz6KtwD5UZ2pn9x9Y3Ljkld5gOLalPwKezKAaWVVHNzOuIC09Vvs9W4Rd5FQxlZF5GNOdqhgsasD2Ohz8bmCAWOj34VAzauQyNwx12G7gU81ky2GcwmaoMx1JewIQi6JoLVw54xnw2XdXvvxwX1HmheMkxWPZfnQxYYwb48hRwoasZ9eS%2BSDf%2B6xV8r%2Bs3y9VyGHpUHAPxG2aZwcLR7g%2FlDGkaF6qb9XYk2gOdE98SDsMb5rphlctfdyxTLnFGS18vf%2FrOs%2F9xNF9tYAqAz3HC2luD%2B6lAcsd%2BPiGKxvlBzmeGQ4GEimXpXOb0jK%2F1UlofdIVMxYc276r44el2aArC5KZDbTbiG7a0rV9sGJ9tIbfFsV3sMIPDludyA5b1x%2BFVTw8fULG6jKn27Qntd0QwnIL5bhSp%2B5pA7p%2FbL1pUUds60j4VRvcTy%2B%2FobocDEjC2%2BIbM0NHdaf%2FkACjlP1JTFliQ9s7kD311gpVvAtAWuBGnOYfeYzlMD4dCipfBB0%2BcIl%2BDC1oZV%2FLykOTzcZV4gQXjvP4ld%2BDIybUjYj475x0mdjoi6UeyMO5EJ3x1%2F4k68fXKXg4bMLfHumkJBqWkGb72jCcudIKTjoO824FtU%2BlEwElu0%2BOFL8FJ6j9NCLUUw%2B8nEyQY6pgHFf%2F3PzeVJuLcZ5i39Ucl7MOhvKTQtG59LIHFH38N47SigQ6DT194jZsuO147LK7XUaDYS%2BiGxr2GZu3YagqV6%2FMskhmaV4mimC0YFM8xAg1MuZPaZAn%2B3nC9F1yiQBM1a9VbnR5RZtHOvhYBlGJbLhwNuL%2BbRKrCJN9SeboDp%2BG9W%2Fxd2cu45EPLOsm1DjX1I3Y%2FUYCZ26ylHaQN3sNZsECOY7pJx&X-Amz-Signature=788fe4c7e4798694ac1796c57be28bea29c41067b83bdb86115c1fb47070b565&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

