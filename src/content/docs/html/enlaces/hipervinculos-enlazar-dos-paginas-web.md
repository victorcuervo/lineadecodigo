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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCY5BUXK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T155547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6hHIiOaU%2Fsj4YiCmO%2Ftgb1%2F9%2F7vWCH0pnu%2BzS%2BH%2B3eAIgFw7y%2BmE4r6Mfm5DkmO9ouWcdEGLpVx2AXSjjU36zyqkqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKctfARZXqlOslcKQCrcA4Jx4%2BhkmVRiYO1bfQveFNsJ823edSEynSDpEHc8iCjYGaMdD0DSfaKVyYXX1RONJvPAEdSuPzNklgsmyi%2BuABrHv9rgaBNr2Pu1B9OOnJ7yjTGURh%2FDIVkGBk8utdUTDeqzbgJBkv1ttA45gP1cLi%2Bv1SBNxKlCUuWpzHd5KrqlXnfrQRQUcW9voQobqGJVf0QftnME%2BF3%2Bsac4a6X48CAWJL5ksc27%2FdWQGNfu1TO63j15%2F9gU1FmHFGBSrM87IfUZym%2FCr1AWw4TYJ84rNCB38xyNGJzt6Ib%2F3B%2BEvqONzLndqSeXZA6Ode0mKZGXRGRjflROgJ7WcwrUrdmny7WaG6YAF9yEPJFRlzHZ%2BJ8BcOyBlsxOjD5CIXozEBCnyyXXmKOabsJogvGIwj3zBGHueeYTUSvwlqVkcBWxPj5OR9juSkOYVvxltZxTjP8QFkFLDyJiRK18C%2F6VOAw2EjPJNozT7UFx%2Bspf%2BIzh5847QlWj2%2B4AGbmWTLBb1QkmPyKYzfbWudhDV6xxVDe0C9PqPh0xEVySJ3YPONgZC7ferM5gxWE6kqD%2FWtEUS3RqfHzPA9eAbcjwCamrfaJpNd%2BBaRRzicBJOAZ0UfKKlh6DIAQfDaR8rKxS7OzBMMTk28kGOqUB4kls6DwwLNcyk5FfKx1TQvD3EC2jdzDSIdjVN5n4%2FHG0dKZ57yv2otspnW9%2BTAt4lEjUx6TqBNzPxi7Y%2B8Pv0cj%2FcalRGd5vE1xNVjj2FnqbWKxyk%2B1py5fYtwdUiYeITsgq2tOptSC23Vdb17MSBql37WMlxvzFjUqkw02LwogVwoL8FSLh5ZKfgMjSoUbATfZjdqF9OnKy%2FbHQ00oFpz7Lf%2FXo&X-Amz-Signature=8b6be088e89e7ea647015f6e3123906dc8fcb6bd9a73365752746aaf51dd75a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

