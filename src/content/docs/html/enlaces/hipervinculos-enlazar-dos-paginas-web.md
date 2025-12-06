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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQVX5LD6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T185859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGBWi1UW3Q9FfrpfPNeKhj969QPpSYM5k3rnSYVCW%2BVVAiBxdDp%2Bje37uV8cP5pQfE9UxPseZP4VOCySkX%2FWR6yIwSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMs%2FegwvBTPYvhYnG2KtwDYpLyktCyPboVFXImII8UTaPyR1pkbxN2lg%2FgzeJSaKBtar%2BTydURQ0QO92r8jfSgaEsj0SbCLa%2FZb9FZckI8lF8bn8XRBqfNUhR9gFfEL%2FuG1oxU5R894F57LbmnVqyrKAy4x61p%2Bm%2FjEPf9cpSgvBvp7jnMRoiJ5Ogzn4A4fZ3eKBA5JCtQkxw6kQQSNCaU8%2F3y%2B6N%2FWGjOLkaQ9mB9gKinPGYKn4nC1JYsdN06zRBg5S50LwHz0HUoLJ8pq%2Bw1hQm28eOwuyZZL5TSk83QtSaRiCm9zOwXAULC3YStiBEwJOydCB9UeYjnVdJrsGJkb%2BM4IdDOHYum4Z8U7GgXfe6rXIC0UMqwbYiN9Jjl6YPzLGACqIiN03bOZBlN%2Fr6dtVGELFdUxjcWEpkH7IxkK%2B4PNm%2BMLY9%2BNSkPn7M7VnDfGw5k9jmdfejQy8f5LqaKP50Rcwlt5ucTRLhs6zF5ttoHJsU%2BWc7EiveANb3zrfRZWa%2FTFOiAUWWNhp1j5Bdbc26OEd%2B%2BJzIpH5OdaUV7DNPtZyHos8GnnqlqoSebxzLXH%2FR4ioJe%2FjEOat%2FTnzuY4P2fdXUruMfclQLkF5VHVODIorsBaxVFfsyBqj%2BbTpG%2BY6DfiWqPbkVEM9owrcHRyQY6pgGJsSJ8%2FwkWq1EnklMSNjcXLnimsMAy3rmmJDkqkrU8n93vvfrKVKg5zfexEbq%2FjwWvhXSV1QYmAp0x6Ueyv6Vv8ADr5T7eudLpP6PfRzuG5giV9NYKkARuoZHq7AeGbUCIGwjZm2vq484lgBfon05ZEfRHRLfzu3Xe%2BScRCIih9B7mktYQyC5IfosVAzmrCq%2FTzxxp%2BFW5lU3EZHENbF7E3P6DK%2F4y&X-Amz-Signature=c5cdac36cb21e7c0550bfd9203e39fb179ce09f2c384b209d456f7a088687d30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

