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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R6PB6LA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2BlNbiMytY3STU5U9hwyc0V%2FRMsAFBm5bQyZV%2BKN6jAAiBj5FqcGyhU2gEsM6GZ0Le7MA1iVttY0zPdZ%2BnXMRugwir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMY2FTJTQJHyheoeIkKtwDVeGml8a1zGL087xshTf%2B35ARwasciTMPsuI6BebFEHMTRLMt3SEAXALoX91q0z9hRM2gZVTwJ5fUze86hM%2BA0D%2F8rXSVHhecLydRUSIYthanM%2Bd0LjKgYIRh%2FFfqyzPNqM3M2efEJBXtS5CA%2B22%2B0H9cz%2BVbr5veVXURB0YU5cj3TxBXzcp4U%2Bqb0K1F46b6G24zkoOW8qi3s6B4j0RDUMdSAuNp6cfvWtaG%2FsVI9u1mS0mKuaDYCdD9jMsR6SGWrDuNxztM9nBytB7Z0XqYslSEkHcm8ff2eB6o6YvasZxGEtmVsfYIp0cg80Yw%2FhhxyrYOKlNRQj5PaR%2BTjs7BG1pJ5L1CCpbgTt5dFpfRqVwOA%2BuuNOBWEaVjZqjM0wUk1%2BeDohPR%2FGlf%2FD7CB9pTjE6f6cRss4trOkBBkBCQUayPx1%2BaSzZTFurLz%2FWmlBZZL6SDtF%2BZcyOi9eE4%2BxwwfQLNQAlmSyxns69SGLQLzo9yWwfGkZxxuNbQ%2F8DOS2iqcBmtXkE200TMnS%2B7MHpzSN65phR1Gv6tqBRi3F1ok4WKAy6yLx9vPCLykebN%2BG6MAPWmzZRMyu9p9uuX5iAy%2F9qBTvNuW7CMIWeo%2Bwe3LW0B7cIHuiYrtAfEZNIw1%2FuHygY6pgFyjoIJd9IP5ltppC%2F5dxIS3bgwhV2XqljZz1Kj0dQ9vZFAddtjjULQKV6pi4RhIULODv1zrJdQNczBnj1enIe5xvr3cjpLqqPYJ9pzIwM1Md%2F3yaGOoUjl83ri0D4ZdUR1xXNm9Ym007LwAF5LX%2B0%2FgJrYteqOmbsE2O8gVWRHR9AY6%2BluYBquNhXRxwwptm3Lb5CObncFMtMIxt21ikeQ5W2GcVtc&X-Amz-Signature=368d483abd98e15fbe0d0f73130cc76c3f344109776440f940a9e5a207ba96c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R6PB6LA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2BlNbiMytY3STU5U9hwyc0V%2FRMsAFBm5bQyZV%2BKN6jAAiBj5FqcGyhU2gEsM6GZ0Le7MA1iVttY0zPdZ%2BnXMRugwir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMY2FTJTQJHyheoeIkKtwDVeGml8a1zGL087xshTf%2B35ARwasciTMPsuI6BebFEHMTRLMt3SEAXALoX91q0z9hRM2gZVTwJ5fUze86hM%2BA0D%2F8rXSVHhecLydRUSIYthanM%2Bd0LjKgYIRh%2FFfqyzPNqM3M2efEJBXtS5CA%2B22%2B0H9cz%2BVbr5veVXURB0YU5cj3TxBXzcp4U%2Bqb0K1F46b6G24zkoOW8qi3s6B4j0RDUMdSAuNp6cfvWtaG%2FsVI9u1mS0mKuaDYCdD9jMsR6SGWrDuNxztM9nBytB7Z0XqYslSEkHcm8ff2eB6o6YvasZxGEtmVsfYIp0cg80Yw%2FhhxyrYOKlNRQj5PaR%2BTjs7BG1pJ5L1CCpbgTt5dFpfRqVwOA%2BuuNOBWEaVjZqjM0wUk1%2BeDohPR%2FGlf%2FD7CB9pTjE6f6cRss4trOkBBkBCQUayPx1%2BaSzZTFurLz%2FWmlBZZL6SDtF%2BZcyOi9eE4%2BxwwfQLNQAlmSyxns69SGLQLzo9yWwfGkZxxuNbQ%2F8DOS2iqcBmtXkE200TMnS%2B7MHpzSN65phR1Gv6tqBRi3F1ok4WKAy6yLx9vPCLykebN%2BG6MAPWmzZRMyu9p9uuX5iAy%2F9qBTvNuW7CMIWeo%2Bwe3LW0B7cIHuiYrtAfEZNIw1%2FuHygY6pgFyjoIJd9IP5ltppC%2F5dxIS3bgwhV2XqljZz1Kj0dQ9vZFAddtjjULQKV6pi4RhIULODv1zrJdQNczBnj1enIe5xvr3cjpLqqPYJ9pzIwM1Md%2F3yaGOoUjl83ri0D4ZdUR1xXNm9Ym007LwAF5LX%2B0%2FgJrYteqOmbsE2O8gVWRHR9AY6%2BluYBquNhXRxwwptm3Lb5CObncFMtMIxt21ikeQ5W2GcVtc&X-Amz-Signature=399b9c998e123a47b14f26a06d2ca5715b5bfdd75eaf3bbf3477b862aad04e03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

