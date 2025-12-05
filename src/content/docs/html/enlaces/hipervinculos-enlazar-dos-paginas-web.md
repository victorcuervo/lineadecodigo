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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZFF2WAE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T161429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbd6zNcERu19zn4Mkh50ewNuE8Y3l3tlgF9eHY3asFeAiBEi9npxluJK9rBbyZLJlZ8fDVfrvin5TehLv4GVbl8VSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMU219HhTsjmIjs0P5KtwDUbF40NIkYfgwkonwppmOGvngB5P2Pijoz6bl%2FTEiq3MF6%2BinQDqExF7fyn%2Bio2XFyPMkfrsd7Qsw8%2FaLHCi8mfGiMX7dZbcPGVQ91YjgvaOvEZli4oauMnAhR4qziivofp3fKZvILt4wVP0txzNas%2Bpm75PD%2FNu0GbqhHlx%2BIXeIGlOlznaam5ejjpbLbAOCMor9QOS5%2FLV8ls5d1tPu4FNkKGyQYKYjb1qiLYt8FQ8oGyhP9umnQ2sRiurtEqVrSpbfsF9SgMw36nDLuApKDrIt1QQ2%2FjvwAFkoCWvZ2N1jxLeHmhzDSS1YeZzlIKY6Hewg4664Od%2B82FxhHr9RHcdi%2FxR6i97e5nBp9kYw6zB1kP8KPhpW2%2F3J5uidoiwAY9jGn4Kb%2FPD63wiO1aJALb0sk24NHQISlVpIB7f5YUz7qNgb6ESJDHran1chTaQjNjhm0vqEPSMdVIxR%2FYyc8JloH2f2Y%2B1L6tVAZ4UTaM%2B%2F2d8SzSMYCnOCGwZsGs7htHqkqEXVl0weicP%2BwEkV0NxXhuyMiU5w1LiQaaD6qitb3WRiy13%2FnwFyrxF%2FxQtZKd0C60IEA0JmjVxrre8kBxo%2BsES3%2BmyaZwxLTSNdJNOJB%2BUf9OMZp%2Bblb6AwprHLyQY6pgFfKHiek9VZntE1eMU%2BhqSAyHAajQegLxITrS1FApMdLMMNcVdrqOUjnv2I%2FCh6CKb%2F1IhwuXjZco7j0M1GDS%2BcM2LwaactQXQtJFFmI%2FUkxblHo5eVDhaboZ%2F7CFqtzANuhB%2FLMKJRmDbNsa4m7ue8sYtBozignhLG9AJ7Qorxv%2F5cGexWU4%2F5D8DQ1pGWOGpYBMMPbveSAWtxHSnkJObaSEcyQD7w&X-Amz-Signature=4a48e0c59e4ff2e24456821af67b1375931332b57687a9cf9d9a263c4b82b06c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

