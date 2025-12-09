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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTYLB5SG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T183340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3oTgCZYESops7J20Jd0KWUTL%2FWHG8xfPNunRh2iHZnAiEA8gV9JTW%2BqvuA1cCbCawFN0DI3VfzRbe4r2EW%2BhKsqM8qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIKRcF0%2B8SvfV7zYrSrcA7l%2BC5arRZPHb7794wun4sa7A5lls5s%2BqT072Gx%2FeRgBVQyli3HBsUgJQ%2BQ74byIoVeH%2FE6L4Kl6%2Btn9E4yh82ocxKiQ%2B7dY%2FciWquh6dkaBY%2F27ZZNCP0pMyswCate5HfA7MofoUbFk1bTyKQNaxIxbyJK1XmrFMyiRdRpl6D2oEP9OWi5P5HQ%2BHF80Dn3cWNFDzPoBY8CPG5G%2Fg2bj7JB3t97FxFrT7%2BO1os40GONA1B3mOKuuzulDeg5E5VUOfO3CozqbBTfvMjddgbhR2sWo%2Fq9UPBiIrV%2Fh5yMMlrp4gMEhFR8uJ3jMyxcyDNh0%2BOy0AP1B%2FYEn%2FK3ZlzjhnKHXR3MNlC2ZduajkfMhtL7S%2FCWj%2F96L4oZhXkfuytLJG4DZUPvXCAC38GAXm9cIOzoL4PxXQ4femfpfHB%2FqvNpA8b9iw0jW0O6Zn5SKOGNG%2BvzLMAAvWGKCSdf10K3eVQt6PJ7Sb5J7NjSRkam0cZuO9iNy1WJlWn8JQJahDHZ4uEY%2FJywwWnIJ3oJ3d6JBy7DmrBYpDb2CFNZx8yDOvS3v2pQUseLHf9Dn6jgD2u4qsOFlabvRbU5OtJRQLgIdxJdVtUE%2FKf7vBJYxssuII5LxMM6q6N4Vak25cP6LMLy94ckGOqUBS4QFu3kIDbdNRPLHbiX7AU3v2mobbyVR1dKTils5CC4PlzKriYKHrHTki%2Bh%2F7OCM8jbljYvMXV66RGWmiTs0w0GtOLXR2LVgVS97nVxqG9pKVqyCQwv7FICJ7Wc1zG%2FMQdgOQo1owYydxVE7FUc1rCfyO1Zxq9GeIkxjigehZsRDRKXryGlUWF74%2Bz3CN8oHagrLEiL7lTgcUzRZRKiZU6UB%2FEJm&X-Amz-Signature=46418bb4020fcde8e83288bc21c9dea05350f12cf61b4c3c46f65369ed38f8b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

