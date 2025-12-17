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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYSCPRMN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6WvmrQJiW1hDLIplIAnZJGIBE3zDd3j6OSCxpUS9U2AiEA%2FGCxgo70uW65w7CvWM0DlqqXC0GAPDf85oznyDSpBToq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFYhktqi3fg4ge8cTSrcA7RS93u3quknSV6I9Co8OghN18cWg%2FbvYF1EiXbnHI2%2FGIGwNI%2FS9ngv0tXuL7JgV5a%2Bi%2BSlzOD2LqYM5cN4uz%2FcnSb4BiERbDnsb2sP4wBDlUAcSAf6kh6023cRBXwhMX5pL6TJ8hz5zzFfp%2B1seR1T2zvr7IiMga3nsCE0g1%2FWW3gAtjn2AtOdIGGUr3hZUvSOEmhKlKz5vQJSI9h6P2EDz9UPzf%2FKA9%2BmCCuu51ic7k0%2FpDp7%2B4INIowBpDO9zBT%2Br0JEtdChuCKqv5%2FdQdQoevTBDVUIn1svJImXbsRsK%2BZBvUbHpPBj4l6Na7P4nRuhLNi3%2FfNFh8VTTrCxrEHnN1gWS6lb8wibmWzvUYadfoJE%2FfgJ6rnlJ5yPlN%2BjIcZiRjA9K3B7NEaurpoyEL5gUqRE72IwTasej9NuF6LIIJMXLG6pUXoquBO5sje7bYrzPBlkKmmJFJIEDC4IY99z7jWaL0mCiwCXfOdiY3OM%2B2YLEAXlnJfJq4Olkis9aDjveKC2B05P7qzt11pY%2BA1jqOyeALi8YXkeFIclC9bajoP1OVHHrYRAi12z4DuwaHVkfJlQrXxgiRMw0XR8glYB0QiLeJAiQ9WqsX7gN0uECi4i%2FXceWR3jOsdZMMeqisoGOqUBS4dCKl%2Flm%2Fmeqkx7ZVApE7bFhSKSMLVuYXumS1h0n%2F29SMxmN1i%2FFYdo%2BaiuveAimk1JpAEzrtyR1ybkIOKpPPwWpC%2BAY3iUYe%2FW9crTyEdEUyNuG9mkcWTYm3pLAqTKV7FisrmF7APkCB8ciaq%2BUroY0e4uSJknyvK0ImCs4TeUQde4LLtI4Z4KIxbJNjZ1%2Bfzw54si4aagaDwlIkR06G8l0G%2Fo&X-Amz-Signature=de514bd81f9cc4f726a59c35f3ff8d6f56f8168d9a020258addea1a369857778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYSCPRMN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6WvmrQJiW1hDLIplIAnZJGIBE3zDd3j6OSCxpUS9U2AiEA%2FGCxgo70uW65w7CvWM0DlqqXC0GAPDf85oznyDSpBToq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFYhktqi3fg4ge8cTSrcA7RS93u3quknSV6I9Co8OghN18cWg%2FbvYF1EiXbnHI2%2FGIGwNI%2FS9ngv0tXuL7JgV5a%2Bi%2BSlzOD2LqYM5cN4uz%2FcnSb4BiERbDnsb2sP4wBDlUAcSAf6kh6023cRBXwhMX5pL6TJ8hz5zzFfp%2B1seR1T2zvr7IiMga3nsCE0g1%2FWW3gAtjn2AtOdIGGUr3hZUvSOEmhKlKz5vQJSI9h6P2EDz9UPzf%2FKA9%2BmCCuu51ic7k0%2FpDp7%2B4INIowBpDO9zBT%2Br0JEtdChuCKqv5%2FdQdQoevTBDVUIn1svJImXbsRsK%2BZBvUbHpPBj4l6Na7P4nRuhLNi3%2FfNFh8VTTrCxrEHnN1gWS6lb8wibmWzvUYadfoJE%2FfgJ6rnlJ5yPlN%2BjIcZiRjA9K3B7NEaurpoyEL5gUqRE72IwTasej9NuF6LIIJMXLG6pUXoquBO5sje7bYrzPBlkKmmJFJIEDC4IY99z7jWaL0mCiwCXfOdiY3OM%2B2YLEAXlnJfJq4Olkis9aDjveKC2B05P7qzt11pY%2BA1jqOyeALi8YXkeFIclC9bajoP1OVHHrYRAi12z4DuwaHVkfJlQrXxgiRMw0XR8glYB0QiLeJAiQ9WqsX7gN0uECi4i%2FXceWR3jOsdZMMeqisoGOqUBS4dCKl%2Flm%2Fmeqkx7ZVApE7bFhSKSMLVuYXumS1h0n%2F29SMxmN1i%2FFYdo%2BaiuveAimk1JpAEzrtyR1ybkIOKpPPwWpC%2BAY3iUYe%2FW9crTyEdEUyNuG9mkcWTYm3pLAqTKV7FisrmF7APkCB8ciaq%2BUroY0e4uSJknyvK0ImCs4TeUQde4LLtI4Z4KIxbJNjZ1%2Bfzw54si4aagaDwlIkR06G8l0G%2Fo&X-Amz-Signature=00dbbf692b9366477bc9790de2b29870fd3f6625ff6401716ecadb65788b39f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

