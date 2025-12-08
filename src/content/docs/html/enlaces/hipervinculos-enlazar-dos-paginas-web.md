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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CIDWJ47%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T181701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVEdHngjmC167rDuCWgZDzJmIog6wxbpK%2F92Mcf8m1cAIhAICaGk7AwCNu%2BXLFXwA6SdTdrg1AIgWcF8FYFzt9RGXWKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEHA%2FriJBfXcnkF%2Fgq3ANpZDrMssyF9%2BXPoY5H0CIyZ5qFETV%2FXyeABQuqMhvf4srW%2FGatE2CIB81FskrTgSmtkEEQFgDYsnUaUMVWUAXiErkPzYRx5NUWu2SLpcykVtuV5JIuVZBL6EWQ%2FdPuoRcn6GYt6PQWfrcccdJIsQ3fR65fULWnodMEFzLzsuQ9lq6YqzEh%2Bd3halr%2BMX4BDuAUzoOYdU1CRcu3McLlQBspjZTB0jJ%2FvEImqGPX%2FCDV2Q%2BZzfLYIZDp8PUsQxgj9GThUHEvaz3DNTAbZpWwMcqu%2Bud34%2B1rYhYjNJd5MO3DULxQdz0z0oIlsbTrs3pJzAmN2KQI7hHSVrcmUqChqr9MJKpIWTRlN1pB3xSbn%2BTMsqmEFJY%2BBkXdxdmY485ZnHFmx9lTY%2F2WtpX2L3i2QYTU7PY78zlNSAvEBP5TVksXcRbZgwD1eMRBAms8QUKTSonVLKhZbFi%2F3mISjpVm0%2F3fZwFcHftmqk9nGHVs2RPtg0qKqzTT7fY7sH8zoqOWR7QzG4DA%2BBGqa5CWltBP5Rmrjvg9VXJuvoamCv22cngBxHbSqAT03OyomZhYl6MNqk6iDHMLpTA9G5d9eKD9DbC%2FokTyQUZ64vEOKYIU6AARtR7iUPdMZpiiZ1%2BMCzDBh9zJBjqkARLCUuEAaS5G78RpnTVooewi7oQytKLeB9NE%2FkuzM5p8Zw1DhdoGLEDi0ZqQ4HOf2UXL8tmQHDQXuo07JKf9S0xPXFYh9OJHsV6vrstLIxBCE8IhNt1CD6dtrkSxZm6WzYh8K0%2FaxDhKDJrYc5rwtbjt2fuWLxq1Bhb3PTVES6KXAzYwx1zW7myvgP51vj8mfFB%2FzeiTkWIaGr4Ejj3QeYN68vGL&X-Amz-Signature=3d2fe89eddbbce46682b137dd6822dde6f6256d29ebd692d5b33d688a63e6d03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

