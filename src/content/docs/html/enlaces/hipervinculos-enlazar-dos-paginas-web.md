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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XDHUC7Y%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T002306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrUGuQwubkJ4vyYrlKu%2Bt5fBysgVOVa1cqbS7jB9lW6AIgZdODiU0KM4DTh5oaVSrWl03OYQ3osOfo6vMP78o7eBsqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDDK1mIr4wzZhxHTzSrcA6RU%2Fg4WTx%2Bs5IuXYfT5p8%2FZm3bSrCJz3qyBe6feqzu5RsPvd7Sn%2Bj%2FiCbacscFMusCdm15KedH01mHNidEa%2FyreobU%2F0KRGUZvod%2FDZMkux5GMP%2Bod%2B48aL44FRRKxBKKZPurXqPJVWlp0aGAle5MMvNXOHCFOWMj5kqrA0bk9xoPBYoUN4oUDZcQh4p5ZD5E0Waa9g7lLXAHkVAJ6oLxFUEkxl3vq3OVtxbic46uMFMiBnnac6Rca6wVHyNSBJgtNZsDmdERTqKognsrWMLkuJf4wbZZWkP3E9wwPm7ox9ZIEnEFMkUfo2xuSgQyhI7R0qJYt464ioUK%2BfbC%2Bj9uq0Axi4uKsJKvG%2BIpzIBqqU%2BMuJs4cGKvEseQixehAGMeqM4zD5U9aXTF%2BVy14d%2B5LUXPV7mEaK2fPdS4a5j%2BEr86GljhuJOLVFeRH5yH%2F62ezkx3bLX5lNCzHPxJOKllLEy2OhNsRaN713fyg%2BJyUhwqaQ2Czdv0e2WYqdWLwB8kfKFjcTg1LpNScawiAyfIgzYwSCqWWVwiAN6Te3FU9%2FbcBshUMbaaU298n%2FyTiCbOxLnTlnDLbRRr7eSeSVZgieZY8%2B13AB%2FtJMR1Sn6VghQEMzPmRoAt7S9F3NMKKh2MkGOqUB98%2FsTi8H2yrY3CZXhzYwoAjbsV6hKwMMFdbb1Ygok0Asfazcf9X7St7EclUaAwrbqQiTZclbPaE4VkH8LItqbgD59ug7gqRtQpBvd4bagrtgmZv145bekTGaiGkZQtCzOptuTPRiq6nlLZvqaM5Ylk8bL9AJgkpeRVPwUMQeuNOcndg3HMA4TeTVwZToSxA%2FR9YP4kTc5L3H9KFWZw6SMrL8V6WZ&X-Amz-Signature=30ea30b2cf59bb0f88e3842ec5e45e327e826182b724228a64c6b533f6f54726&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

