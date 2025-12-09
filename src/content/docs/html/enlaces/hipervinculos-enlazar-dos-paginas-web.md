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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MNBZTI4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T200738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4kX2dnk7GM1g%2BDiiJZ8S%2FxqZyhiW4TaqVna%2B%2FI%2F2Q8AiAPKxPYoh3g0hWKKG2uvMzb48tVfm7LxvMQ%2BoKKCHnYryqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEomX4mJJVnS2M4xXKtwDqvAHQQwFQ4vZnBM8V52sqXNtSFxD%2BBFNx3tXdW0vK28SO027VeUg4lEPyDXWNNQzTLiA9vU4iCMebQj8PWwF1TGje%2FjbKnrRxJFW%2FPlfXGppLLL%2B3R3g1QuiyTEGKBIgv6dLy0qpYxo5wGW1C6GEoMTQ5pUIFXpxeNXAnng%2FqdaOGWxuDeXZd8Fks8ACh5qIhwW71M6i3Z4b3pqLt0OG3ine1rYOOepcFHwTzThApVcXk7oQ%2BM8n1034QXnHU7R9%2FbBAZxO5s1ACSEY7y7cNlcTZiJXWJeR%2BhwhRhL6EJJwUPOZUCr0NT2rV89iRBQ5oUF6YLltGdPnBBJMR5B%2FUY0y6KXRBskbTj8KR4w0D9UDh3MrRVZem6MK4Ikt93xWcpY1bxlaA7yK4rV%2FnQfVctZxvvl5m7Whf7QvBJyr99pXFZ7dJs%2BRhNnktOsrB50DgQLCtDYHivZbIUu3iR0xHewm0ZmjqncgR%2BJrJtKMIWs5RGQ2lr%2FFu1UfhmJfRseIk0G7huR0KWUarrGo4c6%2BBM9LQc6RWTvEZ57tYsL9z9xXQNMYnGyY6UiNAJmV6NQFjynn%2FiRfOyhrPVjqU1IK0SgiUTIH6Jy92rHnX8sRBCjmvUjYK4gtJEXypKBAwwf7hyQY6pgEZgQaYjTdlZ0S%2FEoWXf2yGZHuDgSEO1THbENvXlWCED0XCMUYbLx%2BLDufJXDv9MgLRdoFAO35jG%2FSctFidFY7MTL6Rs5tfoGa9OQGMPtHfpTKsdP%2FMVMdw7vLGTKY3tXXg2EYjNsBysZ6042xF7JCVr%2BQEpwupZcHZwCAjKwgMIFxuOt07UK8EI9dLy6MI0Qw62K3VWSX1E4%2FhyDQJLbaLXLZt6Edv&X-Amz-Signature=25acb96151857a8dcbb6ae9983f142aa71b96830192a974268075684d55190d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

