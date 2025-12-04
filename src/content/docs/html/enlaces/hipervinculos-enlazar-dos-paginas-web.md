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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBOZ4PSJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDufAE6hQvf5MnOM3cCR%2BCX4nBf4v2YST%2FWh%2BGnB1jN5wIhAOC1MUW87sHqYsHNZCThypv11Dpstps3CNhSHGhtZpXsKv8DCEAQABoMNjM3NDIzMTgzODA1Igypa5ViNtfGJF%2BR0Ekq3AMZO8x0HKj3g1djv2Qa2NbeN9Bv7hk1FXFgBFReWVH54XpI1mw9P0RxtFNJfiRtQUWMIisFP9eMEP09KDcpgFXKpUbzY8AYbNAxaVMpSZraMiGw5iS0svbSWMxSdkxlk5%2BkTO8796hMWnruAwMbMI8ggCEmr4j7MDc7q6pw5W4KVHcXVNkq7t3da%2BaK26AU3s449Ntc5cGk6%2BaPSGV9uYSPxuHebsWHE6dvh1JyZWIXdaue5i9WLI%2BSr4yQsQN%2F4uPllDcRuVbouHw46fRr0RKTZRotoCG%2BGjr74zq3q7Va%2F8xjuK2SzaAfRQzxPaeq3B7qoxKhgBnXhZcqwdigTpGN%2Bga7qAThpr2kfOfHZbShQwHmWLZ5mViYKATFoiPZk2%2BXe%2BaUpuPBfT%2BbdsbjZgMPy7yt3oxoZU5P56sDo3Wq7YVXZKTMwS%2BTzt%2Fio8C6cVLMy0mtzwLf%2FWQzvj%2FuekU%2B0a%2BCkD%2FCKpb%2BV8hFahR8XLxyI%2FnVbQ7reFB6ZGevfV06bJvjn2%2FZ%2BE35lUSkPZQ1BbH0FzTyCzYExpNeKGlAearEVz4lMARwXiyU5QPu7ffWZjZdQ0yZB5xMYpBbRrKTwaMwl3JHlHX%2FSVjWwtKeHqdAdJVua00rJWMNWTDx6MTJBjqkAXTgZQkDN3BOafMQYPZX1j%2Bw1wNeOkcWSsvVRgccDEH9OSqny%2Fnb8un1cBULqnMF6xZHvIoCgXE0gtC0ot1qxGefXrYCL0QZlBopAH5eN6STr2839aY3i5tfBwWpRE69MxcQ1dKxUBbicf0SJ1j70miq72X%2B14nJGZakeibfph52trobpN%2Bwm9kA9bC9%2Flcivz7JZuwn3%2FX3AR9QT0%2BDW9xAeJUx&X-Amz-Signature=5aaba3676403b6fc6ac8b1ef1734a3ad5c5480ad0d0a835f9d8eb4d35cb50045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

