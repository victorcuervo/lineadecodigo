---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466775WSRUM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIFjNdrlU9VrnuvwJ%2BqNXE%2FANJNFpvEFLgfuEmyvhtD4DAiEA0WD37OO%2BrtaeluM5jn%2BKDY0TLRmPt5Xb8Y5F8kNc9Dcq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDPUFh0xkJrShIQiUMyrcA3e11dQ0hK9chvEfQHhDe%2Bab6%2BMFSYqe8kqG%2B2e1WXOoooyYpqGKqwoVTTLHwwmHZHf0lruRQTepm448%2FQpJnNWE4%2BhqMlSqG0MBNwDMOGN98WnqRuawWtZ03JkeBiw3UQRR9f%2BBKwMBtaX7rN%2B3RxUdZyRQjzkYLkOkFI3S88eWS%2FJIGUowhb9ES88VedJrx0C5CVjIyDZVWTLMW3gw3W7ogG%2FOhScqpv74cdtqWmc0MdlJwOSstQZPPFCcbAi0a%2FoGZwq%2BWHXbbzFIs9KRyQ97S6ePLiLUiESd3NOTzluK1ulE9LHm0FyDG%2FtkPB%2B3TsEkzX4dRoFIPATXBAaUfnxV0MoyGzDwu4%2BBsN1dKtwTgqLWL95hi42643VWSnZvsQLpwXGPwkRRuZrfTA2fwmkjjEkj%2BxwC2zE8GZ6s6C0K2gSlEpEe69iluWF2YysJAcPuSCyAQhOg3IKTcz5S%2B6tfNBsSzlRsg3Fs%2FIEO5ni9h2pq0W%2FWDfXS5uDoTvh0WPI5Ad%2FVFQ1nP8b%2FHgCSmjESUDHTZ30PGBBtiZ4NOuxL8q7A%2FR2jq4%2FjMkoxOqtsDFmuqPHbb%2BwIGWoqzBzCeHRKaIhUMYXDiOOhEPudbhBBQtCcy0HN0xFLNg84MKPLxMkGOqUBLTn%2BQBF9lVqeh0A4%2FBSg1EIDR0BMNIs0BahfdJlDDCd2p9i0xS9vqKUjWMzj0FJRuPtxys6wp6mbozksbIp6tOKLFAqLy05A%2FQAlyUk3ihAVBxsGJx8XkrCC1HnUVyDKUWn1%2BcgdJZtagLR%2BBQI%2BvCV6qod4mGoaZ3UQaEajy61mlbbcL0hsKVb433h3p5iEB2VbGAy1W8iAPpDFldRkUE7IMPYq&X-Amz-Signature=08e9de21df06f2bea9bb461aaaab4a63f368810feaf3ef039aa97b3377543576&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

