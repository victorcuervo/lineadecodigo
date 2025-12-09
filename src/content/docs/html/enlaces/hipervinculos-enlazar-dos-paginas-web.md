---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQPRVJJT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T160819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVTdlXQYDH26cOCV4dC3KSktTplWu%2Fx1EDi0rDxoe5EAiA3Aj4SnWZUiHUyB2zykwkK86znuvgKz1xGr%2Bax3e5M6SqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGDZCKJIt5uA6%2BFEwKtwD9A8MaHiY%2B4R0QGtG1wUcNkmzc5viHNtHOSFjOF17fdYSGl8NPKLjeI0%2B7MOtJfc52%2FDoxfyUu1ExB%2FgQYyalgoAMMZVW0TYImI0dAJ86SawjiTsTkDWi11wNQ6UfM7%2Fx02BhCeKiSMCGOzdgDIanlTmo0N6J0R7CmcVm5rkHE4x6BsY7epL3TfFDox5CYE65CvfdRf%2BsBjbWc8bXRroT3ITckgf4Zu6iuqzzeyIcPY6GYFhrRtEvjIUdeLTNPPeXkd21NvFKcu%2Bw2kRML7MLLWGYNmY9fOaKYkhsmLWgPcwlCqYCVo7YUuBOX1ulpCo9kJ9DrtGlas%2FwIMv1geXmxh%2FQGS1fSJ6dwOxLFHbgF2rWKxHwqXyOgfUNft6IWqU98fwFvDwTg%2BnAfrchbR9l3Iec%2FA17xuaRA74Fm8RvXTqSdaw6nNwsJehab4K1sg6CNa3crYn3ZHfwbfQNOZEEKSzVm%2B0F19o7Zp7yM9tW3BqmH0CnxUFhMqyaVJHyo3OMoOu6oYUmHb0kC%2Bzx6qJOVucV07jeEVcZ2NZ7ag%2Bd0ghcCcHsb9GwvJ%2BUrbstIeQT3FH2FDEtUVkdUgMOxjsvTZ8oSRD5LeY%2BZcC7y1UnDzPWHHiEhdgjCaE8Wzow1tzgyQY6pgGuiZSRZ2A0oSCS3gMOyLBFobOma7Zqz8XMsRsjtLR1F%2BqveuwKoNq8n6eIDckBHgfpr2XkyYXM109I%2Bu%2BOzjfnroK9Qi9DCe718ccpTojoVXDK3LojpPYQKGLcJRcz2uE3X13MAPCALqqviACMS791dpuFMVgjiRjvxgVGD1an5sWHy71bx92wbvl6%2BuRZSjH64IqJR%2Fk7ONMLIq2nz%2B8546MwY7p8&X-Amz-Signature=52caa324281e0d8c3e40fa0322c703195cde7571ef629a3b8b640c26052f48cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

