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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636GPGOQ5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T123858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDunTKB0Opp0b3Pe4TbJ54pz05U4jbprWfZg0%2FFY9t1iAiEApJ936b6PunSCuFvlCamCLyYuJtMfs%2FWGIZRCAEf0jy4q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDBLK%2BglIiNqtdUzGHircAzQReN1SqHQJ5OFfp%2Fv0c5QA8yKqhzlXtcr1dPXYbb5luffzwn6eWeD6IdOG%2BuW99yuGBHtIAMeOZHkIOzkF4rQxTuJoMGgnWpRAFNGYY5WDCDoJ%2BlYJjmFdJfyPwoNqMPk2KFPHnlb9wbiLvFPBq4pBu63qKQVPvAV0zIbNnLFzj48Bus7qBHesjrO6hFIurjBechEoacg2glGM8UtFndtavNueZSP5AwbpVc%2BCH0o7XgCM6K8P3gbV3PaAC8uFyHWNgjWhkX%2FKv%2B1k4gVjGg8W64T877LrvTfiNzlbBq6MfwFviz3DUZnBDmkcVtRTxyyvYDng%2FvQgCaQwwUoE9iUsRURfvMZVNrEW34oP5e92N78fIQBkCKKfKF%2BMEbSOh%2FX1nGo%2FpBdfOxK67w%2BSuWpK9cZ8xHvSkbrPCbx14p6TpVhfHXNOFLlzKJK36MqiiaatWZSsBSSU%2BBrr5Xxd%2FLmaiy1N1Tws%2B8PO61csUP6Zn4p73cgCbG%2BAtM%2FzzttJ8I%2Bb3z1ULip%2BuaKo2uiFKIxzCOZgY4SI4rrgmU3lkGplZNgFmouXTvy37spju3f5m3kaTElkcfFtIaZxJWcQgezT7pgQjIBa160FHG4ACLfLxgnNS0KdoYqwCZ1IMODWyskGOqUBjnMszIXHWn4myYYsibJP1J%2F3YAaV251outSuoHJG1xZ%2BwqI3CkaH2ciNaxXgvWcMrP5ruuujXpIKsByEvH2js6PS3%2BtRBibCeI0rjZAN1IpoBNyt7%2BJEwEX13po%2Bo%2BMy7fO34ojJvvtNw2MLoRbEzl7WcFS9O0Xfl9NkUEoKku0QZCDrclwQqXCRXhveIFdEtK0EmJT6%2FP8IEdPbfXA2REi2Mvto&X-Amz-Signature=c938dd6319775e90f498505def954b14513935d6562ddcf922cc881fe3b9e579&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

