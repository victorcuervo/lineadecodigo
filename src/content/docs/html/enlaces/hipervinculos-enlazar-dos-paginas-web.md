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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TWMBZUR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T225545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtPdbQWLcHz6eanOvtEG2jRpObM%2FWF6OYVlf%2BHHhhlFAiEAisJH6qCBL1fi8Cnv4jHJtjc1Lt%2B9omjGsOxPrm5rMtkq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDJXvjWU576DWnleo7SrcA1CcwifvRa3RhtNIrLRMebm%2FF0D%2BGAV5DrcZrAeqFshlNrJH1hROSGP8tLiuvMzGnVpl04adH97b0eKor5Jmu4IBB%2BWq6v4sng5vhFH%2BdHDMNAighvCN3Q%2B3cMcVertu5PoTqo2yQjLRJnJdLeGg3759ovxNPMHREvDlQCjEJcFb%2B8HsAQc4GEuQwc56msVJ%2FYxEjGxakvs75pDeBRs7jS2QIp2qxDRcVzTVAdQuJywsL9o5qONRE9CoQwXyE49V0dopQc8DXaphMRqFA6Rk2pu%2BSRDj1aXcC%2FVj9xsmbtV0kN0%2BLhxpCQ0jT02m3WujhhP98d7%2FgTFUru8wMABYMzUU6n%2B8Mb2KZdZs4eK7dWC9H24r%2BsBA1OflIKlL7xKrHfvTKm93wtxaQg9lGx9cfEMqYYZJEScf%2Ba3dPzbaUPAqTulG9MGzlm981G8ISGiKbJLlyX7cjG%2BvyYjGc4sOo%2B4G3a6Umrk7Y2eECx3thbNIz4NvJQmNzuvUxsycbB0OtkG0aN8TuOM9PewPvgWoX2lxyUHV3nld50CKh9pG7Cx87Yat3B14f2Fj%2FFjpDOT8vVGqxLVTM7Pdan7d3WKuCpPFlwlCjyztxbiNmz44XnecDn9A7dPnxBny%2FRoKMJKhzckGOqUBE1RFwu5MuKAa56gi3M0y7D27xHKHCY2ilFX0nvLqvEAcegRIWhzJFBzSDAOxV5OLRiE3HU7ZiKLF61RjKDNvycZNn2GRZ9REwaBXM40c4XXug2WBvukcBYDYle0USs7dWYuT3tSdhrZxH%2Fd2x0tCRvWdL6inhT3NSFiJgQRYotIdbfUvbBVbYgxH%2FuZhfNYe4tjs4jz%2BS%2BtNLTDnVrblMlLnQoE7&X-Amz-Signature=fe3201ddd78e4d8e1681d82a31a031c1c4c619bffe761154819d7eb2b9300f73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

