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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5WAMKN3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDcZRFjmY%2FzPmeYakOkeIsN3ztGeWG5UCaRYYydPZ6NDAIhAPcyF3MJO93SQ6xNOD6Et42WPhvY%2BeLqhwuwZBvpcZfUKv8DCD8QABoMNjM3NDIzMTgzODA1IgwZlei1%2FDihaf0fKgIq3ANhYzRSkgUfpTZISokm5bYhViPKgV84AJKah43l0SDNE6qNp%2Bn4uamwxXJ6bnJo3dPJlv9OV12Tr%2BUj5WxPSCl0KSmCIixf3yU6crJjd%2B3Lngh1EKMvnatdUHuSS18w0gYvIK7lo8VHq4bdCKJqrJiPVg7KEjrDV0tcaITU%2FF3RDR%2F0nSjP4SyAx5LZeQoDpvbDg5EW2Few%2BYarKP732%2FaCO8hPHsWlDb0crU56U6KHlIpkeReLDZ4Po%2FuNcr0Eqwl2qGhQ5E9eSw%2BCaoxlV%2BGP2bevkPKsIUa%2FpLOtQe6Wj%2F2bkGeaoh3vJdZANu2LAtrmMN2wSDroUq6nqDCEovktyednhZzLt3ohRS2E5VlxlowTGLUARNMEos%2FTniBImptnD3s4DiKIukdHCeE4PLo0dekwurqbWcn8I%2FUQryQK0j%2Fp%2BUtrjrcGI5xN7F6ssSl2e0PfkMWy6eOvdNBVMtoxTpKxysrEFI2NrEDiJNYeA0yesyLaeh%2FHAgvrMrjLsq0JYqBezZtNRD5cIRx5MQKv00lUQmcACMO9KCBx6a7Mxpy%2Fg9OqCdLQG7eDMxmI5gyj%2FBtpGU%2BMew6q0S%2FQ4cxcftn%2BC3ulFU5aMKgspS%2F5T2J7uTxUAYAEhla1UDDTycTJBjqkAcTxAYXj1fyIgh0GNu88CtIGtAKpKCDkCQPxY9kvpccHpQKfkh%2F8t6d9M25bmSd5RrNrvrVoLVn9JkJTPDQXGxa4r3k04HhwWknbUbAWRbS7sjMDJVdZT4OPYxevMexJh2zoLKg7Lx4wPeUmKVxFHh7CbchZ65vFwTMu69yizkcoS8AftzAONaFwwaKpuYGbHYhTh0%2By8G7hl%2FQTdbGhbgZWzSMQ&X-Amz-Signature=3e3468360633c59878906c32a5bcb6aa34cb653f9cf6a9b9b49c142d7c9ca090&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

