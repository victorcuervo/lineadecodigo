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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R267IWXE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T085911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPUpI3OrHQ%2F8Wm%2FQQ0usZKAmKiEFrrgOMLKb7whUfxfAiAHeVJ%2BjPQB6K632GxHnAycixL%2BG7n%2FuWgzCJ73lTlkcCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqeb222BR%2BVVUQy9eKtwDseyvQZsC6eQOBKy5JBhG0cJnBBtRn%2B1kD5OTczJHEiqoX49Y0dRZtT%2B1yBOY6bgftx4y9f8ehySN1xPVhMHEQE5BUCQE%2BJFdJATVMf1W%2FIOljyGIUhCjoOJj%2BUqzR7IaughraoNAIQK6qh%2FFdvOgSk72vPWRmNK5fk06AKQ9r5st%2FJJIrcFAUjJucnGfUoLnqCOMRhXn19s%2BLWTOFjShnKEotjzZRTZ2VYyEX10GyQNugzHckId3R0AHRCyCBO0Yzzh3PXJjK1zMElM8tfEdOa70bSVoYi2AWhI9cwxoZ4zhM2VVZl4U1a%2BIuPtwmA5eFxBlfkKYXuoiZJhBo8E8pB67hf7liZVL1537rZPlZbQa9ZNt6FSVj6q7H9c9NSoBmp%2FaWxjC2%2Bun8g6WSfeL4qnBplXMaCdX%2Bo8Ij52dr3yAYUgXQgb%2BVgHdUuVN6IShi5OSosfxw9dFG7WIzaP%2Fl2Cjjb%2BuiIra0knDWroU5HE6lzgly1iztJ2CPt84cUycuMIp5tUMX6gQtzhEtEZHKlbZz1E64iymjjtil4YTh6ruhefaipBtUcuVgi2xDd5YStmPTl%2BhSr3ax5CuGqrhIVbftb%2FEHl3B%2Bomp8t%2BHQHRVjDrzJMnKWRqeUIww15zUyQY6pgFOfhpCtYUDmrgvas2sXiFucCa%2FabO1xTQpcfkBz1d6RBG8gZQ0F1g9pLfYxA1IoH6CjExVvPa0fp672pgNX604yaTciplXSTHZMOT%2B6kaNGj5ErVxSwJpwPBI1ITIH%2Bkz%2FBm2UTV2BjlQULLnQxz4n3MOEVemByMbstpre%2BiOfIZNWysOT%2B7gx1qEz9bFKCVEWsC6ZuTN8eIOTLSBTM683qM9JyjyR&X-Amz-Signature=168e3ab1eaa836e7701686afe17e65c58c8cb0e222edf39c9944ca1134e9becf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

