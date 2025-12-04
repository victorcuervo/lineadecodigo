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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPNTZMPC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQD3vK%2FHRGd3SSk1A0lZOd7YoRnSsWX9hO4BDbzvGfK8PwIgC%2BrQgslOUZhNGI6CrJ9sivszYNGGm1awFtShTEn9sG8q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHFWAwxFKK2ihPOpJCrcA1nNflIcYW%2BKFm6dQZcB%2FHF7WjjsFVGucZKZG6DAWMwlOhNU0ErxAvMlyhxRz3kwwyKcLEBELZJERTADgkjcivXYl9FBS5qET7HkIR1wpC0Yw9oq1UhE8cEmtfN6CrD7GI9Tft9MWx7iXMwImM7xnXRDwsOlH7CxjxYCWC4A3yjyOwAzsdm8JQ3WIxdNvlhq9focy%2FdVT3edWTS8cI9pYhudtxzJIVThieLoO4mA2KTS0tarxV90kBIuB6G3jBa1tyWXIr3PevgfMfsOzp%2FqRnSe9YJdRCs0pKBdzfrxxvw8zUPlgnmjRAsJdpXxkOCYJHk0QY%2B072p6COLvneK3n%2B9J8azP6ayVDoe8HSEe6CG00IIIRVafwgM6%2FuxaWuUz0TRjQjcA8VDAYy1ktRDpB0kP%2B%2FbsOwvqHEO7ZFoDErmXwWBtaHh1qyuGld7m0wCw740F6PGwpwKVGnmmzWbecfP1bdyTbqtpbYS6nI2aKjmxIeEo6z5t9caIeQ%2B39VtlfvY1F7u%2BCepdCI3dCG2LI6CLh0SzyRAG7k9ynstXZgkZ1gk%2FI1UuzpUusTn0ZrvwJYWSEZvBASV2OACS0nwfz7uh1yDMY2jEkIeMHaZy%2FTdHebbqFe2O41FqTKMjMI3pxMkGOqUB4kleutIFrxyjnXzNbfeoRxDfYJ8H1rj26fP22Iz3NEME0Zy7eI4W%2BP%2B4uv2c72zeUPjoJcPj44gOgM4N4PlPK8txZT3U1SAU5ma7MfEAG6rqoXNMx%2B5EQGSWKbuRgcVRb7YfPGWTug4wknIE5%2BocAgIFs0h1HBwZKQm7BDpicxiyDgsbNxnVXvPuuSWUjeNXjWoWd%2BbfBbu2YsZWU5CkaUSxMn%2Fk&X-Amz-Signature=c442cd2ab5711ac3a29b8e36b0efac0889ac038f10edc36292b8f30e6225bc69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

