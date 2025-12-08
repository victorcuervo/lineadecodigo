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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ALM7CG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T140129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfoTFvn%2BPINSptu4E5uk8kXQ%2B8y8RCCRtQCMnNEexW4QIhAKdPM1fDjQenxo6K5PUU%2FXHh%2Ffx0akKbRLBFMPOg19y%2FKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzel2idMpPRdhnvlYcq3AN0O6Vr91LXDa4pLG46PN1yK863U7WhBDoUsTcTDt9I6QzuRxN6UEqPiWJHxpTmMr08ZRzp4G5%2BM79PbEdr3Gvdtq9HioiYu9Cb5LgtOwKCpmgKDbYLldC1lPOdf9jY7Udpay6EWxQJlRqmkCRt%2FM7Y9oae2cwaxicV%2FB1d7eNz1MyVvoG00jn1NCXnbunmK1vqzPVWfJmhYbZCeg10sKkIx7tcqG0lsM0S5GI2KPyWz9Gq%2FBpXfMV8vbauzpY5ii9HA9%2BNpGFAFbzxhkjMJGwB44PdnLdyM4AnmFg7r7JGXqWDRU2C8OrSfRCZbTV1i9%2BNq93yI2AoCT%2BDMpdlYCEtW9B4jBv8LC8UegLrocXrt68Sb%2FUkkJHkdgzhMULl2bei%2BP1JnNPuipYOeIkIR5pA2EHeFA2%2BK2CKROKEWbF5I4Y57PLOcVWW41BGva8g%2F8YYyJGelVjS7I0qhIDRkVlggaTzz%2BA9x69Xu8iUykZc7rhmGmKR52r%2FLCLztjP5A2LEwe80r%2F27qUySHkBBvKFeo3jD0oolu9JxB%2FBQTZse8T53jwlW0W4SJNSnv%2BxdLvgB2OIOxXrh6um9bgjaXN9PUthHhoLfaOzX5YWzghncqy53RzAfyOfXsimmPjDCj9vJBjqkAbNqgjZpsezgBnhzcGBK4qUe8N9a9armRQSpDwse2x6bHz%2BUt%2B8gKKx%2FGL24KIOWjGHYj06jW5iO4JTDRd4HHFEQpDXdwU%2B6mZBu5rFrf1edOrqUpy4XFRxF%2BjMc5%2B9QGsSO07MKv9vL0FschqkWdYMMtM9CsnW%2FvaVUuVcDDOYN%2Bv1n%2F8tn4aIkLVuJWesCIbptW8y6Fzq9APMWwXuKIjXsPTqD&X-Amz-Signature=0878c6dcfd4f10aca0c40b7fe7d3429387ba3e06ba8d0d7912db892d498cdc4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

