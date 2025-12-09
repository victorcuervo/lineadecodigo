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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6IKCCPE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T020100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbRE1Sv49PgDfzlnLEpS5iFwPkkkOXgj5ltbmL77Ps1QIgd6EUHMCJkstHCE6%2BjmyT84QZ%2BOa%2F2wGsjwhvChhx7MUqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6%2FoLLcOzfPtwkkESrcA%2FgvqMy1cHKBXLfCyntMy3AyrLQblB7cszX5GONMD2fnF%2Bxbfv6oCN%2B8oiU5T%2FRUkLblTA0YyqAQnmQFGsK7hRX%2B8m%2BkAYBE7gT0zuHlnmalhEiNdaqeR8H1HKJE6cIb%2BR%2B6BQAJaArp4eZQ4UeqIptIfDSTqzhcjUvU4kyiWKIXBf8aHEz3PiFuxkdW8BHGf2sbyvbKwdmH56Lr9HwX%2B3MG8wZbr95A9ttC8ngG2s7B5qnaSSonDpfSiaxnwg%2BCfASqDDI8W87PO7of635U%2BQGuC8yHzpU0nbYQAkpqh3q8ARqdrVhUFx36DUUZyhacLS4aCeKHrb5PUJFH%2BorXr8FYvLfYe1pp6BUFEx1RMaXGoQLyiQqNgP9zyXM%2Br8mcOvDdw%2BboMH3QD3EtcTeOFe%2BRmuf1BL0AtOcEbxWEp7es%2Fsyt43gOJ0sgqO6M5FzABZ9uRkotbxG3j8Dq4tP%2FATj71hR7sFnJYeHqB5XYhUZukxUJ20HSi%2BMfwifMNDRLwHnNFI2mRt9HlCskT45xHSaw6eZI9GAxAQmr2OSlklhpMlH4zFnkqW1XTQGxRdXlXGNZ3M3y5Aj3goOyoJ45bxgt71kLvxdqhy9JX4clA%2FCdaWlU2ABvHEsfgEXyMIXp3ckGOqUBFsVN1b7R9%2B%2F%2Bj4LBMWgcHXVW1HZxO8MOkNUiGzv0xPM3Dpu9rBbLtIdcp3Dqea2HD2qb34ngKzobDJ9wKcwmgk00KlQ6UWOPl6Xdci7FZtekCI3kePkyZxBvbHikCyqbUj0X9Howt8VtQj%2Fzwbd0aMKsM2WGcd2iolewn%2BFRUUdkueaVyFzmJa12X1FnqxQ6wuMJhe5JFMO3b431typlRUIalvDj&X-Amz-Signature=b9c7748ce150862d90272cba5c4852462c7cc59bd01632cffa5696165c90d2dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

