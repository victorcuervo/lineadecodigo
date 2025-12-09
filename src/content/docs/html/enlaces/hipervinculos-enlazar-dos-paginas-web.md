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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635B6WZLF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T084445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhywjNmIyS2quJi2zd33dqpRzIRWGpE52Mv6D1WCxOaQIhAL28Vrxuc0GadYKOD6DEyo1OH5ClrXrKvFcJRa32dQ4IKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLp0WlnDUGXAcq0gwq3AMNQyKPT%2B%2FKayfY5JwtumDnnFb%2FXGuTZUAUu0XvQyU4AG%2FCiuMrVE7hWAw9RbRSCCBn61VaBsMlFUI7KdXI9YnSEPKl30V%2FSxzzLecnk%2FcZWgkeJ69HLdoXOsMwefhaMn8PPNV4pTSpLEUWuKwooEBfDE7FPhGOPoZW3awlfg0CwjdVPjLWSTB1b%2BVY%2BOdNTpmMHi7wCCL9Zg9%2FV%2FLtaTwP%2Fk%2FJhqDt3vcK%2BF1eDHetyDMvpX73bzlRQDNnYF4Q8zHsT9%2BpJaOuLhky60zSIthbiXbP1Diqsvz1tZlez3YQ2ZiEGgjGZ%2BT7oe7Itao8MEVDzJIIp8QBWXd0aZ%2FsS0zjqVfOZeYah4ovBYLqRt2D28oFZjC5aW8a0Et95Xu2ihMGMg9ZHR30CxvC%2Fok81Nuinuil7vHSyEPvCU34BXkEIDDkLKWnvXZxVxvGd5t2hvlcCCkOlYen1geAb0fZ5iFJVQxjkkWgLIc0ZvWhY5ksALqswwqVnYefE8L8%2F2u2dlPSPszBiIU3Yz%2FUbcqWOQuIQJigF19cHBPuKqHs29qqc1Q%2F8TG0I9%2Bfc5afeRqjAnT%2FbKdPidj%2F1s%2BU4xpu9sEt%2B04gnaU6LANPwuG5rKu1H8kmrcAMm74y5NGjmDDSpN%2FJBjqkAe390w1XLMVmrPkjKrclg5F1QxbTwZx24Onr9yj9aJ1sif20IuU4hghgGl%2FK%2B35dQNrq6N1af%2FQem7AzpbA5o%2BQmWmAARHeYTd0WCvxDzVCJ8s4NN3Eue5s4anX9ccrYJTjIKPTcxA%2FZxg1%2FOYPAOIja75Ga8qJXkc4Pb4LfpiA%2FLrXZtuVIGDLRviVn3fo9CqMRlcrF0gaLKQcs5NQTRn%2BDDQLL&X-Amz-Signature=c900d639ba52a92cb173020236e4bf7183e836ca50d7853e347e3b917d8287aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

