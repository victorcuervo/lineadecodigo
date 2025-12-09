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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZABDURJG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T053333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID185p3h185OH%2BQMJwRlMJCsRGu1PXurWANrPSA0NGK7AiA8qEWRRJ6eLPPPeNBi51ePu67mDBMGlSOQlWyCLRNfMyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjHIukbOj%2BN59WqU9KtwDWj7vFkaLm87Xi%2Bs7ENJ1L2NcTkhJPBdbawFFaVJI5GbgGHeFL5JwAkTfTPV9l%2BfqNLoOj%2FCkQhnVRhAJoQc9no%2BBt6iKyRbaxAPllPgrd2%2FwSXh2jbDkIPhMPNlJvxyUMPy1PjhINohGP8iuNJW6b%2FVxmttthXShE2m4yVVvBafbJ7m1ooIpGLvTs9yg6HJq1jinkT7ExUnUtpiyJvJjIFdiMp9cQqDnQE2X9nXQbAFyY3msSAcnvpxBQDFpZDVkATeMqUnawI4884rjezfAzLXSYLLmHcWS897im9FvEHwKJp9yb3nftYO7EBgVZmy0UuweFLKxK2yBuVj78MzsVFcA4pmP0Tk7oa2qpYAU4J8jhIMQgR%2FugZZ6RcGl7HxvcQBUJN8UXEW3JS32Qs8IBV6rl9MyUEEYeVkFe6zxPtmQqc7Bf1idgKKnufzjoW%2FGRPBFLdNFqrZiyyFiMCUSnokgf6nLVoDN1QQEhCD%2BF4f1mznJ0KbTs0wO3UAkd01QXawue%2FJos48beXCya06bFwLCf4j9q91cmRPj32y48604YVxWsaF5lq9OQ8Z3c23TkKXWXQYdPFhDQzNwzfgs2Ov4FbNgj2yFNWYUyKTi4Xv6IB98isfCnirMjfswteXeyQY6pgF9sOFT8AcfGoSg1xz%2Bq0FWCbwNmdZeouyta3eL7PUVxYp0xVZCGzqJvCOLqL9fiNGjWJazRM8g9MkX4Tlrx%2BXIqTQad2%2B3yZ9FQKsdLYvd2coE3Oz9%2B6gUnWpshgu3D4WKsALcs30wbkQ2%2FOg9b%2BPA2NVNjkSAjBWRFqIIcuY4H2vNO9JUZyGQzwJ9i8G2%2BRCnPfnlcKgHV0kDz3D2SFvaRr1cJn35&X-Amz-Signature=3521846d323f00b32d56fef7879bdf5b2b37d3dd4c4148dbd687977a843a7931&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

