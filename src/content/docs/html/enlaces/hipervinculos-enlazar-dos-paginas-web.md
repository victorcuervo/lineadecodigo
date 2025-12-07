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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUUPP25U%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T043036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXYJlEmJskC%2FHWGsnk%2Blmxs9AXuFglBUT4bzg2wfHDzgIgMiIOKT%2FG5RGpRPZtC%2FpvlCfF74kq5CfI%2F4ZfmnFIMMAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFVlCQXAsd%2BwWWmZjyrcA44kiyYnzTAHy6rpg8PHGGElzS%2BKwWFTWRZ0Wmmn30rVik4KZnFx5gj1XvP7HEtmJnbXoxtflZhkpfiPrVVc5GxmzIcvaifS5ZTQn%2Bo9PRXRK18VOzFWOF44YCfWfp5Qz9D6s4Kja85ftrrtpA1Jqf6%2Fhbd9fD%2Fb%2FRlHIiCfK8GfNeSMQh%2BfC14TZm%2FwQMq8NBebOs4rK9YgzoCGY6VGBjKzv97oQC%2BpRR5hruvaEcUsrRn%2B5PVl%2BHHiM7AFnS2Z6LeGggSOormQHHQ4RaqtdbRMlPIvLnbPSEtoCDD17NrFGO59aMlee78KZRUXEXWl%2BboQwK40%2BRHBpRbF0wVSY1vbUY2BbC2Ks7jr3ZMNB%2FoYaatkCb1k%2BzQcw3LeMG%2BVPOhayzKzMN0Jk9IDkdSAJoH93vLNeRcwGGboQum5ov7u5%2FYaHw8KOLjdW6bqybG0z3yyONV0gCokmXwQd%2B%2F2Ei91Jo4WzB0TjMU5qVsUrs%2FDnBh2Nak03mamKSKra%2FAmbb1AnkHDS1fqhTfiadF73LL9tIH0Jyu2BQTnzySyc2nhyvUFALP%2FuL7JRbccBis%2FfYJhC99H8CpSQBjEfL6npPrZvvBZvIIkjp0rF3FOuRMdqLUygZeQRCBPg91HMNv90skGOqUBfljrry666xqaXoPTXk%2F%2F3PXK7c18I%2F80XcmNT%2BjqzBP5cXVyCWWuYqDLfroM4b4Du%2FMcQjeFI%2BlLG3z961VLEs1WYcz9Ahiuh2DW6G%2FddkqQrKagdDM2mpXgXc96T3aAUaltirHW0i6V4Tlz3d%2BnO8kY7PK6l%2B6KXnJ0jcLKCcvuiLjsqfX0InifnTswb%2B5mr7HdagJ9ho7euG7bArF85OykCNL0&X-Amz-Signature=6699725532e0901858c4d097b11752291dd796ba4ce53b444b8454eadf5057b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

