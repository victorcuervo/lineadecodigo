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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEGZ3J6Z%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T024707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChY4rXRgSYvm%2BdztTr4YCZ5nuFbJ9QT3uoKxafLnycWAiEAkvU5xQ2MIY%2BxAz74V%2BGxkaU%2Bv5xlWwPyvOwjhSdvpvQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOYi2Z6reTZeNLsbICrcA5kgMf0g3EqoJAFOyFHnoqcSPeyUY%2BoEW9Hg0Nm%2FCyk7UfNRiWXrV0XCw7gZ7U7GFqHlSvYrYC7xphRLlfqDtBT2ivZ4mAnK%2F5nJVS0KiAp5gljBjZWdI1vEqwo84zI3EnwBOiykP%2BFLCMIhqWDnZEoaXjF4c4Lm2RXEzng8TZAqUqAp5Twow6jzTqqvE2NVe622BgcEUoEO5zBsqqSzf0en%2Fz4aNQAJoFXQyJC%2BfUQYaS3g%2BQnn7oD0ghPTRyuqJW31CjEcujucjHgbsjGBIWPkZPDTNQ02egUkXThAOxT2P3QkYAJ2lEiY8mk9sfoUeChkdocDRzq33JYZaLwkdYTDNvILjhtaMDGA5VJe%2BObGmEmSVvjc%2FnKV0j%2BvkV%2BJ2NPDVypl1QPdvqTkQHVi6KpCay3dNLhj9Cf3Qjwpd%2BiViyD6uw6ktuYvM4jMOJnnjGtOgdlUwbgDx4dgx%2BhnSnSGeKOe1LRJfcbzjVCy8ejvG%2Blvo9w4MsOvqQw43XOjDROIG1xZGxxM9UWOTphyk5%2BNsKogvU9Y9%2FEavcEcdwQZCC9dmXYgoQlmidLudslUY%2FbSPZP6d3BlXI8HhCzV4%2BlVPslaQALe0mIlJKbx1NDUH9dYkj6RkTV3WFDIMIvv2MkGOqUBI3nCmmGKccEAF5WBF5%2BntV42jkMQUhv%2FbEp3ly4OyI4vJ%2BskREj3cHecDB0ATLZOATevQGOljwZ9Q8FBQIQtiXTizDFQpU6xFHOv4e%2FHFdStsmU2Xj0Zy%2B4QUvhXWA3lUeL2pm9PQ9EvGUPz0IGwDj2nwQKX6KlWpj%2B50XUhJAwb68sI3FIZK69saO2WLHsBVNrvJTsibeO2KF0ikYdJAW1jDn%2B2&X-Amz-Signature=5026f705d29d002cdb7a342fd686605916972daff109d84512297f0d69de8d82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

