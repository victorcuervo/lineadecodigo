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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT4BFE2W%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOA07oco8DHwiMfi5t16j5afVEgDeqfZ7lMT%2BzWPJlpAiA%2B3Sm4BWsOKbK6KPetDIdo247FOg9TludWJe1aDpPzKCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMzMT8%2Fx7KYdWTcCWpKtwDceYUXmo%2Fyqv%2F963HeAcU73Xjlqd61JLLhgHGYTgvW5Auzid332fvQposLXa%2BVhanUzpcYpHfDP0EmFULRqbyP7scaZesKH%2FIeLZYNcCkvz6EcqXfOSLdmuNjzIC7osBV02o9FaLtbyrx0MS37mzSXOsP%2Flml1u32gzWMfOOJCcYDpUAR3cjeXxk26mzL%2FAmU27THD8inICqLO0ydhyd1zwQ0wDeRnOklFLEZgZHf1yg3q77Ig%2Ba2ifaRpXNLfIm5P4PtBSyRP6dtDow05ywr6pXLMDnODS5TizOtLtKzeogopFINav0uTbnWn9natEG81fEB8p64ndRqQMmzlKL0bupFQcBDviKLA6Em4cKncVg03RSBhaVkwML3PTHVtYVac0BiKFFxSsU846YuLfV2yyEL8gSurgL%2BCXGcg36dchmpHGraEeqinnYI7fy4kpJwAJrwW6gGrJjICJg4UXLd1mAgNv%2FhNOieca4Q3z2ZW5KQE5NLKHAi1EeGAwssxZB8taWFnwPPwlUXigcCPJ7qbo9mr1a8pme2ISfbdXOrMPWIdTwpo7diUVaw8eQn%2Fr6UvLfjGF5BgZZV5lzp5V2QkV%2Fyl6tYpxMscvjC%2B6KCzA8FKDw1sNaERY0dV7cwrYzIyQY6pgG%2BmFEKKWClNClb%2F6f%2BaBu7APkKfDvzWl4DPvJbZL%2FbHFCi%2F2nUYgwmz9pij4qsG0rAGy%2F2fHTUMXk1lr63rY57rAKLqDiWOaUT%2FJ%2Fj%2FP8QMxuVOw0P0zxLgO8qjnVZdS6NwsZ2doNaUy9DpLQRy9aWpb4hwi%2BZ%2B%2BKX5xpydgqEWEzn%2F2blFhIVjxCRA9H4g%2FiOqGtr6Rhmx3XdNvlCyoqJPbWD1rl0&X-Amz-Signature=6304e089e522dc1db4755e4c2dae0ff2934fb86da27b9a554c80bc1f3f5fa01f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

