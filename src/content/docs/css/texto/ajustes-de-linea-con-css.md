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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VI4QJJV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHrNtGVR5hiZrLP%2BLblnXLYJ6QP9mvKBdj6%2FczRIh2%2FXAiEAkUzk2tPg6lJeivyFcnMYgubzrQwFzDQtgjulP1nhy9Aq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKFXu%2BRqQ2PrhmIkdyrcA%2BkC0cFBLOzAoBa50M02QtQxApxTDOtbk6iuqrDz%2BZz4NUA9uFuQi1EQNpBB0tZ68HGobDn5zI%2BRGJN8l4LimQv2DT3ea54QOCSp2En6yx8hzTy05LOWAyOC%2FeyfY%2BQs3t34AxdzKL4lvP1Zayer0jCQbi2BwnH%2BeHJK%2B1GYpElSXi9J639RitUf73wJcICJVBBCd%2FKqI9cpS8s7GvwKTwgIrBFQ%2BiAKO%2Fc%2FOYKOMWH1Ln%2BOJzqlWVMvyoFk1Uik1wOt6BTG6s0WJ3Z5rr7lliyOv3c%2F8VSi4xZ1uepynFPZ1cfsQtqV2EXNCQy0N3CDKXgGoks5LLv3hkccxES6F0nS2lSjWej5HV3zFXhzxMprudxLsCZ7W5hCdz4mrnaZGPEWR57jECFs2LTjlTFYgoifiG3Fn%2BBRlL9aQichOCKZ%2FqWzoRs2Y2pPEh7oVVsH0k7I%2BiO4SLe6khkQrhzTEH7lXfkzyex%2FUiwCMuUUY%2FXlNfH3qvfKthnB3SQ4rPYHE2Jc42wnVlhBxqurQQo5x0fznujqflq0EMR%2Bo7BgCVkbWCHnTYjsg2MBZmtU7%2FR3Iemp%2B337vTZ%2FL9tFbV64bxESuPhtaacFa2dLl111cAnAeeczZQwD8P8KqGZ8MLfhisoGOqUB%2F2H2D7u9PA667q8if8mJAilgmxmq%2FX5ygN7KjPw8LK8in0PuvFCa6VYrdxDzc6uZfHYlgxOlC70v8BUErEQZBTEUcyDFWewzjwVyYqM3xtMk7jY9DdjMcKwZIjLuQunirf10gX5JSN72Otd%2BZ8mWbZHeAjpqt2fSVuTO2r5Z9HPQhICsDRuiIerj6mZtv1okgDMd86H9paX3VurZ8J0N7LPHdvw1&X-Amz-Signature=cc46647a1974ffd52f7e4c3ba4bf83125af3205e2422fc089db1a867a012c053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VI4QJJV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHrNtGVR5hiZrLP%2BLblnXLYJ6QP9mvKBdj6%2FczRIh2%2FXAiEAkUzk2tPg6lJeivyFcnMYgubzrQwFzDQtgjulP1nhy9Aq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKFXu%2BRqQ2PrhmIkdyrcA%2BkC0cFBLOzAoBa50M02QtQxApxTDOtbk6iuqrDz%2BZz4NUA9uFuQi1EQNpBB0tZ68HGobDn5zI%2BRGJN8l4LimQv2DT3ea54QOCSp2En6yx8hzTy05LOWAyOC%2FeyfY%2BQs3t34AxdzKL4lvP1Zayer0jCQbi2BwnH%2BeHJK%2B1GYpElSXi9J639RitUf73wJcICJVBBCd%2FKqI9cpS8s7GvwKTwgIrBFQ%2BiAKO%2Fc%2FOYKOMWH1Ln%2BOJzqlWVMvyoFk1Uik1wOt6BTG6s0WJ3Z5rr7lliyOv3c%2F8VSi4xZ1uepynFPZ1cfsQtqV2EXNCQy0N3CDKXgGoks5LLv3hkccxES6F0nS2lSjWej5HV3zFXhzxMprudxLsCZ7W5hCdz4mrnaZGPEWR57jECFs2LTjlTFYgoifiG3Fn%2BBRlL9aQichOCKZ%2FqWzoRs2Y2pPEh7oVVsH0k7I%2BiO4SLe6khkQrhzTEH7lXfkzyex%2FUiwCMuUUY%2FXlNfH3qvfKthnB3SQ4rPYHE2Jc42wnVlhBxqurQQo5x0fznujqflq0EMR%2Bo7BgCVkbWCHnTYjsg2MBZmtU7%2FR3Iemp%2B337vTZ%2FL9tFbV64bxESuPhtaacFa2dLl111cAnAeeczZQwD8P8KqGZ8MLfhisoGOqUB%2F2H2D7u9PA667q8if8mJAilgmxmq%2FX5ygN7KjPw8LK8in0PuvFCa6VYrdxDzc6uZfHYlgxOlC70v8BUErEQZBTEUcyDFWewzjwVyYqM3xtMk7jY9DdjMcKwZIjLuQunirf10gX5JSN72Otd%2BZ8mWbZHeAjpqt2fSVuTO2r5Z9HPQhICsDRuiIerj6mZtv1okgDMd86H9paX3VurZ8J0N7LPHdvw1&X-Amz-Signature=fcc7e5de74a8fea2636f7d01cdb2db28326d752ee237a9f14696ec5db5630bb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

