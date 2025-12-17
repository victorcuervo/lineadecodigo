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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U27MAJMQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbUiET38BCBp1ptsn79eOozS4D0w4aZsMJVIWvP6x4HAIgZKIRaRZDbNfMb0SXn%2B%2FGjYe2HSGaObCr%2FhDLr%2FgZ9sgq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDN1lC%2FQOJCVC6ZxDRCrcA8WeOqeMdwilmhcdviU%2BMKmvb2EfpZMORGshYAmzGYfSZDJAWsg9oH%2BCeXficv39LnMFDN4bdD7I2qQ2%2FHylp2fmVYWBooTGCyfD0bo%2BNEIdiXA%2BycjQgyuJUHwHkx%2FPj5BnUkAMNrqKFJpV5yF9FQUQSXCkwwMnnAGJqYxsDoF6zwLmoOFIhdY38w%2FkWi3lKaPVFfmh99%2Bi%2BJCRf8t1kmsagDKx%2FZn6RNQ59cA9gWLm41YQDy%2FGyfCJORbD7AHl4RmIdPd%2BBF8JtUtbWrT3RfVBMLg6hTJKtJMDQCkxcRPHeZHDh%2BTpjWRxU6ZHq%2BxvEa5uX0aoaB1uD5nwJ35%2B7k9u5weK5Br26hKad4C95ScQlKzX0TEI8O1%2Bwzgm%2B2DNHk8Rl31zX6a5wpaMwJbsJFdvDzY%2F2r%2FlxfAqMk7quGwthpNIhjuN3DWDcapwrYWn4FUB7FJyd4eE%2FBPbyHS98XboC2Q4pXJaE1BWZmASjoy88FSndxSOqwM90JojmBUq4sB4tMKfGEr0tvDv3LHqcbWDFIfLjKTkTR3c9KTwiSOzlWmtnEQCKNci4SKre%2BCMbQj%2F8plVNDocuhjC6xBi3tb%2BHFLti2ZW9%2FZ%2BQknuIlKbLhkGZXlPww03WaS8MPWOisoGOqUB7XuD3Vwoh74FlSkjb1GIYi0l3o2vDX%2FdkupTigLmu4ILaEROxu4Z61aCWzhj2cVRe%2Bhe9AigfGhRhCVLlp%2BmZy7lLC5Zp6a%2BOUVnDIRcS2QXMQdF4n6Gco1SmfHMVx58NMBxHx7VbnpLEm3aABKGv4uho1YtHTCLlovkNoENswT5ODtBjHXS1TRnrB48ZRch1YxAiSChjZtHTam67VyDs24U2BYJ&X-Amz-Signature=e94e14665fe8e84d9ca36baa911b57db0799ce2547e269b6644883fbc262bd7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U27MAJMQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbUiET38BCBp1ptsn79eOozS4D0w4aZsMJVIWvP6x4HAIgZKIRaRZDbNfMb0SXn%2B%2FGjYe2HSGaObCr%2FhDLr%2FgZ9sgq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDN1lC%2FQOJCVC6ZxDRCrcA8WeOqeMdwilmhcdviU%2BMKmvb2EfpZMORGshYAmzGYfSZDJAWsg9oH%2BCeXficv39LnMFDN4bdD7I2qQ2%2FHylp2fmVYWBooTGCyfD0bo%2BNEIdiXA%2BycjQgyuJUHwHkx%2FPj5BnUkAMNrqKFJpV5yF9FQUQSXCkwwMnnAGJqYxsDoF6zwLmoOFIhdY38w%2FkWi3lKaPVFfmh99%2Bi%2BJCRf8t1kmsagDKx%2FZn6RNQ59cA9gWLm41YQDy%2FGyfCJORbD7AHl4RmIdPd%2BBF8JtUtbWrT3RfVBMLg6hTJKtJMDQCkxcRPHeZHDh%2BTpjWRxU6ZHq%2BxvEa5uX0aoaB1uD5nwJ35%2B7k9u5weK5Br26hKad4C95ScQlKzX0TEI8O1%2Bwzgm%2B2DNHk8Rl31zX6a5wpaMwJbsJFdvDzY%2F2r%2FlxfAqMk7quGwthpNIhjuN3DWDcapwrYWn4FUB7FJyd4eE%2FBPbyHS98XboC2Q4pXJaE1BWZmASjoy88FSndxSOqwM90JojmBUq4sB4tMKfGEr0tvDv3LHqcbWDFIfLjKTkTR3c9KTwiSOzlWmtnEQCKNci4SKre%2BCMbQj%2F8plVNDocuhjC6xBi3tb%2BHFLti2ZW9%2FZ%2BQknuIlKbLhkGZXlPww03WaS8MPWOisoGOqUB7XuD3Vwoh74FlSkjb1GIYi0l3o2vDX%2FdkupTigLmu4ILaEROxu4Z61aCWzhj2cVRe%2Bhe9AigfGhRhCVLlp%2BmZy7lLC5Zp6a%2BOUVnDIRcS2QXMQdF4n6Gco1SmfHMVx58NMBxHx7VbnpLEm3aABKGv4uho1YtHTCLlovkNoENswT5ODtBjHXS1TRnrB48ZRch1YxAiSChjZtHTam67VyDs24U2BYJ&X-Amz-Signature=662df1bb0763d7e7bf5577e43244868b40b5e753ee6fecbaafcd6499f60e4d2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

