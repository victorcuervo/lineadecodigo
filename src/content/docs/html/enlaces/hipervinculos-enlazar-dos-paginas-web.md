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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5NW63Y2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T024255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwXIcdSHvRbdrvtRu63zewbX58lVj9ZLTgycTJ46%2FmewIgAmswHD18tGOWevD0f%2FHiBazcj44dn2XUu27uh90wIzIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDLJ%2Fvg%2BNw6lL8pdSTyrcAyp1ZFpeJHjVWnc%2FeKP1mcU3y34P8GX7W5ZCikphbRRQo3uiZgpnCCd%2FKSA8pMkYem7yCg9up9b1pW6NbPgM5aOgN8vqu4%2BOHepvf%2ByH%2B3ALW7SiCjVx%2BvAlqSM4bZHdrd7VFnSjwqJStknHkGV2qkHPEV4DrKDfIlz5w70fKa9aNiwpJ115CKM5QI8Cevc2xQNReqcN%2BXv3uC2FNQnqMQVgiVQVXb6swSuLYH6LawajBLFfoU0XyexoIHTsiEvgh1bb6z9bzSRcS6aRtpysMQTkX5FLGvwJD2T18DlIPdl8P15Hw7WA3XLQ2GAxj1k549Kj0sd%2FdbE8l%2BUKuHiJYlqYFYcoYYBte%2Bu7dOrTn2UBKQkGZK%2FrJ%2BpfbpNckYqTewMPqYc0q0ZGaC1pbGSeQhmm2lhjM4m%2FLUtrx6zJwoy9k%2BfmOo21N%2BUhDAio9jR0mfGs%2FCsWE4OyQCbircVFnwpEZXDDN9G%2FNC48lJEiCIGlGkVMSZmheZnVHFwQ5iWierlq8o3ye%2FkTAGyrwa%2BetYh%2FH60PHtLtgrQLgXDniOWVOAvD9KucY6rrwamuy0Zp%2BtOFaKLjyN179PaiGs3XHyNKh6b3uBiawhX99GZie45e7lO6cP4BXYrBSbisMNSnzskGOqUB%2BQ3dRpzSGbRjzJfuH%2BcvcPEQnQKJmawb%2BmPP%2FO8yDjHAGBr7Q1e0gvmzMQPSFfAyhyAsIzcWuNIEYvajoob%2Fun0GpA1xNeR8LwrFxJD7a%2BgX1wnfGAb9wu0Inj%2BF7dDOhuMvhcckIJeDCHreoyz3RrekdsHoB%2BCjXimqmV2YxAeetpCVJ7iuACv11R%2FO427v3pdyQZExxiWhtPbnHBoRvAsl5lPy&X-Amz-Signature=fe9016a5a862cda04b4c2ab50c23de8323cbb908dd3406da0ce1bdb83f2e7695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

