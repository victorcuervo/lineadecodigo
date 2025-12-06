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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WJ2CCCO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T151846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbJ9syMVdXs9kaBd8cr6RIN4%2BwGYvxd3i3ugRCOHseZQIgNqhZA80YXE97sVehOmqw9jUCzpNTJIB6yBvDG4TYin0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJ6gcmnf3TyYuMVOnCrcA%2BfGW6CZ%2Bm02cvZRQkOD5Pcysmrr6B51dwHNh82stj7T8%2FRXhJh4ojN4%2BGz876B1RlfwFKwbOClGByC%2FX93ju2%2FFuz7TW8IBEbdHxz8C%2Bh24CRUtgn%2BXuxnZ9ocpaefVYWx6DL5utWOtZUnOu3hCOKCOWTj3v7IfZskaC1%2Br3SICgoRRppzJQzkyHmuNn8lFibxDa9HkWffVO6z%2B%2FOM3V2Pg3SMGODTkf0ylfIc%2FcFKSbkR%2BcfJln3K2KhW4op1UqVrtHdHOYYXUDhf%2Fg7CLnJIFw5Iy9kUMJyRq7eeMnuzAJlskKsdcCU7HFqneY205Jm7vgVAtWqKEWXTeno%2BxXSay2FuMvNtJrNadXCqpGHsXohpYU0PdZ1DKLIThEcFrzueYfX%2B3CEnjAFusTOCDOAyMEBRoQELxsvxIAj86bTkh1Yh9WBzW73juD%2FmvaCMXz7dlxsuDhspFL5VvemyS8VWlZqA5KLvqhv5sWCLS%2BElmMLxVhpgkvTTt8gzwAZOVHQUGxn1wW5P77aZ73HdXccpO64kYKG1d1QqDjMepTrpvUpPpUi0HSO9E%2FiTDXutVGs7Q5njxLw0%2FWDVNMeMV%2FJ9AoVtjPmPI%2BD295HpAqYzNl%2BgBjfKMMvEkP%2Fi%2BMIOn0MkGOqUBTEKMi0zGaIgj5CxRhnB4D1unM%2F4iksEeIzB3Lc%2F4rX%2Bpbb3G8eN41RC3Bf7Oy8TFJclEnfrtMQscduxCtc4MXPlBMHMiGald6W9xCRsfGKbDiXfiTdhEv5xkZrGueUZfh4uiP%2BMKQAtTJmkymt48eDI3bH%2Bt%2Bc%2FKiAJeVaKtpD2UImD5GTjNoWoKQRSSXZV4ZOhneqMhPEdrUr4Rau8bbMJSt3vD&X-Amz-Signature=565c159bf0b384f4883eb9bacc127766cc98c726eea94b2704c9992c81886bd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

