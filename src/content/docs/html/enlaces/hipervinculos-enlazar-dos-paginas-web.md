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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2M2VNZL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T090456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHj%2FCKIelpi1Zq7F6jlY1epx857Y4m%2FIksayB8ydH3p3AiEAvGAY2Awq5wHoWs5z%2BatVajmHtcdEVkp3GXeAAyoa0zQqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB88FDaDQX525DKW%2BircA9sXTFLlRI60s976%2BMx0MkhJWx%2F1etF98Btfge475tIBcNjXJLcdgN7mnEwLwDKPbZViYPlWnI4nl%2Ff%2B8czYe%2BP%2BPFepicY%2BRKnf0cswI2tUE9sv2zA5wVgzuLmm74701NHTIzRBaFNuJ7SojjXiSaRI3iQvRjSULgy%2BrsQa7K%2Fzt3EGysi7AfL3E8XOxfIHq0lDtppK9UYlFgP3KvSOvdu8dq4mSvWpqXDV0RZkesfd2kS18J07SOEPTffYWom21lSa1x9Ofy2zBVavCoryMZvTRxr8po%2Fc3XKoGicY2lZflFOL7bsXE9sG68u%2Fjs8NcbGQZJEY7vuyI15qGa7OCMCUudtIhX2BJsMaveycShM76quoZNRPDYVrnSxBTlQtx%2BykPTJtEr27sT3m0U0tmDIh2LOg521N1u46owCardbTtRBvxkBEK7WsP1gbwsTTpkxygmM0NIn3yy8%2F7RqnAvM0B2oHNJOxZAMLF56Tc79eu0Jaqz936iPcwK0uXrCtOsTczbZ41jeJeVYiZ4njv9cmqS0Y8Z%2BrbTcxcUaSnTu3lN1g0GlgKl1ATzjwxOTQkINtcnmo38OAIVZWIoX9WebwKKZLBQIo6KEktNdgswciAKqGy4aYKwcaSJrMMLDD38kGOqUBajpfH4SRhSzA1EKkkY0nkBPu%2BhTNrlEUMPrr5iTLJS7D%2Bga%2BbWuDwQgM%2FflRW3YQffcLNlQS7ZBvj%2BvXfgO0Vh%2BQXwpm35g50N9vdtAfzpqI7RYcGa5IG1CQcgLbRnjA7DRS8JlH0eJsyt%2BiJQ4fgzGFgHGzCJ61YR1ng0kXL2IPU9%2FflGM1MAUSAccC5lTF6Sv9CZt3Stjtfipd5yAMdaxWsugJ&X-Amz-Signature=f74990133649712aec293a7a12004fb58345ac9dbf0e6ffa23a89bd520c2f37d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

