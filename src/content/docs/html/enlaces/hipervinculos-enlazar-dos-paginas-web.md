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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAWGEY3J%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T093621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDox8voZ%2FsKZFL5gZSSJOVpXzXIbki78XJViw0ex4O0SAIgMX%2BxrHM2tziV3UwqM21XJwUHNJy6kmdosj8SaAiB%2BCwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgFXAf2XA7iFNSGVyrcA1J5T9JQ2MbDL64HJLoNY1l26ZLyEqjGflKTIbfqIr7b4Lxwq01hBbDR337Gz%2FcEv35d7uMcSPS3rlcvTb8Bu4lc63zs%2FmM7BVThAshqGQN%2F1cVGm0%2BtlPDfQVmY24kQDBmfJBBn5ppQ9%2BxN%2ByIXQ34eKz%2BRFzZ%2F3EiMO5gRDXWFO4a1jzlswaleENywhjaZDL6jp61H2bh9mhMW3RLdJ%2B%2F1LzMkUZOY3H4Wu4cCzUJIDl2ACluj5KWIl0%2BmVlSnG2kl%2BabSVvQy9dTGft1MLr6S3MSNendwrBN%2BrgiU5yC2csFXjoyUl08Lw9UelALOfFQeQbakqAXIfvWys5Y9Er4xyRTXpm2X8PqHQByN8nu1QKdDmB7LtEF%2Fys%2BScis4P46GE8Bla7J83z4hcwjjdqer9eGdh3z7y0SrYMj8AzGn3ROGxllCyuzT%2Ba6dCX7cix0FstYhBmoTnLF%2BHqdo8dWjPHAjWUwF990H47N7yb5J1CUf8RXtV9Z19DLQk%2Fqk7hm7wsxNtO64jgmigdhdurM%2BHqpieFLvxPrF40pXqY8yL79U5ZchT9WoTEr8bFt63OGqyVUm41mpG0nmVD2X00WYtut7inHkrb9Yps94Gmj%2FEjmfgPTfV2jUWkFtMI7E38kGOqUBz8BusPzXqck5C83G3QCUNKkJV4oKSkya0OdnMadr%2FmfYKZvm05o6R3IGs6wSt0BUbzUnzmkzLaQZaxRbSSmiIauw44uPRsGsec8ejuryh%2F9kAaJBdYsTELnKcs7SvjOV3wJQ37Sf2BA5FLzQQ6rPyjaKwdVzvQXV6wXz7WSXj75dKhYs6HEEEbSgDe12TjHNel6ZEBRURj1UbmFgACMyTFAicyo5&X-Amz-Signature=69fb4415bcc537dcd73df14fa76e61744b68c8059ad4f478dad8c6a63697e00d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

