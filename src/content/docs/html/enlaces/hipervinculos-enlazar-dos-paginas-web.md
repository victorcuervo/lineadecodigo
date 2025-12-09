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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGPEYYBR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T091927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgEBbVmCziMTxTjb06kMqIl2MEDylpyZCWjtnal1DdPAiBov9DaZWoGi39M%2BlntLl6hAb%2FpydZRU%2BHgwr5tRIctaiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxISOSnsTeJ0Ito%2FeKtwDQJ5PRd1H3uwrbRwYbLP9j9wwrhBB0nWPTmj%2FkBKg15hMvFqP%2FoyqTb650VuH0JdrlM6jcdgG7TdfyMeX8CJGdESk8yaEUy%2Bnxhor8pf4RnwiaSZKqj5a1aaqsf3U%2F2sfqK9K1hshAAQwol112zIDKx8R7pZdYXfzXzRp8w%2FSEUVaOHOKWn%2BtdltNAyIebH50Xh89BzRP%2Fedd2mLDSmYUqigPeROraO9cPujGB06B%2BYokI7v%2B9KXGDim6WMS1FwXtBlfAxYq2hCNnWnyDFKn07E9wK33pmvInAcXiqyddfo1WqzvsteUHYCkCzZeBcr1QwpYUYD0XbLaE9Uo40%2BkOgds%2BoUrn2O1M8olvzd4KnnMvfRDLu8lvFJ1iVxiutSlNbAQ36TYaWqPdW4c%2FOLmHNsidSRV%2FlfQdEtjSz7lL3HtBqvBEGUQk7NQndLEC6S8wRN0xvavKSh3qH4OptOjLhEXrbYCGRAwVo8MspbSKZT6hwzg3ORPCIRXei3ISi%2FOkRt4JTCdwDlNgn01jUVrVjr20%2FmQ3HFsAAJ2yKU%2FHsZD9vk8dXbq62JCvUgiIuuXRRyyUbSVzUPADqxqaTMA6wm39zzXEqp%2BBG%2B8%2Fnak9LOL4GRtEQd5Ncrz9B8ww%2BsPfyQY6pgFfv3ZcQGTyz2r%2FLn00z%2FfYRZGb05xMKbbmLJjP9moQCrk0TNXWik5KUsOVD35BjvEnej%2Bbg7N1xHsxfnhigjctM%2FMtgsKLxEfulp0ZmMMlTk4npnhU4GHn3vM1co0M5JOKCOxCuxCPFxWOMhuNX6K10iGB8W4QadhaqNKiDbggITnOu3hLXombs%2FV4YBo5uTx1NdPYTmTcnRN1BzksyxHpDSLXqNrn&X-Amz-Signature=cf39232f5b79d8fe1c441daaad511d96b392ee278f760db9d035a0e6426352a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

