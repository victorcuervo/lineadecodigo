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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP2U2AQ7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T032123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHwZcKgWZn7Neyb%2Bk18uG11rHi2%2FMikIx6maLCpDJrtgIhAKcFeOI0Z%2BBZCAhnsGSzQS375W96V6FvK8BALdxGpk%2BPKv8DCE8QABoMNjM3NDIzMTgzODA1IgywhJY40sVWZjzElkQq3AM7ILpWY4PAKgHCOSpoPadHtf06ncn5fp5Aw1Lw4MEwC9gnz7M5wsNtBu%2FeFMaZOVj%2BOL4JyApQ%2BxHy1XQIIfHCBK3Jz%2BM2c5nDWu7s3LnrKPURWBZXdC6ZeYNy4ihdS87yq4KCfb4tEWvuMv49Kxne9SxpwHPidaGZcSrBKMX7YSknKMgODe1sgokwuq2%2BDSAZSpixVh3jFnPYzu5e9qq93Uk%2B4ggvO17V8z10wT8J2w45BfGjGmoYKdTttSjomOeDaBuvnuNUdCvFmZyYuWf%2BlV8deFLuehF%2Bmq5XMvKggnn2L1FvsFgKJ1pznhURENZ5hdrpyYOlG5AD%2BctAfUV2WvYa68ciCY6ejxGj5WZw9%2F2%2BWGEPPAZt9tphckZs6Dlm%2B4Y%2FstC3Lmdu4bU4cz4VOzCxl9X6t80woVuQ0UaDiOSM8IODlgP5IIkh5FNNgGK%2Bnuhlz5yQB7oogbNfdMoImIYZSqDrHXgu3Qb%2BFQ0d8sbYCQptB5PtQAJAYL%2FC0p%2Fq4%2B5cPrxRXw5EEW%2BUT5PKvoBjJ2mHFhlbDoYpGhI7mUACtwjyzatHmVynwh3NgKeOoXcupPzVbwKbwI%2FTov0CK%2BJBuU%2BV2huUfqvQgDpfAX5x6mGpu%2FbDYKO5ZTD3i8jJBjqkAeEG1RFFKqvRkXwGW4lZ8UFEmwrZ726LoKgTuPqLWsiwvfDi6fg1a04ad6FW%2FP6%2FV25xfM2AOQaZ2FYeaNgX%2Bl%2BQvu68ywy8UIdyfsIdcAthTeZFoHskMCMWE0%2F3pw2wAD2RSJwK5m22jxj2%2FePtuLKcN4pAuslF0u1TveUynwX8mljdrgAzR5HA5%2FlRliFpXISbyyQab2csu91ug8tSjKb1Xgln&X-Amz-Signature=bd0267ff99fff6e6025532fb88b8aacbef4b217510552ac6775b5b35a5cb505b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

