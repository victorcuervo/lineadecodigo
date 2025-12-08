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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVASVYCY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T181330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCboUXPbFFzyxI9hOUTGC77JWvLWPom8yVCK8z8ubXLZwIhAMbzmvR1qn6mBor%2FPsjhgI%2FcI6ani%2FNsmFSYO7z95wq0KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2E5lHJdWtfhfCwEUq3APHPkXBj%2FwBmt3WoQ31Y6cvJ6oQPy7JVeiG6pCJr2Bw8S%2ByCYacVPiOmYCnoduQTOuBRzKJoe%2FWfOnL7gQWhPmQ7TmxdmFyCEJ%2B03FuBp8DV%2BpIf7O3V%2F84%2BXiZyY1ZAYI%2BshiVtN%2FfYYQ5snnFQTi0cepYbtC1l4ulOmuoHaKNaXZff%2FwLTs4ZmP9QcowFH0KkrzHBEAZ0SUNgos8DijZdhbSr4XQlBvNXKMNZo60RCxGOQq5LqoKh9nJPywmcAm1l%2Bi7nTZavKv82z8WVIT5WxE9Zy%2BUsYMLqFXRauy%2F07PeLl%2Fz1kKLqQZ3OaQ%2B8YDCsW%2FuvaoFRmdAy2AO3YVMLx69O8JIbKG10o%2FeDsm9M2JHpr7A41Yd5yscwIyLIvfTjxGzMdTiJq%2FO1AgnXV6YH915wPUprFTJs%2FaCXRV6osf%2FF%2FV0aGIt%2BbXYSftt7BDtw2rAZ2ELaqbjsdT%2FzhRs7Jv49J2zqufJa3B6LSZYtw8lJUEetlWpHAFTzpzJo1dQzSBpohRJCIyry5nJXOxPCgaHt1%2BjcVaRlpJMlFhoa45tDBahGMmxt8pNo3swrtbRzpmgMMuSkxXTPdX3IA50wcmwQu0RaglDpMms%2FmHYaUVd9fwrLDGxJl%2Fy9njDAhtzJBjqkATRH57gC7LJgt2lXyLFu1qMktPnxPs0fiwH6j3PLqHqmf2QaCx66G8cqWSfQRZTTIP%2FGA4tsjw1hxlGDG5jF0ktc7%2Fh9kv4YsOfg%2FTi%2BeGKc1DFUPRnvef3i2e6aG6QApFNkwGCb0KSyphnJUe%2FqtaaQbCFz4PczokxOw9sOvyE%2BT0WqXnumNJZA2bnEbSW16X6xQm3TWoA4%2BeTzjDW7ciQWtP9%2F&X-Amz-Signature=4b8fa45e2a5b4a6a22b3bf245c3c4ffda6fe6ee6e9fcd78d5c2302a0fbe41f0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

