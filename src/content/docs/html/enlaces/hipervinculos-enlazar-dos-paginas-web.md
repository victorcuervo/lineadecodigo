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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUYR5QRB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T230210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPW4%2BtMzuiWqbYqEYIdjNMI3%2B6E57326AQgda2C03TbAiEAsrStdmcfFMW9sjKHW7L1SUI2XxbYjQEHC%2B2bbMUE6pQq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDIIPefotsrTARzWqvSrcA0OJtsuxGiK2gaXEUV0HwkMROwAWplkkZEipcbuXjxnb9Fphu%2BZr9Lv0W5GVduVKuBoah4qDvZ4LNcpWmbgeXUNiEk3uYTHPAYD%2BOG67fFCCDWs9A0GzFpDPyvu1TyXQPqYYiZ8nVyG2XKJ7tVtd5hRcHo5fx%2BxhEWYKHfQ2izLq%2BNt%2BZ2nulX0cme7dmrbwcESCGH85qh1nZQqCEB7WkkzuBAnbEa7WDX5Ig1Xl3%2BKV52JREgxy5173QkL1msjQyYApcLvVKnpiQo%2BxiuSpgwCACOQzL4sCakDVs7u%2F9bjHpn5v3aICh%2FY8urpVtRPUTZDKu5bCnln5PuG3jtdxas%2Bj8IjL7qzJmgyE293m5xLsMj9DI6WjDmO2OC8%2B0yU6ILUcRj52T8XpTap1OcggxiW6Mk5Ft9DDAa1EVdDI5oCb%2FIhVubqtCWa3WBR7Ue3CdrlSqtfiOFc1Jp8FLiYSowKR%2FLlXdT7TUufE0%2BxabjMgrbdiDZPgWPDzsPXstFlFz%2BFJ1xRfCE%2B%2FKl3%2BrX80Olx%2FxvD5CFVvQSdOeK1nsPV77Wu%2F1JRF%2BrwaJcoXGn5AkzHR9qG7ycMA0%2FClcJbUloJNFO4ze0wBL%2FcJrOms%2BqivJcv1X9ZwCcPOsImVMMjGzckGOqUBfHaAMJDLevWY098SteeEtIQO39jEi6U%2F%2BPXqGXv2iNFzuDKsXDG%2BkKRggDhE7c8hHaZN48SxMBwpBDaRqhGvZ1d39fte1CLpMnLq3aWdbjuqWekdXppqTM9YQT5eBFMl64LeATzOPN%2FXck9CYQN%2B1exiHKqn2EI%2FuFhEaLswcaDlaCGoN7uh8ZqgJvdAL%2F1PLblVdanGJ9FG7fti%2F0nAr%2FFd6pkt&X-Amz-Signature=e72b86e1214751cbb02e80985eb3e3d3fc9217907d17fe7ba16e65b564b3c806&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

