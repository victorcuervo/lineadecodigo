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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZED744S%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T142444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIH3Hdjo9%2BntLYz%2BYiO8U4fPde1IfW3yiBC7CHSIwKatkAiEAgbKycIp4S%2F%2BaZ325GzjGVFMphUUxBhv8p8rVVY3NjQgq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDEcxazB0uBY21za0QCrcA7Ou5ZwEqR5RreLDivjpwl%2BUJHvzuOli4omYKUbqlgXXece0YlVEGA2Y5fe9gfuyTR7J4hISZl8DDPzIbwp3WJ70gIcD%2B%2BKKbjfkFUKm6hoZn6aIJofG6uHDtVv3fMomvnEJ1hsmKfvIV4UNLLKEJlpLyRtIk%2Bq5vyEdJ6dke0c%2FwTLE9HszFQ1ps%2Fk8b25OKKqrRHFTFzR10kdRXhvm3KmFvqRkTIWjnfHHfgmFnSralO3JWy%2FjjO1pVcg%2BNmKX52ShsGBjdB5JsvJSkM2r745tHbrz5ObCchE5T21IijNu%2BfOf%2BiIVgW3brEdAYrbHsiV5Sr5OfcLk8RVeq5mLUcXPdlaa69OXjyhsCreDc4zFUjfFx4QH8vCc2TJ9Pqgi1uFMTKx17SOEDeglhhLqedH1SImzb%2FNelYmhYBjbLQgzL%2FRky0Kbtpzq6r3PTJo2EE3iAefh6pvr5P0r%2FMjk2JJhPYYSD16oHaKTWwy6LcvSH8njpKnMVUFh%2B%2BH3g33H8OAdv03NlhT38XhhaL%2FXcz9w4c5L0uVR5CrErVst6l%2BpgGRors1hrIP3kISFx9pchN3jG9u2CNN%2F%2FxoooMCxPhvD2jLarRjHSJpH8n3Wa0O%2B4PuTwA01rzL9PPtIMM6gxskGOqUBJv1WMkz%2BF45ga2EUVw4Ee19z9U1cVMULVVpKLijEvE3Hp4dYCGY4AJiOVFgi70CmdqBvOZx2Y1I0sppVnkrCD4jtiNa5kRh%2Bbm3hcv36LmR5U15Lyu7Mq1Z46Anef%2B5j5O8AqMmKYdIFexKAYU3jRlZBrDF1bnzXeIDT3Ku9XCa5ut3SC2KrIualD1rZ7GrPzewMXABcu7F5FoHcqklSMDb%2BTps8&X-Amz-Signature=abccfad5adfb5d6e303230e734745feac2a848b557443da6089037e2a4cd178a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

