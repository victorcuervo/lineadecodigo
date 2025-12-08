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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622YZTPTJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T114824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvBO6tTxjx3wWt7Bfo7qVUJPkuQ7ZhuUFEb%2Fnop24hrAiEAnXHK8mfLlMA2fCZsnvt%2FXnMxz424Y5ZZhaIGQXSCNBUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJrHSrDkcnPBx%2BhjCrcAwlvb5G69LQe96iX%2Bj2TaMzyjRaGd3gm95QumNYKOa8QQz1K%2FHwV15Egpmc4NFj5Kr8XqKzTFqtj0bqfnqMvVbQm4eiTPCi7sJPSx6efsngmQL53WETfNqVPQCwKgR%2FjiS4cOno03usggDimk8laerXMbHbKAPNReGGsiJDLTG7J5MZ%2BBaNqam%2FX%2Bhycw8AxL0AkXhU8LrS8w59zZYD8V5lpUGzBCb3fAxMRaBbVruUQzLoejgDj7xk2BMcIDZvu3btfm3fUaHfGxxPfJnwM1C5kDCePzxuRe1v6jTKyN4coISoC8%2F2gwvqviVcVKVRSaQQeOXFh7tjbc30HPbIeYafsnYg1tRjiwkUxPOb05z%2F42E0hc2Uhzp3txX0uHVyqOolXzzhMobAsD%2BDbaprcpnJ8Zwo9rUJH5Hn3UU%2BDObbRiwYyfM3DApukaFWXkpsQf2%2BUnOm6Wf5lCjtMNA8J6BJ5JME2PIbP6yutOeRNM%2BuFpGIOF9upyqBtCYgAwPeb88kllKLS328EULz6rQM57miL%2BRPJkBrLv2iF%2BWFPY3rAuOApEvGm%2BeASoQdjimb62fIlB3b5r3eEHRBhWcEYHdRcizCSSwnWOAkkYyq2bmq1pjPmKuJ3rtxxkM4CMM7z2skGOqUBv625L7e9CRCf7leGL8IfpqRFc6paLlXBUb4Mnx1WE3Y5aq2RXxZQ6sTVq%2FRptgLziBkvS%2FpwKoFSqU%2FR2Q0E%2Bf9dyvn8X4yJr1vpRGXb7%2BFrXoGgeF%2BeBr9Co1uPsdLjisSJO3iCj9eYfMEfo1vH6oWn3v2Cvucn4DTLhIh6nh0tpnclskJDWyzUHHUB4bql%2F1WNwREi%2B2xygazx7V3fNAWqSjef&X-Amz-Signature=4c5dcf0439abdd15746f7688b34c27161f26575c3b2246d6e4fc479d2793d342&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

