---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E3G7HZW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCICmh%2F3xiL4Mb11i6FY%2Bld%2FRFGKlyIHuTlme6YtdnHZbDAiEA0CKUBRYvN4q7Xg0KsapT05T4lLXbFR1MHvGy6hXthMIq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDAzVEyf0yns943OhbSrcA83PIicpG7ElTrMsHVERg1JSVR7TzKBa5Cjvd4Q%2Be%2BLsQJonQ0qYsgTEanCoflG%2BStJdSlt6yflYdWSHi5V5STTpVvPUl8lNJ08AlBhAJn559Sp%2FNh5%2BwxlXi5YMU79MN3XvFn%2FkOR%2FcbcRLERGqlc9rJlQ4NnszrjyvPA%2BgL6BFTxrxgLLZfjnLS7ny5uMFwSk8hhJ3sXCaV%2FVthrBWb9XRxGk3wnRNBf7asbYuq%2Bgfjuk00BOn83puN2hFuBYklyxZcYwkImvSG%2B0oMev0%2F70X%2FXPxbaKlzQwF5GKUUKP6wUnPp4Nr7jj34KnFjhUEr8p1qhbHXpsKz%2F%2Bq%2B6OP0Rff7VXbbX7i3I9MuU14w3A%2FsRgtYbBTRDASOsuJfrZdk92NOgpCxE5ajeDbK%2BnZ3l5jStzuA8mkd3bAxfRxEt4FjMHsILNhpSwwt1nLvwOj1MdvbR6QNTG9RChtc6g9mK%2BoOL7q%2FtZkybAXhy1Pb8R2MlMkTkJHDaigtk16GCMOcXuXzXO5V5zWzafOR7PQiqXniEV459rmCpN748rNrrudUOvmMY8cDj1THyUAxfZnCqE6J7ASETxlalmK9GBVJ1MtThl7DNfDFNwpUYRI9gRbT8hUiJk%2Fz%2BCGxL%2BkMOD3wskGOqUBygm6sSu1ZiCAiWzqlgSWGgD7%2BD%2FSuLlOrHwSMQCv2eDHosMG5bgbR%2BfKwdRrunsFEigsT0rhqNiqGM7zQv50PGJ7PO%2Bf9O34z5Ry4jp64WyjLSrcSuKBh5HZCtZAKjm3D5MoqzkB5llgBogR5ZLKxtgXp8a4MMsqxM3zyTfhd1GgIfdYf4YbtlcpqopEwn2V49nZFPb%2FUHBaAR6QtLCx2PiNxChE&X-Amz-Signature=72894767bd43f4ef378201bab386fea2b4b5090fd2c2bad0e3841d26ab03e89a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

