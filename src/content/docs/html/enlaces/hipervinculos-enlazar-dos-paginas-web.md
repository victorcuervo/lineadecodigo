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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SFJHWHQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T014704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBB2ufOLm2BDR1R93hWaxpW1vjZpvKqJXyLzto0phpELAiBs81gjOnBtaZIecwBaqq0HrNYncfY%2BZLtseGCqbZUWbyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMRkS0pCcNA451xV6oKtwDHFRz%2F4YbQdyNGHECwV6o%2Bz%2F9mBTNLYlaABrulB523UDLlfZs0nsdTwh3eVGXLHw75sEfGInNZgfXBrxmXVKkjBJQKu3mKSfZCt%2Fof1yqbHu8jpwBHjXHEbQGhf%2FV%2BIc%2BxhRUaDmWHQkrVuZvyw0vD2wppOsS85vLQ9T06LKHX9FMuqLWCPo4IWRD2XzS95aBuE6mQz%2BMZLNd4LBKVfK2zu9htv83PItcGYHGxku913zIDNuZ7JEqZ%2BFStRwXNWeOjOGQwAkUOroZQ8tBQHL0F6sb5bj2KREk28s%2FwRUoD%2BXmR0r0hInTIfgGGHNU8TJ%2Bo8U3RJmrNnVvobedxfPY2o%2BI65t7ENtEdYuKvI907QDafQCyT6%2FmuNk1c1XoSjhoZ82MxQuU%2BYlaiSU6NMUafIc033PJpKDYMA7B%2BrAlqwWBPVo4QmaRZTbeSa7TsbgbeY2tJzm8SA%2BHxom2ARlYRqO7AO4%2BgkrauETtx3iNhHNtyqzYAGoRKkYNBxq8OwSyD43XwBjjbL%2BmwZL0192lnNmf9iJO29lMWP2nLa0P4cdXKKyGSmKMwRo%2FyN%2F664YX%2BWRInE2H4OgbfKCc3WNZbbXe8p3mVu7CtMSUz%2BNDBDck7gaQ1ZfSVwhhJC8wiIzIyQY6pgFif7cYm6VLIwZsG2MjIUrr4QOq8x398OZMovT%2BT2kYm%2BD6%2Fk6n9tJi1s3XoQOr7ffrt3AUwPlmU66zoBLtBEtrqct8Hz0U60AYEwSxY9wTEX%2FdU5Hbvg42Hbxt1YCrE2%2FsK6hpolYqNWPoxrGjA5okziSAH2WbsX3AmmJJ3XVfLcjWN6a%2BFnlCDPVZ7ub%2FScOXuimKdV%2FeqqVOAb9ZYqCeHlJzDVoa&X-Amz-Signature=21ccc245f34f1db8c6b4f05c251b9e5e91980d6612b817e1f3dd25ca8e0c687a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

