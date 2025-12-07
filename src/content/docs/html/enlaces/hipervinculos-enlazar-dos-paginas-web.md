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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVWS67FP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T062646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjS1vI0UH06NMaOiPU0GaqewwqJ%2BeeTFfOA6f3yMQzEAiEAjuMxLGESgUK4L6%2BFutWxEE0tFHZJWYSjl5Snm7xIwXoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJW79rHy4zpd3uxIJircA7JGN9b%2FPsyslt%2F3tBLI1D4OKcfmdl8f%2FPjNSVNGDZ9jjV%2Be%2FWcJxbqJe%2Fm%2FOgYa0mkvepqakLEzPVktp6xzPYx4q2%2BW1FiJcPg5Y%2Bzj9dCGDW4N7sC0RDwKfG7ud9TXCNrszh7ihID755XzZqbqaKS1mgWY0zXr7qbuhTVQMnPIWSh2Mk9on03AcVTZ6aYMqJ%2FlghJS8duLdWBo5pWxXi04h69sJX1ed5cb7%2FycrH4d4OFdnV2%2F1u268tGFsUlNlqI%2BxNSW6VymOpz5dc1JZY7F4WEfK9QhUvfYOZggrXnp106PMV4LOZzGmHBpgaTPO9Aro9OeM8icQqbgKu%2FuN14zoI7WiFwXNrRyfkLzN9kCqDA7Hzw8O4JtQyeolrINLzcnEkleP43f0mZcVHAJ6F%2FKWyJ3Zm5eMtC3vUzXoJieRh%2FZ8QntxySUndBUjXR0lWD0Z0Z1nXVeR7MvBCk2TVOW4%2FjJ5Y8j35YW%2FL%2FYFRDZ8G%2BuN8bamVezDN5ueAfR%2BUKhTGZKB76N17%2F3KwMDCu6qDOC0exxWFuD9FWaxvH%2FP57mcd0b0o258rmkPPoBQT5uG8K0aZyVWy2bPEasaVR%2FdfceJWPAvR4B9g0DALe99D2vjp8m186vhDusaMJub1MkGOqUBuFVzb78hTqX%2BRsaU0to7UNx8QKwVXne3mihLFOHri9cmWNn%2FnrRnELYJDj18N7EuyJRdVOqVz6dRyrNeZyzvw9dlyVOS%2FXgsQe%2BosuQXVSzF%2F%2Bn41Po5kYVSBAIytgDom0q0nQFFBf2NOPAu6JpqhD2moo7EuEH%2BqWBivhhDVtgNepMfs0v6SWcj3ynKG5QqzgWPQKZOXjnjzVP5GiGMvgMsgZWL&X-Amz-Signature=3f6210cbf27d951b5b2986081955078855300396d47bf70642231e955753027b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

