---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K7MWRKP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDGM7tV4DAY3GEejB3lVpjNnbKTt3ebDt4acOT16gqhowIhANEg8BqXP1S52l0xW2leKb4vncINWnzhSSlC%2B%2B4H7ytDKv8DCDoQABoMNjM3NDIzMTgzODA1IgzI9JwEGuhdGHAfruMq3ANu3SYcYAB5k9ew4L7bPodTbp%2F0x7izsSv9zhfkb4HmdKS01%2F%2Bd6Yty3pLK2Wv%2BnskURb59i9B70z6VKna6L%2FO6OSSC4Nwn0UbYIBpKiMxlm0ejtMe%2FYRq%2FxQPuRfW9WhfY%2BIEpqC0C8d%2FYvS%2FYHTuxEOR0Mo%2BRxPkx1SStLqj2h02%2FRWFz6ZVh1SAHulBnS7tSsaXzZL405xdrfE%2FNCTZ%2FCWqq%2BV4%2BrBSLtS2nqZNiTcpYOjak70A9mYQfIsz7LD1aSDDrymN35zes%2B0SuhE%2BW97ChDwNOOScG%2FzoaE5RytAvdVIMURi5Ds3IMBg6qWQZtC0aL7FmHtMoFhd3XjtFgRScb2gXVa0WZutXZHDa000KovhXWaq93RZQbdyibjfQ%2Ful3RJIN7UCveLami7enJkB5vf8An9NAejyLkUv6w4wkedRFwVhKYW8a6splIMbHT%2BgjhRMugiwxixsgNTaRAjC4s%2BvAe9ot20LdGVdvms9buceq5RpP4Wa5st%2BLNb%2Bs6KLYRJRKtyi4hCvnyJqKDlw%2B2M4q8ggQ1ZsNxtyMX1JXAsgc0oe7ED2SRFcx5cvz45I%2B%2FQPFQUHKBx6geAUzE0tU5jbbN7my4Yj0K4oGEX0mUaCUq33NC7Yp2ZzDEtcPJBjqkAZjetZStpWZGfvsdRlsejCbKi%2BCFV%2F0Kuj3wMKR4N2XWKl0B8Pe42Ph5TxtFTbgy87lOU0EOs%2BTQyTQt4UrGOfdnv3QJvs7Z4j0ZXHiZ1NEYRDU1kbrP6W21ZxAkAen0X5Y8SALLp0Pfve4bXIllaljHeb4btLKgOEVAI8wZR3bePOHPkZyy9CkrVKpWTwE947sSz4hm81vZEoGNUWe1V1hqCYOc&X-Amz-Signature=64994388c541347009aa9bfac77a13c378626b09147d0134699544e2e89b3c23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

