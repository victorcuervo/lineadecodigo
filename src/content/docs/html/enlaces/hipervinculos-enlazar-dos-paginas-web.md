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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4FEK2X%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T014453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDE8M6GKSTFQuDbeykLnKoqMYLZgSVjBKUOW5SJbgJ3IwIhAKdVprqKMU%2FkmQ9fQ6Y%2BRlQqg3F3oE3FA8CuWA%2BNnvXxKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNhIuz7hwAVviVmW4q3APUNp4dnlF4Gxl6vBHKn2I7fNoK6Ml5j81PW4TdG%2F%2FIP8C9E0JcVn6nnWv%2BDQOAJCirTvf9O8g1fzk9CTKTp5PhxoqQawSJg6u58FdVd9jKA08dYoXvkialQSvHpCnmVAxn%2FppW7%2BGKVfalsH0fGX7Und0nPbPHGmTOiyObF9QYN2ufSeoTkillE87F8VyfvB7OyWu551ZNefLAPHA%2BpsSrhSXzhnbo0MDkdw%2FMRRbCuIXOvvzfgKE7dEQc4KLbZ8ep07HF2kgNNKBqrbLSxl7vHC5YdZFyWGDfanfo%2BAFTBggKCSgaUaNzLNCZcguVG%2BxSAIOsFxXOeEi%2B6xKieuxUmu2UMK3Pk4pXwZdRUtZ0%2BMCKkBZ%2BEffMlFzdC8OoMUD%2B42j2m3D5ox%2Frx8tFkYGL4hLOIfkffcfWv11SeYFA7HwTF6yBMd8FC23PlxEqrgJm0t9Qd99NyfT8PQU1jDM0UQHzvWC13biTiaja0Iod70HGk7yDcjQoPewotGCf19oX0CGUGqoY98PdTVBHwS1KZkVeuEK%2Bqf4tJLRt2Y9141ZhIcQtwqVt0UeyNiDb9lGa5ggYR90YTa66AwKD9%2BshiyKzwU%2FiXZX2U3DdpQMOOBhiaMm3R5FrODKCWzCc6d3JBjqkAaZEN6x190S7rgV3SSshW%2BTAjealZDWaznLjYAO4M7iCPiddYZopPlxRTqaly4zrSR4rCO71P4pjwppE8TKqevwljSRN%2FPFgEmN%2BxFqvVuoxmy1yi4jBwdZABEDFtlopYtmN93wXcHgoH13rpoHeyoWRIzSNDAbdGsYJDxR26G7JLgTBTRnbFIULaid%2FGpLvuHL2SfqQfdOdYT8p0EK8yM7Fq1%2B%2F&X-Amz-Signature=ba1928ae352f225e994caf98176619f5e2fb26a0cf0e97306945706cd8e1dd4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

