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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XPA3VF3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2FajCDYnmjFQJJAF7o5kUgvfzcQgt2gmdG7Ai97kPVOAiEAiR31aM1pb0nivoX1LFXmdF2h3agXuQ%2BGWPEMqevD%2Fm8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDN8IJ9pLgn23MiC3pyrcA6dNo%2F4uxAMI5GTWzzi0KUJvLqsLVAVaVN4rmtG%2Ft9otVhVy3pYeSRNnGn8xNVTpOfAHB5QxN%2BxVwIVqM%2F0mf49neifj7wiG22pg%2FT0vGasP%2B6F1Rw7rr13Z%2BaiaDjEAJuxh%2FieAyuAUzJ8ORias67SeqT05ZmWC4Rfr3CjeZYfmsIVFzvJ7ubRsQdRYZEu1x0EftpRB1EZKz0D%2Fr0BJ5ksCx8V92jg8lXbNU13EuBh6V3lCQeh2uGv2ZYV6fx%2BORwfx7xLHSoHiWsxyO1KG2retZqi9gxgJ6FB6odNfFRfw34lYMEEJ4s3Rdd%2BI6uUne6HD3LAnjRv2GSykqnStyT7BPNwEtee54cN1SZxB%2BeWdvYcPEzeruwmXeRbHYrTKxrIP31NiS4hlZQqtX2vUkPR8dXL5NQmYLLB0ao909ufpB087ldZCF6UivLt3PiHCzd35WXMdArJW%2BsHc5LIkNcRY%2B53Ot9iaLA5tM20Z7T8ufW5FgxMPHxbFk5hP%2BCE6CxpU5UnmbGveoXpObMUU7ikwJY%2F2jRQBL7xQl0kSU5rMr7tn5ZAgagUT0Qp2mQjruSYwxtG2YK4EgyALmdSMIMZ56mLAfAnpRs1FVdmXYerY%2BV0R7qQwWD8PCBTbMLKMyMkGOqUBTbjnj7tdeno52qzt3uUGb823N5ZD9tc1NvvZRyFVMNhtRi93SwsIXHZYBjkOYMEi0JxhzeUgJeFZQUF1RnFqN3dZDtCf%2BTf4E05VxTRYNSb7Hx%2Fz9In9QFK0MeGuLzRXTTC9k6MxE7bQSoqiNDIu2BH2NW46zyxd%2FV4K7QGUtOGs6EqyTj0MBHsYDU0F%2FvvPBxFmO7MvUQxOa6Cu1gkIKjH6Ir6%2F&X-Amz-Signature=0ae52adacb3d1d8e7e179b5059ba3d9a5b77410005d9a34742fab8b5ee3ee278&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

