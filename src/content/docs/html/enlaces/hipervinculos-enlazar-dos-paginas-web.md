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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ICCYVDS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T220244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwwedmXK%2BaTuI%2FjzplzO58Sp0YYW0O%2FCsV7PCvBMPi9gIhAJlxzctPJ3E3rZLWWh%2FutIwdyAkYVBIp6tVdRi%2FmsVKxKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytWdzdP84ef39shTwq3AOgesA2du2Ears%2FQfJwm2UqeL%2BTRLYN15r2ozK5UnWbH%2Fgmuryo6oROKIoPlAWZGbRO3yO22MsxYvuxRkcJDpObawBJB3%2FuitjQCKxAwPKcUq1%2FewJN%2B0qHOZpvqbZJRoJk32l%2FwTZrBU50UB8IJO4RaJ2ZnEXCTeewPjldDlX54ArybVE4Gn8Kn0orzU9jpA7fsYM4%2F044mi%2FbBmfbw1L%2FRYwj2dPL4dgYlr5HJv83fj0J2p%2BiERVI29qTBwEueS3xqEcyg4nPB6bUy%2FPsH%2BDQTnQJ5mn2a6iGUx6Gt9PH0wyW7VztyMe6lwq3NV3nW4Rm%2FHBev47KJQKW0GmfoDzbsAdctdU%2FLnGSk6y6SXIEAw1PTB6hQn5J%2B3ppGUemQ0lR0UvSEB3p3HpyEHBLqwqiO3HUWCGFiU5grzC5crvI%2BiqlK3zgjspWih%2BKeaQpXsvrrIHorax1yWngGkh2GSeR29avCxWqgyyXlK4ZDyadq066firINBan2xpCK7mbpw7Ne9bwZMSqCWToZS8JvDBqP0Civ1ZgSfQOgF4YOkU91IbyWmLoOzxd0w0ah%2FeYN1t9WBBJIZq8IVl2%2Fko2T6brl9XqLBlTBABzrIw9IeumVWColHCx5QJV4EEeoTDbx9fJBjqkAbQMkJ9mCswrt5wkJfKk%2FieWWidZbG7L%2BaVTOOlg%2FZk8m5B4Ze77%2B4S%2FSGoYNp3xAfqEOOsZ6FVAoAt%2BNd0pIAWuXX220%2B9NYeD%2Fo2iIBQQbUCR8364YAaY9yhqdyPkmsxGN4emIbO0hA0qDhn97ji4nVXFF0E4IcqovXMqzXljNwPYytYFnKgmcibIjJfVhjg0m1UAEarjvt%2F%2BR3xem0LVLt%2BXX&X-Amz-Signature=a36469ef52128133a0724726b72d242c0554e8af4d02fb81623f0c54079c9638&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

