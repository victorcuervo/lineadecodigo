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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOATO33O%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T223658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbnzME4XtRL9jtzsakr9FSTFHVhM8AZyYqP0abauv6PAIgVNPIU5oxFixX1j8zTMXSWVqmlx2SMnBQylyNshuLg2oq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDIVl4wkXfIiZVp%2FxVyrcA%2BYOfIuE5OcBvmz9QGgV7WdkGUazmTzF3cCYh0FQqF61Lej8MCkmhVthwnc9YgmQUI%2BZIXeDnBGtjj3Aaz5SsaI7BQWIsCLXFL69qM5FTYp3jk%2BIO%2FXnBaAf5NyTRR7j%2Bttw%2BbCKZ4o1RzHgNNDXmPL%2BI%2FpO1XW%2BfiJ6zTz74t5oUU%2F%2FoHOrBKb8lpA8MOYALAhBNy0BvNMdOoMjmpXc26QqQeR%2F0iFU3M5wwS2ti53x5QJ1nnbq%2B4FFmIquX8Q9fFqvGuYyD91xp23xMqOl8VNUEHojVL1g5X%2FglrFyg%2BVPj5n7fN8HAEg8QVFlCYK6Evx5Ve8KjQnlizaUKC2Mkv9KCKTQexDv0KP6d79phctUuU2JPUnUuBpaZFWoSILRcx%2BPKt%2FKW1CSw5pTb7BkRWJU0LTgvRAd9WWGWz1J%2FgxXvXGHuYGlRT12f9ERbDlCc6rOY8d54yMFADBp6Iud5m2WiT%2BCXj1aeL2MtwGyzqK0neQRCQUuv3JEK48VIYooTE3dfddpkCVv9LJrXgTrEUd4UVzG%2FQdXEjaXH8WaVpg5Ge%2FrWoJTMuk1sF54v%2FwHwbg72DmOXCpK9ruck4FXO0YMWKjKBL2CpxDGTrDKoDHqy8No8bNZDORODMpUMMz%2FzMkGOqUB89J8inm3TTco9LE939rSSfhlwInDlK7Mm3fJsARVCbQn%2BA537Sq17hSfdPSiUfRwnrR6dt1KAgvIQfKhxvJdE6JoQHAg3wnAUgpSlk9vyZPpNzRAO3cRQ%2F5xfJ%2FPvatmAe9D1QA83M5h0qVILO4ZuYWYdhuf9JfSQJtT6oVLwfTlv4LaKiMy1yu%2FJrTMKM%2BbBwZ9%2F8h3AG9LksKEQqkI7QEUHAos&X-Amz-Signature=efbe202e91ac09b50d42d57275c36a27640db81e81bb6287f03bb8cb4ccd3bbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

