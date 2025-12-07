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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GBOXMAY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIBK7GY353rMMAuBIs17j82T%2F56QTqn%2FR3tOrbA%2FhZ%2B3vAh9%2BSQVW3F5vH%2FlRlFCfQpDw2BBBC0iTu3%2B%2FzvlEK3qWKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzM97ff%2BRIDquUmaM0q3AMCYCdxlLVFs3hdve2qRJrX77K19NHtHLDLWuI9kPBJRF9PW8lTLemq17mhd1Kh%2Fqzu2u3INsEx5wByizg2c0xx4fTiHmo4EFB%2BlfrzPbXmmIeZuke2xK8PiKkSC%2Bk4nrb33rdMlpB%2FBsnJrY6%2BvswdVJT03Bh%2FfDYg%2BCvHOBUpbuhPdSPWchw5nqr4c5iO4Ktp8dni9VoSy9%2BtNlLQ8NDgvubxZ5vwKfE8SpFLBEhDNqjc6qKi2SSeUsNRrtZSgtSPVmf9oAGdHEd70eAH7LOu81foX0JlOOHLzBu3jYo%2FsUaxcyAf9QjCs%2FbgGVYMJKsM9Cel06B%2FcKB7r9ZMrSH1VQ0HKxn5TSZEQJ0EcUSjstP8Hk5rIdJzy9Nu0K%2F0yZLHDlCscxDHCrnvrNJG%2B9xdu0hn8jgvYd092CURQBSQQ6NF%2FNpBml%2FIJb4YzQbFea8dWTtcnk%2FUcs9lAGgAM1BV01pWrBnTEr2rjqwx6RIRUTrkB2MitWISoe33gOdi2wHXa%2FEC2iOo6lVOkPMwJygsKUdZW1VgoPJs8qZIb0Mv6ELoCzW9%2Fgsl3dxSam8nJVdfs47tykWYOigfa0hm4CrX5t4m5lRYLwHQVP7XA2STxT84wfRdqDuLaNwjCDCv%2FtLJBjqnAan1mJho7xgCotZBYcSDYSnA0wz4AA5t1TeFPpNDyjFD3URDAT4B2WEGw%2B%2BXDj5M0NyR9BGNXC9Pbmk37p1UtdrELyLugzDTYcJrueLSIf9llw0EiBOC%2BQkAFTL%2B3yIcKi6lA7Xgz7rT1AUEw5PML7QLsVWPqacKWpNeUdTUK7gOVnf3ky%2FEA%2BiyNqG72jOgPo2mGMR0MsshaGFXQBlbYbjwEN3V%2BvnR&X-Amz-Signature=176b746e14a2b526bc984bca134d2ecb56e05e58df362e432ad6f7f88cc11b13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

