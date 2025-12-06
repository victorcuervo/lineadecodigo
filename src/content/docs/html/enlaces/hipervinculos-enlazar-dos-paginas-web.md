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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH4OJYOJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6LVDFrL8Gs7B1C%2BGuETBI7Zu180rJZYNuthx2db%2FJugIgCp%2BVHXYkhBG9YD2VmCNYDnPAyvf%2FWpZ0eZ%2FSjrAhHVQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDM84R%2BkfkhMimMASwCrcA9eSbDcTn3RDu7JBGmTlw1Ww05MI%2Fak9P1W7o2ua68%2B%2F0nFRFjWyBAGpJTea41CEaU0EdOp3cJLpQnugzFM0u%2B6qJmRbBl2Jp0UNBTD6TigoheHIg6d%2FvqHVE52zA%2BkC5pGi%2BaiJ2yU8ohryHFySntzrsyXCH2Pho%2B7W0Xh%2BsUUxHI6C6d0jUg11epxPKReTiAhztsJvPrrDe48SIbDLyggOCyU%2FZ2gt6mGqos9NgJDXXDqeFZ%2B46DQGQu55bz%2BkzrmsUXmXLWqVA7%2BBHrX0IpSse2%2B5PH17DH%2FfWHt10saGpcZNVJH%2B5zXYYlyGQ8Pz1QNVSbdvp41pf%2FtDYuJkIOLU4suuTXRCeXbE6CIQE%2FQnMK1Bk8fF6eIj1mvZ5dqupu1avmC9cQDHWFGSdu8NBP%2BJcva%2FT9VMcRlOCOkJ7pc7xvM7v8uHx2WO9msRwZmY35XnUTHErIwcST1YCrqWuovl8xTLynWSCspVnsChIFw0AJUznmehVcY20GQV6UKs%2Ft6WZ8D9TUCrLMZJ6npAzkfVA%2BAJN%2B7atLJnQBsGrwjvo59GdBoGWgNmbpkuFwJzcYA7p10NQvZSyBaxrx%2BVDJFHWxGhBooayXpFkEheyBWQX5LYzXhrPOtv3FPDMOj8zskGOqUBBE3CSakhDPczkmOjr8eFM1Mb0ME1BQNEoif0pXZZ4Cd%2Br92k%2FkHCc7RKKOgrM2ccQge%2FVwfflYIRdDn1kTfGWaqeUkOw%2FcCXWgNxSrCW9xNAijNkIcT2ZEQ1ItSGSPHQfXiBUjMWAO6iPf0m5JOcAsBOQ1ywzcgxYjCcSftA8UT5ZhZI5PBi5u808ztgORUgrsauwEf%2FEyqd46p9CwUVZOjaLq3S&X-Amz-Signature=5a850ae94060f675702625c1724397161441ff0c6db9c2d6403d77789d4b4c0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

