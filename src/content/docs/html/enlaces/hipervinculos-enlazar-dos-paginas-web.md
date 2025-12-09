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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTGYRHSO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T061222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGglxHo8zE98AUy21Atymut3eFJcw7T%2B6FgPFsIE9YkbAiA92jXmXyfYtYM4pSHQfJBk0J1IHUS3Wg6KbDm8jr4lDSqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtM2Q8HjCQATq9JubKtwDjUlU2hdfYcg90d3m4D7mfIve9xO%2F1A1tNE6IyuyDcjuS4zg%2FEJCObZGumKGrxA89IgYeWsxDTAPIZOfHetjk%2B3awp3WYUo1GFJWJvP%2BJYjSFKhwgBYV0I4HvoncF9tVW%2BINOAOjNFBOw1K7Mu8KzgQHeL4YMrQ%2BojP1lX7S7Q7zFykZQW%2FesadfkciIwHO38%2FOKNq9Oo2v6Q2IMoZ7CYImjgVeu8DAi7XMLQ0xRi4f1W7Zbxi0LkGnbcjDqdOuvt5VByqv%2B2GXDQyoju0hhah0sNVyLayJmNoGeL3edVWnBTwZMF7CC5za6SV8ZpYpQdWH99dNIcJkhtu9MUujo%2F5%2F12%2BLxWpCtok17pSCvYTlUjuEGxeyy8POF4YQRPZSdDXKgOaEvoiQ6WFyLC0zWuzouPW6HFTfVeW6bYlsrjw0QAPWu5aFqvqvgDowFg0%2FaX0PpiqV93VcOnaPY6SIRxK5pWBzzyfIqGjAGfOMDgz8v28zLYP%2BU%2FfP1klJYmb26Ud7Qi8okn%2Btdntced9IGXUhcvW4uzXc5UoBPcqj0G6rwQFxTuUzUVa3L%2BFK5Y2l5mRfcUBTiXkm3k1xmQa73R0r%2BXljrwn3Kt%2BGlY2O0Tvm4lC2ruLyk0Ilgf120w4uXeyQY6pgF%2FMNFO%2BgVHV6rxTmzCcm8wKBdFL1AgsO6RK4nDwdegdRu%2Ba8q%2Buc3Hwn6C8VHBKxOX%2BjIr0Ko3VdLVKupZ61zaWgtQ9aMrZKU9wunrrt8iuDnWvhi15ecBRYn2XA6CBxEs9TwvLXspw9mrBUwuzeyBiclM4wNu1XkthOF8%2BigfkfJ6uKhy1r2nqzry%2F9ZcdMMp14r2l4wiFWjuLciM5StAYx3FNFw3&X-Amz-Signature=ccf759eb3b46cd1afb8b3c964a705acc4bcfb40c1173001a9c7acffa8fe21939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

