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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM5R3O2Q%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T225344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHu3R1ySmfIH0meC6EcBPUkXNhgAEjKvm44ACkcFgnefAiEApksuoPBn0nCvu2NGIlNxA3cs%2FTnnLoZS859bQr%2Bnnlsq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDNrQI3O1NyRJsnD1BSrcAzjNR4im9dYmdgz71Hi1TLLevA3L6t0q%2FJGOn7IwdkKf%2Bav7x8zLq1802Q2h3kDLr1U1a2StakJ8QRaP6k9jI4LmbH4%2FNW5bKR1cTBm5Ct241Of%2F85Wt9rpwuTezKU8y6J17h0xPA1lqnA88I4if%2B595%2F%2Fp%2FVBHmkhZs8HZEjBdDoAQj%2BZDWhhwYVwyeBKHnSlkj0SOC4P1Z7Wb5JSBlrighX8y3mrDLuCXNKm9WHdj2IEaZ5h8312UxeOfcQWnN909X10h87u5keTrYrNTX1wH1qX6%2BgQHHAIY9CDXyqa2QXLuuuu0RpnVniZyGyK5Ga0lgTmY9cwojPzdygAxJrhiqrjLFsabeUvXCv%2FPsjYdA6MrQgtESK1k0NjG1sfmzBTfosXtA2xEofkdAcFc9wUtZZj%2Ffrt5q4S6hRo2axF7r0jiS6%2B5S3EMgnYhevhI4KtzxUBuAmOqY%2Bm0%2B6D0eLoVLuPNPLJSPSuHebXwRHtZryGOUz%2BCh80ZUO%2BCaadUHu9YrNYcU79lOUV65F4GWBaV%2F1ofb8EYIS7h4BB%2BM8N8cvVZH%2BgThwuLfTpMt%2F4U08pfWeXHCFp28BPBgE22oaPah%2FFgoxDOPKlIhLETvTvx0ZDLgm0LmegS3rIf0MM%2FT0skGOqUBRHtlfebsLw2ASJsUoDS6RWD%2BDZd52uW%2Bn2Cq7F4QXMjc35RN5WlWx6Jjt1%2BuDsbJlcRwf1DYK7fWLkeSJMBZDy%2BA1fypPLSARvQZW7YfrYaCtjxvEEeiA3R7TUlKih229a4PgF4tAHnFJLPHq9EamVrAmj2HDtQuFmM3%2B2nqb%2FvU3VAGDhdF4KNi3hlj6GCRI9ZV1UY5OxV79AuxH61c0VKydCKJ&X-Amz-Signature=72fd0fcffa180ca13e9aebc7bd9f4193624ddda32f1a59d89ce282ebd1042cf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

