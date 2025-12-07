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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGVFRNZD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T044244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnYFfFxWmrnv0E7TfdHCVWDt0ntlhemkIvfJvrJAL8qQIhANcPVlFsBbxBSIvAUxQhHQURn2gKzTmVgRcY%2Fnn54dSgKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvQqZWdYQQoVOtOKMq3AMjskydKIV2zlvA30maw0RjnwyEtIZsZTa%2BTi7HnDzalOVrh6l7S5jfxenWTdU9aSsDZm8zofAO5HcLgmTYGNws6O%2FJsmiALPjqtQX6ywAkPKjNJK7XF6A3v2VEChQBrbt3VJHJTI1i50%2F4ontcVowI05ct0zNAeenXctrR%2BSenSFQuyxkR3k%2BlF3uHjo%2FpxZd4HtooEWeE0yrElvatDfAFfkAS%2Fe5r9gmXlPPAXnfsrLs%2BXJueCv9CAkQeWeyiLc42mQBUctQdUaAFCskwLpYZssYbeLucvdb5XCNrdAtkFMvEjdhdWJotdrieO81Bnx9UNYGHL0drccxKy0wToreuQhkScOHnad8y9N%2BSpfIvIDwtRGxnywn3DWtRLhUn65OtSzsSJVddi8zHXNRMMOT0%2FJu%2Bx8tQNPFHINg4hY3MSA1BX81ebcwC6H777hPg8afPog3ZA2TqyIaBH1Yl08kzpT96E2UA9lKLAxHBGtVX9U6v25dYyCAoqM3cp3ERVWdR1AEJZJQpgnOniZY8DF56JK6Y5siembL8pPIEXMrOzLrkKs0xB%2BdmDnU8%2Fra6rpv8LpCVGtJHbo7lZJK269uNYq4EfGu9%2Bo09ldDBUJw1hj6AiOWvl8LtDHh0mTDq%2FdLJBjqkAXkEI53vW2D7XcaXuwGYBrDmJiwCXV1AB8k6hBVJqkNoJGVQftd7IbrEdNqaZ764fWlSv89FVNC604LCDW01Fq4u81jS078Al%2FuCl3b6AFWPX0oXh6ynYizncjh9sy8NS4uFbQp9fWpO%2FelM%2FxpfYH5Y6dH2aIwNOETOQF0mBrefvJ1KQAo7%2FzXSywhbR%2Flls316e%2FQipXLi01rypsF%2B454fHKFF&X-Amz-Signature=ab72e296b0e96ab2edf80e088cdafef2b41e728d98e218bdc3f3e00eea9c17b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

