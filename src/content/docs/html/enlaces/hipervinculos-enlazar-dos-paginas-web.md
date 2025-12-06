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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOAN3ERT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T062041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnh94AbHu9RA5J82ef5YmJ9GL51A1dIh2dQifV9htSoAIhAK5wxEBJgr2svH8I2Y8PKY%2F1ZLgWCsPcEju2Gjp6J3C7Kv8DCG4QABoMNjM3NDIzMTgzODA1Igx0SI9xe9oMxg67tFMq3AMI%2FvdI20f%2F55DuDVYOXr58f%2Brd%2BLj08zQqwIJrvSUjmlslH3%2B%2BqAg9mObAezA9Ttl54IG7gVyU0qKR0MXKbH2j6yM4zAm9MO7epZ4RiWaA3q2jzieebdoQWjfS0gfIqs3QA2PU8XwpgQOKhPe8nN2G0g1pnRx7h4qh%2BhEc2DwqsQ41XAj3OmyF6wlMaSUes4sJNQO1snzyHut20nfuOp71JwpsBpN%2BWCWZRQWejC8rwIoD1NBV41%2BCvan%2Fb69ZVV2z%2FDQPDvlqI%2F6Ro7%2Fb5SwcSsiF40I1y0L3bTOE12n%2FdrPxx7pWAPqIkVwq9K2l1I%2FdCWpFAl7Qn2N2OFqAfEbZnFuQNKRdMCU9AYlyIz93ionB703uz2HR6okiFGynCr3o3O1sgPFr%2BCj6O963G6jhGzUkXF%2BfPsP%2BSF%2BFYw8ix1%2FwWSSg7%2FA1A9ZU2m743r7MOpaQk6iXPzRxbvrpj0hpA%2BeghoayrCtUmCtscy8UNKvniDrNLJ68jn9ox5zg7KjWcpVUX405l0r%2BY%2FsjyRDMg3Ob3xo%2FCl0fmMQIUIIxZ1fXLsLW7FFlIZCnZnCh%2F5d0Oknz9Pcp9xqIyvxem2QQvzLQEuxWIeUxnmkNHfLJ9LLRum7NH81eEbFcDjD9%2FM7JBjqkARy994uCpRgHoHptLvDx1jcxRLYhlqld4DBBx491qasemAJxZjgQJxzMfFI75d86a96ldOvU5tbotkirojWU%2F8U6pOicIZih0sUFzevu%2FQ%2BhfYQVddDCFCjzRYZhOWorME6cXQvx5hi98fV7GWauRT8vZ8P6R%2FqDtvsIIiSrfdFUQ2w1Fp85l7VUfBCdB6lzuYnj9ufIMTnuEFDTCJiNCbFaB8fc&X-Amz-Signature=475ba00e752124159722f16d6b614fb9de16957d8bdd9ba9ce6b083bb33323c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

