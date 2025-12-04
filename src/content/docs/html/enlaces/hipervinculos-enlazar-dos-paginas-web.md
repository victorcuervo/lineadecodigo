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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PNXYK2S%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T091235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIDBJ5vXlrV5F0H3cEWxtnOCuzSvaEHGK57RJfMOd0grfAiBFBYC2%2BaoedEnxibU6tMABcTzhfTSYewRS4RjIVpVRWCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMhDH%2Fc8JbUM7Nfi1aKtwDgJ8j4LlxCUrU2jCJe8zme%2Fu0Z4OtbPhAd2mdaOLy3oMkeokzF%2BrCAhvh7aQJwtX0XwuTprp%2Bwa3vYoLxk7vKxKd0B4X5AHjZ%2F4c%2F1giVMwxlOgyBxv19v2irhT6Ar465acRC4zIxaq54ofAsxDN1Eiy2bklQhpbtgWw%2FOb71YqxKZaC7f37YZOX%2BPMAzGn9C1hlL00KTisWx9z2uBNOm5H97OrpDlfA%2FUIkCSF%2BRJ0opRXlpfX%2FyPTgAP5qt92kgfJKymThOslD5sjzWIHL6ytMLNIh79d4vW0QNKez6bYzM6PXA8IZqsxCSvDlEt9Iov3nD92Ua2z8LNVcb0aLgs00szbAzH3Rq5R148beTsNN9dqeMGNAGjL%2FCG3Z3iz1qRlrdqiXVhaeE7auhWRC4yfja0V1Uw7cufES7fR1%2F4ooZWs3odkqW5jeNa%2FK37nHYAqhrC0qo7DKRHUrpqnlWhd1Yjy1vcXZCNFlxtU3WWERRN2j9MBqlmdKhEN9pQ7V2zr297%2FD4G7Z14VsEo8kt%2FQIA9OD5TO8BFToNfxVeI6KUILZm8%2FU7cZwXtfVowlbUgav8j2qsX8WhQ1K7%2BvVEs3lCDNmfYF3QKubJvBXmHFI3gPLolYp3%2FpDo85owzoXFyQY6pgHRnF%2Bo2ZuvLgdeFRTAoUtYko%2F4d4dGlw1Yd7rdf8eM%2F3yZwieMizz%2FUyiDJS9tfCxwDo%2FiPbfypcArA11Nu7qVXcURZRyZU5Qa%2B9%2BoEy6hFLUKes8%2FVgngG7KrHEC4TFaS4ueBigB1l0jkAMekTDtDeHtrDbPuw5EYG%2FzvacL0JhoAQAhlkSY7awZjqxmpIma%2BKL2m8zcOuQ6Mr80yFgNyxZSjvTB5&X-Amz-Signature=aa194159f06c6c64eec13e836a31de37fa9dee9acf191d2f44064e96bc5fc5e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

