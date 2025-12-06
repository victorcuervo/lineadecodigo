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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCFPMTKF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDt%2FcxxBMUZMKPOS4Q1g37YpA5zA7tHhzhjR0d65%2FS3JAiB2nwoAxhQDyMaVq%2BWYlciKDG6kWIRBgWo31Src57%2F8iyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM%2Fai%2FXZUYr2Hyvi%2B%2BKtwDbghArvNY5gBFVyc183KBr5%2FrI4AOEXMLPW6%2FegUkmFqXQLU%2Ffj7bqT1TomAB1U7G7tFC5ad1pWiyKsJOx11gvCnn6bLnijayayktGvVDYwZBlpxj5F%2B7AQ5rZgftRVe4A8P55Brk4F9b3d9tVxp3fDaxuvImQXqLv7wK6hZEbDTM7IyTm91pVjNd8vbo7q4FPikfo%2BUs0sfh2YuvVMbJaJSFexTK3VnGEZyKWCIT%2FLv2QDguJ1Q0p7%2F%2F%2FW%2FiDiMFFjT%2B9mw8IP67FJVh0tSh7%2FGVu7IIeOIL%2Fq22afVbamhr4ECsy99WL42cDoff78zlV%2Bzz9kXr7rzK0aPvl31GtlxaAYuP04KJdaOZUZJevJLjIJzTuqIwY1sXqSMS%2FG1XE9AFccdOxA9xGDVHgX8CFTtwa1U486bowSPdjk1ltK5snVOyphkwWgFPKzKyoOW5DPzfSTb0T53jx46kEo7ANLXD8VAQU0c8rpMRL0NNenvKo95%2BkKO%2FWTIOSWW6oP6vETminenZXaS%2FUVcmBnl3G%2B2KcyIWAAbhqb7O4Aef%2FS899KkVwBDmqIJi1UCfi%2B%2FUeRqc6fUmBgOIjy94VI05ELI4hMnbXoAfb%2F59PNXAgryJOByHEikejtWAlAwwiZ%2FPyQY6pgHTQCzkCJB2Wf2F4wZWRADfo2%2BZWHwNqb1AP19FpslACzhoPhX4SiZ1yG84cvNSIAaMWhAcSbDoMSVPfmecsHhhD%2FnZVYlLOQ3AHGhvxemSt41y8u3owKhV4oQfaCqSnS96Z2pR%2BRi4ZG90oMTyP7MPX7BsLIs2YvUpdii85QwtZTCpfPfA7bUQ%2F7gqFCoc5b3XwBVWjWkw7btyQ6fdwK3dz0vqmeMY&X-Amz-Signature=22031f300f7d6bd7d11c7926ebb871144512a8e35ee42fa00fa5553f6df1afa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

