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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GSJRPFG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpkg%2BNE2tyiFnqMKG1b%2Fo7ryJzeo98AnXwSqSeaMTCbgIhAJJJhmfaqOKC4u9ipDxkNxwS439%2BhaLCDmDz2Bz4wvwYKv8DCHkQABoMNjM3NDIzMTgzODA1Igy4J7mLaBCm1dE2jigq3AOiEOiXgPMLDUPYJrlMWVGZtMAYEdjdIC3YgUvEsrFrXa0oKRFJix0dOqmOsvjcKy6E5ZDq4exisa4CMu6%2FZDC7Qf%2FhwhJ7mUTXOMOBNzSWUbL5WwwJ6Syl9Ztxvm2fTbJkt6IJVax2Pu46o0JSrgqFMFAyZt%2BloPQWQ0dx6uW1ejY%2B2WLpgDw6uRE8bV13%2BQ%2BYPF9Kju7sIupvIOnZXKjXUY9u31UOsXyEzBDHRI2jZCigu64LwgoRlsDjj%2BaDCi%2BlxzJJjMtFzzSFoJirQoDLjOJOO0W7DxgBQjFhygz5fPo%2F4tZC7p1aegvveQNuGtU%2B%2FpyeTbwMQZINSeWE9pJqdiY4kbOncKETmfb9MExNwlWPD4Qynzn9s14qGmRzOTirJCASKG2ZPp5N4rbB3O%2FBQS9GSL%2BuMl5V1hkT5n5Xdt%2Bh9OuK2Ngu%2Fs3d%2FOVtj4XCpQlhP9itCeeF9t%2FYEgdJV4wdEX8CRhhszQnejSLRx%2BOx%2F05TIiH%2BVPmUOXEJ1TAiFT5xFWR8%2BxoEnkNQcP92TVTca%2BazJq7hK%2FsPDjssQaIsxcXhAPEu9RVQ%2FP0O6tHFa8pYESXxKjGuXzr7ZaDYYSALsaVL%2Fy6c4Roj0Ow9Fl6Zugb8CNwQ%2FfhIzzC40onKBjqkAfWh7hUDALKOVrHk2lNi1tpWJXmAcG55C8bFxrBvY5rLL77Wk5NN9hyvSaM0nTfr%2BGDx%2FDdl5mpRJ%2FHXpk0IN4ghNW5lxX5Ra%2BWZ%2FMqQ39BG%2BcqN%2B0N5M6CCz5rMGfAVhodBofrOHpVfQQWICEHorXJpO%2FDdCwyNu0xcS%2Feuu3IHalGdDfXG8uk7ZzSsEOIwEGdWwVvTBXwgvydI8oSsVQ0w3KNY&X-Amz-Signature=55edf7590e7230af7e780a8e38b2a73f9cbcb0200ba9d19dab910fb9969fd2eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GSJRPFG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpkg%2BNE2tyiFnqMKG1b%2Fo7ryJzeo98AnXwSqSeaMTCbgIhAJJJhmfaqOKC4u9ipDxkNxwS439%2BhaLCDmDz2Bz4wvwYKv8DCHkQABoMNjM3NDIzMTgzODA1Igy4J7mLaBCm1dE2jigq3AOiEOiXgPMLDUPYJrlMWVGZtMAYEdjdIC3YgUvEsrFrXa0oKRFJix0dOqmOsvjcKy6E5ZDq4exisa4CMu6%2FZDC7Qf%2FhwhJ7mUTXOMOBNzSWUbL5WwwJ6Syl9Ztxvm2fTbJkt6IJVax2Pu46o0JSrgqFMFAyZt%2BloPQWQ0dx6uW1ejY%2B2WLpgDw6uRE8bV13%2BQ%2BYPF9Kju7sIupvIOnZXKjXUY9u31UOsXyEzBDHRI2jZCigu64LwgoRlsDjj%2BaDCi%2BlxzJJjMtFzzSFoJirQoDLjOJOO0W7DxgBQjFhygz5fPo%2F4tZC7p1aegvveQNuGtU%2B%2FpyeTbwMQZINSeWE9pJqdiY4kbOncKETmfb9MExNwlWPD4Qynzn9s14qGmRzOTirJCASKG2ZPp5N4rbB3O%2FBQS9GSL%2BuMl5V1hkT5n5Xdt%2Bh9OuK2Ngu%2Fs3d%2FOVtj4XCpQlhP9itCeeF9t%2FYEgdJV4wdEX8CRhhszQnejSLRx%2BOx%2F05TIiH%2BVPmUOXEJ1TAiFT5xFWR8%2BxoEnkNQcP92TVTca%2BazJq7hK%2FsPDjssQaIsxcXhAPEu9RVQ%2FP0O6tHFa8pYESXxKjGuXzr7ZaDYYSALsaVL%2Fy6c4Roj0Ow9Fl6Zugb8CNwQ%2FfhIzzC40onKBjqkAfWh7hUDALKOVrHk2lNi1tpWJXmAcG55C8bFxrBvY5rLL77Wk5NN9hyvSaM0nTfr%2BGDx%2FDdl5mpRJ%2FHXpk0IN4ghNW5lxX5Ra%2BWZ%2FMqQ39BG%2BcqN%2B0N5M6CCz5rMGfAVhodBofrOHpVfQQWICEHorXJpO%2FDdCwyNu0xcS%2Feuu3IHalGdDfXG8uk7ZzSsEOIwEGdWwVvTBXwgvydI8oSsVQ0w3KNY&X-Amz-Signature=0e664557681c3a8595185eead847cc2636297d6dbd8b2b774fefe4aff556e944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

