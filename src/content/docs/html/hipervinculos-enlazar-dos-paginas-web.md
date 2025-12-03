---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K5ZBIHX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCICuPIshFPaoI17CYLLmwExHQz70oekWApowtvHWwMWQIhAMMnb2Ch37hOM2dQsTp1RwCprVZzflLVXkWS%2F5AShOK8Kv8DCDYQABoMNjM3NDIzMTgzODA1IgyeuMBTrfg3xVPScOAq3ANX8waE7FlfcBXQcLM9VHX5X0L2eLtJ%2FT492ESCpjg7T7utmVSYA01iF0FHyi0H0ySZGQMKgHSXKHVon5ZDNDUs1Bd%2Bd20EGoU%2BV2n2UYaom1o98hWfZMQPT9lSF3kICY7r4545kjNWvFcRR91TXJEr1FxtYSlEqwZ4zz5UIxmQrNbhl3Lw9q48chktHF4KJUAShdnxeaC4YP%2FNJ73VJd0slH64Vygsa9qlcu4uhTSGBcDBSzaGZl1QYkYYk9eVqe%2BBJygC2FrUd3POvQ%2B6zX5va7iG5yEeLfyJkf8AEhy2TRTvJxPZ9uPgoyEVMXnV0KklNjFmFCyIOwIKKhecpU6rZDE20IdOsvf5rglUBBWufbyMu6SaUXQ1Uc017ZJ3YJJT83zgqsj6oMsd6MkUkGWAqsPCHCtj3ehgO2ZsllKc2HfgZQ%2BhGpPYJYbC4FbS1jAF5VK79Fh6twjvIPx93zpDwzJCmrKNJqLGMMdRPnNh%2B%2FOJEXwwH9MB5HW0OQo%2BfSFJgJ17ldDNrt8r%2Fw1btIr%2Br9aNfKcz%2B%2BwJdWCvGzuEbnf5P25c6yDTnC161Vk8vsm23B3yioRdK2Y9LuedXWTyZlCKe4uMy7nFqWemCyVA62W6m10Mq4tp5gCiHDD4vcLJBjqkASoENJJwU1LHbHcNDY7ZK1yJSlFts7lKfD0oRxf399p0yAhfvGasRe9cG43%2BQwrLhzF2R%2FiaO%2BW31NDdnPZ6sayaOQGjJU8bv8JiYmOmX0%2FEPOrtHAe0c5cVpkS5cH0jMZHrCEXPn6rQIHog%2FemJRkB2UtgbQBf2YPsE2kczwwFMAUijm%2BCAMAutLUiTLe4t10kQExTgG9LVkcc8Dv7b9hvzhNbL&X-Amz-Signature=cdc604644def37ea361bccc3a8bb0c621a9e0b23808680720bb9cd4393b68e93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

