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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TKT774S%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCvH9th%2BR8X85Y122HYVXA907ZQoH9mVFsQb2HFImSpvAIgGjoiC4S1lttcpCFJczVrvc1DluhjaI51HeOyfhBPqnEq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDAR0RiZxYFgPQtNU4ircA9rfPG8i01qxz6S4CMPSfFcVr06aaK520%2BWiyuUpRAaACCklc2%2F1ruKzGc6OOpYEhsEE2SuapbnsQt3c%2F1Dro3cQekxGjcNzYLBYNV8OQv1sy6XQW%2BLAwPtrTOAVy4j%2FJ5Q3sNJpQeQ6DhVk0M200IP0rXfT%2FAMXmD8g4U0KH8i1STKLaVlT9TvLLudUoJmr7b3i5ziGeJlX%2F4uvx6FetpRiQX83ZoGQKrBp9bT8LQXxIOQTgBh41tGfWJ0BtRYlDCW%2FwLoS2pI%2FgUcSuwPdgNKL2rraqbMMPhsR8y0TUKhwCBR3uIlvZHvnxKPwM29nYoJqtZwCE65%2BGs2O8XxnGs1B3wzdE7Y4fQOWaMptURCRvFj0mnMyfh%2BoEjUmoGixgW5TE79MQJY6JBaR7L8zYHLHbogayZe%2F5%2FqISVCWSgak5mlwJcT7wrVqotEBYxvaYpFcDNtSMGLrGcuG98t2Dz6o4u%2Be6DTcGah%2FGjOExz3hejHlPJES5knYuaOHAQG3Di0RkQyuIX6gcQIFnROzalVXyrG%2BbpdXKZ1vA0FtV3eaLkUHSWQq1V8BDkSzebP3Pir8EmqqNAKck9ftWIbP1Uj7Lfl5yo7WBPt8wHgcDBwue8lZnQBjWltZNCYMMKf4wskGOqUBs9aXxi794EREN0JZA8XhKUZ30pwZID5Klv%2BFNGFXnplaKsMt%2FkzIE42HavxA%2BIrwHh0Jv%2BohT3P4uLvz2n9pf9mwf51fv%2F5WT%2Bk%2BODEQJ1q%2BuKY4gcFehBrcyISAxbkI86X20lpoFiN5MuDAP1FNR80sF9AuK3U4SLXmqAVkdS1YT7AqOEFze7K4c7fdnnyAEy016Z89zTjnGFfETntQnZlb9TM5&X-Amz-Signature=2f1cc5b6b30b99dddcabb03044c5fef17d04f284134036ce65de07237e1940f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

