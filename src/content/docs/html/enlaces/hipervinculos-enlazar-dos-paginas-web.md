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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466525ZXV52%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T181236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQYmITDVVXKB4lQciUw7f2OXq6ZYFB6ShC3gtcFVXWVwIhAOTFDRXUZY4kBcM8iz%2BsnksbHFvW0m32BmsEQk1iqGmIKv8DCGAQABoMNjM3NDIzMTgzODA1IgwToiljU9TuOZTXIEUq3AM%2FTIyt%2BbmDYK5%2FvD04fmGT8pM%2BrDNefdjUBCexwMXelaivPGVNfB%2F%2BkJptvBvv131juEPrJ3Opva6eSLB%2FbeeSLZBWWyxXAqVI8Wt8NeXUvSncDfc6BcGTt0dnGS9n9lIBv3UHjE5c3XwzVdPIH04FKgSxypC%2FN9Oh9VDD6yM47HLVl2KPvcpIINcINhQdhn6XQ%2BIDK1kw%2FoUlmVZkv5aFeyOr343p8tGC8btyAev3nWAlWmzdN37wco9yZam6uMqDBECaP3mpbZ7yBBPgvI%2Fou9RQimoaJQoEQf%2Fsn6ELdUZGM9EeuAS78OWPEAF2alkchx92ParuKu2q8rHrweN9IAzZmPGCiUQfr4DT5gsH6iru7pUBE8zpIeUlbGV7bxChSAfUizKCBrYMGtwv2RwVWXCDEzpPSgQjHiITjM51thTIwV0vh8hNjhp6ZWBzrUeHo7KvMf24Iv38iB%2BVi97NnlG%2FEJ8QBrzM0SmaV3MAWFvCNiZs6E1DyrJwX%2Br25QwMf%2B4lh8mFqkl%2Bfn7UqGA9F0qxqvcnvJyVPqNqxwFaGDicpUEK2cqw9mHW5Mtad9CK0GIWZjjG5b%2FhR6i5Aws32ewJDB%2FtQm7wycdNeEopOQmO%2BjlY2vly9gAzjjC%2B4cvJBjqkAeUR8FoIZAxD4D%2BPqsYxepy7%2BwwfgD6gWJvn3pXB1FFPsUkV8Yrcva1X6Qo848H40C3yvp0EVT19nzl8aSZH%2FDzmKyNXJ3B0T0kLw%2BFW1KzZ%2BW1eG8HAeG3NYS8jvr5RZEbg8m%2BcuDF0lFLzhWbwqodtaZKscWcSp6IzgnPBi2jRU3pUSjrpp4xPS2QibpJy5GpdTcIRLh8fWZlaZcgcgFiNiuut&X-Amz-Signature=ec9336166d2a70ef981b87d37c81f1e8fda4f8903819f11155c94a9aaef3e0f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

