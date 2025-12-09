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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ266XD6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T065718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyquSyk2glnnAsOMTx%2F6aESk%2FIUQc9b9dBoTkh8M99YQIgKeoCp9NOM0YcqMcUsFy32e20iBavTfjLBcYrdKHlRHsqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGan0IPwSEdst42BWCrcA6jCKfAJvjJOB9Kwynq3aRO9OL0RrGyX%2FFYpE4%2BuE1ikDJwBWydQkUczzklTINaDVV9urQBmDMUtBOAvgpocMss8%2F85jSC8BugRdgpAAUqtJwGqegfel3DXfGA0xNJcd73F2lAXkK0KC86hacrH7G8yBOyQMjAz1YeE%2BrGxswZczf0EY1whzEKmmVWB9pLGJHUFQa4nQC%2FLx937IKucIFBHBvZuxoqAixH9uwmyq8cgByD7SAHhZEHzOrooOlPGzWBjxgO5GL6IdTKNKSPGj7LvKtdDmzEPqXCw0k1hhZ2q3AoJHw5etpa9tznpWDwv3EEswGTeScDmDChaJRwW4Gm9LZGnxzIB7VRtKaDqlqtPWF8MI5Kc8lCiiCOzwT%2FuEWAvJvEGPQATl9suGYOOiDGQp3d%2BTpRY5Wa5QvLhPPjFmNSxmQLSuqpXnAyvByDVg6sQstXAwVt5pQF6U2eT6g1c4X3YYtwDMNLWguKHB7LNLWixvyXEXaqhg0Y4YZ4Kx5NXEA%2BXnJJYhBTIMUgUM9aOouHPlu1r55b2at4k0mXbMHa46n6gZm%2B4FDH%2BgOTpNv%2BvI7MJaEwyYuQKq08Q0EQk93unnSPxDrf5cC12R%2B%2BNFVn4A2dUt3xUrmFCMMJiH38kGOqUBGKjkWm9B8vu2xo2yF6qlcZ5H%2BvICy1PeZNVt7yfWJO6rb7zU0kBWn6cjE0Uqoc%2F4qXhDV2ZGnNOVRChBDPDSUAjvxkC2xRveCuV4J1zPEX%2B9Dc8fVrQzNkuIKeliAk8KufHWdxAc26ZzdzrY1%2BE8yv%2FfR0pFekLo5yxkosbyLgHXwGfPPJ8UHkTwiPbSO%2Bh31ISWespG2kf3M2eBBQMuwF2GgHK2&X-Amz-Signature=7b05d77bbf414d98ea8b62dc3e3e4650b8a4f0dde709474bb3e24bbae1207fef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

