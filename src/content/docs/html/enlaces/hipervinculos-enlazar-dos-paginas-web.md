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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFNBMYI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T040653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJhWUcF0aw93XsynsoN2RIUEWvgVzk36t9ZTR0l5OiiAiBLs5ApNmZb6mdETEtCRSkNLt8SWKgyy5We%2FYckQeso%2Bir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMrlQuRfrNsSN0ONVvKtwD1Yd4obFiK9zD1uORxthm1hjK2nlqTF30XXHz8h%2By%2BxPFhY1TlCQxN2%2BdwP1wOt6WDBzNokAoMaJsQuC6x0BA2Qcw4HsPmNk70%2FLYbOy5UiB%2BDMZ8yYFYE8eWIka8LMscPJVz8vJLe%2F74T05RhjSyM3Hfyqpbk3lqbBUKMqK26GDNNvx7%2BYNfROZn2Te%2BZ8CEw9%2BOV5FX0Uhp3ZGYeN5SpH6QIfk2zY9ua45gO7r%2FAoNWm8KAMpTjsER%2B0x53zsc1BJhACF2fl0LZ2f52wUJsO4HkDU8bqMpRK3bRUJuNFkUijqlyRxUsyNzr%2FAhlq4LAQrUSrV788YbM6%2BW1h14ySlGBVyf6WyZkxaxIZ2KqwXzidFjMEJXavvPhqZaGBsp1OteKYrfgbSb0H8%2FI1ywgc0WXmShPi3Dvouah%2FZhbQViuETyZFruZXi2%2F48ehec62zdlBn0vpLTVdCSnGy3OyL4C1BwZrfjtcw6IXMCvaTuE0tOXk4AiVKrYMXGTp8qYxq%2BHZso92NR%2FpAtRpGMqVWNcvSh32z6LnSQto6WmzUCOeqpqtxybWazou8Zi2p293KrrQjqHz7uDmDSUKU1cx6YaO6k3iLKgSpVyaFogXBCPN9e8bdjFkY35Hj70wwKnJyQY6pgFv5h8TG9w%2Fu35lbWbUZ5MSsUvGBv%2BxebBVo7aSakB841v1N5UpD1eSgWCHGHTvMJr5bI1cA6LEWkzEWp%2FN6DuyIWhiRRkKZaPNtLfrfD%2FLm9rMuidatlujng7YYo6rxUaLW6tri88GJT80E2an94iQQBJjuVo8T5QR4DL4HMg%2BMf3g%2FGTdVFqKZBold039Vj%2FHR6FLmn1n%2F27ugwmE16LM4905wQ6b&X-Amz-Signature=a702575cfe76dce1d688850da710c40251db2f38ab3797c1ac09238f0f41b084&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

