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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4HH346N%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T063511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC8Ab3kFqN05YPPiFugNZWNOE3Jhy4yXhFe0Jm1EkDjxwIhAIAQ0wNq3ZPYKu7zf95JXrSbAx4%2B564sWPOTJS1Og7iZKv8DCD8QABoMNjM3NDIzMTgzODA1IgxtuRrpMI%2Fx64e%2Bv5wq3AOhCUE1hXB3r8%2F939HmL%2BUqHTjKAnI%2FK3HwkrnjxfO6ADagdagcdswjNdKhlGbnc2vZr5kWOGnwLAbJClCvSC04msp9FNo5AzXRnAdyUxlrz0ruMHdHnTPN8iiULxgzsd51fh2CUj2X7CEdQQwtQ6xJoi7vkwvN6xhjzFlbAajF7nav5LlA0QAsBZggeoaAL73MFYuUKV5DbtT0gPW%2Bdkox1zq5phAXYVcNq7ZXAiweL4eulhAMesZO5KsXZLsVLt620TZDCPMZxJ3cLCT3ZzjRYUdjlDhxif7SV2sikuKMvuVO479MMXqGQ%2Fy%2F25hZ6leQDTDY%2FZzes2STFYKZXeS1J%2BSwNww23%2FXhbfRqR7ejYMXLdb2wF5aZqHXar%2B0HuYqmJdT9WYgbD880n0zl2xU%2FA2FzKKvK9zxN9cnn118aqWqRs1SKX25VlXnnZU9EZ3CH7HQfb14jrM6899uzTCr3Tu35DfIuH%2FmKcZvaTdrp9uTEuGdpU4JhyjW6F4FzlXizBUlAcrNqzKAt6MxnZL%2FL66eRto8JH8gkieBKfmzLZzN3mCF9nCEiVVg2BvMhdmxAxX8QUmINYeSVJVMTH8Ro4EZeWHR8%2FbMnV5jsqbSMO9D2ku3UCoRAIerJpzCeysTJBjqkAdtDJdBh%2BrdCWxk8yrNj5mC6rVGs%2FahOM1PEeUmu48xUr%2BMSPhYwEv6gao2Pzdx%2BJA6lNFPGu7sce9ZS778sJ4dpNSQs18LS3hovaiRQy2Umg7xsIiNGs0hT2nsXnB3Q%2FYLRu7c1C4pBChscqM0TuZ%2FpDp4oC2JJSmdPKQabKlGttGs9%2BcrYFz7TlIo1Y9gu%2FoV%2Bgie7ELEfS6hyqol4sD1G56eB&X-Amz-Signature=f819c0d3a9ed48f321fc3cc465ca589062437f732f3cfabc594dbcc13d76c4ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

