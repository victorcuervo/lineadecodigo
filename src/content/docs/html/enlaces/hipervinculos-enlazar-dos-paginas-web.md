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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667476GIWV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T094724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDoCJ7%2BKm1iRy%2F1b3n1ym8laoKnX%2FiGEShKHoMtG5tdQQIgasxT1Z9iGJSNF3%2F1WQRNDdhoPobWu5kD1n4tRfY4CoEq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDLOj4zyB%2BkC7keVmfCrcAyjldR90PN%2F3rzz4mwWeYxUFlYMd9Z28Db7TxyW24zTvh7mtSsRoavXt3ityK3Gs2FXpPqsQ56jo6S1FEFjKFD%2FkR2zWX4%2BzZnWuYlR3Uuns1TABNMA0rZRMfGa5e76ClyGx51Hf3OR4G3Sn19XS7XKYeDNYe6Ij9Ol7Nx0qa7rch5u0IxCuEeJ1r6cwsCZkbu8PpXctlUfXSvrb5wng0h3WORnlNrjFpNhR5tihHFmZ035layxgKxcccfgDoyWSzF9BZxOJyZQtLt085SN%2FJQ8SO0SU57Ucbx8hB2CAqrHaQzsivcCFM6BZNdA%2FuzanS5%2BLaD6hQRqwOpOJ9KylplFkJAW2qkIu5NAEv3%2BFLNtyFUiTxfZ2oUjO6SgkEQU4hPLGDE66LARfSt1PCOeHkVt5uK6HK%2Fy5AAn3rxIo7gn33x81L4XjKtfLr37HDzOA41Mo%2B6%2BR0wBAlsLVnYQuDP9xafMLX9MgOuIa4nU1vVv%2FzCYr9LRf0mEZdipFb4fFHWLhSvtY%2FArX0iilBWEPbcvVpvZiotx25HYLsV14N1b4dB4f%2B7VhTMVENYJT7%2FvZnQRYjakhwXOUPeP3Kd5S14Ir%2Bxf55k%2B%2FjHUpKoQn7IRFaHEycOc2TpBXUglUMMuqxckGOqUBfYyTs2NvO2btYXbDlCveqPwCoozUffe%2BJ7O%2FX2Ls5nISN%2FHGSHZIO%2Fb7j0T5fd2fTr6MUV4EFv8R8QdNQK9x49V9ooWOURlm4WKAavqbTxiG4EIsta1y5vdCqqn9Go%2FXO6WaSnmm%2FsIJV0D9tRWOZNQgy5VO3F6%2FdtNvPO8r%2Bsfwe2Svze%2B1JjnQ6%2FF%2BWjZ6skGRvt68n07c8KalNfS2aViGYc%2Bx&X-Amz-Signature=0d29310daa1743906301371b490b400981a0804423319675d1990754ed068056&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

