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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTYRRC4D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkHUILd1bmO%2FYH%2Fo6fYThsBeIXtpN%2BCEgSGonV%2BhpwuAiB5Q3TGhA%2BVI9%2Bm1dpiftpdMLqIW%2B14Fi0V3YYQPYSzAir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMHvoyl5wjnDhGQkGpKtwDi51adgOj4rSgYl7WTB%2FTocVuD7cUs6MfbM%2BEe3Am4%2BIPajk%2FX0ivPQjOBExc6ksUsAlymwMaxHXtnCBwSs3ZAwXji%2BnkdOuY0h0YWEurpPgyNKD1nF0cnC%2FvuDBCot4npfjLYE8brdeywh34T7wThW%2B%2FDoBdikMV0etqeg2JNaEbf7jzapD0BMXS7S3at2PJJsAUkoVIzs%2FqbwZg3awt5jZxioNamNz9DxzOP7BxIGMpf0s8tIcU9n9IwRwCcZyZOdSgqWxqzEj%2B4Lb9aAuoVa8lGonnTcLdgY%2F0cL2oHTZMRSmstoo9tVrcE1ncTX%2B2pnnztyI8ADmbBdhSrRDBODMETSvUZViUqbjOYfTBBImJZ%2BqOQ2TLlIfZxVp%2FewrgSyMUkUcv82N08tb485iQUBPdNGJ3z%2B5Wp6ExrLufMWSzZjAwOiGEnSN8705A%2BJIKjP6hP285xPg%2FN%2F%2FHuqVUreRj5DfsVO9MN%2FjLr3kugHx5io3ETeDcNGb7YeJN3B12Tg%2FBMNbsttP13jItrVXl8rPD0CEQym9oH5im296UtjFUtfI%2B9UZE%2FxT11MZKeP0wpLKnCzFiXWfbLrWqA4bUXEclzQ9R4ja8uWYspC2KeSo4vROOqQOIS%2FedP5gw%2F9CJygY6pgHYqNCQpFHTr4pWLzgKNzerB4Nc11iAIWtnt0cYktYS6KtUy%2BXRNdAMFfN3w9Q8RADQr05SFinzQIJpy%2Bv9cncLUOwTk8dvJKd%2B688%2Fhx4Q8OL0vJdRLJr687OwClIQQWr%2FHzlRD%2BlPbgnCl7Ggq4XUxrJCMqfCSnQx23pZBg0cqYHFZmlSZyju63b3r05f7sPgDSvePg0ZjDeXErfP7Wrq%2Fl%2Fghpqu&X-Amz-Signature=62bdcb2f5ebef38829b32818fe6807e768df493717c0624341f8fa21bd83ff03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTYRRC4D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkHUILd1bmO%2FYH%2Fo6fYThsBeIXtpN%2BCEgSGonV%2BhpwuAiB5Q3TGhA%2BVI9%2Bm1dpiftpdMLqIW%2B14Fi0V3YYQPYSzAir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMHvoyl5wjnDhGQkGpKtwDi51adgOj4rSgYl7WTB%2FTocVuD7cUs6MfbM%2BEe3Am4%2BIPajk%2FX0ivPQjOBExc6ksUsAlymwMaxHXtnCBwSs3ZAwXji%2BnkdOuY0h0YWEurpPgyNKD1nF0cnC%2FvuDBCot4npfjLYE8brdeywh34T7wThW%2B%2FDoBdikMV0etqeg2JNaEbf7jzapD0BMXS7S3at2PJJsAUkoVIzs%2FqbwZg3awt5jZxioNamNz9DxzOP7BxIGMpf0s8tIcU9n9IwRwCcZyZOdSgqWxqzEj%2B4Lb9aAuoVa8lGonnTcLdgY%2F0cL2oHTZMRSmstoo9tVrcE1ncTX%2B2pnnztyI8ADmbBdhSrRDBODMETSvUZViUqbjOYfTBBImJZ%2BqOQ2TLlIfZxVp%2FewrgSyMUkUcv82N08tb485iQUBPdNGJ3z%2B5Wp6ExrLufMWSzZjAwOiGEnSN8705A%2BJIKjP6hP285xPg%2FN%2F%2FHuqVUreRj5DfsVO9MN%2FjLr3kugHx5io3ETeDcNGb7YeJN3B12Tg%2FBMNbsttP13jItrVXl8rPD0CEQym9oH5im296UtjFUtfI%2B9UZE%2FxT11MZKeP0wpLKnCzFiXWfbLrWqA4bUXEclzQ9R4ja8uWYspC2KeSo4vROOqQOIS%2FedP5gw%2F9CJygY6pgHYqNCQpFHTr4pWLzgKNzerB4Nc11iAIWtnt0cYktYS6KtUy%2BXRNdAMFfN3w9Q8RADQr05SFinzQIJpy%2Bv9cncLUOwTk8dvJKd%2B688%2Fhx4Q8OL0vJdRLJr687OwClIQQWr%2FHzlRD%2BlPbgnCl7Ggq4XUxrJCMqfCSnQx23pZBg0cqYHFZmlSZyju63b3r05f7sPgDSvePg0ZjDeXErfP7Wrq%2Fl%2Fghpqu&X-Amz-Signature=4999dce8d6491e2a70a9f674f981391f9edff68d393fef529f1479614555d97d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

