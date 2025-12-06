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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625ZG4S3W%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T032331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB3TRsoGwRnAACW3zaBp%2BBghSs4ZKL%2BTxjzDl0WuqFeGAiEAg8fyfznkWnfh6Bs2Zfq3YZalJvjV5a%2FNvDnkT3lmOtkq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDOo7DQemHXJNWywZ6ircAwrt7dz5wSfI%2F78w75pGixvbGI0fttw23fsmXbquJt3I26RztYwKaD361nKM8r%2FquZH681MRIK9qa%2FQ3HsPUWSg462CaRMthV4iVsFAkYmTMtJmb0JS6a%2BX2nJqgJBwAFvddTzDOp9gwztXfzLnHs8aF7ficE2wZyAPQBmIH7fls13y5Y3PGgnujS8POCgJnK9pN3rCXWlO2QD%2FlCZ0Cbj2B4ipPAwQnsjb9SYj91AGMhDL3FxAXl7Vz4BoyJXT1J9CXbLngKXiIUhgxGxH1gp59VUrD9ftgqQMD7I53BEXfWn72UwIH9XJtPZk13bkDLVIh9GOWJAQwX%2BQWFyswrO65xFBcpcV6A0eQSAA%2BAcmg%2Br7jE4lqyMWnH%2FecnrJomZtRpy33zniCX0dNTfhHcOAiHlN%2BRNTviFflvdarZB8Ww40W3wSNE8LOxDvoprYiOOpH%2FA2w%2BJCD%2B9YMsZOt%2BoIVfi07zE5edwTCa57chYcu88BAjTimvP513DAJesRBYHNLqEsDdtobgi3jS29KJiITMBPCLTtzq8VjkRiJpUA%2B0ZgjgGSj6Lz7w4%2Bl69Zs%2FHJ42bfitAdtVwgLY9zcgSWadAnGg4tPd0mJXaiQ25ALx7Kvgfq4pW9zAR4XML6nzskGOqUBuCEEB7K9GmxVKB3qe4W4S%2B3BVw0UHfpTh0Vu%2BBxRAwpe3ZNjP32Pyu%2BoBmPlzuY%2FYGRAbtcn9aiVTJfwG5P3DVELfpTu7jkYfX7ShXZFkEm09f7fHXZsEYTZsxIvf9FZZsmN6ZiEbjpN3UYwifpMC4wpRwFbIHly3pQb5OYmnGF78n3gcd2KfX71wZ5Bs8L7tZWWAmFzZwibBnhk2wVQIuzsQaiz&X-Amz-Signature=8e86feda42fd0185162f75a78fe29fc62c4678f7ece88ded13847f6307aab25c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

