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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLOXF4ZI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDOspl9ZVfN5eEt0Sw2FIzQjF0SYoyuOz07MXKVBAgLtQIhAMTd4u8D4YG8zVB0WDHN4Ww4oYJ%2F4YSxPMhAOIijO1BWKv8DCEgQABoMNjM3NDIzMTgzODA1IgyoVA123cCZ7VvEBLQq3AN0b4Voh7zBhjG6Fr%2Bc5PNwDrlKwVfhGRvYjMsS6F5NVY06AclS88NUX0s8UDHkws2dbtY4goJMc%2BZJ4gmiv0poi%2B76TRawe1vXswu4Ta9dKakYrneqj%2F9Jfrh2D3k16ZLCgZnNnfXPn4hs2X4hatDDDApaI3nmSiCncvDZbr9KbCA3QlgCOSE%2FBTD7ooMx9xIeirF29UvUXfz0h3JP2E8kKDEcOgOm5Ji4gs06rPOXIwGVTR33fFGIvrohYsj2qDINsIFBbJIMyYTrXF%2BCix9BBJ83%2FngisXkQIoFDIJQB6nPYzgBJDpaoKnTKtWdDPlE58LAS9zpYHS7jc6luQaAa0Axq8UznObLZjzjM87ZSLyVKgfAIhzjnbkdH4BGZsodTY6rADu132wiKgEw05sgTrQKZHeku9I2IpnJuvt5OmUaFur9IE9kHNxhT%2By7hk4OofihHN5OnZT%2FX%2FsH3XoHCqa6XOg0y8XFM2saWkM4e0GzATmjQmSo8FqB6WNDDqOjCJb5y2%2Faqs3%2F7zHKeNhb5g%2F%2BDSluddZLH9O5GeR9tzC6CFTG0w6jq5NiISqge2YBPz2YNBwDOeu1rzDrTkI3Ju8L5TzQsyf61CKRgVIHlwGO8QWjducKkAqwhDTD%2FvsbJBjqkAbhYw75LsuOfhpLhT3HQJnvMgJzDwuuyxUjJM7NTkhoGpWbL3gMJzKCkOL3vIGGkfp2AtPXjIjIlPZsv2vywDplANUybMI2cHw40EFaRVwjb2xZqbXGwWX5n7O04UnkvducND8b%2B6HJNqF1qxf3cApM4q1MdX5ZNsJQ913PqasoyErhXdOaDlcREMbDMXYsJPQJNyGp4UL5I7iJeILJy1MYqte5e&X-Amz-Signature=ffb9bf5d130a72197761822ab637cbfd2f2f4ce8928a7b1f1b60d36910f5173e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

