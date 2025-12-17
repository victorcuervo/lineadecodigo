---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634GGFMTS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEAungvqEVw5MSexmrKiq%2BgzCAqJn6YWUbMhv8iMh5P4AiBT%2B1rLcU%2B5%2FfcjC07yaHXKEb6o56WuNg6b3o%2FcZF72jyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMA94tInypNHzSJML5KtwD6fvq%2BO8Duj%2FcB8BGxdgXuZ0zB5XlvVH6SuYxI1LoI3N7bmnzJuKnQf2IS4s5Kgl4r7T%2BQ3LUS56oCO4Byvu0kF1Q0gl1s5KjSID51peXjNjktocHog1fkMF1GirZHvgWZinoD0VjbPe1ypQ553gxWboRQ4ck80p%2BuiX0rgxSj9RhbWzYP6Kpk%2B9TlVN99bA2amCrbLRp6cT7WEg%2BjOlh6bQgm0SpVHd322hKlUUZFOs%2FqkEvP1xvVXfuqgaWh5nNkXYOWx2TLjs4mvtWyqJyP060QEW2vOQQuIgSyqMemKx0wlBzDY6S%2FJGvFZPT1EHKC8OoCnhntSNDwO%2FcJcUIv6sBBIGJdAW0UbatC5eb%2BPfDFbOz5tKGBJkfvRi9KKmKTN%2Buq9PuxUOXgd96MHhzp233%2FgJKYwMJSBZ6pqM1JCOYa7A4d9ES7SyqPmlAs7BxCG%2BSk5YVce9yfsBoYOq9ZIy4Ih7y8Jp5sr1SHpgbj5GxS265pfSy%2B6%2BKPJRn69zFAWWWU8m7AonMi45lFrc1pCg3IfDPMQZ5TIwgfAZG7MlWe5m6LFfQ96hs1S1ZXxxqZmEAXoAqRDu2GKZJ4NuAt7n06ZEzf8PUkgNWUgWSHjQLPngqBvdkZHtOla8w4M6IygY6pgEVSARxEOT%2BtcsegA3C9okejwhyOtoQgkF%2BO26E7dKc0oBfK75vM9w7eUUiAvwnpzinjVhVdENRTTG6rEW8Q%2FU9FrQShf2pUYLZJHRoc%2BPEP%2BB9zpfTvwGhVCgFHC6%2Bh%2FjTo8pWSZOonVc7Qr7LjVLuTF84n5K6WD%2FoQd2GPN5Udcf%2F73007tsKeiu%2F7613Jv4Q%2Ba9wtWh3Ujq0ejnjYWMXJuNhqxCn&X-Amz-Signature=69133bb0d60112634fe2b30c7ed39c9f1baebb92c89680df9f04b4e61d12eca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634GGFMTS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEAungvqEVw5MSexmrKiq%2BgzCAqJn6YWUbMhv8iMh5P4AiBT%2B1rLcU%2B5%2FfcjC07yaHXKEb6o56WuNg6b3o%2FcZF72jyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMA94tInypNHzSJML5KtwD6fvq%2BO8Duj%2FcB8BGxdgXuZ0zB5XlvVH6SuYxI1LoI3N7bmnzJuKnQf2IS4s5Kgl4r7T%2BQ3LUS56oCO4Byvu0kF1Q0gl1s5KjSID51peXjNjktocHog1fkMF1GirZHvgWZinoD0VjbPe1ypQ553gxWboRQ4ck80p%2BuiX0rgxSj9RhbWzYP6Kpk%2B9TlVN99bA2amCrbLRp6cT7WEg%2BjOlh6bQgm0SpVHd322hKlUUZFOs%2FqkEvP1xvVXfuqgaWh5nNkXYOWx2TLjs4mvtWyqJyP060QEW2vOQQuIgSyqMemKx0wlBzDY6S%2FJGvFZPT1EHKC8OoCnhntSNDwO%2FcJcUIv6sBBIGJdAW0UbatC5eb%2BPfDFbOz5tKGBJkfvRi9KKmKTN%2Buq9PuxUOXgd96MHhzp233%2FgJKYwMJSBZ6pqM1JCOYa7A4d9ES7SyqPmlAs7BxCG%2BSk5YVce9yfsBoYOq9ZIy4Ih7y8Jp5sr1SHpgbj5GxS265pfSy%2B6%2BKPJRn69zFAWWWU8m7AonMi45lFrc1pCg3IfDPMQZ5TIwgfAZG7MlWe5m6LFfQ96hs1S1ZXxxqZmEAXoAqRDu2GKZJ4NuAt7n06ZEzf8PUkgNWUgWSHjQLPngqBvdkZHtOla8w4M6IygY6pgEVSARxEOT%2BtcsegA3C9okejwhyOtoQgkF%2BO26E7dKc0oBfK75vM9w7eUUiAvwnpzinjVhVdENRTTG6rEW8Q%2FU9FrQShf2pUYLZJHRoc%2BPEP%2BB9zpfTvwGhVCgFHC6%2Bh%2FjTo8pWSZOonVc7Qr7LjVLuTF84n5K6WD%2FoQd2GPN5Udcf%2F73007tsKeiu%2F7613Jv4Q%2Ba9wtWh3Ujq0ejnjYWMXJuNhqxCn&X-Amz-Signature=785ab03cb48f0a96aff767dce2469d9743f6e1fc4760dc08d5455770730c81bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

