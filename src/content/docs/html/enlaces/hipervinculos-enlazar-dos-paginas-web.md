---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4Y5VUX6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T231116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGI84Q1zGhl3SgGgT4W9dQzs5bYdFjMp7Afwmqteu3%2BgAiEAtq6Dj4x4bo8zzslTeqgASeB5Th0VCydNrwk5onmu6asqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBuTeAs3yN2Gv%2FcJwyrcA%2FJbRJCU%2FHUT0MzJSxypexbUqi9L3%2F5YNVVrP78ee2IEf7MwweN6RhpiI7zziNNi0wSDjolsqzHr%2FPnPH7%2BPsox23zTlaEEgKaFKMN6qg007owhp7vW5mkB%2BrQkXdNGAMWhcelNNx7yqBkLiqIs2FB%2B%2Fq52HzedwTbfBC43Hhuu2F%2BvZsHF0gdLXmQRyLkKCD%2F6e5iyKWVPYidFxOD71ga%2FunqG76HGDSM%2BU0vK9um4agKMPGE7GMgdZcSWuie%2BhDiCLwN65cZbWvU8COi15FW%2BV8sv0Y9WE0x6njPuffARzxF0R3WXSDdQZgamnSwX43nwvVBbzGbj3QoWf58dPWVBZLvq1t70Z0i5XE6%2F4dIZ6gGMu6RXDYKspreaxEaumgn0eUluEIUmA9exEEAKcYGBV3IXB1F6g6DePhMMeBwlMmbK1nvS4U8MWiRPnmh0tOByJgFzU%2FkASRDl42D1O2Np3mkjiXQMtg9Y9o68rE8%2F%2BFk4Km2CEZ5ePOIxLoFbMmNi4cKPBwRTKExUqkZaWXFIlEeWkBuWdmi9vsE1RS3bbCrfClL5J1YNI6HvRzVNZHO9O7ODFO05VxEyTh%2BkUIXWzJFq329e6DgO98XMBtLedT9fFDlMR1zki8wexMILD4skGOqUBGAHePNnekHue4qQLOoTdZhAQfU6xXOtJ5FjaRjcDgPK0uKMum9ycCAmTDLjK9OTF2pW7BuAsHpAYKkcm91IZIbEWEgpXN%2BH1kCM9U79%2F2EGg7j1EB5QdBC7sJtEN1jmFoEUQD2gb25AXZU6Vl8h7Ur27ZJlEwVjukT4m0pfbl8WvPte1kayw%2BJ4z05rozAGtbVin4RxRIUUhEoJSBJ7exGaOt%2F23&X-Amz-Signature=c6867f69ba7b16cd42fa1117c5555531784cc7add02037775312beb39adba7af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

