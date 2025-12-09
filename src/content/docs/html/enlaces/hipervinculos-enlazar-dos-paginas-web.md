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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WCMX2GG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T061953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFk0EVkrCh%2Bjs3oE9sX3%2FkSH9ZgF53eWSZieadprFGsNAiA3OMNC76JSpclVwBEsNVWncW%2FNssYSd%2Fivq%2B3jAFGybyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXxrRkDBVwJ7JXeEeKtwDAyZFytZTCR%2BfVO%2Bt%2F5m1vpMR02w79mIwFOVbEO2i5NioqyoILsp7cumI3%2F84l7yheiC3WwkAVujpT5bkyPig4q%2BwbUkBXctBxsRBxKMOGzSMoPkQRfqrZ59R1Mba1Ru7PVv7JWAG0yyGaom4EN8UkxcrMO5YtnDA%2B2WX4AhdVnQkCcOV5q8nchgGfFjyYz9Mm9tkUgkt3gwg2Y3siyqu5Svi7uBu2S5aMJvIzHtuJxm5cn39XjgCwodgO5NxnHFVpUBsd9rHc6lE5i%2B1W4qKJbVxbP1LSmmz%2BWgk8kod3mNJrrZVb6pQkEi%2BPmUAxhjOE1Q41YfiOK0xSNhfUr4ctNifd5jr0A2%2FfjsJGeegJR0wl7Ez5pOhvR0t7a2ChjoMPEgCzHfQ6FzaGt5Vddzjh9zjQj%2FWv%2B16HpskA4As%2F3OtdKf7YJmOiGESz%2BbYk2YqQdIUs1xd8vHxZMcE6CPFWIPbE%2FP4RtVLgCC%2FKceITEHjkQXZY9lguXe75NRcOyTJ4d5u5Yd8PWRxc3wqZh3jXsO4we5XaWvtnZKKGhS6305UfV2eWCGdNgIWHuwgp4jNSLoTPRK5C9wPrRliLXahuqV4oG9%2BKx7I%2BnKqdoxhMpZ89M6nOJWcn5cUqaUwjuXeyQY6pgGXtOfJX2ypBcRS0F5GAK5xqlbO%2B5mQAQD1hFiQhK%2FB8GJFBu4NnkaZPh3Hc3wtoCTKNsnCrfTxAzxaTf0kTLG%2Fefv%2B3Kc2kzfq3ecTuscfDWVmBjnuD1dLmzKuMgT0N4%2BbGnsAGeoOmsgFKnPiiqlCHOl%2BjaqWuqx1oICShyA62VpIPcyTMcf6kJ9996leZcPxFzHLYpknoBptOYPgWgGZXHrqCKyz&X-Amz-Signature=2cc1d651956ec6238ea1d7d9a90bd4ef19ee719556f8339d46cf63fe8dbbe9a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

