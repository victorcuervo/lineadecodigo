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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBJUNALB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T033747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETdpkONkvqB8Xvc7uhIS6VSUyPsKkgrrB%2ByMNiMfITnAiBmo7Iot7bN%2BnghQPinFTU3b1xFLJV%2BXalZAqTJKMPHWCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKdGTXxcXO7xXYP4EKtwDVq2EmNzKgkgTWbKbmaFEjRwls08MCgUcZIkrsqefC9vVMY%2BJkp3iDRsELPXf6viwh%2FCYIT83uXPcbiKMQDKQ6M5KiLmOAmhnLIEDRJqNkC%2FUdIv6tUmwJcyCL9xe%2F5VZujux2woQyHRJ1zZnM3LWg1iSskma%2FlSQKebmV7DzKn%2B92JnW3zOSFStgvqxhEb%2Fw5A36vxHhrjdJsG7YhaufTzf3aBoxL%2BeCb7%2BFNIbv%2FP0hrnzUNzdcIn%2FSglt6gATJ%2FXI1gIk1OQVMbfgr2D%2Ff9G7oOPgkxmJLDJYSugt2JK8MEJ2Vyt%2Fc5T%2FQsXy41PYTwQ0wkTesBmE%2B%2FzGBWlb1xRo1K%2BA%2Fmbilm%2BuCK2WMU5LX0JGM9PVp3M4kukFL95U7tx1IMIWPh6r9f1U9yRG20%2FuHZtt5Q3M8s8IpnZ%2FOv7j2cU33ucdFnQ794L8rrWiUO5L37F85m9Nsvn2UN0y0lp74ap%2F06nYcE7QDZZnDVl%2Fgl24YV1swgRLLlh%2FnrTIBONN9U4sOQjH29EMnw5C6VMf8E4iJEuS%2F7ZXbDkJ2wz6w%2BmX0HanYzTSqTp4YYvqGDQtTSY0etvQqeD4PnW%2BHDHBiBxL9FedLom53%2BeiOWpyzboCAltu9vwNfwkMwxq3eyQY6pgHDVymHXKBwADClaV8ofbIPnnA0MA2sRtBu9QrdKKMsoaoe1NU0WLy%2F9TKf5%2BhxDozXdWLrkmMXnvMoRmQ6qWzcLw3Qmymfn8BV3csIEwTeKTG3fzxZasAGwwC3jgzz9FlpVTnpPVjeAR%2FGp7WCoUoCePubnPcYbGQIYidkXlwrNQGVHK2AszqFv2j0YXyB7F1kgtMvAfhm%2FswPSELOCsTOva5QYW6a&X-Amz-Signature=7e3302fa3769d455c77b8a7f58d614a108f1f9f2f4429f44f761585f4150a4c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

