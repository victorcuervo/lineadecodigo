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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQFBKI4L%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T032549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPubnEKKeAhUu7tFk%2BzGn5HE6P%2BfF%2FlnBlnhTMQ9DeKgIhAPRJH0RLV5pnQG7jZHm4DcxFg5Wo2m%2FcQvlu6kHYjhI8KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXoD8ReHPtAZGbvxwq3AMYsLo4xbw1rQxlUAMy7vyrFBv6Cy6tQFiGy6fLJsfdFBbVVLp8Iy0MyWTbvK%2BVmd6PvYdWQcfcE7XoWSWzYH6s9iDX3EZ%2FZbqYjSAVoELM021kRmHmiAPpnn5HYtiUVwGEd5wZ6yuUkIvDtTHxycgtzBmYgd3NkOv%2FExgib4zLMqhfkjwWillF8MFZxXyzRZwxl%2BqzR9ZUWpzfNx%2Fs3u4%2FJ8iuv0luOzcXIbPqks90OigcYBe7uD2np60G8zautK8sfszuP3kSDhA4TlOdn2p3c2S8DFkYNaAZPfKki6Gv2brxoqWqbs4zLUCw0db4SUWzojhLldkXId0%2Fu2ExDid0pJg4yHrpr4uYjz9vMvbqzAGV9LbNkpoflgatLj0ljajqrsNMfiqdF%2BTns9BNytlej6Qt5vh%2FjLc4EyF9%2FmP%2FAYchfl%2BOs9JJyIQ1QOSLq3FBeHWMYIfKeagH0wroD78YUjdeXWdn7%2FSueeqPSmxWjPLkm7j0JApFgVTblQEmmwzkX7ksx%2F3Wz4ouwzJ4Pjj6ceC7bKlHHuH8uY6HGQDLq0ISAL%2BDRUuIeFdXnJ1UHXvZqUQMsFAvVViUhroUrpl0Etyt0f5BarPKbljfe9xWvSeKegBpe6wNIF7DijDj79jJBjqkARkNcWTkD29eyvc2%2FIp9ZA9vWjGdgyaw39K7oT90CCrDw6S7s1%2FB5orFPuVGTJZKZRYEvhBIRw1jYuuTz7%2BUM8jZbFH62IERuVULBJga5bmhWIbOcEdbNBRFCyTr%2BmHM9zOc%2FBuBp32WOno7ZJHrIXyPARSEw3EoNaiDzQMiV0mmcwBkJOisxMJs5nJ50JqFWySSIKRQlXoGSllXpvgY2mQo8tU2&X-Amz-Signature=a97a489e2d14be94b1022f793b7c4999765b1a8a579e6e7abe1ab71b240b08f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

