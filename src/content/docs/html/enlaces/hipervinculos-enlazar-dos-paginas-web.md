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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYMDGUWS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T004326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdAIiZBgwlEOirkE1jLyEU%2BbuYpI3ks3z7eTAnaKWZAgIhAKQAdoCpXo9x%2FmQU9qwRBZltNRnReWitCGr%2FJOVXQytwKv8DCGkQABoMNjM3NDIzMTgzODA1IgwH179TNOL24yibQO0q3APgsyzKuVgCLD6BehGsqyKTV%2Fa3fgYlP5qxuSvy65l2cWvhlM4CQbvYJinq4S99gW2UDFnr8G%2B55FZqoN7jptnEc3E52X4ygOp56QBuRrexrxCfzx8apwHt88DhUEpQNWjC7ZVz2Ul1uqFd4aac6EncF0RyUq8YEbGpdXiADhOEhLOHnSiKA6JToJOW83xzYx6eNn6nX8ixj08qqZX8ay%2BiPST9fW2TaOkD%2BQHdCZml1wxcBzjevutbVW2W35f%2FzqtsWxN5NF5xR%2FWa0zk8yYydi5Eox9LnSPDx2yjfbpdl5NL%2BO46BBkMn6GPKSZW6JW%2F9AfDPc9%2BxqzGe%2BGiZJX1YhAs4n1NbpDH18%2FZ084y8FLlxucW0szO14WgALyAyEf6N%2BDVp9Q4v7nrxca6qHhpBYdENd2YcL9XwdX%2ByHN9YjqIceQyrDEQAiAENVsPQsfsmJnGv%2BpATeXBznIzP6a4Ma9flRUcQ59Bsw0EIAOB1hsGiKN%2FZuxv8RhtW%2BajA2b9RGoLzpQoDjsM8XZUfKLDQ9wYsVk26rbpjY7Q12Rb4QkJjhPqTaof3bSiJJssnVN7i%2Fj4S5LCf9MA0pETEqW9GA28Jjj5y6KwyKEfWhN9h2%2BczvipFu5iSufu9sDC16M3JBjqkAams%2FtjqoeSqXCmNrrnhifFRuiEdNNvIMxuYLHvBfzEvheNd7xF359WelMUrMo2O%2BGf0ZuELeZTbEH3%2Bp38kQO1xCAUDqqaWjutlXN5%2BoDWJajCKxVkQLkgVP7COO78g9%2FPmk6SAvKZ1nh9D%2BhnUfniJ1bHxKeK7NjGCaXmU2So9FlMWycGVpAsxnPbqbMeanfGXHvDEktXZ%2FjMWuBvGAj57FcZG&X-Amz-Signature=8a2673885923256b849b1d59c6ce8b88c63c4877383ec3a42ffb7d48087cd57c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

