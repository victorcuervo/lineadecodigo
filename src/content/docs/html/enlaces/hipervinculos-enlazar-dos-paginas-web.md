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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U3OBWDA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIIGW%2BCLQQOanDhodDef8TXvBhr1w%2BTbUMq5pyrmp0jAiB%2FrRaqIdv0%2FNWtq1J21m%2BZAx5AUqDjY0yhjgxrk3sHciqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKr7qgUl7Nt4sbXe2KtwD6EqOxaYhfV8O4UPFFmPaEG3SdE0J%2BdPkLQb%2FDUAV7xZLn7dcs81nKAp1Wo7iBeii48uZ4MjBVJrM1v9oOvrWrwTN%2FA1ifbZtxjI6KSb4YEOGhU%2B7yT5i6OLrNLB5rQjsJcIKflTtch%2BIzQiE3%2FbVgAJHHa5LXgb24YY%2BWd6ZKp0yvvpFavaspxZ8j08aJfpxlBI%2FWUaLzZxCojbMKP1n67u%2FSpixg9ih%2BZh%2BhkDwfmwOPXC6SFeWZLv1gHmsDa0PclBZmFBWmxfY1EYhgQrBbzMUzGK21V2OyjwfWaq1FtK%2FEays8gXIWfv%2FZ%2FHyx8GSHIHgtasS7Z5U4kzv6rkWI70%2FIjbIrgoktDy7lojZm56h%2Fu8O7K3P5lWlYxb%2BDPe%2BgKbsWk9vWVOg7j7cRX9MqM%2Fp109CiWl2DepYxpjanSh3uwD%2F0fzdBlYEYu6Nfdm%2FsVxLTKxFdiTAeCqZ36UAXes2kBtKNhOU%2BOtghudD22veI6T2qV1rJJKZb5i9h3%2BuVtaYBW8U33MnVfX%2FZgWN3XxuvDxrZ%2F8mS4dAhorFpmMqN2AmGT1DrksRTNISAXtsLuPPCebIxRRL5CtXkFUuHE8bkjmemDujgR%2FCCiBVzHqri6fLUOrw%2FgIV3Fkw747eyQY6pgHREwLhIuSE%2BSThN7mjB0r%2F828Gv%2F43j5pwFkTfgcnEk%2Bl8h4YSJ2yEmHS9XjFKJSaHiYkIdCWP8uVdBVMn9BDHR3xZED2pED%2B3yDNDCyQxzSGu6sH%2FbSQhA6PuyK8Wi376meh1vBah%2F5OXVRgkpgxmC%2BmHgFOsf3GyYUT%2FjEZ%2BSk%2BmCfE8pvE0TVNneEeO1I736J4ONxxJdHb%2BSXufdRybuicZYb9U&X-Amz-Signature=72818621aad059487d7d65adc853e0ce09ca00420082d72e61dc39dd8733abd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

