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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WACEBNY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T030449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1sgCB%2Fpm5ChP%2FUocwPwVRXUXBIpcuHe94Uq5Ic4hFMAiBm7qymNEguM2%2FJMD7QuKwSv2x1RJV6mDSPlFzB23kizyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKtVetRWBx4OKxd0eKtwD%2BlFVAZv4%2B5d%2B6dyU7WnF2iQvTuvAVSuxA2rHFZKa8Tr%2FKAX3co0v%2F1p3R%2BF9MT9F62UqQaO3ovhmIn2%2FjkY%2BEA8tvTNMx7WKR6QaAqGqIVYcLSbMvSEH1Skjv3TaNZbWsfBM9dvIzPgyTvqT0V1hLeQIYz1Pat%2Bgl3oAP0Bg240TNUy5m1EDcyMbpQlqd7VREZlhMhHKniGDiQHTBcuL%2FxWmQyxGwQ%2F0cLDwDhKCSpnny9bp3QQ493JRhaPLWxe%2BoasCZ%2B5tf9AtMtzJDXSB72FtyEmbwaVfRoQvdNeMcnF8IFiXhf70bSMJvA%2Fh8tkJRK4qfPEad0xaOcuf%2FGO%2FoNJ1tjChMI77dAY6%2BEY7rQY05w4uvGLys6do1U2xfVeFFNpSSGwnecIIAKw0%2Bit10jBp0GSs7vO%2B8KMwGKw3gepV1nKa%2BHXMWYiapQP%2FJ7fsWDSMLoca8sHKiDF4acjne3MjASbB%2BDswSZfGVcwwJGc%2BXOqHBc4oVxV4Bt%2BOrJl9W0K91DCSGKO7gUkhv53NwtXLdJFH7bFQY2Vt9Xp%2FwTSu7iwV2YREaZF%2F0aG0%2B8smEgbil98TIN8yehY4Tuu%2FH9DLPVkZ92KxIt1AKDAzs%2FoswuZv4X01oHj4VaYwj%2F7SyQY6pgGSx%2FE12fVUlgFbRLPZN8vyobp%2BBzpf8n6%2BHJN1weCdZ9brcM%2BQuIvKuIvptSjxiWqX2q8DXoqaMnekzNdetws1yY8xd0vDS74dSRz3pNmRjSYgBdjnNyUTq1mnN0VEsF%2B2b%2BMEZy36h7bcb48uBRWiW3MueA9RSAgnRt0kdsPWjYL3mDuESVIvO6HR67n9anu%2BX8R6CqlM%2Bhor35u7jPlJ8hLB2Euj&X-Amz-Signature=8c9d55cb2061375875d565bdeb5f2a2fc524f8897dcfc0cb58c21cc5fd05f793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

