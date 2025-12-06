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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EIHTKOG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T082901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLfpaMvXfFzdjf5OP6wHAY3mu5G%2F7PvI3%2BKc0iWalMEAIhAMOaHlXc%2FUfcKu43xuiupyVwrJM%2B2IWxRbP%2BmxRYwmkZKv8DCHEQABoMNjM3NDIzMTgzODA1IgyB41P3zQBJJQduASQq3AP15tVY98dn4vzk73vDWKBPnZt0Wt17zQeNEknUKHXX4K7v0ztG1KadSL7EqOkZux%2FppSQxCJ9G%2B73PDs6o5KCgr3sl3Q0MXb0uhw0KDf0ZGAEewc1GW9uqkJkctHfuqn%2FlRR9AwU%2BEkIqEgPjUKD6M7JmHeeZiP3s%2BW6qotYvY%2BRt31Y91bv9h5rhFU21A9UEbqsplPiSGk%2FOnFz%2FZuDXR9RrWEQymSI31dB%2FWUmMvuVbjobiUz14pAGwk83WlVdZsr2CYqVJkBNnWYDp%2BLiC1x55%2BtMzGKrma%2F%2Fyb0UmPoKbY3if0NhxWADbrWTF6cXT0xYzECGjAmI4nNXnINAfeGWPlkuaQ32t6cCWtsAWRqCvjFg68kMVfcS6vt7JlmHq6AnXS5apWalSQ54yTB2jH%2F2y6%2B1pKpSAEs3ozDZ%2FT%2FVW%2B5OPd%2BGPalPWDew9y8yBScemphv8pqTEgUhGWJds2Z2gFOHNY2z6XDG9yXQWosKfDik9GVEB22tNA%2Fb8UGrJzRjzkYUbljRqNpJvjwMJZgbh0pP4z5Bcni1rSc7ofAmtM32IIEgrimWlDozFddZ%2FDNnjrxdz%2FEhbaJwht4Ha7uhtjMLn00UNxHwwGKEb27Ktxd531cxs1ZY09kjCqvM%2FJBjqkAT3vnK1EMlSd4kptblP7n7THvLPS%2BcufWCjOMQtBThJCf0qDoPYClHv4o6asJ6MKQL5uCoaawawVn%2FdASgqO6fWPsVqTTKEn6cAQXffabgF%2B8GFRaJXQ6FLQaqDPjpovyRwbMdFcmYD0PwYX2PzCnV2sXUGHwuJxTHC1AoZFltac6x2PRCEWT6opor3Tu3hOYUR2Yb8V0aNUu%2FNh6QUIjF5R1qRu&X-Amz-Signature=ee303e50cb506dfe9d340888ce871ef81ad0818e430ffede129862f67a2f9e3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

