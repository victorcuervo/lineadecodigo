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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ5DDEXS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQC6%2Bn6C4rJ0GnpG9kVRXEIhuqZFQh4o%2FjgS%2BeYvebxq%2BgIhAPPdVxz84PuLTkBc%2B24F7ZqxqjiEYL4wBE3cmgu9c11sKv8DCEYQABoMNjM3NDIzMTgzODA1IgzTDpqsXaXXmAYefkkq3APqT3yCrIB9zkKXbSD9KBafTkyb%2BKRyD8vulN8A858tZofANtaLBFuxBqN4bVBKcLKvtHP6qazt%2FION2ADzB%2FdE3aqTNkEZuQolisF92siMGobDjOKl2EnaYWZJm%2FoxPL6rXjxEF%2BtzaGtIZm2qg1F%2FJ0gwCnQ3Xnor3ibSNaMt6VX8XpwRG6SDPe7i%2FXSy49cuL8SAEJrlaxznPfcYhnvpGYTcgXPwL2RTwtAxPJLlu5kezLj3sXioM5htHcJF0FtNTkhRP5KzwCrl76tjhnchptRklFh8VCKmNhvCdhM%2Fipa%2Bps0y0YkfvrgnMpVkwHkUd%2Fu%2FfRTLJPE6nG7hfPjz7KXvUvZFN3VXtC%2FFSzb839zIGxerOQXyv1%2FAeCfY5hxcV0AKht7jzV4MysAaQWVIf8F7QU1kBk7nchzEIaEaKiedMbJKxKUesYmuU9%2FYa8ZC%2FSdD%2FtWzrkGo6eyhE%2F5oy5sNUTXOGbRY9aW81NSLmoTpcdbENIsXxAcuKNDUGShNNJSUa97fRXMslXwjNIlmlOspbpdjbTIUxhrWaZ4iRVeOIp7Ugv4afH4LfLULwvxHcK2QkfbNuJGmSeMOi1qN%2FjafDPTe9A3bGU4vZZ7XliFe1%2BCctV4oeRiJEjDDhMbJBjqkAUpenQu10MKMXHkFCd1WllR8vj8BNBYC1%2FP744a5pPjfwhFRPatTUs5jrUJ%2Fo%2FPtUI13DaFlxmuSw%2BQVHbizMWo8pqp%2B145%2FsuxA1fyacuDL4GWeb5GJNfLTIawOKKIpgICpBVjPYP9J%2F7K7ivnmRi0gdBMVzi8oyzQKfd080RDl6o3hQeM5s89NBIs6lFzFo5C84dsuRMTbPuWj3HJa4IkSstVx&X-Amz-Signature=cedc59779ed74cedc3ced7e379118dd2d7e5cbdd6bc49a01bd01530b48d63837&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

