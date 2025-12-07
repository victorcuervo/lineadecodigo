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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653BN45DD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T045708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGk54jnrSq4mZ%2BhWXDlmPP8ydSG92rfANUS9u1znTeRdAiAnRpLCHbtUd%2FWB81S4pAfjf3FwRfelhBhQlOvZl8wWmyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaRBkjL%2Bn3iUb4rg0KtwDNNXG00LY%2FBuiki2oucPa5AU7jqZgvtuXshhPFBS%2Bcm37sXzXnuFqReP62KrKqpEQetOG5XSuoMY8Z0VL%2F0vJHRGOUuObd2B5a4LPrF6TVCKnUcIumAyLxP8dtM3P%2Ba5yt4AM%2F%2FmyIQANSTjTLLkUn9UHn%2FsodjtyF4OyifHCDcWBHhB%2FcCAKqku1wzp8lE%2BQ2Q41bdULX1tPjtNEbqGqLJLZ4yAUBYkMRjykJJsqZTedtT4HmlwCzfIE2WGkIH4qkhWYi%2B4umtUezgpQCuWtD8xFtgq7pkD9CDl3rLK8bBs9g3%2BTTZqNhC1H1Ine6BwgHREksCXSnYox7X0uQKXF5iI3O5Gg5W5sDCdCIKLi3rHXAPh5eqPSx5eF2dBBUnSNOmKMasZiP7X1lzVBW%2BhaaDHbtsZiLkDZErC9ktV1GKLu08g8EKxvZEbo0Fq3OdVQjgyEyPJYhCkZvz9S1xxl6ClgpIrSHK8jEZ%2BSmmGo7DuKtDzKzC4b53fJ2m%2B7HpV%2FdbaEcmlPypFMmhg62%2BxzXydWH3YSydqnikNgqIkOq0L9LuHPZ6wb8HUMzzmTTNwHslCPHHtygIgfiwu%2FFNljCvDZfFyGpQ3odn3n4iGvUETfLPpMYd%2FAm%2FAwrjswo%2F3SyQY6pgGfjTz9t26Ov9wCax%2FDhn5CavabDLGkgjLRhLAsa0EJqVcoNJlNBagvSHnh%2FpkgRkJYuhshHktuWY383oQILqzOERH83IIRl4GJZRKa%2FSLPqwI8q8j1EBM9Hag5wGyYoujQQdz41qlccpYICC%2FWXe6O2loaNpQ562gLZLUD3gXu2sDjEWKyMs5vr8kuvJ%2BL%2ByfHrZm1WY%2B323ze3Wm%2BPViDbacSVedP&X-Amz-Signature=78eb83d5be2ac2f07b78775197c27dc36488dc17e5fe6c6da052a201cc8c4705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

