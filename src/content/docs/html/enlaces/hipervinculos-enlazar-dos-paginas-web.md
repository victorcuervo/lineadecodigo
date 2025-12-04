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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKZS5XKU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T014828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIBFJaNJ3UZps1IVmoi8e1e%2FTK0oQ9U2BuNt5hdDKkQl4AiB0jk%2FBEndapavUNkynK%2BJ8Bsjdp0WtOG0YN%2FOwOiPmZCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMFUL2r31wqq7P%2BPWhKtwDLsITHsMQGeR0SVFnREcHUJIMP65pu0fKFlCk9FjnSdIjkj4EFmXIno0qErXP%2FRC%2FbljpBiunnNWGED8KanhPlcxEoS4koTtIwWWUBJfn9yBh%2BtYx%2Byx9D14RN9wNaEUYhh2oGtwgDmQw7ydMca2%2F0rDlZw5hWiRI%2BTrv8hUqFEPCp8WPESwYGCoUU1rI2SK0J4y621joBlysCcJhjy7XGZoPzzNdN9TwJqWTRfO6VPCj7h4jSn2kncWWB%2FI%2BedcMnF%2BvuMpkUzQux9E6ovGbada2O0WZSGUBLfhxS7t6UPVGrySL9a2wkgtIBC721OY66LryGhk1octk7tKZjQhi8Y1%2FgKHKdQVFzDhNitKFFauvD8ypF%2BwS21okc79pwKyUKq1PQL4fF58s47%2BNIu6EFEfMUG5oh6w8cRy%2B3cqPMAuJ95UqMzZH8HfRQtLdHt1SC0FeD9Ba39gwt794GeyFqRNyLL7JSSNU26FaAjaJkONr%2BjZTTKTEtHQoPCbtkTTfSv6mrTSllQXmapdkUteINvYKHMnbMhkggsU3LyCdVL1IBmECs9ovufywhcYtt3i37oIPQko36dWordfgwOE7ltv4roCxr98b1BWZ0ZHmaYDYjDYkwvrQCW%2FJtAswlbTDyQY6pgEbaYY%2FyvokBZB%2B%2FwgNLtdU%2BYt9J4BKkVdpT5W4UhVu5591C7i8Q1qpg1FeGORHiJ1jIDrfD1%2FansVUjZ7oxoY3DBTEmvpp7YLn%2B9yToi9%2FdpoNawrD2NUAfdzlk3s8d5KLD2cLrFxKsuSBVVAVipUMMGB4ruxeEx4IWI42AKQemI%2FvYcKs7enZjfH5HeqPpOJEScoEG68L8D1Hs96EF9TThQtoQdfW&X-Amz-Signature=e104d28333001f96525c791935f150e0d77ae1f3a2029d7a8b04d5cf4f47047d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

