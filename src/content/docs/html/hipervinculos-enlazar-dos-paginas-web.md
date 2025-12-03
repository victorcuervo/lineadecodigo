---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUKWAZJI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIAfnz5nXWn1uOsLIXSFqvbRCSo56q6NWcDahfqaqpqnYAiA3qyqWSUcl2k7NL%2B7S1v2UaSBc8MJNXZOfGEYo1qkH%2Bir%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMBzwu8uR74kmZgKQVKtwDi0LM0wXKmTgzPkWdvNXOENzUnhe5UlBiGFBUrYHt5nyKYf6rM7SBTs9rWyfWIfzM8i1hntKavUFLuS%2BZelbqGY1PCVaELSb2hI4tiaXRIVP7nnF%2F%2BnQTHIR0k2887tni4ek2PTfaPhyxxA3d0cfK482imav5YTdDYeFKqff746kbX6YfUlnPeIDn7Qz6Rpwk6UsE%2BSCyk0uJKSXTtAHXanMAhuMbDiBz3IVvOiO2qLWHfSiOo9VYqOtZCWhEjNVDtTAH%2F6eGZNrnM0Oao12VdfMINhR602KX2NWw4mTzgHqAAiE0Gi6WUf3kduTj4zfElwUnZTQK0m5eAC62Jz32NHzS2dOHB5vJ2470FvjimEBSq%2B4kkW9w99SLKlUZaiNrra%2FlTzhcLk1ExwFtocNOhxCGoHYzRfwGvZtSfGPRI%2Bmxvqtsuv9i%2Bx9bF29Nm%2BsHKZhqbpBa8KD5fmhRcqYDZAlOZXMadqVA2p3o1YqYD2M2RmR1Xmm%2FAv6TmjtC%2FPQeOhTfeLRbJYlnuHvpsBxSpy5cXztQQxGw91AHda9Q5u6bDljWvPlwUeX7S8I9eR95tlrgB4%2FgNHs88ziIFjAVCZtYQUXbtu29a8LfSbn1W8vn%2BUXwYhcYvXpRv4kwr73CyQY6pgGG%2BThsZlmoMJs6cjG92%2FRO%2FL9%2FPpOywaoPKk9nQtJxmZOR08I1yNs46jfqRRi2JQgq9vO%2FP9xd9r1LnmYKuosBL2Z%2BiDfWKlfyj%2FBtyE2c9qHjwp0S0trpgXth1E8CHCdR4Lw9Ld%2BapXDgEqzIhRWgI5TyKY2MtuyeRt1fgqBFN58509qhPyhYAK19AFldj8BsCM%2F32WQlWcb8Hpd5OPdTwhB4%2FzbN&X-Amz-Signature=704bab175ec595e00403be8d75d1d17807d9b74387246c0fb8542b1e5ddfc02f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

