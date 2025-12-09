---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KYNN7D6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T190303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEiDOsr6v0QykLBaqCuQmKdjoh7%2FwGasPidb3ydua%2BIjAiAcY1FVCVUybyJrhs2j8P1K67RK8eDkhaoI0rIFON4M3SqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKHsZfdSP3dVrIVAfKtwDKbgpc270CSmFbbvvhfP2G9Vad1gHJNn5R5pEVu8UXl%2FUKncO8w6f4fjbuy07QMEobtszM4w6JPF4FFREwfColY%2B7x%2FfV%2BrfyPmyPjYg6kzGlEWStaEC4UhZnRJqlxcLEF49411nf9zfxjMai4IWUtPJ5EzXFsMUXsbLGzzfzzDzhYXnKj3o0wBfwtfyhJUxhl6Dldk3yc1ZFZItf0KWJ05Ny0%2BSohVNnUFD53x9X7UO9JdkA9BxObY6KSHNBKrSO4QmXydgd2Y91RK5e%2BdQ3TAFqWgikzarNOHOqCEbhSWrFI%2B87yhTg342I1NzWY6CYmEB4GXjaM%2FluvP18tXK9qOCHueXjdmyJSFobl0W2ieCFsJW%2BcRC%2BzIFO8A96qn%2BfoI8wU606g668g1FVxl6c0EzaA6gkrzyK58CzNQfkjCdcsuAgq2pMqdV1FO3AOjgC4Jw%2FJvvmCzbL%2BqkyyCQ8T%2B0crnWN5i87TISAVkTeybWy%2BWnLX1QWsoSRBACaHytnWM6vcPqBvtXKLVfUgi76PPKMeFyfXLH4L1mPpelapvW9EP7jAhLxozK7znXKYb2Eo0Wqgl1f1UZcj8Mi1iNogXwtNUqj6BovqRq21t4aaHrb%2FEmsvl9tFct0%2F4cwvd7hyQY6pgHt9O3WFElpKcyYnEA6O6W6RJ7n0Kw1%2FK8%2BMECCLOL6mQlIiMGkTzlu1XzwjJLkdSj8tPv1MfPjbz3oipRujXixNs3zA6ViiamolH1kFbHodTAzvKEs%2BdcTpOvIxSoEnGnZjeBgCgrhKmgDHLFvQ0i7sSAVizrzXVJ5gnQzhOELlyHMZhqrraWsTZYgvTyXLAFAYsGB3yVarUPO81%2BlbunMco4R4QZD&X-Amz-Signature=93916ece7edb1678425f1a0205f863963cdfd801ead0de194ef37371ca83cbae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

