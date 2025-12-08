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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OS2LUD5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T164515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBGkKVs%2FfGmBzHsGgb1WYS3I94SyI6kyBW34h0e5q5mAiAdzqav2A5%2FpeACp2gHA5DnyEP6IFITBYT1Z4s%2BMXJvECqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMKjEAtPo5ajvgeA0KtwD5DNGGaWRQWjAnZ2HLZKiPigTkQ3mzMe8%2Bxcljnw%2Fuw34gExyVBs1SkYzRckhjbHAGAJR7Y3EZQORiH7Xp6GTE11Q%2FpLRIcVWVV6CdcGjaFNKpTgros7y6FyFhZNsCyHyhUkb9kh6kpFqVeIuM88xQyDmahRXrbtvQc3wlxZt66K6eLUqnuxKE%2B1W91sfc39SVxt%2Bj5CGDwMF%2BdwyG5LqH%2BaBDehBdtv1isJS97ZqgUali6iaHIQn0pEyfDw56TiYMrZKOglmedDkg3q%2FRO5ZZ9OYYxtubhjAMDb8pR4Ljfrw%2BQIeYQLAL43M591OktXk75dU5AoYBFABZ45k1uE7dviFKqNHgDyWLGwSGoXJlYrRtbiIqHg8v8hEKuvyGB2lqu5Juh1bIl5ETyb936hxmntrhhWdLYhI9ev29KpIMHngx8jSm60OiI7AX3PLGMEENkD8GXr%2B25OkFRBZsiHY%2FxCnqiKFunKY%2Bxk64dkQzZlCX%2BUgiUbA7Y3mGG2kvbGab60rTIteapg7GYjP4F94%2FQSpHhJnNrScbf%2FO5ETvPpyjZOLR4Orh%2BnG7FN5oaMdX%2BN5paKU5iNf51CSKQFmL5lj%2Bb8RN4jt3%2FyaE8Ck1i3uljzm4R5CDVCLaA1ow%2B%2BTbyQY6pgH8wM3qTHCWIrhyNzKVC372DCxWpJZsdMCLR7jfgnolw4Akk%2Fkcqk64V%2BVmmWAEUNpZ6NK31fx93zgbPlEQCUg5JCjfn44%2FWfBb6f1s%2BcyYNYE6fItI8501bWzKDoy7WDBvmzqRc%2BIQQfw5StcUoOkA2Ap1tpiUJUwTDDarGTCjhVcUqaheJUPmJNZuWMwGK3p9oq%2BYKsbDOD9X%2Flthe%2Beza4gYw32S&X-Amz-Signature=ef7d023e9363c7dcd0d600e45713cb4d027681efed9df3152083e7b1e1e4972b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

