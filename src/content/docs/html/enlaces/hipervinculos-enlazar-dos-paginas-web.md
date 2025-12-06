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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJFT7CU2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T142914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVwvRR0sBQndx4MyGcyqhhW18bGrt10%2Bv3xaz%2BGYuiDAiA0gHsxrdTmRFCPqJlJoi12MW7ltOYnISzvnF9X7Hg71ir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMZOgPFdr3HnlGA79ZKtwDN2rnjyezIwCUK0dU7gRKhZ0jLJPevfCKsnRFk3us4mWXS2kthBGct3QyL4k1x7Mgl3PRAaacU2uBjlW%2FrcwM83AvLq05cB1X%2Fyc3sFda6A8DpUQECjDIJGdy1GO90UxTIEiInv3YReVCmWnooB6D0KUQuK2FE8yLDeKUAC6yR8DNTiqqstdVhnhsOfDVr7PkN%2BKgCNgtcnPaHLsBbW%2Fj%2BXalYj8yZcElQxbETLfw9r1Uoj1ivtftbSjH6cc%2FJuTdI4EJXRblm3H3GSXmdcg6564Ocl5Bdc8CZDK1SLEs4R%2Bt%2BC65XRSCn2kKgE7cheNks9BmXb5WtN%2FHJi%2Fr%2BofRH5UFKfxiYO%2Fun%2FnTQELZUP3UMrXFYBN%2BjJtbUMZd9r8jimXSVyKnM7cI67VkePAMiTpuTdv2VG1gXK22zKq%2BsXD2KZWyxtjfkzxaSqQJuT0pZY0zxbKPw%2BUpJE3VsOnj9RbqnL98FNRjpv439M%2FRz4iY%2FtMY8tspQ1QQIX3VN3aFpS7zEEB0cAoAbgWBzYAKNqyLf37cRu0XHjukxSpxQV4DBBi8AryMF%2FpBM3B3ahKgYUg%2BMphuQvHDvP0dHIIwUZBxl3nZYf5JPqbSJhtPCs4xTY9jeKHXrGVheL4w0KbQyQY6pgE4KATAjuevV0cmWCnj6qxVd7YRQONBJKgzp7CwED2i4ENQZYpSVIi4BX85xCbRfne2hslO4jQXul4b%2Bio20OoYq9knvMskDBnecxvxOOiFEEo5Dn%2FSyAaM3dEQpvC78JJqD%2BCQDK7hDdMSGcGr3uepuJvHoZXz1AlSsFAwJ58km3H72VV%2FhOFXU%2BFL5saVDSiMNnSYgsva8JTCy2fkr47dBxyuJrIt&X-Amz-Signature=79b452df3bfce37e7a9868c46d58324e8cf9013d14ae666c943c5d439c4805b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

