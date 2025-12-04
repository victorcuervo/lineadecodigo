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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662II4QJY7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIDoBpajUQGYnTesgTkvGGTqDsVUUVVwtt6mQhFV3Si2XAiBZ9YTJvKPCB%2BU9aEGGnq%2BiFIdirOns4FXpKER4maocTyr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMZ%2BqToWmUZtPMkwk9KtwDYoLgr2Jzt4X0WmTox%2FZhTvsYq6mKcYORKHv1yPsnX6HyBiKxurFfhuYCjgU095JFcXeNb6agZXBBwIXZB82P40MH2Ozqd%2FDDGThdtqjAVKpkPObhIIJXJsoS%2Fs9gFmbm8sKqr%2FvJNwScAIjYcR6UG5%2FmtdLpMo5XBwk4QWZx87RokVdb3CWRMALA1IV8qV0T2bxhTcdkHBH3otpYQDINpnPDuB9eqNMS%2BWKlgy1hPxRwVm1tBHQvSq1gq2CPrO%2FPlwALAfJOlhS0zEafDP922IXSrRU8c4e2juXDZzZCKVucQABI6c%2FUmSPV7wdwzzTLWSDOc%2FHfJlQUoHXcqASx983Q%2Fh3JR%2BhcUxaBbu0IPLqWTZ4t6b6cPJAcLSYKnBNXDmPUKMiq28EKNojvw7hmzldHzHT236vulgRwpCy2mNsHiSGTd9Z1whuG5diKsP7IHWrZS2cvkneqVYzSBuzuzVZDSfcsGjrC3savxKdmESnFfUb04hI8jQmOZJzVLWpRYUek9j6DzAG7%2Fe0PJL3Z6wD2vwNnc1WRHaR5iQnR2336qwu0hRvWqbOqMx3pQIgC5EYNIMQw72ot4qhgUZcauFG9SR5MV1gW0jPWznzj%2B%2F23YW4uu2%2FA1yUSklEwl%2FPDyQY6pgG5h2xfpSJZhSrXSCvzlRIB15qJ5ugzyntOphf%2BhXF1GY0WBJXm24G6yH%2BDDXNLhkxwGidVxFfPBUFYlb0rT7IjVO5KMMjUrAihXNg0bX07uNHUNJcGsogt%2Bz11yCoLZNv66KuFtrdwoYcKs60ux2giYkz7d9OLTNwx%2FmEE4xcspGy2A2OteDGLoIEr2rJzDZoh3FLiOf5Cj20kMITlt9S7FrHvXLPB&X-Amz-Signature=0293f02a22567d13c404c69fa1b39db327c18f989fa68c080285709292cefabd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

