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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JMBODNJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T212226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYC0PIjpurmOj%2F4sle2Idly7PwClI11j4zH8w%2B6DpXzQIgeRr9iSNkqEpZuSJ7kge5M7i2EOYC9Nq%2BURfsoKMEytoqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFLSK7LAfUeWKZb4yrcAwpCHtTcKw0AS49OtFZ1ms1R9LbrHNv1emzCUmwSpF2CJpILQBubImo9qHX3kjYpKJleDNgi%2BKNkwJjgC6kk%2F2HcJhS9sd1e0eZBqC6%2BqtcuUWuUMk197jaE00ODlQbLLJSwgXa5C9r0yZixtTWi2VDYV0qYMnSM8yXoltjr0ADiRBj1aMefw8Yh4nJwXiTvDhp9ceE6vIOIBcGteRB5k2PA7suZidoUDIcKL4jllTE%2BSCGRsandkCqlCbW%2Bp4qL5aa6qMiCdq89NUGo2XCOb7rZRuMLi7pUWLzpskgMuiwzb4u30Xw1l66sl%2B4daGqo5bhBY1NkeCpiHv6lmwmuw2GG45OYPM7cww6IVaA48ckcQqHWweaUNyPsr9dUxTfYRz8n%2Bh%2Fr7WSzlXREXHpmrXSZIIbjapKBwPW%2FSVoGP4%2FrAkbKKUzJeWbNeoODLCnrGVY5VK2VRhN43ZNT%2FdmcNSTa%2FeKAY%2FQ%2Fg4UqUc7nQU%2FJVk4inFCRDKJMsNFTD8zaAdyQ5H1tuvKk4HY9yfnP2BXXIMP3LnPnAY4Jicy7sZqYp8OcsJu0BKwXmvukAwf7o%2FK3TTr21Tucrak%2F6z3zWDPjSvEwIuc%2B4QluN%2Btef%2FhhcU%2BjGLRKUHhY9U92MOSe4skGOqUBwbgaknLBQCG%2BlvocS1yv3lNz36vlUUD835r38EciaW015%2FsgpFDZdtiEnrMzOT3O%2B1uloBLjoLXmlKcQJgHtjk0Mgwbhx4zK34h4QDZYfOCzrcBGq2Py92BobnkVfnQwOX6uhQY6YMnpaLL%2B2IExXyjalIJ%2FeE%2BXUpj2yBCo3Y0rsKz%2Fjj1oRMxYiEgAEhWig0lhfMwmcWzL%2Bl4FX%2FRR%2BfABWLxa&X-Amz-Signature=1f3ffa7066bbdc37f791e612f9e9cb20ee1a92442cccf39f253b1bde38c35ac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

