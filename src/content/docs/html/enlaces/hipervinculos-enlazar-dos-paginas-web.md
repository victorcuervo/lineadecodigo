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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KXEMZPZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T005917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMNNkV604%2Bv4PDc0z9Wn%2BsB4Z6G1Ir7rjyKg9OMUZpWgIhAIIZs2riac0vsV79l0ZSRQtu4RxvwpzzsRARecottXRBKv8DCE8QABoMNjM3NDIzMTgzODA1IgwXEzIwxPIUXjkx7IAq3APq7Lp9ErZSxFOMc9%2FP1VmehP3BLUZHSbKvm0iq8oOMFYeE%2BymIn3XWUdsexji4WQv%2BpeAAAbPb0%2BE43IhlDAIG73h8sY2%2BN%2BRHEJiXDypfSTz%2FnFsdxXoC5qUeStpn%2FG16vMLpLnDTvwsLayV%2FdO%2Fzof3ABBjyfaxqZuiWid6hwwdOKhUuJHCFEcjIwxYhwb3%2BBPo15BBzxmBMHvbuvTq0m8XapAZZh02e0YT6NluCIFTf61PmYa8jR%2F3vQuX881BtSUoULM%2Bjwr6yN26qpcbk4yY0ifn8HJCx46QfGbg0Uj1ubAfv0WoOaPeQPbYQJhnPxGBdzCRAB%2FLPE8AJdsYG8%2BmYEwrxrnyWbrtkgj43W7%2FSkz5FDd6NRABJWHaWN%2F3KhciYJK9AZ%2FcNjge8179mUi3rEPzC7bP6yDScTUsT5KybMjGTFgT9dNCwHvoiBBEe4EiGbotm7UgJMY%2B6a7iXi5xrYc7x8W5c2hO2dUQH%2FlIrKLtNKmVHpjd51pTocrf2dK5wJtg1F45dBgTxDufNJFIDfP3sOMW8axsKFxt8ZYpic2BCSEXJUtyUjjpExZnGqzy5M6iwpoNOJQYvmGb3wJKHkG38Le3jIix5cjiMgP%2FRKvG5OafO6hwoBTDTjMjJBjqkATtNPXgMNXnlc%2BgIoM7eS4mxKNfaajC91L58u00FdipZzKFKgX14lVhOQpzHsdOkYqT97htybFp3GWBJXZMnx30VvXkoaPOvv6j2zxbGdJNE%2BJ%2B%2FXn2cigXu1kQKUvFH6ZdK7nHJlyhb6rowT3Ju4UTKKeLwwXLD3coEcJwm6eqW6%2B8JsyDr%2Fqqvl8id3eIG4DC32zdGemJE3t4vsp%2BBpjdmldHd&X-Amz-Signature=3f14578b7d62f19b735b9b50eaeabbf507fe01791f1d5dc75917dc592f4c30d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

