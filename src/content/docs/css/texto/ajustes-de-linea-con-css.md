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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5HXJSY5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe3nZ200iPcRm1zDALCAqpI7XigFLt4wxOZ03DCtBYIgIhAOPOf9MZhbqUXeEZ6sKMfA5VM8xp0lxLrtuUEkdiDIoPKv8DCHIQABoMNjM3NDIzMTgzODA1IgwQh%2FEjMnDn9Z5qsxsq3AMH0sHO0OFYGrviMKMgjBtHOErYI1bVh0ZrhAe0hmUsoXYpMmnzi2Rd1zyGQJUPLapoyDYFunMT6l9Xkv%2BgU87sUMeNRhAtyix74tGgte1EUdwmnX8sF0kWDgPozIZ%2FpTNKQEnnPiICA4v%2BdflkpXEFib9MG%2B%2FzX9VRT9GwwT4Ri8njDL2SEPosAFWcaXGs7EzWa3Ew8q3PER6v8mP0hzJjYgIKcqUNXlJZbDlHW4%2FaWIUoh8pZMZPqOfD0x%2BhpcXEMYrMHaGvT7U4MMhbwu2bSQpgxKVOaN6PmwW7tcSyOaBIND9LzvWbLIrtWpeEnOfifl13j02OBvTBOwlrMCxeUJb4nqqwYy4XJovfxtiRt20IqBCUlK19k7spAseIGIiojy3PMF7p%2BOJaogaU1vbIVmk3tK3QKUABAvRE8T%2FF6YejCxXFAd26hl53OwkS%2Fd0h9XFL0OQhruShCEt3DizRx2LUYFM1tBvILBwVy8TgcjlZEYdcbkizGDSRHDnKvu02Fiye5nLLAD9mUir2hrF%2FF8i1z17BuFsxIC8aiwF0ca2NsYjZZGCojN2YkfNreqndo4%2BNqZ2hFJpZtXd2U0i5oh%2BVHF8Ga7f5b%2Fry1NtwsJhH4zkBKNVZLJGY%2BKjDF%2B4fKBjqkAarGX6xyAkWyUAbxphprRjsfaBcmpj11tfrNOTGGd%2BIv0XQKqiy1Ulcv0rkXDruNiscoKW%2BpdzBLYuWRlEmVN2pVGPjxuYnrlL46nPnWA646DXxNa6%2BfzDAEHMKXLENLgM9gJz9xVzc8jipGt1prVHQ3c%2FEegZqV5WA%2Br%2BsK8sqPAt5GYVu00bT4eUuqMdWjTcjqrukFyaJQjJQM4GYzU%2FY%2BWrc6&X-Amz-Signature=5fd4b0ea694a9fc4b6ac35dbf3a510febff72f00741347d86929113f970808e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5HXJSY5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe3nZ200iPcRm1zDALCAqpI7XigFLt4wxOZ03DCtBYIgIhAOPOf9MZhbqUXeEZ6sKMfA5VM8xp0lxLrtuUEkdiDIoPKv8DCHIQABoMNjM3NDIzMTgzODA1IgwQh%2FEjMnDn9Z5qsxsq3AMH0sHO0OFYGrviMKMgjBtHOErYI1bVh0ZrhAe0hmUsoXYpMmnzi2Rd1zyGQJUPLapoyDYFunMT6l9Xkv%2BgU87sUMeNRhAtyix74tGgte1EUdwmnX8sF0kWDgPozIZ%2FpTNKQEnnPiICA4v%2BdflkpXEFib9MG%2B%2FzX9VRT9GwwT4Ri8njDL2SEPosAFWcaXGs7EzWa3Ew8q3PER6v8mP0hzJjYgIKcqUNXlJZbDlHW4%2FaWIUoh8pZMZPqOfD0x%2BhpcXEMYrMHaGvT7U4MMhbwu2bSQpgxKVOaN6PmwW7tcSyOaBIND9LzvWbLIrtWpeEnOfifl13j02OBvTBOwlrMCxeUJb4nqqwYy4XJovfxtiRt20IqBCUlK19k7spAseIGIiojy3PMF7p%2BOJaogaU1vbIVmk3tK3QKUABAvRE8T%2FF6YejCxXFAd26hl53OwkS%2Fd0h9XFL0OQhruShCEt3DizRx2LUYFM1tBvILBwVy8TgcjlZEYdcbkizGDSRHDnKvu02Fiye5nLLAD9mUir2hrF%2FF8i1z17BuFsxIC8aiwF0ca2NsYjZZGCojN2YkfNreqndo4%2BNqZ2hFJpZtXd2U0i5oh%2BVHF8Ga7f5b%2Fry1NtwsJhH4zkBKNVZLJGY%2BKjDF%2B4fKBjqkAarGX6xyAkWyUAbxphprRjsfaBcmpj11tfrNOTGGd%2BIv0XQKqiy1Ulcv0rkXDruNiscoKW%2BpdzBLYuWRlEmVN2pVGPjxuYnrlL46nPnWA646DXxNa6%2BfzDAEHMKXLENLgM9gJz9xVzc8jipGt1prVHQ3c%2FEegZqV5WA%2Br%2BsK8sqPAt5GYVu00bT4eUuqMdWjTcjqrukFyaJQjJQM4GYzU%2FY%2BWrc6&X-Amz-Signature=533e033bd025c6986bd5feb04c5a029b5524aaf06a70a86263423ad6291a4791&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

