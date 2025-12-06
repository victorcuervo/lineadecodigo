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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTERC4Z%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T113819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9ppAQ2BaLUqkt7xPCGAYjQ90kdOehU4OI8K5eDXwIyAiBrFo9O590VVXyX7sXzzmCVJYqZSPPKY6bvUV%2Ff%2FvhRVSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMqp9VqqdKK6Gbot3NKtwD0At9Kkh2%2BMHzWdFASXPFjSsgoJ5dc4m7yEAU3neNvFXt3pl6eQAfTy%2BWp8X%2BiCBORdhLOd5AIbuyJaD2LTWD2eu%2BPHZjiDhyilm%2FHrhW2xgsHwVgc34O83yjgytPV7xnSmfMmJDDm7JY1IzWyD%2BTKGW1QKcWCkGholTdxl%2Bfr4TgfktK%2BrNUpHWnuTEh3xIp%2BWvbXLfWCc%2BTQj7xy4pmKLxC0EaGoQfOOAvx8LWMtInes0wSCrZeaypHtdvfaSGcrgkkk%2B628afd6tJaLBToF%2F%2FNY2OA%2BDb4EzFZaNa8UxIjl%2BvC242eYvrReG0yMqYNQy99GGqpD2CIT7bJIQ7OtB1wP1sTSzeGXkTGm6wPRtHA8MwL0KJ1IZ1BsbxiFx3IOCanc6dRO%2FId33HkLJThu5jGf5PlnWHyr%2B2J3MBLliHb6Z%2FTHn%2B3FNZmyTgDnWE10miAc0jyLnaL7v6DAdDFOF6w1KeZCUSrjZMg8TABfJLXYHpgCPDlruzpdC%2Bry4KQORAP3NmHMyX1C31Ro8wJJjjzvLh1NHucX%2B415bVwQi%2BPoKoIhan3QqX2%2FmMsqUKumUJbBDL9MhkiIiM%2FwPBOI445ecYv7%2BY%2BCSgRDRlEPcyxglKSh%2BRpel%2FGMXYwnKbQyQY6pgERNZBW%2BAJ1cUGWhfD9FRNUxOojLzm1ke3EzGKZ4DSs%2BLHSF%2FvKpl8fZIWkjX%2Fj95EAjcKTXyTROPb4CEPqnjxRGRvthwZ6K3j8uuy1Pj5NssAOFtduWmdLz%2Fmhx8t56RRpn8JvVPOPU9RK5AiKrWXd2%2FAIM%2Be7hCTtfjUwYeixFnbb0QYvfWiD7rWzssLsLgnl4QiRP0arRGkR%2BCHWPpl04Ee%2Bjw%2BV&X-Amz-Signature=714deb9d7150142a2988d1bd3355d7ad81a27894061386785f55afc2e770d4b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

