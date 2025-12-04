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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGFR6BLM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIAyqjHhJLmTzKM%2BIG4iUQOVo3YnNNyxo1VMltL2k82WpAiEAhHbysYzmgb0k3eY4OunbR0%2BqGV3AJQaTW%2FXnNGmpq9Uq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMYG6etW7FDjgfvkgCrcA9BKWu4rC7ZzdA6r5H%2Fasfcx4GUpJtjB%2Fq3AxN5auDgE09GPhaDmUjdpHfcSeUOSzb2ZABWnzxgxgurVgsNDv6%2F8jR5daXO%2Bbd5JPNgYnMq02JFVKQV5ChCgB12t%2BGlQHeqgX4esQtJ97H8wCFYV7GNOVzd9pqEys0OdVwaihYN2MnO9casxh%2BzwFuWUjU5bocSuf6%2BZiRXJZaOyQ%2FMi7ftHNMDZisrPz5jv0SmnXV9Q3fOQiiBxmHVcXLyqNvklHm02IdPuQL7Fy4v8KpX8MuehIi6281lzwuB%2BkiTAu6bRlRXvzRwaU%2FGfd0EPjcns2xolOflpoaeHSvIEZCFSu3AlI68AdrcT6RaoTJEf75koiZKfnKMa40y29LXMestEZa6mxt%2Fqx4pLu5oo6Y74KjhnYaoi01cDEagUPqaC1wFAYL8QsqWYCz2mPcBlxIHNGT6uz4nBBIM7Atmr7F8oFj2ohIEH3tLRcgZT02oif9cIkyf8DUJ56x9XxdmcQaGS6U9dz1Va18LjJUY4Z7%2FPal7Hh1v4BU%2Be7%2BIREUzpQNYjRMvYi7JK2qGEojaANoWhEF2CmzQrYWwMeje0%2Fus1sa4X7ZIZYhtJsIIKlBDI1inCIct3g4qtq%2BP2WTOhMOfTw8kGOqUBYoLdUD8t0rhiOoAVJFq6EfsIsBluIgQIcwkAeNznoc5XbXICkyBDA9jeLRQfB%2FD3rdYOuqeSuvA18KO3RdApttcWi7O9mMGPEaOl2tefj%2FC1za0GWUk0MODvPfG9YWu6L1Y4L%2FWEXzJsxARqLrHHbfrc%2Fz8w3c3fHTs%2BWNeSEUTq%2F7t4OCr2Lv8d21fSrzyrKQjD0jACev7hbpULdOYDpEO%2FK77T&X-Amz-Signature=31f5eb3f076b89a2464f6fc272176a4dfbcc85a368eba7502c6e2c8ab1b164f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

