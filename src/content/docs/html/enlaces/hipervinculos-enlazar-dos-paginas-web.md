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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2XR6R3T%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T232629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl9HIpP%2Fyn8cyRgBTHUHRT2ZHZ11nlbh%2F5XeRB1JSqhgIhAKpzY65ufY0zpR0mlPyc92zWnAiVYNWGfPW0JE%2B%2ByJiiKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAbel0XxDnEFIJq6Eq3ANUyhz%2BjaA7gXdMegYuWt%2F4QZG9GYdq7imZ52F3dsv%2F44VPboJSMV%2FTgzpeuCaJ3DdZte7IIfOML9bD5tYZsPtP%2F8zDaLs2ZkATTLketwbrE1uBpUwn462CGt1WIIUyPgexx10pTI7cyF%2B15bbnATejUy5TFLYfoelZxvp38P2qx%2FVRyjbAjLZcyl6TlwDvqWvgcCNuVtDJc0m8HR6VrdW1MmvT%2Bpd3Ok1%2FhuLJrWpStAukMADyRGq6GwTNpWOcvdvBk6U8cCZi4q3%2F3pb0GzuOrYsw9H85%2Fv9Pjn6r4NWM4NyKZvquLgfooLr2s0p2eRjYbejxeW58B%2FrSeuXrJhY09oP0nr6sgx1NMnhGYmTmhIPWzxQg3T5TqC9fMAIxpX29XuGrQwLSgTyRi68lUCOtt9bUBR9dB5IXAJ8CJ3Ie%2FdA8beUk2I6qDNe0oyKFgPbNxFUwMtFNP7yh8oC%2Bhuc3HVY4VCAL%2FbTJXPjGCABm8UK6LxxAMo5nAZ1vkcyXED2RhD2E0N4LNe2jjRtSQQydzkg2rkevVTcI%2FKhR6BeIt1OeBDAWVRwUNg6artSifdx5cWGz%2B3O24bvwPpkUIZiWipUr0nwffQpBUf3YRXSuk7Wv58jgr52HkbOpLDDQyOLJBjqkAcbDp1odBgFPfmyknpUnv0Fp7%2FMQi2D7Zqs%2Fiy88c0wpOTwYP%2BaWDk3aHH50YKwLd8Flw%2B89XQsGi8TG%2F82K3pTICcVg4Xr453UUuWDMRHYRq90YdmsajhLWE1fSLUUFlytq%2FqKfkuPnSnj2ghBHBIp2kWM0aNxTpGH0a6LFFIg8tf8lDZIRj%2FZZ%2BZnveF2lg42ECN0A2dOB3PZ3IsGsVZrEvEcR&X-Amz-Signature=3a2d50453413082ab99e1fff60e35f7546c47df9f8afa72649b32d7fe64baf26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

