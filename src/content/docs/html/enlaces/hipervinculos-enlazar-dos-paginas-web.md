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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWRZPL22%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDvviNasYo0epcIYFAAkHnKFzbjqUchdpqRo3lC7hwvwIhAObWyOCLkxMcLhJPgGGFYMhe7qiIzkNRceh0GQZ5k3qMKv8DCHEQABoMNjM3NDIzMTgzODA1IgyN0mU6DqYb4Wi9iRUq3ANN9%2FEG0qRLJpKdZqF74KsahWGXvTPu3U37KfAE34rvPxjE%2B8hFF5Mb51CLEWvKkxo4aWGrQ%2FrJ%2F7qu7yxChFAqApMl4qxQyf362F4yyzv2EyIderas%2BiZ2i67OEkholJbYcsAY4O64pMhtFLNzFRu1DCa36oJ7Ci3TZZAJuXQvYBBBDqdaBN3sXxnIr9zit4D%2BXNqBSQrkiijmiIYtX0wjwwU2w%2FBq6hW%2FBbTAT1KcKHaoWT3GknxbNLJpMg6Y3Btz4nSfqS53I3EfIE6PMnosgXeewaMBRsT5jPqHVnDXe3%2Bk3dxIg%2Bm4AvXF%2FgA%2FCLceOtXXV%2FhsKQ%2BtlqGQLsW1iuFaXkpLaXBM4nrNwCcD5yg8c63LGag%2Bm505E65iPn6%2Fhe%2FPHHGGk9cGY3uJhCicHy6EJOV7Twv8vAbC7ksCvwDXn4p%2B49DlRAZFDSRJdSZ9oOyACBocu9nvz9clRx1vKN4C2EyRJJHBAQjtjDFJQB48vIYwc%2BIaJN1ov7gzkVE5yISfav0G90eDZGLFWFmoAqO9NehRwTXNTwGpfZ%2F0wj%2B%2BO6%2B0XAPWzKTsAJOpRV6uAemQjOXM6swiuuoHyqKCsgNcLVHSbH6b3LNv002HFcz4XHo9xcyMxOHoejDZvM%2FJBjqkAW0Q5hwwnZeQ7Fy%2FZy4jktFroeA7LYFgk%2FroKAYKeC0L7bN72LzjIkqnWu1M1bEUQ3J85rZE6Hm7W49EjrZvVvRlWweIql8DgJ67JmgeVWQPAjqBpjdKfIz3gOYzBqf%2BtALUXQLEu881Zfsu1CUhTKqfXEXrI9S0KPugl0lyiLOuugJh10Y8VHTQlZFMu%2Fof3iEjRSZXpCPHeooQ8tr%2BxyEnkddV&X-Amz-Signature=ee715607d4b29e2a9cce05482111234b387bee818125cf40fb84eeb1466a5add&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

