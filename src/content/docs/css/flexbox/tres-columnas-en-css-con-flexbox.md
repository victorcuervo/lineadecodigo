---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA3KHHHT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T134818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAj6vWcTmFo8%2F%2FYvlSn3kF2%2FGPfK4hb9YksPgfJbu%2FGIAiEA31xAgBjERiCYApHZuL0sEZawI62sxmfHNgwALH0S3toqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhJjZokjQeOeXuylCrcA9FibZNvP2sVIK0OQpU8fQWZFmDxLVnx0TSsVjHTsvAV2dEUvKNhPDdJqwcY4Cv6x%2FtSfK%2BRLrLZ0kur6OrtgdEHKD9Ovt54yb5tfd7fanTq%2FUdBVYb8ttjJuzPtWKMC61Lfj0cpOMNmNZRcO%2BcUFVB%2BgO0ElzWQlOEzxZT2OV7VJcaB5v6mbb3zgNEE0pTtYKWmuyQ4ITfyCEtwoqfNqCZkzPC5uhYEUOUrLT9Ur1AE2RgDpQqxEDuAdia%2BZgZeppL50notrrF7RAkTeLHUQ2hvtD%2FeXmoV%2FQcctktxj5yhFTB2ctdrsBVaaOzpjUVcbKIvVrpn7IURJibryqx9UoWJQUYDK6iWKk4M37GnLRP0OtSXwap6E5SyjZYObvntiC0%2FFlyo0b3edfaWqorh33bhc8YcrQLm1AV7naDbTnmXhL4XvyEOQA4tbe3MTT%2BeLfNCnsGy1RDB%2Bmw9b3rEw%2F4YvOuy8bfCGE569hzUxJRuzV7qmfszjPpo4D%2BDVL%2Bm8jM9kD6zZEtnVtPUxU3SFtkTcJqVBKjvbzZzfLvJdJOc4QrxxxcyC0D0%2BR5BwRtWbEuPkV0Z%2BHNXuI5cE3RdmC91FFYL7OCY%2BnW4Og4kg7RVMD7pXByZTX1F4X9wMMGa1ckGOqUB0uYN2CquGN6Hxn6K%2Fbe8QyQ4yOTvPhW3M%2F35QmzJdXkehQZbwyFF8u3Inr4OrxQO%2FAjcx7SeY0d6IqvNVsO71oZd9HKGCSU2pCcKLRo8xX5yECb9Es%2BV%2FmC0C3ttOuLSl%2BAEesnAjR1O%2Fv7Ikwonejflp0A0pyiehwby1XBYRmCrc6OqRNmK1im7x5O8k7HW%2FP2CRC9DTV74ErGnRsEQnPFL2WKh&X-Amz-Signature=c685964a0c904ccc54246ea1f65d8335ffcb327117020e5be105ea70295e2e81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA3KHHHT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T134818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAj6vWcTmFo8%2F%2FYvlSn3kF2%2FGPfK4hb9YksPgfJbu%2FGIAiEA31xAgBjERiCYApHZuL0sEZawI62sxmfHNgwALH0S3toqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhJjZokjQeOeXuylCrcA9FibZNvP2sVIK0OQpU8fQWZFmDxLVnx0TSsVjHTsvAV2dEUvKNhPDdJqwcY4Cv6x%2FtSfK%2BRLrLZ0kur6OrtgdEHKD9Ovt54yb5tfd7fanTq%2FUdBVYb8ttjJuzPtWKMC61Lfj0cpOMNmNZRcO%2BcUFVB%2BgO0ElzWQlOEzxZT2OV7VJcaB5v6mbb3zgNEE0pTtYKWmuyQ4ITfyCEtwoqfNqCZkzPC5uhYEUOUrLT9Ur1AE2RgDpQqxEDuAdia%2BZgZeppL50notrrF7RAkTeLHUQ2hvtD%2FeXmoV%2FQcctktxj5yhFTB2ctdrsBVaaOzpjUVcbKIvVrpn7IURJibryqx9UoWJQUYDK6iWKk4M37GnLRP0OtSXwap6E5SyjZYObvntiC0%2FFlyo0b3edfaWqorh33bhc8YcrQLm1AV7naDbTnmXhL4XvyEOQA4tbe3MTT%2BeLfNCnsGy1RDB%2Bmw9b3rEw%2F4YvOuy8bfCGE569hzUxJRuzV7qmfszjPpo4D%2BDVL%2Bm8jM9kD6zZEtnVtPUxU3SFtkTcJqVBKjvbzZzfLvJdJOc4QrxxxcyC0D0%2BR5BwRtWbEuPkV0Z%2BHNXuI5cE3RdmC91FFYL7OCY%2BnW4Og4kg7RVMD7pXByZTX1F4X9wMMGa1ckGOqUB0uYN2CquGN6Hxn6K%2Fbe8QyQ4yOTvPhW3M%2F35QmzJdXkehQZbwyFF8u3Inr4OrxQO%2FAjcx7SeY0d6IqvNVsO71oZd9HKGCSU2pCcKLRo8xX5yECb9Es%2BV%2FmC0C3ttOuLSl%2BAEesnAjR1O%2Fv7Ikwonejflp0A0pyiehwby1XBYRmCrc6OqRNmK1im7x5O8k7HW%2FP2CRC9DTV74ErGnRsEQnPFL2WKh&X-Amz-Signature=7f2ec86f62215436379c9c53a760e1c0d9bac329972840c46573e8de79c35f45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

