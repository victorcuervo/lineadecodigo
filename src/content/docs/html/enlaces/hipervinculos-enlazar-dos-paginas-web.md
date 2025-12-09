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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NIG6BOC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T060605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCFbnwpTP9RF2vMrEi7nFkpcSUYn8Drhpl0GKpL9LdYwIgPjhuczjkRwTvdsq%2FuJBuc73ib5zjZTxtdsnJsjDz0QQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1TM3bhnikPLhDcqyrcA7cwyfft%2Fu3YShLBeS7l%2BcP4gQjFmab9SfCyU2Yf0hr7fDopVA7gJOsmllUFYCXJlm64gLrspoOk6iDCOadf8zZWkYpHGEbwHwC%2BX%2BGsOBgNJfJTc97MOsqv2SE7bhJDoZvFjjKtOmo6pltHbpFtdC3uUpM9mUp6KtNTNKsERr%2Bl%2FxYr91DYYgMVSgegAIr5xhh2C%2Ftg%2BJMFEOpbXklhLICCmCsVnQm7%2FhWSHLJp%2FMGc0oyMsigMov9ToXcOtv7d0%2FWE0G0HrtBafVaN4HZuPZnmK2WnvM0MntPICQcBKbQiOJ9FbPf%2FFPZZNe8s18q4I0I7zWniRTkBe1FBwriLwDFuNuk%2Bah07v6Y1w%2Bm3OSenCCfzLMu5pULSIjwqM0dvPZbsl5cI93HDtPAZrE%2BIeKDlkGqQiKSXRmS%2FaBZDO1FE9gD5oQF4nDoz3k1MTLZoX5qXr4A4YPUYLz%2BfLg3IDHXU0RcFuxaHFcHcrTbeUsHMoIMCalZGe44TcnKRq1CtDv3cz5iqTetnd7QJnKQrUzfVzTxJMVXA0DzpFpe8sm7CRr7mFqe%2FmZJIZUXA%2BmrGzxSeZIKwNxRdc7jGNN8PL0oyvcDZAdgiDScodAU3GjTVSx5m8rxLHEs%2FTjHCMJjl3skGOqUBj7vYT0mZs8SWu57k13r2DqEBdAreP2uuaJhPlreyWyN8JrFJwC4dabbWfPuKx6%2F419gWx%2B4wb6KeDFuR2Fek3kbHXOjOr4YFTvUnWuZCTbDZQgwW2w35FqUbfcSVcMVGafu55yC8QGu4q5kzgBJgFAVjocgkReqk8hcPJce2B9yqp6zmgXY4FRV5PnnyMy4Ca6r5QJQdLVK8NDdpOQtAJLbRRz%2FI&X-Amz-Signature=70b834ef35e2fa27670eb948f67d65381978639d4a4d69d7ebfcf8a6db855d86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

