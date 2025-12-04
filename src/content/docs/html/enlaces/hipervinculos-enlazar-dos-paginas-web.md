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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652UZRNBJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T144259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCC80mvr%2BdlKmpF5ghraTA6I%2FAUzM%2BgeGl9cRw1OuqL5QIhAOUzp34pNWbREO%2BxjhxbHtvLEX65v7cRMNrQ2%2FikJWCHKv8DCEcQABoMNjM3NDIzMTgzODA1IgwkUoQb4LaWWuo97UQq3ANmqfJvTb3bxvhv3vfT8IfdJ1ymkkMjlXw%2F%2Bzk%2ByCbD1jB1drNel8GH9eMz%2F872LucHkMGPXU4dk6rcOsfZ3qlkKhRMG%2Be%2Flg9CA6gn%2FhH%2FIbpUfh5qedb0SsSvYyGHi3WD9e0tNZamEKJgXqxRMqIQ8JXGWkObfgLOD8%2BMlU8Bdxxg4PKLCzKXAUSgGhT7hl6fCSFfmXmaEC%2BojS6zBkCnt8eVR37dTYqFBGarDHDBtSzzQujDc%2BCAWmEW8zZ5NVQIYD7i8SzLPJZ5Zq3QvVUXBVFX1kGqxs%2BdK5YtkahjDzj5hK6Wi8tZ16CYu3qMPQWRX3io%2FnG1cuPHfZr%2FZ%2BAZeOageVYr2uujujOnSuftM%2FGQssEPWoi4xvj1kxd5ketP2b4ePDJy5Qt2WaTZiBLpq0kBurmtze0fkhhglEqEek0K9Vl%2B5XbOjntoWxsDX3pltyl3TTcb0tfLoixrNCkdFcup%2BCT7%2Fky6yQ5Fw%2F%2FDIP5fau9LnbGWAcZ5sDvAciLmB0V5IMpj05arcsQMDYrrFLcS4s%2BV4kVYqvwBtofqmmBiS3vPTrcZemzcJLYKeZ3bkVPN8EJMa5cocbgKK6XLZbvjT07uuUqwUX2L1CaYL%2FGWtUOc7j%2FFg3OPJTCcosbJBjqkAc9Hys6PI3Yk3ltenOxmot2AugS9gK6ZD2vsoN5OuDLScw7Ca2laDgnPXa%2FQCJnhHUcGtEHG1zBYcEpZUsTrVMgq%2BxcVXfWZGO%2FXSdY8VEbsu0La%2F2uGIlpCIyMe1wmOTqRg2FrdT1BYs4rYjPe9O%2BZKYb01SsnaCxa5Ui4Z5mwoSw5fspwDb082PTnrUS0iBQVgTKqKFq6ARCxjo9zeDdRMEzsd&X-Amz-Signature=6fa5ded2b90cc16580f9b15c8bef6e6d8ec19608b704e439bb130721025e9108&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

