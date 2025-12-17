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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVBZYJAB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICF38p1ibTQSR4CZ%2BLA08RbWPf1V59CrGiAc0Gq2Ph1rAiEA2WWmawTfbF2AWrb8gh%2Fupx7jJ8htdoWVGPYC%2BtkRlaYqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMu5cv%2FkbtssWdDMcCrcA4Gt4yyHnsjDUYO%2FOwsSJOB8bl3Gng%2BYEYXpI%2BZA6l%2FrwyreM0Sb6tnVQseTVnzK5%2FEJmj28dVRRG9eNCGbEr%2F%2FAg%2FPfcfZ3uAH%2FqATCSw8HH1q9yK7d5mUwGmTLV%2BmBjal9QrknklyJwOQp%2B2fbFC7Wuq4%2BtbkXdj8YKMQB5%2FrThgz76mLgOPPYHeuFDzzEwP%2FlbKbJL16TN48nI9eruBAtUnksFVVg6KlWHgdRlxCVKW991Llli%2BFiMliIAkUfCVvbHUx%2BCvGF%2B%2BLpgO5PQ%2BKjsTxG9uj43QvcKZw5zPActkiAW6x7E1PKOXb7ZMo2hUBQw%2F3gtOfxSumUFaw1DIG9XnTaxtLbG6SULobRpGFEv5GpPqkBHfrJl1GkF26sV30ajfxG40%2FWnVzPq2H7T7BefXP%2BOTHPUPE7k1uHJLbqo%2FxrqQPcOj6AtXjov4O56c8KYUjWXWaIJd%2FtPr2mVrIpim%2Fn7Z7o9Im1WtMYX%2FwoaF5ps6TbdIGNGnUqZ5nHR6672Mz6L3a%2Bjz2Me7JxyZ57fWhJKsSkmDGU%2BnwOTBedzU9jd5WEMnw1HQ6MGa7rewxAVCVgcO6ZF9X1A09Sc4Mp%2FTQ5GPpFok0bRB85XrZiE%2Bt0MseuAeaaXCIxMLSAi8oGOqUBsjW8KiKdjoc4QpKVbNRa9Uzgfcv7vquNVqeQxS2pqYNCHp7OOCXC6ePgbeuHfJyzYnLvSJ1j8OWFqUsKAy8bN%2FJyWg5Mt8dTGf6aB%2BBxyIE8M5SsHPowlFaOa1OxLcthKSLSfx7zQcx%2FGAhvgMx41rigz9v1aSiRxXQKHSr7t%2BNTAziWnTTQhRWDVtOZLNdo4nRCeUZpD9Ts%2BIsniX3KEUFWz%2F9z&X-Amz-Signature=5eb539758284e443e134fa5a421a2fbe28880ca40b5febc2b28deb19bcf737b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVBZYJAB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICF38p1ibTQSR4CZ%2BLA08RbWPf1V59CrGiAc0Gq2Ph1rAiEA2WWmawTfbF2AWrb8gh%2Fupx7jJ8htdoWVGPYC%2BtkRlaYqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMu5cv%2FkbtssWdDMcCrcA4Gt4yyHnsjDUYO%2FOwsSJOB8bl3Gng%2BYEYXpI%2BZA6l%2FrwyreM0Sb6tnVQseTVnzK5%2FEJmj28dVRRG9eNCGbEr%2F%2FAg%2FPfcfZ3uAH%2FqATCSw8HH1q9yK7d5mUwGmTLV%2BmBjal9QrknklyJwOQp%2B2fbFC7Wuq4%2BtbkXdj8YKMQB5%2FrThgz76mLgOPPYHeuFDzzEwP%2FlbKbJL16TN48nI9eruBAtUnksFVVg6KlWHgdRlxCVKW991Llli%2BFiMliIAkUfCVvbHUx%2BCvGF%2B%2BLpgO5PQ%2BKjsTxG9uj43QvcKZw5zPActkiAW6x7E1PKOXb7ZMo2hUBQw%2F3gtOfxSumUFaw1DIG9XnTaxtLbG6SULobRpGFEv5GpPqkBHfrJl1GkF26sV30ajfxG40%2FWnVzPq2H7T7BefXP%2BOTHPUPE7k1uHJLbqo%2FxrqQPcOj6AtXjov4O56c8KYUjWXWaIJd%2FtPr2mVrIpim%2Fn7Z7o9Im1WtMYX%2FwoaF5ps6TbdIGNGnUqZ5nHR6672Mz6L3a%2Bjz2Me7JxyZ57fWhJKsSkmDGU%2BnwOTBedzU9jd5WEMnw1HQ6MGa7rewxAVCVgcO6ZF9X1A09Sc4Mp%2FTQ5GPpFok0bRB85XrZiE%2Bt0MseuAeaaXCIxMLSAi8oGOqUBsjW8KiKdjoc4QpKVbNRa9Uzgfcv7vquNVqeQxS2pqYNCHp7OOCXC6ePgbeuHfJyzYnLvSJ1j8OWFqUsKAy8bN%2FJyWg5Mt8dTGf6aB%2BBxyIE8M5SsHPowlFaOa1OxLcthKSLSfx7zQcx%2FGAhvgMx41rigz9v1aSiRxXQKHSr7t%2BNTAziWnTTQhRWDVtOZLNdo4nRCeUZpD9Ts%2BIsniX3KEUFWz%2F9z&X-Amz-Signature=3a3eadb57cb1f3851c55808c2d46d1df975ccfd6f426c66b2d0f3306d0e2aca2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

