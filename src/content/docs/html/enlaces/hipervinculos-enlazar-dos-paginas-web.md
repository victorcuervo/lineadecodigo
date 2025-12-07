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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXWTLRGW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfGtM54OyFct619JDalqAxcrXkHdBV%2FPcil3f9dvpOFAiEAnhMYhqUaaEqFb6udlHxjIb6GqYIUL25HPL4UcGHq8HkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2Flf97qiqX34xUMyircA%2FWbe10FkbUbu1h%2F%2FlGGF5pTXNEwSOaTFmiaWQlBP5gPf3VJQBNwcpHTylgJNtzG%2BXaOuB0xfOsAwiwqCr8ojKGn6IeyqDwW8GSheZpj9Ha5PkdlkGgnNOpqlAGRAO2Lea5MQuiCoQYSBIqfJ%2BDpznVHl47iVokHh%2BsPBJ5b%2Fg1S9uBu1v63JDOmBWbVUDO2MmBYyivLXY3kh%2F%2FpgvpQAPAui5u4%2BSBkqXuT2h7mdoJ3lMiDrBjYbilIvVkKf3WpK3Ikw1h%2F3PZrb9g1Qvn9obHmAOCqzRtJiS4BCgfAqEst%2BVTd3rG%2FbGIjpxBT9tX%2FgHOg4YVRdiQ7i4WuFOI0%2Bcol9L%2BF%2BtlxPBDjrQNQE2K1SKPc1iZkgkJO7%2Bc9VQhhXT1%2FXc3pIEwCRDt994DQq8OEIYfjnWeGve82ufbwrUKgNglBo7W4ZYt2v87Ie9c2Porl%2FcILh7z4FFLUuEhcanU3pUPkhjrnWKOBu8UKL8jUT2ZV%2B9jC5g8%2FZ92HqzFEKWaiEa8WkNQdFwlSKE9f0E3L4iGFTyQ4KVBcG9%2B3dSVu0ddShTj9VurKI%2BOZE9a56aeU64d98ku1ChlmNavelxz3H3pKGU1e8VF2aS0rNxACSAI%2F2FGaImn8gczSMI%2F90skGOqUBsoteqxvir54hRQoajE1ANKn9qMFRevC%2BsEfmHE%2BnPJisbpXPViwq%2BAKgnd9j%2F9ZyI1wLhMk%2BFJy0agU2T8qY7XIZTqh%2BR5g3clN5cmkA6LFngv2acfm86Bq2Zwlt4ZEn0IEmq%2F2jKJs3GQUcrbJq52aPA2Uu4H1DwZpkxG16iY%2B6ptN7UZxfGvBbEBOU8KAT4ijXOMY3CeFuRIkG1lyhxKS0ymhC&X-Amz-Signature=b9c1b6b32c992313d9b1f9fb7b4c730b460ba2fba9e16feaceee759595d7a53b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

