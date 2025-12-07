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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST4YFLHU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T095939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLqh9KD%2FuSZvyF1S%2FzgJpNd%2BHzty2TaKCb506C6rkWvwIhAObld8STstznfa8hO0nfWdBjOtgzFAmUMghbpIjJJaIMKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlDfGoLVyGmFKHeMsq3AMytvdqBt4hrdpeHP5TNFwvLsc85vUkLSljKmOAXd0059C3kbygKWatTy0GHLXVvrNqxMbcDa4f%2FRiT4cjr%2BYnnqFZB36ogNkjv%2FKhccrfcUI8c2gquCT8ewl5RJAzPoJQiISJcWxkmdx3fqx%2BgKRUS8fluNFDOqEzGxYiYqUF2A64s2NM%2F%2FtyEv7OzVVGt%2Fw9e8%2BC1Fw5j6QMJqpTyF0RS2kGEdqcL6DBPBD%2BRe5jFKzX3dwSraD6a6TQCEAbgBYArQPH%2FFY%2FJBmWBpgRcX87t9C%2BJgdMlpb1SajP3cobODObXFMJKtxN4ZGl8VnR8yMfnN8Ku%2B7phiMQ4qLWX4Pni6l%2BmNUBxUlD6aXmldmLt1kkMOesyMlGJLYcyCJNwJ5tIn44zG%2B0OO8nEztjwCLp%2FrKasz2%2Bkbi%2FvXpvJoKMhjBbPU%2FiQM2Vu48uqV8CCoapvYarHjwX5ZhQ12Euj5ky3WoG2aRLiW%2FIEQbpEds2qp6ymkGI0PTm7HkG0xsqd%2BbEfZEqINuL8j3YSfhaG0TIi%2BypQJiZ82mjMBXbtqd6d9YH2owIkyw81jPCSyWXr9AvnOjYEnf%2Bk4iKWV6DypLRhf6VpTndanbXuO9tOEPqZ65nTEY1MrpP1U5oRbjDTmdXJBjqkAcqE7bX0RsEx52nBTmPVND5ajf0XtG6VboXvUam2e5ezQHJNEmT7PqOndrtfqXOJ6TLYas9Y10FGQpdOYb7dAJKP0O%2BFQOvTeisH852bOlbXxd%2B86mmNDtgc79XsmRYDvyKMxQaaLnxZBcRpmf50jWZSg6CquRg8mxWvPToTDDqm0PlEGH0yNNCSFqI4yQ9Vu5k%2BM8cr0wiUnxJ1jM2oOvZL3jJV&X-Amz-Signature=123dc27c7fbcd2045073eb68736db214f099ce7d556af41fc5364942b0facb1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

