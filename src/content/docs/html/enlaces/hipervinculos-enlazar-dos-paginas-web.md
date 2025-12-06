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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672JOHAYX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T074801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE5PbBpK92jUt4T%2B2QkgURaH20yEXCkQuL%2FLJjGP5mPZAiAmjD%2FcVv041lajAL4I2rV7OS25Z1oqwfPSV9vqdT95%2BSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM0FybHFnSIpwrDUKuKtwDWhrE5SWupzbYQkIAIQWJ3MJTweuGa2rhsTZO%2F7%2BBQ4%2BFrWdZWzsatAWWI%2BM4AHMM4Tapfq84ZQLhA4fl9nNxm1kBDInrSDNL7aR%2BG0FD%2Bf0pGlCymR2VBzdVqaY7IPsFj6HaVTq7EhBi%2FIF572s%2BQZZDrtfd%2FC9uivtsZYtwXSeXlhZ5ttvr6QtxSYwAR1FMNM0m8rgtfAdtYTIl%2BLsYHR2TZ6Gs43qebQNGNIglLV%2BHLVIUP%2B6oNfiiDlPKTVUV0nMRekWo3jocTMZ1LOmQkZ7v9pN6DTVRyJUY%2BEcSSFFGTWc5Uvhpj8sZed4nLTawGsrJBU3GWDdhdiAd1fGepIeiZryEHOpsFCX5x7KYjogSZs1Hw8E9rl7kgD4c8KIpoKzdypME%2BcVQfthFc%2FFNTo93sAUX4uCz%2Fl5yuff8oQRrOqQ6lQLpFjU8FvmjxaIJzKaqTny%2FVo7MOzwe88PH2I4CeAuMtCuuNttb0EkH%2FvsA9edTDmyh33DWL%2BTLcYru71m7zTw0CvvQGi%2F73urRMgBE%2F9H9OjiqEO2Nosh%2FU%2BelrZc8SL3qTHCE2dSQp1KFrJryJli4Vk1mLGQV2%2FvlhciY8Q%2BnOX1a9OiecP7Nyql3krCv77BjEHv2Aicwq7zPyQY6pgGVDux0nmBavdqCL0cQwL%2FfZFjyLLCV%2FXmE%2BvKuvgRX80wawwCTCx0CDfOXxGzDmCV1qA1YNSou8F9cV4uyzJ8X%2Bbm6KGAwmJjbJFL56RQr75ZaBAKsAttS%2BVy3Vp86x5C54E%2FUFgf0gQaLgfvgrOfoabiORU7qWX2ylnoJm8J642RhoBcprakWmOo%2B81dDKiMb%2BXvzyxmAIFEMx%2BP761POjnsbMIT4&X-Amz-Signature=321926d42b5b4928a9e661f871d86a9d9faefe3683ecedd9d60fe69f8698bf0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

