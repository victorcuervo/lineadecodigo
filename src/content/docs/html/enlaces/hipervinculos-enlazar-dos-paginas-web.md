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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466742NMPDE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T185117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCts71hvKf5rFQfmn8%2F1Lh3OtSs9OJpMtllmz%2B0R7ROcAIhALkhi2%2Bc9G%2FMxHQHPIYnIky9t%2Fjc18afK1O5qtxunKTTKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0ltMdDkVC8DKSWSIq3AMNSMTwJdl66%2BDJ6n7g%2FfmoB7CcWGkDQrNN816KP%2B%2FDW7StqjzsmRaV9MRvkFwV9x1a12vytc0W6z7%2FwvX5s4BH517O0%2Fn3MA26mdmquNCWNB4Z3%2BWZGZfKXKMFu3wn8JLAg1zdn%2BQa7oxSzw1SwTYcj18sGrhT8WbM7r8m4eIBEm6%2Fn2nv02P1JpIzog5Lhwp2Rv6dHf9RtKY6FrRXUMU3gzPpVbsoSD3vR0LgeKAWmx7aA4ILSD7IzxAcXpCSNwuW2gSUakeG%2Bzg8L2E481clCm7u9%2FJwW1ZDnYB6ecSywj8FspRGsJ81OeNHGzBFXku0BrxbL5lX%2BpYmijJq0POckXKGSpJ5c%2F7tO81uOL3J5Mhtq%2BDDvAkpoix6pYIgJtCkf68eDv%2BeuCGj5F9KB1y00zQWdnDnvjLA4nYCZqsoXgl7gzZUmte0NeRuf%2F%2BsNtZud1v3NSIXzjprPInYOHT02IxmjR%2FhTOEgyySiss32CXVeCnLK46UkzFIEKU%2BJWgvN3ME6%2BTbCFgqN98pPO2jRDKabp1uljktlXab2IZ99Myv%2FZbFzke5iJwOkgwbJpF2fLcCJe2wAJI6L1ITARUwh9GRhE%2BA47%2BzZ%2B3kdEyqBiqKDn8w0ntlJkFcKSDCitNzJBjqkAdXua7fNthlBjt%2FxXJ1uXpF%2Bv9EmJUgboa4AYKviX43SlM2CbUw5X66m3OF71BNrNF%2FzAHHgBfM1nh5zstdRRUgIaWrLDZrf1ioAZv4Sy0W%2BE6eX2pXXqiO%2FHonA%2FEB6EGdnGzdqd6yK%2BxHycGeOWR%2BpBYJNfa663ESuZ2G1jI5c8qzexwNHcHPuVjuQzz7ZW12020d%2BVKze9%2BjhzGN%2Fw3D92bY%2B&X-Amz-Signature=92d36dd0763e77e1354184f3f6fb07f9a51124df48b9fd1109a503b19a860d50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

