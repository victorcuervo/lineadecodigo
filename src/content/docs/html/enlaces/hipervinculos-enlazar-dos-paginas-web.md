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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGTWZC36%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T154255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmgMDtpUtAWr6PZlx6TjSl4b5QubtoO5%2FG2UIJxdU1oAIgFHRxns9z4pb2XznOYk6w5mN9IjNSABZMFgrBXPwk9VcqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjXNFv17j2jP8Z8TircA71y%2F7AAI6NTW1tRcMORhgQVmPxNlG0DBXsQOkSm0UBbrHmOumkEZmnsYMZsTQGgvRKWnFvXEriogDF5pXntyLBqfQDgsXHWWQSwlD%2BLqeUIBzwgEoW6Q6CemLQp4CfaLakx7qYOLkhTlauQAk22Xg6FTCTXk6HrJcZbI0KoJSnhMdxcdwCDr4upUpLqFhWd9bLc6QZ9cFm91sqPTiEngvzwCrCCXNUcnNCaJOKczjZNwHD8q8S9%2Bm5loohvFsTaGzNGPrc87clJUyN8KgACY87HithYMXVRG5sOh3Jf19sxcRqkF6hQTqe1BfUd2j6kxGbOPYPrQnN8dzv3rSNbmpJkd%2Fl%2B284dq%2BGgbrn3YBF2IRlRxDaqQxgcV6adRhRejhBWl%2FQLXaqbfh36amtiIork6OqwRuyq0e7EqdfepGF6PYDXaJfhCpASSYSor8nK9%2FhE996VjQHLoTupw2%2BHD2NprWPk%2FZILF6ATLuFC%2FKF%2BbrYiXVWvCX%2BpjpuSLVaaMc6BYQC1f4RKV7a0SpHYnNzCmJROZV0wPjphzoD%2FEhgpTpe75GmNuhWyzmWHcFuDa1lNRZLlBHSlvv6Iq5cUSsQlg3OegNBFySNhiVsWF%2BS4ksDpDjVANjos6CSSMMPc4MkGOqUB5V8Zv3kFq8tvdnTy5pH1U6kJ8kjCzcsCc2XkKgaUAcosJOL5A8SGZqfA%2FKdVqxO%2F%2BYA%2FVYyEZycvAiWRvhcbo03tvmkYuikiqTqDRfQCaleg6aICYCG%2BA%2FVGX8hYaLh%2B9nRQNApX1yUzhuyrZYlmFDdkpsmdUreA8yHDRabvTZSoOYhpyl1w4VDzD9lr1wNMreADp7thbNZkwjQv%2FgTmFFlMTe7q&X-Amz-Signature=47738f57de2a08ea598db94cc6f6755fe533f186306e4ca3b8f75e42a8952bb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

