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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CYIBLV5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFrPP%2FXjaBPSxP7KnXxIRKmwVUMxyKx5M8yzDK8ZnwuAiEAsheU%2Bf3oEQjHVvBPxKh6FDNuijyuZr7QG%2Bv6DhuKD7IqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJOJqSwTcORoFGzWircA0Vs2a7%2BGN%2FGaob4ovIZYTOjzS5RrbVuAVapUuuE2QTRFa5S7Ijt01BdwtxQaOgTkS9JD%2Ffh3vWWW1O9f5LZYNXr3wO2bJ%2BDINm3aCOkE1G5%2BUsQPXmuP9wWdLrEPVeLku4QVyu31RpRyH6fBbgQ5gOfHhF2JlPMGdtWnUav8aGBptcS%2BjeL6NVDu9sBQmjYPn0JSm8cyjEImaUUCuGwN3qzpPxfSbBptz8Hy56d5bIYEl3zNYtInYEZsUhO%2B55dd6LWxPhGQibqoenwtINlK%2FeYKpgfQ%2FyMFfWOB3zq7Ra68Pw7h8a%2Bw6u5bhWIKDXixkWxttD1KDhXT19XVDAeO3qHkGrgvNUIMe9LCW%2FLpYxO3k7KkYyZzpZ0vbvtLIpYQvLBlzlqnwLVcUYFx2DpVMq5uiHUaaoxH0BJfJTpy%2BIjfc5EdZQ1muF5g1qGQ9mgcJ4up73rlVoNHKJLZvisVQ%2F3HnfCLgekf5u2oxoHwHRT9%2BX9IkIz0mBa7q4T2TdYUFtP4Weh6LorqbUnLiNkr3vlcF%2BjNTcgSO%2FNSPzOBbSBG%2B36Ez0VL2HBO5UUVWtpsnbZMFjNxVw9pwTSjOU%2BBz5ByCFfocP7%2FtsLW6WwMPj%2BK8s7%2BvSovHlROO19ML%2BujMoGOqUBkT6pCf1Fvc0RjtjCWowIA8zrF20OUrgeEDjRiVucMnUZgcAnOIkAvIc6ahaFDWSIq6K59nFxIZJdCIRFNlm0ugm33Skp4yNasWu4xZ%2FjjERTcDFR%2BmLe%2Bcywdd7QHIHL9UmQuFD%2FTe3zNinF9G0H4Y3gDk%2B5uBqyzLmxQjHOD6%2FbszPsu%2FvKlueC0yYLuozrFcZaiC2uqCt9tdJoyf%2FY2u4OkW%2Fx&X-Amz-Signature=d0e57de1531fc12f98fb8356de1fcef5212af53ed764f1af66fd6debbc30cbda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CYIBLV5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFrPP%2FXjaBPSxP7KnXxIRKmwVUMxyKx5M8yzDK8ZnwuAiEAsheU%2Bf3oEQjHVvBPxKh6FDNuijyuZr7QG%2Bv6DhuKD7IqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJOJqSwTcORoFGzWircA0Vs2a7%2BGN%2FGaob4ovIZYTOjzS5RrbVuAVapUuuE2QTRFa5S7Ijt01BdwtxQaOgTkS9JD%2Ffh3vWWW1O9f5LZYNXr3wO2bJ%2BDINm3aCOkE1G5%2BUsQPXmuP9wWdLrEPVeLku4QVyu31RpRyH6fBbgQ5gOfHhF2JlPMGdtWnUav8aGBptcS%2BjeL6NVDu9sBQmjYPn0JSm8cyjEImaUUCuGwN3qzpPxfSbBptz8Hy56d5bIYEl3zNYtInYEZsUhO%2B55dd6LWxPhGQibqoenwtINlK%2FeYKpgfQ%2FyMFfWOB3zq7Ra68Pw7h8a%2Bw6u5bhWIKDXixkWxttD1KDhXT19XVDAeO3qHkGrgvNUIMe9LCW%2FLpYxO3k7KkYyZzpZ0vbvtLIpYQvLBlzlqnwLVcUYFx2DpVMq5uiHUaaoxH0BJfJTpy%2BIjfc5EdZQ1muF5g1qGQ9mgcJ4up73rlVoNHKJLZvisVQ%2F3HnfCLgekf5u2oxoHwHRT9%2BX9IkIz0mBa7q4T2TdYUFtP4Weh6LorqbUnLiNkr3vlcF%2BjNTcgSO%2FNSPzOBbSBG%2B36Ez0VL2HBO5UUVWtpsnbZMFjNxVw9pwTSjOU%2BBz5ByCFfocP7%2FtsLW6WwMPj%2BK8s7%2BvSovHlROO19ML%2BujMoGOqUBkT6pCf1Fvc0RjtjCWowIA8zrF20OUrgeEDjRiVucMnUZgcAnOIkAvIc6ahaFDWSIq6K59nFxIZJdCIRFNlm0ugm33Skp4yNasWu4xZ%2FjjERTcDFR%2BmLe%2Bcywdd7QHIHL9UmQuFD%2FTe3zNinF9G0H4Y3gDk%2B5uBqyzLmxQjHOD6%2FbszPsu%2FvKlueC0yYLuozrFcZaiC2uqCt9tdJoyf%2FY2u4OkW%2Fx&X-Amz-Signature=0f78659624adb62c6091a2179505ca0d08aea4ade9a5e4add59c86c80c5b9151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

