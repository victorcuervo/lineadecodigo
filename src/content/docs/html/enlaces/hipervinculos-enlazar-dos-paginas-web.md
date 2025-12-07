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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJV2IQ36%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T103414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BR1CkeSI7Gjk8tBaY1OhmpHZum%2FBvmvZT96Kx9q3GZwIhAPvydOqIDKLzwDe3Ic6dbmUCCcPEkSvl6wsyEMu5qIanKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFAm%2B4uN4X6SHU4tYq3AMBXj77zA6vhJAV3Us9%2FbukpBQmFFKARXCRmTwWQBcHuV4EDZP6blH%2BHZLUOoKCZ%2F34u%2FVWW0pwyWwZfHSl96m%2FA1wwFU9x0SkQdkv7IrZ4OPOW%2BpHvTmV5Fae7li9UE32gtbJAOZp99S5k9khxB7nvgtZe5j0AYIGzpmDV54WodoEFNq0qQkUeHCT7vGBJ%2BWj9ZzgILKo6dO%2F1sSIShC8k6g8y9VmthRDnXfeoS0ccmGTpgW3QX3WSIWyZTAZWt2IbIIozH4zRy9TZqOaPhP%2BLwCN8r374rH0aYLAnSlmfPQEbcM4E4ekXUKbfVa4RK8ODt2K6egFX65yVQdsSXzT5w9ZP8pfIFhb2graJW4Pl75dl4tnZurawswke0im4ZETmBWP5OjpQUcSAA3oa8QgICgAPc02yAzjv3RtOOa%2BHBmvWA6phZt9v%2Bf5Rsta53OGY1y%2B9quJNrEydub%2Ff7THGx04mrP4%2F64uNYDPsYZ8szo392tbSyaCTdX3lvQjkhi5dNVLFUgV%2FnXNnamgQuhb3TzeWllW%2FEnzroNm%2FW1Hq7NWX7tvcn8MBk8x8w67DlggO3ZSVCaN7PBcrTxe%2FIL%2BVPxk%2FFhjKtQLCkBQev2dVar4BpP3z980apyuvDzDsmdXJBjqkAftVE7G1WRzRiZmLsIw8sJEaGPIr5%2FTuv5DVv7DpJv0y9OaytP0rIYnum6LY9%2BJJRD3qiRzw%2FdKTTh01i2bkaUc0cFEw8sDQQXzitV7WE5xfHJndQt3JVWRx57qT5SW0trxcKNWj0xpZhxUXmdyzRfj6ypdrxbPW7RSW3B9jbUhdpLYpTRjVaPlxx2sqeHO6LiMjUShLefUSuCM%2FnOeCKmYfFNta&X-Amz-Signature=375fcf0540e0577d3750c8a5bce0e0d19e6d0b082c7eb774de274e6b2c6bb5ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

