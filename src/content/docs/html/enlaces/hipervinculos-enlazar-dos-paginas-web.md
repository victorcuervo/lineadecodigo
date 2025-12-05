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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UO6PFIM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T115155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6XJq7E1eaFPQszi%2FJt9p379E3SGX6hA56ueKaSzgTYAiBrEINadNpo7xzrWsUPUg2JZU%2BG6ipoK9Rml3hrEJTiyir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMP84HSfyCNozahP5nKtwDUtlT7dVN1MskeBvqKEKobOVQkXAOpS%2Fwmp%2Brtz49VNA95gYG5isc61XbP%2BPczPlmQ%2B0zVADRVp4Or8%2B%2FfoEyIZ2dZI%2FcF%2Bs9QKx7aU93LnQerXrmMJ4McrFA89QbWnf4VBOVir0CxVVUH7EmvdR0U%2FAFeYscPV38H4e0A4QT%2F4nom%2Fws%2B7aKw78BzgWX%2FEcg6CMijZV1VsgxDsGkoOclrd0a0ETcb3w%2B0vKshGTattEdrVaEUR360EqPRpXl3lCLgHH%2F94V0uglYMdAg8uei89QI94FhUTzm0f%2FKDKeLzHbKatmU38ibRCTGt6cuFpb7qa5aZl17nqyH9T%2FV5Zj1T71pobVBF3N2IGqhefVbwvPvg0zDWmrjIaaXG8cvC3Y6yZ8RSpHGC4onuXjNgGca72sy3zAq2nbS25vunrFv34iqtljiAffeitojx36OVUGnlLXNO47L7dyryQI3Yy1wHEBZOhuaFlsMyqZj5nfmrlfviPL2MvDid8YLKkb4nNmWrgav3ljrCJ%2FX%2FxN%2FZM%2FHdiJUbhMT%2FanQVFrZoxeBcOBsk5cJmg873RUgXSDpr7SBbHi%2F%2BXE5puJZVDu2nV6MxhpAdmIe3xH88961g5qh3nVtvprnkwUxZjgKrzgw6sbKyQY6pgGqTX2gsUzRfAGseJeboFOVS56Ydb6Z8G5SLvY8gN5OaJ9nafxu%2FrkQhV3hOeUvEXFQgVBLx2HPPc0nfoD%2BaYeLBg5KTEGhrCgNv17IvFibUSkf6W4yvxiLqefe93sFXeMWR%2B83JDkgtuixeuvRgU6T4EvBR8C2u0YUOw7dUee6mtuzqrNzCjWk%2F8Hw2KbHb55iNo3mJHt%2BpPm45UV%2FPeqrtEiomuO9&X-Amz-Signature=fff8e6ff22ae06d4e1a9a8a24ac4c239ac7aed58c8c9821e7990f809499227f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

