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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZUC2ALY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T004741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9UJW09NpZk11LK%2B5d3Q8pnMDvDB4brQSM%2BMXSKxnpNAiBZDmIuwsHVYKZrRf3%2BZF1NloUMtlpon8Ili%2Ffxp7YwrSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlvYcvugRphFpWLg5KtwDrV%2B%2FFcLOkk8Xp0IzSi5aGLKBcBDLa%2FtNuKewpKWPIyeMZmGFW23MZlTwOPQlowfjc%2Bux2dW9GZMTCagKbRpISf6nemM8DjBVzUroeOWIKvQQDugaW6gQGnYrrioZu3uSMw4BfizLek17wVWOQofrmWWhAx1WO3qp5SUetSNlwUeIQFLhdJeY4f5DrAWpcrAhNF89e19r4i6bzN7Rw68D2372VqIrpa7IpbxZGJ5HFIceII%2BmvT9SvaLQLc1Z85QEsxxIlgaIRd3xkSuUbAz0ojmr1Aa9IvLBHFqm6EyFuZUVCOf0VkW9gcOqXdjd2nOWD9c59tureJ%2FQpYzuR0JFaWqMktPGFHNQImO2%2Fwc7KPPvftgMWhNqSye5Vulkl4596Vv7LOZo2O0GhdTFZqc%2FtiJ4spFvogljTw4PNPEkeTnoKWdZFzt9uIKzpOSfQFrY5s%2BvnNI0cAs06NJ6n0vVaxejgNDGogm3ijmtiVwhzXb7U8kVDV35g7amx5Og9R7%2BRADgN5vhO%2ByAykDCp8E50cQOd9eZyTb8UiO3WER8w8aVQlmNQXRPmVnviAStZCUFXbXwVsuhW9YE3IaNiL60fA4eQv4dSQ8PGarBIpYMN3BnBQyh46F7BXlTOgcw46HYyQY6pgHK%2Bk%2BsY%2FykRsykcolzFORecTBpANX0IF53CIvmH%2BV0n5dnNdXrY7oWNhlEykHSqMUsR%2Fk4MqhWz8uY6NmmERuzPmA%2BJ4YuBeLvp8nq1bAc2QK1d7HD9sO7rcqC%2FjyyNHnoAe6dVMQEtX9125E8gKJWHu%2BLImxj0url4JkcSRL%2FPLHp1dal1p1oeDyDD5%2FXQ2%2F0Hq0N3gkFiTSAvWDu9f%2BHmwA%2Fcd8y&X-Amz-Signature=44e58646dbca5dc8e82026e5e0d0805556511a32e96816e6be6212a127a5201f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

