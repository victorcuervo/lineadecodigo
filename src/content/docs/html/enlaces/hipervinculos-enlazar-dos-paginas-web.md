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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JSZRQTA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T120328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3XLcUD023QivctK0cLWnv55RcVBWmLriMrJww6USYHAiAMciM7g%2B1jH7YsUSTtAnRwxmpyqK%2FPvtAqif28SlMpniqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPinJgRBs733anZ3QKtwD1N%2Byn9bIYJ6A5w%2FfFyQtgREpgKL4B4m1Q42BFEz48nJYKYjqR%2FY5vltRRUzAPbAYE2fQMc2EeSAEsuDjMox6G4Zua8L0rmzxx1FRadMsMRWl8xaZJvth21wyrH%2BMr%2FKlk%2Fji3IOGb42UFW4jDkKjhYPzUT8oNLZ2pihSLajdxvy9XjM0YRp6R%2BNGoyQ0BS2nQ7ck3cnACVbXM0qVkJ%2FBf0dvoIzC%2BRISqXPbi1dR4K%2FVoZmkMO%2FaCKMvmQ3m%2FXQ2gbRA8BxgnFo6ibgaKVZuhLPnrUp%2Bj500p3VNTe69NZHzXlc4PxCJgDp2WEsPMUt513WtdT8djhsP9ZsCFrJf%2BwPGHvwNU5JeAInTEmRuXvf3y%2BjTPmAxZP8qjwoJ3lVTpJsKo33%2FDAyDjVE7J65hiY2uXI%2B%2FDAlm6GH%2BkbB1Wh0RWZ12dQoAdLsQqEfIDkX%2Fs9aXl0S4vVdoMD7ZzYkFnxum4JeLgL8AYt1uaPkG%2BnpREHZU1GmREiz%2BK4YD8P2DyJT4XBAfChMrNsoW6aQTNHm2o4HiXOmVqTiEej4CjnXjRh7z7e3%2BMnHTet7Dy%2BQqh1HEoOg5WkLrPL5j%2Bw%2Fo9tg7PQA50r%2BgHbr7Pl7D73%2FfB0pbk2aXMVue%2BugwmJnVyQY6pgGLJvX%2Fd%2FWD6IOVgx2Fvqh78H6kdNjks3Bx6RXb3wAhtMaMwZeHWYmmBtl3ceDZxxBTb%2FvS%2FUeRPZv3JLHxWnFxHgjWUx45AgDVJxS%2BW19ZZJa63%2Fxr0Jt3NnwJ%2Bw5q0WtgoP5o5gwwOFnB%2Bn0HAj65Sjb5YgcgQnxD435emZke8QRf%2B43KbS46j2EojTh4%2Fp25zQDKdG02uu8HwHxyOtECYSzh7H2X&X-Amz-Signature=36e45825f3031b0d1bbb126440635933eb7aad03c9f0ef48041696db2e639575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

