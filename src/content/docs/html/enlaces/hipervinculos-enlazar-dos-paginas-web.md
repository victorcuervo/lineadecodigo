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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NAOSTMG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T164030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqieL8vQ9vMfA0jQIbbbAJGsBPi%2FsuaoK7QKwt9oMp5AIhALmEM6pLiwjkGtbRoWYiL1KxDa69LGkOFjxuC25rp13UKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrQKn4dmFvrv9MwXQq3AMBuFJjJyBgFbB%2BkbQQcft2NmpfBvKfWFN%2FyRYXPRb5dYmYQOQ8GQQZyrdhjxcWwLzez1eS07yGp6xXyCLsLW97G%2BE2Jtco8F%2FJyfPsxOBQ9br%2FFrTNFpKL%2FO23qzHy%2BVxOIbJ4kuGiVkJDU%2Fic4K1tyDtvoJD0kMNZbKCIhGMfScQcT%2FKqK%2Bk%2BCiXpZ0%2F8RLzg7iQBP3WAUHHD0SH8Y0xume9WdIjN2icOxoAc8oG17JMjoa4R927QLftT2BIFkQ8wLhuNIcO9ixEDfrFTamYRF3FF8Jh3FUwEMjq3L79BOJG1vu0IZ%2FoLhev%2BIDbgSbaa8gANxO%2F%2BCKyjCfGgMSImlEj7RBfk3d8vj0aQau4i9o8xKjp0cFL8D4K4zvr5s%2BBkKaCmxxFzA7Z8VfRCVpO2yJwmYw%2BD6I9og767T%2FH0UszYtc%2Bq5%2ByKvZonn3AgNY8gnuuUoLzeZsfJ9vOw1B9LxWZAamzkgdt%2FdxPpqcOVg7MgFPx2haksxOXXBdnSC6yXedJ7O%2FJ0UbrJDwSm0W1oJPQqgdgZGndzS3wKLxkENfE0v40iEYFARBdNV%2FIJgfklOI47jJVgzFyenNZCDN%2B7pHY3x8a9akb0Hy4gMEcF20Z7%2FGkE8ccZ4rbVUTDkvtbJBjqkAVnmgTuH%2FWBc5hUXnHXkNSHA3eVq3HtneG4rlHQgsRC7KEw0HFFGCm%2BnGHxELW%2FFwygy3fQ%2F%2FLaNJrF9GWUnXwp%2B3lxNW4DJ9Jn8I8dneKJkQghE%2FJbrf%2FuLO21fEHKa%2FlUsVY2wdJ0S%2BSraylJE5o6csWoR4b5HH1WLMh1ZVTQnfRQepewsJQJhLdjqxvGfRrJoujZSNrbwNuNXyCOPy6KLsDV9&X-Amz-Signature=0e32b599d82e9ca8ac82e028b9f04e84053a8e4ca63531dc7261bcb20d1bfaac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

