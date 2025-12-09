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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZUKLIOL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T064658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMfpjKlQnALC6LSEkLzt%2FdHbdsfnd8pN6OTHR6f%2FzVVAiEA97wtipcePG5FiihV3xl15u51JC%2BpAzeJlqb%2FmURDPXMqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlIzP4hYYHo8e8rcyrcA6dJ3fHY4W%2FSb4V1i1zBAZDwu6JemYGZc1yzpiBJx0LazXR3D03Kh%2FEU%2BNzfL5Q%2B9GY8HL5D%2BUXqzGfb9hurv4Qy%2Fcp7wKcgvQ0Rokea1q2NjyjdzEYRaKR7a4EahdeugDD9QhnoMzjwYvwwrYoyLy2waNKqcSNd15TFVk0D%2BH8NcNqhRh0drVX2Ktkgi08M3AN4z%2B%2BxexujIOeX0Nr%2BW8DIqDVXldbpddwYYvxBlNcKNhmubF8XTgoG4IrwbHPGwxDWihwTgJsjGyeelMrB1DaCzf9hpLGM%2Bs54298%2BxYtxD%2BJW8HcmmGt5AoNPxEa5X0HKCBLzLGgQNZ42k%2BQX3CbK%2BDk2rmBbjdIZT%2FB4NKGe8CzYXJsHtfloRfRpu4FPC8q%2FvYw2em%2BaEvxjVGyQTLWEmlZJyB1LqhPglwi%2FHO%2Fg31IFxyoWcdeqbIMdhsLkHpnayN8cDnd8UzVA0A8LKRfdbhH2hCFiyJs4NZ7n2jDOxAsR56G9AOwwXpsSQjZizYo%2FhylrJ5lVfUcmGueXjVmolXZj9FAwXFfwSFU0bSsQqBVc%2BpgPNIPXGqn3ohGphCXcn1BEvDdj5kMaioS8agvh%2BNymDZdEZEyMVCyEybEPrBfR77XTvhS18RTpMJCI38kGOqUB7buf2iXdoeMB6G40a%2FRSZFl%2BQ%2FZf8DDrgoZmjSSPpRBemu6PHydib%2B17GoDwfkg%2FFua5%2BV%2FfIC%2BpZZR%2BDgxYDe12z5wkt0N3wTW%2F7Yz8TV4Lsr2A5eDaS1kp3an9Ye2rYoS4gFX%2BVet%2F%2Bq%2BD4uFPCkFkgIEN1%2F4C9gi7u1z0lKIcv%2FFkeG8MewIHbFKrTdg%2BiExxEKaJMNpmZC%2FkzPP8abm%2FC9Ax&X-Amz-Signature=a24667ed83e8f2abac377f66ffe68196ecca3f1b75cd639bc7d3c791c86d821c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

