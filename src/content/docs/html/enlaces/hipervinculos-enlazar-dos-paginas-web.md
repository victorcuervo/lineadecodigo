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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OJRJ324%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T224235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZUJz%2BlIw97UM7rypqQ325%2B3SI1hV22wSeq4QywNcoAQIhALw9AKQEkDW2M2fCWlvukxKvLBtrse9nweGgis5yIgTpKv8DCH8QABoMNjM3NDIzMTgzODA1IgwcF4O4wednL9p2e1gq3ANgeVVaw5AE6dmkoEM%2F3%2Bghfw418gLi3G%2BSOEdxmzG3xhjaKFsdEIf743cIgzy5%2FRIVSY14g6iM3brOTXOHzU70unDWlIgqoVU3Fu5akEuUzHmjXvEySYfMKNMc6uQy5m3V1SjR%2BvZEc8hg18NMtCa6cNcXxrVhT%2BpRihdBA%2BuJJy8Z%2B%2BO1CyqW71PdHUPo%2BXiatCxwJdAz%2Bfq17O6S3OTIm9jPwPDdmVo1YSmYt3qDiV9GVmnVTSwBfDUMgGHTD4pkjrQK52Uu7soOCgChwo86TRUVSxml6i415adijLZ8lCx2G3HFWmKw0vcObpdpkJ9w6aiLsLOtrSeE8E%2Ftb%2FdFoOmjYPMxNckDFXbyE8O%2Bc6gY%2FJBeTVqUAEU%2FeGIYbj01WF54kRtsgxtQMgyjylMb8dI4TqJkI8va9KPGk5BfvKd3jdpxXyYmNlQyCJCJVljZLw1538aTVRcfhjeaPIjL%2BCHnE2iIaE4%2FZLQOkcXMmAPMEc%2BPsAHhSFvD44yDJt%2FbB3yGLNIueFTvV0X%2F1qPf29l0LN65FIdYDzjiE8Un4PIFkqNxGAPF6kGBoVUPulm4VOenl7m8AwE%2BYI0Gf0pczKHD9pFzE3VTxC5fZH%2FG0%2FUqef1ZYXfho8JGdjCA09LJBjqkAT1myLG%2Fm5c%2BhBSOmisSLT0GpXkfYSJjcwVB7CVufAnRVCVqlWG%2FZSnc%2BzB%2FZD5mc51Aw7pCNNvem1pu3HTg5EJ9FGKYtZkTgz56IIqTf7sXfGXZOJllt429VYfpW0Y8OnGuH8IkpFWKkSdulDu%2F97lov8YbPqP2t%2FYfuQNGwG7MOETf1beQnPudfE3KS4EBaFSjpxyVhmqldBF7Oear5w2kSOPf&X-Amz-Signature=0114132dabeec068481cbfb88c932bceed68f0f97401e13752c59b5394374498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

