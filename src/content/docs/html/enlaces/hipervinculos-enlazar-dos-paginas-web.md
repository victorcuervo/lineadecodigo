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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B7OFQOY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T023018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE47oBZW2Qe2U2qWqmyajmtV0furjL56prr1RPGWMuMSAiEAh4W0qWY2BSxDS3pS2Y8Fnt%2FbR1o0A%2Fl9mow%2B9F5Gyfgq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDDNYg58%2F18Uho7q02CrcA0da%2B%2BZanzQyqmTrLRgIk8G7dLEwklP4tjgHn9c5Gn%2BlqMU29t5oEgW0pqiTRSz8Sn38GZuXPdwMeyZrwM8%2FJn9R3lLjihhgkUc%2BC3J4z8CGVOwxFtcJoGkLdCT80mtHYbTEX9duy%2FbdALxGczlec5N8cOEDg2unCEOh30dxBxlua3ofjXzOzDhFGjoJZYj%2FacBkcU3LAqyB2bYFR1wxQ5K2cmhHpltS0NKgI2xmtedyO9iSwi%2BiWRHtLvSN0em%2BK%2F2Z7WDOUAycmk%2FIlrFq%2Bi%2BiAeivALm%2FtuXz9V9GZzwGkqyd7bG83omrwyxEd7GKtG2JraHDCiUlXk4VTstC6k%2F4P6p6lluGrUC5JBTgQ2kgXvWsHyV9qb45hr41fwvQ%2FRoNNzijDfyKt8CAazyHLMVtnYTKNG1XAUzrGkSSB0nzbOp%2FyYphznEXlYPKILsqW7H%2BCPzeiPqfgv%2BnGa%2FUIqvXZHK6H%2F7d9%2FxoM6pCSFc%2BaZ1wH0NGt4UyhCvsBIbYrVLJJ%2BJPijdZE8GnIYQRo1Cyy%2BeGSgFjs%2FCQOKXqvKekBHiN%2BzI7aupIGz%2Bx4RrzRzuvw2RtRyU6Q%2BBbr7v%2Br5ACfWZVNMi8KVWRKbf0jiGAsKv9H0ym9WTrulN4MLSMyMkGOqUB8tVx84yBPsLmW6NBv4Ogej1jRCY%2F8e8okhbncUI%2BJQZ713z8IfxcR6IewrPucjH55Zad4NJuX6PaaW7b%2B%2BvbvryRD9zjDqTlTlc96uCa3rGDp9XLo0nWjrVaJNSUBKoJf4koeRtjJe2%2B7HjolyYFSxKB4lnto%2FUyATPS6ElksVo5STKKK4LDrsYVyY%2FqItABdJscHbZBeA1SM735MlHDH%2BDUxA9N&X-Amz-Signature=763bbfd3106fb7391bb8767b63ee505b60d23527241034a26e50e9557a6f9e9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

