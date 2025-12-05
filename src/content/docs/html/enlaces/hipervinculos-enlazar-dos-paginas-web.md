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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA5D4QWD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T043741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNRKPb9ALyzNWTuFHLafEOZwZM6kXebe%2FwMiMuHdtTTQIhANsnPtjbbuIaLRE7wAmMIKs4g81ph8OfzQikSlrx6l4%2FKv8DCFUQABoMNjM3NDIzMTgzODA1IgxUye8mEW%2Fk96KIgYwq3AORe%2BLP6k%2Fxj2zMv0ClaGY%2FPcGqyTM7EqJPz2qXnTo8JI%2ByJAr4%2B8k0cOM9EnEdr2lZHdwHtv%2B6tnf3pGaW0uUTFFXBpupRbQW3L%2FNvz4%2BeS0gevHORAevyfxUpEiQFHbEAbde9kxdEMn9MG2HAQgLa17TJtrYgl4kqwpOi9lL98RbAPa%2F2imV%2FEfqOJZjpnuwh9xx8PlpA1AEW3QFXYO678OScjkYwfdjxKOxM%2BP1R5GCTcimOG1fz%2FwZ5xbWXsgCQaiFGbhQCIn%2F88KRrKr134bZ%2Bahy0UsCPlbjHZSQiRHmEWCSOvMXWecD3K78Z4WepXxqTuWiyIQm1yXr%2BA3ZO0GInamVMnz3WmVH5edibRItEbgJC6WHkfaW7jBl7tYhI1GwZXsbsaJgdk%2BcTWDUt4Xk1SKYIqU2gzfUFo9BoX4E8W2VOOjDEaLDaLnceRmc04YFkjzlKyelvE97%2BuPGhJzrNogoYyW8wFTbmGta8RqAtRnOhpIOO0jUkJ%2FTc2oVjors3xvZTALl2HqFJNb%2FFx%2F9IgnICIwkE%2B7r4OphrXh0ZU2dVGNuD%2FFE%2FTL%2F%2B132cSRKIhNX7%2FLq04oLoPDsQmd7za3It0l8NNmXzy0ALELk3HKBPkrrL2uVjxjChqMnJBjqkASZ8wvz2cFlu93VF18jtYTcS%2BHelzdWSFTTEj4EiJyV4wySJWRRQh%2FOjiYptOSVAkri7QVFQ2ptRK%2BEVoPaBzhhH33smjbUKeWuJt7PandRjAxotjmAqoYc8PmOTPRckHZtiYOguBaQQk2JGer1MxuwggL%2BFxSa0cPD9oEPYJqO41A7tv3VZVk73SVcxEkyGY5uDdPmL7oYXku7HvujfIej7tlfO&X-Amz-Signature=a4a9152f099b61bab54f46d8bc1f50076d3b206906958bb8e8e354ca869980ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

