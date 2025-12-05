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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ITG4PGY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T233740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExo2mTBk4j%2Fw66ZKJdmRcC7XVo%2BkU0Y8NoGgFb4IkeHAiEAqrJI9XcExHLXJK8XzOpTVKC4p5E5S5sDCECUAFVbAn8q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDEiVdHP1waN3TdHfWyrcA3rmpA9M%2B0QyijIsu4vczxVeRGgJ6WF2vb2zeYX3lttHqAEQQDMP%2F1cMifogkJDTw3FXNkPRA08JkPPB320WQFlRvb2sjR1T4sMJm%2BCOcfcBYXq%2FLUSqIjiYuORHPcdxJpKv%2BZJ4N0xk1tr7aU9jjfGnOj8nBsBkBdWsFYVgD%2BnNKQRsSzsUzsB9y2%2Bzz%2BMsyMLUGb7wGpEko9X0w%2FVckU0qe8h%2F60ZrYL2Be2dB0oyGOFFqPd%2F2fC0afE6Wj49vIkKkQPChv0Y7Gj9%2BBzuw0jnh7bYCw2RHlw7%2Fccgy56%2B4ugSuIr8DBDi5cz1IW4HjE5hhMbDw3Xk%2FR%2BhspaB82ZO3QGJwhMDe0MUpcNWITjLkvwkF7Qhr55k1ODyrdwav81u78ixOMMd5yUILMZbgvIA3qzo30568Z%2Ffs1ECUR4AMtSbDXbJ5CpXXMedtuDYDNVNuKy7xOclSBn%2BS2JUUh%2FdavY1bUnIuMhV8O5i%2FZ%2BFxad2d8XTH8zYc0p0opjomKNwodS10BbHUz1l85U2PA0ul9w65T9vAwe3RpiCj6TBEXrlFlvv%2Fs41WRWerD5Im44u0M%2BpipMqIzTjAAdvymev%2B2UqG7xi8ZD36VKUwK4u%2FDk3NrBWxv0vgP1pDMInGzckGOqUB0YEYxo8SeUXW1ToAzh0UUvmdjRKEwPt%2FyAO5CqXYieIyyUxCp4mws4d4JKeV8BZmsmZ7ov4LkWM2Z0MqTEtRhaRiWfNRmw%2BJCF6xyydz4MkWZNu6mPtD%2FzvvgAGfD%2F9G%2BZ8ORv8vCB%2FbzE0uaXk6KeMq9l44GtbNyxQ9IMwhIszuD1TwZ0WnUfibuDSmXECwo3s6HhUaeln11JoZxRCuyC9B6azu&X-Amz-Signature=4210543b3c55f960f9f694b40f67aaafe005400acb010efb3240e78412da3218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

