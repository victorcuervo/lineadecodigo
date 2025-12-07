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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRMR2JSP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T134644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcH0qpsZzPSOQc8qyQm45sG%2B323ahJZaekuWy1STJlEQIhAPm0pBOQJxFKhF3OqFU298G7225ebOfMOugd1YaqKDVMKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyrknbk5%2FYY6kPxRn4q3AM9xQp6vqTCcAqJ571jGa3fdghoo8pfeRsj8UODfbKOgC%2By5RO4wqeU3Pk7ekJe%2BstzkYuMBaE1P3hFacQ09l46LVRCvyV3pt05IDV4rfCOXLKelblUQ3I92CDG%2F%2F5xgyH3p7SoBvZ9rzCekPa3t2VZLRWfOXEkLhYPwy4zs5qWt9FjORlkFOd9aybv%2F2B9n6D0FK%2BPKeqmvIywCQaddH448SuTY83DNEGEiFURdTATPBDOqPDhCZ2NRdhXVuUjuT6f5%2FPeuXlzw20I%2F%2Biso7g5XWpGa9vTW3vWcJKKRjfrjHVRJ3ewNyXAtj7pBef7oAapGsR2zuq6d7pLTh165IidqdfozBscdw01CBPU2jbYPBYIcQF1MYSKdkhQKIx8KSxKHQJMh8dROM05F0%2F7yPPdIKQDXyn%2Fuzkbm0P9y2x7O0MnMXf%2FW9vXH28SisGI24p%2Fj8SmXl3n%2FQjDjy6xbB7l4zYOcDYD0ogqZobNgbwtmNUpwyxwSi9QGUeU5CR6wvVHcILYQ7SMev8t9YPi1XKHQZXdDNVqDD9RRq5b%2BYSlubJX2lqLvJ8YjUn6kCiz3MqHkBAdturAEClRyp3y0QICRobWEnnPiDCzEcyfk777XskdrnuUzCIb%2Bj7ZvjCImtXJBjqkARmdWQJfuiNjngbo7TonPI5vnKiQWXKWmCdswTAljAxinYxgNOBOa%2FFtq%2FLSVQldkTDzs4u418Hf5OhWbXqGjYQui%2By7%2BXP%2BTnPQqOJW9REGrNQKAHzUP1kHOrsKPHlvYIFXkarEgdbkT2Tfqfp2GlCbW30L9z3jGwYkKLVo1uvHX5sb7ySLuija4xHo6EwNwv%2FPMILjC5uOY2i%2Be%2B4ovCW3%2BU5w&X-Amz-Signature=727c33efb97ecf77df628d89730de5d65be4c3fcbed777288f52fac4680db507&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

