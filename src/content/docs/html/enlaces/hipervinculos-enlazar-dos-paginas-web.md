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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM4O4GDG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T022903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhHNLxbF10hl7HaX5fw7LMJn8R%2FIefmoJCKOfYsZeP%2FwIhAMTsDTX88j5v5ilLg0qwl9iejYoLf85kUTi%2Bi%2FOlWKnLKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxixV27FJdufgo%2Bkygq3APfpugqloJkjwuQ2faJPb7SMwoaU0JmBDZimlgxdhwnxUnlPZG4xqBSYWFfG2aav0lrO8ya9ImXetlgkCdqyPyXos%2FEZ10Pm8pK5Ocvx68aGvepMBOIv6WmppKJ8QbD7KKKszjq06d51d0rIfACYlkiWnPFyMRgw%2BWA5S0J8ynUCqhpPr%2B9cSJPiXMpGKRdSk5QyjqouimuvYVYW7KQ1g1Nh5oEiLsnA6eX84jnLchGl%2B9ioKbMseyMG9kk6WG1yxhOvzi2mdtePAEV2WgT5AlN6CLbmZox9swWKb7nT2lBRzCvcDPZthSXG116tjiFvGxy0mZKR6KxEXkfH9UYSGUPkv2ojMGfOJUuWjVkVQ2SOmFYqWwp6X1fajxIOEmZZw5cJWFF1kSi%2BfXQaBlUSfF6GpNvYDnCGxEm%2FUIjMGaq1%2BiO%2FDyP1Iugvjsh18GbU8EcSbYNz7wHUtJ9AKdjeDHbC3sOTyoklY9s4w9om3niFaC6AF3qgwaSZcgo3suIdogJz0lORLAAHsXt0WYyJ0ev9rGUoHQVEi0F0KXOOWbAmzvc7YxVB8AAojGXWq1yw%2FLpf0zk%2BWx8%2BDVkROaUPRrFT6LJS9povPLDjl%2FW8kEbPThoXvU1QCVIT1zoGjDTjd7JBjqkAcGcb8lEliwF0Wsrd9Wx1BuSj3nMEGs3hZXcpV10BjwYSzGfZueId6GzoAi9ci16VzEXax5yglpcj9VeHfGT%2FC8qIuHWGKvhvuruEESJ4zzQIAbmieQ7XoJZ6uyuDmQ24LObNeUfYx7GobIo0VsUzTdnDybHJqG5ltRDfFJ%2FrHX9sWxxyttGu2LReFE1W5R6evHurDnMo9XlP7zid%2BNY1en3Xlrk&X-Amz-Signature=a38a73133f7f4d35a0741c70ac7ca4474c030ec8549573e51dc8adf0dc003f06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

