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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQFMXUTD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T162346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgyqS5RF2HndROv%2F3dUOYzt%2BqPqEMzIFFV%2F7EmQ4H2KAIhAKTsstl3l6cN%2Bxoa9cL3pAojeb5iEbMVRmjaMVJujKmuKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycKVqZqLjExwYfwF4q3ANL3yRFYhyk7IYqhWAv%2FXUbP0yAolb0TKLTh2MZ1lSOfyDOWDcvpqTLQZ99u3xLdZZzFubxYPXDg2TmY%2FNNQkFF32gI37ifKY%2BDNICgxWnYHp9%2Be49mucgCBmI8%2F0cdHKNFn%2BQGV5DnMyIqlnurS6W%2BviZ4Od94BphDm42TTFhf0ypYzsimqykUyhS%2BhS29Edz4DNe68RYvEkYkTrAsvbYdgm2kZQnVP0BZX202ibxJ6HZdo%2FZpcRYhCVyScf35kF30QsXYwA3jKdFVVmE8s3YDw%2FqDyqaA5xB833CcijduaL6hRBd0dHABUVbgWOEqK%2FZaNqIMkpIWd%2B1LniOOdypasLCdJ9sbL7Kbv9SUzEvtzWLkqKYX1Gm5N69gqM6NsrT6uTPDmYPftQf5rlQUOyPcC47zNzawNK7U79rV5TZ54wbwpmxJtzVD635StDqY9HIqm2ztz5uU2g5taMByBsC%2BqDzaRs7RU9RqBkGFsxPh9InmdNPNdPh%2FrPCpKoDkzGJNFmt%2BCU7cIqpgumG2Ed4bA1rns2NcwWpznvh6%2Fc7%2BJR%2F%2FjOoy7gAdfbiyeDJcZdiqsmJqtaM4YJu%2FOpGOq3dSWRHHkdECcg7%2BO6GSzwBXLBi26kN9d%2BHpUH%2FkjTDRvNbJBjqkAUW1a4wluFkVFCLfC9ERaan7c3pIjJwWF1IoKPGTXflPY4z%2BfTTqyC3s7m7dfCFD%2FjtNy2GI%2FixrxMirTwtYZFOKYkHgnzk5qIOeYwL8jNqiJxQkZZ6XtCgrcVYZztUY7gvCwB%2FgKTLPTXhUg0FvMQDy2IDIEn%2B3cEgLt0S4oMhKXvFmWlAl%2BjnMPOw3UdoqBNJjAHOk18IQjLd5UN9Ug0YgeWOL&X-Amz-Signature=5eb6abc846b5029e860a22a81016a97c34088f128df573356ad308743b5295a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

