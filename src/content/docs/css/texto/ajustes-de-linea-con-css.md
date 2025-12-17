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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCSRQCYJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkzdS3ijo85DBquDVpHahdZy08xa7v%2F4QfsXDs34crcAiA7jS7lRQx3NbO9%2FWso0I7IiGWn1Hy1NO4tdFnkwZLKiyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsehN%2FmiMt2Awl0sBKtwDNT8nkYvCFfhoNDiI%2Fg%2Fs4kC8DCzTx5kBojuVjHkvpkAEcDwHPY9HK3nE9COMY6cyIm3qfdvd%2BB1%2F2J8wX%2BkbeIl%2B8vrph76qJbDwvzBITDrFUf75V9YsAkQXuT3rl%2B05WDYL4kvkmxdJMgYmY6Z5fI%2FzkuV6RzvdaMGUCntTdt7qimZc26suPs9Foczk9ZrxQG5WuRW3A8oLn%2FQIL1hjEjSAxLLX7PWteaE945s%2Bh2%2Bv%2BHq5P5d3uj5dRxZ%2BFAPY1LHpEMByC4XkbsWk4FTL5Y1bQ06wlLF4eEm9A6iFqyJ16xlvW5zUrPKONlGbzcms234v9iz0%2BKLHiVO1bS7R0SunZldPb90Mh0kHrFOdvOhGpcrpFBhxtiJ4odhWGFS%2FWh0XtSLyDKofRifgbBn4ghIeC%2BptiG%2Boib8Cs5kA%2BoevUHbdCQv9gUKYbf%2Faxz4KJZEYZ%2FuZ6upXv9pSMXWtAO5BcK3nvgms%2F8sb4fR3YuINvJ8HemwKlipprifXJ5LPLh94iCyO1qS1DC3W1bbVXD0sZJiOeBJvuAQDpq3HPP55QX%2BMa1rPLKUjlgj0yEPtqn9P5W4vWNpy1y0CiEgOQKij%2FvEkyWPmSsXxnUOLRXDPo0AehPdsKGqlNyEw%2BZ%2BLygY6pgEl9bSK7g4uBr3vror9nynUMeOtqysKQCPIu%2F4kJgX6o7x6%2B0Uki%2Fk2TPdQO2XSYhXn5RRFWpt4H2Jw3xXfXYQP3CFcGthuDmLNfdoksDRnEjm%2F%2BpNy10YmbPWRKTU1UeDYaMJa7wG1BKMuJm%2BasuvzghFkygzd%2FLoBM7gvbm34ivBkC5FDL40YQQI%2B0QZvSHsh5lQQwu8lGV%2BdlfnqINIIg1VhHmoX&X-Amz-Signature=0f0a96fdd5ded4dfd452058be04740ee56884f019127c4ab7d7a45652460c83e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCSRQCYJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkzdS3ijo85DBquDVpHahdZy08xa7v%2F4QfsXDs34crcAiA7jS7lRQx3NbO9%2FWso0I7IiGWn1Hy1NO4tdFnkwZLKiyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsehN%2FmiMt2Awl0sBKtwDNT8nkYvCFfhoNDiI%2Fg%2Fs4kC8DCzTx5kBojuVjHkvpkAEcDwHPY9HK3nE9COMY6cyIm3qfdvd%2BB1%2F2J8wX%2BkbeIl%2B8vrph76qJbDwvzBITDrFUf75V9YsAkQXuT3rl%2B05WDYL4kvkmxdJMgYmY6Z5fI%2FzkuV6RzvdaMGUCntTdt7qimZc26suPs9Foczk9ZrxQG5WuRW3A8oLn%2FQIL1hjEjSAxLLX7PWteaE945s%2Bh2%2Bv%2BHq5P5d3uj5dRxZ%2BFAPY1LHpEMByC4XkbsWk4FTL5Y1bQ06wlLF4eEm9A6iFqyJ16xlvW5zUrPKONlGbzcms234v9iz0%2BKLHiVO1bS7R0SunZldPb90Mh0kHrFOdvOhGpcrpFBhxtiJ4odhWGFS%2FWh0XtSLyDKofRifgbBn4ghIeC%2BptiG%2Boib8Cs5kA%2BoevUHbdCQv9gUKYbf%2Faxz4KJZEYZ%2FuZ6upXv9pSMXWtAO5BcK3nvgms%2F8sb4fR3YuINvJ8HemwKlipprifXJ5LPLh94iCyO1qS1DC3W1bbVXD0sZJiOeBJvuAQDpq3HPP55QX%2BMa1rPLKUjlgj0yEPtqn9P5W4vWNpy1y0CiEgOQKij%2FvEkyWPmSsXxnUOLRXDPo0AehPdsKGqlNyEw%2BZ%2BLygY6pgEl9bSK7g4uBr3vror9nynUMeOtqysKQCPIu%2F4kJgX6o7x6%2B0Uki%2Fk2TPdQO2XSYhXn5RRFWpt4H2Jw3xXfXYQP3CFcGthuDmLNfdoksDRnEjm%2F%2BpNy10YmbPWRKTU1UeDYaMJa7wG1BKMuJm%2BasuvzghFkygzd%2FLoBM7gvbm34ivBkC5FDL40YQQI%2B0QZvSHsh5lQQwu8lGV%2BdlfnqINIIg1VhHmoX&X-Amz-Signature=608c95058b5a4edd6072b69575462d3f31d94661035099879c0ad8172e39568a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

