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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YBWA32Y%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDY7IBY9fg5PGs4D13%2F8w0tkJ9TdL%2Bc2t36m6WoLZAzuAIhALdiWRNbmdTyHvpmTtdwEwtkJ%2FCR1qnneyDJjEk1xZjFKv8DCD0QABoMNjM3NDIzMTgzODA1Igzt5ktvQY0lStZjo8Eq3AMD1BASjgq%2BUO4VC1nKvBOWferm2BPNwigPQj7dmNlqg2Xc9JlbYpubQiS%2FldKSBAC4EZ9uU1653EeMS5TjrdDurIhP5dXqCRypQKmII2bkb%2BoIdb%2BNo%2F04zOFlw6iil5XciACLxD6x%2Fht6AYtWVcLWvB9bGyzR9g%2BnGIl5d1n%2BkwMiMCDGRxxEtmdm1R2CHDRdolLZhfdJM5h4J7D8OIuNCW6P1Ke2aoygdnY2JpkTcsmgO7XbaEqu2gPdO1eizr9r4BMCJ8ahn9I8F%2FQdXfwtds3FLQtm9%2FLE9oVd5e2YYh3HHeEM%2FPf1NYNtmgYHayPe%2BljgGJ%2FlKrYxgV%2BDREIDmA7jg%2BCw0z4SXZIpPWb%2FTFrf8FKPs8cy5JH5G%2FXeROemC8znaphCAOuvkQIyEqPO81z2S8RSHAoNemcGlXUF%2BxdwnJaDD1NAxTTAHkdzR2vp4zspkU57Ny7CwxAiAOZq6qFVXTNbw2s7cudQy8GkHx4L0o7Ac22by%2FynhveOMlwyWix9exMSSvNAuRo3y6r0SHlBmHArsCCdgp3Kk4j2uikuuilr%2BCG8luYOQ5AuetYaXP11Kto3ESn0IMu5MNvoMIg2pkNlBVyQeRBaIhvs%2Fz7Y%2FfIlkmkPaxXsOzCbkcTJBjqkARPcoksbkiBtETfaHR8AdOL%2FYOBYMAvtFR79OFztMjUShKZmZhtGvJT7o24gHaB%2Few0sfEiRhIJfsoKj7KPV2S6oQ6PSCBLXDfI4D%2F91zvo62mAikWQvmod24BvAffni8ZNL1M%2F6N4SYmyochJi3IU%2FFMZYeJ1PoWjvRF6Mm8KAOMpgmH4xPJt5cK385B0uDgmX42p5AUKXtv6aWTpb5hAspB6py&X-Amz-Signature=7e1df15a644c7bc3b388c6b4e139f74b87e97b11b299b92258ee7be9910dddc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

