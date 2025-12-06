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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHEVEWYK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T061757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9fAQ9DPv9aj0KLBOPTe28ov35T7IJ6PMfbrBEwtXwVAIhAILfJ1X96nJ2iEwBO%2FIAI%2Bw1tFaKoXte7DWsgwtXDNmtKv8DCG4QABoMNjM3NDIzMTgzODA1IgznZo96lt4HaU%2BIUG8q3ANgxPY3oMXmLX1EQRZODhhy%2F1IGfDgabYHq%2FKkkPCppMllGwFUjgGLZz%2B4KyoCSG5uFEBSpAlBuDiUbAARqOpe2%2FclF7xixTCnO9o6HSM8iTJBZfQAQ9CBvx41DMTZAwzQgMMSq7M2Xo2voLp7ma8yyaBP07ZvDtjKawC1BZ2CmNMlGrhEbOnkc9Qy87P%2FyJnH1KATj0uR2FKs8tX3hE7sve5N%2BfVaFk51mUCTaSo8kE1kywGdZXj5tL09cXtYicaLLmSWAqXSGBk5FN%2BAhtYYUBzb3AXDxMJwTgfGyg0y6kTmL6PmisIEiaN26TPBDvvIsTuWUtBztZxaRKHm%2FAHvwzvTfS4B%2Fq5bf64snfwQ%2BrJMtBH2vuSV0GNqMb7SIFRJum%2BNPCJNQzjGxJQslqvX3pASjwsgJzZyjoEs2CmJ004Bg0Zu5GTPl1dmbLaXRVsjGv6yIbCRg7sGA0EoKj1tqJC35Aj%2F82GPZTi9OIQkirrpFW%2F7nven3kJ1i96MLjUpZ9FUWVaWQ31G3NUpFR6SiwzqhHO3IVg8dgHDBHlvBPpfGwxA56ih1Qp%2Be3AlnrrsuJZxNpCakP7syjdaLetocYbsLQL%2BPdlGYx5d3TJbFyfs64Qth3tldaZcilDDd%2FM7JBjqkAdaFD9wogvafeevBTk5UP1lqrtDIXkPMwWwoDf1wIXBIO5CKD6OhpD1dR8VaCmwswiLBOU3zNwVZX5elOnPhkE10xVY2xEOaeCw2xk3IiMyDBoxaPUGTAMmMdCfOaFj0l8aGpVZoZuxbHcMKTbA%2BJGHFtRKYaTkzz7Lo0nK3VjAqenGt6yLVTkGiw5iiYWi%2FDLlmwXAWq1VFmJDzMwlXrDw7vTXT&X-Amz-Signature=eef2fd7e9cb670bbe37961f7820f2eb4ffc8bab06855a1b57b109cea49fad158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

