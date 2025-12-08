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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EZ2B7DM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T041350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTFcbjrITpOt8GnB9E%2BGM5PIUt0b48vQPh0MUztjqelQIgIg1jVT2DRVNv6at5tJBZ0vPMw%2BUF9Fjrp3MvzZCOQSoqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNI1CuKL0Fm0Dt%2B6SrcA%2FFkFgJq6F9N30oPj41I8E1Z3I8gfzZWXo%2FPKanlibzK%2F2S0KFAP%2BtOzaQBPtJLvdQrfX8DgRIy9YEctlrPZlUnkRjZ2M7I%2FE4ajC%2F9Z4G6JqRcKNFV4xmS4%2B6Nh%2FW%2FqWqPas0Xi8FehG8vgY%2BhrI%2BTWgCVCkNW7ZGB6Fn5yCLmhFTPVFmru7BZuNcJ9unQufX1YjE5O6V6o8acO%2F3Tijddkbe7SFhEUKj45T9OVQPqfGL4vxhyd%2FSZEPH2WtGM7sknss%2FkBPyv0x2Gk9ctLJfR%2Fd1Jobep6TkSpB5mmrqDf%2BYpSQcf9j5NUnGXgkkhpirT642XWZNfbrqc5aDUgRVGjobIyH00grDvoIO0WC2goDfX7T%2FAP0nWe47btC3EyFDKQ%2FO%2BHkrNk%2BfGP4Be32a%2FTotwIeclw2SBZrKBW8mAOTEN%2FfU59VgcV3UlD55HDrsv9UDCwGyNF5IU51b8HwLb3aBkl9gLlqf20FRBfkMnYT0Wxt8dxk1zHpFVxtN5Ll5PgdaVbqvCLVwI9vzPy5a5eKeeiF1SOoaUrh298WL%2B0Ue%2Bbc6XsBAhJ%2BnwvY58HhbCWi58UbZBqKz5458DnD%2Bjs3V35CIOtEG9aid7KaHsl4r7EvYgMMTwCiL1bMICU2ckGOqUB8leHlwVQkXKPQRnTtEKBMZ2615%2FmZTypJSkGgSXRE6DLiv3Zbubly9KTgE3dMFVmqz0nK%2BdpUG1DjGMXoAyGyPNrlCSRf0cYgZkytNv2payRTsn4wp6FzGpzXNb3%2BKwLEz5s2w%2Fivg9iZR0aQnII899yB7fsHm3466EBw9T42ZY4fL07hLSoKg2NGNCtJNtWfU9Rvr2mu%2B1Bror25iT99ZMpEcEG&X-Amz-Signature=ba89ee0fa21f3799bdb2bc359279ac5aed8d5a89b0c2216e7c640cd64c23feab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

