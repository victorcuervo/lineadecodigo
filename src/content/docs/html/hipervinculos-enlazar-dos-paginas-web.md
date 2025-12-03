---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGA3ZCI6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIH2WYyuxu%2FXgZEZuBtqENMGe5j6M89EZEVe513gHiC%2BmAiEArdvWRVy2hS5cflD9uIMnqtVbwxVNwXWBzL27UUaiGvsq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDCoNeS18jrpJVVVVpSrcA7uc89qabbksf1GODUl67f3fNyECXx36EzxCHGesMSzt8jaBIPmaNHDsynfwCWCwBODpXqh3lVGfig%2Fr6MeCnM94PYMFqebWebcK7b%2BKkZV3HPL6LYUFIC4%2FFBOf1LgBAd%2B6FXCMe1x%2B3AGh31MbxDkzG%2BexOCXxtTy4MDgo%2F5tVB3mRpDzt5bWJ1kkhfs8pVVz1T6HYhvSZMPxtjQy7EAPaAlwgeb4OnFhgZ1ZjuYY8cter9z2odO9302XiIwN92rqhFMHCcFE8AIvhcrDbyJy8d8LY3e%2BmjFcqDbh2yAzz2eHab926k0dY5BcxooUiJudrXYlyPWHoZAw0zWvAJXCAe%2Bj532Mq79N1bCgRh6rIg5X7wip6R63OPR3ox9IMZs0%2BmFEhaQpkudQd31KHmr7dxVoXf0J%2FmIiQQeUxRACTP6osY%2FMgt%2FbtaZqQSUmv4f1y3hjzRaATO%2BLleCIfEjFLhkeN35xTAV1wPmO7RkIg8M9gToE5UxhD2DdN%2B2TgdKMtCiW3Ai1qyPZJuvPcvBzRdXF4o3qrNI1kzmhvE0KzlW%2BmQMfREQ4AhmRK5nfIPpUKLx8q3%2FnRGoN8pdL84jXoMKmzY9gE0C7l0O9v2Iayaz1%2FO6CkyPG7uoc%2BMIe9wskGOqUBDjKgg8DqbUpEKmuzNLjgQNL%2FjsO7fDNzVQ2fncJ%2BRyQRaYM2UJbVRFQp35tmmagr2Cw7goIChmY0Igs30i7z0bLi9Vy%2FsHwThobE7A4afR1QwP1tbh05maIIVaf5kPli8%2BM0fLJBGFz1gm7v9Pm426hYZgJbHqP9tH82w%2BSIkZs4Ugd3IuKB3pwFWC5HdqVcWUcpenk1gvFibURNCqjOf3n5NNSW&X-Amz-Signature=6ee72add9143d18564356ba658bf34f5f5f0ce27f40149d2c6a0580f95b82f38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

