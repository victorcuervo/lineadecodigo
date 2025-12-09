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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCEOZJIC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T013102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD06ii8QoCBCWGmVtm5nm0I2y0%2FghtMoGH%2FkSPGkZ5d3QIhAMJ56FGoHq6wTqyDH861RZyMDeLsBzPCKxOzxMf06zGzKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKxEjt3K%2F7ZjE%2BdHQq3AMadkR5CcA%2B0NwOcD9Jj5VL84vVKTqU16RlzeuhNkfuGeDEQl9iVjLg6bH0LxXlN9yoIFZ1OCEoVzGSegN2Ur%2Bd8CfBbyiZWESljEZYDdVRF0Rq7ZhgqPndFkUHsINf3bTJ7AovMAdIe2JNBSPBYEsT7iyX8lqmj9byntS2dFcjPajjMe5SmiK1CUKfU%2Fuwm%2FKPq%2BLmsjaz9oD3SMgblsaNMIurkxbVgGuyqR0xT%2FpMslOwFrQ1EKLLuWRVOvNUU5dpb2FqfX7S6DKQ8Y3%2FQBsssBg6zXSNk0BZf4Q%2BODrP3MTZfl%2FWCpRqEtmgsETSC5jnaEIVoTglem%2BPfLcBBQwUdHIhLevOYg1Zpf4inZNM6CmctszRAQZzsh2nwB7tm8ThdHv60rSGuepjicKGIfWe7cbrfKFm75RY3AlHd2M3zS9rVOiGA3sr%2BNpWBFmyD%2Fzy2NE39B9rWwDvtcQTaJxSJhoHJ%2FYkFZLwScrghASi95TOEJap2%2FpT3XiPNQ8oqi85zkDSYh1fIFoiEp6XcCHZupbdGRpkl7vbawI4p4pTDqdukKmfDGXI%2BLkS12LJXWqGjlDOIHUtFqS9ssy2ojdjrPoeBaCPtO755OJ6VnWyCaWgP%2F%2Bk6mKYOEOMwTDN6d3JBjqkAWHOByoSKFj9QCSgxNQjZMsDJT9qqjBU%2BkRVuiqX6u0qMq1jTac8pKaRb4zrnl8alF0LiILD8tOaz88yqcZq%2BPh%2F2txF2PDr2zXU8bapftXTOUvgqcPTl3MP5fTe3sQ82AadjeNkjGLlOs%2F1ONdjHKnBanJw4CLQcDkr%2FgEwcd9coTFdIGmYWPF6ekLLphEFTow3kfk7mI%2FUDCyySG3MR4DOCsYq&X-Amz-Signature=1ec8764e5f20e8aef1e233d42ee37602bffa8aea32bd52833d7256ea033d3091&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

