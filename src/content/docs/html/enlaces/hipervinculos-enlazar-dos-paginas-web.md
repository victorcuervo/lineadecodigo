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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHZ63MOP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvvrzOPbSmf5KFOuTTf2yUD09FI5qozFxmjof8s3%2F%2BAQIgC2N0U9r0LNrzQOsiEag7tgWY1r%2FD79ig4p%2F1nMVzBucq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDC%2F8w3HS0aSY%2BSNBICrcAyVsnp4NP3ZE3stHl9a4M0JfUzCFzTFNneI4opTOPaf2bqJkXGdgs%2BopUCrf8VN9tq8OeYWaJIU9JHzVh2enqq0WZ6rXz63tM8I3C6gkYm818DvR%2BWi9qMfAoEky099fYuOyGRp1bww0he4pnouNSP7r0aJwhZeVJncSVJaR5C8n5IFVqWAAN155Vv3o29ROX2RKmQuJ7vyBtxsI6IDNIKuDgo2Nm8Z51gVW3QDDzVq6PEVXAqZOk6CyDjqs7nCAef%2FBzgbA6IBzMh3gNotAr5NU%2Ft2MRgTBY9haW80aqJjLmoklgpXz%2F%2BAuhLWQT9gZmXUCUzuwfqLcTy%2BF2reOebNC63LYNrgJWQXEX%2Fkk%2Fp9kQ3A2OeQKisvF1%2F8HKXKPdF2k0x8fBEYEHIyIS3j6ttps5NQTBQe7Gp3qsrtJiHcRQjOd9%2FVh7OteMMvrGMTfNci%2Bmc0TGETJs8ZCuJ4T7olXgN6E0Kz3m9cNaw%2Fk9CXJMfWEbUTP5Gf6wZrXduyn14jGfflsiFvOWO9hAR6J9Fqn3MP6tX6Tc5kAZSM%2FaRTvaLFbCSDcqbWQdNtUZF9nCAdsscbV9bl8I4kQzqSsB9VQknLOtfJeV7E%2Bu4BYnSMX4FiB%2BWMgkkaE8i%2FSMLGez8kGOqUBfBBQ%2B4wEt45O%2Begjelv3gYi0KYd9SxEAB%2F0g7mwjgyXvrmfbqbFBeIfyciMwp6414XN4LhuXIeKBXnHHWx7k1iMil3iTWo%2FncbefiOlWAoCHkx7tHCgT3TaI21k8E4jc6JGumjAyhnjAhqZwU1Rbv9JIJBJEdawQzf80vo4mA5FCM86Vix8FDE7jiUB7NkUV7waPG5a2C54z8VTJX7JI9AISqxQP&X-Amz-Signature=542338d289c9ce4f862b5bb7ee981f646ee0189c8f3f151c693cdb6be7eabca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

