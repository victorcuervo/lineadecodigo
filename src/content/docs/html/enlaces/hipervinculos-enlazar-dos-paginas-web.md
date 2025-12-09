---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6N6KM2V%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T224706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDmYoIgjBC5A9R5Nw09TFCOTZWW7GzJuYanGCrP1kIMdgIfWq7UaQCVagtOvFCWi3zTfklO%2FHigHpvGscTEd85L8yqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp3mj0R807zOcTibcKtwD8XrUIHaEnJl%2FWQdCb338BMD2OmYIfFYsa2JcubHagQFIHMHVJkyxzNJ3DlM2QEbfZ1Stfz%2BMk63yITt7zEu3HOAZAcj2ckEZNuoPU3dZssA5JvU7FSnlKyRw4k7of2fidds48iEFV%2B01ZikJSR7xBIJ1u110wIwlEpK8xiGUGS2RTnybtbuj%2BCCHVdljp8Gpnn03xOoGF%2BpNImSo2NEmRRdPFusWA3zLRScdsCzp4kQ2qip036zLY1UEv%2FcTofMpByAuPfr9QQrQbknF64RubGakx6yCN2NG8gdNHISSejsgY0y6ybXqXLTFiLZHRAYqziUaLH%2BZ4fH8v5fwv%2BGESgDXZz%2B0dyZ0hxaBrWiRr%2B5FauAa9dz3JjAgP9wqNwoa0nhQO3Ep4XJnEIwPoV68BqMgcz2gOCp0BGmd1PhUX5uHmQjBl6r%2FY0mThbtFwFLUWCu%2FSANDhB%2BlWw4vyUvldBte4QJ2QmV8j5IeSTmbug8FCwq%2F0A1Ozmj1w2S9HPMat2buQsRsUZuE2WKoPHTbYWSyqc1Rkpsbu87R51ecrLagB%2F9RDhd0k5SoO82KirvU%2FPREcD4RFCuIrnvp1ZuWDlO3W%2BfmQ%2BDA4SusoiTNZaxd7fpu47SP6gp5x1ww%2B8PiyQY6pgG1WIEzLrWAT4MGRtmnRQtP1QfHtod9b%2FERtD9faMWFE%2B3Zuc5Vs%2BF%2BLrWhzkCtR0hF9VDROXPWDrVvsnVh%2F%2Fby28LWLajsQjNRsaUPEHHtUTh%2F7B57xx9EyjCDGPl56AoAAowNxB2zmajNg%2FwH8g8g08bFUZD9n1l0oTF4wiglPIiHCLThxdTs5K2GpePZq%2BK2eGLOaJ0SZKjXszv%2BnMAdjQp4YJBz&X-Amz-Signature=bcc1420a804cf78524de294fda3e4f02a60129e85d2df9496f3aa04a639b99ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

