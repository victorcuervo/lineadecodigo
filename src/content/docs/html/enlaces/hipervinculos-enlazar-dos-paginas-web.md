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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV3O3USE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T074358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUwSiK2R5ABN6mPMU2MdCqPhW0GpyRLLl77he5qz7zPAIhAOUqDySQk5%2BYFZp1eYhhH2d46wQqeo2wazW%2FWFIumqxoKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztGbNAxFR22Dbm0z8q3ANHn9sPJIMBWaE%2BETUp%2FXJqFsPs13yNxp7U%2F5QR0eDoTKuQtXhQJpLeDHTMvajLjiktGnTsVWhZiCZpnYYNwhMYRV2A5xu7NosKz8C%2F9U%2B%2FYBa4V9y6ufXTp53bDDjdT4doih1Sf2Ukbz8d8ew6qhanVvC15tXugLxiB0zaSV44CA%2BCDgAtLmZ4CeyO3dXvKXOq7P0u1Qq%2Bt0%2FZWqnZDEYOfYu1ZvHYXtbmrqDko9Ysbb6J2jrdpG0LlxaBTumN5D%2Fea6H%2F8P6NJaI40XfWJRKMIVcNc%2FRsn3pBNfksFk9i1%2FEK5yg%2BR%2BneMuojrJTKaO4k9AVMJSFXHWxC8AVmNGjZSP5rWmqT4IzJ8DVDjfxyFS66Mu%2BOqqks7mbruV1lPJa16qTiewsiwm%2FCerklroqMbJCECsxPQpk3fvTdZOdz0WzJzrZXWyh48Ie%2B5EUIW58jzyxhPW8q%2BmnmgmkipOgbd60Cpauv3BQFTQBBtpwSDt04LeGO367iL2IEPFAbx99%2BP7u1eCtHos%2Fu1G1Vo2bvm3qafaZZePWgpbK7X6SNjXiPeNxeoCdD9Wz%2FFV2yOjYnN8r4YnFOortguSEa99ezzjjHYXpmzbAB0iXjM7Hvm0pM7ooP4FVoh6ZQJTDSndTJBjqkARnBk25v20WZXmDLfvZNspsdnj6T3lhYnRlRMJwERTfwxqLJo8ukBWc%2BLgq4H%2FoBIw%2BM06oeavPSIGTKYq5NmaO82QObMX94S1oHv0W36s%2BGLR%2B6GCWMQqlcyoFcV7zqBTyiCLaBG6oS3BuP94J8KbaPdUua43OfrBn8WK0s4bjlRqtqsH59yzpPC1jxqvBu9TExg79ZwaTJ3ymNTymKnwMxB8V5&X-Amz-Signature=8f133699ce382d4168d4876a3f8baf157ffe3937edee08e3cf6afded0e975e7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

