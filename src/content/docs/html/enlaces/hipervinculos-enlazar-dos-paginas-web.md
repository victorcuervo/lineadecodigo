---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5757NJG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIAyZ3h8sLeJK3ngE1pXuaQaw6g5aK8A0gclUfxAxiEkOAiB1BJXi%2FvPL1y%2BDo2cKu3bG4WboF3v8bg74FYhkS%2B8fkSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMnBE1j7qj%2FMRgwJ0XKtwDFzC7Y%2FcbL82tIj%2Brwjd8P8Ql67Z1YPzZw3gsjDMRmyAsWlIzZsJfUaebbx4HVnXvOINFhSY1qGzkEoMQgj5dQhYErOEJW9UgcfRg7%2B6k9wSEcZMWsOrnSS%2F6pvwqlT8kt1eKBdR5UsYP2XA1vpysHYoDGU4L8g2B0hoaZoc5c2x%2Boi9vW0nHWJoRr4a6%2Bgsfh3UqGI6eQwb8O3LKSuC6%2F3d4CItbpozFDikqmQFzJIHHLGTZMmN7bpqIb%2FeBXKoIDPEaYrRbesIiwe%2F89KduK430v2eoxEql8n2cscdOM%2BXeXcGfzpNuyy1sblOKSf4I6QLhqTUnxAhVX8QXHhBUROXz42s9L4oBRyfmxwPX2ngt7kXh2wflLeJr4Hxz5aFY3NcKz45%2FfhidwSChkmREPS5qq9HjGC%2BPfiFyNmcxsaDMGQcYwe9qzdN8mnHi6OiinXTuX099kgjs2h9P6k3in2iGiGmJsgNTteZqBWdO7HRVHL7R0I51I%2ByOugm1ynm9PO1Z13g0Asmh4lFtn%2FZglJ131vTCMFThX2pohW%2F1OZAZ05g6GcuwZ8cgxzbyDNg9kjXzb3rTLK3ci8Mw2CoLPd8CCky9UNB2uM84Vs1RBCo6j5JV8Q0Y44R0%2F7kwyb%2FGyQY6pgF95f9b1bAQLjluI1MP54m5N5%2F9xBpJAYSa1TrT9%2BU%2BV%2B6Q3tM8en02u65QJ5pJjol530EVm9VY0lp7JUh9XARFRv2254KOQOwOASyE19DOLG0m0X8lXAtdbtVZY8mmeLAnlj0THcCCFXcaXZtIqnjf4KUMYIK9PF2x%2BnEsBrQcyswCe0%2F0UqLayEx6tho6cZ%2BD%2FPVgbKQ7ZTcKf8822AucaFIIZbRL&X-Amz-Signature=88de471e04c505effea62d3edcf50d52c678ec5b8a1d1b59ef44ceb9d8bc6047&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

