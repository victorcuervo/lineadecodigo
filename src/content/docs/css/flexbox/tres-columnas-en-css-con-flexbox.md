---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLTNRSFW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T043350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBLS5ke4juXrQFz%2BCmH%2FgA%2FGWAnkH6i3f0rR94eXQtvKAiEAwr7xWeGh6ay9JfnYvfDZl3NvRBAq5EX%2Bd0r%2FyNOuesMq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDPg9q5wdvQm%2BtMy5ZCrcA0Qb9O3SuPGBEnd%2Fmpfb0mhFmKDaOiXzEkMdH8p%2BjaJ%2F27mUG8ahzT4E2TfYxyLDyxWi49l%2Fi9pChSEIKEVrdk4QzkJxs8by1Ydi2GdBzpe3GZIcP2UjGhfXp0Or%2BkuVoWPXRs3SHy8EcImmDyxrhXvncUN5ejKNBXNw61xjBKGGmfh71gzEfwS%2BKIqkaej8Cgr%2BbRN0JkdYCBLseUclKFe21UKo1Zw3A0cTRBfg9owq7CHbr326GocMXsYMvQklxfIh%2FLpDrFgssZbBWKe0NnHVLXojjOYUIlzSf8YVx0bc9VsmqADPm8plD1RSLwfT7ah80WxRK7LrYx%2B%2B8ISq7QmeN8qvU%2FLsqXnhP5AUcqRcNj2f2Vh4owVBHDB%2F3bTfNSU6LOFgxMg3YCltO5O2eAOyCzRl9bMkIxO%2BfBgjjWi2Rpa9X3Do5z%2FgmvVOaETUAxBWkdBj2XJYbJGIYby6oWOoXPTHACJ2crglFTUUOS54u5UoVZcbvEC8ouYLiP9XeUFhjUrcDEbQ00SxU1G4ppVYCScGBDLXeffRKrNCw2bzOxcLsBNmLbNlQPkZRl2EETWQrGHANjCpVwYAge%2BduyQjNfDPtgDrfKplwj6HJnm71WX4W%2BoSDESISKvPMMPezskGOqUB63uOUFVy91QID2rYCSlhi0qUW%2BYfaAmOLFADEfgGVG3aHV%2FwYt5NCIHCzCUZLifXjtt6GdkkkapmLR61IYR%2Fue%2BbtwE5Q5ItJutD2C9ku7A78mHtiLjxXVcNYXTi1YA%2B6hqedmjpIrdt2E4IcEhgZGlxqoLqh1zgw1zSAv9kj8fexabkDKJKfw6faYxFIqSeR6lpKntzGPf1cqCsktQ3KrKEyZFB&X-Amz-Signature=aa4ca7ced5fc4f3f82603de36bfb70c15f0cb5938deecdf14210cca19bb0d1a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLTNRSFW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T043350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBLS5ke4juXrQFz%2BCmH%2FgA%2FGWAnkH6i3f0rR94eXQtvKAiEAwr7xWeGh6ay9JfnYvfDZl3NvRBAq5EX%2Bd0r%2FyNOuesMq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDPg9q5wdvQm%2BtMy5ZCrcA0Qb9O3SuPGBEnd%2Fmpfb0mhFmKDaOiXzEkMdH8p%2BjaJ%2F27mUG8ahzT4E2TfYxyLDyxWi49l%2Fi9pChSEIKEVrdk4QzkJxs8by1Ydi2GdBzpe3GZIcP2UjGhfXp0Or%2BkuVoWPXRs3SHy8EcImmDyxrhXvncUN5ejKNBXNw61xjBKGGmfh71gzEfwS%2BKIqkaej8Cgr%2BbRN0JkdYCBLseUclKFe21UKo1Zw3A0cTRBfg9owq7CHbr326GocMXsYMvQklxfIh%2FLpDrFgssZbBWKe0NnHVLXojjOYUIlzSf8YVx0bc9VsmqADPm8plD1RSLwfT7ah80WxRK7LrYx%2B%2B8ISq7QmeN8qvU%2FLsqXnhP5AUcqRcNj2f2Vh4owVBHDB%2F3bTfNSU6LOFgxMg3YCltO5O2eAOyCzRl9bMkIxO%2BfBgjjWi2Rpa9X3Do5z%2FgmvVOaETUAxBWkdBj2XJYbJGIYby6oWOoXPTHACJ2crglFTUUOS54u5UoVZcbvEC8ouYLiP9XeUFhjUrcDEbQ00SxU1G4ppVYCScGBDLXeffRKrNCw2bzOxcLsBNmLbNlQPkZRl2EETWQrGHANjCpVwYAge%2BduyQjNfDPtgDrfKplwj6HJnm71WX4W%2BoSDESISKvPMMPezskGOqUB63uOUFVy91QID2rYCSlhi0qUW%2BYfaAmOLFADEfgGVG3aHV%2FwYt5NCIHCzCUZLifXjtt6GdkkkapmLR61IYR%2Fue%2BbtwE5Q5ItJutD2C9ku7A78mHtiLjxXVcNYXTi1YA%2B6hqedmjpIrdt2E4IcEhgZGlxqoLqh1zgw1zSAv9kj8fexabkDKJKfw6faYxFIqSeR6lpKntzGPf1cqCsktQ3KrKEyZFB&X-Amz-Signature=0d205c08af1dcf3c26c810f7d9ea28875e90842333859ff69fc7de36de5e1d28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

