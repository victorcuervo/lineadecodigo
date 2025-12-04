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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NSHIZWX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCuUk8KiN8t5lp7%2FzlSPN6apJGZlpIGhiselXIOYZO8yAIhAMtsLNr899M0X03a0o6VNMICYVFU2WSYC94%2FCwrIW6DAKv8DCEAQABoMNjM3NDIzMTgzODA1IgwzR9uUzy5H%2BNKFLbAq3AOv%2F9WKA7pJFfXVTlbNok644tYupAPe9%2FmDDbEpNSVGiPueJDSbU93%2FDLYnU85Wt%2FiM5Sv3yz7eQ%2FRjKImTyA1FsQ3CHW%2FEDjVhVbj9zuGugZP6LfkfIwmiv2N%2BjVdNV1xhgXXebHmege%2BoUonaQ2v3eVvB%2FXhyQzPIYCK6orrLw3ZgSJamVHfudDMo7i8EDFu4Q0ugHPYA4ux66N12LD2m4TMtu%2FwnTa0N2pB%2BZmA3x0FpDBZVeoIX3ArGep%2ByZ7swzP0lA6aA0lWCBrHQuhgGjVkyha2O%2BbMeEfCxC%2B7HaZ84Xm%2F%2BLkOQQUucEgIYuuT4K%2FT4mt3QH1oVDGouDTJuFOT2A2JdoHdOVKrtrVCgGPi52hPKkVPrYS1uXcX9J4DlNDT1QNjdBDxvZApou2EAKBQ2fXU9NIAus2%2BUkNmwr8v0Mnx4VUu5keVvua%2BrBj%2FbAha8jhUUgZwnrNoSAIV9ZK2du8SSpPsCeHfhyR%2FhKlVIh0VlA7dZmNEuPrSeGhWjpAWzQNCEocKIy0Bkl834WgUvn8q47cezuHgI6zqhK2yJdVW8%2FgeoB5EmvHYGmaIs7M3v8xv%2FKQpZDnCHwLexsC7CrLs8RKtXjy5SSYVMJH5UfLFusQbinNaUPDDD6MTJBjqkAXoLFk7WaG1hFtJutoRLfVO%2Bg0gnHQeLy5ycqsp7N%2FJQhIFW6CswnMtMe3erQYqWDMUTutnIbOzAL7ozmZnTpflqamcuflerfZDpgRmgSeqKOFF%2FrAyTRxMqPYNJuQGgKKxsummc%2F3%2FaQ7m8TAs%2BJjO%2FMS%2B0qc21YOVuw%2FUobu6zqSw7sPpij4u%2Bs%2Bffs5n9NaPjsmCelbpfOdT%2FU0n8kYnnO6tg&X-Amz-Signature=c2e29d8a40ac286ad48988dd458feec1c535710c03839946c07b3f1017736520&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

