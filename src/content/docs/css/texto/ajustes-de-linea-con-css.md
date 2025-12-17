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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFEAFL3H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPxT1sp%2B2uIR1ZDJ6B06iOsw5nHzO3rib%2Fg7NxM7HvxAiEAprOGuYHVm77%2Fj9LcprjtDJMsKwfwnTczxwh9yxhl0m8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDO3vu3BhmBsN%2Ful2oircA0JGHbQsE4ukJIDMaYQFUUz7cas7ISEUmiaiqN5dGAvf1ErZJzfjyK0nHKwuY3fVjp15G1UEZ9isHGoDcRhndNrcBz%2BmWculAi2WuTKTXCTJWGOTIBMWxXLXHov%2Bb23%2FxOqFI%2F0mkh1uT563m4%2BjCXdlj7FjJ8vvZJJUu1NDzcjGVyoRiiYrjjV9eYdbkXyny3G2P0OzHgNrDsgWNdwVUSUWaEFkxUdEIKbft0hbNhRyTrgUym1R7%2BPX%2FymO2XmXwvmUUQF%2BPJXTHKWnsUH%2F2%2Fg7bPWB%2BzoUbvTMUaFZtNWbFCiyFV4kO21vYBrcbnI5ADjqTCpUZRIA6Oi5GTfpLXMXa%2FZEG6McFosU9NloV4DShTTlOjWHxdZrBUNIpZJnqSlHE5SmLu98yza6d2PnhW%2FgRdzFcVEp1dFCuQT%2BJ5SwPYrszhZhwYkoJ%2B3Y%2BaJUB0PAlwcuY6HsosoQsb%2F3xT%2FU0mdtRxJwcZXLNVwBIvQwduOf6vAY0T7krrmS4KehniuzUYoKpsM5JOep2oZMTThKMOFqedTLr7XuJ%2Bg7Bohr6UcD7zCuHdBLzB9OB3oepKYiNy%2FZ90nA%2Fd986wVQnTyu%2Fd8COQ0aYca2grIADIGCpq2vRI99ckZpBVe%2FMJ2dicoGOqUB8YdHXoOFWcY3jXpDILGberSMuzQhq7wjXIMa25odDii5V75iaSXdb5oY7yb%2BFxy%2FMthfUr2TxLNPxa0X0wiWP1mMYuZaChpEBdlQ79iGVtk8BikIwQncimYbPUa%2BfzU5U9%2BFCIMVTDXadkjNIzAxC77o3YyncWoLTSv%2BstwSQAtg2fQmro3wzbikOibTqOdXOJ5xRT49tv6pzhXxDYAvtosRX2hf&X-Amz-Signature=5291b163a211b7173b5694ce41ba6aa73ef5873fbd8f8ef87c20bfc865627327&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFEAFL3H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPxT1sp%2B2uIR1ZDJ6B06iOsw5nHzO3rib%2Fg7NxM7HvxAiEAprOGuYHVm77%2Fj9LcprjtDJMsKwfwnTczxwh9yxhl0m8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDO3vu3BhmBsN%2Ful2oircA0JGHbQsE4ukJIDMaYQFUUz7cas7ISEUmiaiqN5dGAvf1ErZJzfjyK0nHKwuY3fVjp15G1UEZ9isHGoDcRhndNrcBz%2BmWculAi2WuTKTXCTJWGOTIBMWxXLXHov%2Bb23%2FxOqFI%2F0mkh1uT563m4%2BjCXdlj7FjJ8vvZJJUu1NDzcjGVyoRiiYrjjV9eYdbkXyny3G2P0OzHgNrDsgWNdwVUSUWaEFkxUdEIKbft0hbNhRyTrgUym1R7%2BPX%2FymO2XmXwvmUUQF%2BPJXTHKWnsUH%2F2%2Fg7bPWB%2BzoUbvTMUaFZtNWbFCiyFV4kO21vYBrcbnI5ADjqTCpUZRIA6Oi5GTfpLXMXa%2FZEG6McFosU9NloV4DShTTlOjWHxdZrBUNIpZJnqSlHE5SmLu98yza6d2PnhW%2FgRdzFcVEp1dFCuQT%2BJ5SwPYrszhZhwYkoJ%2B3Y%2BaJUB0PAlwcuY6HsosoQsb%2F3xT%2FU0mdtRxJwcZXLNVwBIvQwduOf6vAY0T7krrmS4KehniuzUYoKpsM5JOep2oZMTThKMOFqedTLr7XuJ%2Bg7Bohr6UcD7zCuHdBLzB9OB3oepKYiNy%2FZ90nA%2Fd986wVQnTyu%2Fd8COQ0aYca2grIADIGCpq2vRI99ckZpBVe%2FMJ2dicoGOqUB8YdHXoOFWcY3jXpDILGberSMuzQhq7wjXIMa25odDii5V75iaSXdb5oY7yb%2BFxy%2FMthfUr2TxLNPxa0X0wiWP1mMYuZaChpEBdlQ79iGVtk8BikIwQncimYbPUa%2BfzU5U9%2BFCIMVTDXadkjNIzAxC77o3YyncWoLTSv%2BstwSQAtg2fQmro3wzbikOibTqOdXOJ5xRT49tv6pzhXxDYAvtosRX2hf&X-Amz-Signature=b77d204e2c295291d60e796d73ad579d855e82d74165e338fb53b058289051a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

