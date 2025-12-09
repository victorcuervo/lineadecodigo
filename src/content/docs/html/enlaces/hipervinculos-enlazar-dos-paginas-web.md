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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN44TRZU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T191815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZlgy1uhtghnaDkB1%2B5mYeoxNTU9bS7XLINmTdJpy%2BYAiEA5KZn0EFLeNKdqD9Kh9zM0Ixboz%2F8YybAA6LLV99BzfwqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGT%2Bk1lriGtyLP7alCrcAzRGRBREpgrBgiT%2BlSWwRFHE9ztWlcJE6QvZpppV0r%2FNy5qUaWAqAsOeYJP7bakEaoaGqJkP%2FKq%2B6MzPhm45LJ93Wtmj%2FySZeeuOJRlSdTHBJcuoPR1IO8yCC3glSO1Ds40kcLBsvt%2FkFzeDN%2FQyy%2FMFPI2QZ%2FAvPdNyuclQx4FePz33gBEo2pMD%2BFYWjwsA70BSTcHcUsqB6KECNXlYvW25vh8FblNe%2B3e59pKbWjbiKOUW6eKB933PhGzABE%2B2%2FdCAW8ckXQHoylc44QQyx%2BS%2BQRPhODqnIj5cclWhAH0TAIJJ1mjFKdQe2B8rdmeNT78BUAUFr42kYSAk%2F25MrLoKjO%2FnciFQXxewwAgx3h0TdZMwJ6l24vJOSqnuWu2ZR2AMwPAa9cYrJSv79RHgky6Lk9mMpPNljOG5tD6TvU1R%2BaxiLHyXjBKtUAdTETaU39O1kD5d3bB3g%2F4m31Ebjl62SE0K2hkY3gl5WaAfg8TqOhyESZMPejc4PIi1eUOtnd2loJbXOjkR0quD019niEZGkzcJgjS0FOgDVZwVIW95IbrERCRhQ%2B4NaezXRg0t9MJqF6UTuebglmsvMhlKcVWPgpqVzjxvKuFLSXxS5Yb5o64N3H9vLOygsY8CMPne4ckGOqUBnWmQVifhUBTy%2Bqx%2FEQSl3p%2FmEOISpgggif8WtNv55KJEkV8bLDDdMresYtXvc9bd%2B2AFvFn0C1SlAHYr1WeQNVbl5%2F5HCM0YHyQQr55KX2U7At2JQipuRiTNVebu6lEQSiGjDJSX1ktbu8p7g1ZBfzZcBN%2BJ%2Bi0BxwLPSNOgHN4%2BFs08owtllPZ1Iajso%2F0hlsitDrAmy27Wzr4UQmnBm1WPNfW8&X-Amz-Signature=100ca444533f7fef345bd4c86b41bdbe8d1087d0ebda57bb0243ee28510e60e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

