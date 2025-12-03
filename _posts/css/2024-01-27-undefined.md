---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URYOXATM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T172512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCykmn2IT6fCz1Q61J2atk30G%2Be8rn1I%2B7sqtNpwEQotAIhALSRGR8D61r6VJDTXn%2BAzZ6xANHiFVceRIYeTZV8nlkKKv8DCDIQABoMNjM3NDIzMTgzODA1IgysjqQjwt7k0YrbuzYq3AMF12dXHgX7GfSg9%2BkrbyuNG0jT0z1OkNTts0xyIbLKYFTiVSI%2BvRouOb4Im5xebVe9r%2B1dmQMpXIUUKj3b2Jaj2wgKUabCEMs%2Byazp1%2FqBdt8mwl1CF%2FRi%2F2ZovFupaoT%2F7NoYeaFORYQOLfl9rv6J845ECqacbObGewsegCPOqgevH6yShpBdY6ZSq54g0V2eZZIEQJC0wn85bT0hqTBwqWcUZzlNxMGB5AinkkPtqfcJ8eV%2FQaDKgbZJoMdP1vQeMeVt8I1gAoMAJAlEJoTmTTuEYmgtRErNixWotm8kapO6GXGHEICnR3Boq6e1wmCY%2FSrdSX%2F7OSosSFnkoqQW8f6WOFkpFTVSi4GpQzpp9hM%2Bgmef0XS56TALoo%2FSdZqtTNMnH82vpBd7Ih9d6VupvJ4pAk3sl%2BUBRXVwVJRfq3PSd9aa43UxHxhlJm6mg8EnOFfesjuqA6y6N7jb1RD%2FO9BLvz%2BpoTNZG86peKXyJaijJZUX3kyhJOQqFeSmfUJZx83tI8Ria2eqdccCT2Iw76OH3yaV2BhM3V4qatqGGdYr%2F6RfNVKkD9n%2BNRicB7eXE2JJJt%2BXAHDgcKdFbZYHXjO5bD8afiyHaVvqoq09m1H2sl05VUUWI1nwojCn2sHJBjqkAc1RGHpXcM%2Bz6eshRYDFpBCAm5K%2BIM6ohfX88BZeyB6buqTvvxtcBzq%2FRyPNVz5Zof9%2FaJTYofrvES4JwHhe6npaimVuxWAskfnsP8wCtnPf0XRQrh0XI5uchDi84%2B60hUoZe2zMHc66X3sCl3PFx2%2FuTFX1Z0rKaim51EhgnnaKI%2BF30adMcYJQntPDcBK%2B6a5VwoemnvDIeY053McRQQFDG8ee&X-Amz-Signature=a7c778b0470ff4c1a906869f95e12f4bbf590e6787e5776c297e5eef48b796f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URYOXATM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T172512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCykmn2IT6fCz1Q61J2atk30G%2Be8rn1I%2B7sqtNpwEQotAIhALSRGR8D61r6VJDTXn%2BAzZ6xANHiFVceRIYeTZV8nlkKKv8DCDIQABoMNjM3NDIzMTgzODA1IgysjqQjwt7k0YrbuzYq3AMF12dXHgX7GfSg9%2BkrbyuNG0jT0z1OkNTts0xyIbLKYFTiVSI%2BvRouOb4Im5xebVe9r%2B1dmQMpXIUUKj3b2Jaj2wgKUabCEMs%2Byazp1%2FqBdt8mwl1CF%2FRi%2F2ZovFupaoT%2F7NoYeaFORYQOLfl9rv6J845ECqacbObGewsegCPOqgevH6yShpBdY6ZSq54g0V2eZZIEQJC0wn85bT0hqTBwqWcUZzlNxMGB5AinkkPtqfcJ8eV%2FQaDKgbZJoMdP1vQeMeVt8I1gAoMAJAlEJoTmTTuEYmgtRErNixWotm8kapO6GXGHEICnR3Boq6e1wmCY%2FSrdSX%2F7OSosSFnkoqQW8f6WOFkpFTVSi4GpQzpp9hM%2Bgmef0XS56TALoo%2FSdZqtTNMnH82vpBd7Ih9d6VupvJ4pAk3sl%2BUBRXVwVJRfq3PSd9aa43UxHxhlJm6mg8EnOFfesjuqA6y6N7jb1RD%2FO9BLvz%2BpoTNZG86peKXyJaijJZUX3kyhJOQqFeSmfUJZx83tI8Ria2eqdccCT2Iw76OH3yaV2BhM3V4qatqGGdYr%2F6RfNVKkD9n%2BNRicB7eXE2JJJt%2BXAHDgcKdFbZYHXjO5bD8afiyHaVvqoq09m1H2sl05VUUWI1nwojCn2sHJBjqkAc1RGHpXcM%2Bz6eshRYDFpBCAm5K%2BIM6ohfX88BZeyB6buqTvvxtcBzq%2FRyPNVz5Zof9%2FaJTYofrvES4JwHhe6npaimVuxWAskfnsP8wCtnPf0XRQrh0XI5uchDi84%2B60hUoZe2zMHc66X3sCl3PFx2%2FuTFX1Z0rKaim51EhgnnaKI%2BF30adMcYJQntPDcBK%2B6a5VwoemnvDIeY053McRQQFDG8ee&X-Amz-Signature=964faa5a7713518bd28aa4ffa1fdf0b9f490e4d43988846f24f601c7c36e4279&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

