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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBWKRI3N%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T002656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGn0baLDq2xPvt7urZn1fahSdvZUOzOJ%2BC4iuYlZReGwIhALdmUGKXe3ys8Wi0nJ%2Brpq3B8TvtQG4rtBYMW4Nr7BjqKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FfUmOK470ipOAhPIq3APe%2BMjPgE7zywzHFrqdNfM73r%2B0fSzaOen1UN7WcgG9mFq4eMYYnnrH14NGXAanw79J8Zm3X4d%2BRIG5ayy3TfJ8RtU90RtHMNfAns1ZUQnoXn4xSm%2BsOfefrctNZHa6gBYeWOlyNtPV8n4gcaSkcQfTXEFcJcpMSeg2947LGKsJEJYrMUbq3zXN4e54u9PxcRYsDKQDk1q9fDJLLrzys79Le1lMGD%2BixN8ZdyZf9pN8yc1uEt7Oz0roCmRPUOGC5ql6V9mRTZ9EiIcnDnK8r7WpGwRuVhTsCPeta%2B0L3AeuzreHv8Dk128ul7ixbJidPZXHABJvSzQUwB%2B3YB5dmOvClWUHuKBGsBqI2SVWZlBOA7rdUohUlWUIv4oFLSVykltl83s3akwByH9U74q4lDJ9U%2BQoWm7T01mV%2FLY6I7oV%2FbCYyEqYWVRPHYC8HsaDpiy4aZHuknrvWFBpxZYJOzrBFQf%2BJKgzzeULQoLuxE8PECx7BCIWkzxeGsZKNwNqw5RfGWRvrRdtVtaUnQ47aR5EQdNsssk%2FA%2B8LcNwamVLk9a83sdIiVRLMTj6JjJThQGLfflF5VR5q2X1hvSsOk3oPm4Jx4HC5eCN4qala2J1GOgQGuAeg2%2BluHYhn7zCP%2FdLJBjqkAStRWx00PtZMC86O8PSj7YCWWJ%2Fhw%2B3Y%2BscqOKHifGCF5myiiazhJMrrS%2BJS0oXQgJUh1QNUzxRDp7gOGB5YiTIz7kAxYJy0iOGMwzGjIubw7or5pH%2F0diqOKbONhCc36WBFIdDD256ynM3pS7Z6PGtMGV%2BSDXYz%2B6rwr2rIp2LhuDrIimPga0STFKc2mSeYbJVTGwschkuXO9OXwkthc%2B%2Flw7kl&X-Amz-Signature=4c2e4addc5acd69e424b7f70c521511507fceef88c84bdf60257863672e1fc9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

