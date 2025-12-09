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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMGBJSH3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIv%2BqZUWnDISs7%2FIbbwVB6SP%2FtssYYp1rT2Ll4BYw21QIhAOmooqFqqMQeOgfbr5fAz6PgH%2BPTZtK9xZ1tVRt%2BY9fQKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx50Wnf8Cvd9O0zKHsq3AO70RxP8n7Aah3efMhFJgm8IfdqxdpxSDnsWHJlB8c7oN9p0AsVKTwa8GLAp8xdOy3e0jCrREPlRAhodvL8dz4YaRm1rBaJKehK9sTdk%2BcSprrIPaCjWMLzZiunLHt%2FbVn01905JhehjswvVngk5gBZsfocN4%2F4NIXAssWMuI71npDdxfzT4oRlr1Nnh3vK0CHmLQOC4K%2BSdopNlf%2B6f7m7cbc1gwSdbTgrhnrV9%2Fp3mfb%2FLAsh5GetYeK2Io1Tc7f1TTToEfbTBvMLr3Dve3qWpWgLSkcAmRXcjDgP94UYtBa56ccICgLMZD0apBNtHrP7%2B%2FK5oboUTliSGECjLYXoFyw4OTNZDbqNQo8SW1WcZ6mbmGcun3tjDox%2FDbE2B5T1vE6hoUSuE5iEd8pN6CP0QhB1kiEYu04MSnLBTofJ6%2FOtTjq66YXtNH44rHDcBkfVQHFkGZsQIotuLnNR5%2Bsa%2BUYgFi7BV1RrB1eePupJttTLR4%2Bv3dU1zWvkhfMD%2Bu%2BgmhlvI1sm%2F0NkYhzHaPZ1exAgUo7kwS7vPSARRHKQ83jqaWQiGwcUKJsFfiojCJ05dI67oL8BBCz%2F7ap1TsAJ%2FMalKv0ZyKv%2FjvKju3aCtOtL8OuS%2FCJJPQIoIjCcxOLJBjqkAQarkcRuKu0J2t3QaMCjPa8OqSE0pAa5vzVg0xJLrfeVZgWbu5Lca2ZF7Fd26c5V75ZYrY4d3T3chBDeftdbuGx3U5%2FxF816Fuq2VhXvw6w1TzEmJx2W3sGM30gsl77qrekLIWYsYIs485KNq7Z8YC1lAckMQC0wh7hAtgwc03H5vrwRi6m1PBQk%2Fkrua8Y7O%2FMP0IztEfUuESw7tG7%2FqQjM1jHd&X-Amz-Signature=d8e6c072e053774a5534473b4248c4e41d1f8e942fa7842dabba7054d4e45505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

