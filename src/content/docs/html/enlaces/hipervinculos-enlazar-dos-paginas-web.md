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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AKEEBYY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T032158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD47x5eS3qMFT2W%2BGDbqJCIljFv6gUKQ2gJk3MvIq7ZrQIhAKA%2BJT5xYobIHDlik%2F4HOkQTKCGxbz1hVxpI4j3CeQVZKv8DCGsQABoMNjM3NDIzMTgzODA1IgwzwtV74RYlkq%2Fa4SYq3AMYaOzXadJ2TDWyp8RrdkmBNMedYCU3u05FJt495n%2FlC%2FclB%2FVxEaqzNrtnW%2FePfnC3UejOxhU3AoUaCgiEtItyMxkY1TIpKdtAsOZ3%2FSjEWd0eWygSKMqnzXKTAI4YDhfvoJQwpq4W85FxW1l1ETylPPf%2BJmpxruNknfy%2B7eJiOTdWhTl1JDZ6C3Mnr1ucu9zKETJezVRy8i%2BjZ8xwb%2BQsarJRzlWXe%2F3TxGeRKyqMySFys%2FyE3%2BAgMTsg8xkcSdiV6izwBohpVCm99YJtejcma%2BqLATq8IarJmqv5PYqZY9T1c3t%2B05X5LNdTWGPomcWEcduaIV7jwbM2YLIHC7CRx0cz3uehiCVtBtCZfraaSGvrkCZYyRKrncarSuZfwgX%2F4gK7zBQZKEIbWy2rxRjuHt1EQwruT8ZmpZoFCLtYttUDySxYsV0yrRxmx%2BxqLACp45N6v6wGQo2eWV6Sm%2BVBu4R89wecZkRQU4lQ80a3fzHnT2tTJMEwWM5amVudjRaxaILJXD4t8EM2bsFBg33fSnO7swBJP4IzCzZDzyzH%2BeelkW2KXDCD7WJPbB%2FgEKn7wswPWGUzg2P04XzFSOkJgKG8jGK1SIfXwVs1FCmsyIS6BZ2rWg%2B9TrE%2BFjDnp87JBjqkAcrnIAURPha5eVhJBbTG9h03Krbe7P9TSCJ9Q3g4SfyolsGTQTrWrSInVpVAhipVF2E2ulIu5HglhzSQ3n1eek70RPkBuDdzo9FRdduhFa5zDktrNtlJ%2B1HRiF7rMsBj7jnQT%2BOX82QIGj99WydRzVUL039FJEBy7jdgl6NW%2BPhRx9GUECIIMy4Jmsb3SzMLji9Y6GdWIc2zmqiz6%2F13LzTg%2BwE%2B&X-Amz-Signature=5ee2c25f09414272dfd3fed4b7300799412398d5832c447cbcb96800992cc17e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

