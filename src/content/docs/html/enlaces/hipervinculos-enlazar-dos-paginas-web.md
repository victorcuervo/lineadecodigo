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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZSEXUWD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T054544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2Bb4W%2BFFdm0gYQAOWSP0Dyrbl5%2FO8BfvP%2FvBUJGrNiQAiB88htvykzziI9yd%2B%2FsRFhhfWnEV7W9cVgni%2FH%2B0P7PdSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4hkPzlvqIc5KomhsKtwDv53lnbcPpkvQaJeI7NGNqvTG0CzWvGNYE4AA4kTAfmMRBtHDpcXjcmtQ9Tlhxrr4gJTBRwbguO8nd1R78GMtrILFx1Gw3Ka0eCVMr78Tj1msMtMHw8iPha%2BMDAaVnzTTHcMLXTgKBPhvJZFejLL0olDdiBz5OfIjC5%2F8NOkZIHp3zOQu8FYVcd7ZdTYjTKVzgQacY1B3g7%2BLFmO5OYFogbwyBzXejD0ZjSeOxT1fA7UA934UKDPPcEAW%2B9r3TZnQo4YAkLBeGSoBquhE0gVzUV0t94AFb8eMwv6Rs%2BM5E%2FBKw0DsYjn8jDUarqci%2FUk4aeu3c%2FOPUmnkaa7%2Bb8TNKxvKSPSFsJPTpkJFH6rTwj%2B6dDz8UnXf9y27dmMyFoprJoCNktczNO%2BSHzpiyKEwLxzLVQzqGa4dRnBrF9IsU5CIcnc9cAVVFaP0eSu81lf%2BSZ2%2BqJPztZ%2Fo9OeSY5tFvCQ1yTz9L%2BmgF1WvTZb2CEPt3bzLUsF3Wte%2BAKsKneO712thZeUSrljgyB38KZ6Hk2OZtouWhE0H0VuktXjmqP56BsqQFZ21tT8OSoCqw4TLT1agFu%2Fzv56hYOdtvWOSvJgJgC6QQSSQKYUx%2Fif6w%2B461UugNXBvzjvpEokw57PZyQY6pgHWGru7SqSU8eRX30EX%2F%2FEX1punL8h8G%2Fmrxiv4QOc5l24oFq%2F6PJYjA5GbOFFp96Ae5qPl%2FIq%2FKg2Ote%2F6flgDxuovT8JqKEabKdsbyC9SkJZ%2F%2FjFRgfEoPUoRgg9JgKgUPW6xB%2FCpKBvN%2BSK4wfsVTm6HjpAA1CeDFMY0ks%2FxRW8T3oD9rWM1h6PBAUx1JFVdinyjumBBna4US5odJLzmK4RBd%2FMy&X-Amz-Signature=f49adc2a205a16a9be196c6c5e92035d5c6f49161eedf406acfcec95e2d9f4f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

