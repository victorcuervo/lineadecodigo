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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FTSTY23%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T162013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpkrvK4Ev9MvJqHubBHD9awB8m8f7V4N0Xo4i6qhZmJAiEA8743AwYdVPWuhDqY1IvsTcjYOMK897MbwY2tRVglbtwqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2QmIAN3iHhYK86NircAzR2IZScNn2QwTzDmh7lmyWf%2BbAvS%2B%2FHthkI6p3xmvJ51XG7bLWZKdyloeT9HaZRKhf%2F9hBNGjZ4%2FZecuqL55QRhOnjqhbjPMFWSVZ35fSRYiLMcSFyZCMv9c4Nxx6SBiU1qqusZ8EoOs4QZm2o9pfcDZjeShW0%2F7RHYIaRYT87HEKhgB4g%2FBQgrnssKVyQvofm394YPiky46dGiikp7CWiSQUOxviSPh1R2O%2B12nu4YJCiAAQukurtMvJIFE3yqVdA4dAqf905dnnWGYd1Og7VZvaWl%2F6bBFvMQyRJavS%2FDzu3UantLyLQKPpWLPFJdjoIZBUSAmas7fa2BZ3ocyQf9eQyyEeuOpcFqPI6dXFEEhFkDhDxhoXdrTpwT7DqxfxcPApMZmHLW2TtcaNuS0pBlqsbrr2YchjJEgsGWCIFdz%2F1tIRn4DB5cvHAZGg6LV2xaTxDjfcIFxgg3ucubmQDt2nr4xwi75%2BJxRUq90JNutHp7G1WfRGFPY7xH6VUEyocrG3TFAU710B%2BypncyGEYZjpptCTUz9LuTfTs6vcCO1bmO6d22YIopomuWJgE3ZWeyNxkoexlGA0mAF6wYFXZ8y2AZVRKwi7dl2ZmpVXph5gVVeWUFnj9VHamnMKe81skGOqUBa0AAncGAdGVuHNkvPzjRKRoit7qH%2B5WiAAGhklzB4yciLdOy6rE2AxjNa%2BIllGWogXMooHwLt%2BQciEU%2FmYSw67vSDPWvZOAinBJ%2F8xWj4ZYn2E%2BekiOwXBDb%2Bh64smicqWC5j%2FEPNkTKXJtcXvktMpcodRtlsJV8rkYwVIWmPtHwpLcmHirzvUHMQtURP1ddoDw%2FyGvFpvSEwpixtij375GnDPRH&X-Amz-Signature=df12a5c03d1bc34ac786697e6ef6c18778914ffa4adf59dc5db452a264bd074b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

