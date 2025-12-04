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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZX2K7VX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDcC7ZUoOLfJWbRFtZSfHZe9g67S599xetRDHUQI4fhfgIhAP%2BQlqFMusX2hKeXXM9dW4nUnauo%2BF%2BYP3a4EMhsrYRyKv8DCDkQABoMNjM3NDIzMTgzODA1IgwcyDqEtW0lzTT2DQIq3APX52ww88FRenpwXyBwfHmDyogIsrXdWrZ6hQoBjdu83Q8bNo3eiGf7X5mK9mMKEH21ulFFiQqi09dhkwdagOWo47%2B9T8KW%2BEzHkq9N%2Bnj6sJz%2F0bArouKNz8Tcddx83g3QpQC14Eh%2FjW87sQklbBVLM%2BIRqLf%2BZmCQdYp0CkL9wckk1H7xMonwKa9FeKqg1%2BDv6SMjmWNloYbksK4Fq1vtdUOUT2c99iqrcoRyQbaYRQaF5o86T0sv2pKWjQK9yUz%2BkwoJk6Z9eWYQDuWWVIUMHFmyrKcJynrAlKQPwBPn6iTsRqoG1WRGvFl8rWgnpu%2BswWjgI6R8zgl7FRNQVp4yMN6HNsJZOCIDhepcRH7C%2BZDMSi%2BRffDcu5bxtSc4lw%2Fly5i5zFhC7Hiz%2Fgk2x6Vi3FlT9yKyBv563%2FAUjeXNd59ssalrF9orwkcolgtQTU2m8gcdRrlt1F1DwrW%2F2%2Bzy6ft%2B0m%2BmJL%2BXls5C87z8%2FfWLhoGdabTH7xK92b2BI0yMStWIsbRJcfb0oXkpsNwqm0Mi5P3KlBoA6nWP5m4Tb%2Fiw8a9dTk9IIxd7mmAX12T8LJGvglGnK%2Bczl1ARKaDqkQv8xAGiF%2FaVdQDpUp5WYA53zwUKqVbAvfTYzDDDlMPJBjqkAZ1l14QRUAK87JHwJ%2Fav93DVN%2FAOCq49tYh3wt1STIWlMrJMW7crOrt7VAwSXzs9Lfrvct%2B6oo6m7AmFU%2BrLgKmnSJqb1WG9F99ujZugdjAZ87nXMxp2V6ERpBe9WDMfV7555rNjrp%2FUfAI52tCT5LMgLzBaPi9hSieO8baDgrNiCyIikslb2bN3%2BICtBycaYO1aQvZgTpWQeomIQOcKt4JCurTH&X-Amz-Signature=b7b0e3b2ea2a046158ae9a9e2108e62ecea710b95c6408f7c51ebcc8f6d67945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

