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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCJIORS6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T052304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOf%2Fjus3SkJnXJAnOdmO6xe5vUKaTljFf6BRVvlKoNoAiEArBRtoYCe2GJsnFYxP0vrqhz2SFqWMsCPv0xTrunTFDUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJJISFEH%2B5enukwGCrcA3PT%2B%2FIcpxuILyO3Omq3NfMdC7o1jLhwS%2F8zxk%2FDOgF71FNw%2BXtMGnTPeXOzVulGdWBIGCYwu8nKdESILarb3jqIzllf1YhCaIUPt2C3IjraQomBNugbtftDN8SMgoAquUwOjVWNESAuf%2BYvG6qHcT3Y32nVaTCNtzWJUYt%2BtWv0ht9lKO6jcHHc49WzP1FFfEXwOquOKkMZ4u88pCyK1k7rpbXVr5q148w8ts8qPRMhGenIhJ6IMd00esF9PQqzT9MqA3NZWxuqICPa89F7WtWqHXBcrUG3Ri6GZKCwsM4fs0V3hv1rm%2F7qZkOC72vbsrdUGDl1dMkqv7uAsCyHuLiCtsUkzgD5Q4A3DtMh7lzNEASB0oOzlGrk72FOAhumlIVFXFX5gkA7Vcc2VpRodF3StgwwMbhaQ3Sf5iGt%2BhsrpW7oaCYgNW4Uus0guGnRF%2BLJm%2BpD2D80%2FvlCgpxg%2BsHGSqisz9RyfjV1%2FQZE5GoJO3xCzUl7vkSVxKp3E1hlM2g%2BsntjrGAcBqoArZIvQaETUAtiyQ8j%2FT2jqMHYFqFz2hmnTQfKiaYESYcPfYHr8L7ztCk52QrBD5j%2BbzIhUcYfCHUNvDEWzW6VSukF2QlNfdQMxBGRgo%2BXotWFMMv90skGOqUB%2FMrbumiS1%2BK9bIWWK3EWbd6kdYwlEBdZ%2BQhzzg%2BZG40LVEA49foZmrM%2F%2F9rsiBB%2BcSW9jKPoGok5x0JOGFTg35qDP1z7B3F3evq5Q6K8BSUsqkOlhl%2FezzqcJcjcwnluDmjBdKL0lzdBQak4YTU0ZNwwk%2Bq8ndd%2FYWmcToSaSvelcC4z1Uh1Vq7yWd0HGHY5%2BQ2zu9%2B9Cm88AkM8PfEsva%2BGi4EN&X-Amz-Signature=e1215e813eaf8b8310ec117cfda9ede88303f5ada89737b4bc98681a04491250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

