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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N2LOYAB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T093641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID94cbPFf7XehYnHFKb3%2BeAI46QX4aiWpp1LWfP2iMjxAiB5DoZBBEYznjGvTBqVoRBsrN%2FdJeCp5Nmb%2Fxz0A9VdlyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe42XEB0aUgFuBJhlKtwDF0vkCzafDUgPCADCnQ2AqYr%2FaPCfyw5%2FN4B9a2NXSD52npW2kdqtfAdShKr6XOwcGaMZzwab23BiKZFIcexg7JNH6qXAKGdUvSZp8RNJX6JI8BDAaif%2Fbu%2FgRFFHHRd4fz36dZLt6sC3mJtCbJkZm0T0l9ogziYC%2BGcgIebdx0MIBLdMEEOsDw6zIrJ3oVi%2FnoKdoW3N0dHVAAX0p9zy%2FufAXt8tARuBJM5AIEZ%2FD%2B2JELwkkW6le6rlLcqrV8Sgh1T9VNCjQl8gX972U377%2F7srHX6QvjZn8C8sjBnQ5lohgnYkrHqWQoGGdI9Mrw0YDlfpBuaUrASrkHe6ZkL7wE70Ps74a2LigLGs2s77b1uaVEIOWj4hgyzuJVhqHkYIJRqZkxubvy94AYTUGe4ctv97eb7nUFmEVI%2FakRPRxL6sZ59n%2FwJgvGxtK%2BrzcNkWF7FzOD3WDPy8zMNMHynhF%2FrdWJRjdK%2FWHrChn8ovobx4RRpLoenleLlHAJkdsCnuaAtIsq9zRb%2BBcBZyn%2FcyXKohktkQhrZT%2BchxXwbeDm8gzn5uwFYbqeJWDEhFYwmdJQLpuo9hZv%2BHG3mj6%2BpRsLxbg2d5W1BH%2Ffuuww0l1gQKJUiAWzvuX2%2FtD4Uwz%2B3ZyQY6pgHKZzyzpGZTTsX97UOOdQMOTfs%2BOdOprd6it%2F4SM2vsLRsyOeH8gZITfHcUNllOKxEzu9rXZBBIbUPws8BRDhOkOWUktBfe63%2F1v%2Fc3eXxOdKfSiz4MYiklGOjR%2F7WXuqGdgb0RJ2e32cn6UCpF%2BlCXRr59ruBMjpaTMG1vcyzKEfpUvBK8ZYdThgQSN7ZoStXV3SUHtGL1egfRN%2B6zeO2LLTElgLld&X-Amz-Signature=63ef33ef96db634e0a4aff09b041ff565ce1bd0925679539d778ff7bc43fc395&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

