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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B6EQUJY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T010842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKAoT2lsSpZoHfrZdfZcSBkmYqfUTHusUTFfBLGr4ulAiAx6PiFEJjHV6lQ4JEAOW1zK%2FR8OApeY19jmq2ZTc%2FW7CqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWHDBQZ5GXzDcHLKOKtwDWZ4TaJUjs%2Fv%2Fib7Rz2sts7EaBWBcD1oDFlXZu%2BsDpQCkwl4EOlA6YK7RjI9NdN4rsl339sT1iFJ2fCioV2F%2FfSbBK5pSWM02i7JWWJxb40FcimhHDGLQGU9TFO5oOwvM%2FoArNMWNnYqCE6fAu4deDAqFZ1yKM75HeQiuMv0VA9bg8xxqobSVdYWUncRlg3Pmiz6cP%2F7rhEJdDSpLSCbt%2BVkTBLxO5hWoL%2BjzTWLW9lF%2FvTi5IeVKjmJQFdi4yTAfLORMKkNjPN5rbRND0Gj%2FtsUzws4T9PDq1Bb66rmfTqPPbc0%2B7jcOyotsPdx8dSkN8O3UKMpWHIMrbWATmfl7r918J%2Ff1xXd4nTljDUimprayDeqS%2FgXbVzFZIokZ5%2BSf2AFZYjgggRgoW9b023EAzgWWG3uC5AxlLSG20muHMdLezTiUnvxbWKANM2QPHEQaVHLbUGa%2BaRN9tbpNWvzM%2FSGEalEbNfwDfDzHcDACohnl5g8p0mvParqJbPHWMl4XDRoSqEhMWsmIxAJZ8jc5w9ib9LSV3yAFPaQI4dQykqn6bJpMdR4r%2B8yAb5s4kU05AZ%2BgP5O%2BecyR%2BdVZMaT5l%2FHZz%2Bl7BIOBCOJOVS8zwP68HQXEgrUXkCkwMKYwvendyQY6pgEcpV9f3UQbYytGjy8g7bx2GieDF7DXK9MKg07AweD0w0Mhk6Jiv9%2BCoEZlI6iAxlR4TgZCI1%2FjY8JcKmHqc43W1j%2BHBxMQ2lF7%2BPqPbEGrJIHC%2Flgr1ZEvuVJr0wTt8aGQRYK5vraYx6C%2FGQjkmPKATTkJ8bM4IYvSOYE5n8xFfeeBp9ocTle5If6897a11w%2Fp4Q0bilXOrohNeO5iwW63T%2FUDAaJe&X-Amz-Signature=61a19a9f401760dde899fa4d0bdad78e1ef400250582104643cebe3003a13294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

