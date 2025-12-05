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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRBENCQO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T212804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFpFVapmmt9w8wrt5T%2BhdQGI8iBCTzcqPdjAXMvFP6X6AiEAprK0fSaCvKfsa1epuegWktorTmahhFtCo4OFTLMs2zgq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDG8jcfGp5pM65pCwsCrcA%2FYanCp5hoyPNrt9wliQ9Sc0qPYKyIHVXFkVpBoMKrEYBxrMzeFvxAE6KlgxKhrdbHRxe4YTmkYfO71mlHwxCUy66F6H6vV52162Jhqm%2FybQtnvdnJuLpZt95qZyRjRc3y7eYqoSzalgR7oy1SsszXgXWAaypgT5sMwU7DFLd045Q6S6leVa218p%2FepJFsU%2BbiS32COuDE1EsY9M6va3RLuuo7W6nc%2B7viXCrxkOZQSkDtvCdFEcykuVl7XmTrp9Q06xcEdv0yVrjUBrQ0%2FiiU88klMPLNFVHUhlFviRTWfzOWK%2FunsJLYUWl5G7t9Wf68jbB%2FHs4OCI38EV%2FXgi2MKPNGvJeyf65UcdbbWDvr6YWfAbBGd6hjzW%2F0m14hC3rxTVPJlUUgS6zyrd50RfVwr7QzPxik2BfslWP6QWnwHsv2MT8YWsoIT%2BXDo27mx9a5J7172g3AqLmUsuxtZG9jE%2FNrXQTlE57T8UOurb%2B1hyL5OPRpuPudrERT4F6A3%2Bho44KkR2Z%2BYj2ndzNkPirPRShIaWjxTszThU%2FlBmfMmy4cLmhvk1NQ%2B2Jsh3G7NV9JwV07uKhtkI3lGhv6Wa7PGVbQ00GwMomeAGeH6zVxh1ecVwVhmodhsxeBCvMP6OzckGOqUBBULyvpZdK14EW97mZUDPcWRGeq%2FOnOvlui%2FQixYd5OEKJZMvc2f0AIBsnf3G0wMd7o6l5JpzH8uiA5nfknlBCTR52WCiiWpAnHBGfMWK2mgQ2enVq8dpoNNK2RWSuLmiOKRmRtT9uGmxIokROthr5EUt0xXNNwMeD72AtK05jIqhd7420Uvoc4r4gYw4mMbekX8gt41e8ess9LbW2on1P5y4Cf1m&X-Amz-Signature=3e3f9836428eaa6ac222f0c1a084a57170b49ac5565eccd7bc20a77c352f8021&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

