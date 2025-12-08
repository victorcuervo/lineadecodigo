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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3T5YXKW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T041954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC13G6LBwVbGUXAvVplrub2y6A7pHAQQXwAWlSlXhfEBgIhAKCB6jrbOGtJp5W%2Fj2LUJPg0r6J1zo3Cv0rKme2LQYK8KogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxgrpBFJFu0kj5s7Yq3AOD1uT2ef%2Fh%2Bd%2FOzoQl3VQbfmzpg4%2BRNOKllC3hY9V%2BzccLB4bDfXVB6r4wFgXq28P%2BdJCu4JG3%2Bmu2N9NJ9y8GkPc2y%2Fjox8Ni9uCNQkoLBxnZcNT%2BmzxUYTgtfAjBtoqORqlh4XLPdI%2FwCOLL5IKwOJ1s3BQ5JBCoW0wZbW8J7Xjg1CIJeTT0QuFfEvAUysDi7AfhWkPJpmaJ9iaYIVzzBmkgSUeKksatwdMKd3hI%2FYI2VI0nUqILtbjNkEzCcDw24ze95H20YV9XEAnfGZcys9vOLOgck6WT3InzO7UbGlcv0aESbpQqC7YvYUiT1BbiQOZz0qvEHOb3lNMdyFhv0e8q9j1EfmOzSb1vHr%2BQnJI%2FfZpP4RYBllrgktOjbD0dzMXIBlANVvNcH6Ze4nmBoSFQ8ybuzauyelmV7BijpFN%2BJYr1ad3Pfqg5ArBW7uLaH4hGYURWVEtE%2Ft18F6jKU7LvtgBu6AXFkU8%2FaelC2aTJivM1te50cNGDHM8p5xrZZHBdLH%2FxSZgTt8VFOiPtgKiI3n96npSdIoy9Ubgvy5GpV%2BAA36U76%2F2lV59LHCwPBeCHWHhNnw%2FY1Kca0QXrS5jvZdW%2B7%2BOHIdKeA86%2FsnRe2xCKk3Ee2Nf4%2BTCilNnJBjqkAWrN6WKww01yr8LKkSIOy%2Fq5TknGAfEEf7U9cbvzvepOyFo3Pr7uM5Op3Gf2UgOMNS4bpepbBEMXKofRvDzKDV6L9q7Yo7zebOWQLaNmAqrnu1uIBHIPz9Yqgt%2BzzIk1puZaVAUHSEs0Mzdp%2FkSX6McwyojXIHLnXVnTTeqpXWxcNDS7ed39gCldgeGCuhWrj9NyOV16bdCtvNdCAwMCsseTBUZM&X-Amz-Signature=35ef3a1e1b7c2e759fcc6584801d9136ff87cf4f29d8394b9441a9f634b48c68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

