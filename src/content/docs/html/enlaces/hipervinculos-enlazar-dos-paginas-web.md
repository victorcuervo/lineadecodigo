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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V46RFYW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T073047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5Oj3J%2F2KfyK5WHM1fQn%2BZ517CcPgWLOGGdNFvADistAiEA0H63DcRBzrQRoU46rUv%2FhBdSO8ORhc9GUOM6K4t5udAqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDOqtzeYvolDdPQeyrcAzP8xwnzloOX0PnXmECH3isvCulZ8ZEY45Igfe8I1F97uTpnDniVXJG1kie1%2FZvDgsFABf14fN71%2FXu9VsDFKWg%2Bfgs5f7eNPN3%2BJRJTLC8MINWVFsAaELZANEH0jr2qIDB0NvMGrlMw5UKr27tjG6sGT47YS2dgEgVD5aL35jPPMkMAZTxaiIHri12Od%2BQstT%2FjQJmj1HnCawDVIoWBFSrntx%2BERjf%2FR0UWfKxVvjucQyHQd8OLKcIPYE0JpNTgtAySWncHLhuWWrngADtGXJq6rlFz6fyiacI3kRrzCEgOOFYRdS96QTCu648lOQ25%2Bwa9RG3Ux80EtbhZI0Ors9Yje0V703eldxqWXJN0LSUZ489cUfObmpHDkbsEjL0UCrwyLj279sSZZ4JFl%2B8eUeIxjeV8WRwuZYx29%2FiqASeC9D%2FwPzi3UvOOZdXlumVfSWDctaLmLHWeX%2F7h1Fyta0uOq8%2FyqOtSAfj8O8SoofbQPMuoYk%2FbOeFGAsOOilmvcBjwWhVB5fjkfHOz%2BDXyHnsTP1BbAEEWmReba5Ldh9V%2BSgbVdbxzXSltJ7AGZwJvD2ZFAYKuZ4llYIqNKsQFzb8OdT44ieP9i5%2FCQWz9%2F4Hz275mvtX%2FXJz5OP1SMKSa1MkGOqUBGucteDzP4OyGEGwofu0nd0Z5QFhSGQuIOg7UWxZX8PkcRWJVDLCTkjq6xXNpoUaUaoUZKTqI8sgBtznmRg1mAcnBzOdVoKO%2FNl7iu%2F9isoG4KA%2BLFDyopgdkChj8s9YHI0IpkVcrLbwsH0TeXDlnBG%2FmDHd8xp3sNpQn101Zha2rmKR7QDQhhve8OpJdO%2FqxeipmTEJBmSV%2FIW6ZpdrrI4HXvF23&X-Amz-Signature=50ae393a12d7777d6c2a4207385037cebee42272eecfa8ef8b5516d80b4b95b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

