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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VITVBLVL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFl8bz6yPc7nLw8H1w%2F6OdY5c%2BmjsUlvZHKVElhGDAsaAiEAthew5wqeZf75h2wUVB1X6v2f0HVch65WA7EoghMQJUsq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDCPLgIVItLvemuKj%2BircA%2FxgBuAI%2BMbEqv5ZcRJoT2ZVT2p4g5oj0DXefDSirCuDAhH9LYCrW5i8BiFzqksJKWUsiwkewPci9JC0wFUXM5qy0czrdaU7mgkEZHbra7N3pUsPRR42eEZ%2Bq%2BNJnctQsNa6l%2FnCYh8ClrztkU0ir%2FzIHl66yFZV9PLY0WCavUdHHGee3MtsNKQRposnbY7u%2BafVMCzN0%2BMFpQ1WHtMchKQ85OSHiZoDih%2F3EkWtPlOTcia4Uek%2BpIxeyhh2H3NnaUytBXr5YsEPZLemo30bg5wJa3qHARn6j%2FK0DY3zHEKPaBflL9Fab4rlnrHdy75Wwyv6Mh3FpoMJPhzJ0TsK3SqQ55MucDBJ9ZS3lE1lAu4fffyEpy3ilFF5s1cxS7YrmDZEycYik374On7%2BB3pADOZCrDy0KM5nz%2FHYGS8pr%2FAu%2B74CgKGRED67OHTGbbLUEnXRt49Ebl0t16nLusCSWmvVv55Sya7mBzCaiD4H2Uw33VKkxbooUF7iws1BODc2GnM9dRY2bA%2F60PDxy5%2F53zGzLuHz%2B93KvPaK8Avvx4k9a2acje3Wp%2BRKkc%2BAGWzvc8wie%2FmBmN43c8XIR9x1bTKw7oOcicSh1gJ2vvUd6OgHAgt6CSMM7vMn9eqAMPrFisoGOqUBOHcH23Wv6nR0co0t%2BzEAAs6za4bVJr2a%2F4MUZDM5TjH0%2FreTlCpMGzOdjY5hTTbxNKwUy%2F2J0hHd%2BTwW4vX24jN9iQ8YVUNdA032KIXiW9kI3uOWeJF0mZllD45XAVx%2BJWihwYwSxkqDyBy6gTvDtS%2FWLDGveZFD9GaRdtTdjAmv8%2BKt38%2BbHzY%2FtCy50HS6sU01jA2W1JFHf9JJY8fuVpN2xMHv&X-Amz-Signature=f2c721488febf1aa8c719ae6ed0ea35717401fc4ff54775aae244508431bcc78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VITVBLVL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFl8bz6yPc7nLw8H1w%2F6OdY5c%2BmjsUlvZHKVElhGDAsaAiEAthew5wqeZf75h2wUVB1X6v2f0HVch65WA7EoghMQJUsq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDCPLgIVItLvemuKj%2BircA%2FxgBuAI%2BMbEqv5ZcRJoT2ZVT2p4g5oj0DXefDSirCuDAhH9LYCrW5i8BiFzqksJKWUsiwkewPci9JC0wFUXM5qy0czrdaU7mgkEZHbra7N3pUsPRR42eEZ%2Bq%2BNJnctQsNa6l%2FnCYh8ClrztkU0ir%2FzIHl66yFZV9PLY0WCavUdHHGee3MtsNKQRposnbY7u%2BafVMCzN0%2BMFpQ1WHtMchKQ85OSHiZoDih%2F3EkWtPlOTcia4Uek%2BpIxeyhh2H3NnaUytBXr5YsEPZLemo30bg5wJa3qHARn6j%2FK0DY3zHEKPaBflL9Fab4rlnrHdy75Wwyv6Mh3FpoMJPhzJ0TsK3SqQ55MucDBJ9ZS3lE1lAu4fffyEpy3ilFF5s1cxS7YrmDZEycYik374On7%2BB3pADOZCrDy0KM5nz%2FHYGS8pr%2FAu%2B74CgKGRED67OHTGbbLUEnXRt49Ebl0t16nLusCSWmvVv55Sya7mBzCaiD4H2Uw33VKkxbooUF7iws1BODc2GnM9dRY2bA%2F60PDxy5%2F53zGzLuHz%2B93KvPaK8Avvx4k9a2acje3Wp%2BRKkc%2BAGWzvc8wie%2FmBmN43c8XIR9x1bTKw7oOcicSh1gJ2vvUd6OgHAgt6CSMM7vMn9eqAMPrFisoGOqUBOHcH23Wv6nR0co0t%2BzEAAs6za4bVJr2a%2F4MUZDM5TjH0%2FreTlCpMGzOdjY5hTTbxNKwUy%2F2J0hHd%2BTwW4vX24jN9iQ8YVUNdA032KIXiW9kI3uOWeJF0mZllD45XAVx%2BJWihwYwSxkqDyBy6gTvDtS%2FWLDGveZFD9GaRdtTdjAmv8%2BKt38%2BbHzY%2FtCy50HS6sU01jA2W1JFHf9JJY8fuVpN2xMHv&X-Amz-Signature=358957a521fe6c4fb9fafc1a31d5384b1b76b6f5fc71be62e138e4503600cc7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

