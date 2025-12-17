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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VWU4ITH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUSI9Eis6Q1iZmZMohUH2ODb6aDEchufGoAqVrq0xbXwIgC7ZY0eCh1oGPVSLEie5fPMDst3XWbxbrzzRvZ2hRh1oq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJDswbbNDPrg78AtQSrcAwCi0UIG7YRoErWlWWmWhGFsv1fHwWseQ%2FkfZo8Br9KefnHypU%2B062sot%2BsaMtH%2BnOumkiZt6uaASchXXaZe%2B5LVw%2BjkcL6CpqW%2FEqtpUDZ6ljywDxuDb7KQrBSl5aZxoLKiZNdoDFf26YHm%2Fi2G5mq3J8gQHLzctaAFnpwiF4D%2Bvp4HvuUdcak7qeSI8yylffmfyALHVPw6xoxu7vgw0%2BPe09DHOjftYAJi0BJgveg09m4jajV8Fdkd7PKfR6TSomNoU5j7O%2BBiqF7Lw86UkIeZPpz3uGnm3BiAb11Jd9dVQEACV8nmoPO2238JEnDyWKOYjwzgORN%2FShfENAymJCBb%2FM77K2JvNlzXdCJC8Hfeb6Fw%2BOE%2B2DKRFp2JZoemqCyvfGQrWUqdTkJq8RiULbB5EuusBdsMynnWDjGV3nR3PdaI0%2FM%2F5G00Yo7Qy4jGOGiUlhQ5wfdzihyRpYkQLG%2F3Vdu%2BGevGfL0JjqustKH%2BqBkuf%2BUYmN8KFvq6A1%2BLQ%2BR7%2FO45XbX2Tix5TV8avzQLI4Uo24GZRBiGqBeZsvCbleL%2FEdm5a80SLWB%2FkVW5MUDd%2Bn5WrBHVkqT6N%2FbCmRTgE%2FtB1Etwtm7JfjaefdJmB5g9H3WddgeDJItbMOjhisoGOqUBu75HN1%2FLB3bVoTQWHQjNrK5vPRdUUTPMdUbDhGgsjBMO1x35yfB3TS0y3nDzgR3M4B2j26uZZjobm910c5tsryWKyOWthnR50jG4WmrngRkpvuRlF3k8oY2n0Gs5wlR%2FebFrDnfIk2km18abbR5WrYBPXIUZIefuf3Aw7cWaSbB6Znu0jilUyKjoeE6tIuahov6%2BlORKtW%2BrQbXpGuSr9gTVr5DF&X-Amz-Signature=076b47da70bb41cf1a0ceb95d89f86608778a3071039cde607cca66a9e36024a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VWU4ITH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUSI9Eis6Q1iZmZMohUH2ODb6aDEchufGoAqVrq0xbXwIgC7ZY0eCh1oGPVSLEie5fPMDst3XWbxbrzzRvZ2hRh1oq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJDswbbNDPrg78AtQSrcAwCi0UIG7YRoErWlWWmWhGFsv1fHwWseQ%2FkfZo8Br9KefnHypU%2B062sot%2BsaMtH%2BnOumkiZt6uaASchXXaZe%2B5LVw%2BjkcL6CpqW%2FEqtpUDZ6ljywDxuDb7KQrBSl5aZxoLKiZNdoDFf26YHm%2Fi2G5mq3J8gQHLzctaAFnpwiF4D%2Bvp4HvuUdcak7qeSI8yylffmfyALHVPw6xoxu7vgw0%2BPe09DHOjftYAJi0BJgveg09m4jajV8Fdkd7PKfR6TSomNoU5j7O%2BBiqF7Lw86UkIeZPpz3uGnm3BiAb11Jd9dVQEACV8nmoPO2238JEnDyWKOYjwzgORN%2FShfENAymJCBb%2FM77K2JvNlzXdCJC8Hfeb6Fw%2BOE%2B2DKRFp2JZoemqCyvfGQrWUqdTkJq8RiULbB5EuusBdsMynnWDjGV3nR3PdaI0%2FM%2F5G00Yo7Qy4jGOGiUlhQ5wfdzihyRpYkQLG%2F3Vdu%2BGevGfL0JjqustKH%2BqBkuf%2BUYmN8KFvq6A1%2BLQ%2BR7%2FO45XbX2Tix5TV8avzQLI4Uo24GZRBiGqBeZsvCbleL%2FEdm5a80SLWB%2FkVW5MUDd%2Bn5WrBHVkqT6N%2FbCmRTgE%2FtB1Etwtm7JfjaefdJmB5g9H3WddgeDJItbMOjhisoGOqUBu75HN1%2FLB3bVoTQWHQjNrK5vPRdUUTPMdUbDhGgsjBMO1x35yfB3TS0y3nDzgR3M4B2j26uZZjobm910c5tsryWKyOWthnR50jG4WmrngRkpvuRlF3k8oY2n0Gs5wlR%2FebFrDnfIk2km18abbR5WrYBPXIUZIefuf3Aw7cWaSbB6Znu0jilUyKjoeE6tIuahov6%2BlORKtW%2BrQbXpGuSr9gTVr5DF&X-Amz-Signature=820df263c0a1c94200fbcc1490193806238cba77a468dd575b3199b33c83df2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

