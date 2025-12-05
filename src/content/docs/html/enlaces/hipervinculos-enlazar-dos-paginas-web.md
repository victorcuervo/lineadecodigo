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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOC44XZV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T050302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGSPqlEW8yJP9yN6O8jRjAfgOpVIbEJgdaCWd4TQLfoNAiEAnwcKohiEMVsJ5CHzagMMZRj4XMD2lWBGRiOcuFbzSyEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDLpyHJWOvgnKp%2BoAUSrcA%2FXn06AOELb2THHyEv7gpS6XHkdFVERzGsmfY8dYzxpikT5ABkUB0MJpiRXTWOt4aFw4AZY8RUko5UxRHBBuzfBaGZWdNgddDiwitshbOMT0VJHGe33cLF4v1bfTTIxHsJ6%2BXCD%2FcsiU%2FGrlNhqchEbLOZPoTK4hnpT66g36dd551MauMZaLSmNo3fY7uWmhyCr%2BNXjD2ubo23gqiMI%2FdOdwPIF9J2dlctAuHJQu8AZ3Qfr%2FpeeY4L3gehdYjKpvXPzdAookIfLaA2JnVDcOsw16dGgVZv2R%2Ft40eD0%2BBN%2B8vBWO4xP4rzqTwv4Dq%2BsMjvEVZaqjEzNke4cueoWTkpLX9L%2FUMeN80iXri8p1cibQ4sc2fSpRds7mPlOOTEbK823gfRq%2BS1yeBFraYLASrwZFbKqME%2B41%2BX20Wwv2XMP%2FsM%2FnYlErQ8v%2FtxAt6C6gkLFXcz0G1b23eSb8NeIYNHUVhxGUT2%2FyLXNg51%2FBu3U4I%2BkD09de52rXnUJNU50l0M%2FSRCiDMyJl7dPbS9dNWE24S5SZoQeD%2FERHCKagI9NeN%2FEg%2Ff11IUOQMX5sIQVJ5tMBziHAWCV8t%2F2yHjpIo49bR2AusvJluyMsYgv%2F%2BeTaWBGzCypH1uERcFRyMNmqyckGOqUBHVaArSylO0YXluauQtxg%2BNe5hafJeW1xY6ioZcPRvkrYl6Mc0l%2BflidemUyfeSMupIYoWBXLc3SVtfWc%2BQbB6WWZIAegeyznmUyKfs4wsGW%2BHFIHanWfzO4sGj2WEZRPjAb7nSk%2B4%2FRhK5X2Ui88V0jBcn5fJBjKz7LctNtdiKi%2FdG1kBk2jKORv15EUPzAq%2BHTWxWORgxXsTZS8207tj03ur4Y2&X-Amz-Signature=91e4c38fd972e4622343e9f6256f2625d92b690d825641af13cb6a6c2c4e4df4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

