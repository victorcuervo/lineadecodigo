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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTQSGW34%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T031521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmA7fXRqvx%2F1zj5eVtVkndyRVENNdYmvvWlk2%2FXPdTmAIhAMVWiUVd%2FShUfWp7xFVylmY%2F03YxujxqoNohpzXlwn7HKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5lmCy%2BlVeK7kv3XYq3AMZoDkekVFCSwANwUNbOHWe13q9g9DG0H8LAby8wPYMWRQHTdH4eeWPevUWhjYJPHCdFEXvbUAR6o%2BOM1VE5VmwSCO9S7JGmnFV7MS91Bmd8Z9gXu4QXtok0xpAYW3p1vCuvqfZce%2BFM7Zi6qMEFgW8DAsROsAyoVHnR%2F%2F6ZcsVvM93iq0skVWdXHvel%2FkNlQCaqs91jspAI4zaaxphNBFNJC3gNwGiGvVb7DPPW4sUApkp8OIhocsdk2EXN5EcgSx%2F9NJ1GjI8hEorkGDx9k%2BSCvlwLfZYbiCXY7dsYi1Az2S6bNM%2FoifbsXe1geJa1dCukAsm%2FHfQZqMihQDwQp3ECXYpYdh5fYiYXeYia6uOa5AylGMORuvq9curyJaTi9h7vYC7gjp5jqOFhLdl74VJna21%2Flsd50ZKK8%2Bwil1193pE6eLYiKKVBqFca4hAsEolRTVx3JG62h4xQ9aGsKZ177DVpWZV5iysXhCHq4wcxfIprDcQ1hnS6prozLuUJyjolfPWhkFkmAbhUQ7LQpCItvFf4EsqqVzWRoOmcLI6jPZQiY9tzwapQqa9s8wWVAVESsrnz5fDG71ouBUDz0dr5Ps5pV9DCo80axAEvOLi6TCI4o%2BPITzON7wZJzCk%2FdLJBjqkAXI9IpCKEns4zoQkrCVY7GvVuNXdgW83Uki86UX2N3mNg0gqVPFY43GP%2BPGtk9W1%2B5bGypWmTUi2B%2F34HvD2iBSO4%2FuI3rBTn4kPB2qQKLZct25wMT2A48EsCKthCi%2FcAuwyFOkBR0I8KxjguP%2FU3jroBC2nei19s%2F6DviXisOiy0V5lxrrEoEKE9iEvEdd0kZhGCfnnq2r3ymgu6CT7U1jCYVLO&X-Amz-Signature=5c020837573231aa1d3faac504720f6508dfd8737642f2725287be18baccac86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

