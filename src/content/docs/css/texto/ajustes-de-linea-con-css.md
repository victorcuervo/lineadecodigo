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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYNZRRTR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7ILz395PBZqfPv25ax1RBAiRplwJ%2BbCVGDjjgw%2BA3fAiEAnHL9ghGxbL1uZ%2FgLYM2fl1PuCtI%2FYq51Wk%2ForUa02VAq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDE2EliKZ%2FJJ9K3%2BETyrcA2UA8183ccfCX66HezgHz955UsPMbL1tCK2PSndCtjiEdi4YADoRBFH%2FVexa3HUqD1W8dfvqjxyONLzHk6yHriO%2BAJdcwpNHS7184AsNUuTElgBHaqKmTMEjQ75ODIZ185Xvg%2FySKqnG6HiU9bDMuX259e0ViLvzdCFyGk5INjVrCfHgVLBEROhfx4mCTHvnID44C9Jq6ItmPO8Y631VAZLcbXu8myL%2Fu7T%2FdxrX3FHNmLfkBMU3uyUJeoeVWjcwv0sAnHVMlfFiWvVSS4kyQhR3x0TqzcgwLs%2BQfALwNUafHRHnpVZaSf3%2Fjm9mdGBjDDJnOSYaNUk4NOFSjPQpXAucV%2FDezm6BC27KlIVDY2ef8G0fgLl167%2FDLUzhu2TycgG2rqC2jA72xZ55yiH6jM8odVmeLyPCDXEsh1B7U%2FoQJluacGDu6h4iwpulvK83yVuf7AYeKiFbm557Rs6BdEKOLAdGZ%2FripTt2e70P5%2Ff0%2FHhCJZHUeFSYbQkALZ8q6%2BXTtcoAZbmMZBFDNK3q9TtSZmB3%2FEkFo8ulyhMrnvqZ%2B9rCPtBfQ6s8yaLAWGyftQZvpIZZXGapWRAKHYZr7HIf3MvLCfFOF2Po2pcnO1E%2BuHQbeu%2FYpHVsBSjZMMfGisoGOqUByi%2BL1g2yzJCDPyjq%2BCB1XuQ8bSbkE9kbAp%2BtdIMdKltUy23Ro8on0yZFmjw7U41yEVZQv2Al1n7H9V5yK9U8g92fc3JKUaXL112nWwXkaFmviea%2B7i4J8%2FQDnBlPAu%2B84RO0ZyhY0JAPu16BT9q7MxFqsAN82%2FoStelzKlJ%2FTdnka16XEfNWQKgv8cEeS%2FI28ukZRhqWLR7gbGOp5z8wS6H8uEtE&X-Amz-Signature=9ed30beb53ee89967aa2f898e36de007aa189447b37cbfcce20530825e877cfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYNZRRTR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7ILz395PBZqfPv25ax1RBAiRplwJ%2BbCVGDjjgw%2BA3fAiEAnHL9ghGxbL1uZ%2FgLYM2fl1PuCtI%2FYq51Wk%2ForUa02VAq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDE2EliKZ%2FJJ9K3%2BETyrcA2UA8183ccfCX66HezgHz955UsPMbL1tCK2PSndCtjiEdi4YADoRBFH%2FVexa3HUqD1W8dfvqjxyONLzHk6yHriO%2BAJdcwpNHS7184AsNUuTElgBHaqKmTMEjQ75ODIZ185Xvg%2FySKqnG6HiU9bDMuX259e0ViLvzdCFyGk5INjVrCfHgVLBEROhfx4mCTHvnID44C9Jq6ItmPO8Y631VAZLcbXu8myL%2Fu7T%2FdxrX3FHNmLfkBMU3uyUJeoeVWjcwv0sAnHVMlfFiWvVSS4kyQhR3x0TqzcgwLs%2BQfALwNUafHRHnpVZaSf3%2Fjm9mdGBjDDJnOSYaNUk4NOFSjPQpXAucV%2FDezm6BC27KlIVDY2ef8G0fgLl167%2FDLUzhu2TycgG2rqC2jA72xZ55yiH6jM8odVmeLyPCDXEsh1B7U%2FoQJluacGDu6h4iwpulvK83yVuf7AYeKiFbm557Rs6BdEKOLAdGZ%2FripTt2e70P5%2Ff0%2FHhCJZHUeFSYbQkALZ8q6%2BXTtcoAZbmMZBFDNK3q9TtSZmB3%2FEkFo8ulyhMrnvqZ%2B9rCPtBfQ6s8yaLAWGyftQZvpIZZXGapWRAKHYZr7HIf3MvLCfFOF2Po2pcnO1E%2BuHQbeu%2FYpHVsBSjZMMfGisoGOqUByi%2BL1g2yzJCDPyjq%2BCB1XuQ8bSbkE9kbAp%2BtdIMdKltUy23Ro8on0yZFmjw7U41yEVZQv2Al1n7H9V5yK9U8g92fc3JKUaXL112nWwXkaFmviea%2B7i4J8%2FQDnBlPAu%2B84RO0ZyhY0JAPu16BT9q7MxFqsAN82%2FoStelzKlJ%2FTdnka16XEfNWQKgv8cEeS%2FI28ukZRhqWLR7gbGOp5z8wS6H8uEtE&X-Amz-Signature=8c3800deb1a542a20d0937460834ce2449956fc6dadfb9c2adb6d99fbcfaed09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

