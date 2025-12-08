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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PEG3JY5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T060131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICemSBeMzbrn610esikUP12jgrww1DFL%2F5LySBDm7aWbAiBtmmmt4CNW4CJEa2v9ekMlFdfPzf%2Bn8HQHs4e%2FFoT0dCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKlfkSA%2F7RgKlRh%2BFKtwDRdKHLcIX4WQNqxgk%2FiSvRVP2NcowT1lh0UT26kr6gD4ojAcdvFBKYdnq3lCex3%2FaERS9wv3Eihy722iLeQmDXvoLZx%2Foyuey8aHTctzYH3n85QOUapDbn96UT3nuaMu9VgnYqWUuQV%2BUvLocrHBHojI7fJgRB2PcBa0YqqDjlhTAQfPRUu5fJxBvhmKDtAKbT3HAsqwlbsF9HpTwlm34mFJthb%2Be47HyO1ouwNW0Srpp3W9AJ08CK72txC5z864uNi3AYXaTVwGN%2Ftl%2FR1Y8ohPRE4lJGMkhBTKuamYgp%2F4M8ikeYng2%2FFtCRDfMZ42fqgJhjKpAzTRXh2183jKZGUU2BknyrlNUnIMAeAYhLk1wr8YD7z56T4ZyXGix9kyTpWcM%2BVsQtO1cllhp5MZvNXuWrgewpe7fHb9oB7LtBrHrJRfHObqaMlG9TkG7Ryp7gWtghBo0dldnjmss%2Bq07NhJKRxezsK%2Fw79uCgudCiOWCr3XrPzet6cRZ4rsI%2FxZQbqQDKikLFpvNiw%2Ffd5%2FfH7E9E0%2F%2BROy%2BZh9r0IdCZcL6IKigjpdjxL4InuYgp5Fd3KKziBmSAvCf%2FAsLpjQYnkBgeH76B89nD8TSXVm%2Fl3bPPVRhsHTMlbmb0Dow8tDZyQY6pgGCBmH6bJCxI5jcmUVP%2Bqqk53yYg74v5tqLpZmFOCx6V%2BYo0u3B54E%2FKbbRHzvTND80qG8zIgnaW6JC6DAQlZxwUH%2BcQiOHT0sS4QVwypFEYCc14emBlyv%2BZZCzPTd9X5BJPKBwTvizNs8VJih5OHhK9ZHIdw3wV1AcQIW7pDMpy8U9AcHNemCImy9t9v6UIlyTJ%2BHdwWCqLXGJZqGwgKAubc9MFlF%2B&X-Amz-Signature=337575df69e1dedd850fbb59bc53a9d9d4eaea821ae32d5174619dcfc37646cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

