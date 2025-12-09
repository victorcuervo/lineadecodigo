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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAD6GKCA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T012416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHnPq1rtxg5d6c6DKhIxt6mXJ7qNKND%2B%2BSFdErxRgJhwIhAIevwKp%2FI7VSUuYY7GP%2FnZff%2BEA7PBD9OE6%2FezKPc0RHKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBjvp8%2BMmtRwoiw64q3AOH346CgGeAQjiqs9MLfPjMkw1ZvKIdr7b%2F5X200u99wpMpJ3tBqcJyCWhH4uaQALKOWh%2BrL9GIL1J9tKTCM1%2Bm6zJ8PgBhO%2FMaNfN%2FCCZu2yfS8UK6P081hZJxPbs0figqQ6usEppNArF235m4gBjfVDcoh%2B0B%2FsX%2Bviuv0YuroOMo%2FKRqLR3%2FSOi85bbeALMORNdbI1Qb8LkkI5IohVNyJMxq2oa6iGtadOGH3rBh%2FHGXEAArQGa4AjT2yH%2BnUYrDIqNwLPR8Oy%2FuM4Ncb9QowYobTe1nxWdxcFpXh07hxaZojM7DxfLx%2FtM35n9dOP9CsMsx%2FBhwnznnQzPs4dBQik%2Fh%2BY6aOmGzPETQLOhEh44sJLzIG6ly%2BGHYJeRdyOKBGgN%2F0u%2BtAdSXDPpPWVXJeA4FbWkzCkT2vs0zUefqP7hhMmfA4HUolsBFy5%2FPTz%2F%2FpgXWP4m2MelnLA1hxw1XlE5AIoAxGzZ1c1NDwj3N7fVr%2FglQIkzEj3ZwHOFtFyCO%2BnDZrx4VgH1oKcYNEoRf6PQWaCqgiVvD4yvHwkzpikz%2Boi0eti5oR4rbP71Of6qZIGBuE7fLGfEQOlwYCoDrQFAM8GJ%2FndEW4NGpXzO3PpenFiSjSIEosHCITDCj6d3JBjqkAWLHpm9jamPtZPKElvoUwzPtaYWOHks2%2FppkwgybRPcA4J3qaJT2lg20%2B1S2uLyRMDtrSKl5yJXmeV7bqZs84LVP%2B30CcU%2BCbDllUIX%2FUQfACr1O9U7XK7k2e7YeAVef9QXOSQAUysvPIJ3aX%2BBi2Yy2K9Mz0h9%2FjOKsUUn3i1tzhk4iiKYlMs3u1YYWmImaGgNbaoTBCU2t8bMLEe3OAiuM7tiA&X-Amz-Signature=86ea81a4023ad8b79fcb18e653ac411b60162c66f27f85376e04904d725239a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

