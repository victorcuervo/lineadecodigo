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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4ZY4XGD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T022617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJl7yazE2ew13Ujic%2BVd3EKD%2BXKKJylT0m7fM0IPgqVwIhAMoZAmDED2fc4KEJkP7ZjjxUYOhvFc3jtFoxqm6yrrIJKv8DCGsQABoMNjM3NDIzMTgzODA1IgzT7PBj%2B9YqQqO3Q1Uq3AO4rNjuw46SVi0FFaoa4%2BU4me2FjFwKW%2Fr6YimhNl9yLZiN4%2Bb1ONUD5IquRFLVzp9egpJhg%2BU5oN8QGQWtpJW2pw7R1C%2B8ihhGJQc06mqhH7W7Ne0f7qmD3krmGtVTh2Vz6xKPgPMWeB9syPjwmyDez3sbH4rSBlOHA9OOKle5mguPVPygXEg%2F0iLpj3GCpDnqU%2FAvTG2a1hKuf9qxKD0YZyMQ1l%2FkGKioEMmNLBchyj5e%2FobKZ6hzYe1RVYou%2BOV2S4GdioBCOwf6U1%2BIRTXu6sLziBK0KeLJ21f9BLQEBLHVfsZ4dA3yG3fJIHNWIrEEjmqIG%2FS5U8f3HFbl8kZuM%2FAFuBkDSvQIkeOSKzvDmHKIom%2F1F9FCtlnBUx3TngWiyE3Po12goOCDcASN4VAZTcxWDYV1CMc788wHPhyqd78wQbGovfPtlPWxhR8lNbLPQVXlFZfYwBSWZ0Vsfc1ssg6%2FeAbhwhpp5pVOrJic9dCpmF2LyJnLJdyHLwpAFV4GKOkajZZj9ivdCP%2BuYX0IicEfcXZf5cbrl%2FdfVdX65MY99jmayzwGL2p150Zc%2FF1OkJF4p%2FnQ6afB3q9TwiSB19G3laJGusdl4mYeRubXf3wiPlj9%2BQ9s0O5L0zChp87JBjqkAVt6u8oYYQieRrQoQ2Wqdy9EaheiwR%2BgDmwDovh3D%2Bk%2Buu1nik0h78lXJPx4mow3EeOgZRsJXanHSi3ZXOkTdUJaWnjDsIPBTqT3noX9rfgAFQGoyzDv6buoOBwnwcv373FVND7AghO%2F9XPqLlq1PR0ebrv%2BbU3WfBj%2BAbClYJQiygWt4oa%2BLwWguyW14bZJQFK6kap4l%2BPtJN3qFsafXg6vuVpB&X-Amz-Signature=c281ac6c1055b6912d5e30125690f3983a06d3b469e6ff0ab720f59b2fb9fd8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

