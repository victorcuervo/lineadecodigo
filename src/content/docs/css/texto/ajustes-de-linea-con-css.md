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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B7B5TEK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg7jbBhutDA7IaKvcmPuMmIW%2FP1vBITpe4%2FbffYas%2F1AIhAN5AX%2FsqfKG2AWp1z94pp0jzffjd0ROTxl4VLIjUO0m%2FKv8DCHIQABoMNjM3NDIzMTgzODA1IgwgA3arcmPevDcb4Ecq3AN5gnWIOEgLR7y5N98FaGz9KUHyOGVH4qamNzloWGw57bbJiW4rG2GZdUDTHp%2BCFyGAf7tanVsyDfnmI1Uz8vAmUOVcn1XTj%2FvKi4eVBG3kAwZMS%2FAMzHOl7zir9Kja7pVLu71xQOstVS9vaGRAC8tssY4vGC738I2yNI3rwKCERSoSItqIz1r19n2a%2FUUsNTNT50KjrCwu2dfeRUP%2Bt4mL3jcvYG53FcJpuTBjrPNe06oKPEVzha8SHPtj4PDWDjILnZgPzMGCJM4BMOgHlBvMA4VM5bPXHHtp6r1hZTVocgyW6VudxK7NIJ%2FhYn4%2BBQ%2FPBCn5IueNR5ZmToW2Rp58VaeaQKw%2BjVtnhLUA6VD9ORkp%2Fw3df2aIDux1buauvxqevRi%2BThJ6UeAPLmIlN5P5WOLU4I3lKfujXuNBGWi1HXixb1p5skAqZzy4aOgydvTaEsgtLU3l8rfsez4PB4xKWFwnchUoDdM6udCEVeYQ%2FZ2%2F1EkiCCIgP8ddYOD0HI%2B2AZYbj1QCk9AwmN%2F%2Btg4Ry8RpB0EcWvfXHgD8pR5N%2FXzMJwQSqjeI0VFq%2F9CwPOcuqOx3oOGL1mMjFTA7gubFHRxajuw7AFr07c348TIux8puDyDJt9daqmqcCTDX%2B4fKBjqkASA4L%2BWRuZh%2FH9Iz2HNWz19m4R21UyknUFrw0HevDiIneyTkgaqyJlrfOgUx6mL2lP6r2B3VE%2F0vYBHDNU1IV2R6DUSbwA%2FQntvwVQUa4wTJwzahrOSgjfMRyJHcw2kMwy9gnR2Gda7JzfSXOlBEcFbfOfbB4HTXFbrPcSw40prOcEwGgPu2vg13jZV7TlSn3gymtIyV9UJaq%2BNA8p%2Fm3R5oZjJE&X-Amz-Signature=65a887781e434da05717f4afdc24b5975470f55ae2a887323438089883708f50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B7B5TEK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg7jbBhutDA7IaKvcmPuMmIW%2FP1vBITpe4%2FbffYas%2F1AIhAN5AX%2FsqfKG2AWp1z94pp0jzffjd0ROTxl4VLIjUO0m%2FKv8DCHIQABoMNjM3NDIzMTgzODA1IgwgA3arcmPevDcb4Ecq3AN5gnWIOEgLR7y5N98FaGz9KUHyOGVH4qamNzloWGw57bbJiW4rG2GZdUDTHp%2BCFyGAf7tanVsyDfnmI1Uz8vAmUOVcn1XTj%2FvKi4eVBG3kAwZMS%2FAMzHOl7zir9Kja7pVLu71xQOstVS9vaGRAC8tssY4vGC738I2yNI3rwKCERSoSItqIz1r19n2a%2FUUsNTNT50KjrCwu2dfeRUP%2Bt4mL3jcvYG53FcJpuTBjrPNe06oKPEVzha8SHPtj4PDWDjILnZgPzMGCJM4BMOgHlBvMA4VM5bPXHHtp6r1hZTVocgyW6VudxK7NIJ%2FhYn4%2BBQ%2FPBCn5IueNR5ZmToW2Rp58VaeaQKw%2BjVtnhLUA6VD9ORkp%2Fw3df2aIDux1buauvxqevRi%2BThJ6UeAPLmIlN5P5WOLU4I3lKfujXuNBGWi1HXixb1p5skAqZzy4aOgydvTaEsgtLU3l8rfsez4PB4xKWFwnchUoDdM6udCEVeYQ%2FZ2%2F1EkiCCIgP8ddYOD0HI%2B2AZYbj1QCk9AwmN%2F%2Btg4Ry8RpB0EcWvfXHgD8pR5N%2FXzMJwQSqjeI0VFq%2F9CwPOcuqOx3oOGL1mMjFTA7gubFHRxajuw7AFr07c348TIux8puDyDJt9daqmqcCTDX%2B4fKBjqkASA4L%2BWRuZh%2FH9Iz2HNWz19m4R21UyknUFrw0HevDiIneyTkgaqyJlrfOgUx6mL2lP6r2B3VE%2F0vYBHDNU1IV2R6DUSbwA%2FQntvwVQUa4wTJwzahrOSgjfMRyJHcw2kMwy9gnR2Gda7JzfSXOlBEcFbfOfbB4HTXFbrPcSw40prOcEwGgPu2vg13jZV7TlSn3gymtIyV9UJaq%2BNA8p%2Fm3R5oZjJE&X-Amz-Signature=80c21d38e7b38a98b3628acc93f50765dd5bd4e5cc7ca0a18686b31890b44da2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

