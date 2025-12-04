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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7T6QSP3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIAiLRyH2DUKMG1dGXi6m1QuqKjA%2F20cNBPMfVCVanAxtAiAXaHC1NqHRAc3q%2B9WmlwhrWd5W%2BN62OyifCuKozClauir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMzZ%2Fq%2FWoFOdv%2FXrKKKtwDxREeAzA5aPYybuVDy4%2BtNUaFEmHiTBKMh4IvtseWZD5yt8oP9NOQAtHDcnE3EiCMY3N9ol85bwA6YICVW0xR4xN9y%2FnmAEBWJQ19Fgyv%2BVh9OCZuaO9nZdzOQkVj15kq5x3vw1oD7jF4KuQJtk3SdmUqbCVSMm5FxJfz9HNIewsf0m6FedKsqZ6A6nFWt0YNZQlkdYlI9ISb7Xb8sf50MMbfmTmAY50i27JefTxWlZZBCLZwaLh45hyII0jMSp1dbBr8Sj8rII4rhk8GHKOK6spsIvKag1yHw2quY933DMYUUdl1pykS8T1svvkoyVeKrVh79LkKGCbS6tPIpc1WjG%2BsiB%2Ff7M1gly1gI4AqJJ1amP%2BsFMic9O%2Fio5OHK1MNZFOANIjABig2zlUUkkzh122BUF1fi7VznbJHmixoZBSzLi%2BKjG61zFC%2B3VKc2UZTvmQk8Uo4vVxSbHq68jUY%2FGSoSGlIpXcQjOXuExkoS%2FwhoXarNOo4W3T%2BBY0X4GmLksasc%2FpnjShM8OPCVW54sQ5Hem9eIIiyNW4RK%2BDWnNRKURDr1yld8yg7wgTqrCl7eD%2BUcH1aXESlSfctVTiyZ3b31Gr0S2HylZMunmNbIx6qtRfYHoG7sRqAvFUw6qHGyQY6pgFzluD%2FlGh6Xl6PjqyjkFUZtFD1%2FHFjqMGK6%2BiI%2FJeDzIg9I1nuC5eFXt59KN2Jbe2J800L8e82yUEwDbUkKyJZDr7cpr5EMuhDu1C6P4iR4OU89ltFS7QSuDhGKEIOFg9plQghTF99tRRrWYMb4fKF5O7kQqj0izpQX4uJ9alVc6P0g9qf4aHmU1d53zAYAhMTURm27IMssMpNG34FAy8nFZxIUtfG&X-Amz-Signature=4a1a7109b9d79a2de78c1bcfb0f7e018c69373726050062571b665b2bfaa1ac9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

