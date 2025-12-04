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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBEYEWLG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHf2y3RhKiOfJvsL8V%2BUQZ2asm2x3lxG8TxgYufsTBPEAiBSyFENoVd6qPPrOlydmsFi79KJNumqH0FegxBeFJ6Zoir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMtjdfNl0RZwiGsniIKtwDJJLz4MNOKpeZeOeDpoiarfjgVYQ8qKMNc7j8v4FVE0Moqfafl98%2BrM%2BG4muInQR%2FTPvgDq0xHp%2FL0HhXmstzljC1zGSCBHk8BGStyW6VaOOO1ZC3a6Q0w1U0qNa63EJzEJVzhBtkSs4ISFHIzZ1QW3wElPF0hQ7oPqCZoa5zQNoXuiKB4MdK8%2BoJDtGpCXptZ9KpwBgraF1iuqAPG8xjV384sKA%2BTKsEtp9UTZ5n5xDd8rQV9UjxiR1TDnwrs6LpHoHw6MqUTL1QTwOI591E6XRpwJh0MpJOdnnkSdfFVrCf9yEnDkrbty8Ftg2w1gODofLdZ%2B2F6GeRE%2FArPJgCRZIUH6dFQ1HIJJuyHLfeAS%2BrQ53anmWF3L%2FZpjHuLriUEb16m63EaCUdLx70cP0ZpLvK82TLhy8N4Cn%2FYq7g2zGeanWctl7SMt55s5MRq8nHPQpudHg5EaBc4%2BXXmoSP0%2F6ca31uYd8DXq51WzssJIp408ADjTR%2FfHxxFzxH2%2FVWpcrtuay2Ylv6OpjgLRPqFN%2BZRXSIGqCPerk33tJzeiiigMw1a%2Fp8tl7tQWYwnlRRRmN4WQ%2Bl7d7rVhhuZZ5eDgS0lsKnwZrWT7%2BbUxzYSwTbVQ7JNaUYky8iq5AwqtTDyQY6pgGFRqAf%2Fl0GtPolwU8EuO8zOBwTmUtmN3nzrBQjMfE%2FvhMrPjHYgfDLPXnEa21%2FSg0PT9GBqtr%2Bu%2BpVoHAciRMENUrxkCW2jrMS8zjAqQEnDvfGUa5QZjPwVoNDx6zPSjvwNTgXh6eP9EZ8nL8WrZBzpGp0YGw22wA0VHisJ%2F1tA9RQN31%2FeBB76kjXymmfG2jhH6r39DSmcIr%2Fjk5wTF4tclG%2FdDt2&X-Amz-Signature=4aa41c4fd922240ab103c6c94205dfbacf5b71b5a398a628e93a94c8eed30ee0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

