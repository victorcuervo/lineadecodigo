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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5WK3HM3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T222608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwEQNkxyBcyawtcfijVnyAaPmquof8NmmAql0ngAgI6AiBuRDIC9YWxFOwzV9Mmu6GkoIeS9MIPLsoBtEivSZ0DryqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7Vs1DvHk1QZoWXO0KtwD7IdL8O11X2TMY%2BfFai2d1GGG09BTzH2RNYRK6rJ00TU84Z7iv58ZZDxT3k88ingqOW%2BGjKGhC8F8YUeV78d4Z5T2suXdv5CyM6373rIDp2qNpAORqU2v6yufCEh098KNQ5Z8cDSyGWiiTSwP91IQnvdubJZaz80SenF8aCDU9QhTakktqKe9VNQpees8ItWKjG3F8I6JzS6jvKyE3787tzxt1FFcJ6xoLTICoDBp4rLcVJk%2FMslUQOzqfjaasRB6R1kWJIIpwqjfu5ns3DBhmqhFlDsGvB61bpJ5yOA7VIEAGhYGKwmAuejddkWvQy2k4ZxFthUu0NidbryxSajlYxTthfNNmvJ9ftLIax30QmpTP%2FltDuRbekjl%2BDMs%2FpstQhjjn4ZVxsui%2F2VdySN7WkpFJSixq3wb0BQ4hUHVORNZnnEQO05icZUalc88noj%2B3OPejZkdln11W3%2Bdl%2Fuif00ZP6BI7PioabB6QTfr45HI7K0NlrN2PprLfdOd6f0DG4W5xGjO3%2BCaIhD6PGoH1mncsytDsZPev1JbqiYS0kV%2F9IkAYbsLw5DozvFJ7rxI10eJ084hY4q2aj8wkhfOEzRMegGZf7FpsvDh8RgXG0hiqXO%2FLq%2F%2BnWFl7x8wu4DdyQY6pgFJG5pympDPbGVocv162AzExJeIZaVzc6E6ICxBUewRr3AnKIxjzvPkGqFykaEJASyCJWGaCqEf5iwRG%2FBf16e6lw0qLK2PX8sHvYzjNbKOvY6Ai1FIrK3zzutIdn0zNVC%2Bt09iuHD5iAd9FiJMowANCGcMdOEt9Tz8hZEcddNyKw0qhp1wqfrETuda32%2B99MEhMZ5yoTw6td0tE90kLPzTEKI4pXqx&X-Amz-Signature=21359d51c5b3d1209d202e5aa31b430853310456af7e4c80f0c8ea800a6315e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

