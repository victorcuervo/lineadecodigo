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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BNASSJA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T021459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfj6VoKXJjYomlKffGsTGYB2z0Yj%2BaB29ao%2FxABy4HXAIhAP1g6n%2BqyayEp6Jveol9jMiNf3%2F%2BEcI5gLs31iYRQCAyKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoeFXA1vY9bCMznuwq3APwkGEpkpcUAWRuDicMdDzuE9K1cQfk0%2FVpE%2BXHCjT0qOwMESH5bSbf9YBhKKMI%2FCqy7dsEKExCh9ESVzriBLffCE1pz6odTnZWcRfVtfD8d8dip520faqSX3gTv%2BEaVwv5UqcO7PaPGZiJW3Kb%2BIVYYL1cuul0sUvMZHUvyOdlOnfas7yxcebgm8vyW8xpqzbfPPISm2yojJomwI3Gqqc8E1jrZ4GqhxKZy3RRtU%2BNEfoXKx%2F4AU3CyTS%2BanuaVlkFI8VIM8riDvsnETqqPLSOTppttctH9aPnKYrER5Ctt%2FBTE7MsqEW%2FrkgkaHkk95dweJ21qambnHpkM%2FSiYGPOH%2FlwAWq%2Fp23q263Wm0TAwmzs36NRiK1r7BGHYl6KNgBAx6z%2FaYKntWbbHKbgPKetsut%2FjAygyaaAIzBq%2BlLfQprnxx95eSHI4d4HjUMtzBIOTc5CncgN53kjHtYJOdkp2ZGvYSh5NF1b6rcNx7x6xUW99JeeexJu6C5vEasNJHKS8Ke8h3uDr%2FV7tgWpWIGcJhhcu9UMiw8Wj9fGAo%2FNCGajXzZ36ol4h0Q%2FIUVtgfdE73r3CJyiOX0REcOypNdeMBPLtBUFbtY2AXoyRpHHfiKoU6%2Brn5ZAmmAGWTDj09jJBjqkAVQRL1HafSxphsbRoZg%2Fbm5eZizyXbbQoGMMkbcSuK6EGFl4m3ue%2FjlnI%2F61WJjN0XOx30f%2Ba3MVkDrNtK6C2l5b3H2GXPE3Bvint5KVIOCiytFWW49B4mNeVuHBOD%2F2oRwBhCS%2BRyfZt8ZMLQNvKa02kK3WGdtE3n4JLQQrODt2u84DTG3kALAszXG9BB6l36u5HYP6fE9QIQdfwQofu4OKXkkr&X-Amz-Signature=be4f8818f60b4fa6e363c66eb7dc15e368e6b8b6b4d84e46b23d2022fcd98c7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

