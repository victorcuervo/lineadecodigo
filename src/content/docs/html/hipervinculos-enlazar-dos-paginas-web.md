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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ORQETNE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T201412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDt5s5e35Wr33utfEKT4N8%2Bdx3O%2Bh%2FzwD6gDEeGqaIbNQIhAKB4osBM3xBg%2F%2BTsI8cp5dyOeI0zuWlW3%2FPncRv0a1faKv8DCDQQABoMNjM3NDIzMTgzODA1IgzXnS2Ws%2FtuRrqBYVIq3AMZpiGacdCzLmWKbTCpVejqV359elUY6IYSDB476tTHcB5K5ailIENQc3weRHuINXBx%2BniS5qwyz5q1fBrdty7P%2FF8P3pB1Vd%2B8WoitmYKs7mnIHNTofC8agyHOlZplY%2BGAcEIdmpMnhba54tnro7txSP%2FS%2BZaL7%2BVwXdSRijw0qfSS%2Bbj6%2FVHNMdUJdd6aFa7fl8nygsaronu%2BwGjHolRXyAgiKOf2CaTcgt7FM3E%2BNcvF9%2BzLfmcWU7vWC0nOB0j5TL%2BUcPHDPNkQDJTf8fPikch%2BMZO7tX8raUUXmT31LgQqYbjgWjuZu0fWs8tlMh%2FgkS%2F6gbKZEPhHElmg1Zn27HKyHude8qu3vKsazSVI7%2BAJ%2FaE%2FI6LKdqc5GC0OLx38bYOI7S8t6cf8JHnx8q4eGaSwm1dwhJwF0QTlFZwnUcl0pcMzdTY5v1c1gCZ%2FQ4GLp1QqfL%2FydfGHGQ7Ah%2FB1Plun4zX17hu973DGegmrQhFSZs0PmPv2petBbGlXv5lc1ZI%2FayidyA18h0vc7X7J7%2BI92tjeXIwoFm%2FkVJoUV%2B2CzDI0AtBl92cwRI4Cu%2FNzvqc6IEjwTkODLRYI%2FGTHaZQEChZh%2F47M87GtHn%2FjA8HAUMyAJahwTIMYsjDVkcLJBjqkARcm5THASTye3u%2BLPtcUqR38j5Y9JC2lHe1rer06r2wRBbxnJO9iqH5%2FQu2fZpe7SAvaX%2FTCRaFSBymCjK86AVeGyysAJ1WD6gmVhvAc6bXtcFzeSnPrBKdli6JlXS%2BJFfXBF7funa16GCDfdXao5OAdNuST1IXcD1M8PG0XxLHUpNskl4lJhpMSs1QTebGdvXrTdsrObyPajif%2FzG5kNtSTzV9g&X-Amz-Signature=aee2a487e50006e7fdc0e73db6e2482e205eb54080221cb1f02892148c625b00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

