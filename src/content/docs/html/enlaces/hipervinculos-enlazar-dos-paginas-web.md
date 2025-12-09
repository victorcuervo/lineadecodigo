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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VVHVQZ3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T080359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqk5dL8ji%2BLqtU%2B5wGTEPAzxKHlwj93se%2F2ksDWff%2BIwIhAI8jrzriBRiHFkKHcNQOYgjr6u2Zfmb7ffXGUhnzRDT7KogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUNmg96PGZc09GI1Mq3AN%2FfZjKkZyjAUuPymz4Xe7t%2FkUmUqZebQb%2B0rcy3QzFhtRfIVe2nVboYfUfxPw4UFRQimyN1FkbD7JzVTBAZR1I3Ot%2FbHdEbKkWkDfUNkR2l%2FYpuPhYEH0Vc2E33UC42hxoP5221oBgpWc6rXlLnK8D53Sb0WKg9ShS0ZN%2FTSSUCY4rooGzz0x%2Fq30JEOkCU9oQTR4M1JiwDdkF7xfK%2BJaKH427ETxepVb2pn2TpoHwN1njHGV%2FEZsLwZ9xPAr%2BuKSlge%2FgJ7mcX%2FdB2rEhWHzO%2Fe3fNAW%2FwXUdPbhacpUy0JfYzsGIpyj9w%2BT9LjcJpcxWP7PdTkyx27HxUBGQ5ZsneQvR1fRzAJGb7mLG2ks3fNRFqQVqc45V7B%2B0BmuPIfbaqYf8nN4ALm9PrkBndS61XEKElgpS4xnwyvjkQpt8MqhNw%2BrSkUkzrTKGssjhdcR%2F%2Bvl2n49%2FPsmTi7kIR2OAG%2BdXgPX2ZKtYggiJBgC8uO3UZVpGdOKs9CmKziqCPyxj74yfQoRrLtZPImPpgXX1EuQENUrs6ESLtuk38jTv3pHHkhR6dgfDwn9a2KQnog81rt%2FvrNJ6iJ3SDVqcFji%2ByrK7eLuoMKW8cT0fDQIwCEw993PFJ3MGGD8ofTCfpN%2FJBjqkAQ6jd62lF5oM52TO5MLBlowjk4%2FgTXkl6F85%2BuDGVz8Kw%2Bsx%2Brdo9kRN9TIi3dvOCWf5xPieshRm%2FHWfvaPj1LYM6f8X3jz6s1QUMvUBsDrKefI1XDQXMUMnDzewxXuhunEFmQ4JS4nT48mT4TqisCLCJeDDMhAdDlfP1p%2B0nse0f3pd8fqH0oJmyDp23j5Ts5mNP6eVmZ1dq%2FK39VU%2BaeCaCkM1&X-Amz-Signature=7c86b6b04c95d3ba508bba9735a8f587e470621f941c3fc454b7eecfc547f525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

