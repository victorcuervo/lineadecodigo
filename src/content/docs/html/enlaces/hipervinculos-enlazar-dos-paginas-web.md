---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NBLIMBI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T203018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQ9FzFwR3NK9jWomuo7nswdfMEe3wPQN87D%2ByfaB%2FhgAiBjoS7gB%2F8yGYMDPmYbvTG2ZbrdAdyLVKjQMuevQWTX0SqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BEH6DxHFlSUHEj3vKtwDg4r3QT7XOZFf0zYVlu%2FtdNT3YcnZoAU1FpVSNY1buFYLwhrWUNyG%2ByXWXgBIzrn5iq%2F2SA03Fgq260ifKa4hH55XVf0fM0RmZMWV6PJNpz%2Bz9N6GBz5KZqXvuiIcu4qm57kj51FLulJXk6FjeSDJV6CU3EJZzL02IrFV1UkvtGyyrIPlJXdkyX5CF5HNbiPtdK7RHlo0pIJVqvg1fVMSu0rM0r4RtH3Dz1%2FB7cqGZ6ZsfJd%2BuJriJco1%2BirTOh0gqtZXMptmH26pGT8QpPIw5Oontg6ypNAMch%2BZ1X6%2FsLyg3pzriTNmmZeQQ5ZhCEOsDjQMoxI5w1IWfa%2BLA%2BQ6YiKJoRaDRFMW2CUOrFgq%2BiK0%2BoIS3z1DqsBcBQsETHiiKNMyCmQDSHfo38pGK3clPcUK7QRkRLo%2BzKAOOrXy%2BuHG%2BWLVdg4Vhzl9beb3RY9tfUWrI5xVh9ckQPumB2yDp8n2DIHdIhOcX1lFyVzoRjb4APzbeugEE72Y5llvmcMagXS8HL0M%2BScY%2FJHTp2BrbHXBK8DilmbwNHEQXQzHNZAhs9wZQf4qCtxUbQ4OnIiLFjeamapeDPCiWQmRrPRDsxYS3HXy0o6OFdI0nMEGAKlhxbMtLvcEBUNmF%2Bcwj%2F%2FhyQY6pgGEUjdxqK7YX4hR1Z%2BVTEeUVg2MaE7nXh0m8FB1qtuBsgbPXTp3MzYMwaNTY1jz33%2F6HzHQTc0U7wtAZ9uFyiw3qxDiYlb2LEQJ2H8LGtYvQdLia4xcm47SJFmCzYVU%2F69AosbjwChkCTaFS0q%2FnZ2Bz035ZU5p975vN1LPFQTyHZ9qTvxW3hplbL3orxCUqcFY40H%2FSiXK%2BM9PKWimZJ%2FIAsOhOI7T&X-Amz-Signature=02f9e6eacf3db4249a5824296c2446bfd82d5902bf51fedd877e8bc510e16bfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

