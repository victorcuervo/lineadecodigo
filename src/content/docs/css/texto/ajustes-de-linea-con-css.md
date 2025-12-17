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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2LNPELR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWf3s2snQBfWeumiGaAc0%2B%2BRs0XpQOV3VGq8R%2Fpj5F7wIhAIxCsjzQaSCp0lzBFUyWxYgsRqGceJshXuWfo28hoNOzKv8DCHoQABoMNjM3NDIzMTgzODA1IgwIcX4bWb8NjxzSmBsq3AM7IQLwsmb014DAY8X0VumlRsC1IJgMi6tqZfixq0S%2FGahRHosbySyiZOZahSn4pYRaVw3%2F6HgKQ1JGn%2BRT8dBkyN%2FJLdXVtnfeV584ki3368IoVS1OG77%2Bas1Kq1NcHjzkGSzt60UzXiEfmy0wrqknFp2UCzF2uJqKG5%2Bb9BoHI7K%2BdoPhZ4zZ5FSpyNLabo5uDG4EIWMapnK%2F6E3iMHUghbdSfFD%2BxHnx%2FUa9jeOdWGZsEAZI9FfnxVtMunMNBXs2FgKMTd4COD5pU%2Bm4D1PAZ4ARFUQm4emM9SoOUtJd0Mna%2B%2BopWdZNivZlnpL2ExKhQcx9PubhcdbT%2F2scBQzJhdkq2ucXS7xzsWFA1JNbqHHVMCGER4QVpeb%2FXe4fb%2FQqdlcfu1eU7IoKkvuG1GhoYIoE6SnPb4Rv4%2FRLnjlh2j%2FjEREXa71%2FrtxwqdZmovgVLi8oZlvS264mRCrkxj4S8fTSvYeE7mI3tHdiDCBbFAQNK9k5TFosfWnQLw8oriGlrHT8A%2F09ZbSBtMvk2ROrMkExjJYwk0bL4QOrsXF0Sme5qVYhPfk5GF%2Fk0yxHf85RrdlPby6iu1Hl9jLwyv2GHBw05mdt36U1ALh73HyZao9a1pQhqbamsN5CizDh74nKBjqkAYKjxRq6l9M2vEFPZB3JjJaMGRqRnNxY22Ild4uJFib%2FXb4tJAYayDUXoHOGGA%2FIHRGEWQiaapa5Q9WhKGr%2F2RWdRiISpNmiUHItBG3NlAWC4gyyrcgjioh8bZRWH9peTSVrnLvYFWAGWUIJ4OKjPyYgKVzYcgs7YHoqNJMcMpec2Bm9z24m2dVhXqsHk6snHZybXMeXFzOXPht6YVF0ZeQ3TVlo&X-Amz-Signature=1265877f0a7909aa7e18b445c6984eb513f56d5472724217ae072259a8ab4127&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2LNPELR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWf3s2snQBfWeumiGaAc0%2B%2BRs0XpQOV3VGq8R%2Fpj5F7wIhAIxCsjzQaSCp0lzBFUyWxYgsRqGceJshXuWfo28hoNOzKv8DCHoQABoMNjM3NDIzMTgzODA1IgwIcX4bWb8NjxzSmBsq3AM7IQLwsmb014DAY8X0VumlRsC1IJgMi6tqZfixq0S%2FGahRHosbySyiZOZahSn4pYRaVw3%2F6HgKQ1JGn%2BRT8dBkyN%2FJLdXVtnfeV584ki3368IoVS1OG77%2Bas1Kq1NcHjzkGSzt60UzXiEfmy0wrqknFp2UCzF2uJqKG5%2Bb9BoHI7K%2BdoPhZ4zZ5FSpyNLabo5uDG4EIWMapnK%2F6E3iMHUghbdSfFD%2BxHnx%2FUa9jeOdWGZsEAZI9FfnxVtMunMNBXs2FgKMTd4COD5pU%2Bm4D1PAZ4ARFUQm4emM9SoOUtJd0Mna%2B%2BopWdZNivZlnpL2ExKhQcx9PubhcdbT%2F2scBQzJhdkq2ucXS7xzsWFA1JNbqHHVMCGER4QVpeb%2FXe4fb%2FQqdlcfu1eU7IoKkvuG1GhoYIoE6SnPb4Rv4%2FRLnjlh2j%2FjEREXa71%2FrtxwqdZmovgVLi8oZlvS264mRCrkxj4S8fTSvYeE7mI3tHdiDCBbFAQNK9k5TFosfWnQLw8oriGlrHT8A%2F09ZbSBtMvk2ROrMkExjJYwk0bL4QOrsXF0Sme5qVYhPfk5GF%2Fk0yxHf85RrdlPby6iu1Hl9jLwyv2GHBw05mdt36U1ALh73HyZao9a1pQhqbamsN5CizDh74nKBjqkAYKjxRq6l9M2vEFPZB3JjJaMGRqRnNxY22Ild4uJFib%2FXb4tJAYayDUXoHOGGA%2FIHRGEWQiaapa5Q9WhKGr%2F2RWdRiISpNmiUHItBG3NlAWC4gyyrcgjioh8bZRWH9peTSVrnLvYFWAGWUIJ4OKjPyYgKVzYcgs7YHoqNJMcMpec2Bm9z24m2dVhXqsHk6snHZybXMeXFzOXPht6YVF0ZeQ3TVlo&X-Amz-Signature=8c568b29168e7b9eb1db290f40e301e790c9f6be065cc742e919ae1b5cc4f31f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

