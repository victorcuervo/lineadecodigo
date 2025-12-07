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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXKR4U46%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrfThh5w9elhvyjzfSBINUciUq67u36UzSR4%2BjRKoNsAIhAOv9f9ECxl9iMNATjLf8zbnWpfn%2BPsWbQnzdRn%2B7JfUrKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYYGE%2Bt2%2BS7dYv4Owq3AMK0Rh0CyC1N4rH0S2hNCJZuvkMGHv110Fm06tNytUxX3u%2B%2BmhuB%2BMvdj14XOnRM3rpb05QqUdJgEOKfI40fJ3KLzjBja02MUnWnqPRv8geG3YzXgigwUg2wn343bKPHezp%2B6BygWTRhtbz0mlbQYKSMpnhZjaA374AHFHjhYwZgti9npr94nfBgDHxZY4kceX6aJBqBzkXp5dZUJ1E0sXDdodWLepP9hOjN4XhEVElUXKYF%2BWqrDqFPgZ4ThOdZJfYcaeNoCdXLxY44vomb37jgIpv6ZkPydUO4Z7jlEzNOJ0QDI%2Bk7XaxXXdewXAb4paLrXT4hHavtqyFyIt6z7%2FLsxfK6ILHHjdJyaOcqCc7CjrE07b65ekh%2FRsRYAtYc94bknY5FutRUKLcyRReQAkhWU%2FWl1OzhyY34OgTfk6zEoYal5lFGYXhAukT8E3%2BYaKcWgzMJZqJBEwAKDWf7PdpIsAK8KYOf4uEje2LdsfLjUXaMbeKbkhSVgxbLNcKSXwru5HxFqlHbIkgdFxLlsGnLFfj%2Bqq6spK29rlYBfBEnoTRYpmR06VphGL4TUUbidLKF997KMGIMapg6mZWprYkJAIZ7WgK3gN3dWjjoC9nGbc72RIflpLEis8KGDD9xtfJBjqkAQud%2FxJOExN9xkbjCoCmgf4XNnqIpmija%2FgTFN67xF5%2FxFyvwoop8fC4czoPO3SvbEyw6vB9en97t5D8kU6nIiUl7wp%2B%2Bk%2FxbKIes7Hx5ChInB5E65Jg8lTYU7%2Bo8StibajU7bxJhU7MOFHL6Nwkycbd2pP2nz1ywwAS4JjC0odeqQPppWaGzlY4N6VV3IYfdBa6CsjzxuB9EQrdsM%2FrRIUomkYT&X-Amz-Signature=2c767a64152ecc2390a99701b2cb3cece5e046881565c1626b5ad8b149e1e391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

