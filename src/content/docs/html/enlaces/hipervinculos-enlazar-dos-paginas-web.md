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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F3N5MBH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T024922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3GHFt51f94MXSl7v%2Bt1ZcTjsFaDbSp3jUgVSaakndzQIhANDCfBtf5dC5vzCaOCBITwloJqsYaP6ofUE0PM3%2Bhp%2BaKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igya4yoAcOwo6iWR%2BLgq3AMI26WphUyv7qMJeC%2BIUS1s%2F8pwLcxEuMPeOr4wVTEqf7Y2yEkSUx6V9usHS047LIQ6MuMeOQ6DiEXrPNO34TSFgr0bWLQcj1KvAkZbl4bDW%2FnbeoxzKXNrEdZlkJXew4IJ5kMhsR3deIfm%2FMft8R%2BAPqTRqXyo%2BhBOr0YkMFMa%2BchU1CmQeFE39gsbYwmq%2BX4GPf5x9kAwrptrSg1%2FyKu%2FYtplFFBzjQTSVBRfFtohaHLMWwG3c1abQCe8zDcvCuvfm52LO5zF1Tvg9YO0gF5u6P3qL%2F4ZR3i5LQ0N6Rz05KPkNRJnA%2FwwaULOhopRAZF1eBV4WWNEjn0DggVmdsm01Nxb1LyiI7KoykE8Yire7WfugylDkVCJLvQIFjKV5KXbRR3lbueANS7Dy0rFD15X8NlaFPOs93FuUnyz3sSbuqTsrHa3Ptmcy8UL5P7cFBBN2%2Frm%2BQE%2BjgU85hE6kNpD8H4fZm7OHAn%2BfF8BYqEIdKfvyK2lGUXZ%2FwrrwhdLn05CMOZcoAhFrsIugWG4n7z9KjuJ0CVHh6H10d5fCurCTW%2BsNi3BqnmFNzj11%2BMhOFW6esyrL1RS47sdup%2Fjza6oQRqGJvcWcjRnh2WfZ2Qg6TG%2BqczdVgUgOLC2STDSjd7JBjqkAQP174M%2B%2BBG%2B2jBf9RvPNBioTqp5ctERT8YBy5HtgIGAvo%2FMBp%2BQVHGMIH1794ZkLqa3Vcghkwv%2FbZbggRw90qKO2G5AnD3wC0TMewhRUslDvynwXuSVSXM9HbZ7lDLxsjTPPH8owc4%2F6WgRwVVKff%2FOkKccuWXxZOWGYeBBf7eJQs3d87QsTicux85qOXz0zgVODRVjzt92x4S4I5I6p19Xl4CE&X-Amz-Signature=977fb05a7169e314600e9aef498ae73183bc9ab8561c0754d1933164bbd05194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

