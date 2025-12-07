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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOZWGL3K%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T005913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJJQuEtMZdOESpKpR2ZHfa%2BXg569anbJ5Jr69Jo0KLswIgRqS2TjlGS3TQdwb7jp2uKQL%2FPb8bN2yw9WJ65g5seBEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZRfJW%2FiTlGV2NtZCrcAzau6vIju1vNxPh%2BA9JwQJFyMIUmEjov%2FtJxZKNZLq5DxA5HfZP%2BH088sB6NdaCjiSxyRQITKpQ3Wg3INydLF3W7Isyz9aSWn6HPgZShAk0YNyDR8RI6I1rZ1lwdjku7CxrRW%2Fw9IlUSuvIXgpbVgFYZ7TMRFyJep%2B%2BmyeaZ81qeY95BheOQlMeD6J3NNq%2Bk635jO5IspzLaKtUc7%2F52nkMjuFkDcj4UIWjP%2BnunmcIJf%2FcMHlVqrnnlGoYArnpgHYY1C92qab9p9m1P6AaN8HREy54zjMhgC%2FfsUUZh%2B%2F7%2BwYJpmi0MkbeuitU8zUdCyX%2FItanI7WdBZ4AOeRxq9BTYqgfudUcUgDM6npAAqBr90W3Lj2q9isQ6p74dv%2Biluvx11YzdiUUoCvPsW5HP1PJNYpY41LwnZIIwrhgYcb9m9ZAEHKAS6lVco%2Fb93CW49LYvYFYq7Uu%2FN0CD1RE1ct4Ik4s%2Bjw6AWozBzcye3shtFSEA20muZ5TzSRfld3eXiWEVHnB8%2FKT8EyVUPca5l6XY3thzYQEsQcN5%2FuNBuQ5FwPvFmAQWyfr%2FphMqitu4MjVeq%2FNySmW%2FH7phsPKjaRCYE6SFjPrXhYNN%2FYujGeO0UfTJe7J75ZwB0WoJMKP90skGOqUBIAvaS8cky7ZHK56qdKiFRHiZwAtTEprXvZKOPV0jeHsz86UgA%2B648hI86uXXAHYMdlBW%2BI18%2Ba6sig2zEi4SysHCny2a2nDajYf3pq0cDtrOrMmVCtVSS2YENkVTpv%2Fh%2BDqLpSyJ0MOrZak9HyG1zlWdJDX101b1Oa7zqNypJOU9OoIAsNYfhKnpFYYyRYrKR132WYibPyx2LEG7LGS7hrsLSR7P&X-Amz-Signature=c701ab31934f3fad637f3467cddf2c6d396e08b501161fa7f44a730a7e6130b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

