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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7SHUDQK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T211025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAeKlHcZmrmBWS%2FbM2ATmeIgU6NhO%2F%2BdZ1qHyo7W2yhbAiEA0iUszst6V%2F75Lt%2B0FqDJihUD1%2F39iCgarwAVBnVlAzsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPIX5y8h6FOVUhf%2BiCrcA1DEPXAMTzMOE%2BiHJMaWI42SCtsQ8mzc%2FKllggNZFrjKnykb1WQH3%2BLv9F7iKyEV%2FBnnROy%2B746nkVPcJ7Z%2BQfzlHrKIShG%2F7MYL44xWTBlliBpsAmjmy%2FX8V8ihYZbP63lDTSt3xvR5dhN3eV3q2rz7UGASp6ozdFcfozNwUQR2KCv%2FpzwoEKsjUI9kGOiIylIHwvBHmIVNu%2BHAoSB08dWccd%2FDDyLY4KRxduHjdkDKCLH%2FEx%2FLubM2HEGpSwZs1p1ja40oRja0KIzcOkGN6fuRDsjQbO2ad7zEIR1wQ97cTmZvxDNWFiBm3ceGNEpbIh0PlaBs5rG%2BVZ9aoHbxy3yCKxrGNuepREXOnnGZ5BB3hSnIHwYQoBlbeNC1dAzIgToKpH1EuR3pGmaWcyt%2B1yJ9oQO5tLt%2FZhSX%2Fe4ObI6z9s7jD7taI02fHlkGu5Vc7Y5MMsk%2FKfH5zPjGP5mqxhd%2BzLAPVQoJV1ue0Dh%2Br8cq3kOitDsyl3cjh4%2BFV8EqyypowBqGsSRKIjfDYH81DihDasqbAsZh%2Bi%2FRkdBocRFsoBfC75qCiEmJ9tV3Ro%2FrF6Le94b3hnideN76SUI0y3ShOdfnpJgllpNHBNeo2w1HVWW2srZqTpnBV3N3MI7H0ckGOqUBNq%2FI09PIXJuUwaf8oDiT0szaS21xhWMxh6BHRmZAj4CkoXVeoQN1W5UWD1meFpeDEA%2F32zz2MCwxigXmm0pZyWN%2BwdGta%2Bzok8a6HMjicOiqSoYt9wOn9r8l3t%2FS31peLoliS64DFRGhRd%2FKZzeWZi3l%2F0g11tcd%2FYwBr8TgsfwoA7o55aYpsITD4hPGV0TWAXwaMxw1sbny3MOQEKdacIq4AALR&X-Amz-Signature=71116102cd89d3d84dc2b224dc52a282c6bca527b8701a8739115563fabf198c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

