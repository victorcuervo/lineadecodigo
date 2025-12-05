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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNM4YZKU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T104325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG34gWiedvB99Td%2FNZNwKyoymwt6BoxEE6CNgjT%2BGu8dAiEA4vOnzMFE6U%2BBpGht4jr%2F7yUNyZKZtfOlTBS%2BAJPs87Qq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNPAEXx%2BZ5F03AzfoCrcA%2BswGL8jMpFr3IORGUMEZQNcMxiWZinVttf0reJDZvKnqJtAtdmVaYO9D2uamRkdRJ4LHegG84lYI%2Bgp%2Fray%2B%2FIGyNs34vMTtl4nedXuJopHBoFgKHdFcSoPDsQU61vGsVVGKzxRY9ruiZ0EXPwBsrxXqZcKdNe1s66LkZG9XM747bVyaDVUu0AWwetvBRdD9hOyAKoeCyLD0aqqpbAoOLRf%2FqTyiyfXK1iyC1Cnjq8A5EaLDc551g9EY6Ha%2BX56OCC7hlScXxDapgI0v7gWK8Y87byEAR5YVVsjO1B0Lm%2F7ZorHpZqUIoT3lScZDrIx41IJ80ydOPtnoZGgUF60LEsmYbGSEarTQE2K8m6rPwSLmHHpnGzFNJ4F4udiE%2FNCt27xm4BzYDltY6T1PDm3Ma7zHYItwkWuPb9lQHShgnGCnvnjvCtF2EuNnQzQsdpHQMKYgz0s1ataOT1S%2F0nd5nArG9glnKOt6xG%2FgUadd4pVIrSWF9lvKwmjIfj1E7XWONM8Y2dGHYlvObg3xPjHw0zlwTN2VdY7EpcSnVOKHsxrQ8mVI9l0vqV7mAStz%2BTUi%2FncgkIuj1h4OFZrThimUu5GML%2FvO2W3uezbd0bGcrDkBDklLH3zGvzgehsfML%2BmyskGOqUB8V9MLHkyuKXbxRnk1b5TXUSHBChuIctGxdGPSonB9hggx%2FcovYX2SPF%2B5w8fguhunBw1X8VaeyXUyPVWxHnRRNoebJKfq7m2w90i1DnODVl8le6iLyj3u0nMI7rxX%2F7ieb1IPXgOtkOjY%2BobDKCyiyAXrpps6fiSGbzJmkvgPLtS1PyZn0Ud2UlBYRc1puaH8JRixh5j%2BLdGCX%2Bjz%2FxmCHdrA7Bm&X-Amz-Signature=5b843189cd9a8f6dac6bba58164c79e8f2c26c259de496ea1a6178c8ab45f205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

