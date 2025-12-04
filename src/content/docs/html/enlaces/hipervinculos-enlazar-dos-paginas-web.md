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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466365H7HU7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFfqz7YBvEN%2BlAOD3QOkGjlgZ1g6KRZ1J0JeumVcYM0rAiEAmyAqv4XZdvQ7P5oH%2FXHsPYnvINosgDKlKwTTTFXV2Foq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLkbn1eVN4Y7t8BC7CrcA08wSSBcT1YDertAOZM5aYpzm1G20eiL7E8taJeQ4kxM6q2Wx04cJ8gI%2F3qLR08kv8ttUCsg7Ybml7wx1n9SCAwiwz1jNR4oF0FTsEhBIAH%2B0MEb2eIOiNBL7tueF6UYo%2FeffmDJLsGYWLWc3tVd8ngZqdRCgD3ykUJ%2B5kTUgJkuSnr9z22WrJ8HPAlGhMMIiTNfCo6K0We%2BGyMzrzg1kedZ5rgU4r2i9XmIqyZyec%2Fz4Bd8ylOpf%2B4GfQ0OZo7SdKiwz3b8TmK96%2BkrW%2FsaSRllZ9KaT8%2Bqp6puWQ1NKOeGdc5zIEGo1Oo9jj2luLySt7US0y59dOhTmM1nhNfNGyT19axnpOMyObqvYAVT6byzG9h6wAGPaYzSGXBuaOt9y3qgYLmElklCTrEH3I3c1zG%2FBNrEcwim%2FOjF5orS2clx7lbBPXQsctbH%2Fl%2F4ksVQiw4KuyveuZOSh7W7qhW7JsM4XUpkicKZ64Ej3OK5C2%2B8XJaS%2FEbvSqX88Y7xLxbUVGFE1z1oXZePG2KoNvRoQi04w1%2FNdipGi%2Ffdvefi57dmIPW0nhYgs37uIznyLUWNutMuY8cVvmiyx%2BsS8OlSgW9tWwX3tObGtKVeo83a1e8LMGaLmYZjROOuOCgZMIiQxMkGOqUBP5OGrj%2F%2FE1U7OHcsm%2FNkzLquGTES3e%2F8wZqUJr2V4fnnhyw9ezNxfBc0FCLxS6%2Fb%2F7T4qpqtgsGsKVIqKKvt7ABDVkFywoKCrFVTDO3V9JcmFgY7bY%2FfejxhqvX6jvvUtU3m3425KmVTLALTlBRM%2B9ebTX7arSEOFm0OPl9Yg2EAuhqV1TWmKKIYwIzgjlEbidH%2FMTXVwgpcE48jtv%2By1vaPk9Re&X-Amz-Signature=0a6719cba728c05249fdbaa72ade03df86d5444952f2f55761c7162b4c19fd0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

