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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S27R5K6O%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T141803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARTiIwfAuCGR12PQGag7aIINUvX7U54DEAemWZTDNkhAiAoKGMSM%2BILLZvgKC9Ztl2mEfcbfD5KyxtO1cPDZ%2Bi6MyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FA3E50cOtFk1TP6PKtwDPAePuLEVrZS1gnchByje2CMQf6Ak3vy%2Bo7OH7KgAllIlY0jXRb%2F%2Bt9lY72%2FNmfeZob7VuIo69YLqYlHvjQZmSGnfmVhYiwIYCjvJLFjVNAHuTGRkLGZCyTaroW6tynDCnPvS0%2B38Qu72vXsr%2FK7vwFa7pIqHrBhvKQgVYXXtxt20ZudpVoLSs2ocQR8z%2FCzgmyzBhGEGcd8dJw9UkfLSR06%2BrIMEWDPpsaEbv3WnTvWkrjB%2BzRYJ2PGe0KPk6qNTg%2Bpr5CuhH6v6o5%2BqUpETKFebI6FE09Ne9FQTCeoNiUBtESr5w2UJQzoJZVv9iWkAoC65GOOWIV5VMov7KKr6kTzHaHdB7RqF7MLZLV3fkaoA%2Bm716fC3PGO6lfbZa7e5fBYuD08uGBFtDCPuI4xwdAzq7K1ZcXIrYhbytmOEW059Sszu5apfI2huenQaDQh7LDTP5pYhW3N8QP%2FLTmMsqCOr%2F65l9EDvOoRJ6PDV3dkbacX5%2BDOsoJ%2F30rSiFR6hBGmpnJO9yNlzwpbapnFIuJOPb8kZWHbZhYA1FxuOCSEb07%2FrWdTciCgm%2BSOn5YJQxssd4ghDSGMoW9v8Wpx0FWCPeiHHc7T15xyczsWFBN9EJp%2BS7Wnr1sZENOIwl5nVyQY6pgHUamSDAhDPSTvc6K1Knv3m7q7f4cD790WVS22WoQZMQD9V8pwZ%2Fssz0viwd552Un4lg1XbU4DHZ9eR5Fjf03aKm6n38uhHzHkoW8Orbp1pWZ9i8k9MGeyspxn57MmDKI6FG20aUFeAXZzcK6rt5TUFO%2Fq5A%2FXKz7I1xyWlnyLgTv%2Fi1ExPno22ZCe7mNA0NpAkLU75sKvo6OGVNwSwMvR2RhqmH83u&X-Amz-Signature=b5412265bb13d4a997675ed395a02ec742e5e7e2cd55c559afbe7bba1120a178&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

