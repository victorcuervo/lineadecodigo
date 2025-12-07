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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A6CT5TW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T051822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH68KNihuzoKy2islu%2F5XDM%2F%2BXU9FpXeB3hMzU3RjAffAiBYQ4RflSrn%2BldUYiG6acoIkGwRHXHr9wHLuNU1JAogyyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY0aWCTJm27lm698zKtwD57K7OLNKe4Jk9%2FiPWVCtB9zbqPG2wlChxFqyV4OWE5KtcKQzX4ghW%2FK0fqp9GvevrBp83Ogx5QMXDrF45pnY4XE379oqz7FA01lCm2YVnkEbH0HV30wiYJDLTUGQuZbdpvtgxkW%2BdWp%2B5EKhbK4K68bku3zBddLMfpN1wUDG%2F35pJaMawzLTIpncZVZqWwGzUq3lV%2BuuzokJC3FTu2ayn%2FG28oeLKXrDuR79UONaNcIWJsCSm4%2FHQkMjXAI7t19H9YQ7y0ezvQF0j8ZhklEMBjQJxnWR%2FSO4FVHYEkeb%2BAxPC2f0wuD7W9m2R7lSIkpumzvs5QnbKAkALOs65MLNN%2FwhB5AptId98vt7alCGNvnqAWmKt0oVweLK1wlVwPXT5nxJQivq4Dhv0nwpzBi86VeQx2BMlVcMAj3WgPItKXBIlPZUhjEfSyzqyH%2BF6vchzKfZTaNNY3Isw2N7otUPNIZTIbTgVEQyovt6cYUtW%2BqKrl4GDhAXQ%2F%2BTg24UrpV%2F6%2Fipxe5f03ZyWDIlAW0mUI0mvlHT4SjE199q0j3T3fnhh36L7tcjf%2BCox5MSg0n6Dy5rYvbUH3P5f0bShXYQMfKEnwL75GdrI5dZ7MuE56l2xm6sA4OrgYzROM0w1%2F3SyQY6pgEZaTosO%2F9u5SPB6H65GlveoWsUIhqWW%2B8Wil7%2BGIHNEYeNV4nErP6nAEmyUe%2FVALAu0RMSlq9UzoWInhuMFOFCJ9HHD2LR9f4koBznE7qdk1yBVy90ZPk3%2Fotaz567UUpHvxou6j5dQ7vDWKJXI2gWilzTWXIbxdsQU2eerWz5GutbwmXsUFhkrlS%2Bbw7Q4VIIGiEfme0Mn8%2B%2FRo%2BVbPLYCV53XlGo&X-Amz-Signature=a958cee2c006e3003fd81a4b68e4bb62ad8790d734a9a917accf7f61dbfdaf80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

