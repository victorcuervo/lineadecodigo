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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FSCYTYU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBsgSKyvK4cdiAEONQ%2BM%2B%2FGLz3wUBaBvArMddAaB9GszAiEA92xZsw675kdJr2crelZ7%2BEpdmXZJia8edPr5vNdwtV4q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDF8VPQMgf7FFSqZFMircA0KbATcRJ9Rl2xaPRLkvFjt5JfOittvOFDpBw3zR2bVzlK4MLRLEu%2B2f7pjKLBzolvdaCjYolfm5pxmvs0Rij79fQ7ZvjFtySi1wyqESJogr0sflQe%2FcZq%2FkYVMWsKb1iyYx6iixQsTN%2F3iELeacxqiDngKPKc9zD6B%2BgGkTbRdjJK85MXRokGbLwrns%2BZ1coI7MRrytdksVPmetiTla7eSPM55ierBeA9TL%2FfEefiqOazxlSJMHGfMO8s1psF1extbiTnTPZIEztBNMUNUe8PxEMTyRtydT9rmtQB9eUwGjayNy6W7phesHIR4Y6RYERVXw2QgCK1kHqfNThi7Txadwu7A30AKsHWogzYqitrEsg2zCq0edp%2B2W297UUTxRdnOW7cCL5vMMk1WKwZhDFvQmpGDHLqWwTmI8%2FWT9GbJb0q6oM%2FpfvxdxTcr6pkAY54EscKrvGbWfQ35UOqIQcpufsYMtdVkBLuER5VC6veDGI4HoHlt4Ed0Inv84%2FaVnBe%2FAN0IuLY2StHTDGcMU%2FK6H2ZanG%2BlAHjfD837p%2FuyQTY3tzVm5RazqMXzcmY%2FmS3JezX%2F6ulcojndVtLCUPQ8ns%2B%2F0u88Igsri23Bn7XtSC96gW20TOKxadL0WMKLcxskGOqUB4YGlhUgy6mUaPsNEMRoGa54PoHy4ZNJYZKUrA%2BfT8sUcupQhFXSV%2BN3AZhmL0sFP8Kl2OLKkBGFvSCUV5T70%2FdEfkP6W43mJiJNgpWFPJUlPb2hgwqT1apPujt8x6cVw03cQ9TbqG%2FE4qSleb20GCO3wyicEcN37Iwbt%2Fy9KpsTZ0h%2BMNdLIp8DKb33CSLjBu3qlwUFjKG5tSl8J%2B%2BXAzcAT6fXq&X-Amz-Signature=51dead7ea930845f68b4d0b231a22cf935ce9f29638cc7b0fd3b6387629e5cb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

