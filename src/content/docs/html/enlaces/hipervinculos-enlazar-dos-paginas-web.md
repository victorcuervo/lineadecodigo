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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IBEBFEJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T012643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOlM5ZhivGtC3yGNDaMM7VBKBkJICZLvIzPF6fXG4ESQIhAO9JlHYxBE4Sj%2FepVfhqUyMBJvcS%2B2PGO%2BxswXvgqDlvKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwa9nBsknA%2BHQAEwcIq3AMEQ92l6CitS9bFc20CBbbGsGfaTKAC2yw%2BTjOXyOPtdDSiBf7s2NFYdQdkNLj2uDUjrPu8Mb2fZXMYHP3gd%2BfxwhqW%2FGRPvQwyMDZ6bo2W9rspZIV2d8dMeOg9%2Bwb0Q8FpQy77nk9Qah%2BUQYatTUePAB8YMY%2BBAivTE6IpHS8VxojuQFGzAOaSOZwWhetjZKGYoZaOnMo6J2rA%2B1Q0j%2FB1qObNVcqvvNd3I70gNUSKhCH7368OldgIpVDB72NCBk0Hu9Yg%2Be3eZuz0qE%2F2DLqwnqaV%2F6TfX1YOSWtBXL4zLma9u4gV2CMnLywm1Tb4SuO8WOoftNe2W4lVvI4ox%2BpTWZII5FbTGXXMEU8oJf6O7KX7vrUj9YsG1t6J67z78v0UrPZiNh%2BY6ADfikUgWgLemrivzDbtmcqIRL3FD3mzgPtB56BviGGL%2FWqtsnp7HX2%2FI3g9%2BhaVuMNTO63Yho9yuJRbVuSO4NJK4PFSPGbVe4HoOXIRyvaQhOdwtr1ztbHa7GvusQq2yJ3gv4jUhUJqWAuJ4QYBfuMbiauq2%2FKfEdiQJS7KTo3dlB1hdPyX4q8HW%2BKlDTodJyRX1YRXYI22hFsw4n7jM6fMdq4bT7mKI5O6DKBjzkkbdSGJEjDw0NjJBjqkAeBWK3Nim%2B55qGbRZRSQAySf8%2BXM0spNAFc25G2P8nTnSPPpA%2BchgF4bWyYok7cgPtfAqCpOpAgNyrFuyqWab9WApl87xs80VgFduBD%2BdKqgGJ67iI96RSp%2F2N6I1fCFahggjwAOq6eLHplRXzZAu2AXC%2Bjuz93nRbHNM4PmHhWeeJHIiwc7osTsgIWXFuL3ece1kZ1RrKPV48x6ggroVVb8luGB&X-Amz-Signature=4bef582897317d464798da578fdad22cec88c8259b61fd1ce460ca59eaa7a1dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

