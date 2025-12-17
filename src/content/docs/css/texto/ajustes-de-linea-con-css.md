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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YZ3B2OP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr4udqDs5cUHL9BYjcYRC%2F6hHVBI7VgZMNVty3WsAhfAIhAKY24irKm4VoPjnRhNzlQTcNEDq0OnOjz7ESRCP%2Fx9JOKv8DCHQQABoMNjM3NDIzMTgzODA1IgyBODjJM4YHTST%2F69Iq3APGUoH0pF%2FU4ztC73iZFqM6c1C%2BygbyVtbtp4ch254uqqccXYkXpYdF9193NDBf8cI%2BpzSdLqqNWUTluTOY22hbicI%2BdNJPo7BuYsgDRXySlfmcTc1jW15FNJjseamkKsFtMBu%2BZ8%2BhAJqmZ%2FDCGeQYItKrmjdiue%2B3TMDuB7L2fOOlaAXwWBZt%2BAnh6pRxARQKC1vVLe1xxium%2BrwD%2Bif8Yukc8dnTKYC5eTi6me679fX%2F9yHvteMzpXPp297GSh1QANOzBSUEaaKUmoka5mewNZd6HsvLZf0n9Fuv%2FNgRJ%2FAgajL%2FDL8224UeIoGe9TsjD8VFrzkeMhaBux9UvrvyES9hjEF%2BewKah8fpILdIJLECX5zCSHmmv8CMnr4xlKYesOGE9be5ygPI4Zt42ARO4XaaQ%2FVDpQR7xdBiNiaE0OIWGfwALCXqhjNRugrGkoh81rcXKCWJ93UEFI3ZIDke1uz%2FXQhVCt0nJTpF1ULC%2B%2FnBDSrr85i1htgvTNnT0mXLIQyCFlYaB9dk9rRKTloNzdVnA2Cboc0bKEhbg4hHK%2F%2BHw01ljIpXGOupgOOiZK75orDuxS51NazFsgqSVWgggcxrQmfrZ93ESxoXGVRgybYQFR8ClB5kRp0iuDChs4jKBjqkAcQTAP%2Bod6IdPDeTBw%2FrDMCTFNmnn1KKCRpApyOJXIb3LnSYHWncaGGghx239jclrdjAHXzYjHKt2191l2iexyO%2Fe9Z8zcbsIhbAY5CeLZ%2BD1oa%2BrINWB0yTXnQB70EVGvcco9qFamh9cK4vKUz%2FQAgrFCHJzPhadgNyEBw%2FgBS5RrAJKFYjPe659Kdl%2FYaUl3auy58Hw6Fwzbk3rkeeMwOusydM&X-Amz-Signature=61199853c91280ff8a847222d559b2384d5cf426d235151169171e5b6f938fc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YZ3B2OP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr4udqDs5cUHL9BYjcYRC%2F6hHVBI7VgZMNVty3WsAhfAIhAKY24irKm4VoPjnRhNzlQTcNEDq0OnOjz7ESRCP%2Fx9JOKv8DCHQQABoMNjM3NDIzMTgzODA1IgyBODjJM4YHTST%2F69Iq3APGUoH0pF%2FU4ztC73iZFqM6c1C%2BygbyVtbtp4ch254uqqccXYkXpYdF9193NDBf8cI%2BpzSdLqqNWUTluTOY22hbicI%2BdNJPo7BuYsgDRXySlfmcTc1jW15FNJjseamkKsFtMBu%2BZ8%2BhAJqmZ%2FDCGeQYItKrmjdiue%2B3TMDuB7L2fOOlaAXwWBZt%2BAnh6pRxARQKC1vVLe1xxium%2BrwD%2Bif8Yukc8dnTKYC5eTi6me679fX%2F9yHvteMzpXPp297GSh1QANOzBSUEaaKUmoka5mewNZd6HsvLZf0n9Fuv%2FNgRJ%2FAgajL%2FDL8224UeIoGe9TsjD8VFrzkeMhaBux9UvrvyES9hjEF%2BewKah8fpILdIJLECX5zCSHmmv8CMnr4xlKYesOGE9be5ygPI4Zt42ARO4XaaQ%2FVDpQR7xdBiNiaE0OIWGfwALCXqhjNRugrGkoh81rcXKCWJ93UEFI3ZIDke1uz%2FXQhVCt0nJTpF1ULC%2B%2FnBDSrr85i1htgvTNnT0mXLIQyCFlYaB9dk9rRKTloNzdVnA2Cboc0bKEhbg4hHK%2F%2BHw01ljIpXGOupgOOiZK75orDuxS51NazFsgqSVWgggcxrQmfrZ93ESxoXGVRgybYQFR8ClB5kRp0iuDChs4jKBjqkAcQTAP%2Bod6IdPDeTBw%2FrDMCTFNmnn1KKCRpApyOJXIb3LnSYHWncaGGghx239jclrdjAHXzYjHKt2191l2iexyO%2Fe9Z8zcbsIhbAY5CeLZ%2BD1oa%2BrINWB0yTXnQB70EVGvcco9qFamh9cK4vKUz%2FQAgrFCHJzPhadgNyEBw%2FgBS5RrAJKFYjPe659Kdl%2FYaUl3auy58Hw6Fwzbk3rkeeMwOusydM&X-Amz-Signature=eece5efbab274d10778db3940557e59e7b31724738f425c637002bd295d97603&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

