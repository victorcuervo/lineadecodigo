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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH37XA2H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCovvaKFVPXcAiPmvPGVRWeu%2FDtwYTpRIGFloilY9Z7KAIgKwDj1LEV7nT8llRGDLWgE2pcvzhlkN2iMUmYqjFbcVQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCKQkJ7Nm3koEYOGGircA6EAC3yicq5h7cKtCd6Oe15ZVBUZ3Eb7M0OljihBJ6D6SiOQQhKQJ%2BdWBw9q%2Bqp89pOfyzSzMXJDQvo4Gy9b3hDiKv7kScIqK%2F0jXGsS6vR2maXB6U1i6U0PAE5KBfEEAJqP3ToKgjDbIrU8BikhQArcR0dGjFLZkOJK1vLbYevfvXTaGnq1DszTw7l3ZE2%2BdmXBY%2BFfLU8NLf5CQYOGYq9kEaxP4nfhbwTogxk0gfdh4IFrQVi1FKYeyPI3cqOlTII01BA0I0KaKBlU9yiyIgY%2BwJZnf447EuAfwFJ0NpJ7K%2FlLPfxCIRRfQijgtzM9Dlk7%2FEn9nGC96zQwC8jlutcAqCeAQdE1se7ut%2FYFCSPFCRTBAJL2bcVsnvQa5pA1Icj20sNPyAwoP8xavyd01I9wbLTHojKhMGJiKaXYJ%2FMdhPU07aKywx75%2B9qAFk%2FG9a3AGWPxBInv3%2BFsWwstNmTibrV88Zxd9Kj7Mj4v5l9t2RBGYh1N%2FToEuLCmGGXUV51V4NFywPWjtWzaJvN8errYLGwzF1qLx%2BWyHpF7nNyraofLFIVEeX9IJ%2FWeAycVUBv75aiS5WJOtOMoLKFtWbFKLSMg9t5s%2BFlw7VbTMn%2FxG95qGi1DEiV8vKx7MNn7h8oGOqUBNKL6gMq4hgdQ4SgVyd56fLyZIeon%2FhP3hpnz%2FcJGOILHg2lJTKqjvV6rvv8CUUSryVMBp6XY%2Bt9oE7O7O9wTZ2p5Hcs8S4XDfLvVZEEaP5iiSs0cYtSlF%2BF1MJCJXUlF%2Fk6JGuykNvmVXnCvkrIyp9HKkLqTY%2FxtQFjTmZePAV7TcyBYJyhRRdwkgG0s3YxboZiANwoRtgON73lojWRHL9nkBFxc&X-Amz-Signature=92a86ae3cac4ec1e7eba65b4967ccddbf0365fb1f7d04ab8a361f726dd0ecb92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH37XA2H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCovvaKFVPXcAiPmvPGVRWeu%2FDtwYTpRIGFloilY9Z7KAIgKwDj1LEV7nT8llRGDLWgE2pcvzhlkN2iMUmYqjFbcVQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCKQkJ7Nm3koEYOGGircA6EAC3yicq5h7cKtCd6Oe15ZVBUZ3Eb7M0OljihBJ6D6SiOQQhKQJ%2BdWBw9q%2Bqp89pOfyzSzMXJDQvo4Gy9b3hDiKv7kScIqK%2F0jXGsS6vR2maXB6U1i6U0PAE5KBfEEAJqP3ToKgjDbIrU8BikhQArcR0dGjFLZkOJK1vLbYevfvXTaGnq1DszTw7l3ZE2%2BdmXBY%2BFfLU8NLf5CQYOGYq9kEaxP4nfhbwTogxk0gfdh4IFrQVi1FKYeyPI3cqOlTII01BA0I0KaKBlU9yiyIgY%2BwJZnf447EuAfwFJ0NpJ7K%2FlLPfxCIRRfQijgtzM9Dlk7%2FEn9nGC96zQwC8jlutcAqCeAQdE1se7ut%2FYFCSPFCRTBAJL2bcVsnvQa5pA1Icj20sNPyAwoP8xavyd01I9wbLTHojKhMGJiKaXYJ%2FMdhPU07aKywx75%2B9qAFk%2FG9a3AGWPxBInv3%2BFsWwstNmTibrV88Zxd9Kj7Mj4v5l9t2RBGYh1N%2FToEuLCmGGXUV51V4NFywPWjtWzaJvN8errYLGwzF1qLx%2BWyHpF7nNyraofLFIVEeX9IJ%2FWeAycVUBv75aiS5WJOtOMoLKFtWbFKLSMg9t5s%2BFlw7VbTMn%2FxG95qGi1DEiV8vKx7MNn7h8oGOqUBNKL6gMq4hgdQ4SgVyd56fLyZIeon%2FhP3hpnz%2FcJGOILHg2lJTKqjvV6rvv8CUUSryVMBp6XY%2Bt9oE7O7O9wTZ2p5Hcs8S4XDfLvVZEEaP5iiSs0cYtSlF%2BF1MJCJXUlF%2Fk6JGuykNvmVXnCvkrIyp9HKkLqTY%2FxtQFjTmZePAV7TcyBYJyhRRdwkgG0s3YxboZiANwoRtgON73lojWRHL9nkBFxc&X-Amz-Signature=837cc4a68ef97dd637b1a78fc2e7f86f32294277d876fb0bf3ce47668b8a253b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

