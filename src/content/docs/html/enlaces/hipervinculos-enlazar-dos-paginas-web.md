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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOFABFNO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T125754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNpPcq18NU5vDTCWQA48nQf%2B1zgymhuk6%2FWEj1NB5%2BYAiEAjFYVWF6nSZEAs9xY%2B1OJKdMTkBFoWLY6KqElV4AiCW8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHifnD%2Fwi6iYBs6NJSrcA%2Foks%2F%2BAyrN3qOzDCfwF%2FkALpuyBJv12P4odR2g4geLzbwYGNzmc6AApQsWYsKjIz9zSeMy%2FAdF23ChyR%2BOGzNEkF9KnMXhDzKMDq%2B6eWSrhBlwAW8%2BmWI2CvWZoKtnJnw0OsDT%2FgWeGoFjWWt8SOHOmxko5ctg9ysBjb6Fa9%2F9paMQ9BEPkHjzzGcyEir4bvXJU%2F0qfOJSIYJKzVbXQW3yC9qu7A%2FMd4KY%2BIrvw2iKxC2MuV%2BpF3kXc6C%2FgNg0g81z3FlPn5on%2Fg3iZradwe6zviGZlAjnjcNqmOhomHhQcJv8UcMkl070JsS6854wl6GQHHiTNtB8RMDYaVQ9ghYJWEbAxgNcPqL8aapRHNH9Cp033zfgGtTq4a00z9Se5ilg9%2FEC1lk1dUU7oKtN5jf8Tbn7l4KcoG9t0P%2BtC5PsJqq2%2FSxVDMi5nS1e%2FxiLSmm6vQRLEozpcFE5ecztqx2eBENX0BNcfdOnjPRriYX%2BQc861Dn3hMxjtWeyE9uFTlACBqEBXBUEeodanlQFGU%2B7U1rjvbOFgnbfHUGxSHvfODfjeI%2FlxxuFqSbpGmclmA7%2FgVxcXYIZez%2FUhhbtTGiAo3ePmbJ0aK6XiUfwoB28HuWI2QazKgD%2FyaG6bMPmP28kGOqUB2WTDh%2Be58jbzC4W1m3B33RyK688Vq7MkyFn1QDvLbRgbJl8oe0znXGyORLEnNETxbWagHKHKtY3dbVgOGtktJgKPRbdFRWZyv9mlKfrtgkYxzA4gcGFvW3Y2CfMMBEpG6rpWSAraI2u6aZ%2BERVX4eeHPAKI1U02QnZVtKNzbB%2F2%2FWwVf06DBMJaoiUCczRHVP4IIssBu386GtdYbH0YoNrqMoIEG&X-Amz-Signature=c1a1eb991086a8ac9ba464ca9c8ae389186f921bc2e66e3280318c1ad780bdb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

