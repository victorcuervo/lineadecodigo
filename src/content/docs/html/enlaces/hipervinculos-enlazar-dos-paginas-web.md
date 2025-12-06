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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UXO3SDH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T115603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDeHJMit9t1dTRnntXpCM7OP67IYQ5ABr%2BuBGvavMzqQIgTiqmXQVyydE3Xu0hr49iGMcZblKAry04eZS6w%2FveS7sq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIiecLbRx%2Btwbtwk6yrcA5Q%2B09jtRviFSQckIWM3sjRbmDlep6W1RZmN92SIlpA%2FYhztpS9XnjiCajF66Fu95SoxVkjm%2BJpBUeECllZno1joOgHwo1ghDxuuSSE0iRBNmrUFQWgLiB9E%2B%2BUtrnRQpbXO0PhzkLsW40%2BZruoiz0cfIDosLXe4OWys0O4HVey2AfS5qc59f1P7fyJq97QHyean%2FznEkSmRBegChaEVVYsDMRTuc9oXatT4vsgdYdK085WRR7Gmtm%2F70pzLEsk8zgpIlMaJ3HRFAf9igLyVnv9prdlY5O2dqfVF05XgHGvrVU3VnoNDbqbxEHKreMEVD5aM30M5FsVzyxEKbQH1bym0QERpYJV%2Fis%2B%2BaZKFKUaK%2BsStgAyap8oaMdt4O%2BvJrf7mS9doSqjVItuNo76aYjWdTiUKZ3rsOlORpEU2lKf2cJKkRh0OeIgCd029b3EMHeLr44F%2B65H1UeuC7uG67P%2FrXo8lvhIV%2BhRjv5FPQg0jIzcmW9XtMkuWqxiI6Cel6lQqK4gVKyRAcA4VZ0T5aBu%2BmKUJgO%2BqsbMHqYrZnMjsIcLlO6%2FiD899r%2B5Vf3n%2BpdxUkn874pn%2BrKsy4LRVuwweH87cw3tk5au8tuAh%2BMY5afzJWpaX6z%2B1grEHMOqm0MkGOqUBCKwxUfZKpPD2gOHWapkFdQQmeKRENrc7%2FIZtgTN9oolGRb1hAMRNSEc4eTyU2MfWDy2Vqq5S6FAhrapyrfE%2BjRb%2BQCOmvEGtw9tCtdzLg%2FqdZNbUQdgjvrHeUwQ1E1XfZH6Bw9Ud9Q%2BfDBwpMKfc1YAVSx%2FUF0YkTRlgWo69t1AAaxL8T8VlIAFMhGXzerJ7ZM%2B3vRlZFNV3gDff2otkIRo7ujKf&X-Amz-Signature=5ac7ceeccef30f10a2165c7649a0d79f7761e94bda939134ebead26cc46a432b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

