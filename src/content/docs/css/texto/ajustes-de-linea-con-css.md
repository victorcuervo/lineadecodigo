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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653T22MNY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8HPl%2BO%2BdhVEyyPIIuvQLKqDBMoM65VBpyr3%2B2AMeINwIhAIMyU7elNGUtxaSIiWTIL8gRl6Euv%2B9ckdkSUsBV4Z5ZKv8DCHYQABoMNjM3NDIzMTgzODA1IgwxB3fLsHa10Xlwaycq3AO%2BgrBbsxosivf9kQiKpQpHwTOTi54khAnYiGVVYq2cNMjAWrunbzEnBnDKamchyfkUIuFAyRumzomguN6JhyVEeBHaGYwqmzCEjgRgzcfaKzvj%2FvCdjWJAHY%2BngzrRSZv6Uu%2Bg46Hrz0L02uoHZK3Yyae0PULH9VM84bzIhJCiIrzn9Z7Xeg3kS3NHkzkez0VSaE3xKFypj%2BlP%2FlQilwSSZueL%2FdRjg2SNVzU6JQJbldQS2xQFz9CXI1Bq9DTLQkH46V7vV4acKxv2BRNaur2%2FFsGeKrjVwKLAz2apFRYCmnKK5KcrJGd32H5UwnJL9KUtmTA79e128YHbtBmjFfASjB9OxhNgFcyn8IJnPpczAns3zi5ekAjdcegQ%2BrhIPJxKcCQFuDmcyswKV1lU8Ljdne91V01dO65y3Qui0i2F9exOTHVTTQ%2B73zna5p8Ed0gZiU%2BLg5zDwceGoeinK6ppXfIijJr4sFcSI8Mql2kttxQEpdU8eG9qMhnXTtbS2QhkDW9VyAioORx6etMncdw8nBri9AEvzIXhdDZWYIZoyPZYS%2Bh3BFSecKX8YQiQ4NTINv5m2PAITFM6f7f285XuOySGu3ZjF9YdfWkzuvSYueCg6zdiof2FhC66ZzDJ6YjKBjqkAXCBzBHun8HiBLajUnYQjCKToJmrqXsF%2Bv1j0Sq5adzVlGgicnIdahCG9AQW4qWr%2Ftkg7fzJhGOg%2FYxtGD2tDGJUd%2FE3VqcpyLoUwcgPmJBfRxAgs3c%2F4YxA0Fhi%2FuGXRoVuTPBTGmaE%2Flrw9%2Fk41C3dYagVTRyO1PeWIe7iHQ7epPo3YZ13MTjYq4vyVYrV49lvJMbwhkfC8IrFFktRjh%2BXUQqm&X-Amz-Signature=a2550256d234cdaaa2ee272ab89fb00a5882fa57386f4daeba83a735ca1b15c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653T22MNY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8HPl%2BO%2BdhVEyyPIIuvQLKqDBMoM65VBpyr3%2B2AMeINwIhAIMyU7elNGUtxaSIiWTIL8gRl6Euv%2B9ckdkSUsBV4Z5ZKv8DCHYQABoMNjM3NDIzMTgzODA1IgwxB3fLsHa10Xlwaycq3AO%2BgrBbsxosivf9kQiKpQpHwTOTi54khAnYiGVVYq2cNMjAWrunbzEnBnDKamchyfkUIuFAyRumzomguN6JhyVEeBHaGYwqmzCEjgRgzcfaKzvj%2FvCdjWJAHY%2BngzrRSZv6Uu%2Bg46Hrz0L02uoHZK3Yyae0PULH9VM84bzIhJCiIrzn9Z7Xeg3kS3NHkzkez0VSaE3xKFypj%2BlP%2FlQilwSSZueL%2FdRjg2SNVzU6JQJbldQS2xQFz9CXI1Bq9DTLQkH46V7vV4acKxv2BRNaur2%2FFsGeKrjVwKLAz2apFRYCmnKK5KcrJGd32H5UwnJL9KUtmTA79e128YHbtBmjFfASjB9OxhNgFcyn8IJnPpczAns3zi5ekAjdcegQ%2BrhIPJxKcCQFuDmcyswKV1lU8Ljdne91V01dO65y3Qui0i2F9exOTHVTTQ%2B73zna5p8Ed0gZiU%2BLg5zDwceGoeinK6ppXfIijJr4sFcSI8Mql2kttxQEpdU8eG9qMhnXTtbS2QhkDW9VyAioORx6etMncdw8nBri9AEvzIXhdDZWYIZoyPZYS%2Bh3BFSecKX8YQiQ4NTINv5m2PAITFM6f7f285XuOySGu3ZjF9YdfWkzuvSYueCg6zdiof2FhC66ZzDJ6YjKBjqkAXCBzBHun8HiBLajUnYQjCKToJmrqXsF%2Bv1j0Sq5adzVlGgicnIdahCG9AQW4qWr%2Ftkg7fzJhGOg%2FYxtGD2tDGJUd%2FE3VqcpyLoUwcgPmJBfRxAgs3c%2F4YxA0Fhi%2FuGXRoVuTPBTGmaE%2Flrw9%2Fk41C3dYagVTRyO1PeWIe7iHQ7epPo3YZ13MTjYq4vyVYrV49lvJMbwhkfC8IrFFktRjh%2BXUQqm&X-Amz-Signature=fe08dbff1bc6f720ee4c43633947ebf49ee73956b3d2215c312a24fef3fdebf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

