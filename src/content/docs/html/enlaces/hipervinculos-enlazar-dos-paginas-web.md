---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI5DH333%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T082342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIHXETDl%2BNzzvhzJbGhGOzJWECvjJlxcI%2BP%2BqsHl3mmjOAiA4dIrum18d%2Fv%2BwAJ2upKdB4otIcACZtUw8y%2BsB7UVfBSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMgHcmCBp3Fhcel6YFKtwDMYfIqKzWD2xRYj16aUlcN3IpD7VYGGJ%2BQU6UXuleRJ8Cjur0l%2FZAiWmX8tBrB5zAW8fYpAA0R8f6w3LaqEcMDeArsH%2BGWA8kUAYp5y0TO17lQLA72MvOuWMW%2BTgCzh9Klx0P%2BovE8tn8%2F%2Ft4qCHe8aCya8bEGbuLLpiYHhCHi%2F9Ghnc5FWUHjHOhKx5g9YcG3tNevoXuqjV8bBTqzpflzXPZHFwlGUEduOE%2Fk%2BqUkfNWAC77VudO99J3NwMbCil%2FRxXJS03YRLJq5VxPVJEhVUDdIEMm2qiPG9gbj6fqPjxYOByHpYgzWR9BbQ1MIGQfw9WXlx%2FKe6BtHELBv4loTr7NmpG63T0VSojjIq3MN%2BBvFYTTZv3SMSyh%2FcqANvDvuOTmZZ1eNJvSNdqxtYbuusa0nwBDnuEln0qNIBDAfw%2Btej2TKAQzFAkxUQ4NRWxjFAEW5PVjbO2u%2BLmvaIFusZ3X5ONj55%2Bnv%2Bq91GGZWtqzSNXoNiDc1wvyPkWNoUhsZF%2Bl5scGk3iyTtZvcB%2Fw1bdAVU2nXWlleSr8gv9YipCqyuI8ksT6W%2FwYsfa6JsEiKeWKExt0qz%2FYMHEycxfkKQjADRTz%2F6GdHU0yCfmPiE5nBFh44nx9tLbt69kwnoXFyQY6pgHZJ8Yh3lShXQGVNWoCVCSNG0eeEa998yrR8QBhoww8EXl4RzF6l6B%2FBgy4xtatAK6tbYTJcSgJaszbhhUCG30P4NnxdJrqzd1RJUTLwc0MCXEzNE8m%2Fmbeh4CBc6lxAX7k1xKp5hWp3J%2BEM%2BLYzEgVsYCJAnEUBXZ35hxKNpQ%2FVSos38teis4%2FAGKO2onvsouR%2F2fgc2h9MV%2FNJ15BAwkAQZEJe5NM&X-Amz-Signature=de267b875627502154616e86fbd5b5d5cb35baa57075bf0535b67ae563fbe278&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

