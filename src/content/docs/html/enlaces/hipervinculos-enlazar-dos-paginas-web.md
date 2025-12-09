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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EDUU7ED%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T185651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXd7A3eF6%2FeZhWB1OUI6YBy9HPOejXheq0EKreK0o78wIhAKDLs6nFFL7PY1IBiSbHLeB28pwDKB9ne6N%2FVNzQxIXqKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpSwRJUGAFxvxf6%2B0q3AMfCwYkmexRI%2FHa14rf8zfju5AEieKwDt6Cl451WVQZ9R4ShPQ%2FH48Ooqn690XglTA6vTcppbSLMHauHbqhcKrOTUDLK1NI1pUlwCV2%2FKDo%2FYJR2ggQy7OACP%2BNTPkp63yfN6BZ86TI%2F1j5DFv1bXmQop%2FvKbXRV6Nyk7RVCmbEtOoK%2Fmlmpid9zG9vE4s6nxP%2BHL1Qx5yrLNE95Y3ximpwOKHrqcXgKmx1vIRdT4nU4wE1k47c6haWY7Sg99m8Ob7qzbRixx%2F%2Fwa5Rpu8AbuJoBcoCztsG4%2B6pe6FBsqAkyl2ydSwi8L1eGIFUvI%2B8pVgjuhQaCIGJs%2FyXbBBkLIZJzrDmRgTD0%2FNBeXBGUKds9cnUcZo8rYEZUrKHrB5q8XB58TcDdknSm6XqypVjZGSkiffB%2FyEzlhrZ1p%2FxdknejjuuycccUiPAc8PxkRPK%2F3vMDgSwePfWvv7zH7HF6y78i1uCSVgNJNEQI4NzmxkXangL3ElcXJIPM4neiMPzKb08gboz4FcLxV4lQGuR3xVWZAcGrNneZbzGz7P%2B3%2FgTuqvyTYw17SJUgzVZIQQ2%2FideNJhqjMok55rbE%2Bl%2F6dvVB6q1uu%2F0u%2Fj5CfGmvefxpMz4DQOCgmOgpAhZizC13%2BHJBjqkAdyVbrsp7FnIoj3nnGWJxIdXH9T1MyH%2BjUre42AoDKuUmAuqwOdYvbVz3HI3d%2FBeIeeboZ%2B0rFiahdtRjBkNxc7Eg7nh3he9IvXtRqfiYvAA5xY%2FVXgj3S%2BlSQIEW%2F1x0zb4gKrnt%2FoVwqvM5ACkqRcVc0rYHlAXHXTXSWsziwQA7cyHiRVki%2BKg8zCDTER%2BkJLemXPWy88dK9woFL1iS4xULez1&X-Amz-Signature=af85f5d030bf6c5e035a226d6a1c4a52a5f1a05f4fa2803497b44e98f79b3297&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

