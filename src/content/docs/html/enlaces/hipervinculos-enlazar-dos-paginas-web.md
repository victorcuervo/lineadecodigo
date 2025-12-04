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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMB23T6Y%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFuZNfITn5q2Er4zNrTMWKocGSpByCO%2BYrG6SENcwxBkAiA6xWnZvAdBKCzFT07yftO7JYK5IAjRlspLk%2FjjKXxGpSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMc1%2F7vauSSd270AIgKtwDsxNdEMY%2B6nlw%2F6qUQqmp7vzg12c%2F15PeLs7ru0O4xI2ONeUiEPAm7mQLH1ih%2FzsPmd3Ki9YThgFIOlOjKtHqw4jMZp1F3cmoU0j9V9NtzIcrOjzTXUIjcURdcPIxx8laA0KnmMQ%2FbHpwwTTjOmT6arHy3AZBl5j4AyCX7wGu%2FkW811YoxI6EgF%2BNycWY%2BhkK5Yyks65yb6X5juK303WyASU2TSs9MzjpmnrfnAZunsPbmzZZjcwnoDKoS4WC13EBGVSdc%2B%2FCeoMfwMXKEgX41qctK%2BOAA8aQH8vJmWgQSErRTaXfZVBJ14RTRvJrZCrrTIHu6QzgmRw0CzUS9v7hgELm1l2uIJW93HHlMzwjN6so8KYADYLZwT%2F%2FF2fqhd02PjdnuiRnsxtB0Pb9oWkr%2B%2FC%2FgtWDqjwAcaMYH1ATKElet%2FOeyiREaPQ7AMbvtQesIx46dg60o1d%2FX34BfuAux9bZr7k3cye10pFJZhNLE1lyM49cjDxh%2Fb6gs1pKvMrvV07SGwmcDzOq0BlsM4RvyaKYraL%2Bso0zegcqHgI32SZvHIzdY48Os7%2F4eMh7Zw8DUf6zxejOnSTbXzPlpXDJ0meolgzD%2BDV2omB3Dd%2F8KtzUUv3mcGoUcVFFX%2Fcw8PLDyQY6pgHVYDwY5Os0NHXzMoweZdEFFKilZofc83dTikT7BAUaul2uGRDF12sjy8N8hqpgl9wXTtTHpelKEWyVEfpkw9XsXvCnEqspV9IIRTePUqwANx5vV5EEzS3vNKJwlVvK9R93pLLJg4n6W%2F2wd%2FNVwnr3rYTWVmE9tso7PaCAQEmd58hu006vImHvk6CSv6214HBBBWIiTm6zd2DBcbLmG5%2FFoCz%2B%2FtBU&X-Amz-Signature=e7742d87abdea13cd678705f03fc6fa8a0f056063dbbdf53ad8b65aa5747e4f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

