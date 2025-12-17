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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXCCRY2D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMQUC%2BAlF9eZrjC5CsiAr94MtHPkeXiIx%2FG4FasOUGWAiEA8zafusRZ6i%2BNRVTmWMZat4z1eLcvSP461u9q19oxDIIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDH04RBO4V7GJCZo73SrcA%2FzRFeuO6dayTFTLoU7WpaQzJcfLSBbt4YAEwomA0%2FoqjfpU3u8PiipEqgX2ovWfRIOQiCLaAahpSQ4G07JKvq0LO0jc%2BxxtOVjps7i0UEOGHTSbCF6uyDFLypONAJwvZo8k1I6UhdpYKce6pK6DS%2FRb5qBho8KcVEbvIBQAi2IeMcg2k2UTnIdiFMedapk3fsQ1DqAd1VbU8g106iuW%2FcA466PJpJahaIehZEbBfvTMHjr%2FVtYRfOEcSGDZev6BfV8Ut6fatLW7Bre6zJlLsz7U0G6g09vyakfgzQAVWYNi9zndTTDrHQVtHrfZlu3%2Fqo5TdBdBpB2FPmY1scPXJHOhkzAGligNG%2Bpc59zxb%2FVydvqKZ%2B12EsdpEFJz%2Fb%2F%2Fli1aNJaKlBrvh67X5pXG9q0LKV5tSv9z54rtoXQCQwd8dz2Et17xPJ8h5R%2FQhHPz0Fo%2FOQ977i7rOc13sYB2%2F%2Bc7I%2BhoswyDTS32NVIV3GrPMt%2FOu17R%2FhO59o6sghgx%2F%2Bq7aDA8G6QAj877cO8l88etjeytYko0GchRUkUvFr2hflazet1Ymvx6Y9R9IROASs%2FNTDumYP23MgnQZ%2F%2FEr7EnfPse%2BIbfCjOes4XJXpnMtiWzDBJiRcM4oFJkMOaqisoGOqUBj4mSSyVq%2Bu6y%2FpJFHDUPK6MZWYz%2FUZIM5SWnbKU6YCuUBEFbI49Z%2B0sQ541FLOqbJrap7%2BPL1rWK92gKBzhv5gZMIRqGkrz4H3lhDsmLVeUpoMT6NkE4CvHoxq9OtEZhsYYWw%2BngGLbFL5rpNCXcKtgdDrdVET%2BlZyffs8G1sWodP%2FZvHoqK%2BoKJixz%2FaH0MClUMpgfyfLFwpx9llMlpxrozcvtO&X-Amz-Signature=81c8416cd0dd121b83748ffe3b098fd085ff7f2ad75d9f545d2192ada95b8bc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXCCRY2D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMQUC%2BAlF9eZrjC5CsiAr94MtHPkeXiIx%2FG4FasOUGWAiEA8zafusRZ6i%2BNRVTmWMZat4z1eLcvSP461u9q19oxDIIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDH04RBO4V7GJCZo73SrcA%2FzRFeuO6dayTFTLoU7WpaQzJcfLSBbt4YAEwomA0%2FoqjfpU3u8PiipEqgX2ovWfRIOQiCLaAahpSQ4G07JKvq0LO0jc%2BxxtOVjps7i0UEOGHTSbCF6uyDFLypONAJwvZo8k1I6UhdpYKce6pK6DS%2FRb5qBho8KcVEbvIBQAi2IeMcg2k2UTnIdiFMedapk3fsQ1DqAd1VbU8g106iuW%2FcA466PJpJahaIehZEbBfvTMHjr%2FVtYRfOEcSGDZev6BfV8Ut6fatLW7Bre6zJlLsz7U0G6g09vyakfgzQAVWYNi9zndTTDrHQVtHrfZlu3%2Fqo5TdBdBpB2FPmY1scPXJHOhkzAGligNG%2Bpc59zxb%2FVydvqKZ%2B12EsdpEFJz%2Fb%2F%2Fli1aNJaKlBrvh67X5pXG9q0LKV5tSv9z54rtoXQCQwd8dz2Et17xPJ8h5R%2FQhHPz0Fo%2FOQ977i7rOc13sYB2%2F%2Bc7I%2BhoswyDTS32NVIV3GrPMt%2FOu17R%2FhO59o6sghgx%2F%2Bq7aDA8G6QAj877cO8l88etjeytYko0GchRUkUvFr2hflazet1Ymvx6Y9R9IROASs%2FNTDumYP23MgnQZ%2F%2FEr7EnfPse%2BIbfCjOes4XJXpnMtiWzDBJiRcM4oFJkMOaqisoGOqUBj4mSSyVq%2Bu6y%2FpJFHDUPK6MZWYz%2FUZIM5SWnbKU6YCuUBEFbI49Z%2B0sQ541FLOqbJrap7%2BPL1rWK92gKBzhv5gZMIRqGkrz4H3lhDsmLVeUpoMT6NkE4CvHoxq9OtEZhsYYWw%2BngGLbFL5rpNCXcKtgdDrdVET%2BlZyffs8G1sWodP%2FZvHoqK%2BoKJixz%2FaH0MClUMpgfyfLFwpx9llMlpxrozcvtO&X-Amz-Signature=424b63ce04a5a2ccaf33d22ef0ab9cd1d5b22f1755d7850d7de9dd64f119e377&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

