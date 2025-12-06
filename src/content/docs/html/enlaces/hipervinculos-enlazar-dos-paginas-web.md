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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CYLRRGN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T151552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKqS9n5bJbYAc0ncfiH1wSLEk334%2Flgzxes%2B%2FnlX%2FMuAiEA9rDv2vh%2BG8Wzm0asVS5orrm%2BAVKlOeQpWJjaauUiRnYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPZIJFCZSOSFtIn2oCrcAzFh1kjpan7cHbY%2BHJhgDidDHtYrJr8GG1O2NdrfpAWhJXjRA3GHt001I6mfYIsx%2B2hwPR58UPJtjpsF0XMTUihEgGzs%2Bef%2F0SBrgNyBxtmYE3MjSD%2BdkGXSlgBp4RU%2BXGTJ%2Bf3JsbMtgNrn%2FjlxHczk3FEqZlxurKkebxvQK9%2FXCIhDqgSW4rhKeC2ros9kojTu5Pf7IeVcAYwA3OkZXjE0VVLyhPLD4HHwg7n%2B%2FMh0LV0rJ48Om9rrvIXqZW5L1Uj3cLzQTEBZkmWgbADjpPd97sz09RPJJ%2BABUxrmsJecKum6EYmyonvKNtE09FbFbVGmkdcx0PTTJ%2BtG6qzIF4MDk71ftQZyAfu8uV2RDCQ8%2Fdk411QGxvIXBqnf6yAEiUEvDMhAwFOEcbdYntSQz1SNfqgW4G38%2F0a4v73zQS%2ByXXTa1XoyyVTYNcz4h8b3yUMEsdawrQBdWNWv2WUEvj4CRRFzwOWsHYecFjb9DniaqTG%2BWGHH7SzaBgPaPa%2BoGKombKzPatDHb2Fp89m6U4jMcnpoJjBtt3rSJ296kSCR%2FG8U27dU5pRYwFUGXpTayHDjAeXCv0LU9XaLjkzIPPrjEm3edxHJNsCLsL1YSsW3MljvQyz7R5pBzk8OMO2m0MkGOqUBdVHZTHuxEZ08Z1522aWUfjsOTQVE%2FdYgd4ZHcTxcFrBRSBK9fBMxXdqyeWiLajai6zTcBEzAKye7WQWrJn0j7OMnKpi%2F4QyAeCtrB7c8Y4bsql5Hk6Lr9hJaidy4R8H235SFXOsTC%2Fk0Uxe5zKTeMuSMpq2XPi8UebwQrnPV5rpBnz7EEuqGrMwmemO2O0pEagH16i%2Fi2uXCa3j8U7axIDcpl5Kb&X-Amz-Signature=53c1c72c93828e7051250e9bcfbe9dbdd70e455960bebf3d32b915a9ba0b2284&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

