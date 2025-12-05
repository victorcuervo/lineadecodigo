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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBXSLAUX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T072614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8b4pnZ402GOvT2MOEhNBnntgPExoFHe8iRrYDMI5eSAiEAuYS7kdbOEayZ4JK0dVkL9Vvnrix6GpGPeTeWi5bbDOAq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDHi1tbhW%2B0qWP3xgnSrcAxpdlDYRzvciSRi%2FNbLArmHtW7qVojqjr6b0Qf1thAm3GdX7AE0oq5%2FNTflMTq9PR6YOc%2FH8TRBnj%2BD0mXXnYURyJLFFnEvcsQiyYq5dU0vMYhRyCwJTfoqitUTdua7bFfNEUnpJY0iaB9h%2BzKxyOTofXtkUmBkdmpQIwQ5lZumeeuJl8cTPBFttX5YKNBjzZaxsWCeU1e4HErZm%2B%2FBpzCXIoJG5N5%2BuL6e492tYiHthw4SJvhdP12jSZNsY5CqJRP2oWwNkW3N2bFwpxhY5phbrsh9HWWTY3pffRo6GTbx5wsf5VmwETr%2Bg4TF%2FXjf4DzOcgQpvMJs27EwlXYUYQFFYhbb7CDMDlRa5q33CuV55oOuo39L1MVmd1yShVN0nrd%2Futa%2F5vRXzL8UXT4g%2FZdXrdZ4hZUFmtKT9doqKil4N0xZ4mN1u0kqAL5u%2BGIusYIRL5SUovN8WTwbHjfKUWpFTjabvodM%2BP%2F5KnLvcFZxL%2BkRz%2Fb%2F1mlgZGzf4dZGnH38bWx6LjCH94faD7IBDEhxle9ak2gFyjaOpSeME0qMlvMl0TsoGdCHGMUwJOH46zRTzxDcL5Atwb1vkij43k9y5dSThjdThC7abOJ83UY4twKZHxMfyexlTvhuSMKiryckGOqUBLX6jC4D5pd%2Bovu%2FUQ2uIhyEigumnkvvX8w7SVbXmqv9ZZPGjuKaczhhofNA1lcPRB5o3Z%2FUvjbHeINjxFOTtJCdz%2FBCaenn%2BlBysSeAsUYy%2BAkbKxsbQLNopqvLDXBBAMXZt%2FsKttlGuNz6nzTHyjzGG%2BbgNC2io%2FzPqP8KMrMviyEnbaLlPJi2ytPY9ywEPqnsSAadrXf69QtPhwSoF%2B348T6Ff&X-Amz-Signature=5303925371b94993fc4c3c48f1e44dd7d1fe8ea12e3c153c2fc7fb9377a7c413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

