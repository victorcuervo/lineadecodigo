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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP2WDMFZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T070649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCImVYj67TqdVpykO5qXhM7MoFJqI%2Fjhbi2zHVmftgIRAIgRwLDasKaL%2F4VvEJSDy8457Y48vYOWVYvdBZx8HgHJPkqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDmlpZrlwFbWa5VeZSrcA5iEZZaZL6iHa45lx%2FnaU1o1g36IrzZIAH5fZ%2BpGhtZdot%2BnywuSl0IbvFquboArLptBt6lO9ERUCBakrwxI1qVRhEfWRz%2BZ%2BHYy%2BaCSmdlGPaizrZzyiabLw28GyjK48C%2BPf1YFA9H1i2Tpi0iaWnu9EAGTl3lG8k0YT2wTGDWbDRFSpT8TCCgvR6F%2F%2BJdJ47G40B5iWwxUmjymgF21lTyBWyA%2BpV9mcui%2F4mpUQRPatCk%2BksBUnF7au%2Fb08%2BGKRF4XWJbRv6m%2B0%2FLEFPsAYm9Bt9Lb407rTfKycKs4w%2B%2Bb9fQt%2BNsfI5tiWRGPuN6gBWmCmY8GzcC0DzHz3G0xw6fg19xYtHeR1tQY3%2F2ePKbu3j%2FMFsRfMkOHFl1mrhcyY6USvg4B6LwJwH4nrqUL6irpV1ehwPlIBE16v7HcJQlBcnVU1%2F0y790goBu5W4yussQHBIcFu2YklR1droTb0fdx%2BCPH0SEQqKu4Wb4YFyAXEJAtlYHRUHBm4AKIKClWvvXuOl8CRAomsyMTLwLL%2FA%2FYsJr8wUjqeZ%2FK6HLouzb3oE5IVJd3xKo0zicOMujGcFPF3c%2FnFmdKDjzQMpO%2BEZKZEEbHD98XoM4Mm2qRLmmlTFMQvIn5P%2F0cjiMxMKiH38kGOqUBjijY1dXDiWQ5aFUqkAM78vTozWHCoFjQtHTy6SJkwyxuW0gb6no8Rg9n1vyeTV%2Bc3Spn%2BlMZyNipbXOZyJAvusAn1dSXetgLdKfrE6tqSY09Exjau27i%2BP%2FaGSxPl60dAaF96sAddzCtgOY0wjuZXCOOaAfcRwBjodFGcabNb4TbtU9owglXR2nnxTaD464cuKlZsS1DHER18y9D6VRWvpXeTMf8&X-Amz-Signature=76248d6d7bb99a8ad5b3efbf00c5fa91531d8efbe61eb68ec1ecacd96dfdd213&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

