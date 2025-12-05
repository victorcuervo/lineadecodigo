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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXYOAWCE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T161555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfXCP1H6yRoHr5Owxe2vAijsnpy3LFoV8gPHvtDZUMCwIhAPyMm1X%2FcLwkXaLAV4iqHIU6u3biFR%2BjDPiFJjT110mGKv8DCGAQABoMNjM3NDIzMTgzODA1IgxdLsMVbXgIKhEePisq3AOg1YQIHAlPR6LywzOhf32zPghqvWNedjWynoS%2BCP2FyPAJ6uPHf3wxzGWLAi00aQroRvWc18%2BWjyJ34AKqqfltxoeHOT8HShRdX1ST7P2DbZbX%2FUEm9cDRgh%2BceWb0kXuUhvbAhILUe5qsutZ%2BkQe2Si%2BYYe1nuecXWMz0aBHItq8SplpDnV8CB6hX2%2BlEu4MlUfwtp8o3fxB%2BspyyPM%2BbkflP9r3Kcjm%2FX%2Fv3U%2B2UJ2LweOO%2BUD26igk1oS%2FoTeqbmsgq3LrnDkfATuiXPNSQzeBBMq8hqpjn5OXPwxRPVffrpQFSIkRmDGOpYrUk5s%2B75to5fJXVqLczIqTCjlIsNWpPQ6OSbcpR4zG%2FcnL2sfQEIOKkg2RIVbNiBorqkhed42pKMtDvMhPgxTIr3Q2L4Om%2FlSYvwfhDIRtnEPvixuPfvvBTKFIQTMv0uOTkCFfAHpkYX9pDz0oR04gDIjz884N7Q40xreDCPzzTXt5195b7sfYG8vSHqwmUlryQbNhAJdlASJDlJbExrpMS6B728bNKZrE401RucLSnC%2BREWEwNB2pEX5lQyZjhOZLSNJytyyKlMIlzp%2FUbAgjRf5zoqzQz78CajM0wS1FQk5QiPtXng0o5PmXNoKTfvTDQ7MvJBjqkAe%2BquRf0%2FERv19Upq7%2Fi0LttLZcLmIWdJBYI%2FZg5GNlKcCPCgcV9ekJe%2FH05KGGOyJz%2F9Hk4NHm3HW7NmGxE5bP0nx0QrFRBZ1twIlvqFLYS2gVUbEM2IX3RnWEnB7nrkK1Gy5%2FTO9RQr2vGu0jz7gucz27r048UpNWRe5QhrZCjWv1NBxdm76YbfCAeylFzFf5G1mMRTYoIQ5DgWkIKqR1ucJFU&X-Amz-Signature=071a9b30021b52549ec88b7a2f153e5c9c85a7096ffb93960c391d0a55167515&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

