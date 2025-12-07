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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIGH7HAV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T183959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAAL6tc1Obn2OgK4IWl5nu8wHG6s5LaveQt8jRcwpf3AIhAJehUfVAtVWrhL4epE1x5tS5O0m5eZBgaCbN0WqbAibOKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUxZM%2Blb35bDT2X5Aq3AP62U9jZHgWgoStQ8rcBXS7R5zUNfhpk5SGjjVrVllbC%2FNHxzielVflOLFapVML%2FMBbI7Hgw42T0haww6%2F5M3pm16bnv79oj5uchMl61f2V9wCLzWZQQLbY9cBONAjsJvwIXQIDnGFJlvqgthPrOxZS19oDKYX5vcN2VuV9ECXH8C7asHEMq%2BYUR775E%2BQvR%2Fwdsh%2BhFRH%2FxQLeMI0vae87ho2r2qNiru1QrAImuVaeAGHgVXArIf2GchYTq%2FlcOtxz0BwbHFSUw2iRE5IJS3PB3Xhge2y5O72icpNYIRuNjr81Mwfl%2FglQgRfNlGbq4JZUFWoEmJtnO1vExbgGi5su3MamXQD2zfEFkjdIaF2XPNc%2BOZSOoWw1LDDlXOB9qeQl6r9tU2GLYVjmd2tmIx2suA%2FLj5VVqAn85%2FeoLBdUYjH%2FIf40v%2FCQM4IDc9Z%2BV9jDRAuJPTvXT7Bwa6rlAjGCSwFUUBBwgd7Iy4w8NWqnpHHxolAqyxLLIbIPQW9KBb97CtpaKNNqhOeQAg%2F5a48qRN3sXdiSZItVwlu09fryXn5cdPoMkDEri23orKCRubtyTpNh9spFg4OZ3KRpyktxMX76eRpNfCP5Om1mWd3nWNczYRshwsK7Ok7S9DC3udbJBjqkAfYchmOE0x%2FNUo%2FnfYL2X4UGximOuGryJjuG%2BKiET7HEdgLsMCvq2S72cCmsupPrFsBlH4iX%2FZtx1emfa4R5imDZaEhluuixt2UOFeqMjcRT0EdlLrXPH5fWJwF5D52q17wzdlvPZS42ke%2FcZGgfNCHmtIfWKPV2XaK2IKmnstICaSQYRVFXZ3Dm4VQg44mY5eMcL%2FFim7M9TV2C%2BJtgJd0O86A2&X-Amz-Signature=5f989c46b4033fd25114e66d4447a36df8c03c776d1df162e92cc40ab5291ea9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

