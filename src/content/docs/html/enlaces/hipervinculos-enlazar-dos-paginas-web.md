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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662EG4LJL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T214005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCidzZdPxM8KcGFnwyXwlgMFe7POJc%2Fi2r4FAJb5tBRAiEA6CRlFigg%2B1uJc%2FcMdKqds0zPdstcQTAyDwuNiUjezAcq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJJvErxiweA7cACZjCrcA2MWq31m%2Fac4Fa6rSTyCpmht9iU6acEjNn1HYnye1x4T0emSr6W9G%2FfBxb9skYpXNVtAb3VjwcDvVkl5rnZKXpDq%2Fd5CmfNRLH%2BtKb%2F%2FgcYRH0OZmhxp5Di%2B5eBVoGbo2FMJlFF61cImzCr%2B0OZgGJPudPtzUkJZ0%2FepqoHj2Mz18uet6%2Fi%2FXDJDAfnbog0Xr9Gs0ejxeSNuJs9HNLBlDc2lDlDkw7rcjb6%2FBv1QpkR%2BbR52OURNgzQU2XdowffDENe7fXBHNUFWaVEEcmPPDPHrzufhawC7RA%2FcjjBJ%2FE0sYvNVTlP%2FLOnOOV4swgDlAptpcoayTGedTq9KsUX4ZLnQXrCerMWv%2FkAbm3FwpZEqE8KeE51gRoJpjXJL6MoeGGKc0ZYDsRn%2BSqGMxlhFAzTGnPaIZdd3Jkanl9%2B9TUVOLbKAc6xOCiRcdbKF63b%2BfIbL%2F2qpeE79MmPT39vypTVEahs1pUmmh%2FoyA0aeXTlnJlOWypVfiEiJh7IqSUMSpn5tqpSO5v4DVlH4Au2VaUY5A9NaBNVLLGwTe7vkTceRdmy9xm1g37G8Uh4HwFCTsJKX%2FaUU4TGEo788fyGPwjRD0V69hCK%2FjDVFXCOp3WFyiW0sdlDh2XGTSq%2FvMJbL0ckGOqUB1g9c2v861kZ5SDRrwJmhYXd71AyUgmTCm9%2FrZ3oVrKD4dBE7r306cPHJuPzS6Seg%2BRAJP4DExe8uUKdvW6lZvVrOc8cujZYyoa%2FP1Wi7Vs9moImcmMZ545wb9mcs5iKx6UI3AR5LleJBmVlb0g22vwR8dRp9XbfNlIoUZgBZPtPce6Y%2FxJoUm0Bp6gSJfY6k188kmGgV24OFxrHPO0abyz7RCbKO&X-Amz-Signature=67b92defc52f6181bdd31a06e686fc54da88c03bde52f5c4d04d4c9eaefd9264&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

