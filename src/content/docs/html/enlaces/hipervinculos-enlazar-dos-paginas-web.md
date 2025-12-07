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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU4NSC2D%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T173222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXEtyC0SZMDOCb6JWyl4r5zJwC75YjHpSCmk3GlvqpVgIhAL%2FoetSPAp4Ct9ILPOmOEwhq0Dos4upv9tpoYcTGivLgKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZhJXjQO%2Fb0P2jcTAq3APJy8s3hQoSfh7NHutRTaUbz3G4Vtx3yzLh7lI6Shp5MRRHxZJwOROrSDSmmfNn%2FA8fBPXo4o2FF0DjEro8PA0GBeZdcrgnZuRAoYWcCFGGE7DhvNKgbiHxjDyZS2NN64TtsC87QJl0ecqUaZJ%2BKXPsx8UHZ4%2FdnhzC4si3Byx%2FJfVrT4vpHKPY3yYgzKA0KtVxwQVTi12Ij7Kmrqo8tgXkKXvKKW66bUq85%2FUWq5%2Fm6pYjholv%2FZ5tC922DSUAWVPGSTBkCPdK8H67clijG8NZ9gwbav%2FW62dRAHUGMD6fNOJHszfqpNCFCcEx7%2BEXxVznCCcTxnkWa9zRe0to1RenL4xV3fsgaMoxFhePhmMRnkPnpi6yjPiLsp4%2FiaGheFPlOuZ7R7JyhMuXKgg8qni36M6HDhgig8w5a7unVU%2FZyd0HUmWZRO5zicVL1DP%2FyW7Y%2FYexxgYx8N%2FwlywIgLvKMUlhuySaHgcWFWoGMCM0tLXEaUKfGtR8pNjIYbSzAEsQJULRdJ%2BcuVVRLmxg%2B3%2FHsJGLRmfNnf3LCij9KCqlJ3ZzKYGB5A3ryu%2BxHf9Re%2BLaPRoifNZZd%2BD3jq6NY5NtJDK1UUXRl84AoACXr6Tz4Ou8CKT7KsOL55Mw7zDwvtbJBjqkARTEb0vuvfwYrJ%2F7OZvamYv9EDHkC3avpcVJzYnXXzClmwk2zUsfoQx4NhwsHujX7xEzWJrsEBagjeOVFoLGXSIX9SGyj5quYKJ8AJPW%2F00XfK5fcdj4%2FnY9uStQsrVocghzUj56munq2WeP3uALQUwSCkQ5dQPuIEjBOqv4oDQ05xaUYHFs66J1jJ2BAe3Cs8JIxltVNRYcdlol4TeNFxcPn9qo&X-Amz-Signature=1cf4906b456c17620e67dae39702f251a1a1aee0a3b233a7eb4f85b986ec38f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

