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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645BZ6MDE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T161648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCgz0LKlUMkcNuym6Af4xkjiZSsb87fEOtmq%2F16yHLtAiEA%2F8KImTmk5Hd42I0xSO6UnMsTsgSTsd3ytN%2FiRYwWxaUqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhfcNlbPjSeu8MDXyrcA8SS83G1Ag6NwtZk33lgL1BDU59zFIu%2F4DBKnUa7Gh30VtHGyG8fSTenrsJ0UF9PvlC7Iwp9NpKVLmtDlY5D3owVOFXsW7oSU9IhE7vsB2omGCOz3wlYFy%2FyIV4qXNBtFxQQJZwiitUGnIe5iYSI9Mk5NiCzHs94Uzzv4L8JPQ0U51nPt1OZYQyV4iyyNcT0gZqH8UoAb4qHFEQ0Dc2gOQb4zyh%2FVxUOkzgnPYQvgj60dlGMR5D%2F9WNmlcODzK0eVo%2F6Qx3gMwJGqAxYAM2b0IF%2BPqa1Kgo32vUw5efkfy1Kd6M1oWicUFte0ub99xwxYSDXBIyRPwTTIpaFc66J2ET9KD%2BYOiFLgTBxZgemjHyo6QY48u5%2Blo1nsVpQ1gN%2F3lINxKJXvzTJpJWXiJGPnSjHLk2%2FMsz2fY%2FppAbxy2KFmiheFLqu%2BaBFIAHBN3PfJVZ7Iy%2F0pyH9BQOJRamMT5A6UQ53BtraNjHo1WOOn7MT7GJA1S7KYqtmvgKyY%2F6mRK8l68SZi%2FFty0O%2FQQBSE7LamfSfsdASyVzn6A1O4JzFaz9J9GmVZVOu6asYqJ8RUotmOpNcS%2BklIBDr8M0BaUxX00fo5NsFIOVpZfD4yW8F0dszOw9hpvVM8HnbMNG81skGOqUBYWOyoBW5tPwVcTat6dj27P6KwqlR9exTB35YL0qq5aPd%2BtutBl5%2FmB8n%2ByFuQiBU8FFJEMkvPiUy7xDjcwQ6iHHetcTmXGi8VpG66K4ejaPuTPxsXvDDiyWwOW4hYadyGsAvd1fVzDcGZaFnyV8en%2Bx15YpX1wT%2BTRPM945y9KlnBPet%2B9Cvu2nlidbnOcbUnc90fB9YIw6hox2ZVJ5O5AiMHRMk&X-Amz-Signature=ab5224d239e8665b6f0a0c73627ecffe22c1fd56df2e340ac32b86c745e8d7d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

