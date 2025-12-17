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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DJIA5A7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCueeMNsbTyt5M2b%2BmDKK0%2FYq9firLr9lXE5KXwlrvKEAIgS7Tx5rY9r2jBcS0WKev3OhYnDo1I95ns2qgoACi2sbAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpQHbYzsVVBVXwIVircA1BzOlvcpl5JBnI5YfH4P98DkKuqCLBGd7waqgGDealitQUwVoUY8GLSedcYULV3ghGf8dIyTeRSGMA46yYjCdN%2FK5ZU2s%2FYRfh2R2O4gE7vPDOQFPaHPo8sfvGf4nFb%2FTRmyn0fwyZrin4Bjk18YVa8O2QY%2BkagLouFNtUzx2RxvGjEH%2BXZpMUime%2Brik0au95Hzs%2FNsdanJIWHZ7bz7XswE4jiR%2BS3uV5eLSfBFAeE0Gvte1F396blV%2F2EPRE9D%2BZoc4kJ67O9bDCVqtkOLU5LHbTIKChavtm1%2BjnuBR6qVr27rD4pj9wpTnPlrnw5iZ1LEzYDud8AeU9r7Ve4cG1L0G9%2F6dcP9NaKGDbUkc9oEjBlua2oHef9sHhL8kNkhtdxMKTJDvZFFqIExRYyppRkvqD8NmD%2BJtjlnk9v1mTBdCyJIpbCT2fQhVaUlVltY%2FGYyyn179JN55k5%2BX1vfdjcihp7Z24%2BVMgmun1vJrZAqCzdH%2FD%2B0MY79Af%2Fp7gRBVfNvvk5gnESvTZKtGSGOr6Y5kiQ1vvEW9eUrHOEd9OJoB9vIb0M%2FVKSGSBpD1C0awWlTbncHQwGbQ6HBs%2FCthuxpzNUoteLd3LzbPSNroKOKzxRz2oAy3bdiPrYMKafi8oGOqUBqcz1b4O9dEu9XSIjEm6O1FjmsCga8czwmNFZIdFDvMUsKOxsHiXzmCZnSoPut6wz8KFKmNWNGqLnzRO0BsFvid3VxLUo19nctVEn1SNn8WxbxNng7iaJGpRjI1ncRWnQsjsgEyzyjPNgN53khU2k53%2FJ%2FqwaBT1FxZCHB6mRW2DITojvHhgSiOSMOpQusJGb5ghzBDYhonepW9kf3E6Zt%2Fytv2El&X-Amz-Signature=6ce1cf837d03c2c1983844b07d932e02f9389e64f5e7a9c45ce9021175099792&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DJIA5A7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCueeMNsbTyt5M2b%2BmDKK0%2FYq9firLr9lXE5KXwlrvKEAIgS7Tx5rY9r2jBcS0WKev3OhYnDo1I95ns2qgoACi2sbAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpQHbYzsVVBVXwIVircA1BzOlvcpl5JBnI5YfH4P98DkKuqCLBGd7waqgGDealitQUwVoUY8GLSedcYULV3ghGf8dIyTeRSGMA46yYjCdN%2FK5ZU2s%2FYRfh2R2O4gE7vPDOQFPaHPo8sfvGf4nFb%2FTRmyn0fwyZrin4Bjk18YVa8O2QY%2BkagLouFNtUzx2RxvGjEH%2BXZpMUime%2Brik0au95Hzs%2FNsdanJIWHZ7bz7XswE4jiR%2BS3uV5eLSfBFAeE0Gvte1F396blV%2F2EPRE9D%2BZoc4kJ67O9bDCVqtkOLU5LHbTIKChavtm1%2BjnuBR6qVr27rD4pj9wpTnPlrnw5iZ1LEzYDud8AeU9r7Ve4cG1L0G9%2F6dcP9NaKGDbUkc9oEjBlua2oHef9sHhL8kNkhtdxMKTJDvZFFqIExRYyppRkvqD8NmD%2BJtjlnk9v1mTBdCyJIpbCT2fQhVaUlVltY%2FGYyyn179JN55k5%2BX1vfdjcihp7Z24%2BVMgmun1vJrZAqCzdH%2FD%2B0MY79Af%2Fp7gRBVfNvvk5gnESvTZKtGSGOr6Y5kiQ1vvEW9eUrHOEd9OJoB9vIb0M%2FVKSGSBpD1C0awWlTbncHQwGbQ6HBs%2FCthuxpzNUoteLd3LzbPSNroKOKzxRz2oAy3bdiPrYMKafi8oGOqUBqcz1b4O9dEu9XSIjEm6O1FjmsCga8czwmNFZIdFDvMUsKOxsHiXzmCZnSoPut6wz8KFKmNWNGqLnzRO0BsFvid3VxLUo19nctVEn1SNn8WxbxNng7iaJGpRjI1ncRWnQsjsgEyzyjPNgN53khU2k53%2FJ%2FqwaBT1FxZCHB6mRW2DITojvHhgSiOSMOpQusJGb5ghzBDYhonepW9kf3E6Zt%2Fytv2El&X-Amz-Signature=5f6bed851c1c2c2f964c6d3b44a499d419e8012f209c76ea470ab7060136a646&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

