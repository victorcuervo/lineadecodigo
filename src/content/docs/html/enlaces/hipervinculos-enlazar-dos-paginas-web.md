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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBW3BHOU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T115728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFU7G3c51KmA3BFZ3%2BHCE0FjjbV0AuYIZs9eyhhNZH2YAiAl9OEAjSlFJVn9a%2FG80bvxoAisbZySxRHAGqOJKV%2F%2BpyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbNm7GAM7ydjoR4vqKtwD9fksMUNTnHVGCqTLJLr6mLLe21fvykQ8q%2Bl2towxVUQkOVY2ttYHPynI0C00XOV%2B5aqq2izXcpGM0HH8W1YETPrBrobjIpNBy%2BViX0IZ8itwK8mpYRrF8aSKiDLhu7AQcE0%2FMSP%2FxI5zWoG2aIYzvt4Sx0lytJqTrV0Mh99W3NVc671fDm9HANLOy84EVEkz1JxOLOw%2BPfgm2vBNz4dB%2ByUh4l41xNy2ar1exyoypwVCWOpBuDu4F3jHmQ5mZW%2FnV0K1%2BzoK6k582ZQ7TzyAKU9pUOfyfGQIBubJ%2FCp7sb02bEmbD72M0PVJ1XD9RXP4CRbZs167f5fEIm3z8v82WS0le8rvT6COs3ygnxAndgDjrVB659kI%2F6%2BVhCclbTqwX7IksUQDy5t9Ic3tubEAxLFJMDyIJgKEwrIdkMx27QaoGrh1JsSgSaEA7e5TxlS5hTwwbmZsCfQPQbAUfrItxsN6RZvtdwisYG7j5%2FGd7OtxrCPw94Sr8PkNqQqjHKTdgD%2FtELYsW3kgHk35zVpzJGa%2BFAOMsquOgUGYCqg7tDNkcyDrUv6fA8u9mt37uyKZcS9vMHHxhMW%2F98lzqpPL7VI%2F6BC%2B%2B8Z3YPoAbK%2FubIQFNAxjYzZoDd7JN%2BcwzJrVyQY6pgHwV7x37MuuVzUhNugcVZz9GHid6oeqsf60WOfBMlWA3VLDjN0qAU1wlq%2FN4GAphOTVZ6aE8CMBuXQhtx6IquTxk%2FeI8F4tKP7A6rpFUd4Sy4OxGwSaetPxMGbDQlkC3hpO8rYb4TxBCPg0Bj7sOSBTJPu9WveHfQijP2CTAcdRlvl9aCh8q2SBW5gXhGlsOUScDt5g3DLaVQELmQIrZLkYuP8oo1OQ&X-Amz-Signature=ceb6a7837695ebc763c400a5af19ccd5aca250fa740cfeef8beeb63d55e4e0a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

