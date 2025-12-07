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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EJDAZKY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCITY5mdlGPs9lqEiJ7CjFuoITZzoIfZZOBh3iz0lenFwIgcyYizJ2zw8bvH7MDNrT%2BEJakll2SgPBFMDSdG8dPB%2F0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOFYCBKL%2BkVvSflN5ircA%2B8SszCtP0UXLZfG2DvYWPse7zlXfrWyhhnCfXCH9%2B51foxzTKUT4qpPOwArNyrgLNXdmkYeQQhc47XCbuJdsxtH8FfQ6tXC4t0SKC5lmrSXXjxQe5CNp9FDVHTwhuX2SLUVu1LfnfYanVpqUR%2B1edyDwOXFaNR1NTmnO3IDGD6MwCPwGwcT0I%2BntHygqUTGtZEZRr92CGihnKWTBl4YfQyrqybQuVFepoWeJDvObhKaVtPiLvBgnk2R7Pmnl%2FlEF%2FLyBPZc9%2Bj3%2BrpuaOhSG8F%2FxMSQd23ygRgBdFHOztqggfIwptfqfUJBpU06WRzj4S2SD5Wf03b81cmExDR9CgRLhC7tMeqjrjMgP4eIy%2FWOhHkrFQXF8XsYcMJK1a2aMjd82BBnvVJwF170tf6NgljfTDCn1RAJZh2f%2FsNlzvV%2B83QrTQ1xcDJxcMKEZQhOhqk%2B767BHHs2M2MSXKHv7d293Ax9IeFY0IVvdl0yWYfWVtMNeFWpcoFZPy90wL6NOz8gJRnhmgMo9m3JNH8EJ2GFnia5WHCF5xqLbVbNRUcMNVE4WbGWou8sUqIq1hsxCyuF6nZSMVa4wDE9l4MyUnxMZWhBnf1Nawsp1huf1YfrS3u6M4b%2FELbCuKhSMK7%2B0skGOqUBVtlS%2BoXrysY8WDprT%2FCrhqS08OeJfyiz0hpR6a5mqdLa%2FKOjhLpBvLayl9ol0s6yTLphbTkerjM%2B8ToIwqyoLGDzRhGK1VhEkew9aQ9U%2FVsRiaFNrPyYVuWk6FuQ%2BIL2Hn%2FJmEQfEeffRmYtV1416Z7S2WZsAYfryoPlDxp5Dm8dQkBtVB6AlRAzuPp5QeZGaW3i94VCDT1arpJl7XUsBMv%2BUKt2&X-Amz-Signature=143e6f267ba021ecb544d92cbd4cf0e9e474cacff743991a935518843d22d80e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

