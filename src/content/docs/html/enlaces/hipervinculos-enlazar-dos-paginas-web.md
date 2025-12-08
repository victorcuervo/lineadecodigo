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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEEZIE63%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T115844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTjijtWAy4hGifdm8oC5yXcck8j2S1W7CLEsPrzYh5%2BwIhAOtP%2FR8F7%2BOEP0n4kmUi7yjw%2BrCRJ%2FaBdJ41aawWSKByKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWwFMMe4XNDj1UZS0q3AM0zKTotH0UwefqCWiTDirlr3s8RLvm1p4wTN79avqJ95P8169FpDo7VxL7QHDbpW%2B5q%2B6I2skkjuooUd5yo92eCPsVCj%2FPDlVcVOFKo9Kc4CFGdH6CPvW%2FFn6Kj3n4YWlunsv1ZLyOjYQ874vwPHqGxVthtlCpmPRZGmzeVAzcv%2FPYGA9yWJsEvDd86qGrQqRGOt0%2BbB7QAq60ulyuGj93OWALuUp3kVGjfIkt0zhU2kqtCFy8os4OR%2FIYfrooXr0OUBBkHss4Xt213LoKuryyEZcz%2B0HRHXjUjhltwsg79WmuOhOZRPpT%2B7xgB9k%2BTe0dhLiFgyBHw8l7xBoRpQu1kctcgn4GVKVUm1R5ap1k4lYdkxmGlvOaSdLSOxKWP6H3tI0din2z8UTrQE4cJH08Hthgcf4j14l4SR7YE4v%2BKUx%2B1WzAkaadQPUhYZ5LBksroM2SeIXGpASsidQVFyf%2BKSb%2FykJdHgnoJ0eQUb%2B7DpwPaQOzscI%2Frwbh311oEXzcOf26XiKqVlMZ%2B1CZ%2B6MMOw1nYlnHfvP%2FfeXpcAR%2BadxlPoOOL7EMkwsbKdGR3qn%2FUc3xCgZ9hrxPjf2YZxx5irnpuNiU7FdMgmGoHqqQ%2BNjyBCQWhgkVWEWYYTDJ89rJBjqkATzifK66pWLvAauvx6Sv1MrmsY9xKKwTLCayAguktP7xwtA9iyZof1XO0ow88FC0xm4zpv0hzpxGM%2Bqux3Yskn7sUXMPtGiobbpuYa1N3e4jvWjVVDeJGEExxWgT0Lp31L29c01epeZRyMqaC7akLh%2BdNm9LLFoOqqxR343CvaJkFoj1h9g7IJp4N1kywcdtM8nLNAPcuuJC3iGxaG9KgvW8njb0&X-Amz-Signature=49efe41f738799e3d7060538533eaa23ae028c7a2467961ef0bb8e7bd74a7214&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

