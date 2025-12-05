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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBJBGRG3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T124058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUPikKgVkvA%2BfBmJ2G6sYN3Mdy%2FfIU1AUjsQVk85NEnAiBbEGjNawFfGAYT5CiqkNnDcWVtpBi4rtKQ9DVqVSrsMyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMDDf%2FObo8W53PyAZHKtwDA7i21fmtzC3DpfsiUJCBUTcLWc%2BaQyprTrPUXojeQH4gbwGZb5Ufeny2SDu1V33RmD1PPLOQ6z%2F8u9JbfUOlDaOR0HYpC5f3ndGxydhl1lDzLxQJpQNmCFnt59dh%2FbDfcBcTqXqNr1xOy6SGWNPeTfkkshl5O2eKnz4z%2F841cAGxZ9qaSBjstw56e%2F2%2F7l5S68G98SH8a9%2Fe5MO%2F7IlcnZJXLW%2BKInlQzHKAVrCyPNc4RW0eTuSoq5YHx7wouZeF1wAAXd%2B4sXEnqrCD2kohiCGH9lfwhEzwE1RXVJEjQ7fKSyC2QW%2F6F6HgSmOIx1R%2FMjihg1n9V8qxx3%2Bb3LjWwhzxJwdSvfMKqVqHkmFriEQ7gUqq%2FD1SCRq%2FpNX%2FrLAWpxjpGCTpOGC706EBpBL0TBf2onDy%2FNxrIakUu%2FEtFw0JPC6de4UBirhk6eO6bRUqILY9H0kRjdRBDNrD3Nis%2F6CbG7Pnzog51pUM80XU1HjSAqbxoiJeUVXL0Klp2qcvYxFkDJE3ymCajGXtgPV1p%2B2QhlF03qJmzTIk5ftDLP2IPp4Vy39dccE2BUG1L5QeI34uTyucgTryrd5iY3sjj2DXtcd8XnpfVzqCzbWQ8sgA%2ByjY4fis3viUNq4w6qjKyQY6pgH7A6bsgofkePlWL5Aff9ximEus4fW14KMcOePCna8MkDANRbEY9xuwNzaQeQn3isiA1bUgT67mkqCnGuPfarqbVYttB%2BETqSBtLt4A3Er%2Ful78d3pRlD%2FQsXbv6PrOjkUj0SSohq2cdAQniJfRez1LHxkJU6VXzeL%2BQmRlo4seDs0L%2F3uyU%2BEG%2F0FfSn1Te%2BW1C27gS9BPW%2FXslc56QbdP%2F1XYSE%2Bx&X-Amz-Signature=828396a7c444798c25e5c8da5f1357507a606a580906bf67920878ff8bbabf94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

