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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM6ZV76P%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T161757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBGgOkF9QdxIsaRLlldRAFJeyfgziBrmZKQxKDlBnSrAiBMtUaXUnaKbeLw5f%2BQb4SmjLnDKW%2BgtqEPa9KG3TO%2F7CqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2jM4H%2BPh6EMWlcDkKtwDIf4kAYpa0JrCIlEaXXgMyhUSVSTPpH3ClhdgR1ajeVytN5mcQ8SOcykpwr44ynNC%2Bw5FP63auj1yo521dSJMIpNxjxHWwsVNNKfdMD%2BEJqKT4QydzBibsp7595yvA621ZzSvDWSdxd0OZIe3qgfEJQPlB2dk01nBXFFjE7pN4DT4qRqLxlLdxVrMSZnDgecMfm6yzlz03t4tNqLQEvhZCj7%2BZxVVU%2BvQwzph%2B0YUwr1UjDqk6L9upTijrrxOypuZC84ERhi5BgEwZSngeJ3rN%2FYmxVnV%2F9ntdCi8cvHpMMyF%2FvBCh%2BIJ4ykv68KLR7GtmMsjuieh3JfFJw5F9FnpA%2Flii2hm0i1QwaTl0SmWjqJDQ91kpyQSuW31%2BV2jfSz2vqJKFPJgHHZYPyNH1MSK1KgH6Jg0RoCvO7gDZVs8g%2B%2BwLF42ucIk7Y0FukvGWDiV9PK%2FgHdJ2k8Y79QU0mfLwWS5uERGGesnSbQ10JousKuVD2%2FLUU2QeMQpi9KlFciPxkwL1LAqGhw6pNtTZwvDVDYFqS8hD%2BNyT6VnrMwwN9TfkAlY04EOefSZHrWGQj0yAuORh36WDCi38IjfBcZUxpwy7HMeM4Gah7h06f99WANbW2nMh45S7Q0NNZowxdzgyQY6pgHRYgh8YMzKxWCHuhEzLNDoajJgTuMiG5x%2B%2Fk0y%2BO2pC3A38phyzIC2EPfVj76Z1UqJ6hkz6wSSxnu287G4UzQzvh8CM8gdPt1frfvxsJAk%2FiHyRnjmPyWazPayB10aTwl3vgScARmL6r7N0G4iATzGVzxZdl8yYkbjorSvzauhun6BA75PxwJVTg7%2BDA9XIM4I%2Fa5xjM4V5BI31zWacQnkvm7LAPM7&X-Amz-Signature=911df2cf00c4f51a0852312c9441382050949861990a7f7266bc8c5342a90ce6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

