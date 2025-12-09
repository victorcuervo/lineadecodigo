---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S6R4JAU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T182125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbGL2rXs20KcFBAjQWmh4LWMMkRGeCJsxACFkz2Gzk8AiEAinEU9xZFVcO9oShIR2q4Mmoxk3F3poBK3CSdeMxVtaUqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBDI%2B8myFmEbSMvgSrcA3yp%2BRmZg89iNAanfnaYu2kdtKPOzryR8kOuaUDoBcT0b0HWCDGRyBmc%2BiXbefUPj1f6gCzoNbid2jVo0CT%2FnN%2B3HdNmCTbilYyMFyriF6SNw%2Bd6fSzejIZt%2BbjR3MX6PeHkccQBKGuFQlS%2BC%2BJuxehs69H5ZAMJePiVh3ucfSDH0OtFp8JiqlmIDvfOnK%2BqCn58eD92WgpVRZXKlzSJ%2F%2Fsde7I60H35jAe%2BJ9u5OD%2FFPWIrY5xZMcdonTv2i9alBEDynONV3icInXlrNwGn2aJTtTUVrkfgGmII1lgqPs6%2FrUjwtxh66wguoqcWOE2F2b4ZOUoks4KG%2BJD8VSsLOQcHHnrGwawJNZDZk%2B1Ec%2BmhVrO9aWQAKqdfgCNGGbpkO%2Buw4peyie5VEz1jCVSBges2%2BIGm1KhqMxho5cvI4VqJr5jPLg6cHJb5ewS4w3zJ1MphEf9joZuL75YVIZW7sJjADvrEI6L%2FfjjKD9qoRbXwhwgHbCyROprmNjuL4M7odEjjpl6X8LkY9B4aadOBr8pv8NZvisVt6bVqF5CXRZSqXwQqfbRrN4iIcf7dRQKdjlZTbvlBX1cCzHo0O0Fy1N5449Oi3iqTDOGl0Q2PsZDQfB8xHq%2FwQvw8M7y3MIu84ckGOqUBx029emzRuHuLlT0YmOSC1Ko2TbNUTt2vjKpHRWHYbpL3HvXO4XzE77ZAn4OcACjcQuV1H%2FjH2XjdymZL5MRlxdqGG5YAWHLojeldNAfx8Mdlb24rMPIP3XjlKpVe8h8VZzVxFD0AyVR576%2FyT26rGF1nDBuEo%2FZdYtK3UrFdB4k%2FkHgYM2JNjbrGoHlwIBdgUY3ULnhzW7Ts0hDBfZNy4bd7oLG4&X-Amz-Signature=189556b44bf86e15005d50ef5b88e8942008ba52e63d78e0d90f0c5b788c79a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

