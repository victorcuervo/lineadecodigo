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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B2SM6PK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmKp7hWtD57jxYC8jStemk%2F%2Bh0AYSd%2FEAKlFCJOj2xawIgQL4DtShy7Re3lKcmJOmXn2%2FBfLozm9w%2B8o1yXtu82iMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXCIhVQ3fww1wjI4SrcA9eAzBJhAFq6MTwz2AuT%2FhJgB8HKcUZW6Ieme6TjSlnZPwNu2iCwiysIwM7yZYJQRSB2kyBJPcGQEdu%2BhXEOV6dcUp7WQznvX9wUxV%2F4N1qqDjSh2nR9Bn%2BEKe%2BVi73Dw7%2BXy5kkNtzRARE9y8Sek0pc8rwqNQhrry0zv1f3VZDgC7OtjFs3sV2jmxwK5tdZowYEc9PEqOrawtqBJdf4VeFKmR59tVOM6gcogKTU%2BxVZ94zmHbLGBLEQCLG4kDkL9guDr1smo%2BVw%2Fi7qPaZEHxgFW32gF3k1J6DieMSSN6SXygEXm1dljwx7yCP%2FqEUXnC9A62Xr0zXGjKUP0vA4BHi7yB7FAYNW3vGMOKCDkqqDv%2Bxj0SBflkFKa3qg55h6l%2FtETtkPa56aIHIvzXtUrFqGav%2BQ0YyC6%2BnYhwAKLQqyfCafJce%2Bft%2FqLG1Ile4SZOIu8qDY4PdZQxAMuvf2viR2bHMqAp2Rv%2BVV5sl3yAZAN8I9toYQzu8JVW3%2BzJuWrauelCxVynGnb7a6uD9yQjXNzop0vSQgZIZZ52jC1Lj7kLgZGTrf3v9Z%2BgEqYcL%2BbwWv%2Fmx6AS8cPjhOre2Ybcb400S9gC%2FpfB3n6MxnXNEAx4DZKLkhRTf1C8LcMLmfi8oGOqUBgdpGyYx6fW7L7DvYxDFX4os%2Bip%2F%2FJDrCCXFMtA9ZT9beGeBOvnB98Q6DAO1VJqdK5Efr5oEc2FMkpSRraWh80SmPCGSZXUuv5RNP8ZWDif6obMuCIZWYQKQXyEJhD7ucQgnt8iWkbdhUa0HD550fbPz7JVl4jQ4cVdJP62%2F8L6Am2ejPJ8oPY2rRHqhswIHxUncxBQBs%2FnYMFK8WubX2Vi1fFuQa&X-Amz-Signature=2b4d0ae5369aad7ad38a2624fd3524c23f9f60b95fda0a65bf7142f3ed685f2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B2SM6PK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmKp7hWtD57jxYC8jStemk%2F%2Bh0AYSd%2FEAKlFCJOj2xawIgQL4DtShy7Re3lKcmJOmXn2%2FBfLozm9w%2B8o1yXtu82iMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXCIhVQ3fww1wjI4SrcA9eAzBJhAFq6MTwz2AuT%2FhJgB8HKcUZW6Ieme6TjSlnZPwNu2iCwiysIwM7yZYJQRSB2kyBJPcGQEdu%2BhXEOV6dcUp7WQznvX9wUxV%2F4N1qqDjSh2nR9Bn%2BEKe%2BVi73Dw7%2BXy5kkNtzRARE9y8Sek0pc8rwqNQhrry0zv1f3VZDgC7OtjFs3sV2jmxwK5tdZowYEc9PEqOrawtqBJdf4VeFKmR59tVOM6gcogKTU%2BxVZ94zmHbLGBLEQCLG4kDkL9guDr1smo%2BVw%2Fi7qPaZEHxgFW32gF3k1J6DieMSSN6SXygEXm1dljwx7yCP%2FqEUXnC9A62Xr0zXGjKUP0vA4BHi7yB7FAYNW3vGMOKCDkqqDv%2Bxj0SBflkFKa3qg55h6l%2FtETtkPa56aIHIvzXtUrFqGav%2BQ0YyC6%2BnYhwAKLQqyfCafJce%2Bft%2FqLG1Ile4SZOIu8qDY4PdZQxAMuvf2viR2bHMqAp2Rv%2BVV5sl3yAZAN8I9toYQzu8JVW3%2BzJuWrauelCxVynGnb7a6uD9yQjXNzop0vSQgZIZZ52jC1Lj7kLgZGTrf3v9Z%2BgEqYcL%2BbwWv%2Fmx6AS8cPjhOre2Ybcb400S9gC%2FpfB3n6MxnXNEAx4DZKLkhRTf1C8LcMLmfi8oGOqUBgdpGyYx6fW7L7DvYxDFX4os%2Bip%2F%2FJDrCCXFMtA9ZT9beGeBOvnB98Q6DAO1VJqdK5Efr5oEc2FMkpSRraWh80SmPCGSZXUuv5RNP8ZWDif6obMuCIZWYQKQXyEJhD7ucQgnt8iWkbdhUa0HD550fbPz7JVl4jQ4cVdJP62%2F8L6Am2ejPJ8oPY2rRHqhswIHxUncxBQBs%2FnYMFK8WubX2Vi1fFuQa&X-Amz-Signature=c01ce6c57748614107968108196a83a2617ed12aca5e436035d92333e6257d79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

