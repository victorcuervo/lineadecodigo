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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPI42WOY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T063127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoBl13JJxDLdrTPHzbOUSvtkbc%2BKD5ZGJMS0u4mpP5OwIhAMW%2BlM1FRrjk0Emu8URq7Vu1D1ixM61px%2BkWx1oVnJE7KogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPDlA1HLpWNToRB9Mq3ANV4jBEBg0T75s%2F85QFQtV%2ByGMX3P%2FQphBl%2FOiFuTFbaMRgIvOcGXWPMH5TzcFbXbjs8s3KKEGBFSMrjstZLBdMuVR4NAGzE46EUxYIyw0puauhGK%2FruvCk1n3X37ozqfXzqbTUo4TGqQKNBNHjfrwhjBJO%2FfM3N9YOnKHa3UufuHpjL4KFXEwhdNbpCl%2Ba8YXHPeH3uuh%2BKzMzFBeIbQN5CXa%2F1LXsNj%2BCk8D%2BfTRc5f7Cqv4UgqffDV2A6WkOZLjDZygQ8xQS1T0xmgGF97hBWzxPmQUn%2BXwYv3FklDWlSa41QHoXujF1tUiuY9k4jaBn3tL6%2BqBUwvAGcaNwDL01P2Ey%2BWH5%2FU3Ask872YMp6JCRoFFoq98bofo%2Fvcp07aRM5w%2FF%2FE10RQl0zyEpxcBptby%2B4VKqeArtAG%2BPLpQYkJfXkLaFKAkEPkijRE5gJcXZAFFuhkti3MCaRczI09cPhfWEEEKQPD5YaJCc1xUHIKEoAdZQEB%2Bjv1ZNJGHm%2FmzrLEVKO3Tvnn442%2FYUXnpceI4GqP18OEtYsymkOvS%2Bbvedcxn5njeEltWA%2FJxxslOCmlhU%2F7Y4NajMWIg0M0%2F1il2juRzH0lXH4O7TedU%2FYfazSMNcbZxxabDVfzCp0dnJBjqkAd8bNpA%2FGTD50wDLkF8ZmnwNAfb8aesZzMZQnNpCHrLw6O3Nklt%2FtLcH%2FfGvXkburiENUT%2FBAPeDcLR2qLW5iifyWXixcXCIT8RL7IaOB3G22DrF0hD56g89bE8GZw86zMapsafRzf9vmIy3wYPKrQvFmSg4YT2bBvJThXVAzZzKU%2FPt1t6vB2XDrG9Zo%2B1N2nHnoxOnLlJlM4b6i8%2FgwFdkDZWy&X-Amz-Signature=76a7344ab1b5cb887341c9e07193f1d141ab1ce0b64e7564d032da5812e2f1b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

