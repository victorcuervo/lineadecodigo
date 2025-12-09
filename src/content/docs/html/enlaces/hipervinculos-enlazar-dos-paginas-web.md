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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MZ3IWBI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T080041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCTrQH8jejOCE3FIeQgZJdYYutTvZmneBaSlNLP0Z%2BJAiAgryfvK2bsanJEis7YUF%2FwHzaAY7z5nPux62jLzeGxtSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3KwqLgPH20E2rjMpKtwD1RuFI78bD6QBqU5DacpdEQgXi7I0UWo%2F6MZ6xpPmoYXjeGXT9wHtmehZxF1CKiQTHLisIsQan0bkmsCDe7afJ1HR3eIgoX38X%2FRwRrrnROzzpNGF01HtZcxT3NnRTTwbr30QtDSoKFtrRE2sJwJAlEFjwUFY6VzVcwmhrzX%2B1jPbjpYFFHdCjc3gkxOE5G5KeiJUERzwSGzYKyBMRWj6S8DPT7xW1z4Sisu6jKcWh%2FsWWOIPKbv0kImnk6sYQuUzleKvWsHbEIZqUUbQqKNgIjtSWgchuGwBra55hxORLb6E06k7tNBC0%2Fxr0mTbEjM8sY9k9%2Ff9iRU0d%2F3OO9y6zPA0HjD1lYT0jghW3Gnk43qyKLEUUd%2Bs7lEP3vymF4hT2ZtCKkXdw4xDfTgDIr%2B3pqe61kAK7SjGqk9dWhim11ed14wawiLmsbP7yg8mFQW18DAXTiBJ6JUagaQL6lQonsYLdv2sI95kKYduc6ZxQeKtF15XAwRmCUb4KLoVuxfymAxy6lOnyzeMa3bKIrhHVk2P1mG2H28PZ1MPczGWt61ULkjM9NFHQjOhM6QHZpZ7Qw18B2evdsN%2BQlbxdU34UEjwDejhg%2B3GX0jEXpqCDyXvg6zBGi4qbbXZxhQw3KTfyQY6pgHs4Pmc3haVXaxC0MomM4fc2bg%2B6EGONbiFimTn9z2GIyXoQuks6OdsNenlQG%2FpFIa6W6wqjNGYmz%2FqjKv4kpA2ynW6qsmW4y64e16zDvD3rNGApdXd3fb3WMLNhs%2B0Uudd7JQstk%2Fny8b3f22x9e6z8fLFlqkp2AZ%2FaH3qd6wrSNOLDjU6irSDZwNN1Za9frCl6Fg194XwkQGtEg6mAsipJUkqfEHs&X-Amz-Signature=42f55986bd40dd9643cb0bcddd724adf9ece072de82e5af69d1dfd748e1bcf94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

