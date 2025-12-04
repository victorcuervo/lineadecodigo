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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOGL64CZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQC%2FRuHHs6s%2FEyQZMGhTd68PIwqAXjHNxl5%2FTB5oSKSgSgIhAPMC5g9NqTdGuzXJ7fTKpp4L70khaYt4V5xLbWLqpZHxKv8DCD4QABoMNjM3NDIzMTgzODA1IgwMg3fX0HOdau534iYq3ANYEFCfcsWzXyVhtOCaHGRP06ZLenULzxuPQwrMKvjBufZR%2F4HDF74OGplLqKFodOyN8H06CsNqcTg%2BTjzyCfeIlaNQg6HVRsJfHJ%2BtpSo8Cwv1FDgrIz0QXj9TGimc5wpEwbNfCskULYBv5Rw6J3V8V0KMIiZLhtjZbxhODlZKOMg1ZkvYZDH1eHcI732ImKfETwxnYJro0vrUJ5STBACe5165EPJxBRRGheBoIr%2BG%2B61qwPCpeGL%2FIvFESJxvub2bo5QBFBsX8HsNSb7GEksoUYLVeRG0oYtE17c0fo642SKmNcsRAOwX3jbeU0lyUUkgA6Lfno%2FL00Fd4n506eEwuyZai2mV9NXa0iN115oCk8TWW6GV0ZTBaClwIUdEWBBpDcRMIFZBgLyaR1IthBRPIQZNuZn8KwsX5NhKxjF4bJeaHbB6bba5RID53y9ANdCoa0igeF%2BGOgLbdUknrxUNZJ5bwizpO5QsQwe3mdpu3wggSkFG5MYvmpTODyCO%2Fg1qiToZY6jZBHlOAcrS1K4UWRodgirRHsnLNJvx8wzXeMCnlwF0qYsCaBSCpFCUW2CIJYMrYXuVf%2Fb8bvbcc4V%2B4GAeRxtn3zRW0jD047RCsCmnhz%2BWEkzcML3KXTDZrsTJBjqkASPXvl1Y6XNJ2mhWjNOWpfcdCgQ0guV06O5DjiLUiAzOm4LNpeK9ft5Bz%2FMJKiUwn842p2HE5%2BKK6q2Rmxa%2B74oXuJ8RZjcGFzDc8WEdlajzaxGCJ0gAOrA86KZoDjQz%2BaUTGf%2BBfmJID2EDTUID5EuO0KEVmXdwFCEB3lNYv0Gg5phegVCx5KfzTPfbOV%2B4vMx%2FwDu71z4vN244%2Fm%2F1S%2Bz%2BMfGv&X-Amz-Signature=1382812a06ef78a416b38355e4cff03e2a4a0d37ae66aaba816752e7928da4d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

