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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUEGTVUD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T195804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDyDQgJsX0jBS362hxt0sV247ftiWLF%2Bqxkd7PrEx3k8AiBRqeBTLmjCA%2FuTg4Qrs47wbxDv9maAtDwhv24Bvo4KqCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOpqYAtXZxko0zLctKtwDRPeQsM7rxotZYJoA1CSsZ%2Blw3Cwm7EnQ9Va7ARaouat2RmoX081gjkC9LUbxKnrB8uYPvkNxxxouNCMIbGSjsvgw0DSwxURbi9ZscpFGlmGwTQskhJTOJ4l8ikozkJs4ZCFy8ZmJjPzgSx2isVVJm4UdIO60frdR52DPDXZMKqWADobAoOOJNPpk0e5OZZzBpWHmnL%2B1tSwcUyZP5YWDX3B%2BpVLdXIiorM7Jt3rUSbhg1APBwknKkkevl8tRjj%2FndmsMRJDRyWeGP4nJ0irfIl4NTWG74I0awDggOJs%2BJdCMH49UzEbCY5s2msWWuu2UUumoIlr6UQnMUmT3nxFXz87t%2BAV3oEMBGM24YV8TRWO2RdUUzKNXnghqYhFNVy8UNQhTINmIef4CSViujefYeQQRClBVshKQvG3IqOADOKqlyZaGCUO7QLfSDLrQTslv7plDxhts4A13fYFSUHjfvf9ObBnnd%2Bd14qa%2Foa%2BLTDmPedd%2BbU5kI5eSy2lbHMJdjYYNBwn3yMk1R0yB8hTZzyePsnMxAnDCBskQeCL9OFxcqCREtrZW2Xf%2FoqvWDXqRGIrCg52FOi6pMMYNPGUbMv354BTyBioVsD5m9XdqzScqv4yI%2FNZ%2Bxucm7PQwwLTcyQY6pgEaU22JAKofgKvETxMxOdT5M%2F2e9PHzESc0R%2BPuH7TsJqzatG3uUVJFaAcaNrM8kRb65oJS%2F1TYrbb4r2thoh%2FT%2B%2Brk5Hj4JmAZUjpWZqC3f48QmD1FlZM0f%2FfqJOKuIs1Cd3%2BZIdjyWRxg9oDU1Ppi5LqZ7XkvyhWQWaqn%2F4f2c6bLd%2FFFv87aYaXZS9dUEEONGBznaPtt4Wz1uJRR%2Bo9Q6ZckBhFR&X-Amz-Signature=1711df35372b37742b30eef3f8b54828bbf00c39c5a320807056f10153d9ec4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

