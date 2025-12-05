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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSAOGAZL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T040947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcNPMN%2F0XMiz6YlOi5IJP41KGivQ%2FhhOriD9i%2BihFX8gIgUzGacxQUtVEe61HlkEob0FxuVZRLTTd0RfqVP72QBj0q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDA1CD2c%2FZeTZ1cTgsyrcA8sRVxRb6e3AcNXJoS%2Br%2BxqANRpWq5qNFw5lQ8DA%2FOq7PEv%2Bwllo2MEZpznjfW4pxtwp1vxnvNa6Mzv1BPoDLUfpGWdeCAcTevhY4h0Lu9iT2K%2FqWSNdqa1Ind1TQ%2F8H0gZ%2FR4SJ7bwrr012mB5YMa8W3v71k%2FCHUIGf%2FtBQe4muOOs0V28ZagnhC9owCOJYjuKx%2FahdF0aeDad5BHpwb%2BsRk7zkwBR7iraUhJ4sncHLXsOX%2FV4f52y9JbJ4lW4LYgjHCnQ8ET54suWjhSrrtRoE9v34kypTFUPMw%2FwymA2ZVNZF3FT584FWRbcs5EO87nWeB1sMyf0uT3INQb5f%2FBzxI5S%2BC8AA7UvQ2fJlnLYT2VNhxQHB77v2oWc44EjRAzVpXvyP4WLZYA4bJ%2BN25Grk984ijZCn0k7FiVG7%2FkSawro7sCGZR7msyL6vpDw91IVGbdmcDJnjS0nEXOP9r2w2G%2F3r2YGn3dCGrIR4PdkmQCd6kz77l3peH7bgx%2FuUhlCfCU9ifOogrscJxKuFKv%2B6Ona5ZOuJDekyBoE02DnnjYH8zlRfNV7x37ltxsrbKKSCma2%2FMv%2BxpZmC4zPR2E2ne0JqKmR5PfIWKdjh0evuQNr97bFtAPqV%2FItaMJusyckGOqUBHPsHSYYt66Jj3m0pTfwsU2m2akZkV32oCWK4skgql%2Fp9N9GfItO6kdz%2FOm4jKgKSNrOj18fAvxFRZxlOoFnlvobgPZtR4ceEeYCzqCTi5LwWwjTVRcBWp9wr9MH9TbquKYFkHoxt2yqClNCtA0jzfzHYyBklllx4rcYncST%2BG5Qn80POAqeZmFas9QC01lgomBuKr%2FFvfeg4IQqWFf0f%2FxxKYUeW&X-Amz-Signature=7963c66b3fe335664ae0a8777f718fc652d2c82826d5d3d113b3ee9f6bbd9bdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

