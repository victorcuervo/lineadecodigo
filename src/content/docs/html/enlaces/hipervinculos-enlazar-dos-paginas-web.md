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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q3W6HCD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T151443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCS2y60iq%2FIx%2Fko9Emi9T885jmqquzco%2BBaZg5poy4TNAIgKgVCSr%2BRz4k4L%2BTQo8VY04hykRXkvRZhoy9Fs4YCeicqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9x2gKrIGpAg%2FbkQSrcAyS4AG45ovGae780nxUJQvokx%2B%2FNx1uPZM%2BnhDcjnoLtzsfmWpdxPmGRGdwUMrH4rfrJN2VAplSJ%2BeCL49szu2DhCJfmosIWfZvo2rk5Spm9zCaDycnTzpRTasC%2FOmyi0tAwUjlIRv7MECnevIPjboVw4Sja%2BN%2FAXYqcXk0Hj4I8h7KjZvha1X9vf55KfKnaCm8LaYjLnvmHeW8SRuX6e5cAfQCKVPKU3vY%2BfMFMHtajYgoQfHtYGp1bJ2CqeZ19idI9uKJUbPCB4IMqN7yrc%2Fw51dehAlDlyQRJoeWgqHzR5z4l%2B5xNvxMEC%2F5jyQR8PCr0ZhOvaFq61IB%2Fb6ckOWI0gzbinwK5MPh63HTZ1KuOkbu8hMW9346DOJ0Yk5Jp1PGWN9nhWT%2FDHucug3YVchj7XMMFrWY9NLOQCE6qaQoCd%2BorW3bdpbtKq4o0lZUacZ%2BbP%2BUFdUFkD5kHs%2FAldVggW6EiV5%2Fejg2FAPnv1zdtAlHDPbfXmHwzVCe048kiolLEW9Ee5t1IL%2BCpkbL9Exk3Y3z%2FX29BsMmlGiq6%2Fa8qN2T4JQyQ055nQcBhZLZavbjqJi96BQz7yJHs1EUfUjZI9M7JSg%2B5u7uhIKusD0vHUJhM33OIz3NB7kNEMI7B28kGOqUBSiZxLI%2FV8Dpjt5xV6pGVpt8UvJt3J1s%2F26Ps24FXb0Bs3iBgHJodzbRvMU6jRhRRWWIfduwXc2M4CEzExhGq7NhlPbZt4cV4RSJl4ZrKhJSk69OFME9LTa2%2BLU5Qx0k82e3CBZdn0XW1gQDCFCF4C8fCRhePQDNWYzoDox9FQvP8mxLnc9KJouOdPF8gdgfMt02EQ0M8Nci1PZpZd7oUnk043esj&X-Amz-Signature=6584b45f1b6f0b99dcccf62c103ba63b47800a775e0c0eb09349d6007742a7f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

