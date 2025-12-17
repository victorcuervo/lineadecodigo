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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6F2JGTF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7Q0dfX%2F08P1ucI4ukp05yJPpDcb7mfEoE7B8gidG%2FJAIhAN1vlOu2y63f0OkRbOUZAbvw6THzQh4%2BqHlBOYp2P36EKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDVtr%2BLhyS88Z3d1cq3AOOcrG%2FnrcP6Q%2FpdC3tp6xEhiyOAQyvOIhEDBLSOwk%2B37ja%2FJ42gcgBBC2NBqOd8GGMKNaEZ%2BZepP4hWIRQzVDTr8q5Amw7YV94k%2BMQ4kNrPQjer7VpNuUcI0KRyjVP2hgXCckEZGxma34%2FTA8HRzNoH36%2F9em2ubUp9WTtuUCqQWVxornyIL3cEMgspcnxo3yu0RWlOLjEmrkZhRsdMqj4TtNCuc%2FJ9cdTdVhgKa6WIua2ldyCEhcFjjhG6resmB0t1HWxDuYRudoEfCOUekizcsUNxrFgg9zHwjtkzWra6oUkAqjZFXQ06JTouRuTUp94x%2B1bGOMJXoDknSbjN4MMsHLwdCopIt%2BenKelZ3gx9P8XMp%2BFc5aE%2BEt9FdHEDEFjPj86Xi5TRjnUGjno6RHbWMKhQsRzW9CynPyuIEenSDseEh%2BUf9YE0pQ9kzQJ0PR3gSUJjVrB8huYpzHj8fzYqM5T7WUQe1Dmzit8fzP4qdPwzIRMFFLStWugyRG9OLckSd3tMsZGEbgnihLRig6qIeuwciR3tw%2BKqhXeiFd7G0GpTLp6B61bZqFcENZBo7CswcOnIh2llHpgrdHvnmNzNtJgKUr1bFWUhiC%2BW%2F6M0MgrQF7hn6OnOrK6fTDTi4zKBjqkAUJgL0MIlKvndeugYvBPJgPrB6HI8AXxdqvTdh7StBnViSkthbiZL6sPnIGyxhiqK%2Fv0mKjATvF3Oex7%2FFHbx%2BXEXMor5sWPiP08roFeW8AZQLeX2QvsA6Ch77aiNSMl68M2hlkWpIOHMGqJdLpd9l9sGU3BUvr4i9FBv7NIEYrV8Y7V7CkYkkSSKKFa0kg8ilXX1tfO7Go08Dig%2FR4IsnY9kYpQ&X-Amz-Signature=9c525469adeacce1e81f6d950ec4d7306f31eccf5b11b8b155b3eef9aa3b66df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6F2JGTF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7Q0dfX%2F08P1ucI4ukp05yJPpDcb7mfEoE7B8gidG%2FJAIhAN1vlOu2y63f0OkRbOUZAbvw6THzQh4%2BqHlBOYp2P36EKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDVtr%2BLhyS88Z3d1cq3AOOcrG%2FnrcP6Q%2FpdC3tp6xEhiyOAQyvOIhEDBLSOwk%2B37ja%2FJ42gcgBBC2NBqOd8GGMKNaEZ%2BZepP4hWIRQzVDTr8q5Amw7YV94k%2BMQ4kNrPQjer7VpNuUcI0KRyjVP2hgXCckEZGxma34%2FTA8HRzNoH36%2F9em2ubUp9WTtuUCqQWVxornyIL3cEMgspcnxo3yu0RWlOLjEmrkZhRsdMqj4TtNCuc%2FJ9cdTdVhgKa6WIua2ldyCEhcFjjhG6resmB0t1HWxDuYRudoEfCOUekizcsUNxrFgg9zHwjtkzWra6oUkAqjZFXQ06JTouRuTUp94x%2B1bGOMJXoDknSbjN4MMsHLwdCopIt%2BenKelZ3gx9P8XMp%2BFc5aE%2BEt9FdHEDEFjPj86Xi5TRjnUGjno6RHbWMKhQsRzW9CynPyuIEenSDseEh%2BUf9YE0pQ9kzQJ0PR3gSUJjVrB8huYpzHj8fzYqM5T7WUQe1Dmzit8fzP4qdPwzIRMFFLStWugyRG9OLckSd3tMsZGEbgnihLRig6qIeuwciR3tw%2BKqhXeiFd7G0GpTLp6B61bZqFcENZBo7CswcOnIh2llHpgrdHvnmNzNtJgKUr1bFWUhiC%2BW%2F6M0MgrQF7hn6OnOrK6fTDTi4zKBjqkAUJgL0MIlKvndeugYvBPJgPrB6HI8AXxdqvTdh7StBnViSkthbiZL6sPnIGyxhiqK%2Fv0mKjATvF3Oex7%2FFHbx%2BXEXMor5sWPiP08roFeW8AZQLeX2QvsA6Ch77aiNSMl68M2hlkWpIOHMGqJdLpd9l9sGU3BUvr4i9FBv7NIEYrV8Y7V7CkYkkSSKKFa0kg8ilXX1tfO7Go08Dig%2FR4IsnY9kYpQ&X-Amz-Signature=f03c6a53286b04314a64e175bcb2ea79f45e758122c11cbf7523a2920026d3d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

