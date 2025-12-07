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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVBY54WQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T045542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGCe4KxV%2BE9cEZuACbBtqiurmP8tnVM0T0aLmbQKqNHgIgTKHv9K0NP0h9%2Baq34Cbjpw%2B3QQQy8SbWmR4ZRStpiWUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7i6hTQFPz33kWYvyrcAwlI3mjxEL1McX4r%2FvtadvG1W%2BLOMlwu%2BgpJ3h3FmbYXyK%2FJfK4Lwb348H7h3k0oBQcRTTJiIA%2BomQc%2FQW4k%2FT2ArkUjNbOzJls%2BhYavmOPEOzsus5mEhcRi1sYDJSX1vmihXSSZfXTxcswRksX1b%2Be3CB8r5%2FVi2HGaIvX2ChbAIUC8rBhcF3OY5yt6gZrz70QxqZQTO%2BzxmnogETXCn%2F5YSjQiWDTMkCiad3jtnORk5%2FoBAxRhDhck%2FkvyHWPblJ9Dj6pBETbHK9JvzHSuCGWjXflktVQaA%2FeMziJp33%2F4JTu5ex2HRBUKTa%2FyS5LKUIL413o6UjBoOPXtCSyYqt7kmo6%2FJkRAwAD1IEkdlLdB9HOQKs%2FDofGvVui8CMKEuki9DpYnuG8c8MQ6N%2Bc1H6YI8GfrC%2F6aa9PlaDvVvZ4sZYnSyddml%2FdojazY49a40pNEljGRaeAMmNjiTKO4KbX4RyjtWNY3pfOWsxdGZ0mqH2ShXfrJKGQD93JwxzAFFiSfgbTCz2qjsfQoi%2Fu4rNkQvWuHSbPr5Iuk16YVAta%2FfS3soRfaDQ8wZpwFwGjpSs%2BLDuDMtDmpd6%2FSZdI5oRCiRImVv%2Fal6j0QQfJa1oi8xXhJdvCRDhVWhxTYMMj90skGOqUB49ni6phIQx0Zui8RTjxqEDmQnFat4PfVHn0JmlKSUnd0q%2FivRAPzmtBKYK%2FkcwBkJv6eB71IwLjKLz8oB9ozYFmVjl3%2FH2N2r6j3GCeYxw0N8XWcibuzawQBeBQGVfESYqLlsoonMC2onX3uIo6rD47Wczje%2F6lbK5R%2FDn5%2FzjIen%2FignuAmc5XO9mF%2Bb8uFKQEolEjN7s0X391rmuHuOgbhV8yG&X-Amz-Signature=5a0e7719cd1c8e7dcb7490d0f9cf6a5daa648d7f6a8c02a53b3b80844d93e784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

