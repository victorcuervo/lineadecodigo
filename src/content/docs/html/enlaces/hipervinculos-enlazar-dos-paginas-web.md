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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTIZVECL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T020432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCz89%2B8g6a5ckSp6wYBNRL7m4F%2FE%2BNL7YlVG8gN9Mbk9wIgT0TzLwiFZGTpjy4dX9lS5kyz0UOmroOOPneGkXkQctoqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGWXb1ZwLVUoKy7mpircA8Wat8HvMsElzKsul%2BgHzfP1rHw%2Fi%2FNE70V4dUitBCpl5b50UgiZGuE7RvrnAiHj9jpAc4lDJ8mmEgH4gZg4Nh%2BuTLr8zvBGLOoxcnG9W%2F1hwQlFWwOlgAzLi6jMBNsA4mq3GxZRw3CVzo3npx739aAWXbmXKuhAnLz6BL6wkwZ%2FnIW4PB4oNyXB9OyPX7qMcvWU%2FdzMIFm7H9y6eZtbPv3XCl81jAf1eegQETqQX0aRc8riMSh8SkT17MuDMCCwwXNzkijN%2F5qKRDPFbKLRpvjd68MctOT%2FlGUBUDXjHNrcBJP6qhDK783UjlTLC%2Fd9LthupZbBNACLs1k3o4zsO%2FBVNHldktIaS0BiLZ1umFMVMiWlPnlQtp9j0uX%2F2OOuOPwyj1u%2BRcn8b2IIwwFVMv86C%2F1liwiB%2FuNR7HDCTTEYu%2B%2F8Z7zWpm0QosTiTMfJF%2BvCOfZB2zjhyXbCwtftTnxDVH9eub0s3c8Pw%2FUQ8RJMJ%2FomCYUI7NOnD66jdVYHyzIsQ0R%2FHZaelqQcBdK6w%2FtMwnH17KK4VSvtGwLwXo6zKCdZ2rHS4w%2Bl%2Fpotfl1XaK3bAIAkTPmSsbbBFhzLcRFfBtgMF35PvQQPOTxOG9Vs9pkeu1x8aAiwbrHvMPXp3ckGOqUB2w3IGvA9Wk5a%2BDit7s3EM6nPIVAIofSfq0Q1L4kxvZ3jEH0q2fzCI0rtnkYdDfa59qXM4uaQ6sMF%2F4AB1mVa7JmQggMqaqH6mi8sFE7gsKhO5hn%2BwGhb72LZ4podtOdWeIU9YmqiM19NF%2FrvyYiapYHnKug0LRBlTm5qBJ2K1KSn2wS0A4sL5Ea3t3%2F7LTPUwmmlQYiB5wOE09IauGJKOaWB%2Fo4A&X-Amz-Signature=796c49bb04178edc97dbd494820302feda226bd3969ff4e8a4d8433b6ecb7e17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

