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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BXQK73Z%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T034614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmmKrTLoDdQs%2FP3l9oR%2BrxgrMQncZxMbUqCebXl3QqPAiEAorWDPewfVgrCr0GBfRvEDy0dLB8Q21uY9nD5IgarIaIqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmhfYbCL6%2FDbqlhECrcAw5xabTgMuRg6XU9YgYcCVkSPNRkevQLScaxo7CMv%2FNB6OO4P2X0Gah7XAY9dPHsUhPYfFQVcJLgJara5z1C6mtomgj0xNewZDVe2MUIiNYyjeJm2M4tTG%2FZrcpHPmlgWIU46Q2oZ3%2BQEA%2FJX2BLwzSWYXKBFvVyeIzBMyInQ5X%2BhUcdZVyVx1GwEcPkqncJ8fIwZ55OcKoWMERf48tEQWOA%2Fne3FkOxCcq6ZLisabWGmebpMa7tcv0k66QRqcnp4Md9IklsbvnNNDsETHqw5sT789sEopLpfdNb%2B3AWVNE44V1z2YWaTQK3YNmhN1HEQL5nfDLBoz1O1P5lGwaqy3qmoFlyVgWwH0EA%2BdwIXvYq%2Ftv7FlAB587mulOWpufsyDNwpRcSdAwgv7y%2FMeuPhgCF1Z48LWIXmxfPGsJp2z0uHTGXZ1AwaA3HCmoPop%2B3I%2BM7zMausX5b%2BzlmWv7u6R%2BVLKvz7yJ6GvvWCC5qZkZOPOT6Ow4xyy2%2BL9d8FuInFQRUeBjA9JI1ompJzxvmsfybUs%2FvEkdOIDwy2a1IeVN4yN3mY1Q5LRwlQG%2FKIITfeSpPYQW5zthMYL0xGi24yap37hZPLFAu0Oqv2L4XUnWzAjw76OM%2FQHVlqrJ%2FMJrv2MkGOqUBCitgbdGOfcX7byAOR3xyqpyl9dsTTbpQGnR7mw5fZEGRkWxXA8kzfvnggFcEKO7pd4W%2FHBXUGLDY%2B%2BP51vCt%2BbcCQHAaC6BnzC3ap6AoUth6JcyQQUnr9Q2GA1G9Z%2F3HBvOUALVqfCCprDYuyrARDKBw7kp2%2BbU1H%2FiMZdM2iu%2B3KX163qPG84zBHIgG3uUKdk2yfxBI5KPv7ub27P7zj9HuodbF&X-Amz-Signature=2c6906d38f4dffef78fb25d2162460824b2148664a11a36fac8cf677bcc7961b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

