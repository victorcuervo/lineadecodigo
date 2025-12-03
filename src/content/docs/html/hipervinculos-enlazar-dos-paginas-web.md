---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L7FK2GV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIEovTQe4cW6vUU0I5AXRevLDdf%2FVG2E2T5ffMInvtPS2AiEAy0BRnvmhe2JqC0wPV9M7Cf0RWZLLM5FZzd7HnE7K7yMq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDEc2qMzNI%2BL1V9wu%2FSrcA0WjCMaYh1OznZRaLQzT3MR6RmDNjT%2F1N%2BeCDa8FcxhhPA6ZS29eGecUgQNtwD9tBgQjOFEA7KTN1h6nz%2BGJLsJ0%2F3YJ4TY21F7GO0h7cR0RXaS%2BGbya4FwTsVlbF%2F6d6ZkffhACGGNnhFXEV4h8LTgBbxRgQJT7mO5adSs9KFPBwgCObsNuqmar3ma%2FyMCBMjjr2MgS0gqj1zPYeCQoR3o3uAjIxYbIoGLB15Mp3gpi51Lh84fWLUOmkJdOxvFd0Lx4bf5eSE0%2F9d55FgYItJQ02j0IOrsxgmbEHpNFWKeR0s1ZrG9IsTOZ%2FYVOjDgIbTNDfNeQnzYpqNkYYs5uU0C6Xrg7zhc1H2vaJ9fIXVZ7j%2BtOv4TZdxMdRvo1iiiMLiAncYKOrCRVsq5%2FpO6gdNC8nHxvexPoRBtVK%2FZ2D%2B3C3OmVGVAEHHSlmMnnsGAjwy1jPX5Zai893gNqFSTq9U%2FO9l4tv8zwuao7PtFzLIw1dPg0y7Aq6A2%2FwY9HQVmvSgyfrNhv%2F0u%2B3Rm217bQwaFLymzO5YeEtYKYLSnc8QlwQ4BpKYKh8Jh5NaaUKjo%2FkUDCAf38X2PZETqZx4rv03jgKfw13V%2FnBAlK41mRir1iXbExNB6%2Br4kJM16iMIq9wskGOqUB%2Bo7XxPQy4B59Utl1ISfl4VyPlbeBdUhHHNcvp0P2v9ddSILp6HOUkVpf8O6QuEiNMqgjOHREzc3eWCPlEviGyv2KRZ%2Bx9qUPgDS%2BRSiIBeO2CxREux%2FFGkI6pKyBUdxvXuVsVT7YssR06jjuEbJHbfPSCbXdtdgdjW05FUFCi%2FVDjlGKHgjRBQbj8ZIwzGWef8LLXQ10ykQu4vs6RbJ%2B7e2GBC4i&X-Amz-Signature=c2611ce39af22be70f965c386250b1bc32ce605fe1d8dedf07851fb3cfd63b26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

