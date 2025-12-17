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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6MHWF7E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8mBsYlb1h3U9TGtmZr1EKEqfj%2Fs0vFHHPRrqr68sd9AiAiLu029Kvm3hFpF0FTYP%2Fc0jh0d9wakZ%2BF8%2FGDzgSs6Cr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMqZLauYo7aJaWa15rKtwDB5YMpFX9ZMw9a4H0xlZUMfCoIEPDEynNzoG0l0ZjOrX0mT3c%2BUExCQYmYZhN%2BY36eI%2FgYM6Hd2dP11ZBb6SQgk2sDwGBgG0r%2BYWn4dTE11n5xp2oKTUC2Iq%2BHFiLtR4DwHowbNQkxvGydnlWwnqGnny32%2FEMH1mJv5w1C5sE%2FklvIOEUF0AofF0ls2rolKWqX0fcqQbdqEI062JJjI0fsuNvGUw9VHBL9tHf7KuqSSw0ghmGXAeuvdfhuu3NAFNSZ74VhFwFakXR7qATHi0Y2dN2qeXaFH5Y1wlY5tf2nB%2Br4oDGY3JXy%2FlxLihpOUETUVq4WGgx456%2FT1Nygz%2FjgqRczvmZLaUtBVc8R2BUBYGGfEEPhqVoD4CH7eS27Mz1OWjGG4HMhOx4J2k9T0blE5Cazot15PIA5KiVtgDaquRkx31CBEv32m4L%2FTpgELZoCIBOd%2FTIh5b56AMkcgqJNnQ%2BC01FD1i74i%2BGrpI6Rp30oVB7QJkvK%2B6lfeKZn7wXpE6MrY3IFYGFQUa35VrtEDeF1oVk9ewgI3SmdFbG8G%2BJ%2FK1%2FrDziuWe97G1uPaAGdhdqTrLN1sXWW%2FDnzU744NTO1%2FCtHYgXxxXYhCJLR7IC41qX46Kq2cys9uAw%2BJaIygY6pgElnYk6rivl9Apytq%2Bmpj6PDUJeVudTAFkwaX9P3Zg72L1p6%2B56AXkKNq1R42ICP1VPYAjmvI9VI3ogUlHP1SWhAi14DNP8hBB%2BikWpb4Jpxygyub%2BHmC4%2B0ZqdrYYW7mFCNBQLOMhsZECW7wKicwghLnyKmrzz8ViyCqWjIrnn9i9XoqrFxxcxkp0aJ4RhVUgJ98YPd1WCBiBjnUkHDV%2BSjyQ03icv&X-Amz-Signature=c92615b236ccce90c2685367c0a445794da756f87fe8ed8da0ab0365242275f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6MHWF7E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8mBsYlb1h3U9TGtmZr1EKEqfj%2Fs0vFHHPRrqr68sd9AiAiLu029Kvm3hFpF0FTYP%2Fc0jh0d9wakZ%2BF8%2FGDzgSs6Cr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMqZLauYo7aJaWa15rKtwDB5YMpFX9ZMw9a4H0xlZUMfCoIEPDEynNzoG0l0ZjOrX0mT3c%2BUExCQYmYZhN%2BY36eI%2FgYM6Hd2dP11ZBb6SQgk2sDwGBgG0r%2BYWn4dTE11n5xp2oKTUC2Iq%2BHFiLtR4DwHowbNQkxvGydnlWwnqGnny32%2FEMH1mJv5w1C5sE%2FklvIOEUF0AofF0ls2rolKWqX0fcqQbdqEI062JJjI0fsuNvGUw9VHBL9tHf7KuqSSw0ghmGXAeuvdfhuu3NAFNSZ74VhFwFakXR7qATHi0Y2dN2qeXaFH5Y1wlY5tf2nB%2Br4oDGY3JXy%2FlxLihpOUETUVq4WGgx456%2FT1Nygz%2FjgqRczvmZLaUtBVc8R2BUBYGGfEEPhqVoD4CH7eS27Mz1OWjGG4HMhOx4J2k9T0blE5Cazot15PIA5KiVtgDaquRkx31CBEv32m4L%2FTpgELZoCIBOd%2FTIh5b56AMkcgqJNnQ%2BC01FD1i74i%2BGrpI6Rp30oVB7QJkvK%2B6lfeKZn7wXpE6MrY3IFYGFQUa35VrtEDeF1oVk9ewgI3SmdFbG8G%2BJ%2FK1%2FrDziuWe97G1uPaAGdhdqTrLN1sXWW%2FDnzU744NTO1%2FCtHYgXxxXYhCJLR7IC41qX46Kq2cys9uAw%2BJaIygY6pgElnYk6rivl9Apytq%2Bmpj6PDUJeVudTAFkwaX9P3Zg72L1p6%2B56AXkKNq1R42ICP1VPYAjmvI9VI3ogUlHP1SWhAi14DNP8hBB%2BikWpb4Jpxygyub%2BHmC4%2B0ZqdrYYW7mFCNBQLOMhsZECW7wKicwghLnyKmrzz8ViyCqWjIrnn9i9XoqrFxxcxkp0aJ4RhVUgJ98YPd1WCBiBjnUkHDV%2BSjyQ03icv&X-Amz-Signature=09effdd040019da2cc8679b6a148068993de0c0b866c0d566b6e12e829eed69b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

