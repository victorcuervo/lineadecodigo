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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSFRKWDK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDaT1bMQbysjxA0xYDXE%2BmbNdWuA%2FygLd%2BxjwG2wZJjvQIhAJdhDGTuvJZHZQYuBgcwis4W5ZBiD6hBYvBVDM2AB9d8Kv8DCEAQABoMNjM3NDIzMTgzODA1Igx%2Fb%2FgkGqwsNTBvX%2Bkq3ANsVjxM2nQQdSl6azEhPDuQ6iUSzsh76F1kddap0itfx680Ltp4gfay3F9jy7OJTyjPG%2BBH7AfSmHG27HCSesn%2B14v1N2nhK8%2BxH9bSod47CQN5HjeYJgOpDj1FnRhuy5NcE8liIZHQR%2BD8f4ZB4au3QSWI%2B39qRJ4fJY%2Bq4c4Do4calRC0jigjeSk0kK9NcVjxP50YLGmTc5u%2B4aOWsO4%2BR9BAN738L4LlSXFtLcWXZ6kebo%2Fef9h8DZRaQBmGy8DH%2F1PRsKs%2Bmphb%2Fu9HsDBYda9VencgGPMl4w1xBCPLF%2Bj0voF%2FMCjdf8%2BRcM2it63FDa7AULktMntFDLd9RpI%2FT7Mpc8SO0d8NvFo9fjvRt%2BwkSCV97oiHgNd7nnSwwa4Gp2ZPi2FrmnEyEgZ6UWoITqtTYHAW0R5gobqmBXXnAx4n2AqvMVBXMTOn28ZUjeo3OMLdH47kc%2FzOkCLNDNGReaSDPppfQXHwaULbx55gBM3CpMhy%2FDuJZt%2FIYuxB89KFrD548XWzMOe6pjQgY1UN2X6yZCARFXLtZH9NPjTDP9iqp8zqq%2FdT2XCJal61HdLUpj9E7jwLpDZXqy1w15DLwXYye5gNEq8uELGnAjDHpTYVWdmk4ewbaA1gIzC058TJBjqkAabCKQmqLDyG4B7NjEB9g2JMK0xfeSSn4wuiBZz%2B8eke3TN8Qt%2B%2BIs4cKyN6eZBfUXzTewwKq3CqpYA%2FsH80%2BooneuVNSkHlicTrYQFxMPqkYj1PykDxe6txaeGXk6ASHgshpbkaTj%2FOTHmSonliwD5s1cqo%2BjzK87o%2Bv%2FMLsSWwTdhxqkoe%2FhoUIUze0ZlAB9j2tbB6Gj%2B%2BgbAh%2Ff%2Biw8eMb7t4&X-Amz-Signature=ff8962f4aa594d0e04058314443670116c91fadab55e4b0000424c12871928ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

