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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSPELEP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T220030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqQHxdrC2vLVqLQeXblPHFi9WwmSO%2FJ2u2ZlRPJ70DxwIgWrZQBHpPHgDk0aTnWbA1SVBAh4uq2x8MW1sGrkiqdZwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDG4L0xV2MzS%2FUJ9V%2BircA3DuMugPBklBhxQuNgSqugwMhad2jawZGQiAsT14TUzZk2font2Pe%2Fapuw918ohdr7KasBNNq9kl%2F%2B1n%2BhR9UuASwVZrVZV4F3DmZzbFojZ%2BafcELTR2LmXbK134ZFqR82fzLIhQanpolssiufRko2gX%2BHAq4vDRaQaKyRVf8V8qI5CD0UcYySca2GZ%2FrREPg9BgeMG%2BrklDI6DSlHL9Paz%2FJ4tgKfKRnpX2BiWclwsweqvU6wAppta%2BuyuQeRtawJMDsrQVjhTArURv9so7k01heKYWluFF5mHw3smSR0xuoZm5z5RDoSmPCx9eoqWa21ChcSx84HrKwGVFNkwFJ04%2FZwyBzzraMo0a3Nfk9c42v6Qh9447owuTGU6sDnXOxEioDZfa4BqbmjrggJaHOIuK4lt0msQ%2FucKNPvTbyfYe8kpP3ObpfPpD8JRSGEILzQqMz7vn0n1%2BR0wb3JGlxSe7yFYxFAL9rDhrDU2RnCcATxy%2BI3Jq1%2FiKGEt%2FzORX1xRcSDd54VoJo9YMj4AZiIWJ7CIrxeWEnG6O8uLi%2F%2FueEH%2B86IHas%2FwmDWX%2Fdu2t9%2Fa4PaEYdxVVgzDKOvpj4RvP%2BkAPHq0Xm79xtgiP6G0zv1%2FemGwZFIyYn6BwMKKazckGOqUB2haMg27rXDZSn2NVyMAFjBRNCxqOX4T%2Fr2i6n1UAIZ7i0En%2BPEr4IHj1SAo1cNYUlDB8bGDR2qX6kEHIHS9iAcxfApfAwUYFWHbES5fhuL7h55cFY68KZkiHJPl26gZiy6wZzbZEKXeW7FlNZ2R56toBxqTcod1eUK88BYwhUp0ympzlYuoboVuy6jA4gS1zZpDjLOfa%2BV3B1Fx42UIsAey5ya%2BF&X-Amz-Signature=aae81b8ab30c34bd35b05e13c72a9a0b3123a490abad036298c1370f8fc99c8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

