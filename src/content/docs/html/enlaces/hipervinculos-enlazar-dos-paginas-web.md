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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676V6S3FK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T053512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDoicSqawZ72zUmcXQ0hjPuuwUHWv9%2B9c%2B4CFhZzltDHAiBa0sWn6nJxyXxpFVbrLS5Gq5Yo6RaOvOpG2GF0a9iVfSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOeL51QzBs%2FRWczk9KtwD9rMMJCh5eX%2BhaVQQDdywY1OdDgbEorjU3xtWqVsl0jhWv2Y%2FTec%2FIFpA6ExtVguz5f1SNhSzV5%2F6Xccohtz3JFTALJ%2BtPYQymoypgt1T0qlmUdUgs28BD5t3AzOcO761WSgNCi%2FpkA1o5duKGDK0oBRoO59YEsJK9jCRcDnYyIWDHk7feNbMBBY5HxPEGjCj72O81ilzAPBvyio%2Fc7ptv20WngICf5b%2FhW6G5Z2CQJrOY8zv%2BhlwWhOx7Hc4AVnr7CQxX9Wciv6mM33tf%2FSi1v5Zxx7Wp71pxeuQBvSZJ%2FpfXEmTFAi2qp0Cu6tD9bbGjCcCJMQsITInFY%2B19ux1lAeYtHIyItF2knJwcePM12hvdPYPbFdH0aophsEJYyYElS8uuXGZbzrT3%2F0uTX4ojeLeFyw8VQST9CJSCErk0Jbc2h2hmhZpfEODl%2F1Yp2sgnYXjrT8D7rYAjqHI4TdK5pHEev8iVIIuXfhZfJ%2BTCO1BdMLj7McKTq3pK9JoDP10K3WXCXlnYHO8vj29ZkNkeDZyvAdsaYOePhrZeCMSYj7M7i6PaUiq6DZ8aDiARkZllF5PCu0659wOj9W9as1NtWkm774FB08hZb8UJSSZDz9u3UyDHPiehj1%2Bcagwsf7SyQY6pgFHqwZk8Rkou76C9qGZTfhFp2EeUMQXWkb8QNBGzYaZH30%2BkiSstez4w%2FlbqUIXBvnwFnIeDphvhUZK5k%2Fl4ot4DnPMVnrpGjmGB4d5e7zmk0NZVHtkeneqcbbXTz581gj8HOe64nI%2BtApaKAjT8WcQ%2Fk90V6YrqaLoFKxnEgKNrf7W5P5nK7OAaAPoxNpQVqJYz43i5E4twnEH19hXtQh%2FD5Z8nQSe&X-Amz-Signature=98f234a8f49e64c83629da4c9046ea15c80664023cebd676066e90418da71445&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

