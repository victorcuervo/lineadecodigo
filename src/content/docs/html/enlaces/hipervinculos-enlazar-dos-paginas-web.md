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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XPTL27N%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T071857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChExU5C63oyt2f%2Bd2jSvtMs6%2BaD19G%2BHui%2BVdye%2BSesAIhAM9X%2BKZ9P%2FfUnJajjzuq%2Bie1cINcq%2BN2N%2Byc8UC2S3%2FaKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHD58%2FxYrMmPNtmPYq3APqBpa%2BeYClsRHwxiR0AnDaIo4eQnTlmg0DHeTZtz1Oq0hfTbLsLjZjLLWvNWToN3kx4tIHiez6zzdmWq4QYZOHTr5Z6qUMFDL%2BC1noxce8ct3D3JR5HlDVuQEcTUDqQbMRw1dSx4pJjMKXRZ9EWRRrqXLJTme4fAbm3%2FmgNgEN7Rt81%2FF6fBcPAniqOn40MAnBtoizs5mCHHpvVBWOgPIh5r6QViN6lshwoY1%2BM%2FvVMdtlrIBbR9hkIdxH%2Bmm9r%2BFhcOyNEbalmcLTYPU2gcXpwCBkmFQrunmcd%2FYZiQNLfUZq9lF4QdujNjL3iNadNI9cEPYL9jT0EssvGASmHAnD2f8lZiokdYdt5bfbAnBDI79AgQgDL7OeWf%2BCSq833JLhFDQxlp8jhLxRsKrlas9bBKlg9fiB3GOkZrKnUdVgwox%2FcnjQJX%2B0uEZ76NgSVUOxsPlkzR68Sb40jiRm%2FvDWZ0LlnfzLEwfHKGqKYSE16ruGKj77rXWGrjJzrwP5CaQ6Hyu56xlCJnecxSlQ%2BhSDpw7aJo4I5vxxCmQX4T%2FvgrFVTj4%2FM4ZFVRvp7c8lnGzXqwR4iXoROy%2FdLX5Vg9UVDpbZ%2FIBtXjYPZq%2F25voD2BBseWVd%2F3vF3rYU9TCzo9TJBjqkAQsnsYt9TTufI4G7bk47DpOvpVRYskiINROu52gOchWS5jfDUJ%2BGO3ZFJFLIy06qenb745fwzp2QkTRtL5wLh3%2Fyun02iS%2FO0tiC5P0J%2BK9ZXZdZKIzVorlsoaD6Rgr%2B2%2F94IjaHpAo%2BBqzbYOcQkn6esSNtMMNcEUVfRAWbhvT%2B0wwkMR9SBam%2Fq%2FZFDtnlM54c%2B%2FgwlFlF85X9c4TuLm7RGn0A&X-Amz-Signature=938c35b6265002dad68386cc6b583a4d5bd9fa70392c17d6cb588fc785677c0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

