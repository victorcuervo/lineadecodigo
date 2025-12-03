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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CKFVIHF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIGWC9gMJHoq2am1oEGnlRkjbVptBo%2BX9hqr6bZ3gPFT1AiBUhBiPzggO4amQZitUjdvjVslBS3S%2BGCFYIdBUAf3K9ir%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIM1cZSK3YG6azTNAR3KtwDic0lPE4TpaWqtlQ1SobC%2Fq51hSx6gP2vzb3Annh1J4TS%2FH1KtzBABG%2Bh98xjDH%2FcbO5jTI%2BkfaXZyB0AWzh4LfMo1wRO8CqnQAEg4Utzu268LnWhVD9SHsAR%2F0F0oaV2HaQOSM8JuKlEW6xik2Jr8GqBN0%2B1GQ4z0s555BUAgiRUn5LcTIBZKXUew0W1YvIVt57MRVugny2GyNdQ%2FIN80nMofui593vGfTdF%2BegL8k9PKp%2BuWZtICM%2FqGJWv3IlzFXgDQwCd9es%2FHl%2FTv8PqIfFLxhrSngT2MPOVW2lkYdGUYpFLdHM%2BpxOMcxCSoYPuibRu8XNC7LBc6%2FyWW65890JqjoHRhkW2CngPBBvZfzbx%2Bk2EC2ej2MJOo4oI9ehe3sqeGg3jq8tmHXWU4pDZaR8uewN6Iy0rip9DEeTTHcyG2a%2BId4iBw%2BQBQOUQU26RHbjvfLrvIa2yaAnPb85SZZrOs8VEltLiiijvYRSizd9HVpn3hphZl39y18b%2BVFSODI6HYEO3o0Q8izxw1UzMUtk1j8PlyqJjFRGle1wpnfv9uoRgI3J6hK8yw668velZUfII%2BN%2FCV%2FM4%2BCHOC3J0oxJN1oAXYO13zB1frLmwX3nu%2B82Ttjuk5bpUmvowiL3CyQY6pgEZbFfykBArNcf%2BzWqALVH%2BOh9DzLRtE7r4VnGSROqcdcGFGkjYsfGhBWoqf6xqV3wS3GOaEQt3defYoXpVJ%2BX8DyWzdA32WSCnkBwoYq8hLiPZqBXjZxnF%2FQDVi7ws0HzC79Cd24zHVx8AeSRcz3M6k6H6JEF8YS5%2FvoA1sDRG%2B5zQyKuXWXvZx%2BsDvUqrlszuYwtCbUoJM7CD1D8d9fPQOqpPqm0n&X-Amz-Signature=d5e7f55b72cfaeb9db5038ba649942480201f4990af8ed219a4115ab2fec0342&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

