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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL7NLM3K%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIAfIln84VyVO%2B%2BpW7r603iv7Wo4FEIClXwAgS%2F9DqFVFAiEA2SDlOzCXro9gdpxYcES0l4x7P4Zm61kSuUbWstMF9OEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDAw5p163PXAKbYni5ircAzWtWiQ%2BVbKl6tRbCDXxASS86aV%2FLoZ7I2VXNILB0mlJg5gbyGJSyhaNlOrgfG24krL6XCmzXWD4iueQJaCpVUeIidJXTQhypeTvZfrdLVIxYH2b9gwVUPJDSXzUl7kkQHIzJGjLyJDrcRPc56vYYQ53Xzb8orJ4S3czHw%2FE7%2FSIMu9P8LBwDdNdeOWxex3HM98sGjjC2PKZeIWbjhyRerANt8yyUvQDWp4xOX7r7%2FWl8McIB3SLRUAmlIemfF3ceOesgdDO1yMKbgD77KyNN8ZEYe2s2sP2aghPdSu%2Fn16tEe9p%2Bt1qXH4usoKLWqXvhwZvE5sKMhqW23DnVqw5Vc2x0nwfnZpRzQHANJkgRWwMihhgqXtRKvOZGDvuAqF1PJsL1qBYKi4jT84JGoDUi8vZS%2BlpK53AIItgQRnw8z8qyFhE%2BfPyu0qFraKwQQCsYBbbl4js24Ue63PXw6oCcXnSUaQXMxnS8PTEBr4CC%2BqZl4VVI8z7J6iSzScLu6vIWZxg1WqjmkVLJgXdm1m00GUrLR%2FXInjFvOwKjoyfGsdhi2wSxZOYRDareDQ6LoGyFeqWd9fUqZB9lGIiqF6v3JcNQ1qjBKnOcLkas8A0Mws%2FsWlsfJmyu694OP4qMLu%2BxskGOqUBjk2Lrxu%2BTHYqi2CI1DfycbjD5SCtJmhcM0vMYe7jiPoH5Hjql9Kx3TGoOFycYBUWE3AlMOPUQPd2pTwLWdTLtuFab5Fihf3srMSUuT3DCITyV9uS0D1HVsW8nov0exK5Q%2BCPcz0219PbfESdEQuxfEQaHxyf6c7FI8MQB%2F714ksQkTwFc8cVjp9sNgIvWVfNXfA0oT22Rdn3wEyIjfSvgJV5BTSJ&X-Amz-Signature=f2dcd4fc01e81f40ea624d9ab0128b1291c55b8cb4e6d7a29475add283b900ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

