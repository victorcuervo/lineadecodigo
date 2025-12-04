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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOD6CE4Z%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T234220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8loxhyOzUsNrUPMpERMmOVm%2BsrKaTcEKmKcSglZdgIAIhALKUCMymLqWKXe1RerI0a4C%2BISOyYeoQmKBEci5BwuuQKv8DCE8QABoMNjM3NDIzMTgzODA1IgyrNo63D1rBNFOmi%2F0q3ANYksN34sY97o1Rxjiytb%2Bso2yP6EPkWLvCr4EkXPjxdKorF%2F2OwqmX3%2FWaZc3hH9IwdNCFwag8kHSU2%2FNZNAxDkJUTHuzFsYNJh%2Bm1UU%2FVM9VG9H%2Fkg94c6ExB4N5s129Uw4Dyxbk90ORep9bBp77QvWN3zby7KRmTf5hRvDbdMBl%2BPo1lb%2FINYW6qQYTjgDvZhC9j5amiFxAUugxmr%2FGF716j1yo2S9A18iyIVbggFxTmUH8RxDEWhjO6MYmeUgOan6F4R4ecads5xe5S2SMKBWlUOHl8x34kG6jT8zEV6tYUGnvx2bNMIIJ9CpulRq4v9FKVT4YWwONhOsHdIqTb4DpFyy%2BillAUfd%2BZO1S5Cejbw5%2FrKlt8%2BbrNAXfozDeEGHxNA6VEOBxiBqjA%2BndU7f%2B32IaNH3eugS67vS4sn%2BLv7KGvxEHSpG9gZ%2BRIiX5%2BCqZfGi0OyFfvYb87Fv8dcfHIW4RVDdNlagBO4NBLyNuPEr9wUC93E8YXIb6icAOV86eBhm3Uke1QuRTNKPLB%2Bt0JEqwVFJAV3zGLVtvdiJrCH51faxoHgv9tSIHiexYicYnkFOx2FGl2%2Boz3Wtihu7eaCvIcjlkPPR9ng%2FoczvjE0ZCa5SO7vW5MdTCzjMjJBjqkAQr0%2BxLAFIfrwC5V%2FYPsIeWJeRy4w1bpxqC%2B2XWbf7DmANR2WBwfENAmv8KIW86OVKQPh1XbQCYWRPnR9b9hI3%2FBD3xyKa9nQ%2BzKOZCJb1k6ubmPeU2Cv4zTLU5TuZMZLjqVOMiZs94ZTiAd%2BMv6d2XwVK9zXDcwbDjuJ%2F7Wvbzy535ZKqtsfeI%2FzXToFhzvieT9sUvh7fLSiGe7GnViwBXXcXeQ&X-Amz-Signature=822f0e20b37dc4932b5daec81a0d07d9993d42423f97144204c0a345741531f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

