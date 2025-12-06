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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA5K4XQI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T133605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FRLnLMmlpR9N3BNJb16vZwQZI7AKDfdKlIkHVhbl9%2FQIhAPAezH7YShEgnIYdqXb5QhBhqTT0sv7EftXGsgoMlmAkKv8DCHUQABoMNjM3NDIzMTgzODA1Igw89arkoCOonF6su7kq3AMILoDqm8ObQjijPndzAQuh5ZsU5CyAsRMzlN5TBG4ZO9mcXKKdWMT%2F0lDvv76YonCmJLX2JK25C8GNHVIgiy7voel3N7f%2B1D7Kk0JJOjWHmrdZE9uh6Lvb6zGbjstxHmi6RG8Eva5Xd1QbCsq66fjvni8rnCnzStL2noqApStk%2B9K9cZnCsDNPb9%2FvJvr0u8%2BNY3vORwV0yWAarhgaV298EweWcovcAw2E93hTVLzMK0FIWPfqlIM4qBqM0%2B9XTk6s57WcyxZau7AXTrG99K3A3iPlwphk672hb8xT6HS7m%2B7e2yOkpxjUAYxV8waHTvADU0O4WSqqzDjAAAqzTAqCaczdfEbdYkNfk41TuUI6WPeSIuDwr1ysamANC%2BfWoTRmu%2F89RQUk7AkOt20YYgKgCbluLyBgw3QUiCS861hLWXmkRKkyRYWmpKEp9AuXqmOO1E9tiG0bIlSqEcB%2F0HB9vf%2FoZoqMmn620zsIMTyJxNmljrMVtMlXyhQyWpd%2BtEyLOg1IzXf8qQYocVXGAXw075mR9YhZHCMzfWApHWxk4eIYW%2F8%2FZ4CDMHuzceavDS%2FLffHCCU3An4lCiR1UgIUGkALPEMj2qsRfJ2axfLEQ0WoX2hjHhfTsitEXLzDhptDJBjqkAX65mN54v9u6GMeHk%2BWSyTKH7agQn%2BOXryZ4ju6oyepfo9yIwA2l73yWYw43SNajSCfgL%2B112T4Ndp91Da2%2FBkZyysmMJcHirQRF%2BV6qCp%2BlLJmzGPagac6YGMZ1uQMa6aFpVF%2BFcSfMIhAcloZ3B4PdWpKbPqiUfcy%2FH2hrpPaQxPDY1yGomEvo29SCCgexTXCAYywr51vWgbREfAB6lcSs7VTe&X-Amz-Signature=c956dd3512456eff3101b7e41ea9d43c5c83d7469f5b79010b06472c9858caed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

