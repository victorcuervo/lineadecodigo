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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5U65GT7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T192826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5NZPhMUsph72AVswodEHIA%2BdeB2sl7FKIQLZWcTBx8QIgYIrlpIPm5SDk%2BWuIXfkD5cLa8ia09ePYglrbkt2D2tgq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDK49JhqLjj2QqNpUcyrcA5NdpTfd2hR88mi7%2BUsRyd6qrdzc7S5qnnje8evmpodGKQG%2BDIMrTcS84i8J2O350T7qKEOzN28m6lJnuuEy6hbHz6teTSb%2FvjMohe5zGP5UoiDh3jXXYHb354HaYVq%2BLvAG9ZzZpdDGj%2Fvl%2B0nSIdrTQKOX7DeNmrWF26vPt%2BLyTlL7qnfsrPHSpkI0EaxFnYwOuiLuLoZoFYtRubs2dUKSvy7QmcYqRTGXKRQ%2BqdgDEb0E1YMf8DDWg%2F5RvFf4V21XXvI61t89icaW6dmkrDs8B%2FZo4h2OdQGzL%2FAQw9f8DiVegoclUfvoqCKFdVt3RUPUVPt6KiSdiz2H0c0Ji0hwYev4ks9PnV%2BP823iCM1FZ72qcrxlieC1ep29qXn0LEk%2FeLPWQebXwm5zyd0FaiEKO0aWPC7NJWJroosnibkODKtLmQnFDwaJW3P5dNRIresloRyp6wyMz1GiPAWk4QKS02UIcsqVcJTa726ZHRrBwMRCgT%2FHx8VF4hCEUXshaieNlQVQ91cX%2Fn5ARwVq%2BMMXjTN4tJFlcO8Ac1Ig10CxjGXflPqp1xqSnIEcKRq1K4d6rZ385bj3JxL869%2Fdthv5Vnylc2CtNqW68ug6IJcvyGkn9ylRogBNRwOMMPn0y8kGOqUB8wFUb%2BKGpi6bXyJGxbo8qj8BamdgWFL71tEv6f7UqIODuAFwqS71cK0FbY0hhEfpBq80L45FSH5B9UmQ8sSO6Q%2BOsKR%2BHytlGQJeDUBNJZuF0XKT5OnI3ku%2Bc73FhfIyAIx7LIE2xrMs6WZOk1fMiLnhxgl7425LwZHoezp1a%2F%2BS5lgxyyHZIxrn9HHq3jvBioCMvjlF3FCnL4pGj7h%2Fk%2B%2BVU0sH&X-Amz-Signature=bb8c6182352b428af721cfe066f7475a87851106f7f983da3403fcc8acad04a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

