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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NLLFUHQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T175604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAe2EGjZyvzGc%2BsYH01OaJPzEKfReIck%2FiBwTaqM6g4bAiEAwEX%2FZvebT8TLJWmufeQmfr52kyXPFTSActHO1M7YYU8qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAldJ%2B8HfbrM3xKHvSrcA5mjvn0QcPTdfdVfbaOFk0aTiXgjtXrw7YgLk1lgjIrupZ2kAbPCpK3Su2wYO16tG343E7Ra0a1OpIWPFHE5TBU1wc%2F38tsdZc%2FqLJTkfQk7ePUuLL6AW1hMUmr8fZ4PnLugKqUxhztSDHN4XmMrvVr2Fd28%2B3coH2mjwpcysEGfX2aQQYWNNWwpxrmRgEg%2F12e0S9KcunhdHxzAVn1mpRvDxVcs%2FuzGzDi66qUwEnZhn7INEeiVc6UAQIrp%2FKwIXR%2BW48ApzAoNPK0SXHOM0rheB89tCCkEBUoiAKv5CLNULbIZQm8cmXJiw5U4aHsPVdDxGuALZ99TaGG0DUme1Ut9nxH3djDAy4yr%2BlcGCReBmkYryy5O8CYhulTRterYMUZl6qrkmKF8i2%2FfB1qAoBWR9FDkMupCOaMUU222t9a0mmFvi4ldoY3p39g7iV5qjYYNxYY7OO%2F%2Fi6w9F9JTqtXbpOLL0HZlxZAwGh4TaelE0gY7Es9f153EZz2yV8npBcnWWmNRBFQIKsRU0jkJ7nT3xaUAuMwjdwLOTC5fZmobScs3AgZ5ZHsx6UIFTahz0bJmPFgoLWoJUizWK3iZPKpyPFd%2FgMcoAT8bM7NN%2BHP%2BHLFZcJkPD0dM5%2Fs%2BMIO84ckGOqUB1G6gjpJCZYEg6PTOXpiTI6PVTzU4TqpHgpkH8WZrbqgeyuiVt3e%2FEsFJmyOGevPGwpMREO9hiJ6l7quAPIdvW8ldDJaSm9zclhvpbM89BpRuysfOZxBJLJj1diXD%2BM4UJ1mkeuls%2BXwLBepFn214WvJKsHDKwc2lkUTFtBqq%2Fo0pI4nQ77fhkFlAEUCT11XKBEo%2F%2BpHmrxnyaTlHMrYl8WIot46O&X-Amz-Signature=0eedae664f67a5f21b77e2ff95014a383a4d517d8104417eaa4bc94bd5f29bc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

