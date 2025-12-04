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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AWV5H57%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDQJGXkuT1BpUzjP9nz%2Fd4XsIJrzHNR6LUucBHVop5B6wIgGjpGx1SkVBOvgiGrN8%2BUAz1gUUF6JkKePFrE%2FTHGEhkq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDFX6ZN93quZkADQyDyrcA6gRICJzb%2F0kiwJI%2BINzrJkzYobx8u%2BhVO3joqz50tX0rEg9klz%2Fgcjh0qDk1CzsqDK4k9mCxXq20VGbQVhJUwjMh%2F%2F4P66oDoUW3Bilg1kKLZOmFiqloaY5VNsoF1%2B25Zc0eaEgjfvUwtYYXYyAX9WjRoXPnux9d8gB%2FPu82EaWz08wSF9keRKFJTFKdyXxEiIh%2BPrame8cFMxjzsGXX6Q0mo%2FSKxiahhvVKZ9CflyRPtO4sGckC5CynsO%2BHbFlb%2FF%2BeUmcXVMNiZ57W0qc0QJnbvG96g0jxJ727haxokhEIYTeD9%2Fddqdf4VgxPIcnI5I9bsu4fVU1DOfA%2F1nVZtlRjhDft5hGeAG3FYHU8MGeXqfBanXUGdcFWBFZn0B8nkHh3CZw9y77syEGWeJKXOyQSPyZS1bw1EPkCl%2FO67NW4Ozj0qrs4X9asebqdACtIY8wIEiMrTJVXuzM56YaLAiIQYel%2BwiGtvQAkuIWmMxS8pX83CdlLgnN1DX8N%2BJf%2FBlJNV9%2F%2Bm33VbL7sOo8pWYNKlTaobgNZvvggjUHI0FeyjZwv3kQWmf9rRIdbVQlosnSx2Mn6EPmN4I8nLypCE4ElPBHixSKyscSyTZAv7Rws98TMCbfrcGbRqvWMK%2BRxMkGOqUBkn7Kxj9pz77dqDC0lzPXgjgTJUoaJT4ssLKKxKj7eWULJtqRaWewGpoapdVgXml0EJNBqOP1kV7KighjcNriAWcQGJmrAA3zrhlW4CsdVk8A%2B898jyKgOCKYdVfpz%2FA0dgY8osnU88afc1zE%2FIVSzvMneEbNJei55MGNBZUz1MAthVhnqqU8yeERqXfBxc%2BXuBhneVR8ZS%2Fb1wSKZ8BCi%2FqvrWGO&X-Amz-Signature=5ea378e6c56736058ffe7a86b009589f25c2d0891144be3f861962eacc1f0d57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

