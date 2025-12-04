---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7NTVLVO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIE0onkNOmxu54C60j3l0DkTH6ezCXc5%2FESF1eXxNXsgSAiBBYJNUCGGqKxP00dLrVB9%2BeVbSZsjLjt%2BWH%2FW7DZMYJCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMx%2FlLsAyZqlF6VCqjKtwDAHsiJVjfOYK2gL1KqxX3XzZcAP4dAXWhiWxryuZ5iDFKN3F1FrIJ9n2Trtv2u%2BtW4NjP5S3Ils6duoovNY9Nb4ab5nUrnIzNtNVrTu2hY%2Fo3ZrtA3BJgBeRihjmtjWbl6Y2nYc7KCSR0bimAvFkWG53cnmKB9iCLQoYc1MZoVck936syGqji8es23r14CyNFfjolzkO3ZSQ1ghQaQ0T1biQgeqNhXJXzZKOaVzUCk1A%2B9mbtlatDTkCvEuZkc5n9RQlzCfMFxKLCnHPBCA0%2FHQNyH7MpOg6vnsTnzMfmEsX6NcgD9qJA%2FJpL7PI3RHky%2F3MDiaObVAu0ex%2B%2BKlzIMJG%2FXzyGL7OKfSjXSAVFV2oitZByQdGxsuNDo4vdYgYnhSklpk5yUSRfmu80UUlWX1wlmPCkdl0kG7nfvq3xwvm2fF34t4Avoi5bam7cwb8r29RRKDqOCrmq%2B4eYKlJLSeF91%2FWjX7MyD9KjpLRJbZnIy9%2B2DlSuaKoO0J1lp58O%2Bf6ejceMkkJmWMmNLGfdv0usDGEX6o3%2BeAqXvFsg4QKqU0crEZ2aPJ4uHxBuv8b2PV14%2FxI%2BL%2FoqyjNipG5LXdieXWpbpgLBS%2BImUB9WyI7aYLzjwBqAAvwBw7kw%2FebFyQY6pgED%2FKY1mI63WxuWZupyPI8kduweGrPaqblB1m4q67lKDIKEbT8osBnOI6IA9BgwCsyKU%2FVApPwL5ji%2BOGi9G%2Bo9DDtHylVp3EYTCs4bbIcJPFaiFV6u6vxlNHUpdRa76hE8wnh29Sh3In%2FAhdJ7ULJI952EaXArcGZXiTCcrCcw08dx0pEy40tZTo10elW9nS6nbEP7fia8aCg4riPSn1Aa6VQkNTqe&X-Amz-Signature=b6caeb40bf9d6ac5f8f61e49ae13c8f33e8e6ed785b5cf7138d46e3a6c1e66fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

