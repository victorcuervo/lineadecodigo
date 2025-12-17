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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633UBNXWE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkED%2BrFHEbGJze0G85lzFdUTw0Xa%2BIJnnD4MTIRoM6%2FwIhALIAvfGHEZHTINuTP9SGzrWQygVLzfct3u4NHb74vk2FKv8DCHQQABoMNjM3NDIzMTgzODA1Igxb9rcu%2BMuNcWA2cnUq3AOdlwYobIT8ll7%2FGTh4OA5WCte4h1gZ0ikFaq4SCb3xPBd8AAphNbr4E4qVOe0i15nDl4F1fLIFL0FuVrwmBpujHKklJOLe6MH2e6s3C5VBSUgALqN9IGZrGTz%2FO4qjvEpCVfrn151DLnTX4dDTnW4z4J6uKpMareN6M5UFNrDXQcXIg9FFKnvoSpZfW%2B734Z0yjxIcyryuiB1DfulvWbG2%2FkrzggozvSLtxkFiLny5fQZdScWGMAHFKXDq23ogftnAwx0V9FMf%2Bd%2BJUjWMiJPvcA%2FVetq2pfKlGc2qdMDuM8oLy%2FUSpJ6wqjnNdUmwAiSIW1IoWj4%2BOtyAxVLEWBGVlww36UZyMQGN2X5tQY8IItdJJa2q%2B2WVrsYsLOLGrrmFBLJTEs0XLwlgeC2bD8O7v7pN9y%2FhqTw2KEocVw5IYFvwVkYgsy76QxyUXDovie8W3rVwIEQjSPiBVfjOkr6EWtHVmSiob%2FJKItkFJ%2Fp%2BEMwUoy5xb9BO5gHml0RKQUc%2FHWeqqjyMoe6mNOjoN%2F5fkdb2dbOqVsAh7qD8Y0jVWn%2F%2BcsdQlNa74FTXyZ4JIer44%2BSbqH1nBIaN8y%2BlnRKULFb2LNjUtvuI62KHaJgZ2V96kkDPPhm1vJV4hTD7sYjKBjqkAW%2BTDvuIB8Ry%2FoI5Phxlun5ld5NftgaGNoIC%2BHe8j3qISuSX0we1QkOsLQmlZamlSbdsIqe1kvrlWebMrPs%2BXT%2FJoD350BTcKd4KmKF5LT5rjacXHrpDS3LdhyPv0905pVjsrOIEd3Y72PEmMfeszqo0egABI7O2qur1ATE64SfydgeSZs7qQnWtye8sucHWrZ9cXHJC%2Fl3kOlF84VA%2BvORY8g0g&X-Amz-Signature=159ae91d1b75a5239fdfe8c8cfb00ace5be3ae65bbb8d189db5c30a6e7d30708&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633UBNXWE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkED%2BrFHEbGJze0G85lzFdUTw0Xa%2BIJnnD4MTIRoM6%2FwIhALIAvfGHEZHTINuTP9SGzrWQygVLzfct3u4NHb74vk2FKv8DCHQQABoMNjM3NDIzMTgzODA1Igxb9rcu%2BMuNcWA2cnUq3AOdlwYobIT8ll7%2FGTh4OA5WCte4h1gZ0ikFaq4SCb3xPBd8AAphNbr4E4qVOe0i15nDl4F1fLIFL0FuVrwmBpujHKklJOLe6MH2e6s3C5VBSUgALqN9IGZrGTz%2FO4qjvEpCVfrn151DLnTX4dDTnW4z4J6uKpMareN6M5UFNrDXQcXIg9FFKnvoSpZfW%2B734Z0yjxIcyryuiB1DfulvWbG2%2FkrzggozvSLtxkFiLny5fQZdScWGMAHFKXDq23ogftnAwx0V9FMf%2Bd%2BJUjWMiJPvcA%2FVetq2pfKlGc2qdMDuM8oLy%2FUSpJ6wqjnNdUmwAiSIW1IoWj4%2BOtyAxVLEWBGVlww36UZyMQGN2X5tQY8IItdJJa2q%2B2WVrsYsLOLGrrmFBLJTEs0XLwlgeC2bD8O7v7pN9y%2FhqTw2KEocVw5IYFvwVkYgsy76QxyUXDovie8W3rVwIEQjSPiBVfjOkr6EWtHVmSiob%2FJKItkFJ%2Fp%2BEMwUoy5xb9BO5gHml0RKQUc%2FHWeqqjyMoe6mNOjoN%2F5fkdb2dbOqVsAh7qD8Y0jVWn%2F%2BcsdQlNa74FTXyZ4JIer44%2BSbqH1nBIaN8y%2BlnRKULFb2LNjUtvuI62KHaJgZ2V96kkDPPhm1vJV4hTD7sYjKBjqkAW%2BTDvuIB8Ry%2FoI5Phxlun5ld5NftgaGNoIC%2BHe8j3qISuSX0we1QkOsLQmlZamlSbdsIqe1kvrlWebMrPs%2BXT%2FJoD350BTcKd4KmKF5LT5rjacXHrpDS3LdhyPv0905pVjsrOIEd3Y72PEmMfeszqo0egABI7O2qur1ATE64SfydgeSZs7qQnWtye8sucHWrZ9cXHJC%2Fl3kOlF84VA%2BvORY8g0g&X-Amz-Signature=41249a7b3517772116795d8d36dae8b36c8a432f0950341cfb58dfe55e987738&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

