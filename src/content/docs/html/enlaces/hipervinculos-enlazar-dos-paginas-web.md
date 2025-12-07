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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OOCCBDM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T075846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCj8A15U5ZeRtV0fVcm%2BergHvcT1gJubCfusDA1PeX8gIhAKZyPQnBRM4h4DRIF8QyMqEKxdY%2BgS9Uitjzy6eMWgVBKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywyG%2FF0XSRHjPoFFkq3ANV4f%2F4oa3DgPqEiPBcuuEZWGwviA3gND9AVSJrnDqGNxS6wkD5j%2FTX1B9ZrzOewMcgzz1nL6qYETZVC%2BVdbZVwhX%2B1aEV7fkJGH0jeumWgKCKNndAt1n%2BnpXuBIJupEWNVGVfdhMNbPdv9565%2BLlj%2FtuSTi0%2FTm3pxMqQLweTnZU%2FLF%2BOmDChQKxgvAilUlGdXu2kViU2LKaK9ZtHWaaLuqFg6nGchO%2F%2FkFPRfBjxPwMBcMfojl3AU7Rdsu7CncR0A5k37hUG%2B54JzBjMNFgSz1IBDkPPuJG%2BcKZVw1%2BhiitYhB9IrjbE9aPQJiEzuniSt%2F7gFSEKn7s8qHLuOIpsUNNErsBe0Q75XuVrkQH3tktdhZZ2bNyr%2Bo847m1cHL2axYXWgifaNDaewKcBKPdNX2eoY3X4u40qcS2R5QYaweaM%2F0DYb%2BzpAjyu16LaMBydJCMv56IY8Mzc3cWx34h8Qopr20kbfOKTgz%2BUIXoBprHSo9HiRPe0ISpNVC1ffj9sFdys%2FQzq8bz1HLq%2FHESHIgeZeWaLRQ0%2BXKrLazOuUrCLpQfziouQqVKGPGljDgpHc9i858KxPv%2BpS2zMF4xxUcdMLmOiIWy92U0Wk3iH73cdN2lliet1g4OIouDDtmtTJBjqkASGDFouGuBIsJzPb9NzL1t3ZkfWQCNVLkLnJhZ5COAQUCTK4atbAusZO8a932YPHDFZruklCAmvU2T7KvJesGQmGSaatepWjkuThElBHCS5Za3y7bsldcJfZOgLGb1K9egFl1hTh7gmU0P87uH4cfxtk899QNYcctO%2BRvUr2POrTB%2FL9eGF9EAwyUo3A8peisSAjm%2B86D7AypEyfYOtydxhdCcuQ&X-Amz-Signature=cca3a2d3748273782c2f4c709f7a60f9570aa8c4e74973cd7f1bf30eadcc3b28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

