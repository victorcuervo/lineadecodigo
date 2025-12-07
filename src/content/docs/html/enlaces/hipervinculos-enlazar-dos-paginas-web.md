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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQJEOBAK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVm6nTuPJU29vRpwy7PnDP%2F608gXHlG8%2BbdZuEq9wbaAiA8UFI1EcebSt4rQPUCc8Hgabpo%2FnHt3WbVsmRm8rDOTCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKNRIB8Bz5XBlSsxnKtwDUCERR651W8fAKQhjwHFLVcidgkB%2FzW6pn5p%2BM7saLqZWUDLmUn1qDGHXj3Oetkedf7DfIJ8LsjQaIxJbA%2FREssXFaAoKGHyRMFJWiLk%2FTwy1LYJX3zRttsAMQnkyBgkLIu2DTHfDPLAlm6RO47r9R8EO8KahLb8uwMRBlBUPKkAp530Ho8cvzjDqjiFQQODU6Ze6Kbh0bAsgU37h7KpQfKGrC13OiU1cFpREAJsbdSaFcWoEb6zGGumpD%2FkQ8j2DzXOonoDulGd5wpLgNI9qS5p27PtLYQMbhO%2BkF7912e1cb7PDEIxaQBNXNA1AT7rW2Tr90oHCh%2BmuULmKfabI6OEOchBBeXkMJNj5CLF6tXbo%2BBsfW93aKuJywvQXE5JUk91cJNuKHbHS8dgu%2BFGVqNObBUbAnZ6L0WZn1Z5OFTbCyD53xTN4wRz0ke8mPS4Pig%2ByaNy2ODuHZfEvIThwdbGFwFT5PWjCN5AIPgFqIbs3tvwQAkFfBwLwtRrJhdGtBF92geSbhQcHg7%2BaqdBXR0PJ8gp198A8pUvHyzXHjQ9EH%2F0R4pUxUS9Dmlupt1CMyWky%2FC8CdjjvtgfE6PJo%2BmEiazn3QhSg%2BPT5%2FojLHsl2kIm7pvzeNib314ww8v3SyQY6pgFsBZDYYkU8M%2FC9fP3%2BA26%2FQq6%2F6%2F%2FqR1sdoS6p4hVmHmIhxG%2FA%2F0HHKCqJgc4xkD%2Fl94JUHapTjISHx6LW9gDogQzAEpVuMT4%2BZqqmOWLYgPoRklE4M37uuL7kokzS3Kp%2B5H7HJXI1IcymQy1ugkVWRI7oA1uVy1vpC%2BnuuFsV9PbhisVdyqHkS4GlA0WjDHsEiYzzNP%2Fohqs0AzEfijsXzsWrpzO0&X-Amz-Signature=c4fa0033e48b017446366ae9118aac92e797ce0f7d1f9c6d5d32c0ea6e34883e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

