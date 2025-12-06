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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCQ6GBP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T072021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICK%2BxoRuJGZVbBVi84OntDTWX%2BfRgWckEph1ebzUe%2BeAAiA%2F3wJuJf2%2BIgO8z14tiVWFGka0ZjWpaYaIoCj0pwouLyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMymWjgLPCaNGSmAMIKtwDI%2BtfAH8OzoTwPdWImDGviVpy9cSESSXPJdNbURBKqhWwwtyTuVQy%2BJaPrZ57QHAZycqn9327I6ytCJrwd9eipf7jsiWyvhd02S4wLKJa9wHTrP26cwxw4dRCu4ONwPq%2BLom1od0kPoLbvLuzTX7FTCNKisl%2FAtWYwgO7MIaUZl7mXf9r7jpc38%2BO%2BywpVnX3boI3ORQ4yOjQPJi9fpw7kXbpKG2lvM61VHBQOC4IW9TQ9eQ8eb32A4a0ezkVvYlwPPm1m6icP9v8vVhJnCF6Gd7%2Bx4wS%2Bk%2FHOFIW4hgsb6zFplrckoPolEjG5e4TQ2EgiDl8mjCeehMFaPA4FbtTo8ZBVclQsZ%2FjzC2rag5fmieblZJIuqYKl84v9ou5NvNNUYo1iMtoYMXED5IzQC0OCd1N55e%2Bo%2FjE6PVIa5OIIUj5X5FZbD96GQoVz4NlE5FiSHqm0tRYE%2BEA6rStLndd%2F68DV6PwfAMncFp3q%2BpuNu51i3nqFdBiI%2BtYU7Ouh7JF4ozFefUXjvDc0Cn2NRfeYiRxL8GdILoIW2taacr9GU9VUr4iRkECfbl%2FfxnM9EbYwSDbHuCL4nudxm5EAcNekxdQNoYYbJ0jEjPqyj0TgF37aWaSC5RsKnouMZAwkZ%2FPyQY6pgFBWskOIjCxvtVfz%2Bj%2Fr4bCmuMhzoYynU28AikRXwMGvmRmUIvONSUVHjQj9CGlTk3tTrhSRcajz0xvNXd07su6vUDbGgmPDtNKZYXRaFvzb6ojpS7p15QDsmKgkkgo%2FDbKoGKcACRRSPuU6VfWQmjnU%2FJkzzF1oL4vE%2FOC3tC8dhhNSmaKyJ6OfVnuySEj0ENefPTy2X4xVZ1gL4cYAuZTEkM2eQJ6&X-Amz-Signature=292405bfefd3fd0270299db702077deba3a4b9f4a74ee61671238ef3be6956d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

