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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CMOIDDE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T170637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu%2FOaqEcIe7tlpDx6MjKMnKUVHRprGMQdVSz7O55D6CQIhALpo2kiqq9o1Kyq7IMage%2FM4wBn%2F1u9HRLtoOmyVtNwHKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkzW6q8MRvVqaGZj4q3AO4AoR6wOVTaYsM4CHTgwWOeNgffrgl1YrXl4%2BRddVe5YhjBBAwFj8wRnkKmPZdA3z6fsFGYbff3YY8T9Dg0c1IEiBcAQvzGHDGtRDrHcVOAW%2FsFLXNrVJav5KVqHlnUnOJ1FWx81i5Lm5E7WmAFHL9G9vIoeGVmTPmG1WwbXgVimV3cvkpBtrfq%2B%2BHiHQUrSLKmC0vVoc5v9l2ngSWJPC21ERnz6jW%2Ffy5Ti8TVnbgRpm6lQoIE3pyNOMJHjAy38DawVFfgPLs%2FdmXmtuZGFfCn9pzGiv7jLNDTZbf6MbUE18TdwnLIfuqYKmcHi9tNFfplHzMN%2BjwXwJ%2BnmjQlOp9y8OyMYmtWuGiVx%2BKbVnNJ7Rql6OJJQkxkibbW%2B1oli0HSawtdaj1gxWRV5GBqJRmRi6Qt%2BaO5aOXR%2Fw1WX50qEZViUXbko6ZQFv%2BGcd8RPrFNHbWbOKEtXpV%2FnJQ0PQ0l1dyJR7VkrbnQoSd%2F%2Be%2FFExR7aTiz%2BzfTEEwesHqCtAd465BxCmlpM84RKvKYrG233tmUKz1I%2ByjzfUTAELjfTXL3KJm48miU1OOvPx2JLjk9UIDgcJsEehrYLc8RzuPIrB9mJnZ0xWSTq7BP8gKEwWq%2BQAj7pzhE71apTC8mOHJBjqkAW%2B4xV80rbo2V6BPFFD7QclVOidhD%2F5zEwwjxK8YwDZHi98uMrsMQQE8Df848RJU4JSv2lYartYQV2Q7mA%2F%2FtZTgbkQLWVcqC1y3gnCVj8MvJmwVFLLyrAgBlPyTMd2KDTAeFY0o1R27dLRvAPOmMH2TERHvQrltY2VFQmC7c648SKOIGkRwNf38blPJ8639CSislaKb9%2BNyflDRmnHxGrSXRQkC&X-Amz-Signature=41bf232f3cc925e3f3ab6bd902f8c5f27f8ccfb21cfac5d6845bddb2ab553914&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

