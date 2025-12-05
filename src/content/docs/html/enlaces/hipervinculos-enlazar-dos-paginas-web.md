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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCRFJE3N%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T065757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBsEyI6Wo3OSqgi8HCGteteMoMFKTmRSV5LPnC8UEsy9AiEA61uqNm%2BF8Y9GT6L%2FxfgUsTI%2BLRWCrxLchTcJnsRP%2FEQq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDNVpkGp3BPSRyi1yaCrcA4qIIBhTeaqwjPRhNqOn6mj%2FeVGziZHv%2BiBDMDrri51FrSAuZyfCPgXEpCJW1NUU10fI4Jn%2FJS9usV4llTruMj0RTyMLGm%2BW23KojXtT%2F8IB893dQ1QGT8Q3vWZpdsPfAWMwmgrFvAx2Ovi2HMo1hLvXvWe3RoHrPLsL2%2BcNTYpTEJaTE00t3g4y2o5vHv92uH%2BpNTWxPxVvqQzOXrl012smh6m25XWU6NKnjh%2FILGpc0KHxRw2KypraCStQotSUGs%2Fh5HpQWnUcoB0FTDoivWAMEf9Qwy1kuzGQjp%2FYeWdXiMR3JR5XbFQL0YhcOgYr0V58na9koP%2BAjjTyNxpZowQKUSlaOM3Qqqc7pa5355p5Q7GtfvPISUf9eXULnVVzXL%2BDGsC3Ts0sao7szZxZElAB0uGPfS6Ius%2FtH8tl4m6B4ksuu19PgC26NRaRKvJ%2FQcYeAd6KSVw1KfvE9CWbdA9pVRDRHopZjTKm%2Bmiv77R4t2FDgl0tkTg6qq5d4f09iGs8Y1g7g4P7HtO0WrR2%2FUE0AyZQKEgUsluYESFCL%2BX7m4nCz1Kw2gENBFgsrngvbMub1hbwUjifnBGVxJMgCUhdE2M4vTPKqYIJhv00kCJDmEcYxNPpcAyKo%2FIDMOywyckGOqUBUWq%2FO3KLScCpSIIxdFxa0DrnoIbYl7l2GZ0fJ74jqb952FWoHIP6oC%2Fy7WsxCIYoCPnSzXo4CZ%2BTZcntH0EhQE7FXirfIrIM6dm2j3gJZ59fyTmQXVKEcl7ar9X4LwG0SSADSpFouqlOI%2F%2F7x5zu8mcqvnKHqGYQaRnb16mGnSPreQmZpqhQTqdbihT9zEgrhHotZG1YJARbJJarycrwsQBD0gym&X-Amz-Signature=ddb3d318b38f48fe903b4a121bf0189b65c4ed0252c6646d4fc3be8dfb29c6ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

