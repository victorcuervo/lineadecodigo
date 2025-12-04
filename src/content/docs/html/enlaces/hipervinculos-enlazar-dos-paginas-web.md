---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PK4UBSC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDl17uaOsnQ2wpWcXaO4ZLzTZueWqyLQEV33QbyilbolQIhAKPzKOlTNF7brne8iu10ImRWeegbiVtQZcLcsOK55fIpKv8DCEUQABoMNjM3NDIzMTgzODA1IgxeOlv9hKcL2m83XZoq3APHhRCcZ7G1QMXFsreBUzr7LZ%2B6GA0tWKCmfTCvbSoJFkxP0z%2BW7kTi7GwkFTa2BX6YS4gXj0TLUqSCnwmdbwcR194YRwf4huwKOlZcDcUDb4kKuGXiBML4uUzTz1pI%2Fp10GvoFwDms7wahmv2CGajxFeVbd1q8xFas3RU96OFORk9LCViEQ54s6ES48FlRjpLMpN1CatPuMKrWbpaY%2FS%2FIQat10W%2Bp0SHeRr3l7UJgN3v98wC7F81nrcf0Ueux6Izoy4JvdYM31sgx6zewIXvGpUYh4naXG7sMuoW0gHOQTaCC2oXu5DjHF2EjmAyAM6Q4OQOBv8qHZbGjdUAaj18L79Fc9sDQgGyKYUrToAVnrXiZ3COfBlMjnUhupkGex8nb6n17KWR9N0ioyz%2BoMUk%2BjRcDP6jXeUODFXsFlYNZGwGXfjIW%2FkJO2CAWSPvaTXzRwwJv1uBhjXznp9VSyVNVh95b%2FQkYUt1%2B8v%2FobrGC5jjDB8y9YawxGxbjd11VydjSo77l3adnP44MPKYy%2BN%2F9hTLQmnV89o6%2BtOjuSSySmbrGK7Y2tXcLX4%2Bw9l%2B9ndECTSqbvFGhQZeOOfK1c3zdYgdlzh6t%2FSKOXr7hujvjwvvMIhYYNxVEYYRwBDDP5sXJBjqkAcU0G2gkN0lKaEHH85MIxvQS%2FZ0GTCXURQmJkScMKn6BWAu%2FbxcpC43qkwMza7bbSb3pRkGKEPohtiFH80bLi1vV55vCP%2F4dgrosoc3%2BNX7mFoaCbNdkvppYTfPveetKeKKkiHHZ3k3QZg48co3ifAypfTZJ3QUxSQPJT7M4FNC3dTtqxJVER%2FnkIoh4fa%2BYENhILtFhvkAbcab62QcxfiTneOQW&X-Amz-Signature=2f4bab91c6ac6b57115fcc2167cdcb1d9003245737f7cc8c23e9b78148791ef6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

