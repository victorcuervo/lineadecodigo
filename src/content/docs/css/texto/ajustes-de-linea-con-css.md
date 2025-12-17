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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X355X2CS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkxQSWEAKGjIrVJI0IXko%2Fuvin9osXVSH2KVNP95uOhAiEAz8UrlKaaRY9BJLxkhiVRQ9qlFhnGfteCWFCfLxrtjzAq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDLTGQ43C5yixX6dk0yrcA1MnWDIUilb%2FzWR8K4%2FQBvFSKr%2FKZJa1UG%2BmfDML%2F%2B%2B%2Frc1NX3C%2BlbUX31eXnV1NiAplUGDBEG0QtkhEgms1s2h5KYBbAqlFWBf6ERH31yI3h3sudd7fuAbmtm7FcHZWUgka%2BENhIRKOTNdCU3yS1dmmGAusEkypZydKWRkLNTENLJvwbhkSkcV69WX47PHnEbb6UEpMD1HrP8NqDqWSCFmnQeZG9UJ2pPaDhnGilyd4RmzazNOu0ro32xuVmLS%2BdhH14a3s1qSCZY%2FJxQU1c8SRZEjwhXEygSM46hCMqlqVvQGuGnciZu6PzAdgVzT6LimgziNmyev%2BNUPbbvvqvKayJKAlqoe2UNy4TDpOGjddxaCq4PoS5Nx3Tnfb2xrl%2ByNpo8Z6OX9mwnppaBH1s7dWGCAikbxSYyapcfXGf4QiLENgNSOBvkkKBZX9lc8YNQu34RGKpGgy1WPMI0XmOG1hvjQUn4ulSf2gynFuG3uck5RoT8dyou9aazQ0GSxmR6YtoUcMOwJmliegK2pYW1vXzqm%2FPaqCqluGL43dzS1ztFVAnu6DaWgaMPYpqsKVSHliYJUhZ6dJb4dkElPk6f%2FOHO6wWmn%2BDZMDBGtiuK3yOyAT75Q%2FQaPlFumyMI6ziMoGOqUBE%2BzB4i0FMJ6Z1zqX0a1eTpUZwzCUxsIPkgnhfO68MQFORgYbPW4Lhc3u6FEEzTzIaob0pR2qFUqCQARNZ7Xb%2BE%2FTVvlXDOj2Fq3vp8CgY1DY%2FPi1nQaI8WIj8mDAJP%2FVYwjyY8kOK9zDPwlGyow0YMs6RXzjXqoSsYO%2BI%2Bi6pZu8UAReIkzeh%2BHGYtej%2BHdXV8HHoyT96vNHd6zSOOd9obKMvQIL&X-Amz-Signature=9db34df44bc357437e6e665f153fa0e3bec476e315994c6f1a107e0d19d4795b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X355X2CS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkxQSWEAKGjIrVJI0IXko%2Fuvin9osXVSH2KVNP95uOhAiEAz8UrlKaaRY9BJLxkhiVRQ9qlFhnGfteCWFCfLxrtjzAq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDLTGQ43C5yixX6dk0yrcA1MnWDIUilb%2FzWR8K4%2FQBvFSKr%2FKZJa1UG%2BmfDML%2F%2B%2B%2Frc1NX3C%2BlbUX31eXnV1NiAplUGDBEG0QtkhEgms1s2h5KYBbAqlFWBf6ERH31yI3h3sudd7fuAbmtm7FcHZWUgka%2BENhIRKOTNdCU3yS1dmmGAusEkypZydKWRkLNTENLJvwbhkSkcV69WX47PHnEbb6UEpMD1HrP8NqDqWSCFmnQeZG9UJ2pPaDhnGilyd4RmzazNOu0ro32xuVmLS%2BdhH14a3s1qSCZY%2FJxQU1c8SRZEjwhXEygSM46hCMqlqVvQGuGnciZu6PzAdgVzT6LimgziNmyev%2BNUPbbvvqvKayJKAlqoe2UNy4TDpOGjddxaCq4PoS5Nx3Tnfb2xrl%2ByNpo8Z6OX9mwnppaBH1s7dWGCAikbxSYyapcfXGf4QiLENgNSOBvkkKBZX9lc8YNQu34RGKpGgy1WPMI0XmOG1hvjQUn4ulSf2gynFuG3uck5RoT8dyou9aazQ0GSxmR6YtoUcMOwJmliegK2pYW1vXzqm%2FPaqCqluGL43dzS1ztFVAnu6DaWgaMPYpqsKVSHliYJUhZ6dJb4dkElPk6f%2FOHO6wWmn%2BDZMDBGtiuK3yOyAT75Q%2FQaPlFumyMI6ziMoGOqUBE%2BzB4i0FMJ6Z1zqX0a1eTpUZwzCUxsIPkgnhfO68MQFORgYbPW4Lhc3u6FEEzTzIaob0pR2qFUqCQARNZ7Xb%2BE%2FTVvlXDOj2Fq3vp8CgY1DY%2FPi1nQaI8WIj8mDAJP%2FVYwjyY8kOK9zDPwlGyow0YMs6RXzjXqoSsYO%2BI%2Bi6pZu8UAReIkzeh%2BHGYtej%2BHdXV8HHoyT96vNHd6zSOOd9obKMvQIL&X-Amz-Signature=dbf165a31301abdf3d428b2b841dd2596110fcd7422ea5628fa9925693cd1cf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

