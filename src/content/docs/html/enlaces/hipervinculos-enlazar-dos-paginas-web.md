---
title: Hipervinculos - enlazar dos páginas web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645KXNVXS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCfi0gpF%2FJWDm4TY4DAWY1fQ8SjII4%2FcRbbC8j95WfuUAIhAP0b32u2cEHUCz4V6mIYk7dtfjuIFkaJ3btkPKuXoDQTKv8DCDoQABoMNjM3NDIzMTgzODA1IgzyTPw7N0GqxSeVRQoq3AOovh0BlyJsxwgiTkoAdqEsRStYuV8sEcTUH4HWYIdmlA6SdK8R9%2F3kGnlYOpFZ%2FGqcGlpq8S50ogQ52Ncsv5pjaao80Xx1o4YuubHn8W7Hz0De0TFsD8qmdPefXOU%2BUzMolZF7lmBzf%2B%2Bo9UnuJgeBa%2BPraQp2%2BeUjpWDnM1qSNCYoz4ElyrwBEyNZs0H%2ByzkXEyzazDhX1FYmoyiqVp84kclToG0yEQujt38pCAUKJAcdPmmKLYI8xyKp4Q0ATRJXhzmXcwdnm0zSKnw31WEl2Tcs%2BFe78xX3UZxaRjQyR5FYX6Wqi2SoxuXqezbPjdHaDPuEiVvsYgWQZdEFwU2l5Gy3O6kdZaKdkEi6MG4sTBaoB8z%2FwIEutK6kWOqYtPd3tFz37iOk%2FBqAghQNQCBIz4MRlSUBk6sPWi5xGKsIsa%2FUZI4R5O6BqCBXvEGKSueooJwHMjWb29KIFCe9jZGxBrxVvCXyvoypE9LRL%2F6Btv05yrcwGAJinDR0t3%2BbWniGk3rvll5dykRUIO8TZ3LY36uiYWYGZNmcdEUdKgx2IjoIRZtwpN07d8amfb1N4nEuPEwCf%2Bmv%2F1h9r4d8wibiyWEWX7yMv%2BigHbwqT3JH9PZPJ1L45s5OPAG3gjCQtMPJBjqkAdl6j2rn%2FwtiB6cizIVlF2Y8etRGWp0kvQOlS6WHFRodCJidn%2FdhJek2FVqt4DisXz8G9M0U1wYc2JqE9vt48Mjh12h9%2Bay3SRqvP30vMtQnc9Kz09u5NfPqI7T482ixfx9%2BH%2Fg5%2B6YWJFQqh2Q5TDYEIoBD6DcR5KZa8ZzhK56Gc9ABKLlVXzwzjNMU8cAmWMePlL64ShCINQ4vI%2FKdbVmgt6py&X-Amz-Signature=7c6de7869dea03b9933d7343e5c570df6f02cbc0a26f1e127da6a953774359d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

