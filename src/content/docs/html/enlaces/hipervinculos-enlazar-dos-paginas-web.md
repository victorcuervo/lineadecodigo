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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DRZNDD7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T201923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAR4WskAW9q3He67W5cCJ7169UcYahQydQni%2BQ15je9yAiAR6a1EqmRA6E1ZPwKf%2FGkiSFYDHCCHrVjVKU8oEDYhDyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMQDujBOIlK%2FHoL6mHKtwD3VqRelVWSppNhV3f2dQq1N5Dr5gAGA35l%2FJnrjxbJ5CXIm%2FHQiiF4bvL6HVA2H9Ujli8VzoFa10AH%2Bw08IVYZOLtSUrGOjnQPkhuC5wD8pNskmoos%2FZphjsDvuuHddAl%2Bq5cCcFDp2WHQuLQZyn8YUKSQJfnH%2BroBrzraogRmUy%2FeC3x8lufRzRtyaGjMYkv4k5VYMRUTcaKWUP91LUH8eFcEbxfkhjpU2yQ075IfboWchPOW2wEzhAZauorks8YTsJxpxTqxh3jq%2Fr6vf7Esm1WMuS7dwNGHFRMfh5mumNrINkRaBwscQ1kO0iSjaYCeUKfjauHjUguy43csbPbvJvTeehwnnfnKobwY%2F9MC0XbIL%2FhMrDVQ2epsqEYbmXQuFfnWstqcCG7L5Lspvz6594RFHYDZitHLTCl3z9aBXQthf0%2Bcux%2FoONZCsytyvy%2FT9Q%2B1ZilOabuvf8C%2BvNbKFg0siQo1eaHL6D%2BomfOsRmBFJE2jXjHNPi6TDdJVdntlLjL3C55Qv8PfpKdvdLH1bErqNsRVuC10jOchktBaqDQVyGEI%2FuWbHEnbzVjx10dF%2Fo9T3BQ598PomMDIEks5TtJrgUSYjxkucWRMQ8akEF3KEeXLgh37PJILrcwk8vRyQY6pgH0952euilHT2f016wcNWodqRGuPd506xkhkntzscL2gydEy6ET0ub7dW%2BN4b9yPzwqld9WPMareff8GnyhQWkOpUPkrAoQXlsR6igQC98hv%2F04ALceSsOXHZXddcqsZX1ET1NxdSlDVuI%2FoFc57moJdPtCTBcRE5%2FCzAmJ947rQnx8Uux6LiedK4yc%2BXonuZlU1zvENoBdCS2xlpIOEHGJwhcZM2VV&X-Amz-Signature=b56190bf87d5654d441598779afa6e821f17e450c7962b8da7a88a2e6ba4836c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

