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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUX6CEW3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T152452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF4WkhpG%2B8THDE%2FUk7jOO181rage30b52qK4cQq0KIllAiAXRdcI2DjqMOHSyHPMT2%2Be129egKuspaW8M6CvYS1CGCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPSU5zZqgvlaL4oRRKtwDokb%2FV0TpwDC6JsE16Nlnenuhlr00PDYxUlWO18VrHjR0HjTBLJxDacHn6FPzWHnnQgmyutIf9sRfk561wj6BtkL%2FKC34UBadogF%2FiOOy0YFRL4nsgTxHV3zHrmwRVhan%2B%2B3%2BN5eRWZtBqVV%2Fmq%2B%2BBtqMqMUifdesGV7MJL5hlI33khkB5bgdVahfValGptqECpGgtxMTFhzg4FGXrX7fdZixnbBHvLGIkwMbI6TnE9EbMv2djWKFUylb8%2B8njjXy3%2FEfQIOqTGuwDDH6cnhBUC2G9a0mDjTpZcqiR7k3sYi%2FL1EuhCiIzxb%2B54lF5iEhZRkadthSh8k1d%2FvGXiRHbs6Vh8f4TdXy54EgTH4%2BV4CeJvBcY8Rc%2FeoAfE66NW39C42gX0nXXtIf%2Btno0eHE5psUCJzxiCknc06rgh7QkrafNjNy0zpDAInxNDYwQLC%2F5HGsHFBXOhbvAYECkN%2FRerAzeQly%2FcjnYaJDueh6omgXoR8m%2BkmQdHdJk9bBaFL1KDXKxvIxd9krnG6icUGVMLCTAXxjL1X9r0UXfAqArGnYLPpf7aytiHGNlhulFtIBpxn047Uq4IoNgYx4WvfcNUrWM87pXE44leFFkWCmU4HmS3%2FYPHplWEvYo0Ywkt3gyQY6pgE85c8FFZbNVzDDpak2u%2Btw%2FZNZtaxWivkWZE%2BB39HidN%2BaDpEQZ6sATWiSYMCu0eEw83qg9GCvEOm%2BCEjO%2B61C3dlDz%2F5miPR5fuXjRBcaUG9Zd4nDZP%2BBzFYfBW1YsBJ5C0wKUO2K9rGJvLnE4OPMhHWbC%2FniBh1Jy5SUkeMGBReeb%2F1PyCdl%2FqYj6PP9CSFJMOtdjYlPHBCLjWRYEbPVHyR9DkJ7&X-Amz-Signature=c4f8cf1164666c7a95486adfe1f76694599028814ff063b6d4779762e93ef2ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

