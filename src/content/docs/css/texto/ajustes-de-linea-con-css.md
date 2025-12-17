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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FNRHMT7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSkKyjiCYyfLzuyb3OWFT2fxSxcgdJ0lJOBhst%2FlJgqAIhAIIc58z1IFbVj7%2F%2F5hUhqcLTl6X2gPByglqi4fAMw12gKv8DCHUQABoMNjM3NDIzMTgzODA1IgzJR0LpTRNGxnJ4bCkq3AMgBz6S%2F3Lbxbfjb7HuT%2FUi7O1v1lbwm%2FoqDmX6gHKMEiezeWIc2OgrbVjouM6xwZDvYfY6r8TWlw8Uiqso4B%2FTsHLtTTF2yuDkZG4UJURWUP0TDvbkeaoG3jkvsPA%2FRcToHZFJKwmndruD42xiPClfCoFrwvqxH2zkgiYhQlkXnns06EX2WNS9fJWkeB5omQhtL7bZRRjscxbSL68QyitD3IKDK1ls4mWJUGW6P4dHF%2FU3YBeh6Wbk8d7KQvSjTWWiJZ2RdDSLCt5bYZtROSyWp86iMOROJC9EfOCEdfZS7ktUFCi5CnLPr7VJDbQxGQkbr%2FEuUHzMPCwRi14Z7iOZNhBXkgjjW8e%2BFE8lKIxXFDCveZ2PHhZRWnqF1bptoZCQxdtmBKtqqSeWvNlijnX8B%2F5HS6kH894aOtuLYbao7djouIDwJ%2FLOiid%2BSNE9TttIRIIh8NeMfQp%2FmWKTwH9pvkJuiEHS8sbv%2Bu3HssVOhPTHrvoENyAOH1v3qNneJLVw%2FI6ub0b%2FwjTo1%2F3Sgaq3qvrS2c0wYcbDHERQcA58ttDAEzh2tK1OPZ3y598yp3OHhVr0RnxPQWn3SCjy7tuD4Upe90DiceALFCnedA98rh8C7nj%2FloKRBKnmiDDdzojKBjqkAUpik9xZWAm2qb4OUsVsfSqB%2Bq8Ih0SdfvTn6VdSOKrJniHcdXYu7URCLFU9MDHzFFuo%2BN%2F1ontuAvhR6kXH4g0dlz6jH7W8b0go3EBjpAELso4OUtOChzZVwbTXqOSLfwzp5Lf2%2BLMrX2Xe7ms28KcOT3SCgytZvNT%2Fvr3jWpPLc6rP6VASNFsFyWRDg81h8DzdApgI0FTEMkRURAgJW3pbgG6N&X-Amz-Signature=1343898044d8947d54e31ec620491ae035a4b592b0b1450439b6702922098344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FNRHMT7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSkKyjiCYyfLzuyb3OWFT2fxSxcgdJ0lJOBhst%2FlJgqAIhAIIc58z1IFbVj7%2F%2F5hUhqcLTl6X2gPByglqi4fAMw12gKv8DCHUQABoMNjM3NDIzMTgzODA1IgzJR0LpTRNGxnJ4bCkq3AMgBz6S%2F3Lbxbfjb7HuT%2FUi7O1v1lbwm%2FoqDmX6gHKMEiezeWIc2OgrbVjouM6xwZDvYfY6r8TWlw8Uiqso4B%2FTsHLtTTF2yuDkZG4UJURWUP0TDvbkeaoG3jkvsPA%2FRcToHZFJKwmndruD42xiPClfCoFrwvqxH2zkgiYhQlkXnns06EX2WNS9fJWkeB5omQhtL7bZRRjscxbSL68QyitD3IKDK1ls4mWJUGW6P4dHF%2FU3YBeh6Wbk8d7KQvSjTWWiJZ2RdDSLCt5bYZtROSyWp86iMOROJC9EfOCEdfZS7ktUFCi5CnLPr7VJDbQxGQkbr%2FEuUHzMPCwRi14Z7iOZNhBXkgjjW8e%2BFE8lKIxXFDCveZ2PHhZRWnqF1bptoZCQxdtmBKtqqSeWvNlijnX8B%2F5HS6kH894aOtuLYbao7djouIDwJ%2FLOiid%2BSNE9TttIRIIh8NeMfQp%2FmWKTwH9pvkJuiEHS8sbv%2Bu3HssVOhPTHrvoENyAOH1v3qNneJLVw%2FI6ub0b%2FwjTo1%2F3Sgaq3qvrS2c0wYcbDHERQcA58ttDAEzh2tK1OPZ3y598yp3OHhVr0RnxPQWn3SCjy7tuD4Upe90DiceALFCnedA98rh8C7nj%2FloKRBKnmiDDdzojKBjqkAUpik9xZWAm2qb4OUsVsfSqB%2Bq8Ih0SdfvTn6VdSOKrJniHcdXYu7URCLFU9MDHzFFuo%2BN%2F1ontuAvhR6kXH4g0dlz6jH7W8b0go3EBjpAELso4OUtOChzZVwbTXqOSLfwzp5Lf2%2BLMrX2Xe7ms28KcOT3SCgytZvNT%2Fvr3jWpPLc6rP6VASNFsFyWRDg81h8DzdApgI0FTEMkRURAgJW3pbgG6N&X-Amz-Signature=2ecaecea3596e4b93c5395c2aa457b68f5d5af8feb022ac25e3aa02d8225ab8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

