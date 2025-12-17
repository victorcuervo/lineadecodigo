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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z3I5MLI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSbvDbFjZ2kZiIydcVdV%2BU9tMpHTRFe2EVDpXeTeUtogIgFxKonSwwhPf5ejDEHU2JwCK9QjFPm4HbdbQkHXf7MFQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPHTPvEyWs11zsvAAircA7Tdx0I8wCWDXuCgDDZJyQ0Au1oxwoc4MA2bU1RX%2BTNYCjKWRPGnSTgeb1mQTFg3tEcwis5iOuJ4Or7%2FklPxRfLWypfCuDnSgKKJ9Dzu%2F%2BEwmzBQZpqHyLoNTi0aoKpoPIUWauIUXQo%2FuNBvA%2FYBC70SPgQDbaQlEDy1nV3O6R9l8G6iiSHAvnaGkiWadB%2FDJCOl2Uju55ZOFfxPhLQvAqAkShqpngSqxx97PcZUrMvjOLlM4KYGpn1usAjF%2Ffk4YR8BmsgSrBYhoFMdS7CyPqB05UfxhyxvsbhNcy7FvEybh%2FnPcki10jba8btpo15CvtPJPjm3r4g3ZBQFsRY%2B3Fszv9TeoUM774SIosKaGiwWEN%2BFejuIlq1Vx%2BpVPfwkxT7qpxldvO58g38e3TFZPp1MCxbFBWcR8tYof4m9jUejfcNCHsuRLwBiHPIUt3MNRDM%2FggC2DIXb%2BD6vKp6wJvbhgC9CitOyg6u1sDtVaeiEK2eNNtHFju9jf%2FpG8uJ%2F0TBGzwOqSWZOnkcFzRj7D5j6cwnXkQIlJ2SvgJytPBkFPlv1FGvy%2FbTf1GO%2Bio4%2B%2BE3dnCy6aF%2FhWhXjMtc%2FNMXmO60mO5oCiBA25oJvQDVOCdeWZb8gtqyBXVoPMK%2FOiMoGOqUBhc6zDhgrxmGNgYbsgLoWXOH3YsL1VsE5t7oyCPPJRt5tS4tEbueDtOUZAh4MY%2BO4WeX5%2FYQOP4Ti%2Be8Py%2BtcAeKIf%2Fm5k6Jn%2FoiWurmirIrDV5wfkIMxw%2FN0CkE%2BcAKH9OgXEa2P%2B1qukqfQqovYM8kaR%2F0zxHhU8HPYp8awyzqxBfr3LSGiz9Vp0dVd%2F8OwXFSUpdnLyRSldUVbaeM7sQPZ%2FiAJ&X-Amz-Signature=631e9a87d559fa2ac0897aa77a88f0d11badb632b117aaed7094eb48a696b14b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z3I5MLI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSbvDbFjZ2kZiIydcVdV%2BU9tMpHTRFe2EVDpXeTeUtogIgFxKonSwwhPf5ejDEHU2JwCK9QjFPm4HbdbQkHXf7MFQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPHTPvEyWs11zsvAAircA7Tdx0I8wCWDXuCgDDZJyQ0Au1oxwoc4MA2bU1RX%2BTNYCjKWRPGnSTgeb1mQTFg3tEcwis5iOuJ4Or7%2FklPxRfLWypfCuDnSgKKJ9Dzu%2F%2BEwmzBQZpqHyLoNTi0aoKpoPIUWauIUXQo%2FuNBvA%2FYBC70SPgQDbaQlEDy1nV3O6R9l8G6iiSHAvnaGkiWadB%2FDJCOl2Uju55ZOFfxPhLQvAqAkShqpngSqxx97PcZUrMvjOLlM4KYGpn1usAjF%2Ffk4YR8BmsgSrBYhoFMdS7CyPqB05UfxhyxvsbhNcy7FvEybh%2FnPcki10jba8btpo15CvtPJPjm3r4g3ZBQFsRY%2B3Fszv9TeoUM774SIosKaGiwWEN%2BFejuIlq1Vx%2BpVPfwkxT7qpxldvO58g38e3TFZPp1MCxbFBWcR8tYof4m9jUejfcNCHsuRLwBiHPIUt3MNRDM%2FggC2DIXb%2BD6vKp6wJvbhgC9CitOyg6u1sDtVaeiEK2eNNtHFju9jf%2FpG8uJ%2F0TBGzwOqSWZOnkcFzRj7D5j6cwnXkQIlJ2SvgJytPBkFPlv1FGvy%2FbTf1GO%2Bio4%2B%2BE3dnCy6aF%2FhWhXjMtc%2FNMXmO60mO5oCiBA25oJvQDVOCdeWZb8gtqyBXVoPMK%2FOiMoGOqUBhc6zDhgrxmGNgYbsgLoWXOH3YsL1VsE5t7oyCPPJRt5tS4tEbueDtOUZAh4MY%2BO4WeX5%2FYQOP4Ti%2Be8Py%2BtcAeKIf%2Fm5k6Jn%2FoiWurmirIrDV5wfkIMxw%2FN0CkE%2BcAKH9OgXEa2P%2B1qukqfQqovYM8kaR%2F0zxHhU8HPYp8awyzqxBfr3LSGiz9Vp0dVd%2F8OwXFSUpdnLyRSldUVbaeM7sQPZ%2FiAJ&X-Amz-Signature=f8437f62bafb08c1cd3f368512f2f4bf171e6abb605a323654e2e61020833595&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

