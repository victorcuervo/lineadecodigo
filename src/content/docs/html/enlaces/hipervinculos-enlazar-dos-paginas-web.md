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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAEVPKT7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T231957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1yjqH0A2Lg3WEHBuGkqNh0V4ZKxAknd1EzW9ycL2oNgIhAKefG1ngQbSOiXSL35satdFyY4u8wYmZPPCQwQJchpCVKv8DCGgQABoMNjM3NDIzMTgzODA1Igxz2kQ7XjChvXHSrl8q3APQ%2FiYQajtSm9Ij3%2B4II1PeKv%2FoQAFTkZJKAm0ra%2FRl4Qh3W5SrHWi8P10UY49R3VIYlB4VdOyqIBglFR5zOsncEL08BAJzKqEfVR4HGiMwsTbyrnA8qbcK6gSX7LqrGiFm%2FHAKh67DolfytFS6yp0YOOenJWLf%2FbifBqYT25GlAlF9OZnK9AlNm96LHEthmf0rh0IHPfYJ4soltDPdob7fxI1AixbFLHFj336ohnTDH9XzR0VDwQBd%2Be67VgoDx%2BjiDjP1SIn5D8VzBMPbq2TB%2F74DQLv1PQh29AuzMDOBXaNefGPns7fDJM%2FfvC8PmU5FAyg3d8peSGHESnJWYqSNCMn7CywWJnFUcmC2o7%2FgEhR3Kh4ojfdtV3qd%2F8HKfGRLlgTaOnElo7pA71eOx7KU5ZeiBNxbY9cxmw6ajpMTXvFVA6Trs4Xpr4l%2F61A5dcTJ8RATTEfRy%2BYtMNzBbJ3jwbP6SCvD%2B0HxjhtCp5sbh2pxlh9OkVKBN%2F%2BLA3mbJTATi52p42%2FFPJzWKXh2UIuKhV7ayBndLzYtlM6k95GN2zIpBQ5cO930r%2BApxA1ZVhFlaRDcd%2FEW0wvClMBBSLzBT5byQoIyvAw4r2SCS%2FFRPfVmzcBaMMFQcPsJtjC0xs3JBjqkAZIQyVks7s8N%2FJnfGUDAUAGYAMRtIdNL4FmpkQhJ9AOjYnLfr2xdSq6JQ9WL1mTRnI8UuPPJiUr9H7KWmSc9AY7%2Bt2zNn%2F1rQuFr9Oud9saOYIfop0dB9y%2BUaZHPw6%2B50yK3ryDSyCt2Hyn318iuatTTzpkP0XSqyHclI7wKeHfs79hFgoX93b3pOM35flC5x7sPMKHCTWrwhutkGtTghaPAUP6y&X-Amz-Signature=14650b3abb53002940c546a066d801871b1ceb5fffeba589b5e186d3cc9032a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

