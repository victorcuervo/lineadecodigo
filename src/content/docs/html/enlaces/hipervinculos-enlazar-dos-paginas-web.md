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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2EKX6EF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T065219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDGI8lCn2%2BYDZ08BSCVR3Eltul9XdjqRhANbqXrtxA0QIhANCib0oUVkrsAtcxDt%2FhyZpbZk2dgME%2BbY8rt60MBnWlKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4G8ifwSnn91M5cMgq3AP7ybFTBoEaeIEfU884NorLSz%2BJCEiODHX%2BhnzUafBGyOy42Ba47YJKhU%2FPXN4i89mYSusF8N3xkGGxFCxz4wURkVD2ncxzi8Um3FBay%2F9fwvHVRU45AgqajDrLi78gzrI2DpuPTwMAUiR%2FoPc4mQXExO2D8ZK5796WYvO82dJLnXMpqvuYiC%2BLy7IWIW9EyiqoJSkOyKsjOP7%2FCEeJr3VWwqUoFcFZswBaxYnGUvRpWS0lVy0IVFoYXRH4HFyYeTBHgYUPr6bJz6H2UreAwuTHZHbjQv%2FuzOndnhMDhQwnBpdlsCTfgSx6hhFY2p1OWHKd7JJyBvTD3%2FEX3EOAS223aO9PH0js0eiMbflpRpqBRD%2B2d6ohs8EEFLTdGhJgm1TPfrcre8F5gBre7eNYBNlkfpY7EJFZkVPk5qPfe7%2BMpwlBektmks5UncUqUL6clA1ESVDw%2FPM9Ctk18n7MzT5%2B61mVvlSn3%2FoEgdWzuqXhCLGdOjK79aA%2FAeXP%2FALeN2TVkP7pfyUETWgk6gHfdTQzgVFhqeviNGSla2aTPMHm3mqTvX0q5VLjQ4dGuvxuDhmGkp19Fr%2B02oMXZvJWRJ560K8rq2YRWpq24a8SE0Nj5fLAjZpE98XMAJkfnTDbm9TJBjqkATAQ%2F2s7mS6PCrMoFC3fUVxQIp5aLBXZW%2F%2B4jvt9BRd6G8CJckCPtu2UQKkLdj1YqtfCdrNOIY0yUo68sMHPT4VR%2BNFYMqrKwnX5Qv3eWIg1yT9W8G08RIKyO2glDiPgemzG4QCbZ8ZIuPevs9KCjtrOJketqJ%2FmTszMcH8tXHqidHGEDX%2FdLHhmkH857vzNLV8WiBdGp%2BXHMdOm12CP48sATP5q&X-Amz-Signature=f34d5ec306870bfd0644c1144f84078a417259b738c45e081e142437ce8d2f89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

