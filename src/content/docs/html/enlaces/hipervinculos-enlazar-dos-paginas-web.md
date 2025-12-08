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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PLWP4GX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T005040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCzvJ2tNfJRPbaS0CZjv6DkItDE3fMuDOAhHfas0SWqAiBG7mf0yDrEeYsYcALg0286D2bSwhVqzXgRZjqZ%2Fdzd9SqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwQRTxcHXWSEnVMhNKtwDSwpcQ95TRMvq2avcqHAVHF3VcaKkvI8AvTVDyqZTfAVKJHlH%2Fjql%2BScCxDzc2fj3BM6MSJs9EbTB1nL7lLcPSHFhZGDGqw%2B8GMBIuqN23VfOMrh%2BwKnlxN9TiBy96xDgDfdqLIawbJI8THWtHOiudFpLnc7M7ulXI41yMbNFZUiV8e3aRPwlx%2B9MRbhULG6Gb4PVT7QQszsOCSA%2Fuwz6EOk1mdo86WkzuLHWSYyx5Qgrlek1vKbEkIivzgEeXc7MU5vHlsD4vgJE7nEhdV4Y1mhVJyekoInPne%2BebwouL7RsNzBNtGhSk2uPOgkuYkrMua3E53%2BtKhrEULdlbpIkOjjvLUnd9YjV8T5WmPoJATH0nHbArFP31wz6F3IY0TbLArbxcbgj7oXNOzMdzNi3MtN8IwTvvmXK7kaL5tLZBTavS0wVaqMjCcI2BFv%2Bv2qm%2F2w%2BmEYUM0gZgP1yG%2FvdXVCuFtRdnhoy0hCpzYBxWzhlGMXlGhZVTPmcwyWVG72zpMrfRbWdEZ2NgW8CQgpglFmS8Rp6M%2FJ3SoyvhHMTabPs9fFIOXSi4V6uD2P%2BLugRXCXB0ie9cyDcUglIoKyI1asXMvCTgB9TvizcQdesC70cySDtTFEAUgH%2Fqq4wpqHYyQY6pgEgRpd%2BZEvXie5Fp%2FhRnqigGqzdUZe0Xakr2x6NUCE5Lk9U%2FLwix6wzSbuAc6NouPlvJ8JGGl%2Bb4kx6InDU91ibpCMqEGaaVU8rk8USptmE1FxDQVsoQ3BcGgSLY1L02V8%2FqoXyUpWiDhzAqcVd05jCrpVPHec7zD81tt3a20DRzDWKebLNEXybYJE%2FZ9PfnjeGlHUW9slS0r2QpGEg%2FGPmzKbr%2FWvw&X-Amz-Signature=884183425f3cf446830828888b59519dc5d5ca27aa5aabcd7bd80b2ec73f7e73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

