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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JLTXT2C%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQC9etiM%2FzDmIYBahXbwVntndPiWxhNfYF0J3aAaJF39gwIhAPhXG81ShpOb%2FS6MpLyS8PFVS7VWNoawcwmDrkk8licqKv8DCDgQABoMNjM3NDIzMTgzODA1IgzLKRwm6Hyj67K%2F80cq3AMJ7Q3UkdM3b9Aeqz3FXOpCOZxrHodhSxgD%2Bkbe8PNJZ%2BXIkkp7iXZ06%2Fk2GwN3dn9%2FAb9MPWQO0EVssF2TFqAXhi3TJh0tqYeUSp3%2FHvra251AUX82kAoX6A4npZmyckNGn7vRDLX86qJc7YAGFhkyRQXTqJ6iYghi4wEknaKnAt7SirBxMVVzcQK4dcZH4WzlVayfyvgzIsyy1CPEl5zdS0gPlL5qVGG4Xy86Wdha%2BLzRJX%2ByER%2BjSOysSPAQ85hco%2FkP7P3kqmHR59qpBQFhwzwsnsKRp0ayi9bkYVYa28sgzMRlK1y45nlKF3U0KAcyzCww9E3zcsH7fXSFqh4%2B2IAaZGBsIpC1TKragN9ExbYTmnZ%2FgI6uibPtOQNjUkG9PM2RTgSKmH%2FlQ%2FoQWBlgn5L313uAi6%2BAslFw5dvkcN7Sgc2fn4%2BOSZLFtcVfou9U1sg3khw%2FiIjvaoNdxj6BeH3p%2FI6x7HYYkOHHH4AJ15Svxb4miqZhBMpZM1zRQWnOzztOPo4eNIzP10uCayQxPWzY0I5UBGP0dKzAWz9BJFJc5Zdd5oKbz4MuJnbJNhX3FtgCMy0XD6NXKh6lV%2BcEnZdM3W5bULKNVsgctGZ2EIxbKkGx2jhl8bHf3TDV%2BMLJBjqkAe9fRVQ5h9Pq8zb%2BXWo93IxzJfievUKgbs2wLYgH1%2FSij3ViCRG2cvQSuiW4lm45STb9iX2x5sjYP1jgastUa1oTiQntovDLx3xnDsQg77%2F9uCTLJcTLZ1uLPILI2GF6p4rb0XwZ7rHk%2FJYh%2FECjPFtb%2F0kh4an2ldhacvHvG7vcpXnEWws1pq6tPlLhDRthPzxIfjwlzgynsNdhAexSAVRUnHlB&X-Amz-Signature=50afe06448847a75b23d1adf68968f2371982244a5a39ba422c1a63195c24ec2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

