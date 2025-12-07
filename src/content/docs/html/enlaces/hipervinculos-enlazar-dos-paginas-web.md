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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCMGSWIM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T184415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHfQy55jflqVKg%2BlLpZqMV0sJg%2BwxfrzLKT082OXPPXxAiBZlIXHvZLmXmhCNByA%2BXf%2BXv%2BG3IVHA0MizlYSIhN4sCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJxF1uHwFMCsiD1AyKtwDl%2BgefY17PphwlLwugp0eRjRWIdBksLxZRmejaZOZuBTVmjOXj8ykkKdR%2BcHPBG%2FJcyxRf4ygjdY6Klct81I1JukrI1JgJ53cdkldd2pYPMVzsk%2BUmQ%2BmzD%2FB1paOL6sphaStrSXQMkrpqqU2BqKw3c0jPRXv764DfkOxUNoY1As7T%2BlzHzANs4JhHAGFyOvNPKYOfY5fECyuBxF%2B67v3tXgIqoJPrxDJ0osVgd3xGa30OCmhicb8QVqPKNGRyPFNoOC9%2Bk7HQZq3dLiC%2Fb2M2DZoV%2BHxTW%2Fk75QQnYbWPMakp3Qg%2F2w9zpviOoH1t3QY9yCHsk0E7GAfQSN8LvZjM8zlaE8G%2BVEr7BvbRNXckgRQ0jx%2B4Rs7DI6Eb2thGHVUc9XHmGGLs6HSaWLCFcyfsWzsJYbbb%2F6qSGlCFiFqq2xPbULMSWQ%2F834zjZP6JagQbrAuPKJTlVRMgvTtF0oT%2BnIkgeQ3Uc%2Fa7VUzqfyptv05huj4QiFWE2ed20%2FBoIxBur9xSABzO1p1kkW5EbKfG60cZd2%2FfpyUlW7N7oqU9ghU2lAFxjqCcdJGzVd%2Bs2EpJU%2B%2BsNpjp0iaQ%2FDzxeFLSNNmzUnBorovxyCjW0TNLDflnWexInzm42fEBCsw3rzWyQY6pgEjTO%2FqgPVz68NhcIaw9MKN6dZ6vQm1Em6ne8bNsfbwc6rBsk7o6p7%2BhJ116SIAoKJMKg%2BMX0U02yllehUgy15SToFIDW%2BC292vR5ptbBfCf0m1CgsU2KCksKEUqW%2FLTG%2FLP9icvcGucBoE1GEjibpkCp2E%2BtCUjJpoeCqrDSyd9Vzsnsx8BJ4mtOXfCore2AhSEEVnjy1nt0RsoEDHQIhtV0jVu6hF&X-Amz-Signature=e8ff917f2e7d33fe6a8b4b7d76c301c9b8552ace7ca8706fd78912f8a28844a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

