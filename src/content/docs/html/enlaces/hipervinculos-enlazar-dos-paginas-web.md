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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633DQ4ME5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD8a%2FKdYUvu4U%2FgfqnI5F0rEHzcXAu4XmlklGwzUOgu3gIhANgz2xLTpnTkazXjS3anXMPnhi3IAHrA%2BrsQx3Y3sv5sKv8DCDsQABoMNjM3NDIzMTgzODA1IgwPpr%2BLPNVTfdFyPVwq3AOaePPQ1bLVzUnl6dSgrwzZZOsMzPI%2FKOCAYsALWMFVrkoJ3%2BHwfKMh%2FLTIVZ4EgOtkVZO5v6fgLF5JKUV5j0CslvqzI6G1iB7dclX7%2FA5V3Ywm2MX9gvCcXS80ZtnnKPj7zbqeauSTYda8PZL5jwbZRQHI4aAioSPHA0CLF9NQxDgWpk4foKT4TklE6ujt0Tc%2BcA7zPVMzsV1Ra61ojqUBRD%2FdNVodmNlDlA5LMMHcaMuyLNgFzDlMsNZmOyxyb5cOonpmP%2FbpaYutHn%2Fwr%2B1cbjlD2uTzNy4Ha5uSeekt0BCFsKRsc7joxCb8UCWfkVUB2LbeTwePxO713F9vU6UL3TvM7PU%2FD255mm2D1dx6tBrouIUtvxmFqFjf8wp6%2BRDmkid6oxppx%2BI7lnLu2fHZA1pEY5apjmiI%2BcEBaV0fHQRDFh2wuN3xn%2BHtcz%2BN2WHCaNeYNpjik7kCHE%2FgJZHjQlZ60vInHDX3tr08xx5tnMGGPy9S4X1V6WqTHMy07nWH2qI1zv9IfvZpHeudJMgT5%2F4uhi3gf07lpeiwQgS1K14wEzM%2BxK0I93ggAtiRtr7Bh%2FPxAe30cs%2BWhNcIJIdOlDXBp%2FV%2FjIY1nQs0oxvM57omiEnVAkMLXFekhjDF1cPJBjqkAWQ0gbTPMDlgvbQKoRyBhVYOW7CO6K0UKzG2aH2wPsyMz6nVHovkVwuQsmqxPBS%2BGW0d4HRy14SFJZ0KeYyTlalyJjnd2ouijzLcPpKezoM13xFXpkRr%2B3qkVrsJGysChvP9gnVU1U6vOmLagNQHP5RkXPnx1vxX6u6GohwKmPL00FKqERqjDZmsCYQCQCJaUR%2BCNShig4OTjiaalEAD%2B01671FM&X-Amz-Signature=d546e63c3ca01c35da9453c3e9a69946181c6f63dd5426e5313dfaee35f546f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

