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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LIXBNEW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T041059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDlkGFRIX3%2F%2BImnfArQLGH%2B%2B6IjxxlGuhQXDNPGqLTB3AiB7zDaMgEYQbIzkSSh5QuntgMhSnRu1IW20E4J8pex3pyqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu8LSFKKpe1HOCgtRKtwD6Ucb3RVysbtN3Y2gx%2BoBHaBtIkuey58b4m7WLwiVQViuzADpsPZQ5HZerTsBvPJBhdSVDg8N5N2z%2BEBymdO9pS%2FG9f2byxxL%2FvsfuzDRbk7BNwpPz%2FXRSdMBoo1PWgbCW1h1XpLPNJxekwoSl4purCycNWXXPq7kCWgSEi48VHu%2BhbTJVO3W7nxQSHi81hwzvM%2B%2BSo5ZMFsVCTdF9%2FCxPb5%2BhHQeJPsVinnqiElNI0hIdi9tY%2Bk5RJUcevzFv7SyXhnrlQBo0Y5vt6nnIYvRMH%2FZfjYAhRHzvYofy55YUHeDJi0SxoYbIeTfFFLBvc4nuJYRCRy0Y9jFz70Dh62T2VoJRyx6yJYyUR0R6qt5yFH0aJ2ebt1xjS90dQC%2BMrUNWBQRYe6R%2FFi4GpzY38La%2Br%2B7lRyJYC3BHmV8xbrWAwuxRzv3mTTXIt9GkSuGHR5HQGYLmz2O%2Fi2Ftfzw8%2FPPnJTWSu%2F8LwqJqHa1D9lVYdqF7MbUi5s3IjJ6BMPj6fueLrDoVIikF6NTm%2BH%2F0Mv6K5ycWauhhDZruvZEiHajceSZffRW0ql%2FzPhoo2QjoxJysbeHUJ%2BCoG06B%2BPcr7yWCxj59qz%2Fw36XKdxBuvDHS4GAysDPmANEUFvkS1Aw863eyQY6pgGAJDRhrUohSDkbMeH0bo5jLPJUY6w0D63UJnTLc6bkKyejM1cboy5OeDyF9Pszh4twhiqeVy6mVuyYIXQc%2BZVCPPkD6YS6XCwK5%2FEXG9Lm9svUOsiVPXBK5NIUuZt4cSG2rHg8ZU41bJPEi56F493eJuge6YmIQHzXwnYj1sl8JiKzaFZ4v1GsXDery9%2F8n6u8a%2BTkvM%2B9I2tHCJryHrSo2lTcVlku&X-Amz-Signature=d84558511a34d748beb7d9f6aabf2ef271eb0691c579e96c47151a149a3cb6f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

