---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLIEESFE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIBXAHCSH7%2F5WKOp1K%2Bdm7Rwn6eI6cS4HzNAkDc3KD4PoAiAjdLLpxj0E33TBWJK%2FoPq9gjftQfXDXrKPBEnXSQ%2BNBir%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMWb41YmaEn4xYRiPHKtwD%2FNdGkpg5TrqK8rF4p7RcbVD2fQbpPNvkhyVm4vfB8guhUQ9LqhEo8%2BdfssANT61BQtVFssg%2B7xHXaaejzraYxFUfCrFJozXAvkIJQeXT6fHhphEIu9mUdmbRNhg0IFvn0bDu%2BF8rQPDI1nhJZPl1hgEyt0xEA1vMNJGF0ir2420Lgr89S58J%2FCaVAdN7vkoPPW5LB6qS5Uv1bqChcsq%2BjNDfhUtZgdvi4L5Uh9KJN6PpJCOCtR8bN3awTR1EgmO1j3CEhODnH9mEUKBB%2FZ17DmfWp7S%2BlhJe6lUC6ZfcTofDFzpcvS42M3RYuPFADThwoStfkYxWRySjsnz96dohrwrXbeKqDfm1716Tn8%2BW03JQ31kD2VHPtOhfTmddnls6H2G1NJ4s3n0ZCvyA8EoF6ZgtQ9DlGykyj9oqJPYYTBWP86hcGh776yx0AlaM%2B%2BXeYpij909Cm%2B11divX5nGIKjGKD%2FGfks%2Bd%2Beoh0Fxi3BYantKzt9%2FX%2FAVlbWG0APegEDEfsAPn1eRhu1eRZq7P3CV9VYsEbOeVlviEd2iPJSRli27O7m%2FcQJuV%2FRUvl2GWBnBq%2F1YTQVV1qRPddRN5RXdtpM02kHaWK3qhWp3PacLacZ2vVZ4LXjxKxFQwkb7CyQY6pgFVj9Kzw5X3xTm50rFmagWVHL1PeNbTM4x5bP2EUqyPjwlHSyfw1xTauKwjVMdyTjNBmYx6fiwmnDTuLJRSk4qWcSwlIk9RtiNPZSPNiZ1%2FfTD1%2F%2Bo6kk8S9T%2F94cyJ80SAvBQLKvwAKH3wyDIhNNkCQMjPzEONwq4sXyXKwqesvuzrkWCeIwMZ9ZYH7LfO9VfwR%2FrPVzC4uMiT5YGumzlWIfatQqIH&X-Amz-Signature=297ef066dc2b4b63ec0e9303ee13b295e137c96e99bb7b36a58bb00f77fcfb06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

