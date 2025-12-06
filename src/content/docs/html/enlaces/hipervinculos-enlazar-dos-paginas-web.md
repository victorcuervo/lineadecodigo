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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652D5WJGZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T140412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B5MEweWbjXSqcntrDShNXWWmZv4b9sBqBuJajfpVn4wIhAJCxmmOq%2Bv6UldTLI5Gxfm71q2%2BUt4Ag010macMRKRc1Kv8DCHUQABoMNjM3NDIzMTgzODA1IgxfS9CQMmu0%2BTy%2BnYMq3AOErSWz3lr2RYbwppiArltfT8UtSrekFwuGkUtTohTJ9HbzeHpygOWziIwadt9Dhr3EN7OHYU6yzGA3emj81df%2F%2Fb8lInxt7DZH5YtIOUwTq%2BPEovDbavZ1o5ZRExT%2BAC4f%2FXL7kbolEo%2BUw%2B1Q8tJZVLWpKItxZwxpLIRugKnD3WzjfuQCG6e81UAIkyglCx4N7bvvGeM0cOgR50K8QvxNzcE5kkHUUY60wqaFT95YiisWHrb2YDRaN6BuEVsSnKVb0QVsWCI4LLunghqmk1s1ar%2FF86yES6BSAU1j6LzAk4pC%2FRhhKi39uggal%2BZ0yjlpQumzr%2FVUZ8FGJm1KAW9szpjJclKV%2FKpx6U1LIHyRkzeEgbPn%2BxV5hb3nJjb23mFH9%2F75yDBjFFIhswHPi6%2B%2FGEaiNOAQ3eDaTK2TOJzpTpGZJiVDfiLKCEu8lGF02v7SfBa8vVN1Uyo69IWSccPa0LP2LqDBDvRsSfNU2wVb2ruLyCIOqoiK6%2FIxB5QhrfaNk06CDwOP1mayfQMIuIf8vOYsrRnYsJRBxjJ51mh3BL5HdE39BRa8smr5BAENF523NMJKNx7cwaOsuqoDFGfq1bnQRmlpzxn5NCzEcrsLqPieXdlSE3jNTsskXzDiptDJBjqkAbT8yJEj%2FBpJm6Z%2FLhNwScuNaz4kLxHDuqE%2BG3QDGi6LL9d4BogMfdpkFUi3sPVO0lnTcZT7sW78uGKYCU6J8u7UX5NDrHgDdGPwU4VX0Nf0w2gMXBvQ76MZOfQeZMcQHt81AiHAaLfxat2FcC8wpvTeDtoCg0g48p%2FEmxMNsQFz7bmcNBjYfGo1IO1dp3XCQWFwRCIEAgIw6mYtHTLepzVsHWEU&X-Amz-Signature=32c1dab9619fd858bbf9ae4b1b933c9aa0d4985b2049d94434c5c4dfe2f45e5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

