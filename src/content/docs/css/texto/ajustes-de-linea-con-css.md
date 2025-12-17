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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMYQUMYF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSMxRDBu9yzMuaNMUfIwA%2FES8fDOeoCNUhDMM8QnUKVgIgKgDWZL2UrqbejZ17ZxJ%2Fo3DruMQvOD8gsjMdXdnx0zMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPkgGzJqLr2B%2BC55fCrcAwMQ5b2%2BnM7yRfWgtMQ4P1FtDUTGvOwKnJUGgizOzoV75plSAL%2B%2FdU5EYEI0UD8ayXr4Ekk7%2FFMBXdN9mofATNmGMNGfOlOgPBbZAJ9zhHXcPCEA3JBwcZX9otvXcARaVPSLaFgMIfJd8DRK9wu9SPqDxO8uw58FQZpdHDLrBPNRWsbDR1c593YMaWpHy%2FYqZDwB79til2hu14S%2Fk1Tu8BJZX%2BKIkkxqUHRdzvDFl3vjsCaZgf2HcxB6wSogaGsEsGP8noNAnJk5jgBCooOX1yI8Ds%2FwqtpS4qsSltCOit9Vky6NEBMGZV9cTrQy5s5ODY1C%2FwnT6eKEK9JTRoLK07eJWhP2MEWWVyoYiU84gRWV1WsqIoRmflRNe%2Bh1DQb29SLFMokjDT7NZ8UqjfMPOR1FuJo8XWa8kRLhHsiUnOFKf4%2FsoAztdkOkh8NljVZoxye52ygCZDFpxqu7q0mLNmvmCVJ7lcC888wMMr%2FVu4ke8ROjIPB2CZ3ffQrgZhuyxwVYn%2B%2BD4qJ%2B%2BNhfJ2l3q%2FUnYxSXfvaQ94ynQ2YgGRp9oMcHaCbU8wY6lvYFSDlpNCzTZufMCoahUjCfrZquDapZ2SlJJDwYdAVco7dAmGfh0g8ESaecLwPpYBrjMIeDicoGOqUByZcGE9AhN6a8QsHbXlcjVDPr3RTxy40TXxxUcTIoEudzuUieicK8vZIl24vdWaW1sAZmLirH80jGUE6y4%2BhvVGSwHUejfFtfu8vxx3DKQd2Qd9Su6bgDoweDSXPAHgo9ZMS9I79t4F3MTLuQWwmvl7Z3u1ZjA19civOMbneeIAbAEsfkap8NhPdKnIjjiwWnh85wVeIAFxaD27WA5C7MkT9jnWgk&X-Amz-Signature=ff3270171a00f7a380b275c36b58a7eff78a86997d513ea6c4b624b38eac8bc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMYQUMYF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSMxRDBu9yzMuaNMUfIwA%2FES8fDOeoCNUhDMM8QnUKVgIgKgDWZL2UrqbejZ17ZxJ%2Fo3DruMQvOD8gsjMdXdnx0zMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPkgGzJqLr2B%2BC55fCrcAwMQ5b2%2BnM7yRfWgtMQ4P1FtDUTGvOwKnJUGgizOzoV75plSAL%2B%2FdU5EYEI0UD8ayXr4Ekk7%2FFMBXdN9mofATNmGMNGfOlOgPBbZAJ9zhHXcPCEA3JBwcZX9otvXcARaVPSLaFgMIfJd8DRK9wu9SPqDxO8uw58FQZpdHDLrBPNRWsbDR1c593YMaWpHy%2FYqZDwB79til2hu14S%2Fk1Tu8BJZX%2BKIkkxqUHRdzvDFl3vjsCaZgf2HcxB6wSogaGsEsGP8noNAnJk5jgBCooOX1yI8Ds%2FwqtpS4qsSltCOit9Vky6NEBMGZV9cTrQy5s5ODY1C%2FwnT6eKEK9JTRoLK07eJWhP2MEWWVyoYiU84gRWV1WsqIoRmflRNe%2Bh1DQb29SLFMokjDT7NZ8UqjfMPOR1FuJo8XWa8kRLhHsiUnOFKf4%2FsoAztdkOkh8NljVZoxye52ygCZDFpxqu7q0mLNmvmCVJ7lcC888wMMr%2FVu4ke8ROjIPB2CZ3ffQrgZhuyxwVYn%2B%2BD4qJ%2B%2BNhfJ2l3q%2FUnYxSXfvaQ94ynQ2YgGRp9oMcHaCbU8wY6lvYFSDlpNCzTZufMCoahUjCfrZquDapZ2SlJJDwYdAVco7dAmGfh0g8ESaecLwPpYBrjMIeDicoGOqUByZcGE9AhN6a8QsHbXlcjVDPr3RTxy40TXxxUcTIoEudzuUieicK8vZIl24vdWaW1sAZmLirH80jGUE6y4%2BhvVGSwHUejfFtfu8vxx3DKQd2Qd9Su6bgDoweDSXPAHgo9ZMS9I79t4F3MTLuQWwmvl7Z3u1ZjA19civOMbneeIAbAEsfkap8NhPdKnIjjiwWnh85wVeIAFxaD27WA5C7MkT9jnWgk&X-Amz-Signature=4456853e0aea9b76e082105fe1314619f48602f3538e19cb4ce185ab3de1afb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

