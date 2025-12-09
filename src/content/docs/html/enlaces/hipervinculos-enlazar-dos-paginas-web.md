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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TWFFBNJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T200600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsKb2NaWR11T4WfLEP8NyyLAliScmWv2zdK0ZqzydpcAiEArRqPnl9Kmjuudhoi%2FFH5Zt7rl%2FnFrSDV9SenS9onA60qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0l%2BIFxL2m%2Bh2IgjSrcA0agBz0wrA1yTbv%2BQXx6ocOfwHqkrUq22HxoH3DL0JWt0WuEV4fcpw0YbL%2BnwyJKIYcRZOa036jBIOSpAUZXkmzH70mfuhIcswWLmgo65rBY%2FUszjiUCMEpu00F%2FoQihyZ4AHQsaYVYhDUiqKLvrDlA7D3%2FvtL53rHfyQsQt42lQqvTDBRHHhWgUSOpEVm27virYRfXyJINpW%2F1ZrJvZCo8LVo%2FajvnfdDPeL%2Fi9eBBFm67vIoiZEZFAgFtBwcGVwclOvl4L%2BJZ8o4%2FGNLYSUAYewxGEqY7STilnEH02SS%2BAHM0ZkEoyUeVdW6kU8o48pHFtNFYVKn%2B%2BJiueM%2BPzc3KbQm3D5TXWBOsyIOv3QYUN8Colqb2XFO7qf132VxmBYc2j5J9Y2oZt444Anlyo%2FiY1V0eO13qZkvznnp49DXlxRpOvlrIoGjB04gp5JAo%2FznSFSZA2Wk0bXr8ex2wWWtw3pWgh%2FevACZePVh0mBFifKTXNrDAuS04f6Xk5CZVwa5Wt7J1a4rtr1ZzuKCCq4jvSShXLvPSWSYQEQdHlwZzLGRUMuwK9mWvymingWaH8rS%2Bi8Bt%2BsOrYSH1tb8q2evuv%2FApHoc98EkfhPnCIqDyCQgesyJzFmXAwJNtVMNL%2B4ckGOqUB%2BpvcHi2JB3hdmsWJMVSbzXaxZ%2FgFjpinmibUj79HpL9ztr6sBTP%2FXIj8gRNpQ3c%2BtZNoYvPds1EdOC%2BlK%2BjX%2BDeh41z4NfzP%2Fe2EX7i2u69zQMYTu%2B8grxcG%2Fxl2aP3pDbwW2Oy0l4PgktiwIRQmSAquEbxPwq%2FRY%2FNneh2X5LAe40IQpTlpaxdAnfkJos%2Bk%2BIGcCAuSvo%2FGBaL0wAcgxy9e5f7K&X-Amz-Signature=758e181e576eed964966092e05ab90f024183606a0613f9a4cf75c851c314d31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

