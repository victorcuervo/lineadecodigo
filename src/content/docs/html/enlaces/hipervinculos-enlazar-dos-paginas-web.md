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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627W6W6E6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T230014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCY3LO7%2F39uAtM%2FXNzjnlgNn%2BYlQw0jaSWg2Ze9QoW%2BmgIhAOSXitMRVOBGMmkfea8EXabtYfr137BR9j5ERrQuAfswKv8DCH8QABoMNjM3NDIzMTgzODA1Igzt4A4FCfpGc9DxdUYq3AMur5hkxGawYhuXv5xAQQNCcEQGOIIKgdNegZy9%2FqS0jQog%2FPetW2AasywF0vZY3Zc4wQ0SdEfel%2BZIppwBQtzNEPtlva3YPcSDjU6wCmten%2Bof7L3Fj5cB5p%2BO0GIHGRIoRrmYh%2BO%2BPCjXUZvXPMR0JL9CwGy7fk%2Be%2FYiVn0XN0A49RUXktclieN7QPwHgge7prLjIisZwdIymH22A3CDBGxkk9hVdQN39qHKP7oIgkuhIxXzL7Qrq9PDBVE5P4SMCd79IaMYDYW9q40JQKqsB0ouaABa%2BYhbZ3%2FoY0mUDSzeGrSG67oH8ZyD%2BzMgixir56eMsINbPAuF46b0SA7EhDpEXTKNGq354gqnj05xZGQiZeQMdHLfwvY8ih%2B0O7xbV3Vb9Dt7C7T1tWyZ4%2FZwp%2FfSSXxWETGXIvK0zn2DxD9Tzv3SmpHLJiQZWRPD0IF1hAewzxPcPhKezTEHDlQir942sVjhv2M5nOwPjSHgUdtpT5%2BiMkpbtJJ8r8%2BeeWCHTInzoxhdOYnhahvVbykOiJmkKY0wyYtulWHHeuzK0Sm2oug4YJkJKNrAGHnqZfhK4vtvNZTYSAZSuvTlQo7TbqCbgTEEh%2FfM4ON5ER2pNjVp%2Bn6d2zN1gUtqIuzDx09LJBjqkAR04S9dGLbpe5P2zrJx69C5611F6vxkgYMTMVMPSRRvwvCPYFlp3GaS6YItO8Ol6F%2FwMjqsXoVAhMHPl%2FLOA6pVCgvdbR4Gi%2BcOS05k99PWcRIuZcMK2CY9aMKDXOTUr5ITKyOLSLqYmVYcDKsb7xieo2TuNBaVGRpbOCoQQOq%2FtmRSeUX1kbB9autJEvQC9mfbUTC%2B%2BJWn6sfvi43rWPCC1TSw%2F&X-Amz-Signature=41767f0cd4caf5e9f0ac09416a452ef46b7585bf787f1c4cad3111d406e242bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

