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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655ER6L2X%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T170432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVYeZ%2B394FMKOyS%2B6eUVhTaF6txvuP5EypdySLG%2BLGLgIgRpdC8IWU1fZl4imhjCm9pOBUd5Vmc39Ifuz%2F1a6yrJkqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDR5Q626YEdH9Zfl9CrcA1XTVjwVHMZPSW9yVufnAsFMHazalKrIFSfICagzd5zFaVEqcqeHVpoKabx3jnxcYaC1UCJZBOuI%2BXKn0KcaZucsbYbe5WoXPeOd3dOMz35aGQQqDPdCdxwd2CRxTYdt2M9cur5az1cckPDEqalikTUNamK%2BlbwyEERk%2BeNbdg9cNRDPGa8GTMN3qgenF3XNfEaz1%2FFqkFuwEj78Otp5WP50PBwlM7gLEAccJxNRXRaIKuCISl%2FbufmJ%2BpPs28xTQJSEMef1N8ecLYYG8du7xdxm486Ev8db%2Bdfz31tDjb%2BzeG4t%2F6Er8n8fVvbTg5gip0dWK40IH%2FrN21VTUPhCo6p9yApodFD%2By6xW2wb09wysvOotXm2Qy4Xox5bTWCo4wJkksVrCoalf5uPsuVN%2ByE%2BHpZa%2BpE5yrzPhnQQSdvjO6w7iutZxUAXzLnRY1BBoB7zR41uA1f3SkODEgzcN7KHr9vnrNHiBqRpCmq2bfgijD6FqoZYP9kiu5tB7iDWckNQ%2FeUEqjMTKB8WOiFHDO32WbohK9BEmjeJFNbJ9RK0pUOflDhImo9hsZq6rRVhQ6XRMbtagRPlVzXlN2vDC1uAantJj9Gr7732fh8BwVMRyPkpboIiA6vP6CMGgMI691skGOqUB81sexJwnRfEMkUg4P0oQyCLHX0cMFhGSgVcE%2BiafjYJ%2FjueHYRi4HPFdlpfQIOg8bEyrRpLNu6uRF%2FaGbNVX0eQhNUCkqssKjkn2oDqI3310bRsTOJly16Sy98jgeRGUV7a9rOgfu3hTnkha07Hojn7nPeVPh9OpdrbKpMgV9UOT7S0Z%2BTQK86KsKDBXUeqI8gpjUnq44BxmJ6xedar3p8jl2zQo&X-Amz-Signature=8eb4f4d801cc0b7b99595c621ad0d6f7dca5763ccc19595c156553917f87cda8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

