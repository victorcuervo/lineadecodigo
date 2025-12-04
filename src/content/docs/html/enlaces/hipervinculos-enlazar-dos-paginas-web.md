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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCFETDYH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIBhXODVR6ATYC8SNpXqq4%2FAxBp1yaJUZielgMGCrrta0AiEAsb32bDDyUZoFwYx0C17FP8ZQ%2Fclc2Hz2n7YgX23spZ8q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDDB2WdMFO6saqMsawCrcA3il%2BZpRd%2Fk4Lp%2BfuiSpDWGB7%2BGy0yDHEQD8HYHPNngh%2FH33zN6ZAluMxPhkxnGVfhIbrLGuuMXDfrKIFQCcRHxSNImOlUxesT5L%2FOssFpP4rcedC9HAnIw7btW5rvntLdkueENLg9imm4frWOfLba0ytq7iSKyEB%2F%2Fvtn9kW4rQEVy18Ch2C2FOdtA6YGrV2pU3iMdGvLtk04Ga6SAtQ34eZFFk92VSPrA5GGz6CM7ACuuix30Qm5GZjiFGQHs7xCQq1CFtxbgmcTBpi%2Bog%2FvHfb1FoBwPBRWTEQppBBYFmz%2FJHGILb15eCgwZWoIcXsJxCdzbDuVONbEkYh3KqtRUtDIpDhMBAtquBfDS6x06VPRNpxM20HZ6DT0Hk0goY18fXeos%2BK7rUBnfFqISlSxHLxiX1MpNtNYP8HzqhDlgIiBpMlvG2cPzTVDMq3p1g5Xfn3mtJqJLywUFo3mMUa48OQppm6Sy46JdT4QumP746%2FszChrX4L31N7mPn4WUeNGeCG48cawIgAeglvAdmztYvu2%2B%2BXYTE2JXqZJ7dAgmGFe7ZIPTVRht77040E%2BvNwZx5nWJASezeQ4TLWG2AlLEWtkYyE6eoKifgXBNcobaeQr0bgYmc0FVN5qUnMJW0w8kGOqUBfxNbMw4vtpyIiw4e8vr1vsmbtYtwc5Rvcx3eqgmkz1QieFSpRFjUup22az0hk5ynU167NOxvZ4LkHzs8t0Te3%2FbuaaUOMtdpGXXpzcFMU0mNocJKc4MH%2FrjCO9dBdtMSFEf4pLgEFDhg8AHBt%2F7pPptDKHL0l0nCYPRp81V7w7e%2BoJ4I6GM8E1AKN0Ih2d9rvH%2BirYKR3wF1CuBoruBLPP9LVnp9&X-Amz-Signature=fb5343f91ffdf21719a5137d31fd8eb3c99863ff74717a9c0d97938e7f122cb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

