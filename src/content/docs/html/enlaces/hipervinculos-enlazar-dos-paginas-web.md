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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NHSPUMQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T233424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZCd9dn3RkY9Gkqg837xaGhpnXKJol2X9vrTD%2F9LFq9gIhAIEjqzZobElHuwfwgzp0wYzGOUeVVfZV9piFfoRkAB9vKv8DCH8QABoMNjM3NDIzMTgzODA1IgyJJVHDDH3WasapzYEq3AMNALHPU1cfJ1bfJVEJV1nXRSd4YlNhrN5%2BqRqFLZuWjOOz8V1tFqWWWh%2BB2x%2FnktCyRGO0aJ9LBPC9qZ73ft4mYZO9U%2F%2BYrcN5Z37OP9g95aXycddC1%2BDpr9Ilv1LCbWiDmulAmM1Sti%2F4Df7MVvBgj3%2BzxuoHCWJkw%2B1RxAvbcDF7FaJDjb%2BH57fJNF5iQIRZ8Cz6WxoDj%2Fobx1oBHF41ADT00Gz%2B35QAb7dXI%2BON%2Flz94AdFbgZulfNKBHGX6amx1Rcdb3Cz%2FSljCc5kv%2BhPeAIDj63bXtYoqJ9qWxyW59IEIdDjgkHafKCoV%2BzeG4LNvZGVT74%2FZocFN%2FUokH4c9RuIZOeqOsT5QJM6%2B47BRq0Qzc8AoD4ds9scUDN%2BjqsJzLe%2FWN7K%2FX3KDCDRZOMEXCE0T17q5%2B5fyKY5NzFbREbprRpnVJqJX4F3BJwFu1%2F%2BLmWIIzutZgZwCIN0VDmIHNsywu6BVAEEJOYatuSpvfSnYygoas9h5%2F2iQYz6095204Zwh0d%2FN%2FpvK2Lk18jLE4GBKuiVx49VEPb8xXZXmUxAq56Tcvs2WFvlXurX037af1ZGvDHeDu6V7wlk8O8f6v9Tr3GEvqjaaf%2BImtt%2BK3WUyc8RByVnQPAaUTDN09LJBjqkAaaTbcnvGxxhYmlkC6DRmXDeFyUVrTZGX0AO1ew7UNMrHM23CbHiB4ND9DUcrpvaq50K7njB7lk69v396CMPU%2BXA7jGlmprk6t3RS6Q%2FkrW%2B1kzi1bXiWZrVn4pGODOiSva6LRhHALPE4uK4dZM17xcKguo%2Fkj6rOyz%2F%2Fwj7tfy38TOzHmb7KzfOgbsy4JCy%2BsZ2RQ129GkesreQ0Rx55aDufRqu&X-Amz-Signature=00bc028eb5936812cb8a850cf1973a79e39a1c42404d79231942b80e136d95a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

