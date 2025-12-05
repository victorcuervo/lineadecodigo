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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHS53RGR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T191400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEF%2FEPIiIA6sbQCIno5F56FgJNSRTS03XkBPpMF9nroTAiBpmQ%2Bt4tkOkvac6guQA9VKeGG0Zc2Aflnd4zyaD18QACr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM1Xzvk7wzTYo0P%2FURKtwD1vCpyHjJxSEYWopaZ4BJWbRpg0qh9lhirziR5WzoOz1gOg23UMQT5RwPhgGaTA26bQlpq40LBUVE7SJdmw1vvZi8Yk6MvU3SoBTiKAJ5z54EiDqxH3VDQ00fAOwajqoWZSrLj9MYQDTDTMDXlD1Qq6UMoyheqb%2Fk5NziEXY5B6v7cF88aB92AIWe47oI5CgM1d1H18hj%2Fav6J8hfsb00ogej7Y1MpMWpTHWU8dSaNdwK%2FTaLtFQaizEdhC5akadfhjughPRP8MyQGIRdb9zfqZ5QCu33rxheW2x75N7dpQar%2BEANchr9GR9Bwd7GtCt5W1ETE0goQqz16SdEdGyRUsnV0zT3bbLzmyOQ6JsXKCJ5OYtX5lxK8sFaVasvbI2UZFboF1W0blbsmvQNGVyiKXo7Cjv99jqo4c%2FaA%2FJHAax0t2yxriZFdNsENOcGmVCv4HbJu0mwdAw9h2fb%2FTpvtAe2s3UAi%2F2Tfep6piQSDJegIBDsTmLFAl8FXul1DXB9%2BvLBzaZ75xjGvjcvcTlT3BlnqEk%2FUgZ1omHv%2FOw8mLuj%2FTlXZ8yF0yvwBrNdUWrc32txEvlVkVfuQo6on%2B51Ni9Rtf7EaYSdaSG3y6gQejvRhQpsw7lxiMEPW4ownOvLyQY6pgFWyjQqKhyGz1ErQayGiZbZ5rKbPA6pwmBc8cSVAl3sHBgSIbOG%2FKj4y7uARwvbnown40%2FoeNHFSXkibqV1eZ6gPw%2FSDrxRx6hGKeP1ZaAhtoagDkBBx%2FecZmoQOFf6QZupjSbg9XVMC15%2B4H9%2FqNd6Mm%2FM5KL7m5u9YReZFs3FYz%2Bo3%2FM5QVkPP7G7%2BjVPmHg5irg5Yvb26YcP4ba0DRJwkxH3bwaZ&X-Amz-Signature=174c980c27dcdb9b4a4bcd1bd17ce900c30ea32b70d7f6857b7cf9da08a16ff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

