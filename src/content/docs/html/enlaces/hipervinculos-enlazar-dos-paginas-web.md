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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SELGC6B%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T210528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdefuC6it2%2B36rFY5ZBbAXvd5mA6YAta%2F1HNoqmRlR%2BQIhAIlJ7vFB%2B%2FVrk8ia2YadgnM7LgMIU3hxU5nXqkkvpYcfKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMQEIpZU3qW%2B1ijo0q3ANyyqaaCdB2G1dFopQbTGMBepeJ8WuyigLLkWqRof%2FllrMUgkBxMoTKj0k%2Br9wGoLMoRAzwUvAywFfIuKyAmBiBZOetTBSE2%2FdWQdJofCVlopr1GNbiTsvuSpLExY57qghOfXtE5V5CklvwHi7PxSnXGDkmOhS89lHdGheZ5vBj8BXnsjZjmagAomuAJYvMbLqOKKSdcRVWzUFVWUrz6fVjV3p2fmyJMR%2BW3fbjHyob%2BxgGApvgwEMptJEbq5gHTKVVn23MTAtPItFilWW99Vl9uH7WKwotrDqE9XiKZUwA0RyfThgp%2Fb6QLBwt9ks6wVHp6qZ7PG053j6uAAr%2FOLghpuJc%2BrQFU2yOy5R60ngOUOQksTmY7wlPRZMAG44w4b7wjFljfgg7LnCOcW%2B3pPdOdiGjR6ALd8l35ETXrJ1aucv7TG6%2FHb1JWG6Q1arn6hLEYPWRzzb6SBLT8cTIfSfQjI6G8uMZS6G6PHggtnJwyDbMIvTLSJGseYkRrD06gNi5dlLmRPtyvEJhW%2F3H%2FrsMHEcEEkmCFB4WldCzEWx1d0JZo%2FeC4rgTlKpy7nNWDHOITiqw1QjJ0VdOsABW9HNLuW6mZZFchiuT7mRC%2FAifJc2Fkzfdjq2Cm89%2BPzCP%2F%2BHJBjqkAT%2F874hI%2B%2Fsv4JqbymlW%2B2%2B8cGz7ZWPvAlzzhzRWNugqLC7axIDMHuAOfndSMC5ZqqAe9X%2Fj260S5D0hCRpM8%2B8%2F6scAnIP%2FVdpO%2FRmvPJBBNHcWger68MXcEp%2FSbUyk4ZS5ZSCc5oQPd0JrIg%2FZDYNGIjoD6p6F3MgwheOnoHRkhe%2FXNl3T8jz%2FDuMDPm6y4H4%2FtFlgxUqke%2FLWmRPfE3bcrVYi&X-Amz-Signature=0c817a2782ff61fd8087dcb6b45d42f7c0c0cb5dcf551efeef41134b90340e0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

