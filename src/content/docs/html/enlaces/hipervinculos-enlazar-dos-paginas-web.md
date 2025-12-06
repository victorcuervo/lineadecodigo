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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y4QYHWQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T205320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyjj6DFhatMNwissSEU%2FzWhVD6etu2e6XWUza67Rr19wIhAOuLV0%2FQgpUcM6dTopYF64WEbs2Vp4m%2F00sX7q49cy8lKv8DCHoQABoMNjM3NDIzMTgzODA1Igx5aBhFnhtRpkuxESwq3AP%2BqdNepBWEk9WzPqR0Gi1Z%2FqJsfpXpot1bfjT8uSWHIgqWxleQzZkLuBTTv1%2BzomJgrD9GElA6GN%2BnF7LwgsO70sY6j5%2BZOV6CODNUUYKArOWQP6OczAEN3KlrgIx%2FvAI1dbatEAgqhfEtzwbejnpkLUuUTKwWH%2BbuRMpc1g6l2Avq50lU7gntY09l3sLR%2FyEGBSet6Bmpkc5%2B6ig7tpG9Fi55wnIVMiCCkMmtJAH8%2FF%2FarqrgtoaIibgNkmR7oWRKauKin19HDoPXHKUVrxOi4cqaX08lZgsIysCTeuk%2Fsx3S0k5vvVXAA91N5EJMzXI2tu4BvfvotyGOoE4fh9V6LPu4V1C46fp2TG%2Bo9dirgxssf%2BFOPzh%2FgVpWDsnUK%2F%2B8rZ0JVwAMVSSsKPQfs8XZoQmq0nkv3ev0nR2lVW6lIRyWNYie6VkXwmyiIuNQTFzLygvkm1iJl00jhJh6DzNV9g8Eem8M%2BzUAE7ropZ6RmMUWYmStJiT5OzrTSHTTxYc%2BHzgg1KrcIFlqKJqGQyBFTPvC0NkGeHnSQAzWEtxgbN5nVl7XrUpMIgdoHluXWDv3dDCrmYUghUlFVaCHS9uJe58cu9RBy4fF2TOA90kDasqP8fBeuDpe4ZMHtDCMx9HJBjqkAX7B6PQ%2Bi9fIOSY7yubttx8KgLrSwuMUcDjmEg2Irl6JyHVswmmQrwQphsDc%2FGSLUA1PJtkepSU11yiCH7H2cRGAkkMg3BEC6a2eWPvmwVZTVpNupSu2Ku6KFMGjuQcX4mP40qXmVQ0Of0K8PHruQNPIegm9Og9W4Rz8dzyii31FvLUbAFFntFtpD9kvthvxGetTO1kr13bjupjydld41dA7D9zZ&X-Amz-Signature=c236ce840bad594b41973381cf1e39c55fd647fe9729be3c14f4ad9ea33628a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

