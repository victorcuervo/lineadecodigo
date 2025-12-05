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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIOESO3E%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T142035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfi86GGtEr8IXgnbodb26dGtLuitjlsMxYlDDQSQVC6QIhALgyLn4p6d5GPLGsKPxCS9n2jx7j0nOGk9Z9U5qcVAusKv8DCFsQABoMNjM3NDIzMTgzODA1IgwCTKvXrDGOcVEWNSMq3ANIC5UhuaBZKXOarfSyFLtyNub95C%2FrI0rEYb0qt%2F2Nbihp4nFHxRTL4z%2Fg0eCV198OyRk4mZ8vkV0jWDkjb%2BDjZMkhOUT%2BX55xIR3Qhm6BfLsNbfavCsSEkH2827W1LoOG16SocQr%2BZIlak3STeTbkfu6EeXI5GnUuxlY%2BFtlpgOw5Dvg1YJgss4TjnYv9Jj9uQLIYqSmy2seqQfTxoJ1i6j2ocHW3Jb4k2Ofe%2F3xYTa4YQUljc3T83ZbhqjG844%2FoqXDOi6xwKiH2ei1EKWYQgzJghnk9BYATwAxbQsDj4rmZMv35Q2E2sCcTdC0yoKkKIxTdGoluHWmZSY0oHBe1j8PlU2PBKelqunf1ppHgGPuagOzOs2Gl1rWmn0UU6%2FKrBFzwpsWbAUd85TLj%2FTwPMZvxdXwvYqTxe3XoeYP99xTm00NLx6DGln2PqH%2BSpgYvS3kTlQEfJ9UTHB1nDwFcOezQpo6JQY1vS4BLov%2BZQTof5mt8r7x1mlOt%2B6aQQ5obhmKtObJrArtQQ%2Bl%2F4VCIC03%2BbrOUzYOKQVLhugMU3FG3of3XuPRrqxFvabGsyZ9HZ8pfO9WEaWh6phMERmY5lrZXxfpC78bhf15DIz%2Fvg%2FDnjEPrJLHYj2s8gTCo1MrJBjqkAUOYDIBf%2BN4KqmspM18%2F3G%2BSg1U5SwX5M72RtRIc4xU9owDyVmI0DhlTIN4sMqHAFbw1vYN4etQcBtsD2MzDf21w8i3MrIslFvtBCwMkFAGfFGb%2BylnshkE4Ujcnz1yH%2BjkRhdS5OigOBPDffGCxhkahfpBbXeDLR9JeA8VDFgvHoNuKfZY%2Fo4oQruZ%2BvO9H5eSGSYGlMXmMvm2NBSttVLNEfbcZ&X-Amz-Signature=10d9a095ad324fd4b5a715d2e2ccf81b70e2129bae6400579b690f15ad32dfd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

