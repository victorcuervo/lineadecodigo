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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GIELVW5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T181557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHY8alMN6EbQkj9of5kbm1PD7LXhdbjG7zg5Ot5lg4BMAiEA6PSg7uTi%2F4xsy3WRrGEB3OYz7OoHnjYJkGAHBE4H4w0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNJibx8ew6fYKdCOCrcA7MkEaai4jXlCdWPDqm6hWIP3%2Br2w1FXEF2wDgrmWdoRerBzWHZiEflIphmQhuHqUjGlw1VvcdDdSRH7y4IKNgC%2B18gbgOQ8j0AdGljV4ddGtZ8dqe7pPEH0BbM%2BuoCdCYEI0ZE9T6M%2BYZ1XetljvNLP10n96FskOmO34HEl691bcN3ZpSm9ouKmSDyXw9NGeiCbSpVaJsPVwkMFFntZ8ZZ8c9%2FVdCLtNG7bRy25OtgoxcNJ5iivO317tEG3cR9OPMZ5Auz2RFLu8783bntJm2wx%2FY0XdfW0nUHg4epS64EeS6kUrnGhIlXnNxvshLtddLjTQiH9PsFcG3b53Z3cKKdlhaYGA5h3Wz6NCmFri7NTU%2BT0bLHo%2Fi0SUKwSUpoaoWLVXUHnCY7F9TNgNOqLkVYc%2Fc4p1hly23g5AvCqDGtakist3iaTDZ%2FTq3hbKnAXbHcipHMGRw31ngg%2Fn%2FVgbm4SZnvQWLCwvQTzZ6idN6ULP%2FvdAQ6cveugs5kVqAViWp8t7ivTIcIhpHNgo1rXit65H4Wn65oF61DK%2F%2Bqf2TMFWGKScISdf%2FyEy%2FSzvjmgxpfSjlRhnfPxqoASHooK%2B2Oii9btEM5PU6oF2ufqDfxVYE%2FBgZABylcc%2BpPDMIKgi8oGOqUBT4pKe9xT9ATzbtEkfccjexeIuacyg1Y%2FUbs1H5x2oJSfhiqslTB5KVwIZpr9A2HmpXD%2FNSbQahRDSk1aPJYRpPyA8%2FuGJKxssMySQrOKV8QBLUI33DzGF6DbP4uMf0RVE9UsVhZaCLPmJfgj8KSJyJEQ8q7PkE8wIl6U1DNgQiSL3xkIXd%2FdCbEhF5GzLd8OxY%2F7rveQWdDdf%2F3Ww5Ds%2BObvFfHR&X-Amz-Signature=747f204a9a85801350d3022bdbf0805671d47d2d5cf88cbbe42a182f15ea2b53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GIELVW5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T181557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHY8alMN6EbQkj9of5kbm1PD7LXhdbjG7zg5Ot5lg4BMAiEA6PSg7uTi%2F4xsy3WRrGEB3OYz7OoHnjYJkGAHBE4H4w0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNJibx8ew6fYKdCOCrcA7MkEaai4jXlCdWPDqm6hWIP3%2Br2w1FXEF2wDgrmWdoRerBzWHZiEflIphmQhuHqUjGlw1VvcdDdSRH7y4IKNgC%2B18gbgOQ8j0AdGljV4ddGtZ8dqe7pPEH0BbM%2BuoCdCYEI0ZE9T6M%2BYZ1XetljvNLP10n96FskOmO34HEl691bcN3ZpSm9ouKmSDyXw9NGeiCbSpVaJsPVwkMFFntZ8ZZ8c9%2FVdCLtNG7bRy25OtgoxcNJ5iivO317tEG3cR9OPMZ5Auz2RFLu8783bntJm2wx%2FY0XdfW0nUHg4epS64EeS6kUrnGhIlXnNxvshLtddLjTQiH9PsFcG3b53Z3cKKdlhaYGA5h3Wz6NCmFri7NTU%2BT0bLHo%2Fi0SUKwSUpoaoWLVXUHnCY7F9TNgNOqLkVYc%2Fc4p1hly23g5AvCqDGtakist3iaTDZ%2FTq3hbKnAXbHcipHMGRw31ngg%2Fn%2FVgbm4SZnvQWLCwvQTzZ6idN6ULP%2FvdAQ6cveugs5kVqAViWp8t7ivTIcIhpHNgo1rXit65H4Wn65oF61DK%2F%2Bqf2TMFWGKScISdf%2FyEy%2FSzvjmgxpfSjlRhnfPxqoASHooK%2B2Oii9btEM5PU6oF2ufqDfxVYE%2FBgZABylcc%2BpPDMIKgi8oGOqUBT4pKe9xT9ATzbtEkfccjexeIuacyg1Y%2FUbs1H5x2oJSfhiqslTB5KVwIZpr9A2HmpXD%2FNSbQahRDSk1aPJYRpPyA8%2FuGJKxssMySQrOKV8QBLUI33DzGF6DbP4uMf0RVE9UsVhZaCLPmJfgj8KSJyJEQ8q7PkE8wIl6U1DNgQiSL3xkIXd%2FdCbEhF5GzLd8OxY%2F7rveQWdDdf%2F3Ww5Ds%2BObvFfHR&X-Amz-Signature=8b3593858615ff75008ed2c89e347c97380eb7b70500f819ed9f6818cb25edd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

