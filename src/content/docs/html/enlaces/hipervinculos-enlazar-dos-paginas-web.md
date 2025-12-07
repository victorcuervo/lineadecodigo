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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDJJHZY3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T165523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEkqOfZ07S9oU6MBQTc5dL9SZRXJYxfwbTMHWtVMMooBAiEA9jvPLbPieWfjHVF6%2BuZXRQQEKga44TAwFJ8Yp3%2Bs1VAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDq1YeHurQNw1ldxGircA5lrSIBaj7FlyYdevpXsRwC1OM69I9DOPZjewaPienl90h2XpIgnP9dwFG2IUez3qHVOIULG8pGO2mkDlrl%2FtaLOfkwCp2F1TXxP8UHilyUNSxwIsjsM07I9c%2FY4mPWQ8xiQ4WvtXrbyhKarc8Hzw3gzob8IkC%2BpLBm7UGcRYcTJXVzw6B6657M0w7fDk7dfiC4XQzwluaXWoRGrQCcbOhF5RYck7p1dRuMtaCnXCh8NyW7R8HoOFDW1TiR5DKDEk6mHjXRLLEdugTUH51zTHK3wCuhW3G4cSDN%2B3NUrlkWZccvNF59ZCkdmsavw7u6J%2FGAmg0Ac%2BU%2F2yyijydsgooej6IiQkH9rpPbX2Wu7aAHvQ%2B043cM6VqlOZ2Wio9kN6QZcJ5aBrPjsuuLB4jNqIwowH1ibS30bWzZ0Cr4W5tfZDdUCsl7uHhA3PDhQxxmG67gU3myag8pK%2B3fWQUenxem7TllPuJZZIlzz71EywWEQ%2BVsHQYNJ9G0t2Ve9aDheDnSHjj%2BRy8IUqVght2rZwu%2BVrKoGOViQoKr4hNnjhtk8ZGSj%2B1aQR7Br2Q%2FRalerc1i4q8BmoQrB0kH2S1lztcorGdXWU9fF42ksB%2Fcgzx92345ko6qGC5XggE%2BjMI%2B41skGOqUBn5RCcAuNNxc1YzHRUPmck0vzB8myJOeMJg84Lrdxt8BdqJBjQmaaSBEq4wOHUI0lo7wbemPS5v67Ckfzg7YZKL%2BiKWLKa%2F9bP%2Fx%2BKvU1mhe4j%2BFfPGVSOiqLipKsNy1uqq0gjLt%2FDYguQCTvnDWLcC6m4h9fly1JbMTCcVHFQfj5pZZmDEXkXfAnknBpj7qXwD1Lh%2BCP6VOROficJgnN73qxmuxy&X-Amz-Signature=42a60b059ffc1756e7573f18f483bfcc642b85efd97f0bb60cf84a4e93cd257b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

