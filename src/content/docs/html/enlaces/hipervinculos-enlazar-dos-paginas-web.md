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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZJHPO3C%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T040830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEirrkmWZkxeSBPIjNmh3co%2BlaGT1ShNvqw%2B8A1LqExIAiBoWMoIJYZfmuSLIfJ0boSaII%2FLsRtQeMdb33RwaXTBJSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMYDQj5pa%2ByfeZuYGBKtwDPxPHljD1DvFmcXfdhCyEgkIbuu2cOvGeEj%2FR%2BqkoemwdB2mpE9OnX9sEJW5XzWwns%2FWvLb%2BiLPSWbNoiSJKJKKNS5Dr20qpa5POfYHjN0W0VLQS67aDXWGNmT0K9MOJjbmfL5UQOVSkTTO3OfFT3Kt1tgH0hNqfvbjaiFUbB%2BWhEHzpWmxMguIGVFLkqA8Ok%2BFkUaLsw2rSomFZk5in7Ca92yiJu6ade9I%2BUS1LGv5qh140rapTdKlg8mPcF8hl6uDFowhmFfimy7syALv4k1CcOd%2FsXCTtdKnwdGisy7u8E8QNk4Q7SfT3jjnKuky5OVkJBWTmidyB4ifnnz7LMVKafJFMxP2ajfm1gG9fPtB52HpUpdf0LbKe0iffjXLX5Zbs3zOrBTzyb%2BMMBnPWjV1PiioXy4IutXQuMOFVWlAjL84qbBeQXcmceaSOoSb%2FaA4DusWxnG2g2xDCMmQBv%2FVXq5eRfE2yTC0oisNEX7cwyw8%2F%2BkwitwiSpRy2IkjoT8NVKen95sPHCJQqFzjK5QmEq5v3h9na25rqDVmkxV7ne9I15rgOqzMWq89JVdScmwYOvKCAS8RSqI2HU7zmm1TDvHJoupga1XTrUUt%2FMmxfBcBnN80UfsFqNv7Iws6%2FJyQY6pgFEIZO4cZ0yEMTnkrBkHp%2FHQ8UexjDae3%2B9t5s6FJtpxbTty2hdVlXyJ%2FuuVSDtru2V5QM%2Bp3zu%2Fx6aXCtaKGrgP0LcegxWF5tH%2FRPm6vEuo5JgJHZpxjtTRPSk51H0akaCoWSvxYKkZwdXhD%2B0VnrORC%2ByFTEJIx4mNz8f4ald52fnV19WyyHpX%2FCLFya3w99zSKfV7RirVENDg3%2BPN%2B9hzzVZKVQc&X-Amz-Signature=55ae1ddb868d597dc413a1d77ad9b5203433e3bf57087f05ed1c777ad2d1238d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

