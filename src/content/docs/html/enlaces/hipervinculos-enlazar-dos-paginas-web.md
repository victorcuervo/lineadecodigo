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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF56OHGK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T055053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLL9S30OwyhKAuZxc8%2BQ1WlwT3M1UDZZgg4onebZ94TgIhAICSNhWs21GjlANXIPUyw8WIBRxxUk8zDpdEZUMrpQmUKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVPhVA12UnSArhNbgq3ANdCH3S9LDG91aQogjbB0H75AtsY5ery%2FqyOH3GsOl0BttUytuWz9YdpNsPqSuGYABPAg%2F9cDA%2FoabgSo0Y86NAieOpRxKoZC9gkLgn0hUqzrh7pa1GIaWb%2BQHCaicn4h4BDGLQDgmOfbBRqWUUVpEzUVtfC0Tbsdt8WiYdjE2XrYLFckiCoYuNlAL8atyaJDFdvymuXMIXqV%2FDewGWke8C7hR0%2BKWGq1S%2BdszCyO3EsFyyd1FZt5%2FnoM3uPaj83Wwd8tD3E0WWK9hN5nI3c9QSVdetZCy%2FZOy5mUrZnepmgBMT9KS9mk%2BrDDQQuySIS75Qu0x0%2FFZBjBXxmX6sUdI4Nj3QdSezDH5AORel0naDXMdEdMvKKrtGNuzQiA5TMK9tJ3wBOhyosryvvZvLokvZS9Zb81v1Fs2cYGi5uUHTFRq5Qf97xqK3NuLu8G4jVxYeUECBE4yVAm%2FRKne49LygMrzjRma4umNtVcZ2izgw7JU3JYKiwzvxiLGZK%2BHjy6gnysCms80cs%2BdBLtB%2FS%2Fgf0PorJnGWFk5r46ATOl2fJDUCXx2d5w5HYvK1u%2FsVIphc7%2BwcjNbDLs2H8DeDLIb3K%2BNUlQVs9ED6YktOsHHZJ2ZHgswxx4KzCNtWlTD45d7JBjqkAWxVX5jtmgPWKqPhEGvM5GRRb8VRrS8Ge66DXJfzjYyeM%2BOmCKsQs28kG2oDX%2FWp9sEzCk0liyMSy2clQdV321EbFanGX%2BFzILQHQFXnKiAq6j8DhonzGdT0dNR2vpDtwGf%2FNSHUZ3NqTexgByvHW0ulNaeQiUNts9GTKByb%2B2aRJEYGLSFYNNUSrKrj8JW5PAelpwpIxU7xOJ47uJFRMhhRQkOt&X-Amz-Signature=064117a73d82b76038d54cebdbb3b0dea345c72442fad91d40e5f52458fe0be2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

