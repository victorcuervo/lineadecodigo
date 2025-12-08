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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYZDHU3N%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T135004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3hLfDQVk6A59Zud3Mr1WjYEA%2BtLu2hzD4lh3AuMRwfAiEAl2J4oRPf%2Bkp9nmOAXibHvWPsiewnAK6P5Lavp3cJJx4qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZB461P3%2FB%2Ba0youyrcA3i8gPvfh%2B%2BKvMeN5jENvp2qM6Q7EeQ3Xr5NofiUmuKBcROQFveiPvM8kdpki2V%2BWr%2Fg9pU8gEz71frqMCYa1uH0Slw3w7dDnVg9kvqkfw7esbtirhDGhe7pePhvT4QHU4x37C139CJkXrPFQHjPp0JbQCMr%2BI8vKqcnupBzUlv1aBTnU9hUU95EdnTb9AB%2FxaJuu32r3CYBXTEuNz3pFZWDzeb4Lo7XA8hbsY30%2FoAA9uklLCbW7tXJ6q1u4xQmBndqr%2FrKY4dO%2FH3yx4Az8ptBMXJuRRpHXyDZapOcoyJcUBjd15cRyDi8PiDeFuRqzQ8Nq314RuOBONws5qEz4MkuwFS8hB0mCq9fPzToKeuQbQtyhjoeLiLRBEcakhJ6MIcI53w3E%2FL4a1jCyL%2BgsqQKHsj48efnX2Pq8AiZxK2mPEx0%2F6DiihkicEJMhIAlQ4GbUO5onI%2BqrL9x1b%2BWEUGK2vi9lS1QpCf%2FBqQ8zhGfzcxScPFGS6W1%2BDa08qAqPIz5XaN%2Bfnsm8qrLyAiDo3qgouvLseOxnt3koy2G1GabNdp%2BymbgGD4VPIT8BWcBvWnbU6vgQhVBp5M0xTujgktVsi%2B9TkDaFQQJtC5EmL9SwsPlV7kB5RLkUIgxMMCP28kGOqUBFPm%2Bof7uGuZMIyltZhQjJZkyahqQHY8zURStCC3mU%2BPEpGGy3%2FZMzZWY1WaPo%2FjHXY%2FNGbupnaMzMHfkeyV5UmVPRJ90QULmq9D0f4tQnvX5b0Q442QRRob%2F81CTgIIN8mQAEy7dIgkZYzUISZeb%2BZhEA6OcYtl24u0UtclWS1jF6o2jNyfjn4AAlUXsrLtIgCisbgl2sTYVdxqdhfnyBp9ceUf2&X-Amz-Signature=3c388193ca16192b249aa04f92f223b0cd62f3df4e903e5bdb0120cfb365e6fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

