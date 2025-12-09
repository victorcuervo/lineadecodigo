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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L4IWLR4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGaHrOCZflg7JMesapohwzJVJC7ArQBlGSapQXp755yQIgRry%2BcEJ8RjV8oRlsVO%2BQh1JRbkhNNXXYh3m4WQ7d0p4qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHCksJcRRoqrAAOOircA5G7hCidR1U2PDk4K%2BhCKzHbSQXA%2FSgzbTTutpBrH%2FBMNMLWzk2GTwNzf12Sa9KL%2B7L72P%2BSoWCVMicXDS9ThPiUehYTbBpOhhQMQDzDvYFzeymie5pzWP2FZ07Kxv2llyWigLkY5RnNennRv%2BFzsctI1Bxx2EAt5BadSu61%2Fn1VPfWlo1JJQMmGDOWRKaxGO2r1GbXCYj69XKC22Tqyq5%2B%2BkcSD%2BCRHsYx6Ee5al1v1REgPoEOnQhqPnKx7Hp%2BS2%2B6TNtEKzbuohkbwB5GErSqXwk2BsV3JjPEmKk4OMHCDQeGAhs5C5YpR%2F%2F7H4WE%2By94JaIMDqZAwrF%2Bne%2Bp7Vo4b%2F6PAZZQkjt6x7YsK75y5758qxHNW52fW29h1WOgGt1z1xI6qGSWpMrVHz%2BywXBzde4uiI9Ibnc%2FTI0TXrktWwwu59tE7KTP05odn4tdC4j3ugtwxfYLRkM%2FzjZxP2v98%2BX9eBOZy1PVxad%2FheRe6QWdHJtbh2Pe8B2MADPs0IoxovizZoehRJ1B2i%2BQ%2FMh87E97YtQfbfM3KiI2vHjNZJ5eXtF%2BP430PejYUUK98gmmggcf6Cqhc9zICAXsdk82%2Bncz6mHq3MGx3sdNl1lNcSQcmQ%2FsPHC2iSCacMLiu3skGOqUBx%2BaLfhkFuathRCOT%2FMOgrYxlgOUCb472lNbURrMz%2Frw5%2F%2BqwDxjkFvp7kilIVA%2Bc7B51mm%2FSdxtX%2BstqJpHUNbRfsBE7nLNuwsFQrVuxr1SwwYVJKNgDbDE8RcgNQZ8sHMqnCNtflsXuSaPgcs05ca8oWCq6rJaKxBpb%2B5XToCUF6XAsQdbxYL%2BegPHJpD5mYUbgiUoYtcefwhVqayHZ0ZfBKKAc&X-Amz-Signature=a0ae5d4fb3e57f3920681d1971dc874f1cc5906c79fbf241b82894192ada7856&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

