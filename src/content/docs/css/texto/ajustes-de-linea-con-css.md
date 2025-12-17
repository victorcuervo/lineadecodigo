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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DCHVXPT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu006Zo0tXkb00pJZ8CmcYOKQSFN%2Fm2P6u1eUfJi581QIhAOuTjo6jKBDkOQMo37%2BMwDhrsImkchBnZH5VBkOlEdmlKv8DCHwQABoMNjM3NDIzMTgzODA1Igy8gtHM%2BEnfY0Fi62wq3AMUJUL7PCyS4wipJXbIlF3Du8rB41dxwgYuoZg2YUKu4hjySwMGC5InQatbJ7ggGyULojRINmJ9f3qdAZa%2FdtdO%2B1bzxAviPsVGTW2LBuD1afkIm4IerkfXh7h8MqhI4NkPBOVjR2FlxCNZ5E2zZnTIwK3wVe%2Ffg%2BDi6npQZnVqaivdEiElD4IA4Tm%2F7Z35q5E11OeEB0yAl5MMAy4suNYFQcWDIySvZ2WLHbdz7czw2PXuFhUxw1VWJujy5JFjTfh5sFwWPu7iaRH9126ZBxxcw1fV5UDcpoV9cMl%2BxKAgGJF4RuJjjCUSJwFZtOTdBfdA%2FqeQTdUIxV1croCWB6TNWX%2BDBBoO6Wu0W5dQJNfMtu%2BDcl9dpDEcxoHK6nif2Zr0%2BZMkZuRej53WxF8xiSXHeheSjBn2%2B0wqGHYcT%2FHxwvcVxW8KAAv0oTIFWm5vojy4Vhda5BCrTjUOGNVpZYKhwjM1SRbtamKdcHaEHpzp8K7u09qa26wrXCaPMf5ZN1ZF6K4jeyLSIDRIszq019cpkZiVcR0Y1W%2BP0LqUMeFyk28jbAU40oW1%2FgQ82aq%2FCEFw0gcSbaA9tiDBjKL7mfqOXIRUzqXNC4EC66RrsS7An1He6R0X%2By9OzJUxczCVj4rKBjqkARj9mflwtRC8v4%2FRmzLGykqpWjKKLWVIcjnjSVm8ZceCbPjBmFzt27WwhS%2BUO9n8iJZ7p%2B5sGgXZZo9imzSdbec%2FoseLgnFVKir379GPK4qwijSCEwIjxXvkLbgQxLmH5WpokIEQOvgX2JdGiTL94hDOHOpCiHz3ZvFmelsPXQZb6b0HPOGm14uBoBXUuTUkL8oHjGaDdJUBcgM3sV5KiZ8CaCNN&X-Amz-Signature=660f2ceb52b92379c906d353cf369b610c83b3c2a478518fdf48e87bcec0b1a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DCHVXPT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu006Zo0tXkb00pJZ8CmcYOKQSFN%2Fm2P6u1eUfJi581QIhAOuTjo6jKBDkOQMo37%2BMwDhrsImkchBnZH5VBkOlEdmlKv8DCHwQABoMNjM3NDIzMTgzODA1Igy8gtHM%2BEnfY0Fi62wq3AMUJUL7PCyS4wipJXbIlF3Du8rB41dxwgYuoZg2YUKu4hjySwMGC5InQatbJ7ggGyULojRINmJ9f3qdAZa%2FdtdO%2B1bzxAviPsVGTW2LBuD1afkIm4IerkfXh7h8MqhI4NkPBOVjR2FlxCNZ5E2zZnTIwK3wVe%2Ffg%2BDi6npQZnVqaivdEiElD4IA4Tm%2F7Z35q5E11OeEB0yAl5MMAy4suNYFQcWDIySvZ2WLHbdz7czw2PXuFhUxw1VWJujy5JFjTfh5sFwWPu7iaRH9126ZBxxcw1fV5UDcpoV9cMl%2BxKAgGJF4RuJjjCUSJwFZtOTdBfdA%2FqeQTdUIxV1croCWB6TNWX%2BDBBoO6Wu0W5dQJNfMtu%2BDcl9dpDEcxoHK6nif2Zr0%2BZMkZuRej53WxF8xiSXHeheSjBn2%2B0wqGHYcT%2FHxwvcVxW8KAAv0oTIFWm5vojy4Vhda5BCrTjUOGNVpZYKhwjM1SRbtamKdcHaEHpzp8K7u09qa26wrXCaPMf5ZN1ZF6K4jeyLSIDRIszq019cpkZiVcR0Y1W%2BP0LqUMeFyk28jbAU40oW1%2FgQ82aq%2FCEFw0gcSbaA9tiDBjKL7mfqOXIRUzqXNC4EC66RrsS7An1He6R0X%2By9OzJUxczCVj4rKBjqkARj9mflwtRC8v4%2FRmzLGykqpWjKKLWVIcjnjSVm8ZceCbPjBmFzt27WwhS%2BUO9n8iJZ7p%2B5sGgXZZo9imzSdbec%2FoseLgnFVKir379GPK4qwijSCEwIjxXvkLbgQxLmH5WpokIEQOvgX2JdGiTL94hDOHOpCiHz3ZvFmelsPXQZb6b0HPOGm14uBoBXUuTUkL8oHjGaDdJUBcgM3sV5KiZ8CaCNN&X-Amz-Signature=4d2cdc4ad77a0910da0d7e991b6ceef48b06af146dd96433ac20aa9a2cff7c46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

