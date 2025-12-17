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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UB6VF4E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B6Z47Tz%2FxZdmGpVdyiXUrijZN0NIjMV1qCjkmCU7q%2FAIgAcxcNlXysTnJc56YlMhT6ikPTfp7tl6DjwCmB8Gz4gQq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLRG1K9HxG76hkCmVyrcA0RjfPerlIfZLpGC0kW4ZXCrE8MSKE2Wpyf5NHGxYBHUMGKXp8MF9c5j2UbwqBgfaubGMDkZq9uwk906gzlbkpYAxzBQQa%2BFKzOMACL5i%2Fl2baXApBzUHVjlZTHraV08UvVK8sp3Q5J0AtuEft344Hb%2Fkv%2BWKmorGY6ZCL9XbCFNp2MM2d2q9BEyLnai7k84PY0Gtu2uKDA40z6t7iWLeD8tCCrN5PWs6DhxnH3EjZodMquVk05Fju9yoh4NPDrgyT05B%2BN3fpJouvo%2BSU1nemCs0onVcc4FIafVyzwax1seap4lwjyrVonRzAzWlZsihD7uiaX%2BaLFRqJ1CF5FKIeKvzC2BVxiZIIQStlQUH8eqkM0JjZizm992ACUutobX6C7XxlkpLmnSiNpbFyCn5RWTwoMrQuZcF9f%2BAspWWWTC%2BN5PaNoHZt4Ru6nzt%2F%2F%2F9%2BkPMwy0BVbr1jY4IxUKUKMnmQ7bhvdrQl2vq0vs7lMJViWJGQRSSlEs1IxhfRAHrEdyHLBahTxFXiM5uagZ4uqeE%2BqR8KJoiNieLSOyf1e0Tj5ko9YYX%2FDvkr%2F0%2BqLFYtsGZ0pA9wWG6JNIwsX1F7Fkkhbtoy7EvGHD4epjn1DmuxXA%2F3DdkpVlNCgOMKnqiMoGOqUBydivnQHLEZwJKkE%2BfErfqh2HZbHf6Qoo5QYvvWhnxaN4z7gO8u7PBw7GGyccC%2BbDC1x0ktpHWGyIKMEY9Fx4cwEQn%2F0SEsiiZXPCvrXbEsBGWswy%2BH%2BLg4TovyWZS%2BoJILJ%2BXe%2BB9rIYUbOuIQRqnCv43mvAUIq32p%2BKRjaGn%2FuNLf6wO2ZO2l2%2FMf18vlooE9LvHLnCNLqSdWkzm6NCKWOBpdvk&X-Amz-Signature=8f3954bb74793f04b8bd2d09253de7391c4e26067aa9302ff64e5beb84122147&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UB6VF4E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B6Z47Tz%2FxZdmGpVdyiXUrijZN0NIjMV1qCjkmCU7q%2FAIgAcxcNlXysTnJc56YlMhT6ikPTfp7tl6DjwCmB8Gz4gQq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLRG1K9HxG76hkCmVyrcA0RjfPerlIfZLpGC0kW4ZXCrE8MSKE2Wpyf5NHGxYBHUMGKXp8MF9c5j2UbwqBgfaubGMDkZq9uwk906gzlbkpYAxzBQQa%2BFKzOMACL5i%2Fl2baXApBzUHVjlZTHraV08UvVK8sp3Q5J0AtuEft344Hb%2Fkv%2BWKmorGY6ZCL9XbCFNp2MM2d2q9BEyLnai7k84PY0Gtu2uKDA40z6t7iWLeD8tCCrN5PWs6DhxnH3EjZodMquVk05Fju9yoh4NPDrgyT05B%2BN3fpJouvo%2BSU1nemCs0onVcc4FIafVyzwax1seap4lwjyrVonRzAzWlZsihD7uiaX%2BaLFRqJ1CF5FKIeKvzC2BVxiZIIQStlQUH8eqkM0JjZizm992ACUutobX6C7XxlkpLmnSiNpbFyCn5RWTwoMrQuZcF9f%2BAspWWWTC%2BN5PaNoHZt4Ru6nzt%2F%2F%2F9%2BkPMwy0BVbr1jY4IxUKUKMnmQ7bhvdrQl2vq0vs7lMJViWJGQRSSlEs1IxhfRAHrEdyHLBahTxFXiM5uagZ4uqeE%2BqR8KJoiNieLSOyf1e0Tj5ko9YYX%2FDvkr%2F0%2BqLFYtsGZ0pA9wWG6JNIwsX1F7Fkkhbtoy7EvGHD4epjn1DmuxXA%2F3DdkpVlNCgOMKnqiMoGOqUBydivnQHLEZwJKkE%2BfErfqh2HZbHf6Qoo5QYvvWhnxaN4z7gO8u7PBw7GGyccC%2BbDC1x0ktpHWGyIKMEY9Fx4cwEQn%2F0SEsiiZXPCvrXbEsBGWswy%2BH%2BLg4TovyWZS%2BoJILJ%2BXe%2BB9rIYUbOuIQRqnCv43mvAUIq32p%2BKRjaGn%2FuNLf6wO2ZO2l2%2FMf18vlooE9LvHLnCNLqSdWkzm6NCKWOBpdvk&X-Amz-Signature=64604ad39d4b2b4e28c72db2e5f0c919e61c665a5ed1b9c6a73b35b00eca1dfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

