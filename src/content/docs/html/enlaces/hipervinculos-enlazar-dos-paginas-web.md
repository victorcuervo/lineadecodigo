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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4C36WCB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T124329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsVuGGlb8QvIw%2FPo9BuRjw%2B6qt8ySQR3%2BFo9XgF9KUkAiBogLmEeacWrMNnCiYa58evikGNprvxs1%2FDD27ANcdV9CqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGsZYgN%2FHQox31i2jKtwDJ%2BbLX9tu9SJ2nhSx7Y887b5KTSH3OFD%2BoGiIY5nfBQOrrADfAmAZBEaSdEMULrbYQV0s9rX1GBp7cEnaa16LkQHaIiVVyIZXm9N%2BIYv8woEo%2BbopuiO1FXBjASeoAMDjLQPf%2FIBlux%2FDbU71rF%2Be7lEA84CUNG4hSZgZXKVWIMaYzkfPMVxlrcJc%2BlUOrVoNgtJrm3ld4WyOCXXSr8d59QPRd38GtTjUDIUakx4P6qG4Sc3%2B1a2GgZ1Ov%2F%2BVZm97GPxWn5F%2BTmknidw3cvW2TPEnZNwHRxr7RCO0teR7Fd96Duk3qYjS1zSQKEyT3UKAc%2BlWFHc%2F82EtDLczMHW8fnhMnT1EjKhXgbZ206z8xPjOTY1xRaCD%2FgdFL7%2FbeD0bckz0EymCjpGZS3%2BVYtD76271IK3IqUw2bUGINM4YYUFRHDUc%2BuLTwlprT3W9%2FeGjL8dIeD6IQJz6pgmj2NHIKjb%2B%2FN%2FdIwO2x7eU%2BXVFgiGdd2oHfzublyE%2BEL06zXc3HFVnNQPMKF9KIcN9ANkV%2BolnzQMUdYbLbUXpjYZ4Q10dFPgnymUZarahM7kqXB9oH2E10ul1bYqLHYAv5n3FuDGg5baV6sjTyMq%2FRXYztVhs1%2B8h6%2FNXXKsHNlkwnJnVyQY6pgGxCLKt1cFN%2B5Bp1dWnWsE2QW9nFnHDS2UphaYmH5hfNvYU8uyuUf7engrEsyN7%2F3fpMlP1hRfnNvS0blX2MKbAPA43oRb%2FJYgZuktLXXVx7p59hUTuvS3fTn1IdhEVm%2Fz85PCE6g3TVVQn%2BmEJyyAZCst8uzXDhRNiqokiOIUdePFSrmrVs8JfKhIVmKOtPWRtlbdhrHG8GI%2Fa16zqfUfsUWhXCUQH&X-Amz-Signature=57ea7e38251b6220b697c71c25bfbbc77f05dd42dce2fae9f3f5a1d941fb6fa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

