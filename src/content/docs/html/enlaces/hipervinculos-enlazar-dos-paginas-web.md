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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFUGTX35%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T085812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICocPOGVnYpT6ymUFEXgV6B26%2BJaXUZB50SvJwD4TiW2AiBEGO5kQ7K2dNmhCx2XU%2BT1snPzJUP%2FYkq8wKbVNXkiSSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp4F%2F1MR%2B222etYipKtwD3dMfcROGMfF%2BFFVBj%2FpHDBhLFvNLBO7UZ5m6ExbozzSOekWtJ6gBkRsWWr2p7yKpSiTz8lYhc2chWxWE%2FHFq36x9WRkuqDOjRXubfugK8BTA7aYqZDzzluQXZ41TdILlQASs1Uq8LHBgs%2FmC4jwv2emFkFCEqaYXwksf%2F1LAWpTimfF5%2BzcTfmEvImld8zXaWXeLm2JQaAqIJ%2FdnKpv0F9esqBx4tTrr6cgEnMZtMWa5OItq%2B4iWK%2FoAS%2FPoeUYwrza6QTxcZeARTHuof%2Bcuo5MmoWpNmKNj9xbjkXq6vTo47n2wcLkBNVNjaaC932y4cRYnS614plSNr%2FfGRq%2BrRkty%2B1Zy2Nu8xvsEH9qk%2ByvpimzRVyVsBNvzF4ZmklIgJ88TSjvjm77W%2FN77H27Bw%2B0yjR5KrvUHOd9HXCjYrb6m%2B4SO4ZXK4SvdLDwsrfD1bOBWOrULz%2BQGQrduOXjMq6%2Bx41OYVHhJiifwE%2F2AdveFMMad4C4qrpNf81hVSj6HcEJz8hscVjlBYN1Pot6ii5lZ%2Bn9%2B5czuTD99Azy4OGfVDvymZt2soSBSVccU4E6PxKKV4f%2FNszJ3ESalXb8pEG5sMLkM3Sc%2F%2FvNZDjyX3VopQCl0k1uYBQtu830ws8TfyQY6pgEYkA%2BHRfXmStLcFT8iO8ooOZYVi0elWxZ6hjyD44ext71zhsnSP4AiiQ1MgWECmy3iKd6CVmJ11Uca4ST7Sokth3fZynvLALTl5AfVHnEDeZm9zQv4z13V9%2BFNNf8qNeJIZfa3bhIiiNrHHgHqCu3LXA74RK6rCSFY1Wi0oTKV1rSaF7qtqN7aZx6cQwAaqcVcvQxAVGeEi0abN5GqTze2CC%2FACG8U&X-Amz-Signature=75d61c289dd30c16984f53418b5b10d1a67694000bffe47ddfe87dddb4caef53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

