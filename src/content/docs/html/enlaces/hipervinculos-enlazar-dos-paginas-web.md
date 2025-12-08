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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X62R4NC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T121904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Bf7JA0Jaz0alTFTi7rdEZbwNLLqrEaWe3BiONZiboTAIhANgkYwi7ZEAet4KK9uEwbD%2FdvIIOmBOkPkJPog3ZRRtcKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbPRpQPZQJyx6YJo8q3ANwAlt1MNrRi36slUcxLSZg6UM%2F7PJyw63DhPQyWr4M4ZRQr57zmQbLNxmCEeODq0ee0w1hQu09YbDD9uyQYL8PlmlY6IOjzx69t%2FQ7duR6t%2BD6J1biNBi1FuLA%2BSxYfXNHi9SCsdFOSqaPojksv6IdYsKabTyNExZynYnL3Wz04wrJG8cEc4Zbakd6uM15nrjX%2BNIxBD0gWPcLMZ5RXa52HXcBGqX%2BEHkNZOTlOeFHn5qTyYSGBKsqdkyfCZvnPWLrb%2FF10R9FovzTERQ%2FXkRwwdPeccfKoW69JMOAx6Vl5bwuSh8S5QJD0NEvf%2FE%2BtyItrdO9nTuh%2BTq%2BhJC8TPuaDfLQ5uVFuxdRVMHGiYBwKtsWVweJUO7zkHqt2AGD6JmN%2B9E0c9ZzhkPctmm%2BNZiOMjDngnGMuS3MAUTZkWrsnmAfirJ5WVL2Va%2BLsq579d53E0GADbwfWSqsSlWuYHrCDvnYKk6gYdk0ouaQ5fxoq4usxDi3tct5GadRg%2Bpm%2BEZmnzu0eoB4jdZABqnICYf9xJBkdT3nwnKuaXv70STAPLY9ryLfevfZo7L7OFKPHzNU65L%2FshglFWOKi7SuBbMytY9tNH%2B78STNu0cmGdnjIQzvn5NKGmObH%2B%2BMwTD79NrJBjqkAckudRissG00cdM8bURmB6EZPg5ct2CIV%2FCSnZHDjGKHdQ5RqokrSYKeJ04E5xhc4%2FqLdY%2B7PgGIExgaXoBDkLll8umgKwOXg%2FFATBvS%2FGlx2na0WI0EyMKHK59HnwzkWHVDPrwhMDqFM8wrNdb1nrsyAHwHeHRQzi8kQXLaeVamEfLl0MyXLU1gFqQwLDtOWqMLoKffsSHsaEYDYilZFgCDBrUT&X-Amz-Signature=cf78c74c830b00e275bab11134e2d30a28152cb61c0c843888deee58ef913f79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

