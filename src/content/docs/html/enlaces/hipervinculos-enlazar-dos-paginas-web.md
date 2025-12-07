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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM3GMM7U%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T221934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCY2nx1K0RV7N9UZ9WJLYmUu7i9IFsxg%2BaFarE%2FqfbBQQIhAOiP%2Fkk0TFbcqc%2BRbLFqfyJjIIvUIuzGd9Knj66%2FheeAKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwubsL0Lb1S3h5G218q3AMpt6KH5TVvA%2ByArL9N9JJgrHvQaEv3DUQtpCwvIZjrHurHDaSF3kQ5Znv7LdxjQ%2BnSsUZGGswtFUa0YPEPH5XF0m1yF2cKQkCjDmEpcKtMkkk0nPh39zdNTlTN2tikwmuHCsguwQPrPOpIDYMrZ1J8ih0RMNUDt2BRuNpTVLOQwh4FgA4Ix999gq%2BppWbqw0sRDbwrkK1mtIVADC4AtFqSBdg37WAvbhCI9RXsmkYB6rETcdH0te9s71QUzaxt7QCeZ%2FHtHwgcGH%2FwmQ%2B%2FZ4glsVMxaEZ%2B66HBxkSKvkYSOCUgTY%2FdS7HVI%2FbT5vzF5ibPFgksdbUGkRrY5fSW2X8ADn4idg%2FQbIJPleMxwyXlJwwiQqkvcYD3%2B71eH1sp3GGaERj4tciQ8JTdscnSfdR6FOfXyhLBitErqaEL2iBIgzmd9jCeHWdeEy0Dvdp6NJSO6BXVZfCzGNVctijtnYkKPYqii5Rc%2F1qMuc810gC8D%2FGqyPz4kNiW%2F8jlgjINdiMrLBCMCB8L4oQQWymWmxaFbBGorvpfjVZ5WrWz66B9tQuucl%2FBDyVAC7c7Q7yguLx5CAIrvqLYJ6%2BT1eGuGJZE93%2FtR0tjhqTKeok%2F7%2FJRvCnlaCKGAf9pnyqXxjCHx9fJBjqkAUFkmUbt9de2NefN%2FRH9kzLFM7eYp67vtP8wqDQ9kyaL360bCKQkYv9Ljgcryg%2FlosHW5IlDUUYE56BGPqpYDQ1FEug7RWvSWNIxsbLc%2Bbt2yU9X%2BqgCvwWUzkgSKg4JY3kP%2F1iZ%2FB%2B8SXDTN82uTQMbdAQA5b0JH8lezUK6hBYVt3wbNCaEER8OdwJtezAL00KRcHIo%2FmT4MHPjP2OXlVU%2Fvk1u&X-Amz-Signature=5f9194f1cea49726f6520367dd64136528161e550d3af94b48bc0ee8efc056d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

