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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWIKJQOE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCisgy7fS6fmm6KIY1E9kITnhXH3YxRS0EGJQnB%2FgVFPQIhAKMKwin4AHPzto9dULoZBWmd6OIBm5bR3oG3z2NMPvwPKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzC1sQBiTF8TM10cdUq3ANo2y6EkYcYTOMR8h3XluBhuNfebGvO5PCBJeVjSqgkaR8q%2Bjzk7Xc6stsHNDUA%2BT1id%2F8pJxmkqsnSiUWnfFHTwF9nQ5sLqad6E937v5okR9GHLLoma1%2BQX0bcFQHf13rsGhsM5AoyXRQup5nWwFzau2sTBGAphuP4BvQTHqjap%2BqPH%2FOtB0nu%2B%2B8N2g81KhO%2BbCypL6eRkNlsAoSnMlXslqSklMBepGUtPlbVx5hjkJ6U5vo6NyJAGhBVeo%2BRiY1wnVQ%2F6eckAWfNczC7wvOqpkhv3uNbBwUkCTDMNcZOrg%2BVkrCWzxKWZyMVQlJj9pnm3qdjzaKRyjfOIa7UWSJOcf3NN1TPf8FZIAIqYD%2B40H6CPW0IzsqBBQ8WI72oLTC7dDsSDfCTArFg%2BcS0Pl1j%2Fif8VeZ6YchSCrkqVqrdAX0%2BQfoPfRIUJLlALPUFi3RAjUFkd11SuOtQ2teD7mQzz8WQezZGNgjGEM7SQ8yBfowAGpBQKFJ8DRB%2FRvlhovqVyG4bfEPrS0%2FF00s1qrlpq9ZxeiMzz5Rw0mlKn1iJj8sxY%2FFoJfL%2BZiPUiLbGQvded%2F4ducouP%2BNT15qc142%2B%2FCkXz3ScJ3WHO%2BdnwMv7SdFSMMz02BkINiT4sTCtrt7JBjqkAbOEXBmKZ5%2FsdY0S814EpHPeeEtGLuPN49vvBInqZuToCsur3sribayWak%2B5AAuXL7YUwnr9meArKSvQPFyIe6i0bnXPTGtFUCF7pZWULPSjLEg0XfQoB7ExPFZX8nid%2B%2BPVbHdp2%2BcLpGIpAou1KpFED6l0zVSHktM%2BocPypGAlj86XK9xNz6HMyrPQIrzpTpHJmqK9HcCztXMm1akpp3rQYDhw&X-Amz-Signature=f3409f7c398ffe6fc71c24bec75c000f41e7247630cac61ee94e433fd90e18ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

