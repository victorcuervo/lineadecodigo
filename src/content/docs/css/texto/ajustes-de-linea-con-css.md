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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626XVIB3V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtyKpPOUdhT2hk1D3cc%2BCFipXZRDcwmHtYXl%2FxmG0rYQIhAK7WvK60ZNDYz7rafSftCWUn5ogRvYLGxXL8MzKgx%2FUwKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyFgMcdGTKaf5i88kq3APIpbQpABnT1O7S3RyiAAobjQITB3QczpT2AEBsox%2FceuSpc4dDEZVLSoJSXx8UTk%2FoxDpYvMv%2Bif%2FuHZpHmaFe7BHCYZG5MXG%2FLoZRvwYCF9HCb0saKCayhtgoCf8OiUi8G5GzsYJt3Qj59V7zBxSejm3gSc7EDhff6AQbnJb%2BaRlfLDELpkeMwN1AHUQcpdHoN2iwaVVu7sPv67sBq1o5420m8DKEg1WbAXKhaEkdugu%2Bb9HxgSU6zbOcUOK2T8oAT5XAlPY6RBuMe52%2B6ecW40SKwC9fwlLoDybw%2BfKFdJ0IyTO%2FlieAYUQuwUd9Fs4c%2BKOYGoM%2BryFQCNhHy%2BYOX1E76EFFp8NDuMQIRj0caAr7%2FDvcpErRrZdwasMyjkv5VS4sYXookluZOHBh45kDCE%2BYo0sHILhfDm6kpnC6Oa51uuRL6QUvxjJAKwZGezPA79Bwa3Nf0TnvmkPMgfs%2Fa7L43bG%2FF5paVxhBIpHST5INREGCSV6LSOhx7xPgEnXAi8PT2AEkzOJHUxGvQxn%2Fk6zn%2BKP%2F2J%2BSKpGMp6aqX%2BJ9K1nJXGnj%2F8agIZiMYbhjYKvS8k1T27v5u%2FBj5z6xu1KoFPB31SJdYXr4KSKlYf%2FjZ6pkukFvNL68OTCYn4vKBjqkAUgSa6QhpXo9TJTmSdBdIJmNKfMCcYp8IKhNgl7U0%2FmbXirpl7MYWsqUIXl3%2FHSbUUKzsLliG%2F5TZlbfDCgZ7EQnHAKhOyuqyEbW7oW3n1m1i%2BzbOwTm%2B%2B5b0x1ljj0%2BIgGgz7mjIJGu6tRLTxiLbmMn4kciidy9uoxv9W7CMifbqufXKAG7sJECkMXkoZ0DkRy410%2ByglkSBadXsK9nwfqri26Z&X-Amz-Signature=fcce7a4cc961027076f1904c1c8daf8dee8e982257426fc189da2c1205be5d4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626XVIB3V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtyKpPOUdhT2hk1D3cc%2BCFipXZRDcwmHtYXl%2FxmG0rYQIhAK7WvK60ZNDYz7rafSftCWUn5ogRvYLGxXL8MzKgx%2FUwKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyFgMcdGTKaf5i88kq3APIpbQpABnT1O7S3RyiAAobjQITB3QczpT2AEBsox%2FceuSpc4dDEZVLSoJSXx8UTk%2FoxDpYvMv%2Bif%2FuHZpHmaFe7BHCYZG5MXG%2FLoZRvwYCF9HCb0saKCayhtgoCf8OiUi8G5GzsYJt3Qj59V7zBxSejm3gSc7EDhff6AQbnJb%2BaRlfLDELpkeMwN1AHUQcpdHoN2iwaVVu7sPv67sBq1o5420m8DKEg1WbAXKhaEkdugu%2Bb9HxgSU6zbOcUOK2T8oAT5XAlPY6RBuMe52%2B6ecW40SKwC9fwlLoDybw%2BfKFdJ0IyTO%2FlieAYUQuwUd9Fs4c%2BKOYGoM%2BryFQCNhHy%2BYOX1E76EFFp8NDuMQIRj0caAr7%2FDvcpErRrZdwasMyjkv5VS4sYXookluZOHBh45kDCE%2BYo0sHILhfDm6kpnC6Oa51uuRL6QUvxjJAKwZGezPA79Bwa3Nf0TnvmkPMgfs%2Fa7L43bG%2FF5paVxhBIpHST5INREGCSV6LSOhx7xPgEnXAi8PT2AEkzOJHUxGvQxn%2Fk6zn%2BKP%2F2J%2BSKpGMp6aqX%2BJ9K1nJXGnj%2F8agIZiMYbhjYKvS8k1T27v5u%2FBj5z6xu1KoFPB31SJdYXr4KSKlYf%2FjZ6pkukFvNL68OTCYn4vKBjqkAUgSa6QhpXo9TJTmSdBdIJmNKfMCcYp8IKhNgl7U0%2FmbXirpl7MYWsqUIXl3%2FHSbUUKzsLliG%2F5TZlbfDCgZ7EQnHAKhOyuqyEbW7oW3n1m1i%2BzbOwTm%2B%2B5b0x1ljj0%2BIgGgz7mjIJGu6tRLTxiLbmMn4kciidy9uoxv9W7CMifbqufXKAG7sJECkMXkoZ0DkRy410%2ByglkSBadXsK9nwfqri26Z&X-Amz-Signature=f443bd80ada0bf8d75d10d0d26c525901a049dd6481f8e887c7fb741aae6a600&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

