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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNXKTUWX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T172915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYUwYxTMBXxTRLXYaK04jPmiMHE4IsGvW%2FhPJmjUrltwIhAI2gm7akaA3RMk75lLbxwj7nlvocoBwfajxZmYdKAh1BKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFn4Tp1SKvSikssn8q3APOF0PHkzNKquj0ML1B1zJKrBzLEJcseaCCWXP1tsR7lUT24Js8gbcfeukvtqUI9%2Fvl5CwpITH0CtzIYXvVi5%2FDotnEdy6pPrQcDzbM90lcvIWtDyyOvKZs6JTqdopSJaau%2F%2F1VRPGqugySIkOijAI9WlyKQ5HSzXek2sm9O0D0bUqWhILYj2hs5a%2Fa3qCOF3Fd%2FxhLERIiEsmH0vkKgigIniMPVz%2FWSaygOETI7n073jQ%2BM5gB9tlDwUWgd9aa0FgKjhpF34KuzbUwvKwawg9GI905yBx04RzkEjtm%2Fbb%2BpvQUOiNAsYpHtwUGosQeofR24rZ9n%2Fez0mP3XharTM92tqbSOr6L4GKsd7fxbX5C6MbTsllxmhVz3Th9LXS5OeO5Q0ddm3bGx2WSYo508nKzryPaPV8MNCC%2FmIhGVmwRX4%2FNi5nEQdaUsTT%2B0SgX2RKWlPkFwjZjO0Xn7FX1EEvK1Cx2Wwx1OPdrhyfIgIqcIOt8glrnD7WOJvT8MtVnxR4DW%2Fhc%2F%2F3SXBxVXNWu0dBRIaxA8z%2FlcdoIqxnEoBVqM6JdFbaeeTbIg2f7GxO8EdQdRc5gNXI42iLs7cXN%2Bsy9%2B8XcULAmSQUwJhZD8STUM62HqUSLGUBHCcFRgjC8l%2BHJBjqkAfm%2FyTx6zMrM86eqdzJrGLXPGlao5T1xTkjhuRIdXc%2BiiklbK6f%2BssmFOrpnu0CMGn1%2F0%2B8xpKA%2FgoczAdrQBnuLg%2BHhgH1AckYEz5NoCbjk2bpqt9EN4H%2B1U4Hi3v82VNKvL4OpfVxoztkipHfViaJ9zFU%2FJQSLOjNC6vN5yavn7hpwiRQin1yLELThRllHZQjzBwegzve5ZEYsozhoQng%2B3%2FB%2F&X-Amz-Signature=95e249d0418115be13f2e2668efc10ded522dc0a003fab496bb2f0aa9c6324b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

