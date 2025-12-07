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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWKKH7LU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtkDWkSQTzvU27KW0Op%2FpP9cY8pvKB9sNFE9s%2F3041EAiEAqBZIEbUy3i4yJl9CIhyaZESPJH6LdKKiXzW6jMKTYdEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FsN%2BG%2BnINdXeP81CrcA48QzZFKT5hzdYyCdEAMNNUN3JfGoDjrCYUbxqeS4yAwtldkANhaKILyezd%2BqT%2BWqzeYsD6qHCIm%2F9pahghO15SL%2BWR%2BdlPm0Vn9ku1IIrXdqQOHL79W0xTSesqwQ0cdXLYgUEmz2i741RxGF%2FSwfntPGa8A8tjN3F20yshJB0gVSpUBmXEO3XMyWBxg8szoGMvDtXH7dYI8butmp5J9MtGEI81p0qbvofz%2F0MAh7lqzfZji0IxKY4KC7CfBv9gEtGFHVSSpBhp0FNVx48NFS2gHBp8JWqCSsHxO0e%2F8VDw8OLZVSyTbr8ssUkxu3oFs3eDbnKjPr9KMPoXjd8aj0E6fEYaD%2FrRHdeWBf2ZLRkpK38PqvRsE2F3AXbzI6%2B1uQdymxxm8zTA7QtTFLu6CUqSH9OjHhiCTx23nDw7N5lxFotdYP%2FiixGjCRuMXaQAaFEr2xYIAxj8usqkM%2F4uMIimOvVfHgJpd5u1XDyWHhlgUGWeKmsg%2BNwdgpDz4tLJxUP5q3r1GumOTJ5NVekm0mFfdyNnkdQFowZM0Hix%2FalmOIbGHgVZrrrKCKwjJIpawiLBJ4acQ1tEQI%2FRk%2BsNWzkYLrNkuhq92WcydcEAgwjP6fh%2FGY96PvhukdHWSMI%2F90skGOqUB5aU9Z7xgN28hVrHDkxHvrBUitwfoQspaJWRuCfban9nasB7YP04EN7BJgBxbaD%2BOB8vdWxVvhYjVHDpKVccOCPYm52XIykk8XQE1JARpw4CGaKV5HkZo%2FUetA%2F0wqZ5e%2BYpuQ0%2B%2FjHfTxDzZ0fmXqLxrRqko8oOzYr2haMAumYvOWq6cww8Fodetd%2Fa44TqD5%2FJuQ0Dn0XITbSEGuX%2BjzFOWc475&X-Amz-Signature=866d721546e460e1d6a22d1384afb6b94eeccc0cb21081105dac8216aad99f7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

