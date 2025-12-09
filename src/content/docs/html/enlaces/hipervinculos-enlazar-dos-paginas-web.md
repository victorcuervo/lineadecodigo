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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QTHIO7I%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T071816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbFogFpHANaptgHSuZWXAEV688gQcd1wYS2zvqD4X1cQIhAPiNAfMHa3tYDmn23dwZyXvUvT8V9VXEHm9AryxDMbfMKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwa%2FXdSAsfgC7liBQIq3ANKjtdWiVfNJNkgrd2Q15BYOlznpwIWpBTYuBb%2FIOAyTBumH4eFtwLLkijlJaGBuXmqv0traYCMITvSbkfPCyOTqrb79SBOBH%2FQErnXSvS9jhDGZIAVNyumPT2Tv1evmfqB4FvvddZuZy7ULxtxPmzTGg9rqQUVRlrCwy05gq8K7C1kpv5g3pho5tckpE5yC4GTYXiJmsFOxtBwCvfag2Tn2FGOMoEvHXN%2Fza4LQOEtrtnKjfSIXnl%2B%2FPO6NjmGEt3hgnd8nSKhg7jt%2BQniFJbUzKiD6bBNpLNqcfhOzDoSmtmzi1OI1wogDWIF5m3rvDNYKybTHs7l4CMJO%2FV%2F17XzYX2c1OlUzMjMT%2FESTwKQRsuQSeb3qk%2BaeOzWencICEQEADwX1tZOKi%2BLD9WNe40p2GpC1633TQ86aHMUccq%2Fe7Si7yPDnUAYf8A%2B5ng%2FmionCIjaR6GlAJQY09QfgCN4C2LurjSESGk0%2FU%2Bc%2Fli1TRZWPKOPppMRQdZ7sEt47py4ONBF9%2B2p9hfyDkKzFr2W2VMyjGdXZqK4pkyjNPI%2F3bGHpq6BwHG1EMOyky2DW9b6RVnmEUjZBvUvXu5t7GWRCPtN4H8mNLye9bn0Kqu8dWu5m4jGrimBYDsrnDClh9%2FJBjqkAT3t1Rr%2F0b3dxyM2cg4EanNLC1SLlbzNkY8a0eWAMDwcKg6eCRfCFxw%2BGKEemt%2BmokI7%2BA95Uyc03Eo3yE%2F1TjVLBzKHUUUTt%2FGdbuMgTBg%2FC61O34oUNXxHQtVmI3a%2FN0iVVmj4%2BkHDmKL9MxAWFqNpziJ88kHxL%2BOkmhmPzdz2l2ZZGfs6l14NVH3scLT3%2F2O5OVutrstf%2BhzE29uEGeCJlCvj&X-Amz-Signature=4478ea1045f615543f6fda668dde03e19c7b90c67840106c549c9d4028d81d80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

