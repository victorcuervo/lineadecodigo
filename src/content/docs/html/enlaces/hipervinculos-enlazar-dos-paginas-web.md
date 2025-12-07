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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEQ5JGCT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T061041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEpsGfJXBZcvGeTII32s8bgmeD8O4yDB2auyYQLvyHB9AiEA%2BCk9w%2FNQR7G%2BZfFiISgTJu1E5YRTwM%2FU9lw9MltvKOEqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXurQHe%2F3Q6JH9IyyrcA%2FBpB9MP%2BubGyv%2F99i42Csdf8vKGoyRT3jQjo97T1Kuz7KsVlRCK9VsqbFLNtLwyyLICa0kjQUveeH7T3VCXeLsLMvnkBiGqxftdlwdBqBDOYIo2riLsGzbtj5fk516ADj02c4G2rgbOtsUhjfH4ycHqEGtVOi4AnPsFSv5HHpSDasuX3qiar33g9695AD4y%2FgXzA158LocXdfLqOj%2BIY7XJRsxYShjhMVMOkPYHrprKRqz%2F%2BIO2IQNwQJwHL4k8YG82f2EKsnDlNqZx8jQX5Hwb9gSlDlSRYK3hXSirxUfJDeNSaZJxb9SjWDSHWbqFqIkHBhVXWXY3Qmd6lr%2B2nogkDNIPrCW9AueRdOL8qW%2Fy8fHZaBS3%2B4Q%2F4qRQ2Nzt0xlaDw6OduPqjQ0XiBwlyiusynmgnat7jP7T%2Bw5plmkt320VzwxZcyBEd0wFQzPAn9BV75rMXaoVx%2FttYUWKEejd5UVmDlBIixAYhgLALjBZJUWmxP5rhJ1kw6zH%2FxTkEqQniMDWTeLPbV1iGLDDSkk233jjU2Fe4HJgal1u%2FoxYg45g1te4qJQqRY0cc23zN5Bb4SHrkpMHHDV8PSW679%2BG5a8rDn%2BItvWCqElZAHOCfIzGSsv3460OqzvgMNOf1MkGOqUB9y7u%2FNQ1nW2gB77%2BH6uhuYkPPco4oihMvyntlr1ZQ2c32PP0Okb53gOSVdDLKYkk3NLdQ9FKThLWzoLBxHysDtHJGbMBQKOV994%2BP9h5UOztre0GHVL54TOccB%2F4hPR6WR5oPkW4iBu4RveX7vvwzq7dxao8%2Fmahs8ZfviPAwOUNoxaPmgsp9Zq8ZF7LzyEPni3Qe72ND9l0JojTw2dr4uVmnmP4&X-Amz-Signature=e0b68cd92d4280f7db6407453f344be4d17330b61770302299cd9ea9dd782af6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

