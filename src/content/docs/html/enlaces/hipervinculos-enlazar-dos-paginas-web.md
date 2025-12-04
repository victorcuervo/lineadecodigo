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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT74ZOIO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCICfW%2BdTZKyk69POzBLNIpzZW0aotcbB1I5wnhztkNUPtAiEA8hrraF18ORddnA4EGAB7BG3zbXQP%2FnF6lcIw5UrdmQ8q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDGfLAFbpCfyC1oGUXyrcA0gTFCkUrJ3VQdCy%2F5uzLDSirKfrUL0IiVhRaV%2Byp18hCHytVYa2DNfilx3%2BLVNBXi4HHWiX8IKTA1SLD5G2cdM8KTPdKdgAUd9dR0eBqSXDe8e0uvETfoDfZ3Slc8DIpKT3Y7amsl1auBdFD%2FC52eA9owpyxbblrcH1L6ygXbYko7Z6UEVR4JMaYAdTXd81ppr9HSddtotLkGzPGCuOnka6TV6WyadHBJUGJsTutdEovOtvUTmcKOiRVuClQJBcwDTPiH90qJHRj6foiNKKuhUNj6fJtpuKbXbMYVhfI8JqJ7HKe6itYqNVSt9sefjAbCFm3SUCUme%2Bb%2FwBV%2Fsp7l8DdfEz1kGPhhCYIziYPKW%2F6eODnvRiiYvRUp%2BgbipA0FN9aTu1yI2qxfkBxdg%2Bw81ROOyIFb%2FJCNxEGwNIklwSVnjenONYXgZFYqxeKaUQ4n9qfA%2BZkBG4ob6wx9fRKeWJ3%2BNYBq76sqnwqFipkkOAnVCku%2FDYtOztvRdscC01sIXB1eU%2Bo2K73Ykqy4SQ0e540I8t1S4I9RC6BAC9pzTWs%2Fg%2BQTpAshzMkaP%2Ffr3Uwkm%2BG7wi%2FJTrtDbM3ydGxZsl%2Fw9cY6LW6%2Bb6y26hl86G7TsfOyF36ndmap5BMIm1w8kGOqUBPixscO0mwT2Rng2Ff%2Bkp9ccoJw3PMc4NMh103YIdYGpD9WD3TkRwiqp2%2BtQ7gW%2FFMyk6jFzzp7bkXZCP7GfVJBzuPGVyFbzOQoFA2226BX3sTcEsD%2FvGsTjGbotaN73GzubAqAH3VIrWHo1CKT28W0bg1ZZ0%2BttTRbv3WMBzLLSDutM3CadcIEKTgn%2FMSwzNN%2Brairo5qVJu9sC5C6quDYdgXJp%2F&X-Amz-Signature=c628d78abf437f4d629905b6fede22ded0a939ec0ca9541fa22b3694f116f964&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

