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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYLIAW4G%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T165948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7HbNxyV1wd6NmCx67FQfeskCz0MdNvvJGUFPpKfwBpwIhAINqDIwXED5X9IgbLF6oEuI8r%2F%2B4Kau%2BR46LxP548NMpKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxynMUCCvisBrh5rQoq3AP7FXzNYW4vbiWRJzTRRBUbEeF7Hj5Mc%2BFOeTUKO0yNDJwT85aFtN6a1yfwoBdke%2Bh%2Fobv9Fuccpcy0l%2BdU%2B9Gnj3pv%2ByHG1%2BD06nm3F%2FecTScTkCNNGF8SBdmiHu0GMqUftyVcv5bJNAZ8JPu79ZBixb2USHiRoDRNsXV%2B3VPmXMHRt27lqjadjczNnH9QH2ms11SZxBAN3tWbSKgb%2B%2BaqQ9hdYubzJHMa0%2FfeWfo3OF14DqJBLHr4Mf8QPd5Wr3p24ERY8YudtfA07eF85gpO%2BE7Q8wnjXnCe61VrnzS%2BqB3Im5IVkVwQZGuFpTI6UE8l%2Bg8yZx0LRm7ZG7h9kOALrbbeaL0O%2BguiWWBgi0hjIYA0azN4cVsVEAmUTlfQkSlxdWNld5iZs8HKCJVCc9aKVRmwT%2B3vQlkHQt4x0QvbZibMx54%2FAFa1V1cc2BQB%2BbNmIeV22LT%2BBN7PiDOghRMgra9kd4yV8GOnX%2FqJcSIBcuCWV5q1JOpBs%2Fe0measgobB8PAHmHQ4RZlu8ov4cEyTeESiCuaZG83Il9EvKuILkTxt50tFB1Zyn%2F3xxSG8%2FuxAbtXBDCYYfgD44gOMykGTDQ36kPQgLcJxuuouvZXV9Z5MCIyy2iy0hBCT5zCPmOHJBjqkARdmgWStpSn2B3dnZbYKs6dkF%2BkKlQ652P20DjQ5UWlljLLajjY5QZA%2Bc1DLXq0OXE1ufXJg8Q7RVrKmKwS8X42IXAUOcrFGZni3U5Sh52s%2B%2Fr7B91ZMwo5kruH%2F5ez%2BrGa2hJgS3I07qBg4XA01OG4YOKjaBRhaNR2bwsJ6jkq6NQHWhG4aCqsMhUpKCmeus7SJjp8M75EJMosQnlcq8N1Cgohl&X-Amz-Signature=1e6b8b93fbeb44a17eae36f36618c4d93c03ef138ff8dd5b5e7bf126f761662e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

