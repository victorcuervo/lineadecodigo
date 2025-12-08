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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLGY6IWX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T032836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBVZ51uO7whRAl0lg3OEIL4jIlyg52fv5nxB9DE0xNlQIhAKylb5y7mCnt1q32lEkcWBLAoOMl8tc1Dw%2BHutG8AmTuKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwcap5KYGWaEMXFzQUq3AMjrfZT%2B1EQ7CWIAAMYHb7tB%2BFnUMrskzwFV00K8GTiotTpAsshkXlOXu4mM8S1LRrcOU0KLFoNu3wUS3NtBiGqlvkw4t420%2F91WVe9bDz0JtFmp9rM7QHii6Pf4%2FzNPp7Kn2JgwuzhAsBURWi1M7Aio1IqS12k5Jps0Zns60xJGKoq5PP7kO3EhnhQMYB7HX0i7CCNqRIi6uods%2BCLpVH63v4UL1KRwWd5qhd5bOXvSIcYKo7awA1l9T8e0rJe2dly8LxowlZhWxt%2BQm%2FvaDoRtf0UvwX5jQmnGUhHcpVtxnx85JChkoeaSkSxPvJiCj2sA2VO8sEFzpckDefYoNemc2oKxSC%2BArqGuSZbyikhAWBB16%2BjmMI2t6UK13LRUi5E0MgmAE%2B86xlN66cQXEjsJ5PMmadNrUsNeQ%2Fv3tpcA%2F9Vjf%2BB6wZM5UgnyPurWzts23ZASLzKIBqa5QIPxigBJl%2FL9qag7QwtaVekBnsn0ysaCze6XIR3rCO3N0UpcZYedOOJQBPCg5960ohDjXCTM8OizBf33S3hd%2BC3KxzmHJpnt8HHcya%2FBdF09A6DOTiRtdvx80UudWxc0EPD1dQieNf%2FRQn46K2IkD5TIaPYHzBuLqMJlnuurNR%2BtTCq7tjJBjqkATUXF0EQx2zjuZsU12cFvj44FY39aJ8X3qKMBD%2B8WqMt0f%2FjQrkt2hc4x7j2IsPzK9BZb%2F5%2Fd%2BMwOQRjHb2YkiUrh3zxKSg6XWTbFXtDyGx23%2BTsBl%2BGYTgHRAjD0W%2BFlTWVChDXqUIHIvxRa0fDsEdJ2rfaN%2BVBxfkZT9GMsowL86SzvAJ4TYkNJUYzJxMle%2FucJ4%2FhkcKDQ539U62%2FfcXI75zP&X-Amz-Signature=a91c3efbe8f92ba7cede3e8219a31fe812ba984aa52ad294d835fa883e73fc5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

