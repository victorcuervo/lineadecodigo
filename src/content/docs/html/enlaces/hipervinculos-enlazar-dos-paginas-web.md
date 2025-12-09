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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT2O4S4R%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T230532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsV9fqzaV9FIjDmGzF2r2enLUwS2Pkm3MNPopqgHqpyQIgEf%2FM1ulqlKxtkuTDrPySdvz55Zr%2FyIU06Ox18r0VJX4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIfuuSn4JMk91htQSrcA%2FmB%2ByGEWeYSzb7Mdt5FkYCXQhO8mRQOH7Cbvap6IuR%2FRlq9Q8LZ5ZbiDPEpEWnYAX3yMHCoFCG%2BNPLQ%2B4LVnHKQycHJdEeEyY3A2%2Fk%2FdB3RQuo5mp3QLPjf4KjFrFb0xxcn3%2F4Cn%2FDJhyuTFWZb9DtZZePlGrSfKb3Il%2BCaj7mwvyFzd0hfm9Grp%2BWTUrSfk907MhGSwYhDqL0wIu1vql28diqq%2FogLNobRYLQfL3q4N4zl%2Bx42T0C5YckEMWCtHFfSDr3qIlT7fx6%2Fg18OIPi4hEO1261lLqCK60xgQ1qgRC8rolfCyxcWjMY20%2BgbWMe8SM8hRT1eeQtro33%2BYeDaiXlwGuHQ4qewaF0Ibt4L2IckY9ZPhzlXpk%2F2Ked7H2K6ci068%2FaLrqLZ9gN7aDNnjq2UcsroGFxI35GulqqBtctdSLTpaoLI3nBjLEHrR%2FEsBkzGvt%2F47O%2FsUfOUITJ%2B1rpRCmERkISO%2BClwo0uaAuM2iITPGcrocizQXR8kunHzkmfHAGAL5sHPjq%2FUzp7kQgKoSj1QvxRG4I19EjQxjwidhEwKCL%2FFB7G%2FB8QWcORjsfMby9wM0IklUDVLIOWv2%2F9xUpPJT%2FLnBT7E0Xi2NHtHuvPTNY%2FezE0zMOnD4skGOqUBZeD9U1ZT%2BRAt58f%2FGkxbGn%2Bs6Nmcceu%2FRtZQF10b9yQLmlzYm8EVdEvWKtkQFMsBSrfrhl9otbaexTqmsVwcPPQecr8nBd%2FNKkmL6vpl6UpwG8wRGJtpwjKZOritnOPweL%2FwxQjMOi3eAuXQ2UXV%2BAZatWr3QP6nizniHUJNsJ7ARoCHsAlrb%2FcbL9cc9yXmdZyCTvo7FeYPAcBU27q34FRyYMGs&X-Amz-Signature=85de80892c50ef2b03154483db3147dbf5897a34f34ba59b3a91e48a9a57550b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

