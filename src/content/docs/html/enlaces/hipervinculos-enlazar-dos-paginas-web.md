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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTJRSKBS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T162656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGoHeD%2BeaQw8s61QyNdV7eKnthcWUgoNkW9oQP%2FxVEQUAiApkSMrVCPj3ZXPJqzO0K%2BsYurY635o7fhNcAYOZonf9ir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMvB8ssmEuWUVEfRG5KtwDpVtsbkKMqYOJRSXD0rV3JKXtFwGK3E%2B6roT9ww6Rf5ceaPhs760T1cUc6OU055TnGuIaKE45ifpxxR4WAw2TRlkONiMNKDZS29rxwYuR0YdvMupL468p5N9wbHqAb%2F0P8xmv0eU4i0p1MrOmZgivznPLdIXZlKHMZUL1cWwr0TxHuAS%2FnclmNq0EifeZ50qwH%2FAhq9TMyk%2BVMWvG3El4PySZmaL3zSi1U3q6d0DJ%2FiSwlt4E3LqZIEb%2B8N1yYcAefy6BByVPX8%2Bb69v%2BsjUDLXYBjVt71apNjnqQUjLRSyNZxtHRoQUIZ8ycTE9usAIqjCQ18Pw%2BKYBipsdkAmz2guu2jEMACAn%2FfNGBjlxcuhvcF1%2BDqgJ8YB46mcrx%2FetcDqYlrMK3KCZa82%2Bv4xK%2F4jboMVQFoq4t3loCaZu1hyNXl%2FSEKhQUU53yLIRqmpEujBlAq66bfI3P3MWrJeUH3%2FWUnFnHURYEkYEhozUP0tnm%2FuvuUnNgd8bWFXbbL%2FwSS70JknGS2VJ4k98Szby5lD2u1LmdRbtZhJFVZkA0KVMvVClZyzZFtiflr1GiTg5pSImh%2BwI5pJv3Ue0nIHZbCw3MEMLTANq5jA1nvZJO3pslhF7l%2FV64K2hSdpEwru%2FLyQY6pgGKLUBw6u1CCt2O080CvmylJMcRBIowfGA0kgFuLixBiBuGjogG%2Bb8nQyba3QmKZGTQGifdVAys9xZaiN5ahgsyhwKlCymWR%2BbJP4tNPjNTk9FSM8QPl780MMXyqRB%2FdJ%2FApEfzYcPkGyTU9MZcjUrgpyhC9MMLKU%2BLUqYxlfQc0hO2iN8K1xSh37RnIN%2FDS1w%2FBAeetyOoVdraSUatmqMawZrobSJr&X-Amz-Signature=98da6990c0b053acb7228ebab863aee01e81d661aa6a06cc7abc82d73ac0322b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

