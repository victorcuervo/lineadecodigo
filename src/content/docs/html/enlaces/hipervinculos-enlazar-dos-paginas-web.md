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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JYHSLAD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T003146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCn4cYr6s5shUTk%2BZuLkw7g%2BOfLfVC13nKRHNAXy8SM4QIhAOLUW6%2BcTLJW1hASmaAJHm3diZCg%2BgsZL7h%2FKxxo%2BND4KogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeRuJhcdPWzbNftmAq3APB3aqOi%2BrB3%2FXkmFqXzrM2UEHHhjldjaVH6TixGwtiqS8nfGBTIIUtEmXBYue%2Fh8kB4y48uPNgz%2BiiDv6oWjAUWn3K09pAqLkazE0%2BS4cYlR7gSCfVQRweoA15SkH7YcKklAaeL1nRJjtSRpLyWw0xELrSwt1FNZ0tFTgEz%2BJyBxPDdyq4BX60ZhRLxXd%2FFZSyIU5kkCfaTiC7qXBrVpMucJ3ILiyMWqqR%2Fx0p1fWyAuCDIMMDQi2dbIjVt%2FiqiqWtR2mbUCo%2BQiPGYxD4XTo4Ei9D3Ql%2BKk7GoGIdwYoMTKzD6B5Ds09qI3MBcMki%2FFbFkRhjDktNpe9Vmyy%2FG0sgIwmkOxAg4bL6mFNS5XDX%2FCuqaCjtJ5Wi%2BSAbQJdBXgi3XahnpNJCRyPJa9mIXZYyCzT3MFsLuLEBhmvOVTDj59a2oCY0h%2FXHBtg5TTDazf5OvR5nQcY12ftKdYiNqAKLYwQ%2BO9%2BtEwFQ826blVf3IkNfsLTvOOFSLPBFEEGkZ3V%2B17jfvBD%2Bx0sT7x8xfFiNH0q8mBtbewyvYRGTQFrbYk0X7sewHr3%2FclmASAErFu5GkJd2lBpMO%2Bqq176Gpnr%2FmBt9tsfihDJGN3pzmcnXzdD7t54hbPMLWnHsHjDOodjJBjqkAY%2BcwcvO1JBOatb%2Bqr1cCIoV7d75mXmhWtPtEjXAgoLUUZwUXVCWWjzgb4SlTyc18lIcpocxFQJGPCfdgOS79u1NWHNGbpPIvXdnXWs%2BldQZ1sjWLO6H6XnrOA0BkdzMcj7WG4NZZ8Ep3oqhndQ3ZtH1kHKmJMPHY3U6oWBouEMwbDHyKPQflu2prdEn06leaVl8Z0FKNU9eFZ7DL7YGUSB%2BLYBj&X-Amz-Signature=1f05fc52a61b6d62ef37d87a76de8b7ccea3982fda4e130ee7bfeb810898b5c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

