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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJCIL32Q%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCIYjAEiR5j2OlpoLEmcJGhEwtPCxqkD%2F2h4%2F%2F7Y3pPiAIgIxTb9Ed3s1n%2BVppuyyOuLAliolYeTzp87A3%2BaMivTVcq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDNbM2znO39cxtRU%2FiCrcA63mc9MXeNO%2B7NGcpCEWL0hNxnkKtI6R%2Bs2ugwAo54R4UPoS8EFnBPuNptmPFnYqykc%2BJ0LzP8xi%2FhwNJSrffH3ncnCUQI6GTIVWRdnQkfBvEEZ0MchXPOZp1XnvQH69Ek%2FeNT9aiGBu8lpHba%2FTIQxRBCqhBz2DUYQHv9pvl0AAR70i%2BvitOIQtfND2Q51YG1ib%2Fhiztgoj0rs2LcovgcF6%2FoG3pqogn%2Bru6WMiKQjo8lfmZAjJlW76N7kCckJpYJgS8UNXQNmfIvxBwamaCgHi%2FKu%2BnC7DUqj1IWPzD0rrDay9ZO5%2BiWLWpKzeXW3QhOyXbCRaNBmKuwQGBjTN8u1ucVnu4PglMjflWR%2F6%2FxlgajE7h9UmH1ZhDw17d2%2BWu%2B5ugKVcWcUzx0q%2B6nMbisRT07pOfWobqUt8LyIyP3blSX6pUf9eUu0M5TF6ESvfCTOjUXR0J5Zs8W5Wc5MedXTJ6%2B3xVQN105F%2F3A30uEpcCscYVeXDzl6ej8cwscQ9Zg6aCLsgzhqSC8M%2FVOPjym7AtIDTudsP%2B6iQJ7QknPcIe%2F7AT7CR98jzqwt7uTkXgssbQfg5k6QZK%2BoLZvDG7Y83R1zMT6%2B7grtuLu1TvqnULpErjMuxIpwXF37gMIOExskGOqUByKhirOmvJZTMjWvq2%2FtzOOuDvDrYbG4s4yq5LCvpqf3x0VIexM748SiDCJlR8ujnKkNXQmUq7RNyuphp%2FnPu2YP78yS1tNgzKainPE05tgmMFONXaCnFU24ATVNKl90zLSeRH4TKPGZ%2BGXGmAj2pASlaqpT29E21CRKQqHIqn4iaFataPP8k%2FH7YLQSWhB6DqRPb3B2J%2BgOV%2FreCRV0B6ADzEaHc&X-Amz-Signature=eb0358935f2026c5029f9c9a45520576cb894cc0b65254c90f1650da7349b57c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

