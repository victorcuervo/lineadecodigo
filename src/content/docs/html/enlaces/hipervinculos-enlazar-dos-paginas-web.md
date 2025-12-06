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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYQAYELS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYwLB%2BJLWk3j67g3gr9Y1DgoHk7ArzQtKpEzuO94%2BRzQIhAPmCCw3Z2e6bnHNDDldFSzHX7FdRfIOHVXPZ4IdQaVImKv8DCHIQABoMNjM3NDIzMTgzODA1Igwx5mbVRaqxgwIIUvMq3ANPREMgSpPtBnQaS5yj8nJB5OHIqPQTtBpFM%2BPRTUcehkH0Ruy4JOkKwKQgVRMvbzu2e9NcUPKEVfGKXUJzo454lqZLT1lR59i%2BP%2Bm9WTy%2Brq87rEj013zljfxpkiV8hHQ4DAaT2CEOaUFwMYkwCmhv1pRZrIBQOo8KqI30ttLwLk5tjdKmEBdBOFZOd0liSbqKX5oxxjvlh4adRVogLsc%2BvmAhxVjlLP%2B6jGIeQhGGsoKKqFiRbCZDDjUTfJTkQBofi2m5%2Bj4xZZA7wHt52DHq7IDWHTMVKTtYlM6GWVLNnV5IBJtpmvAcbH4X9IbKccJKKMsczPPeUKlybUJXBuTUoyBRFL2EjeoxYgd3rYmjmHZQV%2FuoYf2mambWx5KZQNcqSwm%2BlLOwKEP%2Fq3N0ccdWH7oftjpddaRGQBqP5QLiZ3XKCNO10C51NUZPVIIFN2Ddk6MDoenaV2otcj28YOwTjalstJPzYbosXjHdpa2tQ4HlylswO%2FO0zqzpifGzZMDmdn3nuhuzVr50MklahgjLzgCht2fdTEInzEvG9jnlvBWSkbG6EI%2B5Agx7gxbhEuh%2BEFEEQbv%2FYdtCbni7smtHlFGLF1HZFz5Yl1kK%2Bu97j4xpvu9swNYUlEyaMzD068%2FJBjqkASL5po%2BFM7HQ09BcVsoDXPNNxo6R%2BhZ1PF2p6nWT7%2Bqw4t7YV8mAR1D2FCeh5capNDa3luTVImx2zxuiRQr3qoCR6hPNaE9np0nCe7GK5kvcgWEgTFup08IIf8Crh5vLuNYqQ9P96Cd4C%2FFuZXo6HF3iLjpEcTLbjzBoeMBBgPagVDKpYmSkHHGxViuA6IaXJu%2FatKSq02poceyBtHjC1W3mdT5l&X-Amz-Signature=015b68b097a6b6c88c1b65c79c4fff1fe6b5cfffd79d5a17dcb6f3ea277827d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

