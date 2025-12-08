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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZNK4CNF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T122037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhfCpxQURxWXuCky8bhtg7EfG%2BG6XN%2BtHAj35xT%2BEHGAiA6JQQjWek%2FQiFuOyZz8SDWXP1p7Eg94xYc0gUZS02JjiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPMGoicaZ0oM3nu0bKtwDT8iGC54EoU5vkRUAlKXUErRPAwv%2BilPlBFto%2Bi7Obis7jETz9cBMubwMJ0XuhGB8P%2BdIL9GpU3fExxZ3HpnY2Aa646C%2BH5JlRyM9Jrj%2BB4He4rrU7jA8RSPIyJCrl7RAKyzCzsJpkLDulzi0bTSLjWTurgxmK8cVcqy3OyvDGX6%2FsYAIAAN7Woro8XI3omqY%2BREWWfP0WXSwqKo2xW1Yrxy7rx7iWQYpHL3gDRQ9uR0rCGrOQmM65bB0kFzl3f400SkbsaaWJg2LsnDUmMC4o8xaFyoMNH%2FzsoIZ349uoUJpr6XGPs0NY4J2TmUm63g%2Fwk0yvWwDLulzUqnJ6%2FPLUj1pm1KOXKnFwXZOVDoIt6s9Lm8g8N5Njmj6GTRAQ9MulWWJDr5DIhH6Bkv9K8Erqna%2Fhw30Qsj9kiSsCquMJbvfkCr4At0qAuZs4OM74WDf4kNrEwSrDIKbeWDair%2BWT%2FXKl4sRUcO7Ytsh4%2BsxqoXMFgMyTMOx3lc2oxz6Oh%2F%2FdPqb4E5V6AweNUI6K6AYTQPaxC1a%2Beomwaph6Um%2BfhA%2B9msBOj12wZe6WKAw0Llb%2F%2FpsYFnUbrDGxgc2EMeHUV0E9xxHF8oxrx1JdoN2bEFmn52%2FOcnvG4KWziownvPayQY6pgF2yR4aJbnBV5LZazwKgDYvPSA4e19TXuH5HuL8teKghwJcUK2HFFVlsajnFbG4%2FWY%2BLJsbPNHxsEgibu%2BmY%2F1dvUzyrZcHZc05JnsFa3Cko9TEMxaVya%2BtRBOaev8V9Ocf9sH3wo0%2BKr6NhTYZ1U54hWoXYVaiSHvlHo9jfUZbGEAk43wnpsY0rPmoCUNn6g2LHF4taLRztZVH9bWxzuEH4JRZwDDU&X-Amz-Signature=38689e7c407f9e7bbd2747a527ed4496d933c973359cab4b3773dcb957e32e8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

