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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V47JYU3B%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTMR36zrrMRiyVJ5vfRkChERtGf24cFhrALNceEdYRWQIhAJj9gk5eusccL%2Blwmo0zTPjS8%2ByJXyePX22eTr%2FtWjC6Kv8DCHwQABoMNjM3NDIzMTgzODA1IgziTrZhuVk56c0LUe8q3AOMJOfWqyIh1ucWXZxrSUqNEE0K2G7g6k6BcnbmzGjf7%2FjzdE0hKKEEl9H5WPa1EBAWayxylMQn%2FHV48kX3rQ7dz18BDn0Nt3KH7Vo9f9lUrQVwFXQlwyLvD4ahNkFwfpGQESoaUgDn%2FXySobq1C6qnksHzFx0rsYPRu%2FPthzGBmxiwGpwk75bYxd2chQIxNySgj8xAQcsICHDRHNYvyLENCmVJkySlgQQuh7pgOciFIFuxM7Fmn2al4zer%2FfoKMJnH6v0%2Bj%2BffUZ6qhn5KApb%2Fl%2FBbv4vQ0VPnATOV4LTPcdvOZkqfFkdlbDTX%2FGKvUZPAnD7kVmXawtkjLTGt2qMnRp%2FOJpb%2FHIm1X%2FGWmOFnYrNJKuYZI8Eq%2BbK66%2FYojIT4wTbf23K2KDx76YfG5I2lyPei5MYEXBPgkRU6A5NgxwbtuFaDTcsAsSZMQ8mGM8OiBcFK%2Bu%2FibVBeqF%2FIKex52em1zLhxLXnV0Ig2fB%2BcZxMwR6ipAK4%2F%2FBsepbmpUOW4qfPUomMlPZAUb32wu4Q61Ddy6bnVjiD%2FHE%2B%2FEPPg9ktBeQMsq6x3nX%2BNWSTfUZuZtoUitI4WCda9LKfwZVV%2BWBfue09OVKl7gLN9GLPWY9eU5Z23emRKhqUVaDCDj4rKBjqkATehYc80vorc5Shvsd9PmtHHt53jbLiA3RIkaZx%2BKvixEoBLOC1MMILaDm8RaPQVsf28Ri8hWbIaw9TXO4Q8giCgttHxBQZ8Yd0%2F7vUSZCdU%2FzhAvx%2BgdH8Hc7NiLqopxhvnJAZQQF4pc38ylx1IENlz%2FD4Ia1KZV2HbNrNPyuL9mkwrLS%2FF4Zzgb4v6yZjFYbelMVvw%2F5nCc3jXgmU52ePd%2F6Wk&X-Amz-Signature=29420aa047448c30355b350470526e778075be8a77e23dc23e5930d46b86cc0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V47JYU3B%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTMR36zrrMRiyVJ5vfRkChERtGf24cFhrALNceEdYRWQIhAJj9gk5eusccL%2Blwmo0zTPjS8%2ByJXyePX22eTr%2FtWjC6Kv8DCHwQABoMNjM3NDIzMTgzODA1IgziTrZhuVk56c0LUe8q3AOMJOfWqyIh1ucWXZxrSUqNEE0K2G7g6k6BcnbmzGjf7%2FjzdE0hKKEEl9H5WPa1EBAWayxylMQn%2FHV48kX3rQ7dz18BDn0Nt3KH7Vo9f9lUrQVwFXQlwyLvD4ahNkFwfpGQESoaUgDn%2FXySobq1C6qnksHzFx0rsYPRu%2FPthzGBmxiwGpwk75bYxd2chQIxNySgj8xAQcsICHDRHNYvyLENCmVJkySlgQQuh7pgOciFIFuxM7Fmn2al4zer%2FfoKMJnH6v0%2Bj%2BffUZ6qhn5KApb%2Fl%2FBbv4vQ0VPnATOV4LTPcdvOZkqfFkdlbDTX%2FGKvUZPAnD7kVmXawtkjLTGt2qMnRp%2FOJpb%2FHIm1X%2FGWmOFnYrNJKuYZI8Eq%2BbK66%2FYojIT4wTbf23K2KDx76YfG5I2lyPei5MYEXBPgkRU6A5NgxwbtuFaDTcsAsSZMQ8mGM8OiBcFK%2Bu%2FibVBeqF%2FIKex52em1zLhxLXnV0Ig2fB%2BcZxMwR6ipAK4%2F%2FBsepbmpUOW4qfPUomMlPZAUb32wu4Q61Ddy6bnVjiD%2FHE%2B%2FEPPg9ktBeQMsq6x3nX%2BNWSTfUZuZtoUitI4WCda9LKfwZVV%2BWBfue09OVKl7gLN9GLPWY9eU5Z23emRKhqUVaDCDj4rKBjqkATehYc80vorc5Shvsd9PmtHHt53jbLiA3RIkaZx%2BKvixEoBLOC1MMILaDm8RaPQVsf28Ri8hWbIaw9TXO4Q8giCgttHxBQZ8Yd0%2F7vUSZCdU%2FzhAvx%2BgdH8Hc7NiLqopxhvnJAZQQF4pc38ylx1IENlz%2FD4Ia1KZV2HbNrNPyuL9mkwrLS%2FF4Zzgb4v6yZjFYbelMVvw%2F5nCc3jXgmU52ePd%2F6Wk&X-Amz-Signature=240b72e5a1845fcab3f5948607abb72041beaeca686d5671b9be59bed6b14969&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

