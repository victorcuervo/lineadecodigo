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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D4VF4AW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCjt4jHzzr713dti0IEflvQs4YvrK68vE3GU%2BveAO40RgIgNmOvasYi7VI5Z0aLYTju%2F3yBr9gMHD7JTAmrO6EdEHoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFdB2rsY61oLYzu1aircAx%2F9i7yiGam7iG0F5FrIEEawpyTJISc6nsZirT138cY%2FVSZDfaT329%2B%2FEWtgx7%2FEftvcVmLggvrvrP5w4zgwKe5VkTwksWTnR8iohvvfdROvSiJXzyvL6zMbiYG0eBD3GnuZk4cpdDPsKVb4eO5SfiobYI1Exz5dQyCqJG7eYDkCzrLGRU0FuYCnTcBRNzQZE6wwm7iGwixUtg2QkEJ7iJsRD0C0B9ExS4eNc8DiyptvYKlDq0yembPXWie12PeXmko9690IS7s4V8%2FQq3toIkjdZ40dXld%2FBO6ytEr2gVd1YeKYj25moIwEb1sF7ugZLPcKcXUE2DSA4VSb3fRbIAdcVRwC9bz7Td28FdedRQjHjhB9xzk2VS70gMUz1nw4q8HUBqWMSeT4KT3n5Z6OLqR1hzT0WPM7S7MWIIpR5PEwX7aQlh7ImvSBWdrJz7pbpXWmuKm7yM7s1SBy228AyOXU%2BprqGb6NQcggguulDq8KHOQF0ny6DoKULUt1FM2JQt718P2yD%2FbtKpT8ZIZZ2dTpY6ExNQ33XcapvbnR7NmaIfC5m%2FCU9dzBqSZcHLF2wNbsPEciLbzMHruQ8Yb%2FpCEnmnN%2FivPq%2BNK9VjvjFDIRLfYC93ju4PaFtkC1MPfUw8kGOqUBoXBjqpjdt6482RKnVcAC9qUMzuk9vFIUOW8NwxpVAohhCVfvRKYL7zY49n6EHaxnqfkGEHx4zx98gv7lZSDA0zG9090fwBc7CpvrDm%2FUV%2Flpm1OJ0jYpNbBHXMQTJdi7bsswC3VQvxATv8cAC4Sqgfvtn5QNbXAYik47SP4z6UfAhN%2B%2Fi5aFMJNuKfr4gMQY%2FSh8rqCt1R665jp8pQHbE%2FPs2Xqn&X-Amz-Signature=514787cf7b7a6920d72257c0376e6a8f26ea30c786ea179ccd7f86cfec5a5949&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

