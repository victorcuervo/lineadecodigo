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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLP7FQS3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T130259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiucQ1ZXbeMgKDMIPzWMlyCx9TEb8hZjG4%2FWHTe4gFtwIhAKFR8HiV1E8cmMUXb7FDa%2BDiWSvVcq4zSqAvgZ5bNDaHKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQay8giKvPLyWWS%2Fgq3APLIdSkU5C42W6aur%2FPRfKIGEua1RTOoqAtgzQ9srefMoVzvZpPRizQtia%2FbHadIx1hin8kt8PxGWmlYtFdGtNNB2D9KqBKw3vkGZkFiEgDiHipdOVmMTUIR%2FsUSxwfpkozu%2B71tlmVyQh%2Bjw6Ir61e6sBtIc5QqfSOv6uehk39DAVGcylAmJ5OSIMQpiK7zPB6j4GRycv%2B0IZEcfm8gxofFjkY7m8owsxl6VHwrDjzMpY5%2F1ng5pV3Rx1FQNSSQFKu2upCLexsupSiBmXkzmeD0HdJgZpONyi%2Ba3ZcJPDj5GDh22TxqpXXCYyRmG6kwtgueHOrbm8ixcXxxMiL9q0kwHTjQFam%2BS6VPVLcjs2jMSTeWNQLuatPM1Wsc%2FSubFmkxp317%2BkCF99iDStRrHdjQq2I7xbf74ejKa5NJeEK3BtBBIgqznF%2Fasp8KZpOK6DC1nXAVcmp7oqg%2B4mM6GS7zv9Jj%2FuU7adI8LZRXUYZx3aACVQu2hUpr1mrg2mR5fKbORR%2BYHvMcfuD4j3iMQuFr7Bdgs2AHv6R8P%2FqRVguxv6L%2Bv8j7SBPme1fSum9H7LE7bHMHweOFPTnWvywAmlxY881rStGQDrY5iv4u%2FqwXjIlSWZo2uf%2BVFORqDDIj9vJBjqkAWxtMuAuHFg8yY16DzO0XzwyY4ifPVGbq%2Be3sJPuV20ilHRqMwcgy3C98VxAWiHI7H4pz0P7c%2FhJIgeg%2Bp%2BtkFizSYoSngNIwIavaVYWfKF%2BQn3MZjXqgZrSZ4C61BJxGZZ95RbNic265ABuLTh9Paa18sG2PxSFAit%2FYoDCWi0x4ZXoJOuRoz6esHXzzXAZY%2FqyttTsN1DY8ukXgmidYIc%2B6NoU&X-Amz-Signature=22168b49d356085a86998519c5edad8bbb542179fe1b48f772f40aacc73524ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

