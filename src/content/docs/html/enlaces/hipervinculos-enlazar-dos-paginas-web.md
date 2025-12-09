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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663MQ5E5Y%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T051516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHMcKZkwAVPAaOHJUU%2BXbk0wfifseXlPgI%2BMTUHoD%2FFAiBSIcKXXUGU5XnW4K6csp5hYdfqVwHYRSPr%2BGEESlmROiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzifLW05Nov8R%2B0aeKtwD3LI5pe9mvwSejF%2FnW3WHTVlgxI8j%2B2rzzqPT3Yzpi6f%2FLYKPEBTO%2BCRMCIT9AXhg0bIojMN%2FMGXfHhL8FckyM5QLw6vdKXnL%2FavanzTtxrucSXwjBqGqJs7DQN%2FvVcT75fjMhyUnRQHFv3DqV29PjnQ%2BtgG8qPJw8C3TXzsia9l7vvSUBHPUGjeFjhaV2V2uh0gMT%2B1KN%2BSFQ0gq1BMh%2F9V7nnHAUpVglYcU0cDmhpEBEU%2BqsJaq3AEeuHH59gwlcDyqg7sOCEf%2BrHJoyQfSPAoyQpdPesnUFo16xTJ2fJ0EPMryou26picaIPp%2Bw5NjVWwNE%2F5wLvD3F9%2BNEMQi%2FDMDzF3kK0UOT%2FU5AgjibJu8H46RIbMZIdpww2%2F7V42arFoqEtrrK7kxxWHI%2B10y5ERZyzBqXlsTFhSbrXyT5FGodLzzytRK2nwBch72wjDLaO1RUQfIPMMr%2F0fazHT%2Fpc5tH83ay%2B660HsDi0Czd1JlXaaEAEKoVtgallYhJmN4HA136Y30tAy%2F5zd8Qt9ZUrdlPScbF4i%2FqAl6OpSlb4ZUWeCb0g6DyVpFAIGs%2BsJtkKk8jRboB1oTAu1ucD7nsSAh9CwkLIFReNbu55LCvHlgHcNN44qE89edZCowqMneyQY6pgHSJ7iHgt2I51hw4%2B6yzZaLauE75nhYtnoFu0MQOE3Ufl49J7EEaBYwvRGciRI%2BNlqMwjs%2Fri08b%2BZg40GDA8oSWhAsret2iHtpnWKLSSt4UVtrD%2BMbFawAjmoxA0A8eXl28HaGGuFI9y9M4%2BEHwNAAXfAAmbTV5fnqtwAQ1j1Y3qOHMd5ad4OJBfFLzRvSgDgWwLkZCsiOAubjj0lWFv29DdrnFIUf&X-Amz-Signature=d65eac41d50a4b0615701b474f7401ae4d55edc87460567faea4c11ccbcb5ecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

