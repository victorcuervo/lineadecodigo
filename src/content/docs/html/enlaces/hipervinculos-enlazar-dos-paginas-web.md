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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJVKVL2B%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T060929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELpEUAPwU%2B4TCy%2Bp9tsPtonBqlPtWL9k%2B%2FEyAdi%2BmXXAiABRBJrOXLBMBx9nwrWKshJUezDlVEtk1Scz85HeulseyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQNduON9EDBDaqSzhKtwDTPXoY902g43t0OOpINdi7oXy3nUIK9PnmXB%2F%2FMFGYs9yE8YkiOjZOvwbEbrsjtdjvfQVA8Wa8BSKbE5A7U9xqCw3pGTJXlDroZMN0Kni%2F1EUjs9rXD0JC6BXnp5qrTK1hqhLbfdDwgbS3hnfvrfdMFiMTpMJ8zGFb5KVubSLI6zFLFMX8ECcvjOhRRcYRASw3DSfLGj401qKVNPw7GsvZpyFt2yJ00BW%2BuzM%2BFcqmjUp51LLA2RAV6EhcpulRG6YPADNFn0rzGt9e8GL4aLmX9wCsVi0r9e9bD5R%2BLwawAL30ZYDp9wJer2Wve77kOuKjMLR%2BcQGyb%2BDJtHmP6gdF56h0SqkrGQntCPGXlIWFYEqWaXGCRVow6CmCYTwZNZR%2BS2r7i6WKplj1ZpoDtwxqHGAnOtMgdn8WKgeSmVoqCqM9vW7Rm6XZRFtPLkVdr%2Fr2Xmz2tLey4OT4TSp8bkPmlvD7LBj3laM%2FOf9uGJdBD7PciDtdn2sasZZy%2FdZfsd8YJc3q0s%2BCGOfAzr85fgrIoHS0hiXO2pPrh2TXhRGI2YQwXJXmmSUMYb4KnZkhATO7Vavwr0XvaT7TRtLifhimbhqk4upN%2FFdqPV3K%2BzlNBvqiESWvzyoBkSgp%2BIw4uXeyQY6pgHve5KEa2bnFY4Hw2MCaNfq2elXcGYvLS5CKru4tXof%2FtZbxNsP7AdrYY2W%2Faq96RzD2R0x%2BwBFbi%2F3D5%2FfQ1pnNiz2fYDftRPV%2BKEgGGkOzR9lzAa0IIKLJStqQo8k4fazdJATHqqqfrI5Dk6QN8Kg7KiapVsLEGUehQ9yCPFnACs4aquanaWLpe7JJOV6Cl56YPn4iPjHX%2F4erxKaPP2FVqtHhFD4&X-Amz-Signature=609034b8b6fc0c9a0286a39b228699487407a53781eea5874610ffdb202eb14b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

