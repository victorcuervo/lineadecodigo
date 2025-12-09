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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647VDGCG4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T224533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwGBlv6njYalLkvYCQLcAE9mfz7yz8FU1TAGAVQUHz3wIhAJPH5nbNKHX2ZiUabU2g%2BheAD4REJuIVKE9X%2F97yyzpLKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoHjvAatk98hT9dp0q3AM1gQ6NAEmu2FAPmhSQcmK95bb9ItUF5%2F77tsQxnt5MjxqFjejbjYLMmjfUBLv9cNdx5qrXbIr5q4EW3NWqqfetpVGcwoagOnL1huEvEYcKH5FR%2BBN%2Fx3aJAD6ullDYEBpeIxDgysB91m4JH26gH7a%2Bs703jPeHOLf%2FR0dFU0LlA6qK0X4S0CV8mmsOjBTht7nrukd56gn%2Fn5PD75IPGZaOdK%2FxtGG8%2FCgt8q15ZvNSOXAk347PK2HG1FfXrQzQItakqdKIDFH8st2picuPgO5HR9vJLvOIWf6ewIYcvUlUUYtR0N9lN0WjPJy0iXTJc18Csh5077XRxu9i5EPL2PQOJ%2FO7yDzHzl8LBdcDBx5vWLBZh8KjvVJAhPZ7IxZ2FGiaL3fZ64rZk%2FyYKJEkbzyZjrKdGPPnDxun6EE6Dgqhk7FPawwpO36c%2BtDXBqS0CddLe9KmDg%2F32hdH9KXXDe7xO8OUWd2YiE%2FTuYPVIA9zel%2FvgKOq020ILQqvb1Oc7bw4NEPZoMAtSssH%2FDfSXTHp2KcMXWL5JrDULGX3eTkqRQbEcC6gUnJ7SXgYMSLeOXwYHdVuSm2AfbbK%2FZPLwuLTVtqveKiZ5ZVFQGgNTRsAyY%2BmEdJO4vIN4AgrFzDfw%2BLJBjqkAU2NBht8r%2BE1ny6RpB0HDwnkHLOJVHhigkPvOfAGspem1NKusXkS3VS5b9l287OdlMPBB2L72cg%2B1Lr8yEHuGNNQI0icjr8OETYnvR4ZXnv4bA16JBI7JdupVrpCN6xKAS2WBJfIS06h3bwpw65KqZ6Gcowo05AMYg9F4kJ7K9ALwpXPmMBjO0x6EEtAus2HQWzRjVeIuHKxOklDQGi6hFdOg98%2F&X-Amz-Signature=44a56c722d931f6a16d0246d7463462515cd78a0728d06bd58a705c51a2778a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

