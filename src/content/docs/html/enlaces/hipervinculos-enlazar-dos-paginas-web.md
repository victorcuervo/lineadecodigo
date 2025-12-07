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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BGPGQZY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T223603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVu2ezR21MooMk3DG9GapYqLIjTEd4nDvUbKa%2FQ7AVdAiBf373CzEBDUIo7SuYpAUFAEkylPWDRuJZmdDFqSu0F8SqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwVieoht6B7Kzzu1qKtwDIfC4dhn7PBQsT8%2FmFfAvFjwAcHu7MqM2FIY3A1WoD0BHjYVjJtZT2f0Pvn0qYJY9CkqInQYBDGLNtLwEIO34Z7NkZ%2F0A9kxEGjRuxZdMY6kWt5O8dWZoeeh5%2BhOxw1KVgrY%2BR2ybZj2yrbSVzhaSESUlhPqRaL3pxnpMc8LkPXaFsiLJSmaxLWdDj2qLLgIppYS4qbB6w21g8cU2dm4rs70GysIvo0aOtAMp844vhK5G3tPnefXKRDzOkFbTsiZdMUzK5Z8gMPF8bHf3CLf%2FHZ%2BKunZ7R6P571hoLNUtusLhVkEO3%2Bq%2Flbd8gnpDSeHxbgJ1%2BCanNa%2BhU6F0GtyGjpwLJ9X0xwRvDewj%2F5a4V2hPJpCoX3adg2LdTsdmmWbUketeov7cnq3YiVOSNqjSQiQyoIZwnfj7HW4l6rDkTxIuzbFVThyAYLggxOKQUcNx23gcj6LUwgDRa1nTfqPq1HYAbReGg540NWpAngSXpqx9ziY6lEOdS15dG9kaHTlXKzjYeqwTCZV3L8GBIaEtIyhhEKH2pBp2QOwsNn%2Btr%2FEQEb%2Bw9C65jLLiegqWkAzpINNvahVLJJ3ZQQ8wpfy5lSWkQtP1gSuqQD9JvbE87mgxmWxJ4%2FRBUn7ci2cw88bXyQY6pgGfkkaQgWnOo3lWE%2F1ybv6OivT4X8WHLuVhczKCMiqSJvc9jcgiNNb%2Brlof83HX5JGIO7h7WmwK%2BneTapbgc2UYhU2xv%2BSXwX0GHuWlb1gTXtb6IW9TecaqZJb02qhdcXb%2BapIX3H61xVmV0Ox1DvOKpzYFqKt6h54a0KSzoUPFwIHRDR76Fehcl%2BqMuOxVQ%2BjfC%2Fglf71p4MlAvEpnZkVJ2ZgU3D81&X-Amz-Signature=b76c0d17e814f6ee859632661f845e6da74cc9e25ccbf6c790c619ee8433cd26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

