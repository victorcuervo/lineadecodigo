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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNN3IOPH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY11RFewv4Ya8aYjwSKCfoM8jUbrb3vYa3L73gTDLRJgIgIoF3cNzwkipbPnKgKh5tOhp1OxPaWu8bITel%2BwuqXgwqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVFzTknz2e6xHK7dSrcA6SZ2PjBf%2FbErxaRfyjxg0KRLRPOPz4zSPf%2BTgt%2FMo1dZQ2RMFG1Y5ks7R6MstSasJV%2FF3aqcvQbrXFehHxsXFq9ILxP98YNN%2BrzsF%2F58ilNXbcbDTvEe464V2ulzQB8jdDDss8GTmWTS89bEAUBS6Me0ySvcizgTR386tWoh0Qx4cn1l%2FvWfdOgZ7THqBZ2oMiJNgKq0edIJFULxe2%2ByT1R%2F6kWvtZg7eZLjwsZ4enpnXo7UMEl9dVp%2B21LXv6vyfRG9aR%2BLmjIrsxfz%2FiQYQDW0QAmgObdwsp%2FusFHPlhR%2Bm4Z33KQGzLzGStEuWiEzUdzzMAZAhoY7Yw4GcolZHWlL0j2cewUBUy0zI%2FzGadfXvGN0wQj0DWpggNZqWxKm%2B55sWUbauhM%2BYUyFQkGpIjW9odjlWypBcNEqi%2BMQvUPKKyQOjE7D2rZOrtrl4SqwNMV83NSlo8K%2F%2FMou7%2B%2Fa%2Bn8hJwrEqhjDzV06%2FRAaMEMoN6BoYfDWpKlVncjiW2SFIWBlWJw%2B2b3BP%2FuuIP4yORrMY8%2Bo9btSJEZXGFIbifEqVnhL05vUNc9tyfxE5vfs8QLmf18vTBxFD%2BOVKUF37heAwSgrdNFBy%2Bsy99kmkBi1MIsoczSr2RD87A9MOTB28kGOqUBqrvpUZ9k1yINjOJ%2B7BkhD8KEskhhSll4k5LqOFEMghq3MfOZ%2F%2FEIui3zI0irV7JD8QneK4Bo6rkCNA7tpUrDfsESOrh%2BNHdwnT%2FD%2BaOsubuhnG2kXuQKfo9ej0I73x%2FtneMhDkZ1XcyJESRRjaD7wYdNUGn4c6vJWZK2fgp8Pdr9SgI5IYSCV7FPb8xiVa0kWjnELnefPjS426FUcqb2PvpqARVp&X-Amz-Signature=ff6b7096a71aca182dff02934ba98900a2b056c1a88c7d5bcb3ae77255fcfe0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

