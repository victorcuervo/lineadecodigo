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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX4ZYOW4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T221400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDLZhUpMVfGQgGIavb9s2hi1grxNI%2B7qnb0W75pbJnIAiAeO4C1dQxHQRg99jut%2BvlAqk5VcnI%2BqADv7queBrw9OiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwBJ7VCIxFrOWfQTYKtwDdzAvK883mNIu80dwXTriT5McvijB2xbjtt0FvOAAcsNTfYB%2BH%2FNcmN7pS0KoLooHEHK%2BdKlCqMbXE9bwxLNvAhOiqGZZnpUVN52OyBckzGlj4kJxhX2RASNVUi2zMOwXVoKP1zEQnqdobZB1u%2FHHpcayelSABijfotVvaIT8E%2Fjrf55DI4r1Va%2BVLCJR1FGfxGBuSSwWBR3sZ3tXR3sb4tOH9496lPohkFow1v75owlWzLR%2FpzUqkIMRVFpZ2sDOxX3PolRj2eGO6AWy6Ft7iLXqa%2B3bOTg7Vz1cjLYD6uRqf3eog9ba7G8zLidMmWAQ%2BaDyq1VJYu9swd7mTWoCh%2FhsppHYrNhTyf8nEaYmAak7W%2BG%2BprMiZ1cGlPXxKkZdb6%2Fat%2FqWiwgeZCOpKEJav3D3%2F89NAqKe3ufA5miCh%2BHnty15qMMJJae7itk0%2FRwn1%2FuVkN5U4%2FtDgfIwItqmWBQZFVkOSavFdupk60dY1Gx35G0GNuLxv0RlnOTyzqRY9Mz2laJuGgWdYkcSe%2Bey4OpPnJea46Vk1bMl4TVLgme9HCo20R3irRyzZvxe9rfbo4OO42xsMWeqw5ADy2WU0HWsalD6kZelI%2BWvPEc428n4dzo1XOkYibW94P0w6v%2FcyQY6pgHBZWyhusQSgwAoiUeq5%2B2KiCA0oIz4A4iYt8yyIwC3r58xKythxTIm0zHxwuMUtjIklEZ38ADYqQ8DSFFXnQZz%2F3VCe%2FCcM%2FK8gDTb6LPmaq0aqfy6cAOEDTtQJPHJV7A5razypEW7XCQTzdjJDzOsD5045U5zcra1KMxK5w99g6pUhdE4ueOSMge6oBDaTpIgS3Qn1eX0PZAdR%2BMyGRvFWkdvJcWL&X-Amz-Signature=9311c1722b7a83421484f5c0b63a5e703ed41cb4552146f7b3a2e050ef71672f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

