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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIUQGCSZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T104057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVKShx83tvifqUqA7En6cIdyr9GotekODmQymlr12mIgIhAIoWLtP%2FFizofBWlWkbIrja1qXpivlf0OYKP96%2BPnszWKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2FfwMMwnnOro%2BiOEq3AP4F3l5p%2Fnj2wJOHG49%2Foad0BzvU3iyGOKQ3Y7H98pNrJU9bcqjFHyTmNXXlkV9RUn83%2F8BvuQRZxsQQXI8DhA1pqtO2hQHPla1%2F82m1Ng18s7FGvS66oDssWmhC5gDsYpoOEV1GeFBwc55gOEzM53gOtU%2FqKBeuifJ%2B60B3klUmMBi06e6IAY0auqSSOF%2F0bd2tudFnmWUByf4%2FqbM9gZjzhaoB6QYFkfdAFI0ZIbBi5ixzJt%2F8wUeZvRIfgVFVPr0wjWqDpWb%2FIukQoHr00OUdiR%2Bk0ONf6gLBs5KaKPK8CQKRKJaJl1m7BKPQGu2S%2BjHIAwqb41EOdjuEAjL8wH5%2BcWm6xs%2BrKwQbMvqqVs8SkDfMpMj2r4hS0D9aWFe7jmxTS78mLJUlliuZI%2FP8SUhrJ968ZpkofTJuiSaWvTuowZOV5xBNzb%2Fm3l8AjdsKwC9TczNGsTgO6Et6ulJNpqe4r37AmStPzhTl2js1bJc%2BSLOaSRdLnfWEuWu6IpcSg5yFbm6DtEebKUudE8Z22FZXFuIpgCArmJZbEIR%2FUoxmv6l%2B7Qu3%2FIdSSNA0%2FX2TgpTwa2g5i8OFkSOSMAqL2lqS8qvRO8g80rkuJgpAsb52OEfsctmMPGWu68jczCcmdXJBjqkARIt%2B5XsjRHSjYUPmimxsvTnN%2FEbv6jsWn4HaLq9QI0Pmzd7SHTqjQ%2FB9nj%2B11UAvGlc7HqmCqcZo02BuFI%2B8PLOywtYi3derc2tWqR5oFg%2FqWQneMl865XbqZQh%2BMyGcBWcbBV%2FaKHIILoW2P4ra1TEBnM3XB9FDYr%2FO41%2BgJ1f1HxrF6jOKRFOWeK7cD6Oeh4BP1sowEI%2FQxw%2BKRKIzoXw11bO&X-Amz-Signature=ce20edaa90ed873e32c9c4a31a307c9694bd98d5157f29d58435593a160682ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

