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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U2LLLEP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T172014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARfZJvUA9dyM8jFv5OyEmV24vYzplqsnM35NUxp9%2FPkAiEApzsErEcJFD2%2BL4UtUt1PzH%2F6pWNtia79%2BOU6VyVhLKEq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDBqDqOmacGwgsoaCQircA0IrIt2wMjMXRpLOEe%2BjQ6bhS9je8Lfcw%2F4qVHAffc9T5xGayIWOCClfw3eeVMN%2Fv%2FM%2BSYF14vidGMvmRK0YJ%2FarInvjxdn7PDnv8o00ddkQsF9hVG%2B5ElmP0TBaCzM7Rw5SRAsqhUG0vxJAz6a2kr30w3e5XF2M5QSJjbTZVEtJjeCherCLUJ8a9OBYmh0yW8iZllYOGDryBMJ8w1JHoVc88J3pYFKIaCq6mZgq6n%2FtGY022Ej7l3PUhE6mhFm46Xidgt3yUdrV1ZmSbVPCchc%2FEnP0h4Y4rHTBs7IochqWLqM4udqoN3vlWno0aPrc7SmKxt4UdxArlA%2BWJB9V1dDg6SnqDESmTWUmGS6ctnB0qhCn9jy0%2BxykTi8loF3UuN0%2BEivN%2Fu0cT9pqU2w5EmQ3nC%2BoQdGfmGI4yjoqoeyEXBbOWTLRbZA8yP4wJfBgGKS4RPZe%2BJzbVob7k9zuFjba0UQvRXaHVkgAbtD8Shmci9AfaGccwwCjsY%2FmbPirARydCHs8Tqe1cboL8LPbJp%2FYh3Z75yyVzYlVLdlULoWEIGEsO7%2FORUyE8ypDWVj9oSwWbGi75vnmm3nGakHttP2lEljnE6k9S%2Bl69sHvHR3xLLQZm2tpV9RyB8mdMKKm0MkGOqUB3TT7vsTqu10lRt7JOJRPgx2t3lrywY%2FKvwSusGYi1PIwWEOTMY6uwfwPdjksNC2oWqH08fF2meOGiBGYwIDa56EUmU6Yy13%2BZbKwm3yCriHbnPLh9voo%2BHCXsjSb%2BdeFHYwopkOLlK%2FgN7BPoWXxyOKo%2B5IjxPSEwHNmbteuSyyUyobP10SN%2FUMCBIthamCmHaBHhWOBqOGAUet9FY85fjQmaFrV&X-Amz-Signature=ea77cd1ad9ac36e78283d18c4dd277801103042bb209237d9f17e931eb83cbc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

