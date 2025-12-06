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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIKYFFU3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T203606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY7VBbkzMq6eaboMg64NUIIG%2Fcoa0eCJyk%2BNadhh6cNgIgGY2LGvfCW5ZMXC%2B93DrATxkhD3I7gaS%2FBHGyDKuVy9kq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDN6CSYSHYvGb9iTBaCrcAxsvGY4GVc8PEyeReqPc90QP4UJTq6tXhMm3jiea18%2F26Vd2xN8ibZQUSvV%2FM8%2F%2Bxw8PkpOIFb63eKlBOaDarNqePkSAvk7c4P0XuBwD37XAuX9i19uQaTfUD0sv8agEkyC0wyv6dJuA%2B4731sXjYzMjKYNwdJ%2BERTBhc5Qq%2F2IftJ%2B2Pv3YWn78wG%2FlgMsi0Mv4Dd4MMSQhVq9Drhw8QuJwbNWiILcKoHHCSIX61CszR4lELoHrBJhRENLlsKci4yTRa4Ko9BRU8wYIKu%2F9bm1jJ%2FpcWC8VMy9yImKKJL%2B6HYHHqEaXV0OZnxe5DKkHPCpcxYwlAQA7bAwPacdPA3sX8gLB0NQoOpnZP6jhv6eT1Ny7HuA2otWB3%2BvG5HPf2RsAYHNwB%2BxG015cUUfL5vu4gKDQRsYacAfFphHNjuvcZwtj30pIwf9lwH6DH57lG1DvcA%2F9oqn%2Fv%2BbTSKAKEjbkZQqEU2cRDW8cFVpoNngHR9SnKWj9v2pXf6FsFe3Wwmqk2YGFbmd1etj6iy%2FfFulcxRFD66KUNLL5znVHBR27V9f8w%2FPWEKwOW5A4UI26i6al7SBTaq%2BPGYWno5%2BD%2FZoiMLWsXqWsRxBeOqQf4Yxv5YE%2BNYJaF8jf15gJMPHM0ckGOqUBILIvMD9EkODONT12PL5umWYKgfeIQPqSHZua79fG9PcRZ%2FIL6KuuhD1x8d068APyTaX%2BP6mC6bCRwcbWLaIRAn9iJIFFCYE2kgBAFPi0X3dYXdDcKfHj8PUxROFD7rYp3s6JSJoHhlw1z1jZlbWSRHqKI0hyLbem0eJRu56%2Fq1pWD2gXZZ6krewtfGoI7NmTCeveSS6E%2FThA4%2BbCDYUyngy2dwzu&X-Amz-Signature=2b35ef98fd530f44459f2ef33c125b531ce0d906b6da878e13724589b85af6f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

