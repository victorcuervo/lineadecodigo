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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTMWFY2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T004627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRw8Rf8OgTYHTMgWF9pBsLN7LSsw5ngu3%2BN0aDquw9QAiEA5YR2lndLAKlQrd6mwhcLG55gnQBfeLH0M%2FotqGpXp1sq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDDj0BfWrv2p7UQxpzSrcAy722dFKbvGku0Ou1%2FF%2B9dh6yUlrQx5gOFQ90IpB0ga%2F8D%2F7Wm9HvNApS8S91YOrln10W1%2FAosbqvXmWCOIfC8NR10gMiHlSRtkF14ZT%2BoZZ5G5oOU9ld%2B0PWZu1ZNKPdj9AwLQinr4x7EfYGQZmKZmtL7opQp%2FyHHbdw9fCjkiZfzxXp2q1IG0Na8uw1UD22a0djzvnKcdCbKnwHNqeB1UIDFblek5n7hJCRt%2Fr0CNBEYbqv2zCmRrni0qLcbAbvvkhTAFs4YUA42ib4EABCnBlHJU0qJPeQPY37EqsxU8pDsvVZLSokYV2gH%2BLIo3ADcDB%2BPsqt%2BqeWonVULJVEwA5aV4%2FZ2qQCEzVM9u%2FaeGTlXp%2FZMI1zs9zA%2BAHLEv8JTWPl1EHVgk05JstZbeqPeg4JLM1hdq3Har%2B3EdmcA%2BE4XaKJH1vnTHIKzQu8FxuFcXIGOE8mnMkWu2ucTQ6CjI3hhtrAfyxH6GRQ7TziXFkpQKiQojGX%2FXEgf4qB0zkpKswpXkl8M8UBHrv71BN8FoJCmno%2FJ0D%2Fa%2BU3yHFDgx9KVcewRsTrQLZgbljr4oCMY%2FHNjEhvWxnveLT7Wze8j8VmX60MUoMo5cS3dSZu82%2FtRkySJr9DcXHQ6yJMN6MyMkGOqUB34s28C9t3PAWouFYAYIlFkrxBmvWTO02gMwVUv%2BnV0JG718Eu4Hc8Gbr1kmfikqT%2Ba7KwEDslNgA3CrndSOsKbnRAZol8U57147Hdih1rEPQ4pxG7%2BEMEOPFtOy5g%2FWaTyzkYfWSer0%2BLPmRqQVhxQnzA8rLZU4gWGOfQr5qcqy9EKotK%2BbG%2BjMMtTwA%2BwTZWgoonN2DAklPdQd9GG8HRaxNoIW8&X-Amz-Signature=75c21cc5a00c896fdec402693a2bc165f2ea064a1d897dd68138510e9a35765b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

