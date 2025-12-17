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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SX6X5YP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvGjMGf9kVRt8PB30H7j6ppE3Fb00CeJnTFHkfBTTyrgIgC9jDW5c2orMhN%2FQ7iAygsa3gpur7Jo4HG2BepADVFPsq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDy2mdb%2B5Wno1tZXdircAyWXBc%2BXiAKdgRaN3zA7djYaECshnkJhaOEKsNJ0JSTYa%2FYRTQ4f7tn0LuaHoTJg8wHNYATuWOd6%2FZ3sgZa4shyK7HDntw%2FjmlkseOtHEmIGtjMjjA%2F42LutFvQADTLrS23drGN1282SshHMI6CEwDTgrtg5fgQgwE7e6rstVMdNTUcgDozTV5ynBxeAkzHNH6%2BU7gNQmgDJpKW9Xypq5vs02gRCVdWJzhgAI2adGzVL0%2FhNj5xE5LwyPwM%2BPmPht3vPQDV99PC1Td2dg9koQp1sDklsG2am9rs3kgi0PGsW%2B58kWeZKxthowabfdTE53XudinDA59jmqd2X2pvmr9%2FTWLmWBJoE5GbyJGfXKutKi%2BBi3ylgL5zeT76F15NUNgRUMRnnm3nO%2F7Z%2FZtC5OBjN4QFN6SzkWN5qYSVtz5GWVmVi7BoAzKS7GsclpzfWtM9QZqHaNj1ET%2FhtjLKQQulccV9e%2FcXwk6xANOxWbKtvC75%2FJuxxuM%2By2i6h1g0iyVsBqokUYYJb5J8CXZaZjA%2BFzI0cDU2C%2Fl4W4UGloQa%2FBTXEomMMay%2Fqxd4aN0V69hjgHq0Phbj8oQ9wt9Xa5ruYu%2F7VMZuPfpnSMmYduuyxOg859COPa8RpK7EeMJKDicoGOqUBxWwYSLWUhXLQJ123h2B1nTUcO9N4YdxhvCdKwA7Ut0Bgv%2Fnt3IfN%2BfvvDCtccVdG9YpZ0GgRqHtBPLNSw0dsrk%2FO3laq0ywCuoH4%2FVTMIFJivl4VjuMup8GHrBZTG0U0NykpTDZeA6SeGx45Tn%2FD0Z9Qf0NAoaHM1UR0fH9q1phzKjnTD1NN4cHtQ4YffNlb01rSpjiT3q0TijSwFMEuEQJIq5p0&X-Amz-Signature=cff0081585f901df882ec21a98a88104af1869023ead0d26653ad8257282799b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SX6X5YP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvGjMGf9kVRt8PB30H7j6ppE3Fb00CeJnTFHkfBTTyrgIgC9jDW5c2orMhN%2FQ7iAygsa3gpur7Jo4HG2BepADVFPsq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDy2mdb%2B5Wno1tZXdircAyWXBc%2BXiAKdgRaN3zA7djYaECshnkJhaOEKsNJ0JSTYa%2FYRTQ4f7tn0LuaHoTJg8wHNYATuWOd6%2FZ3sgZa4shyK7HDntw%2FjmlkseOtHEmIGtjMjjA%2F42LutFvQADTLrS23drGN1282SshHMI6CEwDTgrtg5fgQgwE7e6rstVMdNTUcgDozTV5ynBxeAkzHNH6%2BU7gNQmgDJpKW9Xypq5vs02gRCVdWJzhgAI2adGzVL0%2FhNj5xE5LwyPwM%2BPmPht3vPQDV99PC1Td2dg9koQp1sDklsG2am9rs3kgi0PGsW%2B58kWeZKxthowabfdTE53XudinDA59jmqd2X2pvmr9%2FTWLmWBJoE5GbyJGfXKutKi%2BBi3ylgL5zeT76F15NUNgRUMRnnm3nO%2F7Z%2FZtC5OBjN4QFN6SzkWN5qYSVtz5GWVmVi7BoAzKS7GsclpzfWtM9QZqHaNj1ET%2FhtjLKQQulccV9e%2FcXwk6xANOxWbKtvC75%2FJuxxuM%2By2i6h1g0iyVsBqokUYYJb5J8CXZaZjA%2BFzI0cDU2C%2Fl4W4UGloQa%2FBTXEomMMay%2Fqxd4aN0V69hjgHq0Phbj8oQ9wt9Xa5ruYu%2F7VMZuPfpnSMmYduuyxOg859COPa8RpK7EeMJKDicoGOqUBxWwYSLWUhXLQJ123h2B1nTUcO9N4YdxhvCdKwA7Ut0Bgv%2Fnt3IfN%2BfvvDCtccVdG9YpZ0GgRqHtBPLNSw0dsrk%2FO3laq0ywCuoH4%2FVTMIFJivl4VjuMup8GHrBZTG0U0NykpTDZeA6SeGx45Tn%2FD0Z9Qf0NAoaHM1UR0fH9q1phzKjnTD1NN4cHtQ4YffNlb01rSpjiT3q0TijSwFMEuEQJIq5p0&X-Amz-Signature=9a49948f7f0a818a4d3226bf9f628fee37e17a62204f43b3b82637a89b24ac89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

