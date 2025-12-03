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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAQ5V2HP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGekQ%2FfVI61hJkpvMs615uXhKecUB3vi%2Fplw3VY%2FvZ2SAiEArHGQkx%2BZ63Mwk%2F%2FQQE4X%2B2E8EV%2Ba1h1Q8c0rMC93CnMq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDOxaNESXwA6nYUzJmCrcAy09mBTTEfm58esW9nU4zwlFsFn%2Fga%2BqyQvWs6cXaDNcMFeFlCSaZiqS7k8PxhSSAOcVGaDTcLC0Y%2F0tjGEomEEIYJtm241Xn5WGkkk1o0BXNf1rJ6waHOnvz85csf4i8B%2F7bFtD0UCK5vA1GQL%2BRv7TOJ1MCmps%2FKyM1zIcxJCugTtcjlkQMuWZcvErRoa15h5hjPShZTr2T57RUMUUH8A%2FB5At75BQe97peDIBaVHKj6qGzv6SD5JvCEsoarPQ1GqI%2BNJFgYyTKMrFwhALMOPe0uqo%2B0TDyRgWhVhUFdm39sNe7E6Z79xkuQxK5SBhaqk5SCNPBmvxQ%2BGN2u6Lv8iM6a%2BmUMgvQZcSvQIdoQ8wBD%2BKnjYgWn6qo9%2Bdq%2BHRz28FsbXemEy2sVqB%2B6pmIVUGdDNL4fk4cqrKZC0JzfvRcFvI5ZCFNS%2FAGjlv9IFed8sRp%2BRV0InZPUjACIzreA4gJnb9zeflF2QgvnPr0HVv1OCkfiTCltu6rkJHIWqgT34mani6qnd%2FPMXit%2FtuXvw3QphmeBBCgG8SFfU5Dxl4Us%2FnDzG8ksotdFVIULRFyOddJ%2FH1FBk6dGgrGMVWK%2FR9I789JCngZT9sBg4w31o1tW0yNPX8VaXStgIsMNf4wskGOqUBYXjgfTlI0IrhqTBUK38QCj33ho%2FlauTxSr3TZ%2FeEzHC5w4FzSxjnLT9PMcwA82EW%2BTfG5QAHxs42eu2INlpT9jfDhthvQSbIIznYzxk7HalJxZWoHh6a4hKCXOKIm1vRQ%2FOYt6WJLAfTQdLM5LtkuXawdw0zxSQGhdf%2FUIFizoBag67hdkCHf5MhUGLTesRtGRajBYDbUZbmUxUsIptHmtmNXeJs&X-Amz-Signature=6af387f2b674693a38156ea0523b5a3dc95848ac682cc66e59a9552eb381e074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

