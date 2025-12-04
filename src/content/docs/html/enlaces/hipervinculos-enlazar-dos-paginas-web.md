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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NUBXZB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIAFnR78PtehSd67SYefyv9e2N2bvQrfSLKvXjHz%2Fg5szAiEAnL85sn8WohE5Ln4gb5I7%2BkQP7KYfArgtPy0ykqaVBJ8q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDBY5MQHQmeSzPo7WfyrcAx2H8xuHQnkcj0gws1X7pAhm1YdMgW57M9bI3CxstQnJUSbsVLme565yZh85a%2Bbv%2Fe7YiXQO5bUYrrfG4GtGx1lunqZm6Bwr%2Bg%2FdRIxpAduqdJ4RQAgStSf1XhMpn%2FEX2Xy730TlcYaLaWYhOJ6HX2rg5DsJqvwq9bBRtlCpo%2FBla98mZstyRlDYFV4qsr9X3BQq478SW8aghCQfxV7G5Y32sFqCF6gK%2FDS%2FGu0biXLHpM1cP%2F%2FJ98LpDyYEImRfsngSQMzPqkQrZXz0xZlau1x1jkw5bZ00rJyUeprxFfdrkM81Yp6YNCPG4TIw9ctXcLg5ceVlt9NQmYKbuDJmR5BH407gjNFpH51whM8ttajEKS5wVEzfWaJz6AKRofeC1vBwISlEfnDzDGYAiEDJ99neYKChAZ%2FeIL5pcH8PO%2BYgY7Cg1TG7BosmiArF1JXX4Vser9CfSPyh26vfFd8iysfz6TmgLAtPYg1CfQdhQ%2FVbnQNedISS5Cwlq162HKRn8GtNeokwi07MVB%2FsAAMRGmPBye%2BVTurycO5uG7bzI5W1Kf6NKXX%2BRnOPAzIHnPvgAE7Ux7vM6R%2BYww3Otn6EHKJ3Nuykx0A%2FB%2BjkQbo24kw8%2FEA4U6IkmNxI3oCTMNGQxMkGOqUBwLsOUHXxaQPak0lq6uuS2%2BDt0wC6XrpbrNOVA8bTKrSGycfEMWo4paEjGuiG2b5pBzplQ3BAQ3Dk17OI%2BUTDXnVqtbCz3pQD0oM%2FOLe5PJGhbEU7dCZuRgY9bTRSS1JSIxFQXdpm0pDtx1MeHRH1%2FF2Kw17JcqGS4WlzkLCzsBGTx3BWpL9U0CAgsovD%2BpqAt9AEw0SzOh37kTLG%2BvM677Z4szKZ&X-Amz-Signature=8a0b4c147c17d61f0bc4fe3934363083462a261d1a081411415a178f456f5ea1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

